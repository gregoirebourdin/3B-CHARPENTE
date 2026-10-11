'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { Icon } from '@/components/ui/Icon'

import styles from './MobileMenu.module.css'

export type MobileNavItem =
  | { kind: 'link'; label: string; href: string; highlight?: boolean }
  | { kind: 'services'; label: string; children: { href: string; label: string; icon?: string | null; text?: string | null }[] }

type Props = {
  items: MobileNavItem[]
  cta: { href: string; label: string } | null
  phone: string
  tel: string
}

/** Full-screen mobile menu, built on <dialog> (focus trap and Escape for free). */
export function MobileMenu({ items, cta, phone, tel }: Props) {
  const dialog = useRef<HTMLDialogElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    dialog.current?.close()
  }, [pathname])

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        <Icon name="menu" size={24} />
        <span className="visually-hidden">Ouvrir le menu</span>
      </button>
      <dialog ref={dialog} className={styles.dialog} aria-label="Menu">
        <div className={styles.top}>
          <a href={tel} className={styles.phone} data-track="Clic téléphone">
            <Icon name="phone" size={20} />
            {phone}
          </a>
          <button type="button" className={styles.close} onClick={() => dialog.current?.close()}>
            <Icon name="close" size={24} />
            <span className="visually-hidden">Fermer le menu</span>
          </button>
        </div>
        <nav aria-label="Navigation mobile" className={styles.nav}>
          <ul className={styles.list}>
            {items.map((item) =>
              item.kind === 'services' ? (
                <li key={item.label}>
                  <details className={styles.group} open>
                    <summary className={styles.groupTitle}>
                      {item.label}
                      <Icon name="chevronDown" size={20} />
                    </summary>
                    <ul className={styles.sublist}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className={styles.sublink}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className={item.highlight ? `${styles.link} ${styles.highlight}` : styles.link}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        {cta ? (
          <Link href={cta.href} className={styles.cta} data-track="Clic Demander mon devis">
            {cta.label}
          </Link>
        ) : null}
      </dialog>
    </>
  )
}
