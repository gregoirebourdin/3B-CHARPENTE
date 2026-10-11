import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'

import { ACCEPTED_FILE_TYPES } from '@/lib/forms/schema'

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
 * Issues short-lived upload tokens so the visitor's browser sends plans and
 * photos straight to Vercel Blob (folder "demandes/"), PDF/JPG/PNG/HEIC/WebP
 * only, 10 MB max. Files never transit through the server.
 */
export async function POST(request: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return NextResponse.json({ error: 'Envoi de fichiers indisponible.' }, { status: 503 })
  const ip = (request.headers.get('x-forwarded-for') ?? 'inconnue').split(',')[0]!.trim()
  const body = (await request.json()) as HandleUploadBody
  if (body.type === 'blob.generate-client-token' && throttled(ip)) {
    return NextResponse.json({ error: 'Trop de fichiers envoyés, réessayez plus tard.' }, { status: 429 })
  }
  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith('demandes/')) throw new Error('Chemin refusé.')
        return {
          allowedContentTypes: ACCEPTED_FILE_TYPES,
          maximumSizeInBytes: MAX_SIZE,
          addRandomSuffix: true,
        }
      },
      onUploadCompleted: async () => {},
    })
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 })
  }
}
