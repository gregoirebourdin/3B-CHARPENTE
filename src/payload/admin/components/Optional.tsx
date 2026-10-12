import type { ReactNode } from 'react'

/** « facultatif », after a label (not a shadcn component: a word of the 3B Charpente admin). */
export function Optional({ children = 'facultatif' }: { children?: ReactNode }) {
  return <small className="tw:text-sm tw:font-normal tw:text-stone-text">{children}</small>
}
