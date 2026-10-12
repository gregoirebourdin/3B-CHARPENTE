import fs from 'node:fs'
import path from 'node:path'

import type { Payload } from 'payload'


export type Ref = { relationTo: 'pages' | 'services' | 'projects' | 'articles'; value: number }

/** Everything the importer needs to turn slugs and photo names into database ids. */
export type SeedContext = {
  payload: Payload
  root: string
  media: Map<string, number>
  pages: Map<string, number>
  services: Map<string, number>
  projects: Map<string, number>
  articles: Map<string, number>
  communes: Map<string, number>
  faqs: Map<string, number>
  forms: Map<string, number>
  log: (message: string) => void
  /**
   * Context passed to every Payload operation: no revalidation during the import.
   * A new object on each read: Payload and its plugins write into `req.context`
   * (e.g. the storage plugin's `skipCloudStorage`), so concurrent operations must
   * never share one.
   */
  readonly opContext: { disableRevalidate: true }
}

export const nfc = (value: string) => value.normalize('NFC')

export async function createContext(payload: Payload, root: string): Promise<SeedContext> {
  return {
    payload,
    root,
    media: new Map(),
    pages: new Map(),
    services: new Map(),
    projects: new Map(),
    articles: new Map(),
    communes: new Map(),
    faqs: new Map(),
    forms: new Map(),
    log: (message) => console.log(message),
    get opContext() {
      return { disableRevalidate: true as const }
    },
  }
}

/** Resolves a public path ('/charpente-bois/', '/realisations/x/') to a document reference. */
export function resolvePath(ctx: SeedContext, rawPath: string): Ref | null {
  const clean = rawPath.split('#')[0]!.split('?')[0]!
  const segments = clean.split('/').filter(Boolean)
  if (segments.length === 0) {
    const home = ctx.pages.get('accueil')
    return home ? { relationTo: 'pages', value: home } : null
  }
  if (segments.length === 2 && segments[0] === 'realisations') {
    const id = ctx.projects.get(segments[1]!)
    return id ? { relationTo: 'projects', value: id } : null
  }
  if (segments.length === 2 && segments[0] === 'conseils') {
    const id = ctx.articles.get(segments[1]!)
    return id ? { relationTo: 'articles', value: id } : null
  }
  const page = ctx.pages.get(segments.join('/'))
  if (page) return { relationTo: 'pages', value: page }
  if (segments.length === 1) {
    const service = ctx.services.get(segments[0]!)
    if (service) return { relationTo: 'services', value: service }
  }
  return null
}

/** Index of the kit photos on disk, keyed by NFC "folder/file" (the manifest mixes NFC and NFD). */
export function photoIndex(root: string): Map<string, string> {
  const base = path.join(root, '3b-charpente-kit/photos-chantiers')
  const index = new Map<string, string>()
  for (const folder of fs.readdirSync(base)) {
    const dir = path.join(base, folder)
    if (!fs.statSync(dir).isDirectory()) continue
    for (const file of fs.readdirSync(dir)) index.set(nfc(`${folder}/${file}`), path.join(dir, file))
  }
  const mood = path.join(root, '3b-charpente-kit/reference/ambiance-maquette')
  for (const file of fs.readdirSync(mood)) index.set(`ambiance/${file}`, path.join(mood, file))
  return index
}
