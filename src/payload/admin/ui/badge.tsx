import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { cn } from './utils'

/** Status words, never colour alone: « Nouvelle », « Traitée », « Publié », « Brouillon »… */
export const badgeVariants = cva(
  'tw:inline-flex tw:w-fit tw:shrink-0 tw:items-center tw:gap-1.5 tw:whitespace-nowrap tw:rounded-full tw:border tw:border-transparent tw:px-2.5 tw:py-0.5 tw:min-h-[26px] tw:font-sans tw:text-sm tw:font-semibold tw:leading-[1.25] tw:[&_svg]:size-3.5',
  {
    variants: {
      variant: {
        new: 'tw:bg-sage tw:text-on-sage',
        done: 'tw:border-line tw:bg-surface tw:text-stone-text',
        live: "tw:bg-sage-soft tw:text-ink tw:before:size-2 tw:before:rounded-full tw:before:bg-leaf tw:before:content-['']",
        draft: "tw:border-line-strong tw:text-ink tw:before:box-border tw:before:size-2 tw:before:rounded-full tw:before:border-[1.5px] tw:before:border-solid tw:before:border-stone tw:before:content-['']",
        tag: 'tw:border-line tw:bg-surface tw:font-medium tw:text-ink',
        important: 'tw:bg-[color-mix(in_srgb,var(--c-error)_10%,var(--c-card))] tw:text-error',
        count: 'tw:min-w-[26px] tw:justify-center tw:px-2 tw:bg-sage tw:text-on-sage tw:font-bold tw:leading-none',
      },
    },
    defaultVariants: { variant: 'new' },
  },
)

export function Badge({ className, variant, ...props }: ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}
