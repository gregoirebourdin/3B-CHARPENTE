/** Helpers of the « Ajouter un chantier » wizard: photos, texts, requests. Browser only. */

import { paragraphsToRichText } from '@/lib/richtext'

export type ServiceOption = { id: number; title: string; shortLabel: string; icon: string }
export type CommuneOption = { id: number; name: string; villages: string }

/** Vercel refuses requests above 4.5 MB: photos are made lighter in the browser first. */
const MAX_UPLOAD = 4.3 * 1024 * 1024
const MAX_SIDE = 2400

/** Same as the site's slugs: lowercase, no accents, dashes. */
export const slugify = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 100)

/** Accent- and case-insensitive text, to compare what is typed with a commune name. */
export const fold = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’']/g, "'")

/**
 * Turns any phone or camera photo into a WebP of 2 400 px at most on its long
 * side (the size the site keeps anyway), so it uploads quickly over 4G.
 */
export async function preparePhoto(file: File): Promise<File> {
  const base = file.name.replace(/\.[^.]+$/, '') || 'photo'
  try {
    const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' })
    const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height))
    const width = Math.round(bitmap.width * scale)
    const height = Math.round(bitmap.height * scale)
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    if (!context) throw new Error('canvas')
    context.drawImage(bitmap, 0, 0, width, height)
    bitmap.close()
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/webp', 0.86))
    if (!blob) throw new Error('encode')
    return new File([blob], `${base}.webp`, { type: 'image/webp' })
  } catch {
    // The browser cannot read this format (HEIC on a computer, for instance): send it as it is if light enough.
    if (file.size <= MAX_UPLOAD) return file
    throw new Error('Cette photo ne peut pas être lue par ce navigateur. Envoyez-la en JPG.')
  }
}

export type UploadedMedia = { id: number; url: string; thumbnail: string }

/** Sends one photo to the media library, reporting progress (0 to 1). */
export function uploadPhoto(file: File, alt: string, onProgress: (ratio: number) => void): Promise<UploadedMedia> {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_UPLOAD) {
      reject(new Error('Photo trop lourde, même après réduction.'))
      return
    }
    const body = new FormData()
    body.append('file', file)
    body.append('_payload', JSON.stringify({ alt: alt.slice(0, 160), kind: 'chantier' }))
    const request = new XMLHttpRequest()
    request.open('POST', '/api/media')
    request.withCredentials = true
    request.upload.onprogress = (event) => {
      if (event.lengthComputable) onProgress(event.loaded / event.total)
    }
    request.onload = () => {
      try {
        const json = JSON.parse(request.responseText) as {
          doc?: { id: number; url?: string; sizes?: { thumbnail?: { url?: string | null } } }
          errors?: { message: string }[]
        }
        if (request.status >= 200 && request.status < 300 && json.doc) {
          resolve({ id: json.doc.id, url: json.doc.url ?? '', thumbnail: json.doc.sizes?.thumbnail?.url || json.doc.url || '' })
        } else {
          reject(new Error(json.errors?.[0]?.message ?? 'L’envoi n’a pas abouti.'))
        }
      } catch {
        reject(new Error('L’envoi n’a pas abouti.'))
      }
    }
    request.onerror = () => reject(new Error('Pas de connexion à Internet.'))
    request.send(body)
  })
}

export async function api<T>(path: string, init: RequestInit & { json?: unknown } = {}): Promise<T> {
  const { json, ...rest } = init
  const response = await fetch(path, {
    credentials: 'include',
    ...rest,
    headers: json !== undefined ? { 'Content-Type': 'application/json', ...rest.headers } : rest.headers,
    body: json !== undefined ? JSON.stringify(json) : rest.body,
  })
  const data = (await response.json().catch(() => ({}))) as T & { errors?: { message: string; data?: { errors?: { message: string }[] } }[] }
  if (!response.ok) {
    const first = data.errors?.[0]
    throw new Error(first?.data?.errors?.[0]?.message ?? first?.message ?? 'L’enregistrement n’a pas abouti.')
  }
  return data
}

/** Plain paragraphs (blank line between them) → the rich text format of the site. */
export const toRichText = paragraphsToRichText

export const countWords = (text: string) => (text.trim() ? text.trim().split(/\s+/).length : 0)

const META_MIN = 140
const META_MAX = 155

/** Cuts at the last whole word that fits, and ends with a full stop. */
function fit(text: string, max: number) {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:.–-]+$/, '')}.`
}

/**
 * A first description for Google, 140 to 155 characters, built only from what
 * was typed (summary, commune) and the company's own facts.
 */
export function suggestMeta(summary: string, commune: string | null) {
  let text = summary.trim().replace(/[.\s]+$/, '')
  if (!text) return ''
  text = `${text}.`
  const additions = [
    commune ? `Chantier de 3B Charpente à ${commune}.` : 'Chantier de 3B Charpente.',
    'Charpentier écologique dans les Hautes-Alpes.',
  ]
  for (const addition of additions) {
    if (text.length >= META_MIN) break
    text = `${text} ${addition}`
  }
  return fit(text, META_MAX)
}

export const metaLength = { min: META_MIN, max: META_MAX }
