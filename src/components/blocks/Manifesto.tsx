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
  const items = block.items ?? []
  // Four values or more read as a list beside the text, on a forest panel.
  const layout =
    image && !ambiance && requested !== 'columns'
      ? 'split'
      : requested === 'columns' && items.length >= 4 && !ambiance
        ? 'values'
        : requested
  const framed = layout === 'split' && image
  const tag = framed && image.caption && image.caption.length <= 40 ? image.caption : null
  const cta = resolveLink(block.cta, context.company)

  if (layout === 'values') {
    return (
      <section id={block.anchor || undefined} className={styles.valuesWrap}>
        <div className="container">
          <div className={styles.valuesPanel}>
            <div className={styles.motif} aria-hidden="true" />
            <div className={styles.valuesCopy} data-reveal="">
              {block.kicker ? (
                <p className={`kicker ${styles.kicker}`} data-numbered="">
                  {block.kicker}
                </p>
              ) : null}
              {block.title ? (
                <AccentTitle
                  as="h2"
                  title={block.title}
                  accent={block.titleAccent}
                  className={styles.title}
                />
              ) : null}
              {block.text ? <RichText data={block.text} className={styles.text} /> : null}
              {block.emphasis ? <p className={styles.emphasis}>{block.emphasis}</p> : null}
              {cta ? <CmsLink link={cta} variant="light" arrow /> : null}
            </div>
            <ol className={styles.valuesList} data-reveal="">
              {items.map((item, index) => (
                <li key={item.id ?? index}>
                  <span className={styles.valuesNum} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    {item.title ? <h3>{item.title}</h3> : null}
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    )
  }

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
          {block.title ? (
            <AccentTitle
              as="h2"
              title={block.title}
              accent={block.titleAccent}
              className={styles.title}
            />
          ) : null}
          {block.text ? <RichText data={block.text} className={styles.text} /> : null}
          {items.length && layout !== 'columns' ? (
            <ol className={styles.points}>
              {items.map((item, index) => (
                <li key={item.id ?? index}>
                  <span className={styles.itemNum}>{String(index + 1).padStart(2, '0')}</span>
                  <p>
                    {item.title ? <strong>{item.title} </strong> : null}
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
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
              {tag ? <span className={styles.tag}>{tag}</span> : null}
            </div>
            {image.caption && !tag ? <figcaption>{image.caption}</figcaption> : null}
          </figure>
        ) : null}
      </div>
      {layout === 'columns' && items.length ? (
        <div className="container">
          <ol className={styles.columnsList} data-reveal="">
            {items.map((item, index) => (
              <li key={item.id ?? index}>
                <span className={styles.itemNum}>{String(index + 1).padStart(2, '0')}</span>
                {item.title ? <h3>{item.title}</h3> : null}
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </section>
  )
}
