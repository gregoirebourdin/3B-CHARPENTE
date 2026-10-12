import { AccentTitle } from '@/components/ui/AccentTitle'
import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media, isMedia } from '@/components/ui/Media'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink } from '@/lib/links'
import type { SpotlightBlock as Data } from '@/payload-types'

import styles from './Spotlight.module.css'
import type { BlockProps } from './types'

/**
 * The 3B Récup' highlight: a forest panel signed by the wood rings, the text
 * and its short steps (green checks) on the left, a mosaic of real
 * reclaimed-wood chantiers on the right.
 */
export function Spotlight({ block, context }: BlockProps<Data>) {
  const images = (block.images ?? []).filter(isMedia)
  const primary = resolveLink(block.primary, context.company)
  const links = (block.links ?? []).map((item) => resolveLink(item.link, context.company)).filter(Boolean)

  return (
    <section id={block.anchor || undefined} className={styles.wrap} data-tone="forest">
      <div className="container">
        <div className={styles.panel} data-reveal="">
          <div className={styles.rings} aria-hidden="true" />
          <div className={styles.grid}>
            <div className={styles.copy}>
              {block.kicker || block.badge ? <p className="kicker">{[block.badge, block.kicker].filter(Boolean).join(' · ')}</p> : null}
              {block.title ? <AccentTitle as="h2" title={block.title} accent={block.titleAccent} className={styles.title} /> : null}
              {block.text ? <RichText data={block.text} className={styles.text} /> : null}
              {block.steps?.length ? (
                <ol className={styles.steps}>
                  {block.steps.map((step, index) => (
                    <li key={step.id ?? index}>
                      <span className={styles.check} aria-hidden="true">
                        <Icon name="check" size={14} />
                      </span>
                      <p>
                        <strong>{step.title}</strong> : {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : null}
              <div className={styles.actions}>
                <CmsLink link={primary} variant="light" arrow />
                {links.length ? (
                  <ul className={styles.links}>
                    {links.map((link) => (
                      <li key={link!.href}>
                        <CmsLink link={link} className={styles.link}>
                          {link!.label}
                        </CmsLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            {images.length ? (
              <div className={styles.mosaic} data-count={Math.min(images.length, 3)}>
                {images.slice(0, 3).map((image, index) => (
                  <figure key={image.id} className={styles.photo}>
                    <Media media={image} fill sizes={index === 0 ? '(min-width: 1000px) 280px, 50vw' : '(min-width: 1000px) 240px, 40vw'} />
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
