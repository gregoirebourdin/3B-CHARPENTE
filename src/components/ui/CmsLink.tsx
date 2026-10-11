import Link from 'next/link'
import type { ReactNode } from 'react'

import { Icon } from './Icon'
import styles from './Button.module.css'
import type { ResolvedLink } from '@/lib/links'

export type ButtonVariant = 'primary' | 'outline' | 'light' | 'outlineLight' | 'sage'

type Props = {
  link: ResolvedLink | null
  /** Render as a button; without variant, a plain text link. */
  variant?: ButtonVariant
  size?: 'small' | 'large'
  block?: boolean
  arrow?: boolean
  className?: string
  children?: ReactNode
}

/** Analytics hook: phone, e-mail and quote clicks are counted (src/components/layout/Analytics.tsx). */
export function trackingFor(link: ResolvedLink): string | undefined {
  if (link.kind === 'phone') return 'Clic téléphone'
  if (link.kind === 'email') return 'Clic e-mail'
  if (link.href.startsWith('/contact/')) return 'Clic Demander mon devis'
  return undefined
}

export function CmsLink({ link, variant, size, block, arrow, className, children }: Props) {
  if (!link) return null
  const classes = [
    variant ? styles.button : undefined,
    variant ? styles[variant] : undefined,
    size ? styles[size] : undefined,
    block ? styles.block : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')
  const content = (
    <>
      {link.kind === 'phone' && variant ? <Icon name="phone" size={18} /> : null}
      {children ?? link.label}
      {arrow ? <Icon name="arrowRight" size={18} data-arrow="" /> : null}
    </>
  )
  const track = trackingFor(link)

  if (link.kind !== 'internal') {
    return (
      <a
        href={link.href}
        className={classes || undefined}
        data-track={track}
        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
        {link.external ? <span className="visually-hidden"> (nouvel onglet)</span> : null}
      </a>
    )
  }
  return (
    <Link href={link.href} className={classes || undefined} data-track={track}>
      {content}
    </Link>
  )
}

export function ButtonGroup({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={[styles.group, className].filter(Boolean).join(' ')}>{children}</div>
}
