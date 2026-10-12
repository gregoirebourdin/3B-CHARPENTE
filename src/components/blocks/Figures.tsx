import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { FiguresBlock as Data } from '@/payload-types'

import styles from './Figures.module.css'
import type { BlockProps } from './types'

/** Two to four verified figures, large and green, each with one line saying what it means. */
export function Figures({ block }: BlockProps<Data>) {
  const items = block.items ?? []
  if (!items.length) return null
  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} />
      <dl className={styles.figures} data-count={items.length} data-reveal="">
        {items.map((item, index) => (
          <div key={item.id ?? index} className={styles.item}>
            <dt className={styles.value}>
              {item.value}
              {item.unit ? <span className={styles.unit}>{item.unit}</span> : null}
            </dt>
            <dd className={styles.label}>{item.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
