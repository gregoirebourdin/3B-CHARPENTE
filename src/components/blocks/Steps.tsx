import { CmsLink } from '@/components/ui/CmsLink'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Media, isMedia } from '@/components/ui/Media'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink } from '@/lib/links'
import type { StepsBlock as Data } from '@/payload-types'

import { StepsTabs } from './StepsTabs'
import styles from './Steps.module.css'
import type { BlockProps } from './types'

export function Steps({ block, context }: BlockProps<Data>) {
  const steps = (block.steps ?? []).map((step, index) => ({
    id: step.id ?? String(index),
    number: String(index + 1).padStart(2, '0'),
    title: step.title,
    content: <RichText data={step.text} />,
    image: isMedia(step.image) ? (
      <Media media={step.image} sizes="(min-width: 1000px) 460px, 92vw" className={styles.image} />
    ) : null,
  }))
  const cta = resolveLink(block.cta, context.company)

  return (
    <Section tone={block.tone} anchor={block.anchor} recup={block.isHowTo ?? false}>
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} align="center" />
      {block.variant === 'timeline' ? (
        <ol className={styles.timeline} data-reveal="">
          {steps.map((step) => (
            <li key={step.id} className={styles.timelineItem}>
              <span className={styles.timelineNumber}>{step.number}</span>
              <div className={styles.timelineBody}>
                <h3>{step.title}</h3>
                {step.content}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <StepsTabs steps={steps} />
      )}
      {cta ? (
        <div className={styles.cta}>
          <CmsLink link={cta} variant="primary" size="large" arrow />
        </div>
      ) : null}
    </Section>
  )
}
