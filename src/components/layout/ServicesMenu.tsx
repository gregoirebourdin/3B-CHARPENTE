'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'

import { Icon } from '@/components/ui/Icon'

import styles from './SiteHeader.module.css'

type Props = { label: string; services: { href: string; label: string; icon?: string | null; text?: string | null }[] }

/**
 * "Prestations" dropdown. Opens on hover and keyboard focus with CSS alone,
 * and on click / Enter with this small script (aria-expanded, Escape closes).
 */
export function ServicesMenu({ label, services }: Props) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const wrapper = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  // Navigating closes the menu (state adjusted during render, no effect needed).
  const [openedOn, setOpenedOn] = useState(pathname)
  if (openedOn !== pathname) {
    setOpenedOn(pathname)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        wrapper.current?.querySelector('button')?.focus()
      }
    }
    const onClick = (event: MouseEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [open])

  const current = services.some((service) => pathname.startsWith(service.href))

  return (
    <div ref={wrapper} className={styles.dropdown} data-open={open || undefined}>
      <button
        type="button"
        className={styles.link}
        data-current={current || undefined}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <Icon name="chevronDown" size={16} className={styles.chevron} />
      </button>
      <div id={id} className={styles.panel}>
        <ul className={styles.panelList}>
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className={styles.panelLink}
                aria-current={pathname.startsWith(service.href) ? 'page' : undefined}
              >
                <span className={styles.panelIcon}>
                  <Icon name={service.icon} size={20} />
                </span>
                <span className={styles.panelText}>
                  <strong>{service.label}</strong>
                  {service.text ? <span>{service.text}</span> : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
