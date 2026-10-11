import type { Metadata } from 'next'
import { notFound, permanentRedirect, redirect } from 'next/navigation'

import { findRedirect, getSeoSettings } from '@/lib/cms/queries'
import { buildMetadata } from '@/lib/seo/metadata'
import type { Article, Page, Project, Service } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

/** Unknown address: follow a redirect from the admin if there is one, else 404. */
export async function redirectOrNotFound(path: string): Promise<never> {
  const target = await findRedirect(path)
  if (target && target.to !== path) {
    if (target.permanent) permanentRedirect(target.to)
    redirect(target.to)
  }
  notFound()
}

export async function pageMetadata(page: Page): Promise<Metadata> {
  return buildMetadata({
    meta: page.meta,
    fallbackTitle: page.title,
    fallbackDescription: page.tldr,
    path: pathFor('pages', page) ?? '/',
    image: page.hero.images?.[0],
    settings: await getSeoSettings(),
  })
}

export async function serviceMetadata(service: Service): Promise<Metadata> {
  return buildMetadata({
    meta: service.meta,
    fallbackTitle: service.title,
    fallbackDescription: service.tldr,
    path: pathFor('services', service) ?? '/',
    image: service.image ?? service.hero.images?.[0],
    settings: await getSeoSettings(),
  })
}

export async function projectMetadata(project: Project): Promise<Metadata> {
  return buildMetadata({
    meta: project.meta,
    fallbackTitle: project.title.replace(/\*\*/g, ''),
    fallbackDescription: project.summary,
    path: pathFor('projects', project) ?? '/',
    image: project.heroImage,
    settings: await getSeoSettings(),
    type: 'article',
    publishedTime: project.publishedAt,
    modifiedTime: project.updatedAt,
  })
}

export async function articleMetadata(article: Article): Promise<Metadata> {
  return buildMetadata({
    meta: article.meta,
    fallbackTitle: article.title.replace(/\*\*/g, ''),
    fallbackDescription: article.excerpt,
    path: pathFor('articles', article) ?? '/',
    image: article.image,
    settings: await getSeoSettings(),
    type: 'article',
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  })
}
