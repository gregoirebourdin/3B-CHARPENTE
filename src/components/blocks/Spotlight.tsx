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
 * on the left; on the right a collage of real reclaimed-wood chantiers and the
 * five steps between hairlines.
 */
export function Spotlight({ block, context }: BlockProps<Data>) {
  const images = (block.images ?? []).filter(isMedia)
  const primary = resolveLink(block.primary, context.company)
  const links = (block.links ?? []).map((item) => resolveLink(item.link, context.company)).filter(Boolean)

  return (
    <section id={block.anchor || undefined} className={styles.wrap}>
      <div className="container">
        <div className={styles.panel} data-reveal="">
          <div className={styles.rings} aria-hidden="true" />
          <div className={styles.grid}>
            <div className={styles.copy}>
              {block.badge ? <span className={styles.badge}>{block.badge}</span> : null}
              {block.kicker ? (
                <p className={`kicker ${styles.kicker}`} data-numbered="">
                  {block.kicker}
                </p>
              ) : null}
              {block.title ? <AccentTitle as="h2" title={block.title} accent={block.titleAccent} className={styles.title} /> : null}
              {block.text ? <RichText data={block.text} className={styles.text} /> : null}
              <div className={styles.actions}>
                <CmsLink link={primary} variant="light" arrow />
                {links.length ? (
                  <ul className={styles.links}>
                    {links.map((link) => (
                      <li key={link!.href}>
                        <CmsLink link={link} className="link-underline">
                          {link!.label}
                          <Icon name="arrowRight" size={16} />
                        </CmsLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className={styles.side}>
              {images.length ? (
                <div className={styles.collage} data-count={Math.min(images.length, 3)}>
                  {images.slice(0, 3).map((image, index) => (
                    <figure key={image.id} className={styles.photo}>
                      <Media
                        media={image}
                        fill
                        sizes={index === 0 ? '(min-width: 1000px) 300px, 55vw' : '(min-width: 1000px) 200px, 40vw'}
                      />
                    </figure>
                  ))}
                </div>
              ) : null}
              {block.steps?.length ? (
                <ol className={styles.steps}>
                  {block.steps.map((step, index) => (
                    <li key={step.id ?? index}>
                      <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                      <p>
                        <strong>{step.title}.</strong> {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
