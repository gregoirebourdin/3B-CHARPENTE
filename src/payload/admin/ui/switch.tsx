'use client'

import { Switch as SwitchPrimitive } from 'radix-ui'
import type { ComponentProps, ReactNode } from 'react'

import { cn, focusRing } from './utils'

/**
 * On/off switch, always followed by its visible word (« Ouvert », « Fermé »):
 * the whole thing is the 44 px target.
 */
export function Switch({
  className,
  onLabel,
  offLabel,
  ...props
}: ComponentProps<typeof SwitchPrimitive.Root> & { onLabel?: ReactNode; offLabel?: ReactNode }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'tw:group tw:inline-flex tw:min-h-11 tw:shrink-0 tw:cursor-pointer tw:items-center tw:gap-2.5 tw:rounded-xs tw:border-0 tw:bg-transparent tw:p-0 tw:font-sans tw:text-base tw:font-semibold tw:text-ink tw:data-[state=unchecked]:text-stone-text tw:disabled:cursor-not-allowed tw:disabled:opacity-45',
        focusRing,
        className,
      )}
      {...props}
    >
      <span className="tw:relative tw:block tw:h-[26px] tw:w-11 tw:shrink-0 tw:rounded-full tw:bg-line-strong tw:transition-colors tw:duration-180 tw:group-data-[state=checked]:bg-forest">
        <SwitchPrimitive.Thumb className="tw:absolute tw:top-[3px] tw:left-[3px] tw:block tw:size-5 tw:rounded-full tw:bg-white tw:shadow-[0_1px_3px_rgb(16_35_17/0.3)] tw:transition-transform tw:duration-320 tw:ease-brand tw:data-[state=checked]:translate-x-[18px]" />
      </span>
      {onLabel || offLabel ? (
        <>
          <span className="tw:group-data-[state=unchecked]:hidden">{onLabel}</span>
          <span className="tw:group-data-[state=checked]:hidden">{offLabel}</span>
        </>
      ) : null}
    </SwitchPrimitive.Root>
  )
}
