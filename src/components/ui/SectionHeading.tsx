import type { ReactNode } from 'react'

import { AccentTitle } from './AccentTitle'
import styles from './SectionHeading.module.css'

type Props = {
  kicker?: string | null
  title?: string | null
  accent?: string | null
  intro?: string | null
  align?: 'start' | 'center'
  /** "split": title on the left, intro (and actions) on the right on wide screens. */
  layout?: 'stack' | 'split'
  /** Link or button shown with the heading (e.g. « Voir toutes nos réalisations »). */
  actions?: ReactNode
  /** Section number in the kicker (« 02 | … »), counted in page order. Off for the hero-like openings. */
  numbered?: boolean
  id?: string
  /** On forest-green / photo grounds. */
  inverse?: boolean
  as?: 'h2' | 'h3'
  className?: string
}

/** Kicker + title (with words in green) + intro: the opening of every section. */
export function SectionHeading({
  kicker,
  title,
  accent,
  intro,
  align = 'start',
  layout = 'stack',
  actions,
  numbered = true,
  id,
  inverse,
  as = 'h2',
  className,
}: Props) {
  if (!kicker && !title && !intro) return null
  const split = layout === 'split' && align !== 'center' && Boolean(intro || actions)
  return (
    <header
      className={[styles.heading, styles[align], split ? styles.split : undefined, inverse ? styles.inverse : undefined, className]
        .filter(Boolean)
        .join(' ')}
      data-reveal=""
    >
      {kicker ? (
        <p className={`kicker ${styles.kicker}`} data-numbered={numbered ? '' : undefined}>
          {kicker}
        </p>
      ) : null}
      {title ? <AccentTitle as={as} title={title} accent={accent} id={id} className={styles.title} /> : null}
      {intro || actions ? (
        <div className={styles.side}>
          {intro ? <p className={styles.intro}>{intro}</p> : null}
          {actions ? <div className={styles.actions}>{actions}</div> : null}
        </div>
      ) : null}
    </header>
  )
}
