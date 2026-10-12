'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { Button } from './button'
import { Input } from './input'
import { Textarea } from './textarea'
import { cn } from './utils'

/*
 * shadcn/ui Input Group (an input with an icon, text or button inside its
 * box), unchanged in structure and API; 3B Charpente classes.
 */

function InputGroup({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        'tw:group/input-group tw:relative tw:flex tw:min-h-11 tw:w-full tw:min-w-0 tw:items-center tw:rounded-xs tw:border tw:border-solid tw:border-line-strong tw:bg-card',
        'tw:transition-[border-color,box-shadow] tw:duration-180 tw:ease-brand tw:outline-none tw:hover:border-[color-mix(in_srgb,var(--c-ink)_45%,transparent)]',
        'tw:has-[>textarea]:h-auto',
        'tw:has-[>[data-align=inline-start]]:[&>input]:pl-2 tw:has-[>[data-align=inline-end]]:[&>input]:pr-2',
        'tw:has-[[data-slot=input-group-control]:focus-visible]:border-forest tw:has-[[data-slot=input-group-control]:focus-visible]:shadow-[0_0_0_3px_color-mix(in_srgb,var(--c-accent)_24%,transparent)]',
        'tw:has-[[data-slot][aria-invalid=true]]:border-error',
        className,
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  'tw:flex tw:h-auto tw:cursor-text tw:select-none tw:items-center tw:justify-center tw:gap-2 tw:py-1.5 tw:text-base tw:text-stone-text tw:[&>svg:not([class*=size-])]:size-5 tw:group-data-[disabled=true]/input-group:opacity-50',
  {
    variants: {
      align: {
        'inline-start': 'tw:order-first tw:pl-3.5 tw:has-[>button]:ml-[-0.45rem]',
        'inline-end': 'tw:order-last tw:pr-3.5 tw:has-[>button]:mr-[-0.45rem]',
      },
    },
    defaultVariants: { align: 'inline-start' },
  },
)

function InputGroupAddon({ className, align = 'inline-start', ...props }: ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return
        event.currentTarget.parentElement?.querySelector('input')?.focus()
      }}
      {...props}
    />
  )
}

function InputGroupButton({ className, type = 'button', variant = 'ghost', size = 'icon', ...props }: ComponentProps<typeof Button>) {
  return <Button type={type} data-slot="input-group-button" variant={variant} size={size} className={cn('tw:shadow-none', className)} {...props} />
}

function InputGroupText({ className, ...props }: ComponentProps<'span'>) {
  return <span className={cn('tw:flex tw:items-center tw:gap-2 tw:text-base tw:text-stone-text tw:[&_svg:not([class*=size-])]:size-5 tw:[&_svg]:pointer-events-none', className)} {...props} />
}

function InputGroupInput({ className, ...props }: ComponentProps<'input'>) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn('tw:flex-1 tw:rounded-none tw:border-0 tw:bg-transparent tw:shadow-none tw:hover:border-0 tw:focus-visible:shadow-none', className)}
      {...props}
    />
  )
}

function InputGroupTextarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn('tw:flex-1 tw:resize-none tw:rounded-none tw:border-0 tw:bg-transparent tw:py-3 tw:shadow-none tw:focus-visible:shadow-none', className)}
      {...props}
    />
  )
}

export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea }
