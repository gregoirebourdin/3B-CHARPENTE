'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

import { Icon } from '@/components/ui/Icon'

import styles from './Lightbox.module.css'

type Photo = { src: string; alt: string; caption: string; width?: number; height?: number }

/**
 * Full-screen viewer on <dialog>: arrows ← →, Escape, swipe. Photos are shown
 * at their real size at most (never stretched beyond the original).
 */
export function Lightbox({ id, children }: { id: string; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const root = useRef<HTMLDivElement>(null)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [index, setIndex] = useState(0)
  const touchX = useRef<number | null>(null)

  const collect = useCallback(
    () =>
      Array.from(root.current?.querySelectorAll<HTMLAnchorElement>(`[data-lightbox="${id}"]`) ?? []).map((link) => ({
        src: link.href,
        alt: link.dataset.alt ?? '',
        caption: link.dataset.caption ?? '',
        width: link.dataset.width ? Number(link.dataset.width) : undefined,
        height: link.dataset.height ? Number(link.dataset.height) : undefined,
      })),
    [id],
  )

  useEffect(() => {
    const element = root.current
    if (!element) return
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(`[data-lightbox="${id}"]`)
      if (!link || event.metaKey || event.ctrlKey || event.shiftKey) return
      event.preventDefault()
      setPhotos(collect())
      setIndex(Number(link.dataset.index ?? 0))
      dialog.current?.showModal()
    }
    element.addEventListener('click', onClick)
    return () => element.removeEventListener('click', onClick)
  }, [collect, id])

  const go = useCallback((delta: number) => setIndex((current) => (current + delta + photos.length) % photos.length), [photos.length])

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') go(1)
    if (event.key === 'ArrowLeft') go(-1)
  }

  const photo = photos[index]

  return (
    <div ref={root}>
      {children}
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label="Photo en grand"
        onKeyDown={onKeyDown}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current?.close()
        }}
        onTouchStart={(event) => {
          touchX.current = event.touches[0]?.clientX ?? null
        }}
        onTouchEnd={(event) => {
          const start = touchX.current
          const end = event.changedTouches[0]?.clientX
          if (start !== null && end !== undefined && Math.abs(end - start) > 50) go(end < start ? 1 : -1)
          touchX.current = null
        }}
      >
        {photo ? (
          <figure className={styles.figure}>
            {/* eslint-disable-next-line @next/next/no-img-element -- original file at native size, already optimised */}
            <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} className={styles.image} />
            <figcaption className={styles.caption}>
              {photo.caption}
              <span className={styles.counter}>
                {index + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
        ) : null}
        <button type="button" className={`${styles.button} ${styles.close}`} onClick={() => dialog.current?.close()}>
          <Icon name="close" size={24} />
          <span className="visually-hidden">Fermer</span>
        </button>
        {photos.length > 1 ? (
          <>
            <button type="button" className={`${styles.button} ${styles.prev}`} onClick={() => go(-1)}>
              <Icon name="arrowLeft" size={24} />
              <span className="visually-hidden">Photo précédente</span>
            </button>
            <button type="button" className={`${styles.button} ${styles.next}`} onClick={() => go(1)}>
              <Icon name="arrowRight" size={24} />
              <span className="visually-hidden">Photo suivante</span>
            </button>
          </>
        ) : null}
      </dialog>
    </div>
  )
}
