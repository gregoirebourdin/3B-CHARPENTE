'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

import { template } from '@/lib/links'

import styles from './ProjectsExplorer.module.css'

export type ExplorerFilters = {
  serviceLabel: string
  communeLabel: string
  services: { key: string; label: string; count: number }[]
  communeGroups: { label: string; options: { key: string; label: string; count: number }[] }[]
  total: number
  texts: { all: string; allCommunes: string; count: string; countOne: string; reset: string }
}

/** Reads #escaliers, #briancon, #escaliers&briancon or ?prestation=…&commune=… */
function readUrl(filters: ExplorerFilters): { service: string; commune: string } {
  const serviceKeys = new Set(filters.services.map((s) => s.key))
  const communeKeys = new Set(filters.communeGroups.flatMap((g) => g.options.map((o) => o.key)))
  const result = { service: '', commune: '' }
  const params = new URLSearchParams(window.location.search)
  const tokens = [
    ...decodeURIComponent(window.location.hash.slice(1)).split(/[&,+]/),
    params.get('prestation') ?? '',
    params.get('commune') ?? '',
  ].filter(Boolean)
  for (const token of tokens) {
    if (serviceKeys.has(token)) result.service = token
    else if (communeKeys.has(token)) result.commune = token
  }
  return result
}

/**
 * Filter bar of the Réalisations page. The cards are rendered on the server
 * (children); this component only hides the ones that do not match and keeps
 * the choice in the address (#escaliers&briancon) so it can be shared.
 */
export function ExplorerShell({ filters, children }: { filters: ExplorerFilters; children: ReactNode }) {
  const [service, setService] = useState('')
  const [commune, setCommune] = useState('')
  const [count, setCount] = useState(filters.total)
  const root = useRef<HTMLDivElement>(null)
  const ready = useRef(false)

  useEffect(() => {
    const initial = readUrl(filters)
    setService(initial.service)
    setCommune(initial.commune)
    ready.current = true
    const onHash = () => {
      const next = readUrl(filters)
      setService(next.service)
      setCommune(next.commune)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [filters])

  const apply = useCallback(() => {
    const element = root.current
    if (!element) return
    const filtering = Boolean(service || commune)
    element.toggleAttribute('data-filtering', filtering)
    let visible = 0
    element.querySelectorAll<HTMLElement>('[data-services]').forEach((card) => {
      const matchService = !service || (card.dataset.services ?? '').split(' ').includes(service)
      const matchCommune = !commune || card.dataset.commune === commune
      const show = matchService && matchCommune
      card.hidden = !show
      if (show) visible += 1
    })
    const empty = element.querySelector<HTMLElement>('[data-explorer-empty]')
    if (empty) empty.hidden = visible > 0
    setCount(visible)
    if (ready.current) {
      const hash = [service, commune].filter(Boolean).join('&')
      const url = `${window.location.pathname}${hash ? `#${hash}` : ''}`
      window.history.replaceState(null, '', url)
    }
  }, [service, commune])

  useEffect(apply, [apply])

  const countText = count === 1 ? filters.texts.countOne : template(filters.texts.count, { n: count })

  return (
    <div ref={root} className={styles.shell}>
      <div className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <div className={styles.filterGroup} role="group" aria-label={filters.serviceLabel}>
            <span className={styles.filterLabel}>{filters.serviceLabel}</span>
            <div className={styles.pills}>
              <button type="button" className={styles.pill} aria-pressed={!service} onClick={() => setService('')}>
                {filters.texts.all} <span>({filters.total})</span>
              </button>
              {filters.services.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={styles.pill}
                  aria-pressed={service === item.key}
                  onClick={() => setService(service === item.key ? '' : item.key)}
                >
                  {item.label} <span>({item.count})</span>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.filterRow}>
            <label className={styles.select}>
              <span className={styles.filterLabel}>{filters.communeLabel}</span>
              <select value={commune} onChange={(event) => setCommune(event.target.value)}>
                <option value="">{filters.texts.allCommunes}</option>
                {filters.communeGroups.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.options.map((option) => (
                      <option key={option.key} value={option.key}>
                        {option.label} ({option.count})
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </label>
            <p className={styles.count} aria-live="polite">
              {countText}
            </p>
            {service || commune ? (
              <button
                type="button"
                className={styles.reset}
                onClick={() => {
                  setService('')
                  setCommune('')
                }}
              >
                {filters.texts.reset}
              </button>
            ) : null}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
