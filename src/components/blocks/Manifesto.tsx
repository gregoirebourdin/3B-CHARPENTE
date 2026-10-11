import { AccentTitle } from '@/components/ui/AccentTitle'
import { CmsLink } from '@/components/ui/CmsLink'
import { Media, isMedia } from '@/components/ui/Media'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink } from '@/lib/links'
import type { ManifestoBlock as Data } from '@/payload-types'

import styles from './Manifesto.module.css'
import type { BlockProps } from './types'

/**
 * Night section: white title with sage words, text, quote, strong sentence.
 * Only an ambiance photo (the larch forest) may fill the background, under a
 * dark veil; a chantier photo is shown in a frame next to the text, never
 * stretched. Without ambiance photo, the contour lines of the relief.
 */
export function Manifesto({ block, context }: BlockProps<Data>) {
  const image = isMedia(block.image) ? block.image : null
  const ambiance = image?.kind === 'ambiance'
  const requested = block.layout ?? 'centered'
  const layout = image && !ambiance && requested !== 'columns' ? 'split' : requested
  const framed = layout === 'split' && image
  const cta = resolveLink(block.cta, context.company)

  return (
    <section id={block.anchor || undefined} className={`${styles.manifesto} ${styles[layout]}`}>
      {image && ambiance && !framed ? (
        <div className={styles.background} aria-hidden="true">
          <Media media={image} alt="" sizes="100vw" quality={70} />
        </div>
      ) : (
        <div className={styles.motif} aria-hidden="true" />
      )}
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy} data-reveal="">
          {block.kicker ? (
            <p className={`kicker ${styles.kicker}`} data-numbered="">
              {block.kicker}
            </p>
          ) : null}
          {block.title ? <AccentTitle as="h2" title={block.title} accent={block.titleAccent} className={styles.title} /> : null}
          {block.text ? <RichText data={block.text} className={styles.text} /> : null}
          {block.items?.length ? (
            <ul className={layout === 'columns' ? styles.columnsList : styles.points}>
              {block.items.map((item, index) => (
                <li key={item.id ?? index}>
                  {layout === 'columns' ? <span className={styles.itemNum}>{String(index + 1).padStart(2, '0')}</span> : null}
                  {item.title ? <h3>{item.title}</h3> : null}
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          ) : null}
          {block.quote?.text ? (
            <figure className={styles.quote}>
              <blockquote>
                <p>{block.quote.text}</p>
              </blockquote>
              {block.quote.author ? <figcaption>{block.quote.author}</figcaption> : null}
            </figure>
          ) : null}
          {block.emphasis ? <p className={styles.emphasis}>{block.emphasis}</p> : null}
          {cta ? <CmsLink link={cta} variant="outlineLight" arrow /> : null}
        </div>
        {framed ? (
          <figure className={styles.figure} data-reveal="">
            <div className={styles.frame}>
              <Media media={image} fill sizes="(min-width: 1000px) 500px, 92vw" />
            </div>
            {image.caption ? <figcaption>{image.caption}</figcaption> : null}
          </figure>
        ) : null}
      </div>
    </section>
  )
}
