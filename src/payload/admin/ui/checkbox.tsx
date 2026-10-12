'use client'

import { Check, Minus } from 'lucide-react'
import { Checkbox as CheckboxPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn, focusRing } from './utils'

/*
 * shadcn/ui Checkbox (Radix Checkbox), unchanged in structure and API;
 * 3B Charpente classes: a 22 px box, forest when ticked, and a dash (instead
 * of the tick) when it is « partly » ticked.
 */
function Checkbox({ className, ...props }: ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'tw:peer tw:group/checkbox tw:grid tw:size-[22px] tw:shrink-0 tw:cursor-pointer tw:place-items-center tw:rounded-[6px] tw:border-[1.5px] tw:border-solid tw:border-line-strong tw:bg-card tw:p-0 tw:text-on-forest',
        'tw:transition-[background-color,border-color] tw:duration-180 tw:hover:border-forest',
        'tw:data-[state=checked]:border-forest tw:data-[state=checked]:bg-forest tw:data-[state=indeterminate]:border-forest tw:data-[state=indeterminate]:bg-forest',
        'tw:aria-invalid:border-error tw:disabled:cursor-not-allowed tw:disabled:opacity-45',
        focusRing,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="tw:grid tw:place-items-center">
        <Check aria-hidden="true" className="tw:size-4 tw:group-data-[state=indeterminate]/checkbox:hidden" strokeWidth={3} />
        <Minus aria-hidden="true" className="tw:hidden tw:size-4 tw:group-data-[state=indeterminate]/checkbox:block" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
