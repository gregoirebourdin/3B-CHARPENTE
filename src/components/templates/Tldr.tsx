import { Icon } from '@/components/ui/Icon'

import styles from './Tldr.module.css'

/**
 * "En bref": the self-contained answer (50 words at most) quoted by search
 * engines and AI assistants. A pale sage card under the top of the page.
 */
export function Tldr({ text, variant = 'band', label }: { text?: string | null; variant?: 'band' | 'card'; label: string }) {
  if (!text?.trim()) return null
  return (
    <section aria-label={label} className={`${styles.wrap} ${styles[variant]}`}>
      <div className="container">
        <div className={styles.box} data-reveal="">
          <p className={styles.label}>
            <Icon name="info" size={20} />
            {label}
          </p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </section>
  )
}
