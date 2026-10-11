import styles from './Tldr.module.css'

/**
 * "En bref": the 40–60 word self-contained answer quoted by search engines
 * and AI assistants. Light ground, green rule on the left.
 */
export function Tldr({ text, variant = 'band', label }: { text?: string | null; variant?: 'band' | 'card'; label: string }) {
  if (!text?.trim()) return null
  return (
    <section aria-label={label} className={`${styles.wrap} ${styles[variant]}`}>
      <div className="container">
        <div className={styles.box} data-reveal="">
          <p className={styles.label}>{label}</p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </section>
  )
}
