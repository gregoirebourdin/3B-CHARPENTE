import Link from 'next/link'

import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media } from '@/components/ui/Media'
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
 * chosen by hand). "Complet": an editorial numbered index, a photo of the
 * service peeks out on hover. "Compact": small cards (other services).
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
        layout={compact ? 'stack' : 'split'}
      />
      {compact ? (
        <ul className={styles.compact}>
          {visible.map((service, index) => (
            <li
              key={service.id}
              className={styles.card}
              data-reveal=""
              style={{ ['--reveal-delay' as string]: `${(index % 3) * 80}ms` }}
            >
              <div className={styles.cardPhoto}>
                {service.image ? (
                  <Media
                    media={service.image}
                    fill
                    sizes="(min-width: 1100px) 400px, (min-width: 700px) 45vw, 40vw"
                  />
                ) : (
                  <span className={styles.icon}>
                    <Icon name={service.icon} size={26} />
                  </span>
                )}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>
                  <Link href={pathFor('services', service) ?? '/'} className={styles.stretched}>
                    {service.cardTitle || service.title}
                  </Link>
                </h3>
                {service.cardText ? <p className={styles.cardText}>{service.cardText}</p> : null}
                <span className={styles.cardMore} aria-hidden="true">
                  {service.cardLinkLabel || context.texts.general.serviceCardLink}
                  <Icon name="arrowRight" size={16} />
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ol className={styles.index}>
          {visible.map((service, index) => (
            <li
              key={service.id}
              data-reveal=""
              style={{ ['--reveal-delay' as string]: `${Math.min(index, 4) * 50}ms` }}
            >
              <Link href={pathFor('services', service) ?? '/'} className={styles.row}>
                <span className={styles.num} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.title}>{service.cardTitle || service.title}</h3>
                {service.cardText ? <p className={styles.text}>{service.cardText}</p> : null}
                <span className={styles.go} aria-hidden="true">
                  <Icon name="arrowRight" size={18} />
                </span>
                <Media media={service.image} alt="" sizes="220px" className={styles.peek} />
              </Link>
            </li>
          ))}
        </ol>
      )}
      {cta ? (
        <div className={styles.cta}>
          <CmsLink link={cta} variant="outline" arrow />
        </div>
      ) : null}
    </Section>
  )
}
