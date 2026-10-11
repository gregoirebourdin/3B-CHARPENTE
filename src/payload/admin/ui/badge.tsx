import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { cn } from './utils'

export const badgeVariants = cva(
  'tw:inline-flex tw:w-fit tw:shrink-0 tw:items-center tw:gap-1.5 tw:whitespace-nowrap tw:rounded-full tw:border tw:border-transparent tw:px-2.5 tw:py-1 tw:text-[13px] tw:font-semibold tw:leading-none tw:[&_svg]:size-3.5',
  {
    variants: {
      variant: {
        default: 'tw:bg-sage tw:text-[#102311]',
        secondary: 'tw:bg-muted tw:text-muted-foreground',
        outline: 'tw:border-input tw:text-foreground',
        success: 'tw:bg-success-soft tw:text-foreground',
        warning: 'tw:bg-warning-soft tw:text-warning',
        destructive: 'tw:bg-destructive/12 tw:text-destructive',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export function Badge({ className, variant, ...props }: ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}
