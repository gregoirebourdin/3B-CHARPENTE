import type { Commune, Company } from '@/payload-types'

import styles from './AreaMap.module.css'

type Point = { lat: number; lon: number }

/** Approximate courses of the Guisane, the Durance and the Gyronde (haute Durance). */
const RIVERS: Point[][] = [
  [
    { lat: 44.995, lon: 6.46 },
    { lat: 44.976, lon: 6.508 },
    { lat: 44.95, lon: 6.566 },
    { lat: 44.937, lon: 6.586 },
    { lat: 44.898, lon: 6.64 },
  ],
  [
    { lat: 44.935, lon: 6.725 },
    { lat: 44.898, lon: 6.645 },
    { lat: 44.853, lon: 6.583 },
    { lat: 44.79, lon: 6.556 },
    { lat: 44.748, lon: 6.58 },
    { lat: 44.718, lon: 6.588 },
    { lat: 44.69, lon: 6.592 },
  ],
  [
    { lat: 44.88, lon: 6.46 },
    { lat: 44.874, lon: 6.476 },
    { lat: 44.846, lon: 6.488 },
    { lat: 44.825, lon: 6.535 },
    { lat: 44.79, lon: 6.556 },
  ],
]

const WIDTH = 420
const HEIGHT = 520
const PAD = 46

/**
 * Hand-drawn map of the communes where 3B has worked: a few kilobytes of
 * SVG, no Google Maps iframe, no cookie. Positions come from the coordinates
 * of each commune in the admin.
 */
export function AreaMap({ communes, company }: { communes: Commune[]; company: Company }) {
  const places = communes.filter((c) => c.showOnMap && typeof c.latitude === 'number' && typeof c.longitude === 'number')
  if (!places.length) return null
  const hq = company.geo?.latitude && company.geo?.longitude ? { lat: company.geo.latitude, lon: company.geo.longitude } : null

  const all: Point[] = [...places.map((c) => ({ lat: c.latitude!, lon: c.longitude! })), ...(hq ? [hq] : [])]
  const k = Math.cos((44.85 * Math.PI) / 180)
  const minX = Math.min(...all.map((p) => p.lon * k))
  const maxX = Math.max(...all.map((p) => p.lon * k))
  const minY = Math.min(...all.map((p) => -p.lat))
  const maxY = Math.max(...all.map((p) => -p.lat))
  const scale = Math.min((WIDTH - PAD * 2) / (maxX - minX || 1), (HEIGHT - PAD * 2) / (maxY - minY || 1))
  const offsetX = (WIDTH - (maxX - minX) * scale) / 2
  const offsetY = (HEIGHT - (maxY - minY) * scale) / 2
  const project = (p: Point) => ({ x: (p.lon * k - minX) * scale + offsetX, y: (-p.lat - minY) * scale + offsetY })
  const path = (points: Point[]) =>
    points
      .map((point, index) => {
        const { x, y } = project(point)
        return `${index ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
      })
      .join(' ')

  const names = places.map((c) => c.villages || c.name).join(', ')

  return (
    <figure className={styles.map}>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={`Carte des communes de nos chantiers : ${names}.`}>
        <defs>
          <pattern id="contours" width="38" height="38" patternUnits="userSpaceOnUse">
            <circle cx="19" cy="19" r="17" fill="none" className={styles.contour} />
          </pattern>
        </defs>
        <rect width={WIDTH} height={HEIGHT} rx="24" className={styles.ground} />
        <rect width={WIDTH} height={HEIGHT} rx="24" fill="url(#contours)" opacity="0.5" />
        {RIVERS.map((river, index) => (
          <path key={index} d={path(river)} className={styles.river} />
        ))}
        {places.map((commune) => {
          const { x, y } = project({ lat: commune.latitude!, lon: commune.longitude! })
          const right = x < WIDTH * 0.62
          return (
            <g key={commune.id}>
              <circle cx={x} cy={y} r="6.5" className={styles.dot} />
              <text x={right ? x + 12 : x - 12} y={y + 4.5} textAnchor={right ? 'start' : 'end'} className={styles.label}>
                {commune.villages || commune.name}
              </text>
            </g>
          )
        })}
        {hq
          ? (() => {
              const { x, y } = project(hq)
              return (
                <g>
                  <circle cx={x} cy={y} r="13" className={styles.hqHalo} />
                  <circle cx={x} cy={y} r="7.5" className={styles.hq} />
                  <text x={x + 14} y={y + 22} className={styles.hqLabel}>
                    {company.name}
                  </text>
                </g>
              )
            })()
          : null}
      </svg>
    </figure>
  )
}
