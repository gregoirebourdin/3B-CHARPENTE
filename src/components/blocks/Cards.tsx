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

export function Cards({ block, context }: BlockProps<Data>) {
  const variant = block.variant ?? 'icon'
  const aside = isMedia(block.asideImage) ? block.asideImage : null
  const cta = resolveLink(block.cta, context.company)

  const cards = (block.items ?? []).map((item, index) => {
    const link = resolveLink(item.link, context.company)
    return (
      <li
        key={item.id ?? index}
        className={[styles.card, styles[variant], item.muted ? styles.muted : undefined].filter(Boolean).join(' ')}
        data-reveal=""
        style={{ ['--reveal-delay' as string]: `${(index % 3) * 80}ms` }}
      >
        {variant === 'photo' && isMedia(item.image) ? (
          <div className={styles.photo}>
            <Media media={item.image} sizes="(min-width: 1000px) 400px, 92vw" />
          </div>
        ) : null}
        {variant === 'icon' ? (
          <span className={styles.icon}>
            <Icon name={item.icon ?? 'check'} size={24} />
          </span>
        ) : null}
        {variant === 'numbered' ? <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span> : null}
        {variant === 'letter' ? (
          <span className={styles.letter} aria-hidden="true">
            {item.letter || item.title.charAt(0)}
          </span>
        ) : null}
        <div className={styles.body}>
          <h3 className={styles.title}>{item.title}</h3>
          {item.eyebrow ? <p className={styles.eyebrow}>{item.eyebrow}</p> : null}
          {item.text ? <RichText data={item.text} className={styles.text} /> : null}
          {link ? (
            <CmsLink link={link} className={`${styles.link} link-underline`}>
              {link.label}
              <Icon name="arrowRight" size={16} />
            </CmsLink>
          ) : null}
        </div>
        {variant === 'letter' && isMedia(item.image) ? (
          <div className={styles.letterPhoto}>
            <Media media={item.image} sizes="(min-width: 1000px) 380px, 92vw" />
          </div>
        ) : null}
      </li>
    )
  })

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} />
      {aside ? (
        <div className={styles.withAside}>
          <div className={styles.aside} data-reveal="">
            <Media media={aside} sizes="(min-width: 1000px) 480px, 92vw" />
          </div>
          <ul className={`${styles.list} ${styles.stack}`}>{cards}</ul>
        </div>
      ) : (
        <ul className={styles.list} style={{ ['--columns' as string]: block.columns ?? '3' }}>
          {cards}
        </ul>
      )}
      {cta ? (
        <div className={styles.cta}>
          <CmsLink link={cta} variant="outline" arrow />
        </div>
      ) : null}
    </Section>
  )
}
