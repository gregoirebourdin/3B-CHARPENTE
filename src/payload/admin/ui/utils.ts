import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const merge = extendTailwindMerge({ prefix: 'tw' })

/** shadcn/ui's `cn`, for classes written with the « tw: » prefix of the administration. */
export function cn(...inputs: ClassValue[]) {
  return merge(clsx(inputs))
}
