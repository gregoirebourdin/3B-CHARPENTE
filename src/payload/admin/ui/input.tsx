import { TriangleAlert } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'

import { cn } from './utils'

export const fieldClass = [
  'tw:block tw:w-full tw:min-w-0 tw:rounded-xs tw:border tw:border-line-strong tw:bg-card tw:px-3.5 tw:py-2.5 tw:font-sans tw:text-base tw:leading-[1.4] tw:text-ink',
  'tw:transition-[border-color,box-shadow] tw:duration-180 tw:ease-brand tw:placeholder:text-stone-text tw:placeholder:opacity-100',
  'tw:hover:border-[color-mix(in_srgb,var(--c-ink)_45%,transparent)]',
  'tw:outline-none tw:focus:border-forest tw:focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--c-accent)_24%,transparent)]',
  'tw:aria-invalid:border-error tw:disabled:cursor-not-allowed tw:disabled:bg-surface tw:disabled:text-stone-text',
].join(' ')

/** Read-only text (computed address…): flat, grey, clearly not a box to type in. Text inputs only: a button is « read-only » too in CSS. */
const readOnlyClass = 'tw:read-only:cursor-default tw:read-only:border-line tw:read-only:bg-surface tw:read-only:text-stone-text tw:read-only:shadow-none tw:read-only:focus:border-line'

export function Input({ className, type = 'text', size = 'default', ...props }: Omit<ComponentProps<'input'>, 'size'> & { size?: 'default' | 'lg' }) {
  return <input type={type} data-slot="input" className={cn(fieldClass, readOnlyClass, size === 'lg' ? 'tw:min-h-13 tw:text-[17px]' : 'tw:min-h-11', className)} {...props} />
}

export function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return <textarea data-slot="textarea" className={cn(fieldClass, readOnlyClass, 'tw:min-h-28 tw:resize-y tw:leading-relaxed', className)} {...props} />
}

/** A field with an icon at its start (e-mail, phone, pin, clock, magnifier). */
export function IconField({ icon, className, children }: { icon: ReactNode; className?: string; children: ReactNode }) {
  return (
    <div className={cn('tw:relative tw:[&>input]:pl-11', className)}>
      <span aria-hidden="true" className="tw:pointer-events-none tw:absolute tw:top-1/2 tw:left-3.5 tw:-translate-y-1/2 tw:text-stone-text tw:[&_svg]:size-5">
        {icon}
      </span>
      {children}
    </div>
  )
}

export function Label({ className, ...props }: ComponentProps<'label'>) {
  return <label data-slot="label" className={cn('tw:flex tw:flex-wrap tw:items-baseline tw:gap-x-1.5 tw:text-base tw:font-semibold tw:leading-[1.35] tw:text-ink', className)} {...props} />
}

/** « facultatif », after a label. */
export function Optional({ children = 'facultatif' }: { children?: ReactNode }) {
  return <small className="tw:text-sm tw:font-normal tw:text-stone-text">{children}</small>
}

/** Short help under a field: one sentence, in plain words. */
export function FieldHint({ className, ...props }: ComponentProps<'p'>) {
  return <p data-slot="field-hint" className={cn('tw:m-0 tw:text-sm tw:leading-[1.45] tw:text-stone-text', className)} {...props} />
}

/** Error under a field (linked to it with aria-describedby). */
export function FieldError({ className, children, ...props }: ComponentProps<'p'>) {
  return (
    <p data-slot="field-error" className={cn('tw:m-0 tw:flex tw:items-center tw:gap-1.5 tw:text-sm tw:font-semibold tw:text-error tw:[&_svg]:size-4', className)} {...props}>
      <TriangleAlert aria-hidden="true" />
      {children}
    </p>
  )
}

/** Label, field, help and error, stacked with 8 px between them. */
export function Field({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="field" className={cn('tw:grid tw:min-w-0 tw:content-start tw:gap-2', className)} {...props} />
}
