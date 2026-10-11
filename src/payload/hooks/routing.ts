import type {
  CollectionAfterChangeHook,
  CollectionBeforeChangeHook,
  PayloadRequest,
} from 'payload'
import { ValidationError } from 'payload'

import type { Redirect } from '../../payload-types'
import { pathFor, type LinkableCollection } from '../utilities/routes'

type RedirectData = Omit<Redirect, 'id' | 'createdAt' | 'updatedAt'>

type Routable = { id?: number | string; slug?: string | null; path?: string | null; parent?: unknown; _status?: string | null }

const idOf = (value: unknown): number | string | null => {
  if (value === null || value === undefined) return null
  if (typeof value === 'object' && 'id' in value) return (value as { id: number | string }).id
  return value as number | string
}

/** Builds "parent/child" for nested pages (3b-recup/diagnostic-pemd). */
async function buildPagePath(slug: string, parent: unknown, req: PayloadRequest): Promise<string> {
  const segments = [slug]
  let parentId = idOf(parent)
  let guard = 0
  while (parentId !== null && guard < 5) {
    const parentDoc = (await req.payload.findByID({
      collection: 'pages',
      id: parentId,
      depth: 0,
      draft: true,
      req,
      select: { slug: true, parent: true },
    })) as Routable
    if (!parentDoc?.slug) break
    segments.unshift(parentDoc.slug)
    parentId = idOf(parentDoc.parent)
    guard += 1
  }
  return segments.join('/')
}

/** pages.beforeChange: keeps the computed `path` in sync with slug + parents. */
export const computePagePath: CollectionBeforeChangeHook = async ({ data, originalDoc, req }) => {
  const slug = data.slug ?? originalDoc?.slug
  if (!slug) return data
  const parent = 'parent' in data ? data.parent : originalDoc?.parent
  if (idOf(parent) !== null && idOf(parent) === originalDoc?.id) {
    throw new ValidationError({
      collection: 'pages',
      errors: [{ path: 'parent', message: 'Une page ne peut pas être sa propre page parente.' }],
    })
  }
  data.path = await buildPagePath(slug, parent, req)
  return data
}

/**
 * Pages without parent and services share the root of the site
 * (/contact/, /charpente-bois/): two documents can never claim the same address.
 */
export const preventRootCollision =
  (collection: 'pages' | 'services'): CollectionBeforeChangeHook =>
  async ({ data, originalDoc, req }) => {
    const slug = data.slug ?? originalDoc?.slug
    if (!slug) return data
    const isRoot = collection === 'services' || idOf('parent' in data ? data.parent : originalDoc?.parent) === null
    if (!isRoot) return data
    const other = collection === 'pages' ? 'services' : 'pages'
    const field = other === 'pages' ? 'path' : 'slug'
    const { totalDocs } = await req.payload.count({
      collection: other,
      where: { [field]: { equals: slug } },
      req,
    })
    if (totalDocs > 0) {
      throw new ValidationError({
        collection,
        errors: [
          {
            path: 'slug',
            message: `L’adresse /${slug}/ est déjà utilisée par ${other === 'pages' ? 'une page' : 'une prestation'}.`,
          },
        ],
      })
    }
    return data
  }

/**
 * Remembers the address of the currently published version, so that the
 * afterChange hook can create a redirect when a published address changes.
 */
/**
 * Published address before the change, per request and per document. Kept on
 * the request object itself: Payload hands the afterChange hooks a different
 * `context` object than the beforeChange ones, so a value set there is lost.
 */
const previousPaths = new WeakMap<object, Map<string, string | null>>()
const keyOf = (collection: LinkableCollection, id: number | string) => `${collection}:${id}`

export const rememberPublishedPath =
  (collection: LinkableCollection): CollectionBeforeChangeHook =>
  async ({ operation, originalDoc, req }) => {
    if (operation !== 'update' || !originalDoc?.id) return
    const published = (await req.payload
      .findByID({ collection, id: originalDoc.id, depth: 0, draft: false, req, disableErrors: true })
      .catch(() => null)) as Routable | null
    const paths = previousPaths.get(req) ?? new Map<string, string | null>()
    paths.set(keyOf(collection, originalDoc.id), published?._status === 'published' ? pathFor(collection, published) : null)
    previousPaths.set(req, paths)
  }

/** Creates (or refreshes) a 301 from the old address to the document. */
export const createRedirectOnPathChange =
  (collection: LinkableCollection): CollectionAfterChangeHook =>
  async ({ doc, req, context }) => {
    const paths = previousPaths.get(req)
    const previous = paths?.get(keyOf(collection, doc.id))
    paths?.delete(keyOf(collection, doc.id))
    if (!previous || doc._status !== 'published') return doc
    const current = pathFor(collection, doc)
    if (!current || current === previous || previous === '/') return doc

    const payload = req.payload
    // A redirect from the new address would now loop: remove it.
    await payload.delete({ collection: 'redirects', where: { from: { equals: current } }, req })

    const existing = await payload.find({
      collection: 'redirects',
      where: { from: { equals: previous } },
      limit: 1,
      depth: 0,
      req,
    })
    const data = {
      from: previous,
      type: '301' as const,
      to: { type: 'reference' as const, reference: { relationTo: collection, value: doc.id } },
    } as RedirectData
    if (existing.docs[0]) {
      await payload.update({ collection: 'redirects', id: existing.docs[0].id, data, req })
    } else {
      await payload.create({ collection: 'redirects', data, req })
    }
    payload.logger.info(`[redirect] ${previous} → ${current}`)

    // Child pages follow their parent: re-save them so their path is recomputed.
    if (collection === 'pages') {
      const children = await payload.find({
        collection: 'pages',
        where: { parent: { equals: doc.id } },
        depth: 0,
        limit: 100,
        req,
      })
      for (const child of children.docs) {
        await payload.update({
          collection: 'pages',
          id: child.id,
          data: {},
          req,
          context: { disableRevalidate: context.disableRevalidate },
        })
      }
    }
    return doc
  }

export const routingHooks = (collection: LinkableCollection) => ({
  beforeChange: [rememberPublishedPath(collection)],
  afterChange: [createRedirectOnPathChange(collection)],
})
