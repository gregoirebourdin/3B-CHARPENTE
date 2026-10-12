/**
 * Rich text of the site: Tiptap (ProseMirror) JSON, written in the admin with
 * the Tiptap editor. Helpers to read it as plain text (JSON-LD, word counts),
 * headings (table of contents) and links (publication checks).
 */

export type TiptapMark = { type: string; attrs?: Record<string, unknown> }

export type TiptapNode = {
  type: string
  text?: string
  attrs?: Record<string, unknown>
  marks?: TiptapMark[]
  content?: TiptapNode[]
}

/** The stored value: a `doc` node, or nothing. */
export type RichTextValue = TiptapNode | null | undefined

/** Link mark attributes: `href`, and `ref` (« services:3 ») when it points to a document of the site. */
export type LinkAttrs = { href?: string | null; ref?: string | null; target?: string | null }

const BLOCKS = new Set(['paragraph', 'heading', 'listItem', 'blockquote', 'bulletList', 'orderedList'])

export const isDoc = (value: unknown): value is TiptapNode =>
  Boolean(value && typeof value === 'object' && (value as TiptapNode).type === 'doc')

export const linkOf = (node: TiptapNode): LinkAttrs | null =>
  (node.marks?.find((mark) => mark.type === 'link')?.attrs as LinkAttrs | undefined) ?? null

/** A paragraph made only of a link (« Le bois de réemploi → »): navigation, not content. */
const isLinkParagraph = (node: TiptapNode) =>
  node.type === 'paragraph' &&
  Boolean(node.content?.length) &&
  node.content!.every((child) => (child.type === 'text' && (linkOf(child) || !child.text?.trim())) || child.type === 'hardBreak')

function collect(node: TiptapNode, out: string[], skipLinks = false): void {
  if (skipLinks && isLinkParagraph(node)) return
  if (node.type === 'text') out.push(node.text ?? '')
  if (node.type === 'hardBreak') out.push('\n')
  node.content?.forEach((child) => collect(child, out, skipLinks))
  if (BLOCKS.has(node.type)) out.push('\n')
}

/** Text of a node and its children, without any line break. */
export const plainOf = (node: TiptapNode): string => (node.type === 'text' ? (node.text ?? '') : (node.content ?? []).map(plainOf).join(''))

export function richTextToPlain(value: unknown, options: { skipLinkParagraphs?: boolean } = {}): string {
  if (!isDoc(value)) return ''
  const out: string[] = []
  collect(value, out, options.skipLinkParagraphs ?? false)
  return out
    .join('')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim()
}

export function isRichTextEmpty(value: unknown): boolean {
  return richTextToPlain(value).length === 0
}

/** Stable id for a heading: "Le tableau comparatif" → "le-tableau-comparatif". */
export function headingId(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

/** Headings of a given level (H2 by default), for the table of contents. */
export function extractHeadings(value: unknown, level = 2): { id: string; text: string }[] {
  if (!isDoc(value)) return []
  return (value.content ?? [])
    .filter((node) => node.type === 'heading' && Number(node.attrs?.level) === level)
    .map((node) => plainOf(node).trim())
    .filter(Boolean)
    .map((text) => ({ id: headingId(text), text }))
}

/** Every link of the text, consecutive pieces of the same link merged (« Voir la **charpente** »). */
export function linksOf(value: unknown): { href: string; ref: string | null; text: string }[] {
  if (!isDoc(value)) return []
  const out: { href: string; ref: string | null; text: string }[] = []
  const walk = (node: TiptapNode, previous: { current: LinkAttrs | null }) => {
    if (node.type === 'text') {
      const link = linkOf(node)
      const last = out[out.length - 1]
      if (link?.href && previous.current && last && last.href === link.href) last.text += node.text ?? ''
      else if (link?.href) out.push({ href: link.href, ref: link.ref ?? null, text: node.text ?? '' })
      previous.current = link
      return
    }
    const state = { current: null as LinkAttrs | null }
    node.content?.forEach((child) => walk(child, state))
  }
  walk(value, { current: null })
  return out
}

/** Does the text contain at least one heading? */
export const hasHeading = (value: unknown) => isDoc(value) && (value.content ?? []).some((node) => node.type === 'heading')

export function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length
}

/** Plain paragraphs (blank line between them) → a rich text document. */
export function paragraphsToRichText(text: string): TiptapNode | null {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean)
  if (!paragraphs.length) return null
  return { type: 'doc', content: paragraphs.map((paragraph) => ({ type: 'paragraph', content: [{ type: 'text', text: paragraph }] })) }
}
