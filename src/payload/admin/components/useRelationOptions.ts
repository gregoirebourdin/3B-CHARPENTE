'use client'

import { useConfig } from '@payloadcms/ui'
import { useEffect, useMemo, useState } from 'react'

export type RelationOption = {
  relationTo: string
  id: number | string
  title: string
  /** End of the address (« charpentier-briancon »), to tell two similar titles apart. */
  slug?: string
  draft: boolean
}

/** `where` → `where[kind][equals]=ambiance&…`, the bracket syntax Payload's REST API reads. */
const toQueryString = (value: unknown, prefix: string): string[] =>
  value && typeof value === 'object'
    ? Object.entries(value).flatMap(([key, item]) => toQueryString(item, `${prefix}[${key}]`))
    : [`${encodeURIComponent(prefix)}=${encodeURIComponent(String(value))}`]

const cache = new Map<string, Promise<RelationOption[]>>()
const listeners = new Set<() => void>()

/** After a document was created or renamed in a drawer: reload the lists of that collection. */
export function invalidateRelationOptions(collection: string) {
  for (const key of cache.keys()) if (key.startsWith(`${collection}|`)) cache.delete(key)
  listeners.forEach((listener) => listener())
}

/**
 * Every document a relationship field can point to, for each of its
 * collections (pages, prestations, communes… a few dozen each): one request
 * per collection, cached, respecting the field's filter.
 */
export function useRelationOptions(collections: string[], filters: Record<string, unknown> | undefined) {
  const { config, getEntityConfig } = useConfig()
  const [version, setVersion] = useState(0)
  const [state, setState] = useState<{ key: string; options: RelationOption[]; failed: boolean } | null>(null)

  // Keys, not the arrays themselves: the field hands new arrays and objects on every render.
  const collectionsKey = collections.join(',')
  const filtersKey = JSON.stringify(filters ?? {})
  const requests = useMemo(
    () => {
      const parsed = JSON.parse(filtersKey) as Record<string, unknown>
      return collectionsKey
        .split(',')
        .filter((slug) => slug && parsed[slug] !== false)
        .map((slug) => {
          const filter = parsed[slug]
          const useAsTitle = getEntityConfig({ collectionSlug: slug })?.admin?.useAsTitle ?? 'id'
          const where = filter && typeof filter === 'object' ? toQueryString(filter, 'where') : []
          const params = [...where, 'depth=0', 'limit=0', 'pagination=false', `sort=${useAsTitle}`, `select[${useAsTitle}]=true`, 'select[slug]=true', 'select[_status]=true']
          return { slug, useAsTitle, key: `${slug}|${params.join('&')}`, url: `${config.serverURL}${config.routes.api}/${slug}?${params.join('&')}` }
        })
    },
    [collectionsKey, filtersKey, getEntityConfig, config.serverURL, config.routes.api],
  )
  const key = requests.map((request) => request.key).join('||')

  useEffect(() => {
    const listener = () => setVersion((value) => value + 1)
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }, [])

  useEffect(() => {
    let alive = true
    Promise.all(
      requests.map((request) => {
        let promise = cache.get(request.key)
        if (!promise) {
          promise = fetch(request.url, { credentials: 'include' })
            .then((response) => (response.ok ? response.json() : Promise.reject(new Error(String(response.status)))))
            .then((result: { docs: Record<string, unknown>[] }) =>
              result.docs.map((doc) => ({
                relationTo: request.slug,
                id: doc.id as number | string,
                title: String(doc[request.useAsTitle] ?? '') || `Sans titre (n° ${String(doc.id)})`,
                slug: typeof doc.slug === 'string' ? doc.slug : undefined,
                draft: doc._status === 'draft',
              })),
            )
          promise.catch(() => cache.delete(request.key))
          cache.set(request.key, promise)
        }
        return promise
      }),
    )
      .then((lists) => alive && setState({ key, options: lists.flat(), failed: false }))
      .catch(() => alive && setState({ key, options: [], failed: true }))
    return () => {
      alive = false
    }
  }, [key, requests, version])

  const current = state?.key === key ? state : null
  return { options: current?.options ?? [], loading: !current, failed: Boolean(current?.failed) }
}
