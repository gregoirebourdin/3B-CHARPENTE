import { CmsLink } from '@/components/ui/CmsLink'
import { Media, isMedia } from '@/components/ui/Media'
import { RichText } from '@/components/rich-text/RichText'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { resolveLink } from '@/lib/links'
import type { StepsBlock as Data } from '@/payload-types'

import styles from './Steps.module.css'
import type { BlockProps } from './types'

/**
 * Steps, always all visible (no tabs): a numbered horizontal frieze for short
 * steps (vertical on phones), or detailed steps with their photos.
 */
export function Steps({ block, context }: BlockProps<Data>) {
  const cta = resolveLink(block.cta, context.company)
  const frieze = block.variant === 'timeline'
  const steps = block.steps ?? []
  const button = cta ? <CmsLink link={cta} variant="primary" arrow /> : null

  return (
    <Section tone={block.tone} anchor={block.anchor} recup={block.isHowTo ?? false}>
      <SectionHeading
        kicker={block.kicker}
        title={block.title}
        accent={block.titleAccent}
        intro={block.intro}
        layout="split"
        actions={frieze ? button : undefined}
      />
      {frieze ? (
        <ol className={styles.frieze} style={{ ['--steps' as string]: Math.min(steps.length, 6) }} data-reveal="">
          {steps.map((step, index) => (
            <li key={step.id ?? index}>
              <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <RichText data={step.text} className={styles.text} />
            </li>
          ))}
        </ol>
      ) : (
        <>
          <ol className={styles.detailed}>
            {steps.map((step, index) => {
              const image = isMedia(step.image) ? step.image : null
              return (
                <li key={step.id ?? index} className={styles.step} data-has-image={image ? '' : undefined} data-reveal="">
                  <span className={styles.bigNum}>{String(index + 1).padStart(2, '0')}</span>
                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <RichText data={step.text} className={styles.stepText} />
                  </div>
                  {image ? (
                    <figure className={styles.photo}>
                      <Media media={image} fill sizes="(min-width: 1000px) 360px, 92vw" />
                    </figure>
                  ) : null}
                </li>
              )
            })}
          </ol>
          {button ? <div className={styles.cta}>{button}</div> : null}
        </>
      )}
    </Section>
  )
}
