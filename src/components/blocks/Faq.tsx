import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Faq as FaqDoc, FaqBlock as Data } from '@/payload-types'

import styles from './Faq.module.css'
import type { BlockProps } from './types'

export const faqsOf = (block: Data): FaqDoc[] =>
  (block.faqs ?? []).filter((faq): faq is FaqDoc => typeof faq === 'object' && faq !== null)

/**
 * Accordion of questions inside white cards. Native <details>: answers are in
 * the HTML (read by Google and AI assistants), it works without JavaScript,
 * and the FAQPage data is generated from exactly the same text.
 */
export function Faq({ block }: BlockProps<Data>) {
  const faqs = faqsOf(block)
  if (!faqs.length) return null
  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} align="center" />
      <div className={styles.list} data-reveal="">
        {faqs.map((faq, index) => (
          <details key={faq.id} className={styles.item} open={index === 0} name={`faq-${block.id ?? 'page'}`}>
            <summary className={styles.question}>
              <h3>{faq.question}</h3>
              <span className={styles.toggle} aria-hidden="true">
                <Icon name="plus" size={20} />
              </span>
            </summary>
            <div className={styles.answer}>
              {faq.answer.split(/\n{2,}/).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </Section>
  )
}
