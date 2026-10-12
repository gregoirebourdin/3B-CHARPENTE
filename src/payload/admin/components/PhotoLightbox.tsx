'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, type ReactNode } from 'react'

import { Button } from '../ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '../ui/dialog'

export type LightboxPhoto = {
  src: string
  alt?: string | null
  caption?: string | null
  width?: number | null
  height?: number | null
}

/**
 * Full-size viewer (shadcn Dialog): the photo as large as the screen allows,
 * its caption and description, and « précédente / suivante » with the arrow
 * keys when there are several.
 */
export function PhotoLightbox({
  photos,
  index,
  onIndexChange,
  open,
  onOpenChange,
  action,
}: {
  photos: LightboxPhoto[]
  index: number
  onIndexChange: (index: number) => void
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Optional button next to the caption, e.g. « Modifier la description ». */
  action?: (index: number) => ReactNode
}) {
  const photo = photos[index]
  const many = photos.length > 1
  const go = (step: number) => onIndexChange((index + step + photos.length) % photos.length)

  useEffect(() => {
    if (!open || !many) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (!photo) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="tw:max-w-[min(1180px,calc(100vw-32px))] tw:gap-3 tw:p-3 tw:sm:p-4"
      >
        <div className="tw:relative tw:grid tw:place-items-center tw:overflow-hidden tw:rounded-sm tw:bg-night">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt ?? ''}
            width={photo.width ?? undefined}
            height={photo.height ?? undefined}
            className="tw:block tw:h-auto tw:max-h-[calc(100vh-200px)] tw:w-auto tw:max-w-full tw:object-contain"
          />
          {many ? (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={() => go(-1)}
                className="tw:absolute tw:top-1/2 tw:left-3 tw:-translate-y-1/2 tw:rounded-full tw:shadow-md"
                aria-label="Photo précédente"
              >
                <ChevronLeft aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => go(1)}
                className="tw:absolute tw:top-1/2 tw:right-3 tw:-translate-y-1/2 tw:rounded-full tw:shadow-md"
                aria-label="Photo suivante"
              >
                <ChevronRight aria-hidden="true" />
              </Button>
            </>
          ) : null}
          <DialogClose asChild>
            <Button
              variant="outline"
              size="sm"
              className="tw:absolute tw:top-3 tw:right-3 tw:rounded-full tw:shadow-md"
            >
              <X aria-hidden="true" />
              Fermer
            </Button>
          </DialogClose>
        </div>
        <div className="tw:flex tw:flex-wrap tw:items-end tw:justify-between tw:gap-x-4 tw:gap-y-2 tw:px-1">
          <div className="tw:grid tw:min-w-0 tw:flex-[1_1_280px] tw:gap-1">
            <DialogTitle className="tw:text-[19px]">
              {photo.caption || photo.alt || 'Photo'}
            </DialogTitle>
            <DialogDescription className="tw:text-sm">
              {[
                many ? `${index + 1} / ${photos.length}` : null,
                photo.caption && photo.alt ? photo.alt : null,
              ]
                .filter(Boolean)
                .join(' · ')}
              {many ? (
                <span className="tw:max-desk:hidden">
                  {' · '}Flèches ← → du clavier pour passer d’une photo à l’autre.
                </span>
              ) : null}
            </DialogDescription>
          </div>
          {action ? action(index) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
