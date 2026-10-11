import { AccentTitle } from '@/components/ui/AccentTitle'
import { CmsLink } from '@/components/ui/CmsLink'
import { Media, isMedia } from '@/components/ui/Media'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink } from '@/lib/links'
import type { ManifestoBlock as Data } from '@/payload-types'

import styles from './Manifesto.module.css'
import type { BlockProps } from './types'

/** Dark "forest" section: white title with sage words, text, quote, strong sentence. */
export function Manifesto({ block, context }: BlockProps<Data>) {
  const image = isMedia(block.image) ? block.image : null
  const layout = block.layout ?? 'centered'
  const cta = resolveLink(block.cta, context.company)
  const split = layout === 'split' && image

  return (
    <section id={block.anchor || undefined} className={`${styles.manifesto} ${styles[layout]}`}>
      {image && !split ? (
        <div className={styles.background} aria-hidden="true">
          <Media media={image} alt="" sizes="100vw" quality={70} />
        </div>
      ) : null}
      <div className={`container ${styles.inner}`} data-reveal="">
        <div className={styles.copy}>
          {block.kicker ? <p className={styles.kicker}>{block.kicker}</p> : null}
          {block.title ? <AccentTitle as="h2" title={block.title} accent={block.titleAccent} className={styles.title} /> : null}
          {block.text ? <RichText data={block.text} className={styles.text} /> : null}
          {block.items?.length ? (
            <ul className={layout === 'columns' ? styles.columnsList : styles.points}>
              {block.items.map((item, index) => (
                <li key={item.id ?? index}>
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
        {split ? (
          <figure className={styles.figure}>
            <Media media={image} sizes="(min-width: 1000px) 480px, 92vw" />
            {image.caption ? <figcaption>{image.caption}</figcaption> : null}
          </figure>
        ) : null}
      </div>
    </section>
  )
}
