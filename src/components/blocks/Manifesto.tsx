import { AccentTitle } from '@/components/ui/AccentTitle'
import { CmsLink } from '@/components/ui/CmsLink'
import { Media, isMedia } from '@/components/ui/Media'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink } from '@/lib/links'
import type { ManifestoBlock as Data } from '@/payload-types'

import styles from './Manifesto.module.css'
import type { BlockProps } from './types'

/**
 * Night section, one per page at most: white title with sage words, one or two
 * sentences, then short points as cards. Only the mood photo (the larch forest)
 * may fill the background, under a dark veil; a chantier photo stays framed,
 * next to the quote and the points.
 */
export function Manifesto({ block, context }: BlockProps<Data>) {
  const image = isMedia(block.image) ? block.image : null
  const ambiance = image?.kind === 'ambiance'
  const framed = image && !ambiance ? image : null
  const items = block.items ?? []
  const cta = resolveLink(block.cta, context.company)
  const tag = framed?.caption && framed.caption.length <= 40 ? framed.caption : null

  const heading = (
    <>
      {block.kicker ? <p className="kicker">{block.kicker}</p> : null}
      {block.title ? <AccentTitle as="h2" title={block.title} accent={block.titleAccent} className={styles.title} /> : null}
    </>
  )
  const quote = block.quote?.text ? (
    <figure className={styles.quote}>
      <blockquote>
        <p>{block.quote.text}</p>
      </blockquote>
      {block.quote.author ? <figcaption>{block.quote.author}</figcaption> : null}
    </figure>
  ) : null

  if (framed) {
    return (
      <section id={block.anchor || undefined} className={styles.manifesto} data-tone="dark">
        <div className={`container ${styles.split}`}>
          <div className={styles.aside} data-reveal="">
            {heading}
            <figure className={styles.figure}>
              <div className={styles.frame}>
                <Media media={framed} fill sizes="(min-width: 1000px) 460px, 92vw" />
                {tag ? <span className={styles.tag}>{tag}</span> : null}
              </div>
              {framed.caption && !tag ? <figcaption>{framed.caption}</figcaption> : null}
            </figure>
          </div>
          <div className={styles.main} data-reveal="">
            {quote}
            {block.text ? <RichText data={block.text} className={styles.text} /> : null}
            {items.length ? (
              <ol className={styles.rows} data-long={items.some((item) => (item.title ?? '').length > 12) ? '' : undefined}>
                {items.map((item, index) => (
                  <li key={item.id ?? index}>
                    <span className={styles.rowTerm}>{item.title || String(index + 1).padStart(2, '0')}</span>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ol>
            ) : null}
            {block.emphasis ? <p className={styles.emphasis}>{block.emphasis}</p> : null}
            {cta ? <CmsLink link={cta} variant="outlineLight" arrow /> : null}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id={block.anchor || undefined} className={styles.manifesto} data-tone="dark">
      {image && ambiance ? (
        <div className={styles.background} aria-hidden="true">
          <Media media={image} alt="" sizes="100vw" quality={70} />
        </div>
      ) : null}
      <div className={`container ${styles.stack}`}>
        <div className={styles.head} data-reveal="">
          {heading}
          {block.text ? <RichText data={block.text} className={styles.text} /> : null}
          {quote}
        </div>
        {items.length ? (
          <ul className={styles.cards} data-count={items.length} data-reveal="">
            {items.map((item, index) => (
              <li key={item.id ?? index}>
                {item.title ? <h3>{item.title}</h3> : null}
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        ) : null}
        {block.emphasis || cta ? (
          <div className={styles.foot} data-reveal="">
            {block.emphasis ? <p className={styles.emphasis}>{block.emphasis}</p> : null}
            {cta ? <CmsLink link={cta} variant="light" arrow /> : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
