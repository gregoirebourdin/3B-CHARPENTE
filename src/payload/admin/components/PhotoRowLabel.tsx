'use client'

import { useRowLabel } from '@payloadcms/ui'

import { thumbOf, useMedia } from './useMedia'

type Row = { image?: number | { id: number } | null; caption?: string | null }

/**
 * Header of a photo in a gallery: a real thumbnail and its caption, so the
 * gallery reads like a contact sheet even when its rows are folded.
 */
export function PhotoRowLabel() {
  const { data, rowNumber } = useRowLabel<Row>()
  const id = data?.image && typeof data.image === 'object' ? data.image.id : (data?.image ?? null)
  const docs = useMedia('media', id ? [Number(id)] : [])
  const doc = id ? docs[Number(id)] : undefined
  const src = thumbOf(doc)
  const title = data?.caption || doc?.caption || doc?.alt || 'Photo sans légende'

  return (
    <span className="tw:flex tw:min-w-0 tw:items-center tw:gap-3 tw:py-1">
      <span className="tw:block tw:h-12 tw:w-16 tw:shrink-0 tw:overflow-hidden tw:rounded-[8px] tw:bg-surface">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt="" className="tw:size-full tw:object-cover" />
        ) : null}
      </span>
      <span className="tw:grid tw:min-w-0">
        <span className="tw:text-sm tw:text-stone-text">
          Photo {String((rowNumber ?? 0) + 1).padStart(2, '0')}
        </span>
        <span className="tw:truncate tw:text-[15px] tw:font-semibold tw:text-ink">{title}</span>
      </span>
    </span>
  )
}
