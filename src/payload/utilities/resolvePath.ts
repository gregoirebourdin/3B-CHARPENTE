import type { Payload, PayloadRequest, Where } from 'payload'

import { HOME_SLUG, normalizePath, type LinkableCollection } from './routes'

export type PathMatch = { collection: LinkableCollection; id: number | string } | null

type Options = { payload: Payload; req?: PayloadRequest; publishedOnly?: boolean }

/**
 * Finds which document lives at a public path. Used by the publication
 * guard (broken internal links) and mirrors the routing of src/app/(site).
 */
export async function matchPath(rawPath: string, { payload, req, publishedOnly = true }: Options): Promise<PathMatch> {
  const path = normalizePath(rawPath)
  const segments = path.split('/').filter(Boolean)
  const status: Where = publishedOnly ? { _status: { equals: 'published' } } : {}

  const findOne = async (collection: LinkableCollection, field: 'slug' | 'path', value: string) => {
    const { docs } = await payload.find({
      collection,
      where: { and: [{ [field]: { equals: value } }, status] },
      limit: 1,
      depth: 0,
      pagination: false,
      req,
      select: { slug: true },
    })
    const doc = docs[0]
    return doc ? { collection, id: doc.id } : null
  }

  if (segments.length === 0) return findOne('pages', 'path', HOME_SLUG)

  const [first, second] = segments
  if (segments.length === 2 && first === 'realisations' && second) return findOne('projects', 'slug', second)
  if (segments.length === 2 && first === 'conseils' && second) return findOne('articles', 'slug', second)

  const page = await findOne('pages', 'path', segments.join('/'))
  if (page) return page
  if (segments.length === 1 && first) return findOne('services', 'slug', first)
  return null
}

/** True when a path is served by a document or by a redirect. */
export async function pathIsReachable(rawPath: string, options: Options): Promise<boolean> {
  if (await matchPath(rawPath, options)) return true
  const path = normalizePath(rawPath)
  const { totalDocs } = await options.payload.count({
    collection: 'redirects',
    where: { from: { in: [path, path.replace(/\/$/, '')] } },
    req: options.req,
  })
  return totalDocs > 0
}
