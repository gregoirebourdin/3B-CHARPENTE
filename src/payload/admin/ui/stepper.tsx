import { Check } from 'lucide-react'
import { Fragment } from 'react'

import { cn, focusRing } from './utils'

export type Step = { label: string }

/**
 * Three visible steps joined by lines (designs § 12). Done steps are buttons
 * (going back is allowed), the current one is outlined, the next ones grey.
 */
export function Stepper({ steps, current, onSelect }: { steps: Step[]; current: number; onSelect?: (index: number) => void }) {
  return (
    <nav aria-label="Étapes">
      <ol className="tw:m-0 tw:flex tw:list-none tw:items-center tw:gap-4 tw:rounded-md tw:border tw:border-line tw:bg-card tw:px-5 tw:py-3.5 tw:max-desk:gap-2 tw:max-desk:px-3 tw:max-desk:py-2.5">
        {steps.map((step, index) => {
          const done = index < current
          const active = index === current
          const content = (
            <>
              <span
                aria-hidden="true"
                className={cn(
                  'tw:grid tw:size-9 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-[1.5px] tw:border-solid tw:font-heading tw:text-base tw:font-bold',
                  done && 'tw:border-forest tw:bg-forest tw:text-on-forest',
                  active && 'tw:border-2 tw:border-forest tw:bg-card tw:text-ink tw:shadow-[0_0_0_4px_var(--c-sage-soft)]',
                  !done && !active && 'tw:border-line-strong tw:bg-card tw:text-stone-text',
                )}
              >
                {done ? <Check className="tw:size-[18px] tw:stroke-[2.4]" /> : index + 1}
              </span>
              <span className={cn('tw:grid tw:text-left', !active && 'tw:max-desk:hidden')}>
                <small className="tw:text-sm tw:leading-[1.3] tw:text-stone-text tw:max-desk:hidden">
                  {done ? 'Terminé' : active ? `Étape ${index + 1} sur ${steps.length}` : `Étape ${index + 1}`}
                </small>
                <b className={cn('tw:text-base tw:leading-[1.25] tw:text-ink', active ? 'tw:font-bold' : 'tw:font-semibold')}>{step.label}</b>
              </span>
            </>
          )
          return (
            <Fragment key={step.label}>
              {index > 0 ? (
                <li aria-hidden="true" className={cn('tw:h-0.5 tw:min-w-6 tw:flex-1 tw:rounded-[2px] tw:max-desk:min-w-3', index <= current ? 'tw:bg-forest' : 'tw:bg-line-strong')} />
              ) : null}
              <li className="tw:min-w-0" aria-current={active ? 'step' : undefined}>
                {done && onSelect ? (
                  <button
                    type="button"
                    onClick={() => onSelect(index)}
                    className={cn('tw:flex tw:min-h-11 tw:cursor-pointer tw:items-center tw:gap-3 tw:rounded-xs tw:border-0 tw:bg-transparent tw:p-0 tw:font-sans', focusRing)}
                  >
                    {content}
                    <span className="tw:sr-only"> (revenir à cette étape)</span>
                  </button>
                ) : (
                  <span className="tw:flex tw:min-h-11 tw:items-center tw:gap-3">{content}</span>
                )}
              </li>
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
