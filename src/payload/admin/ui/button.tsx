import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn } from './utils'

/** Big, readable buttons: 44 px minimum, one clear primary action per screen. */
export const buttonVariants = cva(
  'tw:inline-flex tw:shrink-0 tw:items-center tw:justify-center tw:gap-2 tw:whitespace-nowrap tw:rounded-lg tw:border tw:border-transparent tw:font-sans tw:text-[15px] tw:font-semibold tw:leading-none tw:no-underline tw:transition-[color,background-color,border-color,box-shadow] tw:duration-150 tw:outline-none tw:cursor-pointer tw:focus-visible:ring-[3px] tw:focus-visible:ring-ring/40 tw:focus-visible:border-ring tw:disabled:pointer-events-none tw:disabled:opacity-50 tw:[&_svg]:pointer-events-none tw:[&_svg]:shrink-0 tw:[&_svg:not([class*=size-])]:size-[18px]',
  {
    variants: {
      variant: {
        default: 'tw:bg-primary tw:text-primary-foreground tw:hover:bg-primary-hover',
        outline: 'tw:border-input tw:bg-card tw:text-foreground tw:hover:bg-muted tw:hover:border-foreground/30',
        secondary: 'tw:bg-secondary tw:text-secondary-foreground tw:hover:bg-accent',
        ghost: 'tw:bg-transparent tw:text-foreground tw:hover:bg-muted',
        destructive: 'tw:bg-destructive tw:text-destructive-foreground tw:hover:bg-destructive/90',
        link: 'tw:h-auto tw:px-0 tw:text-primary tw:underline-offset-4 tw:hover:underline tw:dark:text-sage',
      },
      size: {
        default: 'tw:h-11 tw:px-4',
        sm: 'tw:h-9 tw:px-3 tw:text-sm',
        lg: 'tw:h-12 tw:px-5 tw:text-base',
        icon: 'tw:size-11',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'button'
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
