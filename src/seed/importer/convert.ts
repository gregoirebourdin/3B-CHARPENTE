import type { Md, Photo, SeedBlock, SeedHeading, SeedHero, SeedLink, Title } from '../types'
import { nfc, resolvePath, type SeedContext } from './context'
import { markdownToTiptap } from './markdown'

type Json = Record<string, unknown>

const COMPANY_PHONE = '+33634673149'
const COMPANY_EMAIL = 'tardy@3bcharpente.fr'

/** 'Construire **simplement**, penser **durablement**.' → title + "simplement, durablement". */
export function parseTitle(title?: Title | null): { title: string; titleAccent: string | undefined } {
  if (!title) return { title: '', titleAccent: undefined }
  const accents: string[] = []
  const plain = title.replace(/\*\*(.+?)\*\*/g, (_, inner: string) => {
    accents.push(inner.trim())
    return inner
  })
  return { title: plain, titleAccent: accents.length ? accents.join(', ') : undefined }
}

export function photo(ctx: SeedContext, ref?: Photo | null): number | undefined {
  if (!ref) return undefined
  const id = ctx.media.get(nfc(ref))
  if (!id) throw new Error(`Photo introuvable dans la médiathèque : ${ref}`)
  return id
}

export const photos = (ctx: SeedContext, refs?: Photo[] | null) =>
  (refs ?? []).map((ref) => photo(ctx, ref)).filter((id): id is number => typeof id === 'number')

/** Links of the fiches: « tel » and « email » shortcuts, « /path/ » → a page of the site (followed if its address changes). */
function resolveLink(ctx: SeedContext, url: string): { href: string; ref: string | null } {
  if (url === 'tel') return { href: `tel:${COMPANY_PHONE}`, ref: null }
  if (url === 'email') return { href: `mailto:${COMPANY_EMAIL}`, ref: null }
  if (!url.startsWith('/')) return { href: url, ref: null }
  const ref = resolvePath(ctx, url)
  if (!ref) {
    // A link to a part of a page (#…) can point to a page imported later: the address alone is enough.
    if (url.includes('#')) return { href: url, ref: null }
    throw new Error(`Lien interne introuvable : ${url}`)
  }
  return { href: url, ref: `${ref.relationTo}:${ref.value}` }
}

/** Markdown of the fiches → rich text (Tiptap JSON) with resolved internal links. */
export function richText(ctx: SeedContext, markdown?: Md | null) {
  if (!markdown?.trim()) return undefined
  return markdownToTiptap(markdown, (url) => resolveLink(ctx, url)) ?? undefined
}

/** SeedLink → link group of src/payload/fields/link.ts. */
export function link(ctx: SeedContext, value?: SeedLink | null): Json | undefined {
  if (!value) return undefined
  const { label, href } = value
  if (href === 'tel') return { label, type: 'phone' }
  if (href === 'email') return { label, type: 'email' }
  if (/^https?:\/\//.test(href)) return { label, type: 'external', url: href }
  const [pathPart, anchor] = href.split('#')
  const ref = resolvePath(ctx, pathPart ?? '/')
  if (!ref) throw new Error(`Lien interne introuvable : ${href}`)
  return { label, type: 'internal', reference: ref, anchor: anchor || undefined }
}

const linkRows = (ctx: SeedContext, values?: SeedLink[] | null) => (values ?? []).map((value) => ({ link: link(ctx, value) }))

export function hero(ctx: SeedContext, value: SeedHero): Json {
  const { title, titleAccent } = parseTitle(value.title)
  return {
    variant: value.variant ?? (value.images?.length ? (value.images.length > 1 ? 'collage' : 'photo') : 'simple'),
    kicker: value.kicker,
    title,
    titleAccent,
    text: richText(ctx, value.text),
    primaryCta: link(ctx, value.primaryCta) ?? {},
    secondaryCta: link(ctx, value.secondaryCta) ?? {},
    proofs: (value.proofs ?? []).map((proof) => ({ label: proof.label, text: proof.text, icon: proof.icon ?? 'check' })),
    images: photos(ctx, value.images),
    highlight: value.highlight ? (ctx.projects.get(value.highlight) ?? null) : null,
    caption: value.caption,
    tone: value.tone ?? 'cream',
    photoTag: value.photoTag,
    sheet: (value.sheet ?? []).map((row) => ({ label: row.label, value: row.value })),
    backdrop: photo(ctx, value.backdrop) ?? null,
  }
}

function heading(value: SeedHeading): Json {
  const { title, titleAccent } = parseTitle(value.title)
  return {
    kicker: value.kicker,
    title: title || undefined,
    titleAccent,
    intro: value.intro,
    anchor: value.anchor,
    tone: value.tone ?? 'cream',
  }
}

const ids = (map: Map<string, number>, keys: string[] | undefined, kind: string) =>
  (keys ?? []).map((key) => {
    const id = map.get(key)
    if (!id) throw new Error(`${kind} introuvable : ${key}`)
    return id
  })

/** SeedBlock → Payload block data. One case per block of src/payload/blocks. */
export function block(ctx: SeedContext, value: SeedBlock): Json {
  switch (value.type) {
    case 'textImage':
      return {
        blockType: 'textImage',
        ...heading(value),
        text: richText(ctx, value.text),
        images: photos(ctx, value.images),
        imagePosition: value.imagePosition ?? 'right',
        badge: value.badge,
        caption: value.caption,
        twoColumns: value.twoColumns ?? false,
        links: linkRows(ctx, value.links),
        cta: link(ctx, value.cta) ?? {},
      }
    case 'cards':
      return {
        blockType: 'cards',
        ...heading(value),
        variant: value.variant ?? 'icon',
        columns: String(value.columns ?? 3),
        items: value.items.map((item) => ({
          title: item.title,
          icon: item.icon,
          letter: item.letter,
          eyebrow: item.eyebrow,
          text: richText(ctx, item.text),
          image: photo(ctx, item.image),
          muted: item.muted ?? false,
          link: link(ctx, item.link) ?? {},
        })),
        asideImage: photo(ctx, value.asideImage),
        cta: link(ctx, value.cta) ?? {},
      }
    case 'servicesGrid':
      return {
        blockType: 'servicesGrid',
        ...heading(value),
        mode: value.mode ?? (value.services?.length ? 'manual' : 'all'),
        variant: value.variant ?? 'full',
        services: ids(ctx.services, value.services, 'Prestation'),
        cta: link(ctx, value.cta) ?? {},
      }
    case 'projects':
      return {
        blockType: 'projects',
        ...heading(value),
        mode: value.mode,
        limit: value.limit ?? 6,
        label: value.label ?? 'commune',
        items: (value.items ?? []).map((item) => ({
          project: ids(ctx.projects, [item.project], 'Réalisation')[0],
          title: item.title,
          tag: item.tag,
          text: item.text,
        })),
        service: value.service ? ids(ctx.services, [value.service], 'Prestation')[0] : undefined,
        communes: ids(ctx.communes, value.communes, 'Commune'),
        sector: value.sector ? ids(ctx.pages, [value.sector], 'Page secteur')[0] : undefined,
        cta: link(ctx, value.cta) ?? {},
      }
    case 'projectsExplorer':
      return {
        blockType: 'projectsExplorer',
        anchor: value.anchor,
        serviceFilterLabel: value.serviceFilterLabel,
        communeFilterLabel: value.communeFilterLabel,
        recupFilterLabel: value.recupFilterLabel,
        emptyMessage: value.emptyMessage,
        emptyCta: link(ctx, value.emptyCta) ?? {},
        groups: value.groups.map((group) => ({
          ...heading(group),
          links: linkRows(ctx, group.links),
          projects: ids(ctx.projects, group.projects, 'Réalisation'),
        })),
      }
    case 'steps':
      return {
        blockType: 'steps',
        ...heading(value),
        variant: value.variant ?? 'tabs',
        isHowTo: value.isHowTo ?? false,
        steps: value.steps.map((step) => ({ title: step.title, text: richText(ctx, step.text), image: photo(ctx, step.image) })),
        cta: link(ctx, value.cta) ?? {},
      }
    case 'list':
      return {
        blockType: 'list',
        ...heading(value),
        style: value.style ?? 'checks',
        inCard: value.inCard ?? false,
        text: richText(ctx, value.text),
        items: value.items.map((item) => ({ title: item.title, text: richText(ctx, item.text), link: link(ctx, item.link) ?? {} })),
        image: photo(ctx, value.image),
        caption: value.caption,
        cta: link(ctx, value.cta) ?? {},
      }
    case 'faq':
      return { blockType: 'faq', ...heading(value), faqs: ids(ctx.faqs, value.faqs, 'Question fréquente') }
    case 'cta': {
      const { title, titleAccent } = parseTitle(value.title)
      return {
        blockType: 'cta',
        variant: value.variant ?? 'band',
        badge: value.badge,
        kicker: value.kicker,
        title: title || undefined,
        titleAccent,
        anchor: value.anchor,
        text: richText(ctx, value.text),
        primary: link(ctx, value.primary) ?? {},
        secondary: link(ctx, value.secondary) ?? {},
        icon: value.icon,
        showAddress: value.showAddress ?? false,
        image: photo(ctx, value.image),
      }
    }
    case 'manifesto': {
      const { title, titleAccent } = parseTitle(value.title)
      return {
        blockType: 'manifesto',
        kicker: value.kicker,
        title: title || undefined,
        titleAccent,
        anchor: value.anchor,
        layout: value.layout ?? 'centered',
        text: richText(ctx, value.text),
        items: (value.items ?? []).map((item) => ({ title: item.title, text: item.text })),
        quote: value.quote ?? {},
        emphasis: value.emphasis,
        image: photo(ctx, value.image),
        cta: link(ctx, value.cta) ?? {},
      }
    }
    case 'spotlight': {
      const { title, titleAccent } = parseTitle(value.title)
      return {
        blockType: 'spotlight',
        badge: value.badge ?? '3B Récup’',
        kicker: value.kicker,
        title: title || undefined,
        titleAccent,
        anchor: value.anchor,
        text: richText(ctx, value.text),
        steps: (value.steps ?? []).map((step) => ({ title: step.title, text: step.text })),
        primary: link(ctx, value.primary) ?? {},
        links: linkRows(ctx, value.links),
        images: photos(ctx, value.images),
      }
    }
    case 'gallery':
      return {
        blockType: 'gallery',
        ...heading(value),
        images: value.images.map((item) => ({ image: photo(ctx, item.image), caption: item.caption })),
      }
    case 'comparisonTable':
      return {
        blockType: 'comparisonTable',
        ...heading(value),
        columns: value.columns.map((label) => ({ label })),
        rows: value.rows.map((cells) => ({ cells: cells.map((text) => ({ text })) })),
        note: value.note,
      }
    case 'quote':
      return {
        blockType: 'quote',
        lead: value.lead,
        text: value.text,
        author: value.author,
        role: value.role,
        image: photo(ctx, value.image),
        tone: value.tone ?? 'cream',
        anchor: value.anchor,
      }
    case 'proofs':
      return { blockType: 'proofs', variant: value.variant ?? 'band', anchor: value.anchor }
    case 'serviceArea': {
      const { title, titleAccent } = parseTitle(value.title)
      return {
        blockType: 'serviceArea',
        kicker: value.kicker,
        title: title || undefined,
        titleAccent,
        anchor: value.anchor,
        tone: value.tone ?? 'cream',
        text: richText(ctx, value.text),
        sectors: (value.sectors ?? []).map((sector) => ({ title: sector.title, text: sector.text, link: link(ctx, sector.link) })),
        showMap: value.showMap ?? true,
      }
    }
    case 'team':
      return { blockType: 'team', ...heading(value) }
    case 'reviews':
      return { blockType: 'reviews', ...heading(value) }
    case 'articles':
      return {
        blockType: 'articles',
        ...heading(value),
        mode: value.mode ?? 'all',
        articles: ids(ctx.articles, value.articles, 'Guide'),
        cta: link(ctx, value.cta) ?? {},
      }
    case 'contactForm':
      return {
        blockType: 'contactForm',
        ...heading(value),
        form: ids(ctx.forms, [value.form], 'Formulaire')[0],
        showCompanyInfo: value.showCompanyInfo ?? true,
        privacyNotice: richText(ctx, value.privacyNotice),
      }
    case 'richText':
      return {
        blockType: 'richText',
        content: richText(ctx, value.content),
        showToc: value.showToc ?? false,
        boxed: value.boxed ?? false,
        tone: value.tone ?? 'cream',
        anchor: value.anchor,
      }
  }
}
