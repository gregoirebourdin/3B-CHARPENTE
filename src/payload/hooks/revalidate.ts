import { revalidatePath } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
  PayloadRequest,
  RequestContext,
} from 'payload'

/**
 * Pages are statically generated. When anything visible changes, the whole
 * site layout is marked stale and regenerated on the next visit. On a site of
 * this size it is the most reliable strategy: a project, a phone number or a
 * menu item can appear on dozens of pages, and none of them can be forgotten.
 */
function revalidateSite(req: PayloadRequest, context: RequestContext, reason: string) {
  if (context.disableRevalidate) return
  try {
    revalidatePath('/', 'layout')
    revalidatePath('/sitemap.xml')
    revalidatePath('/robots.txt')
    revalidatePath('/llms.txt')
    req.payload.logger.info(`[revalidate] site régénéré (${reason})`)
  } catch {
    // Outside a Next.js request (seed script, migrations): nothing to revalidate.
  }
}

export const revalidateAfterChange: CollectionAfterChangeHook = ({ doc, req, context, collection }) => {
  revalidateSite(req, context, `${collection.slug} ${doc?.id ?? ''}`)
  return doc
}

export const revalidateAfterDelete: CollectionAfterDeleteHook = ({ doc, req, context, collection }) => {
  revalidateSite(req, context, `${collection.slug} supprimé`)
  return doc
}

export const revalidateGlobal: GlobalAfterChangeHook = ({ doc, req, context, global }) => {
  revalidateSite(req, context, `réglage ${global.slug}`)
  return doc
}

export const revalidateHooks = {
  afterChange: [revalidateAfterChange],
  afterDelete: [revalidateAfterDelete],
}
