/**
 * Validates seed data files before import:
 *   pnpm tsx scripts/check-seed.ts src/seed/data/pages/02-charpente-bois.ts [...]
 * (no argument = every file of src/seed/data/pages and src/seed/data/projects)
 *
 * Checks: photo references exist, internal links point to planned pages,
 * project/service/commune/FAQ references resolve, no "[À VALIDER" left,
 * SEO lengths, titles with ** accents are balanced.
 */
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

import { communes } from '../src/seed/data/communes'
import { ALL_PATHS, ARTICLE_SLUGS, PAGE_PATHS, PROJECT_SLUGS, SERVICE_SLUGS } from '../src/seed/data/routes'
import { ICONS } from '../src/payload/utilities/icons'

const root = path.resolve(import.meta.dirname, '..')
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, '3b-charpente-kit/photos-chantiers/manifest.json'), 'utf8'),
) as { fichier: string }[]
const nfc = (value: string) => value.normalize('NFC')
const photos = new Set(manifest.map((entry) => nfc(entry.fichier)))
photos.add('ambiance/foret.png')
photos.add('ambiance/rondins.png')

const errors: string[] = []
const warnings: string[] = []

function walk(value: unknown, visit: (key: string, val: unknown, trail: string) => void, trail = '') {
  if (Array.isArray(value)) value.forEach((item, i) => walk(item, visit, `${trail}[${i}]`))
  else if (value && typeof value === 'object') {
    for (const [key, val] of Object.entries(value)) {
      visit(key, val, `${trail}.${key}`)
      walk(val, visit, `${trail}.${key}`)
    }
  }
}

const PHOTO_KEYS = new Set(['image', 'images', 'photo', 'heroImage', 'asideImage'])

function checkHref(href: string, where: string) {
  if (href === 'tel' || href === 'email' || href.startsWith('https://')) return
  if (!href.startsWith('/')) return errors.push(`${where}: lien invalide « ${href} »`)
  const pathOnly = href.split('#')[0] ?? ''
  if (!ALL_PATHS.includes(pathOnly)) errors.push(`${where}: lien vers une page inconnue « ${href} »`)
}

function checkDoc(file: string, doc: Record<string, unknown>, faqKeys: Set<string>) {
  const label = path.basename(file)
  walk(doc, (key, val, trail) => {
    const where = `${label}${trail}`
    if (typeof val === 'string' && /\[À (VALIDER|COMPLÉTER)/i.test(val)) errors.push(`${where}: mention « À VALIDER » restée`)
    if (PHOTO_KEYS.has(key)) {
      const list = Array.isArray(val) ? val : [val]
      for (const item of list) {
        const ref = typeof item === 'string' ? item : (item as { image?: string; photo?: string })?.image ?? (item as { photo?: string })?.photo
        if (typeof ref === 'string' && !photos.has(nfc(ref))) errors.push(`${where}: photo introuvable « ${ref} »`)
      }
    }
    if (key === 'href' && typeof val === 'string') checkHref(val, where)
    if (typeof val === 'string' && /\]\((\/[^)]*)\)/.test(val)) {
      for (const match of val.matchAll(/\]\((\/[^)]*)\)/g)) checkHref(match[1] ?? '', where)
    }
    if (key === 'icon' && typeof val === 'string' && !(val in ICONS)) errors.push(`${where}: icône inconnue « ${val} »`)
    if ((key === 'title' || key === 'tldr') && typeof val === 'string' && (val.match(/\*\*/g)?.length ?? 0) % 2 !== 0) {
      errors.push(`${where}: ** non fermé dans « ${val} »`)
    }
    if (key === 'project' && typeof val === 'string' && !(PROJECT_SLUGS as readonly string[]).includes(val)) {
      errors.push(`${where}: réalisation inconnue « ${val} »`)
    }
    if ((key === 'services' || key === 'service') && val) {
      for (const slug of Array.isArray(val) ? val : [val]) {
        if (typeof slug === 'string' && !(SERVICE_SLUGS as readonly string[]).includes(slug)) {
          errors.push(`${where}: prestation inconnue « ${slug} »`)
        }
      }
    }
    if (key === 'faqs' && Array.isArray(val) && val.every((item) => typeof item === 'string')) {
      for (const faqKey of val as string[]) if (!faqKeys.has(faqKey)) warnings.push(`${where}: FAQ « ${faqKey} » définie ailleurs ?`)
    }
    if ((key === 'communes' || key === 'commune') && val) {
      for (const slug of Array.isArray(val) ? val : [val]) {
        if (typeof slug === 'string' && !communes.some((c) => c.slug === slug)) errors.push(`${where}: commune inconnue « ${slug} »`)
      }
    }
    if (key === 'related' && Array.isArray(val)) {
      for (const slug of val) if (!(PROJECT_SLUGS as readonly string[]).includes(slug)) errors.push(`${where}: réalisation inconnue « ${slug} »`)
    }
    if (key === 'articles' && Array.isArray(val)) {
      for (const slug of val) if (!(ARTICLE_SLUGS as readonly string[]).includes(slug)) errors.push(`${where}: guide inconnu « ${slug} »`)
    }
    if ((key === 'parent' || key === 'sector' || key === 'mainPage') && typeof val === 'string' && !(PAGE_PATHS as readonly string[]).includes(val)) {
      errors.push(`${where}: page inconnue « ${val} »`)
    }
  })
  const seo = doc.seo as { title?: string; description?: string } | undefined
  if (seo?.title && (seo.title.length < 30 || seo.title.length > 65)) warnings.push(`${label}: title de ${seo.title.length} caractères`)
  if (seo?.description && (seo.description.length < 120 || seo.description.length > 160)) {
    warnings.push(`${label}: meta description de ${seo.description.length} caractères`)
  }
}

const args = process.argv.slice(2)
const files = args.length
  ? args
  : ['src/seed/data/pages', 'src/seed/data/projects'].flatMap((dir) =>
      fs.existsSync(path.join(root, dir))
        ? fs.readdirSync(path.join(root, dir)).filter((f) => f.endsWith('.ts')).map((f) => path.join(dir, f))
        : [],
    )

const loaded: { file: string; doc: Record<string, unknown> }[] = []
for (const file of files) {
  const mod = (await import(pathToFileURL(path.resolve(root, file)).href)) as Record<string, unknown>
  const doc = (mod.page ?? mod.service ?? mod.article ?? mod.project) as Record<string, unknown> | undefined
  if (!doc) {
    errors.push(`${file}: aucun export page / service / article / project`)
    continue
  }
  loaded.push({ file, doc })
}
const allFaqKeys = new Set<string>()
for (const { doc } of loaded) for (const faq of (doc.faqs as { key: string }[] | undefined) ?? []) {
  if (allFaqKeys.has(faq.key)) errors.push(`FAQ en double : ${faq.key}`)
  allFaqKeys.add(faq.key)
}
for (const { file, doc } of loaded) checkDoc(file, doc, allFaqKeys)

for (const warning of warnings) console.log(`⚠️  ${warning}`)
for (const error of errors) console.log(`❌ ${error}`)
console.log(errors.length ? `\n${errors.length} erreur(s).` : `\n✅ ${loaded.length} fichier(s) valides.`)
process.exit(errors.length ? 1 : 0)
