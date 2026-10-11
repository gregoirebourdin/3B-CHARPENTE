import type { Company } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

/** Shape of every link group (src/payload/fields/link.ts) once fetched. */
export type CmsLink = {
  label?: string | null
  type?: ('internal' | 'phone' | 'email' | 'external') | null
  reference?: { relationTo: string; value: unknown } | null
  anchor?: string | null
  url?: string | null
} | null | undefined

export type ResolvedLink = {
  href: string
  label: string
  external: boolean
  kind: 'internal' | 'phone' | 'email' | 'external'
}

/** "06 34 67 31 49" → "+33634673149" (French numbers). */
export function phoneToE164(phone: string | null | undefined): string {
  const digits = (phone ?? '').replace(/[^\d+]/g, '')
  if (digits.startsWith('+')) return digits
  if (digits.startsWith('0')) return `+33${digits.slice(1)}`
  return digits
}

type ContactDetails = Pick<Company, 'phone' | 'email'> & Partial<Company>

/** Replaces {telephone} and {email} placeholders with the company details. */
export function fillTokens(text: string, company?: ContactDetails | null): string {
  if (!company) return text
  return text.replaceAll('{telephone}', company.phone).replaceAll('{email}', company.email)
}

export function resolveLink(link: CmsLink, company?: ContactDetails | null): ResolvedLink | null {
  if (!link) return null
  const label = fillTokens(link.label ?? '', company)
  switch (link.type) {
    case 'phone':
      if (!company?.phone) return null
      return { href: `tel:${phoneToE164(company.phone)}`, label: label || company.phone, external: false, kind: 'phone' }
    case 'email':
      if (!company?.email) return null
      return { href: `mailto:${company.email}`, label: label || company.email, external: false, kind: 'email' }
    case 'external':
      if (!link.url) return null
      return { href: link.url, label, external: true, kind: 'external' }
    case 'internal':
    default: {
      const ref = link.reference
      if (!ref || typeof ref.value !== 'object' || !ref.value) return null
      const path = pathFor(ref.relationTo, ref.value as { slug?: string; path?: string })
      if (!path) return null
      const anchor = link.anchor ? `#${link.anchor.replace(/^#/, '')}` : ''
      return { href: `${path}${anchor}`, label, external: false, kind: 'internal' }
    }
  }
}

/** Splits a title on the "words in green" field: ["Construire ", {accent:"simplement"}, ", penser "…]. */
export function splitAccent(title: string, accent?: string | null): { text: string; accent: boolean }[] {
  const groups = (accent ?? '')
    .split(',')
    .map((group) => group.trim())
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)
  if (!groups.length) return [{ text: title, accent: false }]

  const ranges: [number, number][] = []
  for (const group of groups) {
    let from = 0
    while (from < title.length) {
      const index = title.indexOf(group, from)
      if (index === -1) break
      const end = index + group.length
      if (!ranges.some(([start, stop]) => index < stop && end > start)) {
        ranges.push([index, end])
        break
      }
      from = end
    }
  }
  ranges.sort((a, b) => a[0] - b[0])

  const parts: { text: string; accent: boolean }[] = []
  let cursor = 0
  for (const [start, end] of ranges) {
    if (start > cursor) parts.push({ text: title.slice(cursor, start), accent: false })
    parts.push({ text: title.slice(start, end), accent: true })
    cursor = end
  }
  if (cursor < title.length) parts.push({ text: title.slice(cursor), accent: false })
  return parts
}

/** Fills {n}, {commune}… placeholders of a template sentence. */
export function template(text: string, values: Record<string, string | number | null | undefined>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => {
    const value = values[key]
    return value === undefined || value === null ? match : String(value)
  })
}

/** "Le projet à **{commune}**" → { title: 'Le projet à Briançon', accent: 'Briançon' }. */
export function starTitle(text: string): { title: string; accent: string } {
  const accents: string[] = []
  const title = text.replace(/\*\*(.+?)\*\*/g, (_, inner: string) => {
    accents.push(inner)
    return inner
  })
  return { title, accent: accents.join(', ') }
}
