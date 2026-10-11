import type { ElementType, ReactNode } from 'react'

import { splitAccent } from '@/lib/links'

type Props = {
  as?: ElementType
  title: string
  accent?: string | null
  className?: string
  id?: string
}

/** Titles longer than this get a slightly smaller size (data-length="long"), so they keep to a few lines. */
const LONG_TITLE = 60

/**
 * Keeps hyphenated names together on wide screens ("L'Argentière-la-Bessée",
 * "Hautes-Alpes"), instead of breaking them after a hyphen.
 */
function keepNames(text: string, keyPrefix: string): ReactNode[] {
  return text.split(/(\S+-\S+)/).map((part, index) =>
    index % 2 ? (
      <span key={`${keyPrefix}-${index}`} className="keep-together">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

/** A heading whose "mots en vert" are highlighted (sage on dark grounds, via CSS). */
export function AccentTitle({ as: Tag = 'h2', title, accent, className, id }: Props) {
  return (
    <Tag className={className} id={id} data-length={title.length > LONG_TITLE ? 'long' : undefined}>
      {splitAccent(title, accent).map((part, index) =>
        part.accent ? (
          <em key={index} className="accent">
            {keepNames(part.text, String(index))}
          </em>
        ) : (
          keepNames(part.text, String(index))
        ),
      )}
    </Tag>
  )
}
