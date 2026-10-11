import Link from 'next/link'

import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RichText } from '@/components/rich-text/RichText'
import { getCommunes } from '@/lib/cms/queries'
import { resolveLink } from '@/lib/links'
import type { ServiceAreaBlock as Data } from '@/payload-types'

import { AreaMap } from './AreaMap'
import styles from './ServiceArea.module.css'
import type { BlockProps } from './types'

export async function ServiceArea({ block, context }: BlockProps<Data>) {
  const communes = block.showMap ? await getCommunes() : []
  const hasMap = Boolean(block.showMap && communes.length)
  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <div className={hasMap ? styles.grid : undefined}>
        <div className={styles.copy}>
          <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} className={styles.heading} />
          {block.text ? <RichText data={block.text} className={styles.text} /> : null}
          {block.sectors?.length ? (
            <ul className={styles.sectors}>
              {block.sectors.map((sector, index) => {
                const link = resolveLink(sector.link, context.company)
                return (
                  <li key={sector.id ?? index} className={styles.sector} data-reveal="">
                    <span className={styles.pin}>
                      <Icon name="mapPin" size={16} />
                    </span>
                    <div className={styles.sectorBody}>
                      <h3 className={styles.sectorTitle}>
                        {link ? (
                          <Link href={link.href} className={styles.stretched}>
                            {sector.title}
                          </Link>
                        ) : (
                          sector.title
                        )}
                      </h3>
                      {sector.text ? <p className={styles.sectorText}>{sector.text}</p> : null}
                    </div>
                    {link ? <Icon name="arrowRight" size={18} className={styles.arrow} /> : null}
                  </li>
                )
              })}
            </ul>
          ) : null}
        </div>
        {hasMap ? (
          <div data-reveal="">
            <AreaMap communes={communes} company={context.company} />
          </div>
        ) : null}
      </div>
    </Section>
  )
}
