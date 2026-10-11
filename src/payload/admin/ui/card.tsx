import type { ComponentProps } from 'react'

import { cn } from './utils'

/** White card with a hairline, no shadow: header, body, footer. */
export function Card({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card" className={cn('tw:flex tw:min-w-0 tw:flex-col tw:rounded-md tw:border tw:border-line tw:bg-card tw:text-ink', className)} {...props} />
}

export function CardHeader({ className, plain = false, ...props }: ComponentProps<'div'> & { plain?: boolean }) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-x-4 tw:gap-y-3 tw:px-6 tw:py-5 tw:max-desk:p-4',
        plain ? 'tw:pb-1' : 'tw:border-b tw:border-line',
        className,
      )}
      {...props}
    />
  )
}

export function CardTitle({ className, ...props }: ComponentProps<'h2'>) {
  return <h2 data-slot="card-title" className={cn('tw:m-0 tw:font-heading tw:text-xl tw:font-semibold tw:leading-[1.25] tw:tracking-[-0.01em] tw:max-desk:text-lg', className)} {...props} />
}

export function CardDescription({ className, ...props }: ComponentProps<'p'>) {
  return <p data-slot="card-description" className={cn('tw:m-0 tw:text-sm tw:text-stone-text', className)} {...props} />
}

export function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('tw:p-6 tw:max-desk:p-4', className)} {...props} />
}

export function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'tw:mt-auto tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3 tw:rounded-b-md tw:border-t tw:border-line tw:bg-surface tw:px-6 tw:py-4 tw:max-desk:px-4 tw:max-desk:py-3.5',
        className,
      )}
      {...props}
    />
  )
}
