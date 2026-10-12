'use client'

import { pathFor } from '@/payload/utilities/routes'

export type SitePage = { label: string; kind: string; href: string; ref: string }

const KINDS = [
  { collection: 'pages', kind: 'Page' },
  { collection: 'services', kind: 'Prestation' },
  { collection: 'projects', kind: 'Chantier' },
  { collection: 'articles', kind: 'Conseil' },
] as const

let loading: Promise<SitePage[]> | null = null

/** Every page of the site that a text can link to (loaded once per visit of the admin). */
export function loadSitePages(): Promise<SitePage[]> {
  if (!loading) {
    loading = Promise.all(
      KINDS.map(async ({ collection, kind }): Promise<SitePage[]> => {
        const response = await fetch(`/api/${collection}?depth=0&limit=500&pagination=false&select[title]=true&select[slug]=true&select[path]=true`, {
          credentials: 'include',
        })
        const { docs = [] } = (await response.json().catch(() => ({}))) as { docs?: { id: number; title?: string; slug?: string; path?: string }[] }
        const pages: SitePage[] = []
        for (const doc of docs) {
          const href = pathFor(collection, doc)
          if (href) pages.push({ label: (doc.title ?? '').replace(/\*\*/g, ''), kind, href, ref: `${collection}:${doc.id}` })
        }
        return pages
      }),
    )
      .then((lists) => lists.flat())
      .catch((): SitePage[] => {
        loading = null
        return []
      })
  }
  return loading
}
