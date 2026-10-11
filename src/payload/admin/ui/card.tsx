import type { ComponentProps } from 'react'

import { cn } from './utils'

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn('tw:flex tw:flex-col tw:gap-5 tw:rounded-xl tw:border tw:border-border tw:bg-card tw:py-6 tw:text-card-foreground tw:shadow-xs', className)}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'tw:grid tw:auto-rows-min tw:grid-rows-[auto_auto] tw:items-start tw:gap-1.5 tw:px-6 tw:has-data-[slot=card-action]:grid-cols-[1fr_auto]',
        className,
      )}
      {...props}
    />
  )
}

export function CardTitle({ className, ...props }: ComponentProps<'h2'>) {
  return <h2 data-slot="card-title" className={cn('tw:m-0 tw:font-heading tw:text-lg tw:font-semibold tw:leading-tight tw:tracking-tight', className)} {...props} />
}

export function CardDescription({ className, ...props }: ComponentProps<'p'>) {
  return <p data-slot="card-description" className={cn('tw:m-0 tw:text-sm tw:leading-relaxed tw:text-muted-foreground', className)} {...props} />
}

export function CardAction({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-action" className={cn('tw:col-start-2 tw:row-span-2 tw:row-start-1 tw:self-start tw:justify-self-end', className)} {...props} />
}

export function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('tw:px-6', className)} {...props} />
}

export function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-footer" className={cn('tw:flex tw:items-center tw:gap-3 tw:px-6', className)} {...props} />
}
