import Link from 'next/link'

import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { phoneToE164 } from '@/lib/links'
import type { Faq as FaqDoc, FaqBlock as Data } from '@/payload-types'

import styles from './Faq.module.css'
import type { BlockProps } from './types'

export const faqsOf = (block: Data): FaqDoc[] =>
  (block.faqs ?? []).filter((faq): faq is FaqDoc => typeof faq === 'object' && faq !== null)

/**
 * Questions between hairlines, a round « + » that turns into « × ». The
 * heading and a « another question? » card stay in view on the left. Native
 * <details>: answers are in the HTML (read by Google and AI assistants), it
 * works without JavaScript, and the FAQPage data uses exactly the same text.
 */
export function Faq({ block, context }: BlockProps<Data>) {
  const faqs = faqsOf(block)
  if (!faqs.length) return null
  const { company, texts } = context
  const onContact = context.path.startsWith('/contact')

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <div className={styles.layout}>
        <div className={styles.side}>
          <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} className={styles.heading} />
          {company.phone ? (
            <div className={styles.help} data-reveal="">
              <p className={styles.helpTitle}>{texts.general.faqHelpTitle}</p>
              <p className={styles.helpText}>{texts.general.faqHelpText}</p>
              <a href={`tel:${phoneToE164(company.phone)}`} className={`${styles.helpLink} link-underline`} data-track="Clic téléphone">
                <Icon name="phone" size={16} />
                {company.phone}
              </a>
              {!onContact ? (
                <Link href="/contact/" className={`${styles.helpLink} link-underline`}>
                  {texts.general.faqHelpLink}
                  <Icon name="arrowRight" size={14} />
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className={styles.list} data-reveal="">
          {faqs.map((faq, index) => (
            <details key={faq.id} className={styles.item} open={index === 0} name={`faq-${block.id ?? 'page'}`}>
              <summary className={styles.question}>
                <h3>{faq.question}</h3>
                <span className={styles.toggle} aria-hidden="true" />
              </summary>
              <div className={styles.answer}>
                {faq.answer.split(/\n{2,}/).map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
