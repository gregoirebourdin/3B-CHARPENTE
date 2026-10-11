'use client'

import { Avatar as AvatarPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn } from './utils'

export function Avatar({ className, ...props }: ComponentProps<typeof AvatarPrimitive.Root>) {
  return <AvatarPrimitive.Root data-slot="avatar" className={cn('tw:relative tw:flex tw:size-10 tw:shrink-0 tw:overflow-hidden tw:rounded-full', className)} {...props} />
}

export function AvatarFallback({ className, ...props }: ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn('tw:flex tw:size-full tw:items-center tw:justify-center tw:rounded-full tw:bg-forest tw:text-[15px] tw:font-[650] tw:tracking-[0.02em] tw:text-on-forest', className)}
      {...props}
    />
  )
}
