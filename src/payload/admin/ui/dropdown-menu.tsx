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
        className={cn('tw:z-[1000] tw:min-w-56 tw:overflow-hidden tw:rounded-xl tw:border tw:border-border tw:bg-card tw:p-1.5 tw:text-foreground tw:shadow-md', className)}
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
        'tw:flex tw:min-h-10 tw:cursor-pointer tw:select-none tw:items-center tw:gap-2.5 tw:rounded-lg tw:px-2.5 tw:text-[15px] tw:font-medium tw:text-foreground tw:no-underline tw:outline-none tw:data-[highlighted]:bg-muted tw:[&_svg]:size-[18px] tw:[&_svg]:text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

export function DropdownMenuLabel({ className, ...props }: ComponentProps<typeof MenuPrimitive.Label>) {
  return <MenuPrimitive.Label className={cn('tw:px-2.5 tw:py-2 tw:text-sm tw:text-muted-foreground', className)} {...props} />
}

export function DropdownMenuSeparator({ className, ...props }: ComponentProps<typeof MenuPrimitive.Separator>) {
  return <MenuPrimitive.Separator className={cn('tw:my-1 tw:h-px tw:bg-border', className)} {...props} />
}
