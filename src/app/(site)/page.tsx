import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageView } from '@/components/templates/PageView'
import { getPageByPath } from '@/lib/cms/queries'
import { HOME_SLUG } from '@/payload/utilities/routes'

import { pageMetadata } from './metadata-helpers'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByPath(HOME_SLUG)
  return page ? pageMetadata(page) : {}
}

export default async function HomePage() {
  const page = await getPageByPath(HOME_SLUG)
  if (!page) notFound()
  return <PageView page={page} />
}
