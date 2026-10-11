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

export function TextImage({ block, context }: BlockProps<Data>) {
  const images = (block.images ?? []).filter(isMedia)
  const links = (block.links ?? [])
    .map((item) => resolveLink(item.link, context.company))
    .filter(Boolean)
  const cta = resolveLink(block.cta, context.company)
  const hasImage = images.length > 0

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <div
        className={[
          styles.grid,
          hasImage ? styles.withImage : styles.noImage,
          block.imagePosition === 'left' ? styles.left : undefined,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className={styles.copy} data-reveal="">
          <SectionHeading
            kicker={block.kicker}
            title={block.title}
            accent={block.titleAccent}
            className={styles.heading}
          />
          <RichText
            data={block.text}
            className={!hasImage && block.twoColumns ? styles.columns : styles.text}
          />
          {links.length ? (
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link!.href}>
                  <CmsLink link={link} className={`${styles.textLink} link-underline`}>
                    {link!.label}
                    <Icon name="arrowRight" size={16} />
                  </CmsLink>
                </li>
              ))}
            </ul>
          ) : null}
          {cta ? <CmsLink link={cta} variant="outline" arrow /> : null}
        </div>
        {hasImage ? (
          <figure
            className={`${styles.visual} ${images.length > 1 ? styles.collage : styles.framed}`}
            data-reveal=""
          >
            {images.slice(0, 2).map((image, index) => {
              const tag = image.caption && image.caption.length <= 40 ? image.caption : null
              return (
                <div key={image.id} className={index === 0 ? styles.imageMain : styles.imageSecond}>
                  <Media
                    media={image}
                    fill
                    sizes={
                      index === 0
                        ? '(min-width: 1000px) 560px, 92vw'
                        : '(min-width: 1000px) 280px, 60vw'
                    }
                  />
                  {index === 0 && block.badge ? (
                    <span className={styles.badge}>{block.badge}</span>
                  ) : null}
                  {tag && !(index === 0 && block.badge) ? (
                    <span
                      className={
                        index === 0 && images.length > 1
                          ? `${styles.tag} ${styles.tagTop}`
                          : styles.tag
                      }
                    >
                      {tag}
                    </span>
                  ) : null}
                </div>
              )
            })}
            {block.caption ? (
              <figcaption className={styles.caption}>{block.caption}</figcaption>
            ) : null}
          </figure>
        ) : null}
      </div>
    </Section>
  )
}
