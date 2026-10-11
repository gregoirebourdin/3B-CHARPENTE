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

/** Service cards: built automatically from the "Prestations" collection, or chosen by hand. */
export async function ServicesGrid({ block, context }: BlockProps<Data>) {
  const all = await getServices()
  const services =
    block.mode === 'manual'
      ? (block.services ?? [])
          .map((item) => all.find((service) => service.id === (typeof item === 'object' ? item.id : item)))
          .filter((service): service is Service => Boolean(service))
      : all
  const current = context.path
  const visible = services.filter((service) => pathFor('services', service) !== current)
  if (!visible.length) return null
  const cta = resolveLink(block.cta, context.company)
  const compact = block.variant === 'compact'

  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} />
      <ul className={`${styles.grid} ${compact ? styles.compact : styles.full}`}>
        {visible.map((service, index) => {
          const href = pathFor('services', service) ?? '/'
          return (
            <li
              key={service.id}
              className={styles.card}
              data-reveal=""
              style={{ ['--reveal-delay' as string]: `${(index % 3) * 80}ms` }}
            >
              <span className={styles.icon}>
                <Icon name={service.icon} size={compact ? 22 : 26} />
              </span>
              <div className={styles.body}>
                <h3 className={styles.title}>
                  <Link href={href} className={styles.stretched}>
                    {compact ? service.title : service.cardTitle || service.title}
                  </Link>
                </h3>
                {!compact ? <p className={styles.text}>{service.cardText}</p> : null}
                <span className={styles.more} aria-hidden="true">
                  {compact ? null : service.cardLinkLabel || context.texts.general.serviceCardLink}
                  <Icon name="arrowRight" size={16} />
                </span>
              </div>
            </li>
          )
        })}
      </ul>
      {cta ? (
        <div className={styles.cta}>
          <CmsLink link={cta} variant="outline" arrow />
        </div>
      ) : null}
    </Section>
  )
}
