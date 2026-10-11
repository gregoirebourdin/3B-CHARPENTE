/** Helpers to read Lexical rich text as plain text (JSON-LD, word counts, table of contents). */

export type LexicalNode = {
  type?: string
  text?: string
  tag?: string
  children?: LexicalNode[]
  [key: string]: unknown
}

export type RichTextValue = { root?: LexicalNode } | null | undefined

const BLOCK_TYPES = new Set(['paragraph', 'heading', 'listitem', 'quote', 'list'])

function collect(node: LexicalNode | undefined, out: string[]): void {
  if (!node) return
  if (typeof node.text === 'string') out.push(node.text)
  if (node.type === 'linebreak') out.push('\n')
  node.children?.forEach((child) => collect(child, out))
  if (node.type && BLOCK_TYPES.has(node.type)) out.push('\n')
}

export function richTextToPlain(value: RichTextValue): string {
  if (!value?.root) return ''
  const out: string[] = []
  collect(value.root, out)
  return out
    .join('')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim()
}

export function isRichTextEmpty(value: RichTextValue): boolean {
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

/** H2 headings of a rich text, for the table of contents. */
export function extractHeadings(value: RichTextValue, tag = 'h2'): { id: string; text: string }[] {
  const out: { id: string; text: string }[] = []
  for (const node of value?.root?.children ?? []) {
    if (node.type === 'heading' && node.tag === tag) {
      const parts: string[] = []
      collect(node, parts)
      const text = parts.join('').trim()
      if (text) out.push({ id: headingId(text), text })
    }
  }
  return out
}

export function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length
}
