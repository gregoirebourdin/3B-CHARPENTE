import Image from 'next/image'

import type { Media as MediaDoc } from '@/payload-types'

type Props = {
  media: MediaDoc | number | string | null | undefined
  /** CSS `sizes`: how wide the image is displayed (drives the srcset). */
  sizes: string
  priority?: boolean
  className?: string
  /** Fill the parent (which must be positioned and sized). */
  fill?: boolean
  /** Override the stored alt (rarely needed). */
  alt?: string
  quality?: 70 | 75 | 82
}

const SERVER_ORIGIN = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000').origin
  } catch {
    return ''
  }
})()

/** Files served by Payload itself (local storage) become same-origin paths; Blob URLs stay absolute. */
export function mediaSrc(url: string): string {
  if (SERVER_ORIGIN && url.startsWith(SERVER_ORIGIN)) return url.slice(SERVER_ORIGIN.length) || '/'
  if (url.startsWith('http://localhost')) return url.replace(/^http:\/\/localhost(:\d+)?/, '')
  return url
}

export const isMedia = (value: unknown): value is MediaDoc =>
  Boolean(value && typeof value === 'object' && 'url' in value && (value as MediaDoc).url)

/**
 * Every photo of the site goes through here: AVIF/WebP in 480 → 1920 px via
 * next/image, width/height declared (no layout shift), lazy-loaded unless
 * `priority`, focal point respected when cropped, blurred placeholder.
 */
export function Media({ media, sizes, priority, className, fill, alt, quality = 75 }: Props) {
  if (!isMedia(media)) return null
  const focal =
    typeof media.focalX === 'number' && typeof media.focalY === 'number' ? `${media.focalX}% ${media.focalY}%` : undefined
  const common = {
    src: mediaSrc(media.url as string),
    alt: alt ?? media.alt ?? '',
    sizes,
    quality,
    priority,
    fetchPriority: priority ? ('high' as const) : undefined,
    className,
    placeholder: media.blurDataURL ? ('blur' as const) : ('empty' as const),
    blurDataURL: media.blurDataURL ?? undefined,
    style: focal ? { objectPosition: focal } : undefined,
  }
  if (fill) return <Image {...common} fill />
  return <Image {...common} width={media.width ?? 1200} height={media.height ?? 800} />
}
