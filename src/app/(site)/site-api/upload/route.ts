import { issueSignedToken } from '@vercel/blob'
import { handleUploadPresigned, type HandleUploadPresignedBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'

import { ACCEPTED_FILE_TYPES } from '@/lib/forms/schema'
import { blobEnabled } from '@/payload/storage/blobAuth'

const MAX_SIZE = 10 * 1024 * 1024
const recent = new Map<string, number[]>()

/** Best-effort throttle per server instance: 12 files per address every 10 minutes. */
function throttled(ip: string) {
  const now = Date.now()
  const list = (recent.get(ip) ?? []).filter((time) => now - time < 10 * 60 * 1000)
  list.push(now)
  recent.set(ip, list)
  return list.length > 12
}

/**
 * Issues short-lived, single-file signed addresses so the visitor's browser
 * sends plans and photos straight to Vercel Blob (folder "demandes/", random
 * name), PDF/JPG/PNG/HEIC/WebP only, 10 MB max. Files never transit through
 * the server.
 */
export async function POST(request: Request) {
  if (!blobEnabled()) return NextResponse.json({ error: 'Envoi de fichiers indisponible.' }, { status: 503 })
  const ip = (request.headers.get('x-forwarded-for') ?? 'inconnue').split(',')[0]!.trim()
  const body = (await request.json()) as HandleUploadPresignedBody
  if (body.type === 'blob.generate-presigned-url' && throttled(ip)) {
    return NextResponse.json({ error: 'Trop de fichiers envoyés, réessayez plus tard.' }, { status: 429 })
  }
  try {
    const result = await handleUploadPresigned({
      body,
      request,
      getSignedToken: async (pathname) => {
        if (!pathname.startsWith('demandes/') || pathname.includes('..')) throw new Error('Chemin refusé.')
        const token = await issueSignedToken({
          pathname,
          operations: ['put'],
          validUntil: Date.now() + 10 * 60 * 1000,
          allowedContentTypes: ACCEPTED_FILE_TYPES,
          maximumSizeInBytes: MAX_SIZE,
        })
        return {
          token,
          urlOptions: { addRandomSuffix: true, allowedContentTypes: ACCEPTED_FILE_TYPES, maximumSizeInBytes: MAX_SIZE },
        }
      },
    })
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 })
  }
}
