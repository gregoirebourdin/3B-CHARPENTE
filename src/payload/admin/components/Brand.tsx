import type { CSSProperties } from 'react'

const themed = {
  '--logo-mark': 'var(--theme-success-500, #254227)',
  '--logo-text': 'var(--theme-text, #102311)',
} as CSSProperties

/** Login screen logo. Colours follow the admin theme (light or dark). */
export function Logo() {
  return (
    <svg viewBox="0 0 3968 648" width="260" height="43" role="img" aria-label="3B Charpente" style={themed}>
      <use href="/brand/logo-sprite.svg#horizontal" />
    </svg>
  )
}

/** Small mark at the top of the sidebar. */
export function Icon() {
  return (
    <svg viewBox="0 0 807 467" width="34" height="20" role="img" aria-label="3B Charpente" style={themed}>
      <use href="/brand/logo-sprite.svg#mark" />
    </svg>
  )
}
