import { AccentTitle } from './AccentTitle'
import styles from './SectionHeading.module.css'

type Props = {
  kicker?: string | null
  title?: string | null
  accent?: string | null
  intro?: string | null
  align?: 'start' | 'center'
  id?: string
  /** On forest-green / photo grounds. */
  inverse?: boolean
  as?: 'h2' | 'h3'
  className?: string
}

/** Kicker + title (with words in green) + intro: the opening of every section. */
export function SectionHeading({ kicker, title, accent, intro, align = 'start', id, inverse, as = 'h2', className }: Props) {
  if (!kicker && !title && !intro) return null
  return (
    <header
      className={[styles.heading, styles[align], inverse ? styles.inverse : undefined, className].filter(Boolean).join(' ')}
      data-reveal=""
    >
      {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
      {title ? <AccentTitle as={as} title={title} accent={accent} id={id} className={styles.title} /> : null}
      {intro ? <p className={styles.intro}>{intro}</p> : null}
    </header>
  )
}
