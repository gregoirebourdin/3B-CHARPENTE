'use client'

import { Tabs as TabsPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn } from './utils'

export function Tabs({ className, ...props }: ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn('tw:flex tw:flex-col tw:gap-4', className)} {...props} />
}

export function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn('tw:inline-flex tw:w-fit tw:items-center tw:gap-1 tw:rounded-xl tw:bg-muted tw:p-1', className)}
      {...props}
    />
  )
}

export function TabsTrigger({ className, ...props }: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'tw:inline-flex tw:h-9 tw:cursor-pointer tw:items-center tw:justify-center tw:gap-2 tw:rounded-lg tw:border-0 tw:bg-transparent tw:px-3.5 tw:font-sans tw:text-[15px] tw:font-semibold tw:text-muted-foreground tw:outline-none tw:transition-colors tw:hover:text-foreground tw:focus-visible:ring-[3px] tw:focus-visible:ring-ring/40 tw:data-[state=active]:bg-card tw:data-[state=active]:text-foreground tw:data-[state=active]:shadow-xs',
        className,
      )}
      {...props}
    />
  )
}

export function TabsContent({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content data-slot="tabs-content" className={cn('tw:flex-1 tw:outline-none', className)} {...props} />
}
