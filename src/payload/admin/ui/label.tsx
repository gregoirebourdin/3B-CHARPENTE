'use client'

import { Label as LabelPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

import { cn } from './utils'

/* shadcn/ui Label (Radix Label), unchanged in structure and API; 3B Charpente classes. */
function Label({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'tw:flex tw:select-none tw:flex-wrap tw:items-baseline tw:gap-x-1.5 tw:text-base tw:font-semibold tw:leading-[1.35] tw:text-ink',
        'tw:group-data-[disabled=true]:pointer-events-none tw:group-data-[disabled=true]:opacity-50 tw:peer-disabled:cursor-not-allowed tw:peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Label }
