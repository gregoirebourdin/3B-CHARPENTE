import type { ComponentProps } from 'react'

import { cn } from './utils'

/*
 * shadcn/ui Input (new-york, Tailwind v4), unchanged in structure and API.
 * Only the classes carry the 3B Charpente look: 44 px high, cream-white box,
 * forest border and soft green ring on focus, grey when read-only.
 */
function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'tw:flex tw:min-h-11 tw:w-full tw:min-w-0 tw:rounded-xs tw:border tw:border-solid tw:border-line-strong tw:bg-card tw:px-3.5 tw:py-2.5 tw:font-sans tw:text-base tw:leading-[1.4] tw:text-ink tw:shadow-none',
        'tw:transition-[border-color,box-shadow] tw:duration-180 tw:ease-brand tw:outline-none',
        'tw:placeholder:text-stone-text tw:placeholder:opacity-100 tw:selection:bg-sage-soft',
        'tw:hover:border-[color-mix(in_srgb,var(--c-ink)_45%,transparent)]',
        'tw:focus-visible:border-forest tw:focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--c-accent)_24%,transparent)]',
        'tw:aria-invalid:border-error tw:disabled:pointer-events-none tw:disabled:cursor-not-allowed tw:disabled:bg-surface tw:disabled:text-stone-text',
        'tw:read-only:cursor-default tw:read-only:border-line tw:read-only:bg-surface tw:read-only:text-stone-text tw:read-only:focus-visible:border-line tw:read-only:focus-visible:shadow-none',
        'tw:file:border-0 tw:file:bg-transparent tw:file:font-semibold',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
