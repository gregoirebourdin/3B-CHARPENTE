import { CmsLink } from '@/components/ui/CmsLink'
import { Media, isMedia } from '@/components/ui/Media'
import { RichText } from '@/components/rich-text/RichText'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { resolveLink } from '@/lib/links'
import type { StepsBlock as Data } from '@/payload-types'

import styles from './Steps.module.css'
import type { BlockProps } from './types'

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * Steps, always all visible. « Étapes détaillées »: the heading (and a photo)
 * stay in view on the left, the numbered steps run on the right, each with a
 * thumbnail when it has a photo. « Frise »: short steps side by side, as cards.
 */
export function Steps({ block, context }: BlockProps<Data>) {
  const cta = resolveLink(block.cta, context.company)
  const steps = block.steps ?? []

  if (block.variant === 'timeline') {
    return (
      <Section tone={block.tone} anchor={block.anchor}>
        <SectionHeading
          kicker={block.kicker}
          title={block.title}
          accent={block.titleAccent}
          intro={block.intro}
          layout="split"
          actions={cta ? <CmsLink link={cta} variant="primary" arrow /> : undefined}
        />
        <ol className={styles.row} style={{ ['--steps' as string]: steps.length > 5 ? 3 : Math.max(steps.length, 1) }}>
          {steps.map((step, index) => (
            <li key={step.id ?? index} data-reveal="" style={{ ['--reveal-delay' as string]: `${(index % 5) * 60}ms` }}>
              <span className={styles.num}>{pad(index + 1)}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <RichText data={step.text} className={styles.text} />
            </li>
          ))}
        </ol>
      </Section>
    )
  }

  const withPhoto = steps.map((step) => (isMedia(step.image) ? step.image : null))
  const asideIndex = withPhoto.findIndex(Boolean)
  const aside = asideIndex >= 0 ? withPhoto[asideIndex] : null

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <div className={styles.split}>
        <div className={styles.aside}>
          <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} className={styles.heading} />
          {aside ? (
            <div className={styles.asidePhoto} data-reveal="">
              <Media media={aside} fill sizes="(min-width: 1000px) 460px, 92vw" />
            </div>
          ) : null}
          {cta ? <CmsLink link={cta} variant="primary" arrow /> : null}
        </div>
        <ol className={styles.list}>
          {steps.map((step, index) => {
            const image = index !== asideIndex ? withPhoto[index] : null
            return (
              <li key={step.id ?? index} data-reveal="">
                <span className={styles.num}>{pad(index + 1)}</span>
                <div className={styles.copy}>
                  <h3 className={styles.title}>{step.title}</h3>
                  <RichText data={step.text} className={styles.text} />
                </div>
                {image ? (
                  <div className={styles.thumb}>
                    <Media media={image} fill sizes="140px" />
                  </div>
                ) : null}
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
