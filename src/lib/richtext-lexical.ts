/**
 * Conversion between the former editor's format (Lexical) and the current one
 * (Tiptap). Used once by the migration that moved every text, and by its
 * « down » step.
 */
import type { TiptapMark, TiptapNode } from './richtext'

type LexicalNode = {
  type?: string
  text?: string
  tag?: string
  format?: number | string
  listType?: string
  children?: LexicalNode[]
  fields?: { linkType?: string; url?: string; newTab?: boolean; doc?: { relationTo?: string; value?: unknown } | null }
  [key: string]: unknown
}

export type LexicalValue = { root: LexicalNode }

/** « services:3 » → current address, or null if the document is gone. */
export type ResolveRef = (relationTo: string, id: number | string) => string | null

export const isLexical = (value: unknown): value is LexicalValue =>
  Boolean(value && typeof value === 'object' && (value as LexicalValue).root && (value as LexicalValue).root.type === 'root')

const FORMATS: [number, string][] = [
  [1, 'bold'],
  [1 << 1, 'italic'],
  [1 << 2, 'strike'],
  [1 << 3, 'underline'],
  [1 << 4, 'code'],
]

function linkMark(node: LexicalNode, resolve: ResolveRef): TiptapMark | null {
  const fields = node.fields ?? {}
  if (fields.linkType === 'internal') {
    const doc = fields.doc
    const id = doc?.value && typeof doc.value === 'object' ? (doc.value as { id?: number }).id : (doc?.value as number | undefined)
    if (!doc?.relationTo || id == null) return null
    const href = resolve(doc.relationTo, id)
    return href ? { type: 'link', attrs: { href, ref: `${doc.relationTo}:${id}`, target: null } } : null
  }
  if (!fields.url) return null
  const external = /^https?:\/\//.test(fields.url)
  return { type: 'link', attrs: { href: fields.url, ref: null, target: external ? '_blank' : null } }
}

function inline(nodes: LexicalNode[] | undefined, resolve: ResolveRef, inherited: TiptapMark[] = []): TiptapNode[] {
  const out: TiptapNode[] = []
  for (const node of nodes ?? []) {
    if (node.type === 'text' || typeof node.text === 'string') {
      if (!node.text) continue
      const format = typeof node.format === 'number' ? node.format : 0
      const marks = [...FORMATS.filter(([bit]) => format & bit).map(([, type]) => ({ type })), ...inherited]
      out.push(marks.length ? { type: 'text', text: node.text, marks } : { type: 'text', text: node.text })
    } else if (node.type === 'linebreak') {
      out.push({ type: 'hardBreak' })
    } else if (node.type === 'tab') {
      out.push({ type: 'text', text: ' ', ...(inherited.length ? { marks: inherited } : {}) })
    } else if (node.type === 'link' || node.type === 'autolink') {
      const mark = linkMark(node, resolve)
      out.push(...inline(node.children, resolve, mark ? [...inherited, mark] : inherited))
    } else if (node.children) {
      out.push(...inline(node.children, resolve, inherited))
    }
  }
  return out
}

const paragraph = (content: TiptapNode[]): TiptapNode => (content.length ? { type: 'paragraph', content } : { type: 'paragraph' })

function block(node: LexicalNode, resolve: ResolveRef): TiptapNode[] {
  switch (node.type) {
    case 'paragraph':
      return [paragraph(inline(node.children, resolve))]
    case 'heading': {
      const level = Number(String(node.tag ?? 'h2').replace('h', '')) || 2
      return [{ type: 'heading', attrs: { level: Math.min(4, Math.max(2, level)) }, content: inline(node.children, resolve) }]
    }
    case 'list': {
      const type = node.listType === 'number' ? 'orderedList' : 'bulletList'
      const items = (node.children ?? []).filter((child) => child.type === 'listitem')
      const content: TiptapNode[] = []
      for (const item of items) {
        const nested = (item.children ?? []).filter((child) => child.type === 'list')
        const text = inline((item.children ?? []).filter((child) => child.type !== 'list'), resolve)
        // Lexical writes a nested list as an item that only holds the list: attach it to the previous item.
        if (!text.length && nested.length && content.length) {
          const previous = content[content.length - 1]!
          previous.content = [...(previous.content ?? []), ...nested.flatMap((list) => block(list, resolve))]
          continue
        }
        content.push({ type: 'listItem', content: [paragraph(text), ...nested.flatMap((list) => block(list, resolve))] })
      }
      return content.length ? [{ type, ...(type === 'orderedList' ? { attrs: { start: 1 } } : {}), content }] : []
    }
    case 'quote':
      return [{ type: 'blockquote', content: [paragraph(inline(node.children, resolve))] }]
    case 'horizontalrule':
      return [{ type: 'horizontalRule' }]
    default:
      return node.children ? [paragraph(inline(node.children, resolve))] : []
  }
}

/** Lexical document → Tiptap document (null when there is no text). */
export function lexicalToTiptap(value: LexicalValue, resolve: ResolveRef): TiptapNode | null {
  const content = (value.root.children ?? []).flatMap((node) => block(node, resolve))
  const meaningful = content.filter((node) => node.type !== 'paragraph' || node.content?.length)
  return meaningful.length ? { type: 'doc', content } : null
}

/* ---------------- Back to Lexical (migration « down ») ---------------- */

const base = { format: '', indent: 0, version: 1, direction: 'ltr' as const }

function lexicalInline(nodes: TiptapNode[] | undefined): LexicalNode[] {
  const out: LexicalNode[] = []
  for (const node of nodes ?? []) {
    if (node.type === 'hardBreak') {
      out.push({ type: 'linebreak', version: 1 })
      continue
    }
    if (node.type !== 'text' || !node.text) continue
    const format = FORMATS.reduce((sum, [bit, type]) => (node.marks?.some((mark) => mark.type === type) ? sum + bit : sum), 0)
    const text: LexicalNode = { type: 'text', text: node.text, format, detail: 0, mode: 'normal', style: '', version: 1 }
    const link = node.marks?.find((mark) => mark.type === 'link')?.attrs as { href?: string; ref?: string | null } | undefined
    if (!link?.href) {
      out.push(text)
      continue
    }
    const [relationTo, id] = (link.ref ?? '').split(':')
    const fields = relationTo && id ? { linkType: 'internal', doc: { relationTo, value: Number(id) }, newTab: false } : { linkType: 'custom', url: link.href, newTab: /^https?:/.test(link.href) }
    out.push({ type: 'link', ...base, fields, children: [text] })
  }
  return out
}

function lexicalBlock(node: TiptapNode): LexicalNode[] {
  switch (node.type) {
    case 'heading':
      return [{ type: 'heading', tag: `h${node.attrs?.level ?? 2}`, ...base, children: lexicalInline(node.content) }]
    case 'bulletList':
    case 'orderedList':
      return [
        {
          type: 'list',
          listType: node.type === 'orderedList' ? 'number' : 'bullet',
          start: 1,
          tag: node.type === 'orderedList' ? 'ol' : 'ul',
          ...base,
          children: (node.content ?? []).map((item, index) => ({
            type: 'listitem',
            value: index + 1,
            ...base,
            children: (item.content ?? []).flatMap((child) => (child.type === 'paragraph' ? lexicalInline(child.content) : lexicalBlock(child))),
          })),
        },
      ]
    case 'blockquote':
      return [{ type: 'quote', ...base, children: (node.content ?? []).flatMap((child) => lexicalInline(child.content)) }]
    case 'horizontalRule':
      return [{ type: 'horizontalrule', version: 1 }]
    default:
      return [{ type: 'paragraph', ...base, textFormat: 0, textStyle: '', children: lexicalInline(node.content) }]
  }
}

export function tiptapToLexical(value: TiptapNode): LexicalValue {
  return { root: { type: 'root', ...base, children: (value.content ?? []).flatMap(lexicalBlock) } }
}
