'use client'

import Link from 'next/link'
import { useId, useState } from 'react'

import { Icon } from '@/components/ui/Icon'

import styles from './ServiceSearch.module.css'

type Service = { href: string; label: string; text: string; icon?: string | null }

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

/** Filters the list of services as you type (the full list is in the HTML). */
export function ServiceSearch({ label, placeholder, services }: { label: string; placeholder: string; services: Service[] }) {
  const [query, setQuery] = useState('')
  const id = useId()
  const words = normalize(query).split(/\s+/).filter(Boolean)
  const visible = services.filter((service) => {
    const haystack = normalize(`${service.label} ${service.text}`)
    return words.every((word) => haystack.includes(word))
  })
  return (
    <div className={styles.search}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputWrap}>
        <Icon name="search" size={20} />
        <input id={id} type="search" placeholder={placeholder} value={query} onChange={(event) => setQuery(event.target.value)} />
      </div>
      <ul className={styles.list} aria-live="polite">
        {visible.map((service) => (
          <li key={service.href}>
            <Link href={service.href} className={styles.item}>
              <span className={styles.icon}>
                <Icon name={service.icon} size={20} />
              </span>
              <span>
                <strong>{service.label}</strong>
                <span className={styles.text}>{service.text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
