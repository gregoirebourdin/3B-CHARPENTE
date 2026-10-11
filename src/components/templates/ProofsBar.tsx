import { Icon } from '@/components/ui/Icon'
import { getProofs } from '@/lib/cms/queries'

import styles from './ProofsBar.module.css'

/** "Depuis 2007 · Formé chez les Compagnons du Devoir · …": edited once in the admin. */
export async function ProofsBar({ variant = 'compact' }: { variant?: 'band' | 'compact' | null }) {
  const proofs = await getProofs()
  if (!proofs.items?.length) return null
  return (
    <section aria-label="Nos garanties" className={`${styles.proofs} ${styles[variant ?? 'compact']}`}>
      <div className="container">
        <ul className={styles.list} data-reveal="">
          {proofs.items.map((item) => (
            <li key={item.label} className={styles.item}>
              <span className={styles.icon}>
                <Icon name={item.icon ?? 'check'} size={18} />
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
