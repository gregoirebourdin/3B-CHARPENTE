import { Lexer, type Token, type Tokens } from 'marked'

import type { TiptapMark, TiptapNode } from '../../lib/richtext'

/** A link of the fiches, made usable: `href`, and `ref` (« services:3 ») for a page of the site. */
export type ResolveLink = (url: string) => { href: string; ref: string | null }

const ENTITIES: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': '’' }
const decode = (text: string) => text.replace(/&(amp|lt|gt|quot|#39);/g, (entity) => ENTITIES[entity] ?? entity)

function inline(tokens: Token[] | undefined, resolve: ResolveLink, marks: TiptapMark[] = []): TiptapNode[] {
  const out: TiptapNode[] = []
  for (const token of tokens ?? []) {
    switch (token.type) {
      case 'text':
      case 'escape': {
        const text = token as Tokens.Text
        if (text.tokens?.length) out.push(...inline(text.tokens, resolve, marks))
        else if (text.text) out.push({ type: 'text', text: decode(text.text), ...(marks.length ? { marks } : {}) })
        break
      }
      case 'strong':
        out.push(...inline((token as Tokens.Strong).tokens, resolve, [...marks, { type: 'bold' }]))
        break
      case 'em':
        out.push(...inline((token as Tokens.Em).tokens, resolve, [...marks, { type: 'italic' }]))
        break
      case 'link': {
        const link = token as Tokens.Link
        const { href, ref } = resolve(link.href)
        const target = /^https?:\/\//.test(href) ? '_blank' : null
        out.push(...inline(link.tokens, resolve, [...marks, { type: 'link', attrs: { href, ref, target } }]))
        break
      }
      case 'br':
        out.push({ type: 'hardBreak' })
        break
      case 'codespan':
        out.push({ type: 'text', text: decode((token as Tokens.Codespan).text), ...(marks.length ? { marks } : {}) })
        break
      default:
        if ('tokens' in token && Array.isArray(token.tokens)) out.push(...inline(token.tokens, resolve, marks))
        else if ('text' in token && typeof token.text === 'string' && token.text) out.push({ type: 'text', text: decode(token.text), ...(marks.length ? { marks } : {}) })
    }
  }
  return out
}

const paragraph = (content: TiptapNode[]): TiptapNode => (content.length ? { type: 'paragraph', content } : { type: 'paragraph' })

function blocks(tokens: Token[], resolve: ResolveLink): TiptapNode[] {
  const out: TiptapNode[] = []
  for (const token of tokens) {
    switch (token.type) {
      case 'paragraph':
        out.push(paragraph(inline((token as Tokens.Paragraph).tokens, resolve)))
        break
      case 'text': {
        const text = token as Tokens.Text
        out.push(paragraph(inline(text.tokens ?? [text], resolve)))
        break
      }
      case 'heading': {
        const heading = token as Tokens.Heading
        out.push({ type: 'heading', attrs: { level: Math.min(4, Math.max(2, heading.depth)) }, content: inline(heading.tokens, resolve) })
        break
      }
      case 'list': {
        const list = token as Tokens.List
        out.push({
          type: list.ordered ? 'orderedList' : 'bulletList',
          ...(list.ordered ? { attrs: { start: Number(list.start) || 1 } } : {}),
          content: list.items.map((item) => ({ type: 'listItem', content: blocks(item.tokens, resolve) })),
        })
        break
      }
      case 'blockquote':
        out.push({ type: 'blockquote', content: blocks((token as Tokens.Blockquote).tokens, resolve) })
        break
      case 'hr':
        out.push({ type: 'horizontalRule' })
        break
      default:
        break
    }
  }
  return out
}

/** Markdown of the fiches (paragraphs, bold, italic, links, lists, titles, quotes) → Tiptap document. */
export function markdownToTiptap(markdown: string, resolve: ResolveLink): TiptapNode | null {
  const content = blocks(new Lexer().lex(markdown), resolve)
  return content.length ? { type: 'doc', content } : null
}
