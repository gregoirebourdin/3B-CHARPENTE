'use client'

import { Tabs as TabsPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn, focusRing } from './utils'

export function Tabs({ className, ...props }: ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn('tw:flex tw:flex-col tw:gap-4', className)} {...props} />
}

/** Underlined tabs: hairline under the bar, 2 px forest line under the active one. */
export function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn('tw:flex tw:items-stretch tw:gap-1 tw:overflow-x-auto tw:border-b tw:border-line', className)}
      {...props}
    />
  )
}

export const tabTriggerClass = cn(
  "tw:relative tw:inline-flex tw:min-h-11 tw:shrink-0 tw:cursor-pointer tw:items-center tw:gap-2 tw:border-0 tw:bg-transparent tw:px-3.5 tw:font-sans tw:text-base tw:font-semibold tw:text-stone-text tw:no-underline tw:transition-colors tw:duration-180 tw:hover:text-ink tw:[&_svg]:size-5",
  "tw:after:absolute tw:after:right-2.5 tw:after:-bottom-px tw:after:left-2.5 tw:after:h-0.5 tw:after:rounded-[2px] tw:after:bg-transparent tw:after:content-['']",
  'tw:data-[state=active]:text-ink tw:data-[state=active]:after:bg-forest tw:aria-[current=page]:text-ink tw:aria-[current=page]:after:bg-forest',
  focusRing,
  'tw:focus-visible:outline-offset-[-2px]',
)

export function TabsTrigger({ className, ...props }: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return <TabsPrimitive.Trigger data-slot="tabs-trigger" className={cn(tabTriggerClass, className)} {...props} />
}

export function TabsContent({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content data-slot="tabs-content" className={cn('tw:flex-1 tw:outline-none', className)} {...props} />
}

/** Counter inside a tab: sage when the tab is active, grey otherwise, hidden at zero. */
export function TabCount({ value }: { value: number }) {
  if (!value) return null
  return (
    <span className="tw:inline-grid tw:h-6 tw:min-w-6 tw:place-items-center tw:rounded-full tw:bg-surface tw:px-1.5 tw:text-[13px] tw:font-bold tw:leading-none tw:text-stone-text tw:in-data-[state=active]:bg-sage tw:in-data-[state=active]:text-on-sage">
      {value}
    </span>
  )
}

/** Segmented group (filters): grey track, the active button is white and raised. */
export function Segmented({ className, ...props }: ComponentProps<'div'>) {
  return <div role="group" className={cn('tw:inline-flex tw:gap-0.5 tw:rounded-sm tw:bg-surface tw:p-[3px]', className)} {...props} />
}

export function SegmentedItem({ className, pressed, ...props }: ComponentProps<'button'> & { pressed: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      className={cn(
        'tw:inline-flex tw:min-h-[38px] tw:cursor-pointer tw:items-center tw:gap-2 tw:rounded-xs tw:border-0 tw:bg-transparent tw:px-3 tw:font-sans tw:text-[15px] tw:font-semibold tw:text-stone-text tw:hover:text-ink',
        'tw:aria-pressed:bg-card tw:aria-pressed:text-ink tw:aria-pressed:shadow-sm',
        focusRing,
        className,
      )}
      {...props}
    />
  )
}
