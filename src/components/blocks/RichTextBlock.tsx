import { Section } from '@/components/ui/Section'
import { RichText } from '@/components/rich-text/RichText'
import { extractHeadings } from '@/lib/richtext'
import type { RichTextBlock as Data } from '@/payload-types'

import styles from './RichTextBlock.module.css'
import type { BlockProps } from './types'

export function RichTextBlock({ block }: BlockProps<Data>) {
  const headings = block.showToc ? extractHeadings(block.content as never) : []
  return (
    <Section tone={block.tone} anchor={block.anchor} spacing="tight" narrow>
      {headings.length > 1 ? (
        <nav aria-label="Sommaire" className={styles.toc}>
          <ol>
            {headings.map((heading) => (
              <li key={heading.id}>
                <a href={`#${heading.id}`}>{heading.text}</a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      <div className={block.boxed ? styles.boxed : undefined}>
        <RichText data={block.content} variant="prose" />
      </div>
    </Section>
  )
}
