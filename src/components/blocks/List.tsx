import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media, isMedia } from '@/components/ui/Media'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RichText } from '@/components/rich-text/RichText'
import { fillTokens, resolveLink } from '@/lib/links'
import type { ListBlock as Data } from '@/payload-types'

import styles from './List.module.css'
import type { BlockProps } from './types'

export function List({ block, context }: BlockProps<Data>) {
  const style = block.style ?? 'checks'
  const cta = resolveLink(block.cta, context.company)
  const image = isMedia(block.image) ? block.image : null
  const Tag = style === 'numbered' ? 'ol' : 'ul'

  const list = (
    <Tag className={`${styles.list} ${styles[style]}`}>
      {(block.items ?? []).map((item, index) => {
        const link = resolveLink(item.link, context.company)
        return (
          <li key={item.id ?? index} className={styles.item}>
            {style === 'checks' ? (
              <span className={styles.check}>
                <Icon name="check" size={16} />
              </span>
            ) : null}
            {style === 'numbered' ? <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span> : null}
            <div className={styles.itemBody}>
              {item.title ? (
                style === 'definitions' ? (
                  <h3 className={styles.term}>{fillTokens(item.title, context.company)}</h3>
                ) : (
                  <strong className={styles.itemTitle}>{fillTokens(item.title, context.company)}</strong>
                )
              ) : null}
              {item.text ? <RichText data={item.text} /> : null}
              {link ? (
                <CmsLink link={link} className={`${styles.link} link-underline`}>
                  {link.label}
                  <Icon name="arrowRight" size={16} />
                </CmsLink>
              ) : null}
            </div>
          </li>
        )
      })}
    </Tag>
  )

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <div className={image ? styles.withImage : undefined}>
        <div className={styles.main}>
          <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} />
          <div className={block.inCard ? styles.card : undefined} data-reveal="">
            {block.text ? <RichText data={block.text} className={styles.text} /> : null}
            {list}
          </div>
          {cta ? (
            <div className={styles.cta}>
              <CmsLink link={cta} variant="outline" arrow />
            </div>
          ) : null}
        </div>
        {image ? (
          <figure className={styles.figure} data-reveal="">
            <Media media={image} sizes="(min-width: 1000px) 480px, 92vw" />
            {block.caption ? <figcaption>{block.caption}</figcaption> : null}
          </figure>
        ) : null}
      </div>
    </Section>
  )
}
