'use client'

import { Switch as SwitchPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn } from './utils'

export function Switch({ className, ...props }: ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'tw:peer tw:inline-flex tw:h-7 tw:w-12 tw:shrink-0 tw:cursor-pointer tw:items-center tw:rounded-full tw:border tw:border-transparent tw:p-0.5 tw:outline-none tw:transition-colors tw:focus-visible:ring-[3px] tw:focus-visible:ring-ring/40 tw:disabled:cursor-not-allowed tw:disabled:opacity-50 tw:data-[state=checked]:bg-primary tw:data-[state=unchecked]:bg-input',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="tw:pointer-events-none tw:block tw:size-6 tw:rounded-full tw:bg-card tw:shadow-xs tw:ring-0 tw:transition-transform tw:data-[state=checked]:translate-x-5 tw:data-[state=unchecked]:translate-x-0"
      />
    </SwitchPrimitive.Root>
  )
}
