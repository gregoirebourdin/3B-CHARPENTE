import type { Metadata } from 'next'

import type { Media, SeoSetting } from '@/payload-types'
import { isMedia } from '@/components/ui/Media'

import { absoluteUrl } from './site'

type MetaGroup = {
  title?: string | null
  description?: string | null
  image?: number | Media | null
  noindex?: boolean | null
} | null | undefined

type Args = {
  meta: MetaGroup
  /** Used when the editor left the SEO title empty. */
  fallbackTitle: string
  fallbackDescription?: string | null
  path: string
  /** Main photo of the document, used when no share image was chosen. */
  image?: number | Media | null
  settings: SeoSetting
  type?: 'website' | 'article'
  publishedTime?: string | null
  modifiedTime?: string | null
}

function shareImage(...candidates: (number | Media | null | undefined)[]) {
  for (const candidate of candidates) {
    if (isMedia(candidate)) {
      const og = candidate.sizes?.og
      if (og?.url) return { url: og.url, width: og.width ?? 1200, height: og.height ?? 630, alt: candidate.alt }
      return { url: candidate.url as string, width: candidate.width ?? undefined, height: candidate.height ?? undefined, alt: candidate.alt }
    }
  }
  return null
}

/** Title with the brand, unless the editor already wrote it. */
export function formatTitle(title: string, template?: string | null) {
  if (/3B Charpente/i.test(title) || !template?.includes('%s')) return title
  return template.replace('%s', title)
}

/** Title, description, canonical, Open Graph and Twitter of every page, from the admin. */
export function buildMetadata({
  meta,
  fallbackTitle,
  fallbackDescription,
  path,
  image,
  settings,
  type = 'website',
  publishedTime,
  modifiedTime,
}: Args): Metadata {
  const title = formatTitle(meta?.title?.trim() || fallbackTitle, settings.titleTemplate)
  const description = meta?.description?.trim() || fallbackDescription || settings.defaultDescription || undefined
  const url = absoluteUrl(path)
  const img = shareImage(meta?.image, image, settings.defaultImage)
  const images = img ? [img] : undefined

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: meta?.noindex ? { index: false, follow: true } : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: '3B Charpente',
      locale: 'fr_FR',
      images,
      ...(type === 'article' ? { publishedTime: publishedTime ?? undefined, modifiedTime: modifiedTime ?? undefined } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: img ? [img.url] : undefined },
  }
}
