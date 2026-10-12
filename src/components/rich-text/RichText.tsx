import Link from 'next/link'
import type { ReactNode } from 'react'

import { getLinkTargets } from '@/lib/cms/queries'
import { headingId, isDoc, plainOf, type LinkAttrs, type TiptapMark, type TiptapNode } from '@/lib/richtext'

import styles from './RichText.module.css'

type Targets = Map<string, string>

/** href of a link mark: the current address of the linked document when there is one. */
function hrefOf(attrs: LinkAttrs, targets: Targets): string | null {
  if (attrs.ref && targets.has(attrs.ref)) {
    const hash = attrs.href?.includes('#') ? attrs.href.slice(attrs.href.indexOf('#')) : ''
    return `${targets.get(attrs.ref)}${hash}`
  }
  return attrs.href ?? null
}

function wrapMark(mark: TiptapMark, child: ReactNode, key: string, targets: Targets): ReactNode {
  switch (mark.type) {
    case 'bold':
      return <strong key={key}>{child}</strong>
    case 'italic':
      return <em key={key}>{child}</em>
    case 'underline':
      return <u key={key}>{child}</u>
    case 'strike':
      return <s key={key}>{child}</s>
    case 'code':
      return <code key={key}>{child}</code>
    case 'link': {
      const href = hrefOf(mark.attrs as LinkAttrs, targets)
      if (!href) return child
      const external = /^https?:\/\//.test(href)
      if (href.startsWith('/') && !href.startsWith('//')) {
        return (
          <Link key={key} href={href}>
            {child}
          </Link>
        )
      }
      return (
        <a key={key} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {child}
        </a>
      )
    }
    default:
      return child
  }
}

/** Text with its marks; the link goes outside the bold/italic so a link stays one element. */
function renderText(node: TiptapNode, key: string, targets: Targets): ReactNode {
  const marks = [...(node.marks ?? [])].sort((a, b) => (a.type === 'link' ? 1 : 0) - (b.type === 'link' ? 1 : 0))
  return marks.reduce<ReactNode>((child, mark, index) => wrapMark(mark, child, `${key}-${index}`, targets), node.text ?? '')
}

function renderNodes(nodes: TiptapNode[] | undefined, targets: Targets, prefix = ''): ReactNode[] {
  return (nodes ?? []).map((node, index) => renderNode(node, `${prefix}${index}`, targets))
}

function renderNode(node: TiptapNode, key: string, targets: Targets): ReactNode {
  switch (node.type) {
    case 'text':
      return <span key={key}>{renderText(node, key, targets)}</span>
    case 'hardBreak':
      return <br key={key} />
    case 'paragraph': {
      const children = renderNodes(node.content, targets, `${key}.`)
      return children.length ? <p key={key}>{children}</p> : null
    }
    case 'heading': {
      const level = Number(node.attrs?.level)
      const Tag = (level === 3 ? 'h3' : level === 4 ? 'h4' : 'h2') as 'h2' | 'h3' | 'h4'
      return (
        <Tag key={key} id={headingId(plainOf(node))}>
          {renderNodes(node.content, targets, `${key}.`)}
        </Tag>
      )
    }
    case 'bulletList':
      return <ul key={key}>{renderNodes(node.content, targets, `${key}.`)}</ul>
    case 'orderedList': {
      const start = Number(node.attrs?.start ?? 1)
      return (
        <ol key={key} start={start !== 1 ? start : undefined}>
          {renderNodes(node.content, targets, `${key}.`)}
        </ol>
      )
    }
    case 'listItem': {
      const nested = node.content?.some((child) => child.type === 'bulletList' || child.type === 'orderedList')
      // A one-paragraph item is written without its <p>: lists stay tight.
      const single = node.content?.length === 1 && node.content[0]!.type === 'paragraph'
      return (
        <li key={key} className={nested ? styles.nested : undefined}>
          {single ? renderNodes(node.content![0]!.content, targets, `${key}.`) : renderNodes(node.content, targets, `${key}.`)}
        </li>
      )
    }
    case 'blockquote':
      return <blockquote key={key}>{renderNodes(node.content, targets, `${key}.`)}</blockquote>
    case 'horizontalRule':
      return <hr key={key} />
    default:
      return node.content ? <span key={key}>{renderNodes(node.content, targets, `${key}.`)}</span> : null
  }
}

type Props = {
  data: unknown
  className?: string
  /** "prose" = long text with spacing and headings; "inline" = short texts in components. */
  variant?: 'prose' | 'inline'
}

/** Renders the rich text of the admin (Tiptap JSON) as clean, semantic HTML, with zero JavaScript. */
export async function RichText({ data, className, variant = 'inline' }: Props) {
  if (!isDoc(data) || !data.content?.length) return null
  const targets = await getLinkTargets()
  return (
    <div className={[variant === 'prose' ? styles.prose : styles.inline, className].filter(Boolean).join(' ')}>
      {renderNodes(data.content, targets)}
    </div>
  )
}
