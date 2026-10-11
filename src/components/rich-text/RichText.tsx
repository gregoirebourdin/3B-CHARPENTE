import Link from 'next/link'
import type { ReactNode } from 'react'

import { Media } from '@/components/ui/Media'
import type { Media as MediaDoc } from '@/payload-types'
import { headingId, type LexicalNode, type RichTextValue } from '@/lib/richtext'
import { pathFor } from '@/payload/utilities/routes'

import styles from './RichText.module.css'

const IS_BOLD = 1
const IS_ITALIC = 1 << 1
const IS_STRIKETHROUGH = 1 << 2
const IS_UNDERLINE = 1 << 3
const IS_CODE = 1 << 4
const IS_SUBSCRIPT = 1 << 5
const IS_SUPERSCRIPT = 1 << 6

type LinkFields = {
  linkType?: 'custom' | 'internal'
  url?: string
  newTab?: boolean
  doc?: { relationTo?: string; value?: unknown } | null
}

function linkHref(fields: LinkFields | undefined): { href: string; external: boolean } | null {
  if (!fields) return null
  if (fields.linkType === 'internal') {
    const doc = fields.doc
    if (!doc?.relationTo || !doc.value || typeof doc.value !== 'object') return null
    const path = pathFor(doc.relationTo, doc.value as { slug?: string; path?: string })
    return path ? { href: path, external: false } : null
  }
  if (!fields.url) return null
  const external = /^https?:\/\//.test(fields.url)
  return { href: fields.url, external }
}

function renderText(node: LexicalNode, key: number): ReactNode {
  const format = typeof node.format === 'number' ? node.format : 0
  let out: ReactNode = node.text ?? ''
  if (format & IS_CODE) out = <code key={key}>{out}</code>
  if (format & IS_SUBSCRIPT) out = <sub key={key}>{out}</sub>
  if (format & IS_SUPERSCRIPT) out = <sup key={key}>{out}</sup>
  if (format & IS_STRIKETHROUGH) out = <s key={key}>{out}</s>
  if (format & IS_UNDERLINE) out = <u key={key}>{out}</u>
  if (format & IS_ITALIC) out = <em key={key}>{out}</em>
  if (format & IS_BOLD) out = <strong key={key}>{out}</strong>
  return <span key={key}>{out}</span>
}

function plain(node: LexicalNode): string {
  if (typeof node.text === 'string') return node.text
  return (node.children ?? []).map(plain).join('')
}

function renderNodes(nodes: LexicalNode[] | undefined): ReactNode[] {
  return (nodes ?? []).map((node, index) => renderNode(node, index))
}

function renderNode(node: LexicalNode, key: number): ReactNode {
  switch (node.type) {
    case 'text':
      return renderText(node, key)
    case 'linebreak':
      return <br key={key} />
    case 'tab':
      return ' '
    case 'paragraph': {
      const children = renderNodes(node.children)
      return children.length ? <p key={key}>{children}</p> : null
    }
    case 'heading': {
      const tag = (node.tag === 'h3' ? 'h3' : node.tag === 'h4' ? 'h4' : 'h2') as 'h2' | 'h3' | 'h4'
      const Tag = tag
      return (
        <Tag key={key} id={headingId(plain(node))}>
          {renderNodes(node.children)}
        </Tag>
      )
    }
    case 'list': {
      const listType = node.listType as string | undefined
      if (listType === 'number') return <ol key={key}>{renderNodes(node.children)}</ol>
      return (
        <ul key={key} className={listType === 'check' ? styles.checks : undefined}>
          {renderNodes(node.children)}
        </ul>
      )
    }
    case 'listitem': {
      const nested = node.children?.some((child) => child.type === 'list')
      return (
        <li key={key} className={nested ? styles.nested : undefined}>
          {renderNodes(node.children)}
        </li>
      )
    }
    case 'quote':
      return <blockquote key={key}>{renderNodes(node.children)}</blockquote>
    case 'horizontalrule':
      return <hr key={key} />
    case 'link':
    case 'autolink': {
      const target = linkHref(node.fields as LinkFields | undefined)
      const children = renderNodes(node.children)
      if (!target) return <span key={key}>{children}</span>
      if (target.external || !target.href.startsWith('/')) {
        return (
          <a key={key} href={target.href} {...(target.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            {children}
          </a>
        )
      }
      return (
        <Link key={key} href={target.href}>
          {children}
        </Link>
      )
    }
    case 'upload': {
      const value = node.value as MediaDoc | undefined
      if (!value || typeof value !== 'object') return null
      return (
        <figure key={key} className={styles.figure}>
          <Media media={value} sizes="(min-width: 800px) 720px, 100vw" />
          {value.caption ? <figcaption>{value.caption}</figcaption> : null}
        </figure>
      )
    }
    default:
      return node.children ? <span key={key}>{renderNodes(node.children)}</span> : null
  }
}

type Props = {
  data: RichTextValue | unknown
  className?: string
  /** "prose" = long text with spacing and headings; "inline" = short texts in components. */
  variant?: 'prose' | 'inline'
}

/** Renders Lexical rich text as clean, semantic HTML (zero JavaScript). */
export function RichText({ data, className, variant = 'inline' }: Props) {
  const value = data as RichTextValue
  if (!value?.root?.children?.length) return null
  return (
    <div className={[variant === 'prose' ? styles.prose : styles.inline, className].filter(Boolean).join(' ')}>
      {renderNodes(value.root.children)}
    </div>
  )
}
