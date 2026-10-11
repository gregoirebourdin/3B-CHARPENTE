import Link from 'next/link'

import { Icon } from '@/components/ui/Icon'
import { Media } from '@/components/ui/Media'
import type { Commune, Company, Media as MediaDoc } from '@/payload-types'

import { RIVERS, type Point } from './AreaMap'
import styles from './SectorMap.module.css'

export type SectorMapCard = {
  href: string
  title: string
  place?: string | null
  image: MediaDoc | number | null | undefined
  communeId?: number | null
}

type Props = {
  communes: Commune[]
  /** Communes of the sector (or of the chantier): drawn large, inside a dashed zone. */
  focus: number[]
  company: Company
  /** Up to two real chantiers, pinned on the right like postcards. */
  cards?: SectorMapCard[]
  legend: { here: string; other: string; scale: string }
  /** Accessible description of the map. */
  label: string
  /** Smaller map (a chantier's page): no postcards, no zone label. */
  compact?: boolean
}

const W = 500
const H = 600

/**
 * The map of a sector: the communes of our chantiers on the relief of the
 * haute Durance, the sector's own communes in a dashed zone, and two of its
 * chantiers pinned like postcards. Drawn from the coordinates of the
 * « Communes » collection; not to scale, no third-party map.
 */
export function SectorMap({ communes, focus, company, cards = [], legend, label, compact }: Props) {
  const places = communes.filter(
    (c) => c.showOnMap && typeof c.latitude === 'number' && typeof c.longitude === 'number',
  )
  if (!places.length) return null
  const hq =
    company.geo?.latitude && company.geo?.longitude
      ? { lat: company.geo.latitude, lon: company.geo.longitude }
      : null
  const withCards = cards.length > 0

  // Projection: the postcards keep the right-hand side free.
  const k = Math.cos((44.85 * Math.PI) / 180)
  const all: Point[] = [
    ...places.map((c) => ({ lat: c.latitude!, lon: c.longitude! })),
    ...(hq ? [hq] : []),
  ]
  const box = { left: 70, right: withCards ? W * 0.56 : W - 70, top: 70, bottom: H - 70 }
  const minX = Math.min(...all.map((p) => p.lon * k))
  const maxX = Math.max(...all.map((p) => p.lon * k))
  const minY = Math.min(...all.map((p) => -p.lat))
  const maxY = Math.max(...all.map((p) => -p.lat))
  const scale = Math.min(
    (box.right - box.left) / (maxX - minX || 1),
    (box.bottom - box.top) / (maxY - minY || 1),
  )
  const offsetX = box.left + (box.right - box.left - (maxX - minX) * scale) / 2
  const offsetY = box.top + (box.bottom - box.top - (maxY - minY) * scale) / 2
  const project = (p: Point) => ({
    x: (p.lon * k - minX) * scale + offsetX,
    y: (-p.lat - minY) * scale + offsetY,
  })
  const path = (points: Point[]) =>
    points
      .map((point, index) => {
        const { x, y } = project(point)
        return `${index ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
      })
      .join(' ')

  const isHome = (c: Commune) =>
    !!hq && Math.hypot(c.latitude! - hq.lat, (c.longitude! - hq.lon) * k) < 0.02
  const home = places.find(isHome)
  const focused = places.filter((c) => focus.includes(c.id))
  const pins = places
    .filter((c) => !isHome(c))
    .map((c) => ({
      commune: c,
      ...project({ lat: c.latitude!, lon: c.longitude! }),
      main: focus.includes(c.id),
    }))
  const base = hq ? project(hq) : null

  // The sector's zone: a soft ellipse around its communes.
  const zone = (() => {
    const pts = focused.map((c) => project({ lat: c.latitude!, lon: c.longitude! }))
    if (!pts.length) return null
    const cx = pts.reduce((sum, p) => sum + p.x, 0) / pts.length
    const cy = pts.reduce((sum, p) => sum + p.y, 0) / pts.length
    const rx = Math.max(52, ...pts.map((p) => Math.abs(p.x - cx) + 40))
    const ry = Math.max(46, ...pts.map((p) => Math.abs(p.y - cy) + 36))
    return { cx, cy, rx, ry }
  })()

  // Postcards: top right and lower right, with a dotted leader to their commune.
  const slots = [
    { x: 0.6, y: 0.06, r: 2 },
    { x: 0.6, y: 0.52, r: -1.5 },
  ]
  const placed = cards.slice(0, 2).map((card, index) => {
    const slot = slots[index]!
    const target =
      pins.find((pin) => pin.commune.id === card.communeId) ??
      (base ? { x: base.x, y: base.y } : null)
    return { card, slot, target }
  })

  const pct = (value: number, total: number) => `${((value / total) * 100).toFixed(2)}%`

  return (
    <figure className={`${styles.wrap} ${compact ? styles.compact : ''}`}>
      <div className={styles.map}>
        <div className={styles.canvas}>
          <div className={styles.topo} aria-hidden="true" />
          <svg
            className={styles.svg}
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="none"
            role="img"
            aria-label={label}
          >
            {zone ? (
              <ellipse
                cx={zone.cx}
                cy={zone.cy}
                rx={zone.rx}
                ry={zone.ry}
                className={styles.zone}
              />
            ) : null}
            {RIVERS.map((river, index) => (
              <path
                key={index}
                d={path(river)}
                className={index === 1 ? `${styles.river} ${styles.riverMain}` : styles.river}
              />
            ))}
            {placed.map(({ slot, target }, index) =>
              target ? (
                <path
                  key={`leader-${index}`}
                  d={`M${target.x.toFixed(1)} ${target.y.toFixed(1)} L${(slot.x * W).toFixed(1)} ${(slot.y * H + 80).toFixed(1)}`}
                  className={styles.leader}
                />
              ) : null,
            )}
            <g className={styles.north} transform="translate(30 34)">
              <path d="M0 -14 L6 4 L0 0 L-6 4 Z" />
              <text y="20" textAnchor="middle">
                N
              </text>
            </g>
          </svg>
          <ul className={styles.pins} aria-hidden="true">
            {pins.map((pin) => {
              const left = pin.x > (withCards ? W * 0.36 : W * 0.6)
              return (
                <li
                  key={pin.commune.id}
                  className={[
                    styles.pin,
                    pin.main ? styles.main : styles.cited,
                    left ? styles.left : undefined,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ left: pct(pin.x, W), top: pct(pin.y, H) }}
                >
                  <span className={styles.dot} />
                  <span className={styles.pinLabel}>
                    {pin.commune.villages || pin.commune.name}
                  </span>
                </li>
              )
            })}
            {base ? (
              <li
                className={`${styles.pin} ${styles.base} ${styles.left}`}
                style={{ left: pct(base.x, W), top: pct(base.y, H) }}
              >
                <span className={styles.dot}>
                  <Icon name="house" size={16} />
                </span>
                <span className={styles.pinLabel}>
                  <strong>{company.name}</strong>
                  {home ? <small>{home.villages || home.name}</small> : null}
                </span>
              </li>
            ) : null}
          </ul>
        </div>
        {placed.length ? (
          <ul className={styles.cards}>
            {placed.map(({ card, slot }) => (
              <li
                key={card.href}
                className={styles.card}
                style={{
                  left: pct(slot.x * W, W),
                  top: pct(slot.y * H, H),
                  ['--r' as string]: `${slot.r}deg`,
                }}
              >
                <Link href={card.href} className={styles.cardLink}>
                  <span className={styles.cardPhoto}>
                    <Media
                      media={card.image}
                      fill
                      sizes="(min-width: 1100px) 210px, 40vw"
                      priority={false}
                    />
                  </span>
                  <span className={styles.cardText}>
                    <strong>{card.title}</strong>
                    {card.place ? <span>{card.place}</span> : null}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <figcaption>
        <ul className={styles.legend}>
          {focused.length ? (
            <li>
              <i className={styles.lgMain} aria-hidden="true" />
              {legend.here}
            </li>
          ) : null}
          {pins.some((pin) => !pin.main) ? (
            <li>
              <i className={styles.lgCited} aria-hidden="true" />
              {legend.other}
            </li>
          ) : null}
          {base ? (
            <li>
              <i className={styles.lgBase} aria-hidden="true" />
              {company.name}
            </li>
          ) : null}
          <li className={styles.lgScale}>{legend.scale}</li>
        </ul>
      </figcaption>
    </figure>
  )
}
