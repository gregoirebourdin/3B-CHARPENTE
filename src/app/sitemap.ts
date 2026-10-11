import type { MetadataRoute } from 'next'

import { listPublished } from '@/lib/cms/queries'
import { absoluteUrl } from '@/lib/seo/site'
import { HOME_SLUG, pathFor } from '@/payload/utilities/routes'

/** Every published, indexable page, with its last modification date. Regenerated at each publication. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, services, projects, articles] = await Promise.all([
    listPublished('pages'),
    listPublished('services'),
    listPublished('projects'),
    listPublished('articles'),
  ])
  const entry = (collection: string, doc: (typeof pages)[number], priority: number) => ({
    url: absoluteUrl(pathFor(collection, doc) ?? '/'),
    lastModified: new Date(doc.updatedAt),
    priority,
  })
  return [
    ...pages
      .filter((doc) => !doc.meta?.noindex)
      .map((doc) => entry('pages', doc, doc.path === HOME_SLUG ? 1 : doc.path?.includes('/') ? 0.7 : 0.8)),
    ...services.filter((doc) => !doc.meta?.noindex).map((doc) => entry('services', doc, 0.9)),
    ...projects.filter((doc) => !doc.meta?.noindex).map((doc) => entry('projects', doc, 0.6)),
    ...articles.filter((doc) => !doc.meta?.noindex).map((doc) => entry('articles', doc, 0.6)),
  ]
}
