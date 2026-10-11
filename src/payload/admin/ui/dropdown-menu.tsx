'use client'

import { DropdownMenu as MenuPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn } from './utils'

export const DropdownMenu = MenuPrimitive.Root
export const DropdownMenuTrigger = MenuPrimitive.Trigger

export function DropdownMenuContent({ className, sideOffset = 6, ...props }: ComponentProps<typeof MenuPrimitive.Content>) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn('tw:z-[1000] tw:grid tw:min-w-60 tw:gap-0.5 tw:overflow-hidden tw:rounded-sm tw:border tw:border-line tw:bg-card tw:p-1.5 tw:font-sans tw:text-ink tw:shadow-lg', className)}
        {...props}
      />
    </MenuPrimitive.Portal>
  )
}

export function DropdownMenuItem({ className, ...props }: ComponentProps<typeof MenuPrimitive.Item>) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      className={cn(
        'tw:flex tw:min-h-11 tw:cursor-pointer tw:select-none tw:items-center tw:gap-2.5 tw:rounded-xs tw:px-3 tw:text-base tw:text-ink tw:no-underline tw:outline-none tw:data-[highlighted]:bg-surface tw:data-[variant=destructive]:text-error tw:[&_svg]:size-5 tw:[&_svg]:text-stone-text tw:data-[variant=destructive]:[&_svg]:text-error',
        className,
      )}
      {...props}
    />
  )
}

export function DropdownMenuLabel({ className, ...props }: ComponentProps<typeof MenuPrimitive.Label>) {
  return <MenuPrimitive.Label className={cn('tw:px-3 tw:py-2 tw:text-sm tw:text-stone-text', className)} {...props} />
}

export function DropdownMenuSeparator({ className, ...props }: ComponentProps<typeof MenuPrimitive.Separator>) {
  return <MenuPrimitive.Separator className={cn('tw:my-1 tw:h-px tw:bg-line', className)} {...props} />
}
