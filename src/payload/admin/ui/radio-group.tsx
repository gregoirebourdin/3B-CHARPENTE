'use client'

import { RadioGroup as RadioGroupPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn, focusRing } from './utils'

/* shadcn/ui Radio Group (Radix), unchanged in structure and API; 3B Charpente classes. */
function RadioGroup({ className, ...props }: ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot="radio-group" className={cn('tw:grid tw:gap-2', className)} {...props} />
}

function RadioGroupItem({ className, ...props }: ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'tw:grid tw:aspect-square tw:size-5 tw:shrink-0 tw:cursor-pointer tw:place-items-center tw:rounded-full tw:border-[1.5px] tw:border-solid tw:border-line-strong tw:bg-card tw:p-0',
        'tw:transition-[border-color] tw:duration-180 tw:hover:border-forest tw:data-[state=checked]:border-forest',
        'tw:aria-invalid:border-error tw:disabled:cursor-not-allowed tw:disabled:opacity-45',
        focusRing,
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator data-slot="radio-group-indicator" className="tw:block tw:size-2.5 tw:rounded-full tw:bg-forest" />
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
