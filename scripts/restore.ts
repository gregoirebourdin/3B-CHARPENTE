/**
 * Restores a backup (local JSON from `pnpm backup`, or the encrypted nightly
 * copy from Vercel Blob, given by file path or URL).
 *
 *   pnpm restore backups/contenu-2026-10-11.json
 *   pnpm restore https://….public.blob.vercel-storage.com/sauvegardes/2026-10-11-xxxx.3bbk
 *
 * Every document is written back with its original id (updated if it exists,
 * created otherwise), in an order that keeps relations valid. Accounts are
 * never touched. Encrypted copies need the same PAYLOAD_SECRET as the site.
 * Run it against a fresh Neon branch first, check, then against production.
 */
import fs from 'node:fs'

import { getPayload, type CollectionSlug, type FlattenedField, type GlobalSlug } from 'payload'

import { BACKUP_COLLECTIONS, BACKUP_GLOBALS, decryptBackup } from '../src/lib/backup'
import config from '../src/payload.config'

// `payload run scripts/restore.ts <source>` leaves only the source after the payload binary.
const source = process.argv[2]
if (!source) {
  console.error('Indiquez le fichier ou l’adresse de la sauvegarde.')
  process.exit(1)
}

const raw = source.startsWith('http') ? Buffer.from(await (await fetch(source)).arrayBuffer()) : fs.readFileSync(source)
const backup = decryptBackup(raw, process.env.PAYLOAD_SECRET ?? '')
if (backup.format !== '3b-charpente-backup') throw new Error('Ce fichier n’est pas une sauvegarde du site.')

const payload = await getPayload({ config })
const context = { disableRevalidate: true, skipPublishGuard: true }

/**
 * Copy of a document without its relations (relationship and upload fields,
 * at any depth), so every row can exist before anything points to it.
 */
function withoutRelations(fields: FlattenedField[], data: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = { ...data }
  for (const field of fields) {
    const value = out[field.name]
    if (value === undefined || value === null) continue
    if (field.type === 'relationship' || field.type === 'upload') {
      out[field.name] = field.hasMany ? [] : null
    } else if (field.type === 'group' || field.type === 'tab') {
      out[field.name] = withoutRelations(field.flattenedFields, value as Record<string, unknown>)
    } else if (field.type === 'array' && Array.isArray(value)) {
      out[field.name] = value.map((row) => withoutRelations(field.flattenedFields, row as Record<string, unknown>))
    } else if (field.type === 'blocks' && Array.isArray(value)) {
      out[field.name] = value.map((row) => {
        const block = field.blocks.find((b) => b.slug === (row as { blockType: string }).blockType)
        return block ? withoutRelations(block.flattenedFields, row as Record<string, unknown>) : row
      })
    }
  }
  return out
}

const sql = (raw: string) => payload.db.execute({ drizzle: payload.db.drizzle, raw })
const table = (slug: CollectionSlug) => `"${slug.replace(/-/g, '_')}"`

/** Writes straight through the database adapter: an exact copy, without upload or publication hooks. */
async function writeDoc(slug: CollectionSlug, doc: Record<string, unknown>) {
  const id = doc.id as number
  const { createdAt: _c, updatedAt: _u, id: _id, ...data } = doc
  const existing = await payload.db.findOne({ collection: slug, where: { id: { equals: id } } })
  if (existing) {
    await payload.db.updateOne({ collection: slug, id, data })
    return
  }
  // The adapter always takes the next number of the counter: set it to the original id first.
  await sql(`SELECT setval(pg_get_serial_sequence('${table(slug)}', 'id'), ${Number(id)}, false)`)
  await payload.db.create({ collection: slug, data })
}

try {
  // 1. Every document, relations left empty.
  for (const slug of BACKUP_COLLECTIONS) {
    const fields = payload.collections[slug].config.flattenedFields
    const docs = (backup.collections[slug] ?? []) as Record<string, unknown>[]
    for (const doc of docs) await writeDoc(slug, withoutRelations(fields, doc))
    // Counter back after the highest id, for documents created later in the admin.
    await sql(`SELECT setval(pg_get_serial_sequence('${table(slug)}', 'id'), GREATEST((SELECT MAX(id) FROM ${table(slug)}), 1))`)
    console.log(`✓ ${slug} : ${docs.length}`)
  }
  // 2. The same documents again, complete: every target now exists.
  for (const slug of BACKUP_COLLECTIONS) {
    for (const doc of (backup.collections[slug] ?? []) as Record<string, unknown>[]) await writeDoc(slug, doc)
  }
  console.log('✓ Liens entre documents')
  for (const slug of BACKUP_GLOBALS) {
    const data = backup.globals[slug] as Record<string, unknown> | undefined
    if (!data) continue
    const { createdAt: _c, updatedAt: _u, id: _id, globalType: _g, ...rest } = data
    await payload.updateGlobal({ slug: slug as GlobalSlug, data: rest as never, context, overrideAccess: true })
  }
  console.log(`✓ Réglages : ${BACKUP_GLOBALS.length}`)
  console.log(`Restauration de la sauvegarde du ${backup.createdAt} terminée.`)
  process.exit(0)
} catch (error) {
  console.error(error)
  process.exit(1)
}
