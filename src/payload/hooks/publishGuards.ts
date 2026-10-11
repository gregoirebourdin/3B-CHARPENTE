import type { CollectionBeforeChangeHook } from 'payload'
import { ValidationError } from 'payload'

import { pathIsReachable } from '../utilities/resolvePath'

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

/** Collects internal links that could be broken: rich-text URLs and empty page links. */
function collectLinks(data: unknown) {
  const urls: { url: string; path: string }[] = []
  const issues: Issue[] = []
  walk(data, (node, path) => {
    // Lexical link nodes
    if ((node.type === 'link' || node.type === 'autolink') && node.fields && typeof node.fields === 'object') {
      const fields = node.fields as { linkType?: string; url?: string; doc?: { value?: unknown } | null }
      if (fields.linkType === 'internal' && !fields.doc?.value) {
        issues.push({ path, message: 'Un lien de texte pointe vers une page supprimée.' })
      }
      if (fields.linkType === 'custom' && typeof fields.url === 'string' && fields.url.startsWith('/')) {
        urls.push({ url: fields.url, path })
      }
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
  return { urls, issues }
}

/**
 * Refuses to publish a document without meta description or with a broken
 * internal link. Drafts are never blocked: Jean can save his work at any time.
 */
export const publishGuard: CollectionBeforeChangeHook = async ({ data, req, collection, context }) => {
  if (data._status !== 'published' || context.skipPublishGuard) return data
  const issues: Issue[] = []

  const meta = data.meta as { description?: string | null } | undefined
  if (!meta?.description?.trim()) {
    issues.push({
      path: 'meta.description',
      message: 'Ajoutez une description pour Google (onglet « Référencement ») avant de publier.',
    })
  }

  const { urls, issues: linkIssues } = collectLinks(data)
  issues.push(...linkIssues)
  for (const { url, path } of urls) {
    const reachable = await pathIsReachable(url, { payload: req.payload, req, publishedOnly: false })
    if (!reachable) issues.push({ path, message: `Le lien vers ${url} mène à une page qui n’existe pas.` })
  }

  if (issues.length > 0) {
    throw new ValidationError({ collection: collection.slug, errors: issues })
  }
  return data
}
