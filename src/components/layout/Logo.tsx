import type { CSSProperties } from 'react'

type Props = { variant?: 'horizontal' | 'vertical' | 'mark'; className?: string; title?: string; inverse?: boolean }

const VIEWBOX = { horizontal: '0 0 3968 648', vertical: '0 0 820 856', mark: '4 22 807 467' }

/**
 * Brand logo, redrawn in SVG from the mockup PNG (public/brand/logo-sprite.svg).
 * Colours come from CSS variables, so it follows the night theme.
 */
export function Logo({ variant = 'horizontal', className, title = '3B Charpente', inverse }: Props) {
  const style = inverse ? ({ '--logo-mark': '#a3d2a3', '--logo-text': '#ffffff' } as CSSProperties) : undefined
  return (
    <svg viewBox={VIEWBOX[variant]} className={className} role="img" aria-label={title} style={style}>
      <use href={`/brand/logo-sprite.svg#${variant}`} />
    </svg>
  )
}
