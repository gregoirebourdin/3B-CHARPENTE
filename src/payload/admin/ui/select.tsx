'use client'

import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { Select as SelectPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn } from './utils'

/*
 * shadcn/ui Select (Radix Select), unchanged in structure and API. Only the
 * classes carry the 3B Charpente look: the trigger is the same box as the
 * text fields, the list is a card under it, the chosen line has a forest
 * check mark on its left.
 */

function Select(props: ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup(props: ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue(props: ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({ className, size = 'default', children, ...props }: ComponentProps<typeof SelectPrimitive.Trigger> & { size?: 'sm' | 'default' }) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        'tw:group tw:flex tw:w-full tw:min-w-0 tw:cursor-pointer tw:items-center tw:justify-between tw:gap-2 tw:rounded-xs tw:border tw:border-solid tw:border-line-strong tw:bg-card tw:px-3.5 tw:text-left tw:font-sans tw:text-base tw:leading-[1.4] tw:text-ink tw:outline-none',
        'tw:data-[size=default]:min-h-11 tw:data-[size=default]:py-2.5 tw:data-[size=sm]:min-h-10 tw:data-[size=sm]:py-2',
        'tw:transition-[border-color,box-shadow] tw:duration-180 tw:ease-brand tw:hover:border-[color-mix(in_srgb,var(--c-ink)_45%,transparent)]',
        'tw:focus-visible:border-forest tw:focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--c-accent)_24%,transparent)]',
        'tw:data-[state=open]:border-forest tw:data-[state=open]:shadow-[0_0_0_3px_color-mix(in_srgb,var(--c-accent)_24%,transparent)]',
        'tw:data-[placeholder]:text-stone-text tw:aria-invalid:border-error tw:disabled:cursor-not-allowed tw:disabled:bg-surface tw:disabled:text-stone-text',
        'tw:*:data-[slot=select-value]:min-w-0 tw:*:data-[slot=select-value]:truncate',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown aria-hidden="true" className="tw:size-4 tw:shrink-0 tw:text-stone-text tw:transition-transform tw:duration-180 tw:group-data-[state=open]:rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({ className, children, position = 'popper', align = 'start', ...props }: ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        align={align}
        sideOffset={6}
        className={cn(
          'tw:relative tw:z-[1000] tw:max-h-[min(360px,var(--radix-select-content-available-height))] tw:min-w-[8rem] tw:overflow-hidden tw:rounded-sm tw:border tw:border-solid tw:border-line tw:bg-card tw:font-sans tw:text-ink tw:shadow-lg',
          'tw:origin-[var(--radix-select-content-transform-origin)] tw:animate-[tb-pop_160ms_cubic-bezier(0.22,1,0.36,1)]',
          position === 'popper' && 'tw:w-full tw:min-w-[var(--radix-select-trigger-width)]',
          className,
        )}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="tw:p-1.5">{children}</SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({ className, ...props }: ComponentProps<typeof SelectPrimitive.Label>) {
  return <SelectPrimitive.Label data-slot="select-label" className={cn('tw:px-2.5 tw:py-1.5 tw:text-sm tw:font-semibold tw:text-stone-text', className)} {...props} />
}

function SelectItem({ className, children, ...props }: ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        'tw:relative tw:flex tw:min-h-10 tw:w-full tw:cursor-pointer tw:select-none tw:items-center tw:gap-2 tw:rounded-xs tw:py-2 tw:pr-3 tw:pl-9 tw:text-base tw:leading-snug tw:text-ink tw:outline-none',
        'tw:data-[highlighted]:bg-surface tw:data-[state=checked]:font-semibold tw:data-[disabled]:pointer-events-none tw:data-[disabled]:opacity-45',
        className,
      )}
      {...props}
    >
      <span className="tw:absolute tw:left-2.5 tw:flex tw:size-4 tw:items-center tw:justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check aria-hidden="true" className="tw:size-4 tw:text-forest" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({ className, ...props }: ComponentProps<typeof SelectPrimitive.Separator>) {
  return <SelectPrimitive.Separator data-slot="select-separator" className={cn('tw:pointer-events-none tw:-mx-1.5 tw:my-1.5 tw:h-px tw:bg-line', className)} {...props} />
}

function SelectScrollUpButton({ className, ...props }: ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton data-slot="select-scroll-up-button" className={cn('tw:flex tw:h-7 tw:cursor-default tw:items-center tw:justify-center tw:text-stone-text', className)} {...props}>
      <ChevronUp aria-hidden="true" className="tw:size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({ className, ...props }: ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton data-slot="select-scroll-down-button" className={cn('tw:flex tw:h-7 tw:cursor-default tw:items-center tw:justify-center tw:text-stone-text', className)} {...props}>
      <ChevronDown aria-hidden="true" className="tw:size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue }
