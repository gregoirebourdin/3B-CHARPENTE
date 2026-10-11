import { timingSafeEqual } from 'node:crypto'

import { del, list, put } from '@vercel/blob'
import { NextResponse } from 'next/server'

import { encryptBackup, exportContent } from '@/lib/backup'
import { getPayloadClient } from '@/lib/cms/client'

export const dynamic = 'force-dynamic'
export const maxDuration = 120

const PREFIX = 'sauvegardes/'
const KEEP = 30

function authorized(request: Request) {
  const secret = process.env.CRON_SECRET
  const given = request.headers.get('authorization') ?? ''
  const expected = `Bearer ${secret}`
  return Boolean(secret) && given.length === expected.length && timingSafeEqual(Buffer.from(given), Buffer.from(expected))
}

/**
 * Nightly backup, called by Vercel Cron (vercel.json). The whole content is
 * exported, encrypted with a key derived from PAYLOAD_SECRET, stored in
 * Vercel Blob under an unguessable name; the 30 most recent copies are kept.
 * Restore: `pnpm restore <url or file>` (see docs/guide-admin.md).
 */
export async function GET(request: Request) {
  if (!authorized(request)) return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  if (!process.env.BLOB_READ_WRITE_TOKEN || !process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'Stockage Blob ou secret manquant.' }, { status: 503 })
  }

  const payload = await getPayloadClient()
  const backup = await exportContent(payload)
  const day = backup.createdAt.slice(0, 10)
  const file = await put(`${PREFIX}${day}.3bbk`, encryptBackup(backup, process.env.PAYLOAD_SECRET), {
    access: 'public',
    addRandomSuffix: true,
    contentType: 'application/octet-stream',
    cacheControlMaxAge: 60,
  })

  // Retention: newest first, delete beyond KEEP.
  const { blobs } = await list({ prefix: PREFIX, limit: 1000 })
  const old = blobs.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime()).slice(KEEP)
  if (old.length) await del(old.map((blob) => blob.url))

  const counts = Object.fromEntries(Object.entries(backup.collections).map(([slug, docs]) => [slug, docs.length]))
  payload.logger.info({ msg: 'Sauvegarde enregistrée', pathname: file.pathname, counts, deleted: old.length })
  return NextResponse.json({ ok: true, pathname: file.pathname, counts, deleted: old.length })
}
