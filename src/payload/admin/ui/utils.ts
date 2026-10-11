import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const merge = extendTailwindMerge({ prefix: 'tw' })

/** shadcn/ui's `cn`, for classes written with the « tw: » prefix of the administration. */
export function cn(...inputs: ClassValue[]) {
  return merge(clsx(inputs))
}

/** Focus ring of the kit: 2 px in the accent green, offset by 3 px. */
export const focusRing =
  'tw:outline-none tw:focus-visible:outline-solid tw:focus-visible:outline-2 tw:focus-visible:outline-offset-3 tw:focus-visible:outline-leaf'
