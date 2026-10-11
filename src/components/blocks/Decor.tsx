import styles from './Decor.module.css'

/** Wood rings (the 3B Récup' signature), very light, in a corner of a forest panel. */
export function Decor({ position = 'bottomLeft' }: { position?: 'bottomLeft' | 'topRight' }) {
  return <div className={`${styles.rings} ${styles[position]}`} aria-hidden="true" />
}
