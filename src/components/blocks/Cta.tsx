import { ButtonGroup, CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media, isMedia } from '@/components/ui/Media'
import { AccentTitle } from '@/components/ui/AccentTitle'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink } from '@/lib/links'
import type { CtaBlock as Data } from '@/payload-types'

import { Decor } from './Decor'
import styles from './Cta.module.css'
import type { BlockProps } from './types'

export function Cta({ block, context }: BlockProps<Data>) {
  const variant = block.variant ?? 'band'
  const primary = resolveLink(block.primary, context.company)
  const secondary = resolveLink(block.secondary, context.company)
  const image = isMedia(block.image) ? block.image : null
  const { address } = context.company

  if (variant === 'slim') {
    return (
      <section id={block.anchor || undefined} className={styles.slimWrap}>
        <div className="container">
          <div className={styles.slim} data-reveal="">
            {block.icon ? (
              <span className={styles.slimIcon}>
                <Icon name={block.icon} size={24} />
              </span>
            ) : null}
            <div className={styles.slimBody}>
              {block.title ? <AccentTitle as="h2" title={block.title} accent={block.titleAccent} className={styles.slimTitle} /> : null}
              {block.text ? <RichText data={block.text} /> : null}
            </div>
            <ButtonGroup>
              <CmsLink link={primary} variant="primary" />
              <CmsLink link={secondary} variant="outline" />
            </ButtonGroup>
          </div>
        </div>
      </section>
    )
  }

  const content = (
    <div className={`${styles.inner} ${image ? styles.withImage : ''}`}>
      <div className={styles.copy}>
        {block.badge ? <span className={styles.badge}>{block.badge}</span> : null}
        {block.kicker ? <p className={styles.kicker}>{block.kicker}</p> : null}
        {block.title ? <AccentTitle as="h2" title={block.title} accent={block.titleAccent} className={styles.title} /> : null}
        {block.text ? <RichText data={block.text} className={styles.text} /> : null}
        <ButtonGroup className={styles.actions}>
          <CmsLink link={primary} variant="light" size="large" arrow />
          <CmsLink link={secondary} variant="outlineLight" size="large" />
        </ButtonGroup>
        {block.showAddress ? (
          <p className={styles.address}>
            {context.company.name}, {address.street}, {address.postalCode} {address.city}
          </p>
        ) : null}
      </div>
      {image ? (
        <div className={styles.image}>
          <Media media={image} sizes="(min-width: 1000px) 460px, 92vw" />
        </div>
      ) : null}
    </div>
  )

  return (
    <section id={block.anchor || undefined} className={`${styles.wrap} ${styles[variant]}`}>
      {variant === 'card' ? (
        <div className="container">
          <div className={styles.panel} data-reveal="">
            <Decor />
            {content}
          </div>
        </div>
      ) : (
        <div className={styles.panel}>
          <Decor />
          <div className="container" data-reveal="">
            {content}
          </div>
        </div>
      )}
    </section>
  )
}
