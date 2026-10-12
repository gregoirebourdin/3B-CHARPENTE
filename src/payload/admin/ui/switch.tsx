'use client'

import { Switch as SwitchPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn, focusRing } from './utils'

/* shadcn/ui Switch (Radix Switch), unchanged in structure and API; 3B Charpente classes (forest when on). */
function Switch({ className, ...props }: ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'tw:peer tw:relative tw:inline-flex tw:h-[26px] tw:w-11 tw:shrink-0 tw:cursor-pointer tw:items-center tw:rounded-full tw:border-0 tw:bg-line-strong tw:p-0',
        'tw:transition-colors tw:duration-180 tw:data-[state=checked]:bg-forest tw:disabled:cursor-not-allowed tw:disabled:opacity-45',
        focusRing,
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="tw:pointer-events-none tw:block tw:size-5 tw:translate-x-[3px] tw:rounded-full tw:bg-white tw:shadow-[0_1px_3px_rgb(16_35_17/0.3)] tw:transition-transform tw:duration-320 tw:ease-brand tw:data-[state=checked]:translate-x-[21px]"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
