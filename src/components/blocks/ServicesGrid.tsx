import Link from 'next/link'

import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getServices } from '@/lib/cms/queries'
import { resolveLink } from '@/lib/links'
import type { Service, ServicesGridBlock as Data } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

import styles from './ServicesGrid.module.css'
import type { BlockProps } from './types'

/**
 * The services, built automatically from the "Prestations" collection (or
 * chosen by hand). "Complet": a grid of clickable cards with the service's
 * icon. "Compact": a row of links (the other services, under a page).
 */
export async function ServicesGrid({ block, context }: BlockProps<Data>) {
  const all = await getServices()
  const services =
    block.mode === 'manual'
      ? (block.services ?? [])
          .map((item) =>
            all.find((service) => service.id === (typeof item === 'object' ? item.id : item)),
          )
          .filter((service): service is Service => Boolean(service))
      : all
  const current = context.path
  const visible = services.filter((service) => pathFor('services', service) !== current)
  if (!visible.length) return null
  const cta = resolveLink(block.cta, context.company)
  const compact = block.variant === 'compact'

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading
        kicker={block.kicker}
        title={block.title}
        accent={block.titleAccent}
        intro={block.intro}
        layout="split"
        actions={cta ? <CmsLink link={cta} variant="outline" arrow /> : undefined}
      />
      {compact ? (
        <ul className={styles.rows}>
          {visible.map((service) => (
            <li key={service.id} data-reveal="">
              <Link href={pathFor('services', service) ?? '/'} className={styles.row}>
                <span className={styles.rowCopy}>
                  <span className={styles.rowTitle}>{service.cardTitle || service.title}</span>
                  {service.cardText ? <span className={styles.rowText}>{service.cardText}</span> : null}
                </span>
                <span className={styles.rowGo} aria-hidden="true">
                  <Icon name="arrowRight" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={styles.grid}>
          {visible.map((service, index) => (
            <li
              key={service.id}
              className={styles.card}
              data-reveal=""
              style={{ ['--reveal-delay' as string]: `${(index % 3) * 60}ms` }}
            >
              <span className={styles.icon}>
                <Icon name={service.icon} size={24} />
              </span>
              <h3 className={styles.title}>
                <Link href={pathFor('services', service) ?? '/'} className={styles.stretched}>
                  {service.cardTitle || service.title}
                </Link>
              </h3>
              {service.cardText ? <p className={styles.text}>{service.cardText}</p> : null}
              <span className={styles.go} aria-hidden="true">
                {context.texts.general.serviceCardLink}
                <Icon name="arrowRight" size={16} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
