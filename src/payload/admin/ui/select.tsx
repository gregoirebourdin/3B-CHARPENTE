'use client'

import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { Select as SelectPrimitive } from 'radix-ui'
import type { ComponentProps, ReactNode } from 'react'

import { fieldClass } from './input'
import { cn } from './utils'

export type SelectOption = { value: string; label: ReactNode; hint?: ReactNode; disabled?: boolean }

/**
 * Drop-down list drawn by us (Radix Select): same box as the text fields,
 * list in a card under the field, check mark on the chosen line, typing a
 * letter jumps to it. Never the system menu.
 */
export function Select({
  value,
  onValueChange,
  options,
  placeholder = 'Choisir…',
  className,
  contentClassName,
  disabled,
  invalid,
  id,
  name,
  required,
  'aria-label': ariaLabel,
  'aria-describedby': describedBy,
  size = 'default',
}: {
  value: string | undefined
  onValueChange: (value: string) => void
  options: SelectOption[]
  placeholder?: ReactNode
  className?: string
  contentClassName?: string
  disabled?: boolean
  invalid?: boolean
  id?: string
  name?: string
  required?: boolean
  'aria-label'?: string
  'aria-describedby'?: string
  size?: 'default' | 'sm'
}) {
  return (
    <SelectPrimitive.Root value={value || undefined} onValueChange={onValueChange} disabled={disabled} name={name} required={required}>
      <SelectTrigger id={id} aria-label={ariaLabel} aria-describedby={describedBy} aria-invalid={invalid || undefined} className={cn(size === 'sm' && 'tw:min-h-10 tw:py-2', className)}>
        <SelectPrimitive.Value placeholder={<span className="tw:text-stone-text">{placeholder}</span>} />
      </SelectTrigger>
      <SelectContent className={contentClassName}>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} disabled={option.disabled} hint={option.hint}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectPrimitive.Root>
  )
}

export function SelectTrigger({ className, children, ...props }: ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        fieldClass,
        'tw:group tw:flex tw:min-h-11 tw:cursor-pointer tw:items-center tw:justify-between tw:gap-2 tw:text-left',
        'tw:data-[state=open]:border-forest tw:data-[state=open]:shadow-[0_0_0_3px_color-mix(in_srgb,var(--c-accent)_24%,transparent)]',
        'tw:[&>span]:min-w-0 tw:[&>span]:truncate',
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

export function SelectContent({ className, children, position = 'popper', ...props }: ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        sideOffset={6}
        className={cn(
          'tw:relative tw:z-[1000] tw:max-h-[min(360px,var(--radix-select-content-available-height))] tw:min-w-[var(--radix-select-trigger-width)] tw:overflow-hidden tw:rounded-sm tw:border tw:border-line tw:bg-card tw:font-sans tw:text-ink tw:shadow-lg',
          'tw:origin-[var(--radix-select-content-transform-origin)] tw:animate-[tb-pop_160ms_cubic-bezier(0.22,1,0.36,1)]',
          className,
        )}
        {...props}
      >
        <SelectPrimitive.ScrollUpButton className="tw:flex tw:h-7 tw:cursor-default tw:items-center tw:justify-center tw:text-stone-text">
          <ChevronUp aria-hidden="true" className="tw:size-4" />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="tw:p-1.5">{children}</SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="tw:flex tw:h-7 tw:cursor-default tw:items-center tw:justify-center tw:text-stone-text">
          <ChevronDown aria-hidden="true" className="tw:size-4" />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

export function SelectItem({ className, children, hint, ...props }: ComponentProps<typeof SelectPrimitive.Item> & { hint?: ReactNode }) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        'tw:relative tw:flex tw:min-h-10 tw:cursor-pointer tw:select-none tw:items-center tw:gap-2 tw:rounded-xs tw:py-2 tw:pr-3 tw:pl-9 tw:text-base tw:leading-snug tw:text-ink tw:outline-none',
        'tw:data-[highlighted]:bg-surface tw:data-[state=checked]:font-semibold tw:data-[disabled]:cursor-not-allowed tw:data-[disabled]:opacity-45',
        className,
      )}
      {...props}
    >
      <span className="tw:absolute tw:left-2.5 tw:flex tw:size-4 tw:items-center tw:justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check aria-hidden="true" className="tw:size-4 tw:text-forest" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <span className="tw:grid tw:min-w-0">
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        {hint ? <span className="tw:text-sm tw:font-normal tw:text-stone-text">{hint}</span> : null}
      </span>
    </SelectPrimitive.Item>
  )
}
