import { Media, isMedia } from '@/components/ui/Media'
import { Section } from '@/components/ui/Section'
import type { QuoteBlock as Data } from '@/payload-types'

import styles from './Quote.module.css'
import type { BlockProps } from './types'

export function Quote({ block }: BlockProps<Data>) {
  const image = isMedia(block.image) ? block.image : null
  return (
    <Section tone={block.tone} anchor={block.anchor} spacing="tight">
      <figure className={`${styles.quote} ${image ? styles.withImage : ''}`} data-reveal="">
        {image ? (
          <div className={styles.image}>
            <Media media={image} sizes="(min-width: 900px) 360px, 92vw" />
          </div>
        ) : null}
        <div>
          <span className={styles.mark} aria-hidden="true">
            «
          </span>
          <blockquote>
            <p>{block.text}</p>
          </blockquote>
          {block.author ? (
            <figcaption className={styles.author}>
              <strong>{block.author}</strong>
              {block.role ? <span>, {block.role}</span> : null}
            </figcaption>
          ) : null}
        </div>
      </figure>
    </Section>
  )
}
