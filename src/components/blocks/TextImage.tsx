import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media, isMedia } from '@/components/ui/Media'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink } from '@/lib/links'
import type { TextImageBlock as Data } from '@/payload-types'

import styles from './TextImage.module.css'
import type { BlockProps } from './types'

/**
 * A short text next to one or two real photos: the heading, two or three
 * sentences, then « points clés » with green checks instead of a long paragraph.
 */
export function TextImage({ block, context }: BlockProps<Data>) {
  const images = (block.images ?? []).filter(isMedia)
  const links = (block.links ?? []).map((item) => resolveLink(item.link, context.company)).filter(Boolean)
  const cta = resolveLink(block.cta, context.company)
  const hasImage = images.length > 0
  const points = (block.points ?? []).filter((point) => point.text?.trim())

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <div
        className={[styles.grid, hasImage ? styles.withImage : styles.noImage, block.imagePosition === 'left' ? styles.left : undefined]
          .filter(Boolean)
          .join(' ')}
      >
        <div className={styles.copy} data-reveal="">
          <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} className={styles.heading} />
          <RichText data={block.text} className={!hasImage && block.twoColumns ? styles.columns : styles.text} />
          {points.length ? (
            <ul className={styles.points}>
              {points.map((point, index) => (
                <li key={point.id ?? index}>
                  <span className={styles.check} aria-hidden="true">
                    <Icon name="check" size={15} />
                  </span>
                  {point.text}
                </li>
              ))}
            </ul>
          ) : null}
          {links.length ? (
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link!.href}>
                  <CmsLink link={link} className={styles.textLink} arrow>
                    {link!.label}
                  </CmsLink>
                </li>
              ))}
            </ul>
          ) : null}
          {cta ? <CmsLink link={cta} variant="outline" arrow /> : null}
        </div>
        {hasImage ? (
          <figure className={styles.visual} data-count={Math.min(images.length, 2)} data-reveal="">
            {images.slice(0, 2).map((image, index) => {
              const tag = index === 0 && block.badge ? block.badge : image.caption && image.caption.length <= 40 ? image.caption : null
              return (
                <div key={image.id} className={styles.photo}>
                  <Media media={image} fill sizes={images.length > 1 ? '(min-width: 1000px) 290px, 46vw' : '(min-width: 1000px) 560px, 92vw'} />
                  {tag ? <span className={styles.tag}>{tag}</span> : null}
                </div>
              )
            })}
            {block.caption ? <figcaption className={styles.caption}>{block.caption}</figcaption> : null}
          </figure>
        ) : null}
      </div>
    </Section>
  )
}
