'use client'

import { useConfig } from '@payloadcms/ui'
import { useEffect, useState } from 'react'

export type MediaDoc = {
  id: number
  alt?: string | null
  caption?: string | null
  filename?: string | null
  url?: string | null
  width?: number | null
  height?: number | null
  filesize?: number | null
  kind?: string | null
  sizes?: { thumbnail?: { url?: string | null } | null } | null
}

/** Small image for a card, the master file for the full-size viewer. */
export const thumbOf = (doc: MediaDoc | undefined) => doc?.sizes?.thumbnail?.url || doc?.url || ''
export const fullOf = (doc: MediaDoc | undefined) => doc?.url || doc?.sizes?.thumbnail?.url || ''

const cache = new Map<string, MediaDoc>()
const listeners = new Set<() => void>()

/** Forget a photo (after its description was edited) so every preview reloads it. */
export function invalidateMedia(collection: string, id: number) {
  cache.delete(`${collection}:${id}`)
  listeners.forEach((listener) => listener())
}

/**
 * The photos behind a list of IDs, loaded once per session and shared by
 * every field, row label and viewer of the page.
 */
export function useMedia(collection: string, ids: number[]): Record<number, MediaDoc | undefined> {
  const { config } = useConfig()
  const api = `${config.serverURL ?? ''}${config.routes.api}`
  const [, setTick] = useState(0)
  const key = ids.join(',')

  useEffect(() => {
    const rerender = () => setTick((tick) => tick + 1)
    listeners.add(rerender)
    return () => {
      listeners.delete(rerender)
    }
  }, [])

  useEffect(() => {
    const missing = ids.filter((id) => !cache.has(`${collection}:${id}`))
    if (!missing.length) return
    const params = new URLSearchParams({
      depth: '0',
      limit: String(missing.length),
      pagination: 'false',
    })
    missing.forEach((id, index) => params.append(`where[id][in][${index}]`, String(id)))
    let cancelled = false
    fetch(`${api}/${collection}?${params}`, { credentials: 'include' })
      .then((response) => (response.ok ? response.json() : { docs: [] }))
      .then(({ docs }: { docs: MediaDoc[] }) => {
        if (cancelled) return
        docs.forEach((doc) => cache.set(`${collection}:${doc.id}`, doc))
        listeners.forEach((listener) => listener())
      })
      .catch(() => undefined)
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, collection, key])

  return Object.fromEntries(ids.map((id) => [id, cache.get(`${collection}:${id}`)]))
}
