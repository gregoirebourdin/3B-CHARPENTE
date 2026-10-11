import type { Metadata } from 'next'

import { PageView } from '@/components/templates/PageView'
import { ServiceView } from '@/components/templates/ServiceView'
import { getPageByPath, getServiceBySlug, listPublished } from '@/lib/cms/queries'
import { HOME_SLUG } from '@/payload/utilities/routes'

import { pageMetadata, redirectOrNotFound, serviceMetadata } from '../metadata-helpers'

type Props = { params: Promise<{ path: string[] }> }

/** /charpente-bois/ (service) or /3b-recup/diagnostic-pemd/ (page with parents). */
async function resolve(segments: string[]) {
  const path = segments.map(decodeURIComponent).join('/').toLowerCase()
  const page = path === HOME_SLUG ? null : await getPageByPath(path)
  if (page) return { page }
  if (segments.length === 1) {
    const service = await getServiceBySlug(path)
    if (service) return { service }
  }
  return { path: `/${path}/` }
}

export async function generateStaticParams() {
  const [pages, services] = await Promise.all([listPublished('pages'), listPublished('services')]).catch(() => [[], []])
  return [
    ...pages.filter((page) => page.path && page.path !== HOME_SLUG).map((page) => ({ path: page.path!.split('/') })),
    ...services.map((service) => ({ path: [service.slug] })),
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = await resolve((await params).path)
  if (found.page) return pageMetadata(found.page)
  if (found.service) return serviceMetadata(found.service)
  return { robots: { index: false } }
}

export default async function CatchAllPage({ params }: Props) {
  const found = await resolve((await params).path)
  if (found.page) return <PageView page={found.page} />
  if (found.service) return <ServiceView service={found.service} />
  return redirectOrNotFound(found.path ?? '/')
}
