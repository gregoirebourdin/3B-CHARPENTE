import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media, isMedia } from '@/components/ui/Media'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink } from '@/lib/links'
import type { CardsBlock as Data } from '@/payload-types'

import styles from './Cards.module.css'
import type { BlockProps } from './types'

type Item = NonNullable<Data['items']>[number]

/**
 * Short cards (20 words at most): an icon square, a number, a big word (Bio,
 * Bâti, Bois) or a photo on top. A card with a link is clickable as a whole.
 * With a side photo, the block becomes a list of points next to the heading
 * and the photo, which stay in view.
 */
export function Cards({ block, context }: BlockProps<Data>) {
  const variant = block.variant === 'index' ? 'icon' : (block.variant ?? 'icon')
  const aside = isMedia(block.asideImage) ? block.asideImage : null
  const cta = resolveLink(block.cta, context.company)
  const items = block.items ?? []

  const mark = (item: Item, index: number, size = 22) =>
    variant === 'numbered' ? (
      <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
    ) : variant === 'icon' ? (
      <span className={styles.icon}>
        <Icon name={item.icon ?? 'check'} size={size} />
      </span>
    ) : null

  if (aside) {
    return (
      <Section tone={block.tone} anchor={block.anchor}>
        <div className={styles.split}>
          <div className={styles.aside}>
            <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} className={styles.asideHeading} />
            <div className={styles.asidePhoto} data-reveal="">
              <Media media={aside} fill sizes="(min-width: 1000px) 460px, 92vw" />
            </div>
          </div>
          <div>
            <ul className={styles.rows}>
              {items.map((item, index) => {
                const link = resolveLink(item.link, context.company)
                return (
                  <li key={item.id ?? index} className={styles.row} data-reveal="">
                    {mark(item, index, 20)}
                    <div className={styles.body}>
                      <h3 className={styles.title}>{item.title}</h3>
                      {item.eyebrow ? <p className={styles.eyebrow}>{item.eyebrow}</p> : null}
                      {item.text ? <RichText data={item.text} className={styles.text} /> : null}
                      {link ? (
                        <CmsLink link={link} className={styles.go} arrow>
                          {link.label}
                        </CmsLink>
                      ) : null}
                    </div>
                  </li>
                )
              })}
            </ul>
            {cta ? (
              <div className={styles.cta}>
                <CmsLink link={cta} variant="outline" arrow />
              </div>
            ) : null}
          </div>
        </div>
      </Section>
    )
  }

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading
        kicker={block.kicker}
        title={block.title}
        accent={block.titleAccent}
        intro={block.intro}
        layout="split"
        actions={cta ? <CmsLink link={cta} variant="outline" arrow /> : undefined}
      />
      <ul className={styles.grid} style={{ ['--columns' as string]: block.columns ?? '3' }}>
        {items.map((item, index) => {
          const link = resolveLink(item.link, context.company)
          const photo = (variant === 'photo' || variant === 'letter') && isMedia(item.image) ? item.image : null
          return (
            <li
              key={item.id ?? index}
              className={styles.card}
              data-variant={variant}
              data-muted={item.muted ? '' : undefined}
              data-link={link ? '' : undefined}
              data-reveal=""
              style={{ ['--reveal-delay' as string]: `${(index % 3) * 70}ms` }}
            >
              {photo ? (
                <div className={styles.photo}>
                  <Media media={photo} fill sizes="(min-width: 1000px) 400px, 92vw" />
                </div>
              ) : null}
              <div className={styles.body}>
                {mark(item, index)}
                {variant === 'letter' ? (
                  <h3 className={styles.word}>{item.title}</h3>
                ) : (
                  <h3 className={styles.title}>{item.title}</h3>
                )}
                {item.eyebrow ? <p className={styles.eyebrow}>{item.eyebrow}</p> : null}
                {item.text ? <RichText data={item.text} className={styles.text} /> : null}
                {link ? (
                  <CmsLink link={link} className={`${styles.go} ${styles.stretched}`} arrow>
                    {link.label}
                  </CmsLink>
                ) : null}
              </div>
            </li>
          )
        })}
      </ul>
      {cta && !block.kicker && !block.title && !block.intro ? (
        <div className={styles.cta}>
          <CmsLink link={cta} variant="outline" arrow />
        </div>
      ) : null}
    </Section>
  )
}
