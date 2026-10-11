'use client'

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'

import styles from './Steps.module.css'

type Step = { id: string; number: string; title: string; content: ReactNode; image: ReactNode }

/**
 * Numbered tabs 01 → 0N with a progress rule on desktop, an accordion on
 * mobile. Without JavaScript (class "js" absent on <html>), every step is
 * shown one under the other: nothing is hidden from visitors or crawlers.
 */
export function StepsTabs({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0)
  const base = useId()
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = steps.length - 1
    let next = index
    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1
    else if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    else return
    event.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <div className={styles.tabs} style={{ ['--steps' as string]: steps.length, ['--active' as string]: active }}>
      <div role="tablist" aria-label="Étapes" className={styles.tablist}>
        {steps.map((step, index) => (
          <button
            key={step.id}
            ref={(element) => {
              tabs.current[index] = element
            }}
            role="tab"
            type="button"
            id={`${base}-tab-${index}`}
            aria-selected={active === index}
            aria-controls={`${base}-panel-${index}`}
            tabIndex={active === index ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <span className={styles.tabTitle}>{step.title}</span>
            <span className={styles.tabNumber}>{step.number}</span>
          </button>
        ))}
        <span className={styles.progress} aria-hidden="true" />
      </div>

      <div className={styles.panels}>
        {steps.map((step, index) => (
          <div key={step.id} className={styles.item} data-active={active === index || undefined}>
            <button
              type="button"
              className={styles.accordionHead}
              aria-expanded={active === index}
              aria-controls={`${base}-panel-${index}`}
              onClick={() => setActive(active === index ? -1 : index)}
            >
              <span className={styles.tabNumber}>{step.number}</span>
              <span className={styles.tabTitle}>{step.title}</span>
            </button>
            <div
              role="tabpanel"
              id={`${base}-panel-${index}`}
              aria-labelledby={`${base}-tab-${index}`}
              className={styles.panel}
            >
              <div className={styles.panelText}>
                <h3 className={styles.panelTitle}>
                  <span className={styles.panelNumber}>{step.number}</span> {step.title}
                </h3>
                {step.content}
              </div>
              {step.image ? <div className={styles.panelImage}>{step.image}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
