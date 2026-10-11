import styles from './Tldr.module.css'

/**
 * "En bref": the 40–60 word self-contained answer quoted by search engines
 * and AI assistants. Light ground, green rule on the left.
 */
export function Tldr({ text, variant = 'band' }: { text?: string | null; variant?: 'band' | 'card' }) {
  if (!text?.trim()) return null
  return (
    <section aria-label="En bref" className={`${styles.wrap} ${styles[variant]}`}>
      <div className="container">
        <div className={styles.box} data-reveal="">
          <p className={styles.label}>En bref</p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </section>
  )
}
