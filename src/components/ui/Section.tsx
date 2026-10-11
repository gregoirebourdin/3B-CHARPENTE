import type { ReactNode } from 'react'

import styles from './Section.module.css'

type Props = {
  children: ReactNode
  tone?: 'cream' | 'light' | 'dark' | 'forest' | string | null
  anchor?: string | null
  /** "default" = full vertical rhythm; "tight" = half; "none" = no padding. */
  spacing?: 'default' | 'tight' | 'none'
  className?: string
  labelledBy?: string
  narrow?: boolean
  /** 3B Récup' signature: discreet wood-ring motif. */
  recup?: boolean
}

/** Vertical rhythm, background and width of every section of the site. */
export function Section({ children, tone, anchor, spacing = 'default', className, labelledBy, narrow, recup }: Props) {
  return (
    <section
      id={anchor || undefined}
      aria-labelledby={labelledBy}
      className={[
        styles.section,
        styles[`tone-${tone ?? 'cream'}`],
        styles[`spacing-${spacing}`],
        recup ? styles.recup : undefined,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={['container', narrow ? 'container--narrow' : undefined].filter(Boolean).join(' ')}>{children}</div>
    </section>
  )
}
