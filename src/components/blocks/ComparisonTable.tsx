import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ComparisonTableBlock as Data } from '@/payload-types'

import styles from './ComparisonTable.module.css'
import type { BlockProps } from './types'

/** Real <table> on desktop; one card per row on mobile (labels from the headers). */
export function ComparisonTable({ block }: BlockProps<Data>) {
  const columns = (block.columns ?? []).map((column) => column.label)
  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} />
      <div className={styles.card} data-reveal="">
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((label) => (
                <th key={label} scope="col">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(block.rows ?? []).map((row, rowIndex) => (
              <tr key={row.id ?? rowIndex}>
                {(row.cells ?? []).map((cell, cellIndex) =>
                  cellIndex === 0 ? (
                    <th key={cellIndex} scope="row" data-label={columns[0]}>
                      {cell.text}
                    </th>
                  ) : (
                    <td key={cellIndex} data-label={columns[cellIndex]}>
                      {cell.text}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {block.note ? <p className={styles.note}>{block.note}</p> : null}
      </div>
    </Section>
  )
}
