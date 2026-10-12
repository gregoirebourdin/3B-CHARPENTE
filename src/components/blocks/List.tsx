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

type Item = NonNullable<Data['items']>[number]

/**
 * Short lines instead of a paragraph: green checks, bullets, numbers, link
 * chips, or terms with a one-line explanation. With a text or a photo, the
 * heading, text and photo stay on the left and the list runs on the right.
 */
export function List({ block, context }: BlockProps<Data>) {
  const style = block.style ?? 'checks'
  const cta = resolveLink(block.cta, context.company)
  const image = isMedia(block.image) ? block.image : null
  const items = block.items ?? []
  const title = (item: Item) => (item.title ? fillTokens(item.title, context.company) : '')

  // Short terms (years, « Ensuite », « Puis ») read as a frieze, like steps.
  const frieze = style === 'definitions' && items.length > 1 && items.every((item) => title(item).length <= 12)

  let list
  if (style === 'pills') {
    list = (
      <ul className={styles.pills}>
        {items.map((item, index) => {
          const link = resolveLink(item.link, context.company)
          const label = title(item) || link?.label
          return (
            <li key={item.id ?? index}>
              {link ? (
                <CmsLink link={link} className={styles.pill} arrow>
                  {label}
                </CmsLink>
              ) : (
                <span className={styles.pill}>{label}</span>
              )}
            </li>
          )
        })}
      </ul>
    )
  } else if (style === 'definitions') {
    list = (
      <dl className={frieze ? styles.frieze : styles.defs} data-count={items.length}>
        {items.map((item, index) => {
          const link = resolveLink(item.link, context.company)
          return (
            <div key={item.id ?? index} className={styles.def} data-reveal="">
              <dt className={styles.term} data-year={/^\d{4}$/.test(title(item)) ? '' : undefined}>
                {title(item)}
              </dt>
              <dd className={styles.definition}>
                {item.text ? <RichText data={item.text} /> : null}
                {link ? (
                  <CmsLink link={link} className={styles.link} arrow>
                    {link.label}
                  </CmsLink>
                ) : null}
              </dd>
            </div>
          )
        })}
      </dl>
    )
  } else {
    const Tag = style === 'numbered' ? 'ol' : 'ul'
    list = (
      <Tag className={`${styles.list} ${styles[style]}`} data-many={items.length > 4 && !image && !block.text ? '' : undefined}>
        {items.map((item, index) => {
          const link = resolveLink(item.link, context.company)
          const titleIsLink = Boolean(link && item.title) && link!.label.trim().toLowerCase() === item.title!.trim().toLowerCase()
          return (
            <li key={item.id ?? index} className={styles.item}>
              <span className={styles.mark} aria-hidden="true">
                {style === 'checks' ? <Icon name="check" size={15} /> : style === 'numbered' ? String(index + 1).padStart(2, '0') : null}
              </span>
              <div className={styles.itemBody}>
                {item.title ? (
                  titleIsLink ? (
                    <CmsLink link={link} className={`${styles.itemTitle} ${styles.titleLink}`} arrow>
                      {title(item)}
                    </CmsLink>
                  ) : (
                    <strong className={styles.itemTitle}>{title(item)}</strong>
                  )
                ) : null}
                {item.text ? <RichText data={item.text} className={styles.itemText} /> : null}
                {link && !titleIsLink ? (
                  <CmsLink link={link} className={styles.link} arrow>
                    {link.label}
                  </CmsLink>
                ) : null}
              </div>
            </li>
          )
        })}
      </Tag>
    )
  }

  const heading = (
    <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} className={styles.heading} />
  )
  const footer = cta ? (
    <div className={styles.cta}>
      <CmsLink link={cta} variant="outline" arrow />
    </div>
  ) : null

  // « Voir aussi » chips with only a kicker: one compact line.
  if (style === 'pills' && !block.title && !block.intro && !block.text && !cta) {
    return (
      <Section tone={block.tone} anchor={block.anchor} spacing="tight">
        <div className={styles.pillRow} data-reveal="">
          {block.kicker ? <p className="kicker">{block.kicker}</p> : null}
          {list}
        </div>
      </Section>
    )
  }

  // A frieze, chips or a bare list: the heading above, the list across the page.
  if (frieze || style === 'pills' || (!image && !block.text)) {
    return (
      <Section tone={block.tone} anchor={block.anchor}>
        {block.kicker || block.title || block.intro ? heading : null}
        {block.text ? <RichText data={block.text} className={styles.lead} /> : null}
        <div className={block.inCard ? styles.card : undefined} data-reveal="">
          {list}
        </div>
        {footer}
      </Section>
    )
  }

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <div className={styles.split}>
        <div className={styles.aside}>
          {heading}
          {block.text ? <RichText data={block.text} className={styles.text} /> : null}
          {image ? (
            <figure className={styles.figure} data-reveal="">
              <div className={styles.photo}>
                <Media media={image} fill sizes="(min-width: 1000px) 460px, 92vw" />
              </div>
              {block.caption ? <figcaption>{block.caption}</figcaption> : null}
            </figure>
          ) : null}
        </div>
        <div className={styles.main}>
          <div className={block.inCard ? styles.card : undefined} data-reveal="">
            {list}
          </div>
          {footer}
        </div>
      </div>
    </Section>
  )
}
