'use client'

import { Popover as PopoverPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn } from './utils'

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverAnchor = PopoverPrimitive.Anchor

/** Floating card under a button (link editor…), same look as lists and menus. */
export function PopoverContent({ className, align = 'start', sideOffset = 8, ...props }: ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'tw:z-[1000] tw:w-[min(440px,calc(100vw-32px))] tw:rounded-sm tw:border tw:border-solid tw:border-line tw:bg-card tw:p-4 tw:font-sans tw:text-ink tw:shadow-lg tw:outline-none',
          'tw:origin-[var(--radix-popover-content-transform-origin)] tw:animate-[tb-pop_160ms_cubic-bezier(0.22,1,0.36,1)]',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}
