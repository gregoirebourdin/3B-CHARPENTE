import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ProsConsBlock as Data } from '@/payload-types'

import styles from './ProsCons.module.css'
import type { BlockProps } from './types'

/** Two columns instead of two paragraphs: what a material or a technique does well, and what to watch. */
export function ProsCons({ block }: BlockProps<Data>) {
  const pros = (block.pros ?? []).filter((item) => item.text?.trim())
  const cons = (block.cons ?? []).filter((item) => item.text?.trim())
  if (!pros.length && !cons.length) return null
  return (
    <Section tone={block.tone} anchor={block.anchor} spacing="tight">
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} />
      <div className={styles.columns} data-reveal="">
        {pros.length ? (
          <div className={styles.pros}>
            <p className={styles.label}>{block.prosLabel || 'Points forts'}</p>
            <ul>
              {pros.map((item, index) => (
                <li key={item.id ?? index}>{item.text}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {cons.length ? (
          <div className={styles.cons}>
            <p className={styles.label}>{block.consLabel || 'Points d’attention'}</p>
            <ul>
              {cons.map((item, index) => (
                <li key={item.id ?? index}>{item.text}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </Section>
  )
}
