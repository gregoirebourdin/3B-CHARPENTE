import { Media, isMedia } from '@/components/ui/Media'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { GalleryBlock as Data, Media as MediaDoc } from '@/payload-types'

import { Lightbox } from './Lightbox'
import styles from './Gallery.module.css'
import type { BlockProps } from './types'

export type GalleryItem = { image: MediaDoc; caption?: string | null }

/**
 * Photo grid with captions underneath. Each photo is a link to the full-size
 * file (works without JavaScript); with JavaScript the link opens a
 * full-screen viewer with keyboard navigation.
 */
export function PhotoGrid({ items, id }: { items: GalleryItem[]; id: string }) {
  return (
    <Lightbox id={id}>
      <ul className={styles.grid}>
        {items.map(({ image, caption }, index) => {
          const text = caption || image.caption || ''
          return (
            <li key={`${image.id}-${index}`} className={styles.item} data-reveal="" style={{ ['--reveal-delay' as string]: `${(index % 3) * 70}ms` }}>
              <figure>
                <a
                  href={image.url ?? '#'}
                  className={styles.link}
                  data-lightbox={id}
                  data-index={index}
                  data-caption={text}
                  data-alt={image.alt}
                  data-width={image.width ?? undefined}
                  data-height={image.height ?? undefined}
                >
                  <Media media={image} sizes="(min-width: 1100px) 380px, (min-width: 700px) 45vw, 92vw" />
                  <span className="visually-hidden">Agrandir la photo</span>
                </a>
                {text ? <figcaption className={styles.caption}>{text}</figcaption> : null}
              </figure>
            </li>
          )
        })}
      </ul>
    </Lightbox>
  )
}

export function Gallery({ block }: BlockProps<Data>) {
  const items = (block.images ?? [])
    .filter((item) => isMedia(item.image))
    .map((item) => ({ image: item.image as MediaDoc, caption: item.caption }))
  if (!items.length) return null
  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} />
      <PhotoGrid items={items} id={`galerie-${block.id ?? 'page'}`} />
    </Section>
  )
}
