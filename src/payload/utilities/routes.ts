/**
 * Single source of truth for public URLs. Every place that builds a link
 * (front-end, sitemap, JSON-LD, redirects, live preview) goes through here.
 */

export const LINKABLE_COLLECTIONS = ['pages', 'services', 'projects', 'articles'] as const
export type LinkableCollection = (typeof LINKABLE_COLLECTIONS)[number]

/** Path prefix of each collection on the public site. */
export const COLLECTION_PREFIX: Record<LinkableCollection, string> = {
  pages: '',
  services: '',
  projects: '/realisations',
  articles: '/conseils',
}

export const HOME_SLUG = 'accueil'

type RoutableDoc = {
  slug?: string | null
  /** Full path of a page computed from its parents, e.g. "3b-recup/diagnostic-pemd". */
  path?: string | null
}

/** Public path of a document, always with a trailing slash ("/" for home). */
export function pathFor(collection: LinkableCollection | string, doc: RoutableDoc | null | undefined): string | null {
  if (!doc) return null
  if (collection === 'pages') {
    const path = doc.path || doc.slug
    if (!path) return null
    return path === HOME_SLUG ? '/' : `/${path}/`
  }
  if (!doc.slug) return null
  const prefix = COLLECTION_PREFIX[collection as LinkableCollection] ?? ''
  return `${prefix}/${doc.slug}/`
}

/** Normalises any incoming path to the canonical "/a/b/" form. */
export function normalizePath(input: string): string {
  const clean = input.split(/[?#]/)[0] ?? '/'
  const trimmed = clean.replace(/\/+$/, '').replace(/^\/+/, '')
  return trimmed ? `/${trimmed}/` : '/'
}

/** Turns a French title into a URL slug ("Réfection d'une toiture" → "refection-d-une-toiture"). */
export function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 100)
}
