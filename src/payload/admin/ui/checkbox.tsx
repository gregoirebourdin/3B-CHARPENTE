'use client'

import { Check, Minus } from 'lucide-react'
import { Checkbox as CheckboxPrimitive } from 'radix-ui'
import type { ComponentProps, ReactNode } from 'react'

import { cn, focusRing } from './utils'

/** The 22 px box alone (Radix Checkbox): forest when ticked, a dash when « partly ». */
export function CheckboxBox({ className, ...props }: ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'tw:peer tw:grid tw:size-[22px] tw:shrink-0 tw:cursor-pointer tw:place-items-center tw:rounded-[6px] tw:border-[1.5px] tw:border-solid tw:border-line-strong tw:bg-card tw:p-0 tw:text-on-forest',
        'tw:transition-[background-color,border-color] tw:duration-180 tw:hover:border-forest',
        'tw:data-[state=checked]:border-forest tw:data-[state=checked]:bg-forest tw:data-[state=indeterminate]:border-forest tw:data-[state=indeterminate]:bg-forest',
        'tw:aria-invalid:border-error tw:disabled:cursor-not-allowed tw:disabled:opacity-45',
        focusRing,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="tw:grid tw:place-items-center">
        {props.checked === 'indeterminate' ? <Minus aria-hidden="true" className="tw:size-4" strokeWidth={3} /> : <Check aria-hidden="true" className="tw:size-4" strokeWidth={3} />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

/** Box and its clickable sentence, on a 44 px line. */
export function Checkbox({
  label,
  hint,
  className,
  id,
  ...props
}: Omit<ComponentProps<typeof CheckboxPrimitive.Root>, 'children'> & { label: ReactNode; hint?: ReactNode; id: string }) {
  return (
    <div className={cn('tw:flex tw:min-h-11 tw:items-start tw:gap-3 tw:py-[11px]', className)}>
      <CheckboxBox id={id} {...props} />
      <label htmlFor={id} className="tw:grid tw:cursor-pointer tw:gap-0.5 tw:text-base tw:leading-[1.35] tw:text-ink tw:peer-disabled:cursor-not-allowed">
        <span>{label}</span>
        {hint ? <span className="tw:text-sm tw:text-stone-text">{hint}</span> : null}
      </label>
    </div>
  )
}

/**
 * A whole card that ticks (Radix Checkbox as the card itself): icon, title,
 * a line of help. Used where each choice deserves more than a line.
 */
export function CheckboxCard({ className, children, ...props }: ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox-card"
      className={cn(
        'tw:group tw:flex tw:w-full tw:min-h-14 tw:cursor-pointer tw:items-center tw:gap-3 tw:rounded-sm tw:border tw:border-solid tw:border-line-strong tw:bg-card tw:px-3.5 tw:py-2.5 tw:text-left tw:font-sans tw:text-ink',
        'tw:transition-[background-color,border-color,box-shadow] tw:duration-180 tw:hover:bg-surface',
        'tw:data-[state=checked]:border-forest tw:data-[state=checked]:bg-sage-soft tw:data-[state=checked]:shadow-[0_0_0_1px_var(--c-forest)]',
        focusRing,
        className,
      )}
      {...props}
    >
      <span className="tw:grid tw:size-[22px] tw:shrink-0 tw:place-items-center tw:rounded-[6px] tw:border-[1.5px] tw:border-solid tw:border-line-strong tw:bg-card tw:text-on-forest tw:transition-colors tw:duration-180 tw:group-data-[state=checked]:border-forest tw:group-data-[state=checked]:bg-forest">
        <CheckboxPrimitive.Indicator className="tw:grid tw:place-items-center">
          <Check aria-hidden="true" className="tw:size-4" strokeWidth={3} />
        </CheckboxPrimitive.Indicator>
      </span>
      {children}
    </CheckboxPrimitive.Root>
  )
}
