import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'node:crypto'

import type { CollectionSlug, GlobalSlug, Payload } from 'payload'

/**
 * Portable copy of the whole content: every document of every collection
 * (published state and drafts) and every global, as JSON. Photos themselves
 * stay in Vercel Blob; the copy keeps their addresses.
 *
 * Neon's point-in-time restore remains the first recovery tool; this copy is
 * the one that survives anything (account change, provider change…).
 */

/** In restore order: what is referenced comes before what references it. */
export const BACKUP_COLLECTIONS = [
  'media',
  'communes',
  'faqs',
  'team',
  'reviews',
  'forms',
  'pages',
  'services',
  'projects',
  'articles',
  'redirects',
  'validation-points',
  'form-submissions',
] as const satisfies readonly CollectionSlug[]

export const BACKUP_GLOBALS = [
  'company',
  'header',
  'footer',
  'proofs',
  'site-texts',
  'seo-settings',
  'analytics',
] as const satisfies readonly GlobalSlug[]

export type Backup = {
  format: '3b-charpente-backup'
  version: 1
  createdAt: string
  collections: Record<string, unknown[]>
  globals: Record<string, unknown>
}

export async function exportContent(payload: Payload): Promise<Backup> {
  const collections: Backup['collections'] = {}
  for (const slug of BACKUP_COLLECTIONS) {
    const { docs } = await payload.find({
      collection: slug,
      depth: 0,
      pagination: false,
      draft: true,
      overrideAccess: true,
    })
    collections[slug] = docs
  }
  const globals: Backup['globals'] = {}
  for (const slug of BACKUP_GLOBALS) {
    globals[slug] = await payload.findGlobal({ slug, depth: 0, draft: true, overrideAccess: true })
  }
  return { format: '3b-charpente-backup', version: 1, createdAt: new Date().toISOString(), collections, globals }
}

/* ----- Encryption (AES-256-GCM, key derived from PAYLOAD_SECRET) ----- */

const key = (secret: string) => createHash('sha256').update(`backup:${secret}`).digest()

export function encryptBackup(data: Backup, secret: string): Buffer {
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', key(secret), iv)
  const body = Buffer.concat([cipher.update(JSON.stringify(data), 'utf8'), cipher.final()])
  return Buffer.concat([Buffer.from('3BBK1'), iv, cipher.getAuthTag(), body])
}

export function decryptBackup(file: Buffer, secret: string): Backup {
  if (file.subarray(0, 5).toString() !== '3BBK1') {
    // Plain JSON (local backups).
    return JSON.parse(file.toString('utf8')) as Backup
  }
  const iv = file.subarray(5, 17)
  const tag = file.subarray(17, 33)
  const decipher = createDecipheriv('aes-256-gcm', key(secret), iv)
  decipher.setAuthTag(tag)
  const json = Buffer.concat([decipher.update(file.subarray(33)), decipher.final()]).toString('utf8')
  return JSON.parse(json) as Backup
}
