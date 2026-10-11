import { getImageProps } from 'next/image'

import clair from '@/assets/brand/logo-3b-charpente-clair.png'
import sombre from '@/assets/brand/logo-3b-charpente-sombre.png'

type Props = {
  /** Displayed height in pixels; the width follows the logo's proportions. */
  height?: number
  className?: string
  title?: string
  /** On a dark ground whatever the theme (forest bands, footer in night mode…). */
  inverse?: boolean
  priority?: boolean
}

/**
 * The company's own logo (as on new.3bcharpente.fr): grey lettering for light
 * grounds, white lettering for dark ones. The browser downloads only the one
 * it shows, in WebP/AVIF at 1x and 2x.
 */
export function Logo({ height = 60, className, title = '3B Charpente', inverse, priority }: Props) {
  const width = Math.round((height * clair.width) / clair.height)
  const common = { alt: title, width, height, priority, quality: 82 }
  const dark = getImageProps({ ...common, src: sombre }).props
  // getImageProps already gives the optimised srcSet: a plain <img> is the documented pattern here.
  // eslint-disable-next-line @next/next/no-img-element
  if (inverse) return <img {...dark} alt={title} className={className} />
  const light = getImageProps({ ...common, src: clair }).props
  return (
    <picture className={className}>
      <source media="(prefers-color-scheme: dark)" srcSet={dark.srcSet} />
      <img {...light} alt={title} />
    </picture>
  )
}
