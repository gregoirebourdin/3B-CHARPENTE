import type { ComponentProps } from 'react'

import { cn } from './utils'

const field =
  'tw:w-full tw:min-w-0 tw:rounded-lg tw:border tw:border-input tw:bg-card tw:px-3.5 tw:font-sans tw:text-base tw:text-foreground tw:shadow-xs tw:outline-none tw:transition-[border-color,box-shadow] tw:placeholder:text-muted-foreground/80 tw:focus-visible:border-ring tw:focus-visible:ring-[3px] tw:focus-visible:ring-ring/25 tw:disabled:cursor-not-allowed tw:disabled:opacity-60 tw:aria-invalid:border-destructive tw:aria-invalid:ring-destructive/20'

export function Input({ className, type = 'text', ...props }: ComponentProps<'input'>) {
  return <input type={type} data-slot="input" className={cn(field, 'tw:h-11', className)} {...props} />
}

export function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return <textarea data-slot="textarea" className={cn(field, 'tw:min-h-28 tw:py-3 tw:leading-relaxed', className)} {...props} />
}

export function Label({ className, ...props }: ComponentProps<'label'>) {
  return <label data-slot="label" className={cn('tw:flex tw:items-center tw:gap-2 tw:text-[15px] tw:font-semibold tw:text-foreground', className)} {...props} />
}

/** Short help under a field: one sentence, in plain words. */
export function FieldHint({ className, ...props }: ComponentProps<'p'>) {
  return <p data-slot="field-hint" className={cn('tw:m-0 tw:text-sm tw:text-muted-foreground', className)} {...props} />
}
