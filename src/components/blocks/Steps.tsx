import { CmsLink } from '@/components/ui/CmsLink'
import { Media, isMedia } from '@/components/ui/Media'
import { RichText } from '@/components/rich-text/RichText'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { resolveLink } from '@/lib/links'
import type { StepsBlock as Data } from '@/payload-types'

import styles from './Steps.module.css'
import type { BlockProps } from './types'

type Step = NonNullable<Data['steps']>[number]

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * The cycle of a method that loops (3B Récup': from the diagnostic to the
 * repose): numbered nodes on a ring, the wood rings in the middle. Purely
 * decorative: the same steps follow as an ordered list.
 */
function Cycle({ steps }: { steps: Step[] }) {
  const size = 440
  const c = size / 2
  const r = 150
  const n = steps.length
  const angle = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / n
  const point = (i: number, radius = r) => ({ x: c + radius * Math.cos(angle(i)), y: c + radius * Math.sin(angle(i)) })
  const gap = 0.24
  const arc = (i: number) => {
    const a0 = angle(i) + gap
    const a1 = angle(i + 1) - gap
    const p0 = { x: c + r * Math.cos(a0), y: c + r * Math.sin(a0) }
    const p1 = { x: c + r * Math.cos(a1), y: c + r * Math.sin(a1) }
    return `M${p0.x.toFixed(1)} ${p0.y.toFixed(1)} A${r} ${r} 0 0 1 ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`
  }
  return (
    <div className={styles.cycle} aria-hidden="true">
      <div className={styles.cycleRings} />
      <svg viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <marker id="steps-cycle-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M1 1l7 4-7 4" className={styles.cycleArrow} />
          </marker>
        </defs>
        {steps.map((_, i) => (
          <path key={`arc-${i}`} d={arc(i)} className={styles.cycleArc} markerEnd="url(#steps-cycle-arrow)" />
        ))}
        {steps.map((step, i) => {
          const p = point(i)
          const l = point(i, r + 34)
          const cos = Math.cos(angle(i))
          const anchor = Math.abs(cos) < 0.2 ? 'middle' : cos > 0 ? 'start' : 'end'
          const dy = Math.sin(angle(i)) < -0.8 ? -6 : Math.sin(angle(i)) > 0.8 ? 14 : 5
          return (
            <g key={step.id ?? i}>
              <circle cx={p.x} cy={p.y} r="19" className={styles.cycleNode} />
              <text x={p.x} y={p.y + 5} textAnchor="middle" className={styles.cycleNum}>
                {pad(i + 1)}
              </text>
              <text x={l.x} y={l.y + dy} textAnchor={anchor} className={styles.cycleLabel}>
                {step.title}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

/**
 * Steps, always all visible (no tabs): a numbered frieze (vertical on phones),
 * in rows of three when the method is long. Detailed steps with photos open
 * on a contact sheet of those photos. A method that loops (« HowTo » of
 * 3B Récup') becomes a forest panel with its cycle.
 */
export function Steps({ block, context }: BlockProps<Data>) {
  const cta = resolveLink(block.cta, context.company)
  const steps = block.steps ?? []
  const cycle = Boolean(block.isHowTo) && steps.length >= 3 && steps.length <= 6
  const rows = steps.length > 5
  const photos =
    block.variant === 'timeline'
      ? []
      : steps
          .map((step, index) => ({ step, index, image: isMedia(step.image) ? step.image : null }))
          .filter((item) => item.image)
          .slice(0, 4)

  const frieze = (
    <ol
      className={`${styles.frieze} ${rows ? styles.rows : ''} ${cycle ? styles.onForest : ''}`}
      style={{ ['--steps' as string]: rows ? 3 : Math.max(steps.length, 1) }}
      data-reveal=""
    >
      {steps.map((step, index) => (
        <li key={step.id ?? index}>
          <span className={styles.num}>{pad(index + 1)}</span>
          <h3 className={styles.title}>{step.title}</h3>
          <RichText data={step.text} className={styles.text} />
        </li>
      ))}
    </ol>
  )

  if (cycle) {
    return (
      <section id={block.anchor || undefined} className={styles.cycleWrap}>
        <div className="container">
          <div className={styles.panel}>
            <div className={styles.panelRings} aria-hidden="true" />
            <div className={styles.panelTop}>
              <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} inverse className={styles.panelHeading} />
              <Cycle steps={steps} />
            </div>
            {frieze}
            {cta ? (
              <div className={styles.cta}>
                <CmsLink link={cta} variant="light" arrow />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    )
  }

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
      {photos.length ? (
        <ul className={styles.sheet} data-count={photos.length} data-reveal="">
          {photos.map(({ step, index, image }) => (
            <li key={step.id ?? index} className={styles.sheetItem}>
              <Media media={image} fill sizes="(min-width: 1100px) 300px, (min-width: 700px) 45vw, 92vw" />
              <span className={styles.sheetTag}>
                <b>{pad(index + 1)}</b> {step.title}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
      {frieze}
    </Section>
  )
}
