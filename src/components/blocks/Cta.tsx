import { ButtonGroup, CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media, isMedia } from '@/components/ui/Media'
import { AccentTitle } from '@/components/ui/AccentTitle'
import { RichText } from '@/components/rich-text/RichText'
import { groupedHours } from '@/lib/hours'
import { phoneToE164, resolveLink } from '@/lib/links'
import type { CtaBlock as Data } from '@/payload-types'

import { Decor } from './Decor'
import styles from './Cta.module.css'
import type { BlockProps } from './types'

/**
 * Call to action. « Bandeau » and « Carte »: a rounded forest panel, the
 * invitation on the left, on the right the phone number and the opening hours
 * (from the « Entreprise » settings) or a photo. « Discret »: a pale sage line
 * with an icon, a sentence and a button.
 */
export function Cta({ block, context }: BlockProps<Data>) {
  const variant = block.variant ?? 'band'
  const primary = resolveLink(block.primary, context.company)
  const secondary = resolveLink(block.secondary, context.company)
  const image = isMedia(block.image) ? block.image : null
  const { company, texts } = context
  const { address } = company

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
              {block.text ? <RichText data={block.text} className={styles.slimText} /> : null}
            </div>
            <ButtonGroup>
              <CmsLink link={primary} variant="primary" arrow={primary?.kind !== 'phone'} />
              <CmsLink link={secondary} variant="outline" arrow={secondary?.kind !== 'phone'} />
            </ButtonGroup>
          </div>
        </div>
      </section>
    )
  }

  const showCard = !image && Boolean(company.phone)
  // The card already carries the phone number: no second phone button.
  const second = showCard && secondary?.kind === 'phone' ? null : secondary
  const hours = showCard ? groupedHours(company.hours).filter((group) => !group.closed) : []

  const content = (
    <div className={styles.inner}>
      <div className={styles.copy}>
        {block.badge ? <span className={styles.badge}>{block.badge}</span> : null}
        {block.kicker ? <p className={`kicker ${styles.kicker}`}>{block.kicker}</p> : null}
        {block.title ? <AccentTitle as="h2" title={block.title} accent={block.titleAccent} className={styles.title} /> : null}
        {block.text ? <RichText data={block.text} className={styles.text} /> : null}
        <ButtonGroup className={styles.actions}>
          <CmsLink link={primary} variant="light" arrow={primary?.kind !== 'phone'} />
          <CmsLink link={second} variant="outlineLight" arrow={second?.kind !== 'phone'} />
        </ButtonGroup>
        {block.showAddress && !showCard ? (
          <p className={styles.address}>
            {company.name}, {address.street}, {address.postalCode} {address.city}
          </p>
        ) : null}
      </div>
      {showCard ? (
        <div className={styles.contact}>
          <p className={styles.cardLabel}>{texts.general.headerPhoneLabel}</p>
          <a className={styles.phone} href={`tel:${phoneToE164(company.phone)}`} data-track="Clic téléphone">
            {company.phone}
          </a>
          {hours.length ? (
            <ul className={styles.hours}>
              {hours.map((group) => (
                <li key={group.days}>
                  {group.days} · {group.hours}
                </li>
              ))}
            </ul>
          ) : null}
          <p className={styles.cardAddress}>
            {address.street}, {address.postalCode} {address.city}
          </p>
        </div>
      ) : image ? (
        <div className={styles.image}>
          <Media media={image} fill sizes="(min-width: 1000px) 460px, 92vw" />
        </div>
      ) : null}
    </div>
  )

  // « Bandeau » and « Carte » share the same rounded forest panel; the wood rings mark 3B Récup'.
  return (
    <section id={block.anchor || undefined} className={styles.wrap} data-tone="forest">
      <div className="container">
        <div className={styles.panel} data-reveal="">
          {block.badge ? <Decor /> : null}
          {content}
        </div>
      </div>
    </section>
  )
}
