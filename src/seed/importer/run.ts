import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

import type { CollectionSlug, Payload } from 'payload'

import { SITE_TEXT_DEFAULTS } from '../../payload/globals/siteTextDefaults'
import { pathFor, slugify } from '../../payload/utilities/routes'
import { communes as rawCommunes } from '../data/communes'
import { contactForm as rawContactForm } from '../data/forms'
import * as rawSettings from '../data/settings'
import type { SeedArticle, SeedFaq, SeedPage, SeedProject, SeedService, SeedValidationPoint } from '../types'
import { createContext, nfc, photoIndex, resolvePath, type SeedContext } from './context'
import { typeset } from './typography'
import { block, hero, link, parseTitle, photo, photos, richText } from './convert'

// Every text of the initial content, in French typography (’, non-breaking spaces).
const seedCommunes = typeset(rawCommunes)
const contactForm = typeset(rawContactForm)
const settings = typeset({ ...rawSettings })

type Doc = SeedPage | SeedService | SeedArticle
type Json = Record<string, unknown>

export type SeedOptions = {
  /** Upload photos again even if they already exist. */
  refreshMedia?: boolean
  adminUsername?: string
  adminPassword?: string
  adminEmail?: string
  editorPassword?: string
  /** Only create the accounts (content import postponed). */
  accountsOnly?: boolean
  /** Only check the photo library: upload again the photos whose files are missing from storage. */
  repairMediaOnly?: boolean
}

const MANIFEST = '3b-charpente-kit/photos-chantiers/manifest.json'

const STOP_WORDS = new Set(['d', 'un', 'une', 'a', 'l', 'le', 'les', 'de', 'des', 'du', 'au', 'aux', 'et', 'en', 'sur', 'dans'])

/** "Réfection d'une charpente à L'Argentière-la-Bessée" → "refection-charpente-argentiere-la-bessee". */
function filePrefix(text: string, max = 52) {
  const words = slugify(text)
    .split('-')
    .filter((word) => !STOP_WORDS.has(word))
  let out = ''
  for (const word of words) {
    if ((out ? out.length + 1 : 0) + word.length > max) break
    out = out ? `${out}-${word}` : word
  }
  return out
}

async function loadModules<T>(dir: string, key: string): Promise<{ file: string; data: T }[]> {
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.ts'))
    .sort()
  const out: { file: string; data: T }[] = []
  for (const file of files) {
    const mod = (await import(pathToFileURL(path.join(dir, file)).href)) as Record<string, T>
    const data = mod[key] ?? (Object.values(mod).find((value) => value && typeof value === 'object') as T)
    if (data) out.push({ file, data: typeset(data) })
  }
  return out
}

async function findOne(payload: Payload, collection: CollectionSlug, where: Json) {
  const { docs } = await payload.find({ collection, where: where as never, limit: 1, depth: 0, draft: true, pagination: false })
  return docs[0] as (Json & { id: number }) | undefined
}

/** Create or update a document identified by `where`. */
async function upsert(ctx: SeedContext, collection: CollectionSlug, where: Json, data: Json, draft = false) {
  const existing = await findOne(ctx.payload, collection, where)
  const args = { collection, data: data as never, depth: 0, draft, context: ctx.opContext }
  if (existing) {
    const updated = await ctx.payload.update({ ...args, id: existing.id })
    return updated as unknown as Json & { id: number }
  }
  return (await ctx.payload.create(args)) as unknown as Json & { id: number }
}

/* ------------------------------------------------------------------ */
/* Photos                                                              */
/* ------------------------------------------------------------------ */

type MediaDoc = { sourceKey?: string | null; url?: string | null; sizes?: Record<string, { url?: string | null } | undefined> | null }

/** Source keys of the photos whose original or one of its sizes cannot be read from storage. */
async function missingFiles(docs: MediaDoc[]) {
  const checks = docs.flatMap((doc) =>
    doc.sourceKey
      ? [doc.url, ...Object.values(doc.sizes ?? {}).map((size) => size?.url)]
          .filter((url): url is string => Boolean(url && /^https?:\/\//.test(url)))
          .map((url) => ({ key: doc.sourceKey!, url }))
      : [],
  )
  const missing = new Set<string>()
  const worker = async () => {
    for (let check = checks.shift(); check; check = checks.shift()) {
      if (missing.has(check.key)) continue
      const response = await fetch(check.url, { method: 'HEAD', cache: 'no-store' }).catch(() => null)
      if (!response || response.status === 404) missing.add(check.key)
    }
  }
  await Promise.all(Array.from({ length: 12 }, worker))
  return missing
}

async function importPhotos(ctx: SeedContext, projects: SeedProject[], docs: Doc[], options: SeedOptions) {
  const index = photoIndex(ctx.root)
  const manifest = JSON.parse(fs.readFileSync(path.join(ctx.root, MANIFEST), 'utf8')) as {
    chantier: string
    fichier: string
    legende_origine: string
  }[]

  // Alt text and caption: project galleries first (most precise), then the fiches' photoAlts.
  const info = new Map<string, { alt: string; caption?: string; prefix: string; position: number }>()
  for (const project of projects) {
    const prefix = filePrefix(project.shortTitle)
    project.gallery.forEach((item, position) => {
      const key = nfc(item.photo)
      if (!info.has(key)) info.set(key, { alt: item.alt, caption: item.caption, prefix, position: position + 1 })
    })
  }
  for (const doc of docs) {
    for (const item of doc.photoAlts ?? []) {
      const key = nfc(item.photo)
      if (!info.has(key)) info.set(key, { alt: item.alt, caption: item.caption, prefix: filePrefix(doc.slug), position: 0 })
    }
  }

  const entries = [
    ...manifest.map((entry) => ({ key: nfc(entry.fichier), legend: entry.legende_origine, folder: entry.chantier })),
    { key: 'ambiance/foret.png', legend: 'forêt de mélèzes', folder: 'ambiance' },
    { key: 'ambiance/rondins.png', legend: 'rondins de bois', folder: 'ambiance' },
  ]

  const existing = await ctx.payload.find({ collection: 'media', limit: 1000, depth: 0, pagination: false })
  for (const doc of existing.docs) if (doc.sourceKey) ctx.media.set(doc.sourceKey, doc.id)
  const missing = options.repairMediaOnly ? await missingFiles(existing.docs) : new Set<string>()
  if (options.repairMediaOnly) ctx.log(`Photos : ${missing.size} fichier(s) absent(s) du stockage`)

  let done = 0
  const queue = entries.filter((entry) =>
    options.repairMediaOnly ? missing.has(entry.key) : options.refreshMedia || !ctx.media.has(entry.key),
  )
  const worker = async () => {
    for (let entry = queue.shift(); entry; entry = queue.shift()) {
      const file = index.get(entry.key)
      if (!file) throw new Error(`Fichier absent du kit : ${entry.key}`)
      const meta = info.get(entry.key)
      const isMood = entry.folder === 'ambiance'
      const legend = entry.legend.replace(/[.\s]+$/, '').trim()
      const caption = meta?.caption ?? (legend.charAt(0).toUpperCase() + legend.slice(1))
      const alt = (
        meta?.alt ?? (isMood ? `Photo d’ambiance : ${legend}` : `${caption}, ${entry.folder.replace(/-/g, ' ')}`)
      ).slice(0, 160)
      const ext = path.extname(file).toLowerCase() || '.jpg'
      const prefix = meta?.prefix ?? filePrefix(entry.folder)
      const number = meta?.position ? `-${String(meta.position).padStart(2, '0')}` : ''
      const name = `${prefix}${number}-${filePrefix(caption, 40)}${ext}`
      const buffer = fs.readFileSync(file)
      const mimetype = ext === '.png' ? 'image/png' : 'image/jpeg'
      const data = {
        alt,
        caption: isMood ? undefined : caption,
        kind: (isMood ? 'ambiance' : 'chantier') as 'ambiance' | 'chantier',
        sourceKey: entry.key,
      }
      const existingId = ctx.media.get(entry.key)
      const fileArg = { data: buffer, mimetype, name, size: buffer.length }
      const doc = existingId
        ? await ctx.payload.update({
            collection: 'media',
            id: existingId,
            data,
            file: fileArg,
            // Same file name: the URLs already used by the pages stay valid.
            overwriteExistingFiles: true,
            context: ctx.opContext,
          })
        : await ctx.payload.create({ collection: 'media', data, file: fileArg, context: ctx.opContext })
      ctx.media.set(entry.key, (doc as { id: number }).id)
      done += 1
      if (done % 20 === 0) ctx.log(`  … ${done} photos`)
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker))
  ctx.log(`✓ Photos : ${ctx.media.size} dans la médiathèque (${done} importées)`)
}

/* ------------------------------------------------------------------ */
/* Documents                                                           */
/* ------------------------------------------------------------------ */

const meta = (ctx: SeedContext, seo: { title: string; description: string; image?: string }) => ({
  title: seo.title,
  description: seo.description,
  image: photo(ctx, seo.image),
  noindex: false,
})

function pagePathOf(doc: SeedPage) {
  if (doc.isHome) return 'accueil'
  return doc.parent ? `${doc.parent}/${doc.slug}` : doc.slug
}

async function importFaqs(ctx: SeedContext, faqs: SeedFaq[]) {
  for (const faq of faqs) {
    const doc = await upsert(ctx, 'faqs', { sourceKey: { equals: faq.key } }, {
      question: faq.question,
      answer: faq.answer,
      topic: faq.topic ?? 'general',
      sourceKey: faq.key,
    })
    ctx.faqs.set(faq.key, doc.id)
  }
  ctx.log(`✓ Questions fréquentes : ${ctx.faqs.size}`)
}

async function importForm(ctx: SeedContext) {
  const doc = await upsert(ctx, 'forms', { title: { equals: contactForm.title } }, {
    title: contactForm.title,
    submitButtonLabel: contactForm.submitButtonLabel,
    confirmationType: 'message',
    confirmationMessage: richText(ctx, contactForm.confirmationMessage),
    successTitle: contactForm.successTitle,
    errorMessage: richText(ctx, contactForm.errorMessage),
    sendAcknowledgement: contactForm.sendAcknowledgement,
    acknowledgementSubject: contactForm.acknowledgementSubject,
    acknowledgementText: contactForm.acknowledgementText,
    fields: contactForm.fields.map((field) => ({
      ...field,
      options: field.options?.map((option) => ({ label: option.label, prefill: option.prefill })),
    })),
  })
  ctx.forms.set('contact', doc.id)
  ctx.log('✓ Formulaire de contact')
}

/** Pass 1: every routable document exists (as a draft) so links between them can be resolved. */
async function createShells(ctx: SeedContext, pages: SeedPage[], services: SeedService[], articles: SeedArticle[], projects: SeedProject[]) {
  for (const service of services) {
    const doc = await upsert(ctx, 'services', { slug: { equals: service.slug } }, {
      title: service.title,
      slug: service.slug,
      cardText: service.cardText,
      icon: service.icon,
      order: service.order,
      hero: { title: parseTitle(service.hero.title).title },
      _status: 'draft',
    }, true)
    ctx.services.set(service.slug, doc.id)
  }
  // Parents before children.
  const ordered = [...pages].sort((a, b) => (a.parent ? 1 : 0) - (b.parent ? 1 : 0))
  for (const page of ordered) {
    const pathKey = pagePathOf(page)
    const doc = await upsert(ctx, 'pages', { path: { equals: pathKey } }, {
      title: page.title,
      slug: page.isHome ? 'accueil' : page.slug,
      parent: page.parent ? ctx.pages.get(page.parent) : null,
      hero: { title: parseTitle(page.hero.title).title },
      _status: 'draft',
    }, true)
    ctx.pages.set(pathKey, doc.id)
  }
  for (const article of articles) {
    const doc = await upsert(ctx, 'articles', { slug: { equals: article.slug } }, {
      title: parseTitle(article.title).title,
      slug: article.slug,
      excerpt: article.excerpt,
      _status: 'draft',
    }, true)
    ctx.articles.set(article.slug, doc.id)
  }
  for (const project of projects) {
    const doc = await upsert(ctx, 'projects', { slug: { equals: project.slug } }, {
      title: parseTitle(project.title).title,
      slug: project.slug,
      shortTitle: project.shortTitle,
      summary: project.summary,
      _status: 'draft',
    }, true)
    ctx.projects.set(project.slug, doc.id)
  }
  ctx.log(`✓ Squelettes : ${services.length} prestations, ${pages.length} pages, ${articles.length} guides, ${projects.length} réalisations`)
}

async function importCommunes(ctx: SeedContext, withSectors: boolean) {
  for (const commune of seedCommunes) {
    const doc = await upsert(ctx, 'communes', { slug: { equals: commune.slug } }, {
      name: commune.name,
      slug: commune.slug,
      department: commune.department,
      area: commune.area,
      villages: commune.villages,
      latitude: commune.latitude,
      longitude: commune.longitude,
      inAreaServed: commune.inAreaServed,
      showOnMap: commune.showOnMap,
      sector: withSectors && commune.sector ? ctx.pages.get(commune.sector) : undefined,
    })
    ctx.communes.set(commune.slug, doc.id)
  }
  ctx.log(`✓ Communes : ${ctx.communes.size}${withSectors ? ' (avec pages secteur)' : ''}`)
}

const publishedAt = new Date().toISOString()

async function publishAll(ctx: SeedContext, pages: SeedPage[], services: SeedService[], articles: SeedArticle[], projects: SeedProject[]) {
  for (const project of projects) {
    const { title, titleAccent } = parseTitle(project.title)
    const mainRef = project.mainPage ? resolvePath(ctx, `/${project.mainPage}/`) : null
    await ctx.payload.update({
      collection: 'projects',
      id: ctx.projects.get(project.slug)!,
      draft: false,
      depth: 0,
      context: ctx.opContext,
      data: {
        title,
        titleAccent,
        shortTitle: project.shortTitle,
        slug: project.slug,
        commune: project.commune ? ctx.communes.get(project.commune) : null,
        locality: project.locality,
        mainLink: mainRef ? { relationTo: mainRef.relationTo as 'pages' | 'services', value: mainRef.value } : null,
        services: project.services.map((slug) => ctx.services.get(slug)!),
        tags: project.tags,
        heroImage: photo(ctx, project.heroImage)!,
        summary: project.summary,
        description: richText(ctx, project.description) as never,
        facts: project.facts ?? {},
        steps: project.steps.map((step) => ({ title: step.title, text: step.text })),
        materials: project.materials.map((text) => ({ text })),
        showRecupLink: project.showRecupLink ?? false,
        gallery: project.gallery.map((item) => ({ image: photo(ctx, item.photo)!, caption: item.caption })),
        related: project.related.map((slug) => ctx.projects.get(slug)!).filter(Boolean),
        featured: project.featured ?? false,
        order: project.order,
        meta: meta(ctx, project.seo),
        publishedAt,
        _status: 'published',
      } as never,
    })
  }
  ctx.log(`✓ Réalisations publiées : ${projects.length}`)

  for (const service of services) {
    await ctx.payload.update({
      collection: 'services',
      id: ctx.services.get(service.slug)!,
      draft: false,
      depth: 0,
      context: ctx.opContext,
      data: {
        title: service.title,
        menuLabel: service.menuLabel,
        shortLabel: service.shortLabel,
        filterKey: service.filterKey,
        order: service.order,
        icon: service.icon,
        cardTitle: service.cardTitle,
        cardText: service.cardText,
        cardLinkLabel: service.cardLinkLabel,
        image: photo(ctx, service.image ?? service.hero.images?.[0]),
        schema: service.schema ?? {},
        hero: hero(ctx, service.hero),
        tldr: service.tldr,
        layout: service.layout.map((item) => block(ctx, item)),
        meta: meta(ctx, service.seo),
        slug: service.slug,
        _status: 'published',
      } as never,
    })
  }
  ctx.log(`✓ Prestations publiées : ${services.length}`)

  for (const page of pages) {
    await ctx.payload.update({
      collection: 'pages',
      id: ctx.pages.get(pagePathOf(page))!,
      draft: false,
      depth: 0,
      context: ctx.opContext,
      data: {
        title: page.title,
        breadcrumbLabel: page.breadcrumbLabel,
        slug: page.isHome ? 'accueil' : page.slug,
        parent: page.parent ? ctx.pages.get(page.parent) : null,
        hero: hero(ctx, page.hero),
        tldr: page.tldr,
        layout: page.layout.map((item) => block(ctx, item)),
        meta: meta(ctx, page.seo),
        _status: 'published',
      } as never,
    })
  }
  ctx.log(`✓ Pages publiées : ${pages.length}`)

  for (const article of articles) {
    const { title, titleAccent } = parseTitle(article.title)
    await ctx.payload.update({
      collection: 'articles',
      id: ctx.articles.get(article.slug)!,
      draft: false,
      depth: 0,
      context: ctx.opContext,
      data: {
        title,
        titleAccent,
        menuLabel: article.menuLabel,
        topic: article.topic,
        excerpt: article.excerpt,
        cardSummary: article.cardSummary,
        image: photo(ctx, article.image),
        tldr: article.tldr,
        author: 'L’équipe de 3B Charpente',
        layout: article.layout.map((item) => block(ctx, item)),
        meta: meta(ctx, article.seo),
        slug: article.slug,
        publishedAt,
        _status: 'published',
      } as never,
    })
  }
  ctx.log(`✓ Guides publiés : ${articles.length}`)
}

/* ------------------------------------------------------------------ */
/* Settings, redirects, team, users, points to validate                */
/* ------------------------------------------------------------------ */

async function importGlobals(ctx: SeedContext) {
  const { payload } = ctx
  await payload.updateGlobal({
    slug: 'company',
    context: ctx.opContext,
    data: {
      ...settings.company,
      hours: settings.company.hours.map((day) => ({ ...day })),
      rge: { ...settings.company.rge, domains: settings.company.rge.domains.map((label) => ({ label })) },
    } as never,
  })
  await payload.updateGlobal({
    slug: 'header',
    context: ctx.opContext,
    data: {
      nav: settings.header.nav.map((item) => ({
        label: item.label,
        kind: item.kind,
        highlight: item.highlight ?? false,
        link: item.href ? link(ctx, { label: item.label, href: item.href }) : {},
      })),
      cta: link(ctx, settings.header.cta),
    } as never,
  })
  await payload.updateGlobal({
    slug: 'footer',
    context: ctx.opContext,
    data: {
      tagline: settings.footer.tagline,
      columns: settings.footer.columns.map((column) => ({
        title: column.title,
        source: column.source,
        links: (column.links ?? []).map((item) => ({ link: link(ctx, item) })),
      })),
      legalLinks: settings.footer.legalLinks.map((item) => ({ link: link(ctx, item) })),
    } as never,
  })
  await payload.updateGlobal({ slug: 'proofs', context: ctx.opContext, data: { items: settings.proofs } as never })
  await payload.updateGlobal({ slug: 'site-texts', context: ctx.opContext, data: SITE_TEXT_DEFAULTS as never })
  await payload.updateGlobal({
    slug: 'seo-settings',
    context: ctx.opContext,
    data: {
      ...settings.seoSettings,
      defaultImage: photo(ctx, settings.seoSettings.defaultImage),
      areaServed: settings.seoSettings.areaServed.map((name) => ({ name })),
    } as never,
  })
  await payload.updateGlobal({ slug: 'analytics', context: ctx.opContext, data: { provider: 'vercel' } as never })
  ctx.log('✓ Réglages : entreprise, en-tête, pied de page, preuves, textes, référencement, mesure')
}

async function importRedirects(ctx: SeedContext) {
  for (const redirect of settings.redirects) {
    const [pathPart, anchor] = redirect.to.split('#')
    const ref = !anchor && pathPart?.endsWith('/') ? resolvePath(ctx, pathPart) : null
    await upsert(ctx, 'redirects', { from: { equals: redirect.from } }, {
      from: redirect.from,
      type: '301',
      to: ref ? { type: 'reference', reference: ref } : { type: 'custom', url: redirect.to },
    })
  }
  ctx.log(`✓ Redirections : ${settings.redirects.length}`)
  await pruneShadowedRedirects(ctx.payload, ctx.log)
}

/**
 * A redirect whose old address is the live address of a published document is
 * never served (the document wins) and points somewhere else: left by an old
 * import where operations shared their context. Such redirects are removed.
 */
export async function pruneShadowedRedirects(payload: Payload, log: (message: string) => void = console.log) {
  const live = new Set<string>()
  for (const collection of ['pages', 'services', 'projects', 'articles'] as const) {
    const { docs } = await payload.find({ collection, limit: 1000, depth: 0, pagination: false, where: { _status: { equals: 'published' } } })
    for (const doc of docs) {
      const path = pathFor(collection, doc as never)
      if (path) live.add(path)
    }
  }
  const { docs } = await payload.find({ collection: 'redirects', limit: 2000, depth: 0, pagination: false })
  let removed = 0
  for (const redirect of docs as unknown as { id: number; from: string }[]) {
    const from = redirect.from.endsWith('/') ? redirect.from : `${redirect.from}/`
    if (live.has(from)) {
      await payload.delete({ collection: 'redirects', id: redirect.id, context: { disableRevalidate: true } })
      removed += 1
    }
  }
  if (removed) log(`✓ Redirections masquées retirées : ${removed}`)
  return removed
}

async function importTeam(ctx: SeedContext) {
  for (const member of settings.team) {
    await upsert(ctx, 'team', { name: { equals: member.name } }, member as Json)
  }
  ctx.log(`✓ Équipe : ${settings.team.length} (dont ${settings.team.filter((m) => m.visible).length} visible)`)
}

async function importValidationPoints(ctx: SeedContext, entries: (SeedValidationPoint & { page: string })[]) {
  // Same point whatever the typography (straight or curly apostrophe, plain or non-breaking space).
  const plain = (text: string) => text.replace(/’/g, "'").replace(/\u00a0/g, ' ')
  const keyOf = (page: string, question: string) => `${plain(page)}|${plain(question)}`
  const { docs } = await ctx.payload.find({ collection: 'validation-points', limit: 5000, depth: 0, pagination: false, sort: 'id' })
  const existing = new Map<string, { id: number; page: string; question: string }>()
  let removed = 0
  for (const doc of docs as unknown as { id: number; page: string; question: string }[]) {
    const key = keyOf(doc.page, doc.question)
    if (existing.has(key)) {
      // A duplicate left by an earlier import: keep the oldest (it may hold Jean's answer).
      await ctx.payload.delete({ collection: 'validation-points', id: doc.id, context: ctx.opContext })
      removed += 1
    } else existing.set(key, doc)
  }
  let created = 0
  for (const entry of entries) {
    const found = existing.get(keyOf(entry.page, entry.question))
    if (found) {
      if (found.page !== entry.page || found.question !== entry.question) {
        await ctx.payload.update({
          collection: 'validation-points',
          id: found.id,
          data: { page: entry.page, question: entry.question, decision: entry.decision },
          context: ctx.opContext,
        })
      }
      continue
    }
    await ctx.payload.create({
      collection: 'validation-points',
      data: { page: entry.page, question: entry.question, decision: entry.decision, priority: entry.priority ?? 'normal', status: 'open' },
      context: ctx.opContext,
    })
    created += 1
  }
  ctx.log(`✓ Points à valider : ${entries.length} (${created} nouveaux${removed ? `, ${removed} doublons retirés` : ''})`)
}

async function importUsers(ctx: SeedContext, options: SeedOptions) {
  const accounts = [
    options.adminPassword
      ? {
          username: options.adminUsername || 'admin',
          password: options.adminPassword,
          email: options.adminEmail || undefined,
          name: 'Administrateur',
          role: 'admin' as const,
        }
      : null,
    options.editorPassword
      ? { username: 'jean', password: options.editorPassword, name: 'Jean-Michel Tardy', role: 'editor' as const }
      : null,
  ].filter(Boolean) as { username: string; password: string; email?: string; name: string; role: 'admin' | 'editor' }[]

  for (const account of accounts) {
    const existing = await findOne(ctx.payload, 'users', { username: { equals: account.username } })
    if (existing) {
      ctx.log(`  · utilisateur « ${account.username} » déjà présent (mot de passe inchangé)`)
      continue
    }
    await ctx.payload.create({ collection: 'users', data: account as never, context: ctx.opContext })
    ctx.log(`✓ Utilisateur « ${account.username} » (${account.role === 'admin' ? 'Administrateur' : 'Éditeur'})`)
  }
}

/* ------------------------------------------------------------------ */

export async function runSeed(payload: Payload, root: string, options: SeedOptions = {}) {
  const ctx = await createContext(payload, root)
  const dataDir = path.join(root, 'src/seed/data')
  const docs = (await loadModules<Doc>(path.join(dataDir, 'pages'), 'page')).map(({ data }) => data)
  const services = docs.filter((doc): doc is SeedService => doc.kind === 'service')
  const pages = docs.filter((doc): doc is SeedPage => doc.kind === 'page')
  const articles = docs.filter((doc): doc is SeedArticle => doc.kind === 'article')
  const projects = (await loadModules<SeedProject>(path.join(dataDir, 'projects'), 'project')).map(({ data }) => data)
  ctx.log(`Import : ${pages.length} pages, ${services.length} prestations, ${articles.length} guides, ${projects.length} réalisations`)

  await importUsers(ctx, options)
  if (options.accountsOnly) return
  await importPhotos(ctx, projects, docs, options)
  if (options.repairMediaOnly) {
    await pruneShadowedRedirects(ctx.payload, ctx.log)
    return ctx
  }
  await importCommunes(ctx, false)
  await createShells(ctx, pages, services, articles, projects)
  await importCommunes(ctx, true)
  await importFaqs(ctx, docs.flatMap((doc) => doc.faqs ?? []))
  await importForm(ctx)
  await publishAll(ctx, pages, services, articles, projects)
  await importGlobals(ctx)
  await importRedirects(ctx)
  await importTeam(ctx)

  const label = (doc: Doc) => parseTitle(doc.title).title || doc.slug
  await importValidationPoints(ctx, [
    ...settings.generalValidationPoints,
    ...docs.flatMap((doc) => (doc.validationPoints ?? []).map((point) => ({ ...point, page: label(doc) }))),
    ...projects.flatMap((project) =>
      (project.validationPoints ?? []).map((point) => ({ ...point, page: `Réalisation : ${project.shortTitle}` })),
    ),
  ])
  ctx.log('Import terminé.')
  return ctx
}

export { photos }
