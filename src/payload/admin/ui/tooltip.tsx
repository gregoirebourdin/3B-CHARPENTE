'use client'

import { Tooltip as TooltipPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn } from './utils'

export function TooltipProvider({ delayDuration = 200, ...props }: ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />
}

export const Tooltip = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

export function TooltipContent({ className, sideOffset = 6, children, ...props }: ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn('tw:z-[1000] tw:max-w-xs tw:rounded-lg tw:bg-foreground tw:px-3 tw:py-2 tw:text-sm tw:text-background tw:shadow-md', className)}
        {...props}
      >
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}
