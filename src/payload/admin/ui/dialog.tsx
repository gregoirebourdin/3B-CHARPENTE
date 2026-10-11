'use client'

import { XIcon } from 'lucide-react'
import { Dialog as DialogPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn } from './utils'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close

export function DialogContent({ className, children, ...props }: ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="tw:fixed tw:inset-0 tw:z-[1000] tw:bg-night/50" />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'tw:fixed tw:top-1/2 tw:left-1/2 tw:z-[1001] tw:grid tw:w-[calc(100%-32px)] tw:max-w-[480px] tw:-translate-x-1/2 tw:-translate-y-1/2 tw:gap-4 tw:rounded-md tw:border tw:border-line tw:bg-card tw:p-6 tw:font-sans tw:text-ink tw:shadow-lg tw:outline-none',
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="tw:absolute tw:top-3 tw:right-3 tw:grid tw:size-11 tw:cursor-pointer tw:place-items-center tw:rounded-xs tw:border-0 tw:bg-transparent tw:text-stone-text tw:hover:bg-surface tw:hover:text-ink">
          <XIcon className="tw:size-5" />
          <span className="tw:sr-only">Fermer</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

export function DialogTitle({ className, ...props }: ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title className={cn('tw:m-0 tw:pr-10 tw:font-heading tw:text-[22px] tw:font-semibold tw:leading-[1.25]', className)} {...props} />
}

export function DialogDescription({ className, ...props }: ComponentProps<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description className={cn('tw:m-0 tw:text-base tw:leading-normal tw:text-stone-text', className)} {...props} />
}

export function DialogFooter({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('tw:mt-2 tw:flex tw:flex-col-reverse tw:gap-3 tw:sm:flex-row tw:sm:justify-end', className)} {...props} />
}
