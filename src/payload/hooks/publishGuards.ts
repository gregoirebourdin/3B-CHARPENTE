import type { CollectionBeforeChangeHook } from 'payload'
import { ValidationError } from 'payload'

import { pathIsReachable } from '../utilities/resolvePath'
import { normalizePath, pathFor, type LinkableCollection } from '../utilities/routes'

type Issue = { path: string; message: string }

/** Walks any JSON value and calls `visit` on every object with its dotted path. */
function walk(value: unknown, visit: (node: Record<string, unknown>, path: string) => void, path = ''): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, visit, path ? `${path}.${index}` : String(index)))
    return
  }
  if (value && typeof value === 'object') {
    const node = value as Record<string, unknown>
    visit(node, path)
    for (const [key, child] of Object.entries(node)) {
      walk(child, visit, path ? `${path}.${key}` : key)
    }
  }
}

/** Collects internal links that could be broken: rich-text links and empty page links. */
function collectLinks(data: unknown) {
  const urls: { url: string; path: string }[] = []
  const refs: { ref: string; label: string; path: string }[] = []
  const issues: Issue[] = []
  walk(data, (node, path) => {
    // Link marks of the rich texts (Tiptap): a page of the site (`ref`) or an address
    if (node.type === 'link' && node.attrs && typeof node.attrs === 'object') {
      const attrs = node.attrs as { href?: string | null; ref?: string | null }
      if (attrs.ref) refs.push({ ref: attrs.ref, label: attrs.href ?? attrs.ref, path })
      else if (typeof attrs.href === 'string' && attrs.href.startsWith('/') && !attrs.href.startsWith('//')) urls.push({ url: attrs.href, path })
    }
    // Link groups (src/payload/fields/link.ts)
    if (
      node.type === 'internal' &&
      'reference' in node &&
      !node.reference &&
      typeof node.label === 'string' &&
      node.label.trim() !== ''
    ) {
      issues.push({ path, message: `Le lien « ${node.label} » ne pointe vers aucune page.` })
    }
  })
  return { urls, refs, issues }
}

/**
 * Refuses to publish a document without meta description or with a broken
 * internal link. Drafts are never blocked: Jean can save his work at any time.
 */
export const publishGuard: CollectionBeforeChangeHook = async ({ data, originalDoc, req, collection, context }) => {
  if (data._status !== 'published' || context.skipPublishGuard) return data
  const issues: Issue[] = []

  const meta = data.meta as { description?: string | null } | undefined
  if (!meta?.description?.trim()) {
    issues.push({
      path: 'meta.description',
      message: 'Ajoutez une description pour Google (onglet « Référencement ») avant de publier.',
    })
  }

  const { urls, refs, issues: linkIssues } = collectLinks(data)
  issues.push(...linkIssues)
  // A text linked to a page of the site: the page must still exist (its address may have changed, the site follows it).
  for (const { ref, label, path } of refs) {
    const [collectionSlug, id] = ref.split(':')
    if (!collectionSlug || !id || !(['pages', 'services', 'projects', 'articles'] as string[]).includes(collectionSlug)) continue
    const found = await req.payload.count({ collection: collectionSlug as LinkableCollection, where: { id: { equals: id } }, req, overrideAccess: true })
    if (!found.totalDocs) issues.push({ path, message: `Le lien vers ${label} mène à une page supprimée.` })
  }
  // Links to the document itself (its sommaire, « #editeur »…) are always fine,
  // under its new address as under the one it is leaving (a redirect will follow).
  const own = new Set(
    [pathFor(collection.slug as LinkableCollection, { ...originalDoc, ...data }), originalDoc ? pathFor(collection.slug as LinkableCollection, originalDoc) : null]
      .filter((value): value is string => Boolean(value))
      .map((value) => normalizePath(value)),
  )
  for (const { url, path } of urls) {
    if (own.has(normalizePath(url.split('#')[0] ?? url))) continue
    const reachable = await pathIsReachable(url, { payload: req.payload, req, publishedOnly: false })
    if (!reachable) issues.push({ path, message: `Le lien vers ${url} mène à une page qui n’existe pas.` })
  }

  if (issues.length > 0) {
    throw new ValidationError({ collection: collection.slug, errors: issues })
  }
  return data
}
