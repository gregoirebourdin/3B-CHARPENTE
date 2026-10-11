import type { SVGProps } from 'react'

import type { IconName } from '@/payload/utilities/icons'

/**
 * Line icons drawn for the site (24 × 24 grid, 1.75 stroke). The catalogue
 * offered to editors lives in src/payload/utilities/icons.ts.
 */
const PATHS: Record<IconName | UiIcon, string[]> = {
  roof: ['M3 18 12 6l9 12Z', 'M12 6v12', 'M7.5 12h9'],
  hammer: ['M4.5 19.5 12 12', 'M10 6.5 13.5 3l7 7-3.5 3.5Z', 'M12.2 8.3l3.5 3.5'],
  leaf: ['M5 19C5 10.5 11 5 20 5c0 9-5.6 15-14 15', 'M5 19l8.5-8.5'],
  layers: ['M12 3 3 8l9 5 9-5Z', 'M3 12.5l9 5 9-5', 'M3 16.5l9 5 9-5'],
  wall: ['M3 5h18v14H3Z', 'M3 9.7h18', 'M3 14.3h18', 'M8.5 5v4.7', 'M15.5 5v4.7', 'M12 9.7v4.6', 'M8.5 14.3V19', 'M15.5 14.3V19'],
  house: ['M3 11 12 4l9 7', 'M5.5 9.5V20h13V9.5', 'M10 20v-5.5h4V20'],
  arrowUp: ['M12 19V5', 'M5.5 11.5 12 5l6.5 6.5'],
  stairs: ['M3 20h5v-4.5h4.5V11H17V6.5h4'],
  balcony: ['M4 6.5h16', 'M3 11h18', 'M3 20h18', 'M5 11v9', 'M9 11v9', 'M12 11v9', 'M15 11v9', 'M19 11v9'],
  recycle: ['M20 12a8 8 0 0 1-14.3 4.9', 'M4 12a8 8 0 0 1 14.3-4.9', 'M18.6 3v4.3h-4.3', 'M5.4 21v-4.3h4.3'],
  medal: ['M12 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z', 'M8.6 12.3 6 3h4l2 4.5L14 3h4l-2.6 9.3', 'M12 14v3.5'],
  calendar: ['M4 6h16v14H4Z', 'M4 10.5h16', 'M8.5 3.5V7', 'M15.5 3.5V7'],
  tree: ['M12 3 6.5 10.5h3L5 17h14l-4.5-6.5h3Z', 'M12 17v4'],
  shield: ['M12 3 4.5 6v6c0 4.7 3.2 7.8 7.5 9 4.3-1.2 7.5-4.3 7.5-9V6Z', 'M9 12.2l2.1 2.1 4-4.2'],
  check: ['M5 12.5 9.5 17 19 7'],
  mapPin: ['M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z', 'M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
  phone: [
    'M5.2 4h3.1l1.6 4.4-2.1 1.4a11.5 11.5 0 0 0 6.4 6.4l1.4-2.1 4.4 1.6v3.1A2 2 0 0 1 18 20.8 16.8 16.8 0 0 1 3.2 6 2 2 0 0 1 5.2 4Z',
  ],
  mail: ['M3.5 6h17v12h-17Z', 'M3.8 6.6 12 12.5l8.2-5.9'],
  clock: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 7.5V12l3 2'],
  document: ['M6.5 3h7.5l4 4v14h-11.5Z', 'M14 3v4h4', 'M9.5 12h5', 'M9.5 16h5'],
  search: ['M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z', 'M20 20l-4.6-4.6'],
  users: [
    'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
    'M3.5 19.5a5.5 5.5 0 0 1 11 0',
    'M16.5 11.5a2.4 2.4 0 1 0 0-4.8',
    'M17 14.3a4.5 4.5 0 0 1 3.8 4.7',
  ],
  ruler: ['M4 20V4l16 16Z', 'M8 16v-4.2l4.2 4.2Z'],
  saw: ['M4.5 14.5 14 5l5 5-9.5 9.5Z', 'M7 17l-3 3', 'M10.5 11.5l1.5 1.5', 'M13 9l1.5 1.5'],
  truck: ['M3 6.5h11v9.5H3Z', 'M14 9.5h4l3 3v3.5h-7', 'M7 19a1.8 1.8 0 1 0 0-3.6A1.8 1.8 0 0 0 7 19Z', 'M17 19a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z'],
  sun: ['M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M12 2.5v2', 'M12 19.5v2', 'M4.6 4.6 6 6', 'M18 18l1.4 1.4', 'M2.5 12h2', 'M19.5 12h2', 'M4.6 19.4 6 18', 'M18 6l1.4-1.4'],
  snow: ['M12 3v18', 'M4.2 7.5l15.6 9', 'M19.8 7.5l-15.6 9', 'M9.5 4.5 12 6l2.5-1.5', 'M9.5 19.5 12 18l2.5 1.5'],
  window: ['M4.5 18 8 6h11.5L16 18Z', 'M6.3 12h11.5', 'M11.8 6l-1.7 12'],
  euro: ['M17.5 6.5a7 7 0 1 0 0 11', 'M4.5 10h9', 'M4.5 14h9'],
  info: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 11v6', 'M12 7.6v.1'],
  arrowRight: ['M5 12h14', 'M13 6l6 6-6 6'],
  arrowLeft: ['M19 12H5', 'M11 6l-6 6 6 6'],
  chevronDown: ['M6 9l6 6 6-6'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['M6 6l12 12', 'M18 6 6 18'],
  plus: ['M12 5v14', 'M5 12h14'],
  minus: ['M5 12h14'],
  external: ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v6H4V6h6'],
  expand: ['M4 9V4h5', 'M20 9V4h-5', 'M4 15v5h5', 'M20 15v5h-5'],
}

type UiIcon =
  | 'arrowRight'
  | 'arrowLeft'
  | 'chevronDown'
  | 'menu'
  | 'close'
  | 'plus'
  | 'minus'
  | 'external'
  | 'expand'

export type AnyIconName = IconName | UiIcon

type Props = Omit<SVGProps<SVGSVGElement>, "name"> & { name?: AnyIconName | string | null; size?: number; title?: string }

export function Icon({ name, size = 24, title, ...rest }: Props) {
  const paths = PATHS[(name ?? 'check') as AnyIconName] ?? PATHS.check
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
