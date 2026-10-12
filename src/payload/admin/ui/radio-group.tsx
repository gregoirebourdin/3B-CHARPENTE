'use client'

import { RadioGroup as RadioPrimitive } from 'radix-ui'
import type { ReactNode } from 'react'

import { cn, focusRing } from './utils'

export type RadioOption = { value: string; label: ReactNode; hint?: ReactNode }

/**
 * Choice among a few answers (Radix RadioGroup), as cards you click
 * anywhere: the chosen one is outlined in forest. Arrows move the choice.
 */
export function RadioCards({
  value,
  onValueChange,
  options,
  layout = 'horizontal',
  disabled,
  invalid,
  className,
  ...aria
}: {
  value: string | undefined
  onValueChange: (value: string) => void
  options: RadioOption[]
  layout?: 'horizontal' | 'vertical'
  disabled?: boolean
  invalid?: boolean
  className?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
}) {
  return (
    <RadioPrimitive.Root
      value={value ?? ''}
      onValueChange={onValueChange}
      disabled={disabled}
      aria-invalid={invalid || undefined}
      className={cn('tw:grid tw:gap-2', layout === 'horizontal' ? 'tw:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]' : 'tw:grid-cols-1', className)}
      {...aria}
    >
      {options.map((option) => (
        <RadioPrimitive.Item
          key={option.value}
          value={option.value}
          className={cn(
            'tw:group tw:flex tw:min-h-11 tw:cursor-pointer tw:items-start tw:gap-3 tw:rounded-xs tw:border tw:border-solid tw:border-line-strong tw:bg-card tw:px-3.5 tw:py-[11px] tw:text-left tw:font-sans tw:text-base tw:leading-[1.35] tw:text-ink',
            'tw:transition-[border-color,box-shadow,background-color] tw:duration-180 tw:hover:border-forest',
            'tw:data-[state=checked]:border-forest tw:data-[state=checked]:bg-[color-mix(in_srgb,var(--c-sage-soft)_45%,var(--c-card))] tw:data-[state=checked]:shadow-[inset_0_0_0_1px_var(--c-forest)]',
            'tw:disabled:cursor-not-allowed tw:disabled:opacity-45',
            focusRing,
          )}
        >
          <span className="tw:mt-px tw:grid tw:size-5 tw:shrink-0 tw:place-items-center tw:rounded-full tw:border-[1.5px] tw:border-solid tw:border-line-strong tw:bg-card tw:group-data-[state=checked]:border-forest">
            <RadioPrimitive.Indicator className="tw:block tw:size-2.5 tw:rounded-full tw:bg-forest" />
          </span>
          <span className="tw:grid tw:min-w-0 tw:gap-0.5">
            <span className="tw:font-semibold">{option.label}</span>
            {option.hint ? <span className="tw:text-sm tw:text-stone-text">{option.hint}</span> : null}
          </span>
        </RadioPrimitive.Item>
      ))}
    </RadioPrimitive.Root>
  )
}
