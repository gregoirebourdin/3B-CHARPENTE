import type { ComponentProps } from 'react'

import { cn } from './utils'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="skeleton" className={cn('tw:animate-pulse tw:rounded-lg tw:bg-muted', className)} {...props} />
}
