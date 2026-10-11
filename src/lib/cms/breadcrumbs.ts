import 'server-only'

import type { Crumb } from '@/components/ui/Breadcrumbs'
import type { Page, Service } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

import { getPayloadClient } from './client'
import { getPageByPath, getSiteTexts } from './queries'

const label = (page: Pick<Page, 'title' | 'breadcrumbLabel'>) => page.breadcrumbLabel || page.title

async function parentChain(page: Page): Promise<Crumb[]> {
  const chain: Crumb[] = []
  let parent = page.parent
  let guard = 0
  while (parent && guard < 5) {
    const doc =
      typeof parent === 'object'
        ? parent
        : ((await (await getPayloadClient()).findByID({ collection: 'pages', id: parent, depth: 0 }).catch(() => null)) as Page | null)
    if (!doc) break
    chain.unshift({ name: label(doc), path: pathFor('pages', doc) ?? '/' })
    parent = doc.parent
    guard += 1
  }
  return chain
}

const home = async (): Promise<Crumb> => ({ name: (await getSiteTexts()).general.breadcrumbHome, path: '/' })

export async function pageCrumbs(page: Page): Promise<Crumb[]> {
  return [await home(), ...(await parentChain(page)), { name: label(page), path: pathFor('pages', page) ?? '/' }]
}

export async function serviceCrumbs(service: Service): Promise<Crumb[]> {
  return [await home(), { name: service.shortLabel || service.title, path: pathFor('services', service) ?? '/' }]
}

/** Crumb of a listing page (Réalisations, Conseils) using its own title in the admin. */
export async function listingCrumb(path: 'realisations' | 'conseils'): Promise<Crumb> {
  const page = await getPageByPath(path)
  return { name: page ? label(page) : path, path: `/${path}/` }
}

export async function homeCrumb() {
  return home()
}
