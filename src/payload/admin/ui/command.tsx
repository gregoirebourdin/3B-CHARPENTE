'use client'

import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'
import type { ComponentProps } from 'react'

import { cn } from './utils'

/*
 * shadcn/ui Command (cmdk): the searchable list behind the shadcn Combobox.
 * Unchanged in structure and API; 3B Charpente classes.
 */

function Command({ className, ...props }: ComponentProps<typeof CommandPrimitive>) {
  return <CommandPrimitive data-slot="command" className={cn('tw:flex tw:h-full tw:w-full tw:flex-col tw:overflow-hidden tw:rounded-sm tw:bg-card tw:font-sans tw:text-ink', className)} {...props} />
}

function CommandInput({ className, ...props }: ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="tw:flex tw:min-h-12 tw:items-center tw:gap-2.5 tw:border-0 tw:border-b tw:border-solid tw:border-line tw:px-3.5">
      <Search aria-hidden="true" className="tw:size-5 tw:shrink-0 tw:text-stone-text" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          'tw:flex tw:min-h-12 tw:w-full tw:border-0 tw:bg-transparent tw:p-0 tw:font-sans tw:text-[17px] tw:text-ink tw:outline-none tw:placeholder:text-stone-text tw:disabled:cursor-not-allowed tw:disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({ className, ...props }: ComponentProps<typeof CommandPrimitive.List>) {
  return <CommandPrimitive.List data-slot="command-list" className={cn('tw:max-h-[340px] tw:scroll-py-1.5 tw:overflow-x-hidden tw:overflow-y-auto', className)} {...props} />
}

function CommandEmpty(props: ComponentProps<typeof CommandPrimitive.Empty>) {
  return <CommandPrimitive.Empty data-slot="command-empty" className="tw:px-3.5 tw:py-5 tw:text-base tw:text-stone-text" {...props} />
}

function CommandGroup({ className, ...props }: ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'tw:overflow-hidden tw:p-1.5 tw:text-ink',
        'tw:[&_[cmdk-group-heading]]:px-2.5 tw:[&_[cmdk-group-heading]]:py-1.5 tw:[&_[cmdk-group-heading]]:text-sm tw:[&_[cmdk-group-heading]]:font-semibold tw:[&_[cmdk-group-heading]]:text-stone-text',
        className,
      )}
      {...props}
    />
  )
}

function CommandSeparator({ className, ...props }: ComponentProps<typeof CommandPrimitive.Separator>) {
  return <CommandPrimitive.Separator data-slot="command-separator" className={cn('tw:-mx-1.5 tw:h-px tw:bg-line', className)} {...props} />
}

function CommandItem({ className, ...props }: ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        'tw:relative tw:flex tw:min-h-12 tw:cursor-pointer tw:select-none tw:items-center tw:gap-2.5 tw:rounded-xs tw:px-3 tw:py-1.5 tw:text-base tw:text-ink tw:outline-none',
        'tw:data-[selected=true]:bg-sage-soft tw:data-[disabled=true]:pointer-events-none tw:data-[disabled=true]:opacity-50',
        'tw:[&_svg]:pointer-events-none tw:[&_svg]:shrink-0 tw:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    />
  )
}

function CommandShortcut({ className, ...props }: ComponentProps<'span'>) {
  return <span data-slot="command-shortcut" className={cn('tw:ml-auto tw:text-sm tw:tracking-widest tw:text-stone-text', className)} {...props} />
}

export { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut }
