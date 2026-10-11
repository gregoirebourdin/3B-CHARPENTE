'use server'

import { createHash } from 'node:crypto'

import { headers } from 'next/headers'

import { getPayloadClient } from '@/lib/cms/client'
import { getSiteTexts } from '@/lib/cms/queries'
import { toFieldDefs, validateAll, type FormValues, type UploadedFile } from '@/lib/forms/schema'

export type ContactInput = {
  formId: number
  values: FormValues
  files: UploadedFile[]
  /** Time the form was displayed (ms). Bots submit instantly. */
  startedAt: number
  /** Hidden trap field: humans never fill it. */
  website: string
  source: string
}

export type ContactResult =
  | { ok: true }
  | { ok: false; reason: 'invalid'; errors: Record<string, string> }
  | { ok: false; reason: 'tooSoon' | 'tooMany' | 'error' }

const MIN_DELAY_MS = 3000
const WINDOW_MS = 15 * 60 * 1000
const MAX_PER_WINDOW = 3
const BLOB_URL = /^https:\/\/[a-z0-9]+\.public\.blob\.vercel-storage\.com\/demandes\/[^\s]+$/i

/**
 * Receives the contact form. Anti-spam without captcha: hidden trap field,
 * minimum time on the page, and at most 3 requests per connection every 15
 * minutes (the IP address is stored as an irreversible hash only).
 */
export async function submitContact(input: ContactInput): Promise<ContactResult> {
  // Bots that fill the trap get a fake success and nothing is stored.
  if (input.website?.trim()) return { ok: true }
  if (!Number.isFinite(input.startedAt) || Date.now() - input.startedAt < MIN_DELAY_MS) {
    return { ok: false, reason: 'tooSoon' }
  }

  try {
    const payload = await getPayloadClient()
    const requestHeaders = await headers()
    const ip = (requestHeaders.get('x-forwarded-for') ?? requestHeaders.get('x-real-ip') ?? 'inconnue').split(',')[0]!.trim()
    const ipHash = createHash('sha256')
      .update(`${ip}:${process.env.PAYLOAD_SECRET ?? ''}`)
      .digest('hex')
      .slice(0, 32)

    const { totalDocs } = await payload.count({
      collection: 'form-submissions',
      where: { and: [{ ipHash: { equals: ipHash } }, { createdAt: { greater_than: new Date(Date.now() - WINDOW_MS).toISOString() } }] },
    })
    if (totalDocs >= MAX_PER_WINDOW) return { ok: false, reason: 'tooMany' }

    const form = await payload.findByID({ collection: 'forms', id: input.formId, depth: 0 })
    const fields = toFieldDefs(form)
    const texts = await getSiteTexts()
    const errors = validateAll(fields, input.values ?? {}, texts.form)
    if (Object.keys(errors).length) return { ok: false, reason: 'invalid', errors }

    const valueOf = (kind: string, pattern?: RegExp) => {
      const field = fields.find((f) => f.kind === kind && (!pattern || pattern.test(f.name)))
      const value = field ? input.values[field.name] : undefined
      return Array.isArray(value) ? value.join(', ') : (value ?? '').trim()
    }
    const name = valueOf('textInput', /nom|name/) || valueOf('textInput')
    const commune = valueOf('communeInput')
    const projects = fields
      .filter((f) => f.kind === 'checkboxGroup')
      .flatMap((f) => {
        const value = input.values[f.name]
        return Array.isArray(value) ? value : value ? [value] : []
      })
    const summary = [projects.join(', ') || form.title, commune ? `à ${commune}` : ''].filter(Boolean).join(' ').slice(0, 240)

    const files = (input.files ?? []).filter((file) => BLOB_URL.test(file.url)).slice(0, 10)

    await payload.create({
      collection: 'form-submissions',
      data: {
        form: form.id,
        status: 'new',
        summary,
        contactName: name.slice(0, 120),
        contactEmail: valueOf('emailInput').slice(0, 200),
        contactPhone: valueOf('telInput').slice(0, 40),
        commune: commune.slice(0, 120),
        sourcePage: input.source?.slice(0, 200),
        ipHash,
        submissionData: fields
          .filter((field) => field.kind !== 'fileInput')
          .map((field) => {
            const value = input.values[field.name]
            return { field: field.label, value: (Array.isArray(value) ? value.join(', ') : (value ?? '')).slice(0, 5000) }
          }),
        attachments: files.map((file) => ({ name: file.name.slice(0, 200), url: file.url })),
      },
    })
    return { ok: true }
  } catch (error) {
    console.error('[contact] demande non enregistrée', error)
    return { ok: false, reason: 'error' }
  }
}
