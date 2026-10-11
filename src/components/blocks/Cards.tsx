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

/**
 * Cards in four styles (icon, number, big letter, photo). With a side photo,
 * the block becomes an editorial « features » list: the heading and the photo
 * in a passe-partout frame stay in view on the left, the points run on the
 * right between hairlines.
 */
export function Cards({ block, context }: BlockProps<Data>) {
  const variant = block.variant ?? 'icon'
  const aside = isMedia(block.asideImage) ? block.asideImage : null
  const cta = resolveLink(block.cta, context.company)
  const heading = (
    <SectionHeading
      kicker={block.kicker}
      title={block.title}
      accent={block.titleAccent}
      intro={block.intro}
      className={aside ? styles.asideHeading : undefined}
    />
  )
  const actions = cta ? (
    <div className={styles.cta}>
      <CmsLink link={cta} variant="outline" arrow />
    </div>
  ) : null

  if (aside) {
    return (
      <Section tone={block.tone} anchor={block.anchor}>
        <div className={styles.features}>
          <div className={styles.featuresSide}>
            {heading}
            <div className={styles.frame} data-reveal="">
              <div className={styles.framePhoto}>
                <Media media={aside} fill sizes="(min-width: 1000px) 520px, 92vw" />
              </div>
            </div>
          </div>
          <div className={styles.featuresMain}>
            <ul className={styles.featureList}>
              {(block.items ?? []).map((item, index) => {
                const link = resolveLink(item.link, context.company)
                return (
                  <li key={item.id ?? index} className={styles.feature} data-reveal="">
                    {variant === 'numbered' ? (
                      <span className={styles.featureNum}>{String(index + 1).padStart(2, '0')}</span>
                    ) : (
                      <span className={styles.disc}>
                        <Icon name={item.icon ?? 'check'} size={20} />
                      </span>
                    )}
                    <div className={styles.body}>
                      <h3 className={styles.title}>{item.title}</h3>
                      {item.eyebrow ? <p className={styles.eyebrow}>{item.eyebrow}</p> : null}
                      {item.text ? <RichText data={item.text} className={styles.text} /> : null}
                      {link ? (
                        <CmsLink link={link} className={`${styles.link} link-underline`}>
                          {link.label}
                          <Icon name="arrowRight" size={14} />
                        </CmsLink>
                      ) : null}
                    </div>
                  </li>
                )
              })}
            </ul>
            {actions}
          </div>
        </div>
      </Section>
    )
  }

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      {heading}
      <ul className={styles.list} style={{ ['--columns' as string]: block.columns ?? '3' }}>
        {(block.items ?? []).map((item, index) => {
          const link = resolveLink(item.link, context.company)
          return (
            <li
              key={item.id ?? index}
              className={item.muted ? `${styles.card} ${styles.muted}` : styles.card}
              data-variant={variant}
              data-reveal=""
              style={{ ['--reveal-delay' as string]: `${(index % 3) * 80}ms` }}
            >
              {variant === 'photo' && isMedia(item.image) ? (
                <div className={styles.photo}>
                  <Media media={item.image} fill sizes="(min-width: 1000px) 400px, 92vw" />
                </div>
              ) : null}
              {variant === 'icon' ? (
                <span className={styles.disc}>
                  <Icon name={item.icon ?? 'check'} size={22} />
                </span>
              ) : null}
              {variant === 'numbered' ? <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span> : null}
              <div className={styles.body}>
                {variant === 'letter' ? (
                  <span className={styles.glyph} aria-hidden="true">
                    {item.letter || item.title.charAt(0)}
                  </span>
                ) : null}
                <h3 className={variant === 'letter' ? styles.word : styles.title}>{item.title}</h3>
                {item.eyebrow ? <p className={styles.eyebrow}>{item.eyebrow}</p> : null}
                {item.text ? <RichText data={item.text} className={styles.text} /> : null}
                {link ? (
                  <CmsLink link={link} className={`${styles.link} link-underline`}>
                    {link.label}
                    <Icon name="arrowRight" size={14} />
                  </CmsLink>
                ) : null}
              </div>
              {variant === 'letter' && isMedia(item.image) ? (
                <div className={styles.letterPhoto}>
                  <Media media={item.image} fill sizes="(min-width: 1000px) 380px, 92vw" />
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>
      {actions}
    </Section>
  )
}
