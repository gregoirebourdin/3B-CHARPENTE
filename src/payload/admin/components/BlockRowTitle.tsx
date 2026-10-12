'use client'

import { Pill, useRowLabel } from '@payloadcms/ui'

type Row = Record<string, unknown>

/** First words of a rich text (Lexical) value. */
const firstText = (value: unknown): string => {
  if (!value || typeof value !== 'object') return ''
  const node = value as { text?: unknown; root?: unknown; children?: unknown[] }
  if (typeof node.text === 'string' && node.text.trim()) return node.text
  for (const child of [node.root, ...(Array.isArray(node.children) ? node.children : [])]) {
    const text = firstText(child)
    if (text) return text
  }
  return ''
}

/** What the section is about, in the editor's own words. */
const titleOf = (row: Row | undefined) => {
  if (!row) return ''
  const items = (row.items ?? row.cards ?? row.steps) as Row[] | undefined
  const candidates = [row.title, row.kicker, row.lead, typeof row.text === 'string' ? row.text : firstText(row.text), items?.[0]?.title]
  const found = candidates.find((value): value is string => typeof value === 'string' && value.trim().length > 0) ?? ''
  const plain = found.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim()
  return plain.length > 80 ? `${plain.slice(0, 79).trimEnd()}…` : plain
}

export function BlockRowTitle({ kind }: { kind: string }) {
  const { data, rowNumber = 0 } = useRowLabel<Row>()
  const title = titleOf(data)
  return (
    <span className="tb-block-label">
      <span className="blocks-field__block-number">{String(rowNumber + 1).padStart(2, '0')}</span>
      <Pill className="blocks-field__block-pill" pillStyle="white" size="small">
        {kind}
      </Pill>
      {title ? <span className="tb-block-label__title">{title}</span> : null}
    </span>
  )
}
