import type { ComponentProps } from 'react'

import { cn } from './utils'

/* shadcn/ui Textarea, unchanged in structure and API; 3B Charpente classes. */
function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'tw:flex tw:min-h-28 tw:w-full tw:min-w-0 tw:resize-y tw:rounded-xs tw:border tw:border-solid tw:border-line-strong tw:bg-card tw:px-3.5 tw:py-2.5 tw:font-sans tw:text-base tw:leading-relaxed tw:text-ink tw:shadow-none',
        'tw:transition-[border-color,box-shadow] tw:duration-180 tw:ease-brand tw:outline-none',
        'tw:placeholder:text-stone-text tw:placeholder:opacity-100',
        'tw:hover:border-[color-mix(in_srgb,var(--c-ink)_45%,transparent)]',
        'tw:focus-visible:border-forest tw:focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--c-accent)_24%,transparent)]',
        'tw:aria-invalid:border-error tw:disabled:cursor-not-allowed tw:disabled:bg-surface tw:disabled:text-stone-text',
        'tw:read-only:cursor-default tw:read-only:border-line tw:read-only:bg-surface tw:read-only:text-stone-text',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
