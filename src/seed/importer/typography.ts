/**
 * French typography for the imported content: curly apostrophes and
 * non-breaking spaces before « : ; ! ? » and inside guillemets, so that a
 * « nous » never ends a line alone. Paths, addresses and identifiers are
 * left untouched.
 */
const NBSP = ' '

/** Keys whose values are identifiers, paths or addresses, never prose. */
const SKIP_KEYS = new Set(['slug', 'href', 'url', 'key', 'keys', 'email', 'anchor', 'path', 'parent', 'sourceKey', 'commune', 'sector', 'kind'])

const looksTechnical = (value: string) =>
  /^(\/|https?:|mailto:|tel:|#)/.test(value) || /\.(jpe?g|png|webp|avif|gif|svg|pdf|heic)$/i.test(value) || /^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(value)

export function frenchTypography(text: string): string {
  if (!text || looksTechnical(text)) return text
  return (
    text
      // l'atelier → l’atelier ; 3B Récup' → 3B Récup’
      .replace(/(\p{L})'(?=\p{L})/gu, '$1’')
      .replace(/(\p{L})'(?=[\s,.;:!?)»*]|$)/gu, '$1’')
      // Space before high punctuation and closing guillemet → non-breaking
      .replace(/[ \t]+([:;!?»])/g, `${NBSP}$1`)
      // Space after opening guillemet → non-breaking
      .replace(/«[ \t]+/g, `«${NBSP}`)
  )
}

/** Applies frenchTypography to every prose string of a seed object, recursively. */
export function typeset<T>(value: T, key?: string): T {
  if (typeof value === 'string') return (key && SKIP_KEYS.has(key) ? value : frenchTypography(value)) as T
  if (Array.isArray(value)) return value.map((item) => typeset(item, key)) as T
  if (value && typeof value === 'object') {
    if (Object.getPrototypeOf(value) !== Object.prototype && !Array.isArray(value)) return value
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, SKIP_KEYS.has(k) ? v : typeset(v, k)])) as T
  }
  return value
}
