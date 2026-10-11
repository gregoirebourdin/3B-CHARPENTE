import Link from 'next/link'

import styles from './Breadcrumbs.module.css'

export type Crumb = { name: string; path: string }

/** Visible breadcrumb (every page but home). The last item is the current page. */
export function Breadcrumbs({ items, inverse }: { items: Crumb[]; inverse?: boolean }) {
  if (items.length < 2) return null
  return (
    <nav aria-label="Fil d’Ariane" className={[styles.breadcrumbs, inverse ? styles.inverse : undefined].filter(Boolean).join(' ')}>
      <ol>
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={item.path}>
              {last ? (
                <span aria-current="page">{item.name.replace(/\*\*/g, '')}</span>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
