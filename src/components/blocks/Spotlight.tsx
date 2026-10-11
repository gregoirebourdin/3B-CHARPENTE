import { AccentTitle } from '@/components/ui/AccentTitle'
import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media, isMedia } from '@/components/ui/Media'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink } from '@/lib/links'
import type { SpotlightBlock as Data } from '@/payload-types'

import { Decor } from './Decor'
import styles from './Spotlight.module.css'
import type { BlockProps } from './types'

/** The 3B Récup' highlight of the home page: forest band, photos, five short steps, links. */
export function Spotlight({ block, context }: BlockProps<Data>) {
  const images = (block.images ?? []).filter(isMedia)
  const primary = resolveLink(block.primary, context.company)
  const links = (block.links ?? []).map((item) => resolveLink(item.link, context.company)).filter(Boolean)

  return (
    <section id={block.anchor || undefined} className={styles.wrap}>
      <div className="container">
        <div className={styles.panel} data-reveal="">
          <Decor grid={false} />
          <div className={styles.rings} aria-hidden="true" />
          <div className={styles.grid}>
            {images.length ? (
              <div className={styles.visual}>
                <div className={styles.main}>
                  <Media media={images[0]} sizes="(min-width: 1000px) 460px, 86vw" />
                </div>
                {images.slice(1, 3).map((image, index) => (
                  <div key={image.id} className={`${styles.thumb} ${index ? styles.thumbB : styles.thumbA}`}>
                    <Media media={image} sizes="(min-width: 1000px) 220px, 40vw" />
                  </div>
                ))}
              </div>
            ) : null}
            <div className={styles.copy}>
              {block.badge ? <span className={styles.badge}>{block.badge}</span> : null}
              {block.kicker ? <p className={styles.kicker}>{block.kicker}</p> : null}
              {block.title ? <AccentTitle as="h2" title={block.title} accent={block.titleAccent} className={styles.title} /> : null}
              {block.text ? <RichText data={block.text} className={styles.text} /> : null}
              {block.steps?.length ? (
                <ol className={styles.steps}>
                  {block.steps.map((step, index) => (
                    <li key={step.id ?? index}>
                      <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                      <p>
                        <strong>{step.title}</strong> {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : null}
              <div className={styles.actions}>
                <CmsLink link={primary} variant="light" size="large" arrow />
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
          </div>
        </div>
      </div>
    </section>
  )
}
