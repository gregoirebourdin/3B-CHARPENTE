import type { ElementType } from 'react'

import { splitAccent } from '@/lib/links'

type Props = {
  as?: ElementType
  title: string
  accent?: string | null
  className?: string
  id?: string
}

/** A heading whose "mots en vert" are highlighted (sage on dark grounds, via CSS). */
export function AccentTitle({ as: Tag = 'h2', title, accent, className, id }: Props) {
  return (
    <Tag className={className} id={id}>
      {splitAccent(title, accent).map((part, index) =>
        part.accent ? (
          <em key={index} className="accent">
            {part.text}
          </em>
        ) : (
          part.text
        ),
      )}
    </Tag>
  )
}
