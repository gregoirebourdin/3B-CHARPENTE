import 'server-only'

import type { Where } from 'payload'
import { cache } from 'react'

import type {
  Article,
  Commune,
  Company,
  Footer,
  Header,
  Page,
  Project,
  Proof,
  Review,
  SeoSetting,
  Service,
  Team,
} from '@/payload-types'
import { SITE_TEXT_DEFAULTS, type SiteTexts } from '@/payload/globals/siteTextDefaults'
import { HOME_SLUG } from '@/payload/utilities/routes'

import { getPayloadClient, isDraftMode } from './client'

const DEPTH = 2

const published = async (): Promise<Where> => ((await isDraftMode()) ? {} : { _status: { equals: 'published' } })

/* ---------------- Globals ---------------- */

export const getCompany = cache(async (): Promise<Company> => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'company', depth: 1 })
})

export const getHeader = cache(async (): Promise<Header> => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'header', depth: 1 })
})

export const getFooter = cache(async (): Promise<Footer> => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'footer', depth: 1 })
})

export const getProofs = cache(async (): Promise<Proof> => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'proofs', depth: 0 })
})

export const getSeoSettings = cache(async (): Promise<SeoSetting> => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'seo-settings', depth: 1 })
})

export const getAnalyticsSettings = cache(async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'analytics', depth: 0 })
})

/* ---------------- Documents by address ---------------- */

export const getPageByPath = cache(async (path: string): Promise<Page | null> => {
  const payload = await getPayloadClient()
  const draft = await isDraftMode()
  const { docs } = await payload.find({
    collection: 'pages',
    where: { and: [{ path: { equals: path || HOME_SLUG } }, await published()] },
    depth: DEPTH,
    limit: 1,
    draft,
    pagination: false,
  })
  return docs[0] ?? null
})

const bySlug = <T extends 'services' | 'projects' | 'articles'>(collection: T) =>
  cache(async (slug: string) => {
    const payload = await getPayloadClient()
    const draft = await isDraftMode()
    const { docs } = await payload.find({
      collection,
      where: { and: [{ slug: { equals: slug } }, await published()] },
      depth: DEPTH,
      limit: 1,
      draft,
      pagination: false,
    })
    return docs[0] ?? null
  })

export const getServiceBySlug = bySlug('services') as (slug: string) => Promise<Service | null>
export const getProjectBySlug = bySlug('projects') as (slug: string) => Promise<Project | null>
export const getArticleBySlug = bySlug('articles') as (slug: string) => Promise<Article | null>

/* ---------------- Lists ---------------- */

export const getServices = cache(async (): Promise<Service[]> => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'services',
    where: await published(),
    // Menus and cards only: the sections of each prestation stay out of the query.
    select: { layout: false, hero: false },
    sort: 'order',
    depth: 1,
    limit: 50,
    pagination: false,
  })
  // Lists never read the hero or the sections, which the select leaves out.
  return docs as Service[]
})

export const getProjects = cache(async (whereKey = '{}', limit = 100, sort = 'order'): Promise<Project[]> => {
  const payload = await getPayloadClient()
  const where = JSON.parse(whereKey) as Where
  const { docs } = await payload.find({
    collection: 'projects',
    where: { and: [where, await published()] },
    select: { description: false, steps: false, materials: false, related: false, meta: false },
    sort: [sort, 'title'],
    depth: DEPTH,
    limit,
    pagination: false,
  })
  // Cards never read the story, the steps or the SEO tab, which the select leaves out.
  return docs as Project[]
})

export const getArticles = cache(async (): Promise<Article[]> => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'articles',
    where: await published(),
    select: { layout: false },
    sort: '-publishedAt',
    depth: 1,
    limit: 50,
    pagination: false,
  })
  return docs
})

export const getCommunes = cache(async (): Promise<Commune[]> => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'communes', sort: 'name', depth: 1, limit: 200, pagination: false })
  return docs
})

export const getVisibleTeam = cache(async (): Promise<Team[]> => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'team',
    where: { visible: { equals: true } },
    sort: 'order',
    depth: 1,
    limit: 20,
    pagination: false,
  })
  return docs
})

export const getPublishedReviews = cache(async (): Promise<Review[]> => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'reviews',
    where: { published: { equals: true } },
    sort: '-date',
    depth: 0,
    limit: 30,
    pagination: false,
  })
  return docs
})

export const countPublishedProjects = cache(async (): Promise<number> => {
  const payload = await getPayloadClient()
  const { totalDocs } = await payload.count({ collection: 'projects', where: { _status: { equals: 'published' } } })
  return totalDocs
})

export const getForm = cache(async (id: number | string) => {
  const payload = await getPayloadClient()
  return payload.findByID({ collection: 'forms', id, depth: 0 })
})

/* ---------------- Redirects ---------------- */

/** Redirect target for an unknown address, or null. Matches with and without trailing slash. */
export const findRedirect = cache(async (path: string): Promise<{ to: string; permanent: boolean } | null> => {
  const payload = await getPayloadClient()
  const withSlash = path.endsWith('/') ? path : `${path}/`
  const withoutSlash = withSlash.length > 1 ? withSlash.slice(0, -1) : withSlash
  const { docs } = await payload.find({
    collection: 'redirects',
    where: { from: { in: [withSlash, withoutSlash] } },
    depth: 1,
    limit: 1,
    pagination: false,
  })
  const redirect = docs[0]
  if (!redirect) return null
  const { pathFor } = await import('@/payload/utilities/routes')
  const to =
    redirect.to?.type === 'reference' && redirect.to.reference && typeof redirect.to.reference.value === 'object'
      ? pathFor(redirect.to.reference.relationTo, redirect.to.reference.value)
      : redirect.to?.url
  if (!to) return null
  return { to, permanent: redirect.type !== '302' }
})

/* ---------------- Static generation ---------------- */

export async function listPublished(collection: 'pages' | 'services' | 'projects' | 'articles') {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection,
    where: { _status: { equals: 'published' } },
    depth: 0,
    limit: 1000,
    pagination: false,
    select: { slug: true, path: true, updatedAt: true, meta: true } as never,
  })
  return docs as unknown as { slug: string; path?: string | null; updatedAt: string; meta?: { noindex?: boolean | null } }[]
}

/* ---------------- Template wording ---------------- */

export const getSiteTexts = cache(async (): Promise<SiteTexts> => {
  const payload = await getPayloadClient()
  const stored = (await payload.findGlobal({ slug: 'site-texts', depth: 0 }).catch(() => null)) as Record<
    string,
    Record<string, string | null | undefined> | undefined
  > | null
  const merged = {} as Record<string, Record<string, string>>
  for (const [group, defaults] of Object.entries(SITE_TEXT_DEFAULTS)) {
    merged[group] = {}
    for (const [key, value] of Object.entries(defaults)) {
      const current = stored?.[group]?.[key]
      merged[group][key] = typeof current === 'string' && current.trim() ? current : value
    }
  }
  return merged as SiteTexts
})
