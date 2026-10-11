import type { ReactNode } from 'react'

import styles from './DocLayout.module.css'
import { TocSpy } from './TocSpy'

export type TocEntry = { href: string; label: string }

type Props = {
  /** Title of the table of contents (« Sommaire »). */
  tocTitle: string
  /** Small line next to the title (« 8 rubriques »). */
  tocCount?: string
  entries: TocEntry[]
  /** Under the list: a phone number, a button… */
  tocFooter?: ReactNode
  /** Above the text, in the reading column (« En bref »). */
  intro?: ReactNode
  children: ReactNode
  /** Number the H2 of the text (« 01 — Éditeur du site »). */
  numbered?: boolean
  id: string
}

/**
 * A long text to read (guide, legal notice): a sticky table of contents on
 * the left, the reading column on the right, its H2 numbered. The section
 * being read is marked in the contents.
 */
export function DocLayout({ tocTitle, tocCount, entries, tocFooter, intro, children, numbered = true, id }: Props) {
  const navId = `${id}-sommaire`
  return (
    <div className={`container ${styles.layout}`}>
      {entries.length > 1 ? (
        <aside className={styles.aside}>
          <nav id={navId} aria-label={tocTitle} className={styles.toc}>
            <p className={styles.tocHead}>
              <span className={styles.tocTitle}>{tocTitle}</span>
              {tocCount ? <span className={styles.tocCount}>{tocCount}</span> : null}
            </p>
            <ol>
              {entries.map((entry, index) => (
                <li key={`${entry.href}-${index}`}>
                  <a href={entry.href}>
                    <span className={styles.tocNum} aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{entry.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          {tocFooter ? <div className={styles.tocFooter}>{tocFooter}</div> : null}
          <TocSpy navId={navId} />
        </aside>
      ) : null}
      <div className={`${styles.body} ${numbered ? styles.numbered : ''} article-body`}>
        {intro}
        {children}
      </div>
    </div>
  )
}
