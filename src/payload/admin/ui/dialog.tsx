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
      <DialogPrimitive.Overlay className="tw:fixed tw:inset-0 tw:z-[1000] tw:bg-[#0f1f10]/50 tw:backdrop-blur-[2px]" />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'tw:fixed tw:top-1/2 tw:left-1/2 tw:z-[1001] tw:grid tw:w-[calc(100%-2rem)] tw:max-w-lg tw:-translate-x-1/2 tw:-translate-y-1/2 tw:gap-4 tw:rounded-2xl tw:border tw:border-border tw:bg-card tw:p-6 tw:text-foreground tw:shadow-md tw:outline-none',
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="tw:absolute tw:top-4 tw:right-4 tw:grid tw:size-9 tw:cursor-pointer tw:place-items-center tw:rounded-lg tw:border-0 tw:bg-transparent tw:text-muted-foreground tw:hover:bg-muted tw:hover:text-foreground">
          <XIcon className="tw:size-5" />
          <span className="tw:sr-only">Fermer</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

export function DialogTitle({ className, ...props }: ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title className={cn('tw:m-0 tw:pr-10 tw:font-heading tw:text-xl tw:font-bold', className)} {...props} />
}

export function DialogDescription({ className, ...props }: ComponentProps<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description className={cn('tw:m-0 tw:text-[15px] tw:leading-relaxed tw:text-muted-foreground', className)} {...props} />
}

export function DialogFooter({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('tw:mt-2 tw:flex tw:flex-col-reverse tw:gap-2 tw:sm:flex-row tw:sm:justify-end', className)} {...props} />
}
