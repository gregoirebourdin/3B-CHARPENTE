import { AccentTitle } from '@/components/ui/AccentTitle'
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs'
import { ButtonGroup, CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media, isMedia } from '@/components/ui/Media'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink } from '@/lib/links'
import type { Company, Page } from '@/payload-types'

import styles from './PageHero.module.css'

type Hero = Page['hero']

type Props = {
  hero: Hero
  company: Company
  breadcrumbs?: Crumb[]
  /** Tags shown as sage pills above the title (projects). */
  tags?: string[]
  /** Extra line under the text (article author/date…). */
  meta?: React.ReactNode
}

/**
 * The top of every page: breadcrumb, H1 with words in green, text, two
 * buttons, two proofs and a collage of real chantier photos that overflow.
 */
export function PageHero({ hero, company, breadcrumbs, tags, meta }: Props) {
  const images = (hero.images ?? []).filter(isMedia)
  const variant = hero.variant === 'simple' || images.length === 0 ? 'simple' : hero.variant === 'photo' || images.length === 1 ? 'photo' : 'collage'
  const primary = resolveLink(hero.primaryCta, company)
  const secondary = resolveLink(hero.secondaryCta, company)

  return (
    <section className={`${styles.hero} ${styles[variant]}`} aria-labelledby="titre-page">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          {tags?.length ? (
            <ul className={styles.tags} aria-label="Étiquettes">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
          {hero.kicker ? <p className={styles.kicker}>{hero.kicker}</p> : null}
          <AccentTitle as="h1" id="titre-page" title={hero.title} accent={hero.titleAccent} className={styles.title} />
          {hero.text ? <RichText data={hero.text} className={styles.text} /> : null}
          {meta ? <div className={styles.meta}>{meta}</div> : null}
          {primary || secondary ? (
            <ButtonGroup className={styles.actions}>
              <CmsLink link={primary} variant="primary" size="large" />
              <CmsLink link={secondary} variant="outline" size="large" />
            </ButtonGroup>
          ) : null}
          {hero.proofs?.length ? (
            <ul className={styles.proofs}>
              {hero.proofs.map((proof) => (
                <li key={proof.label}>
                  <span className={styles.proofIcon}>
                    <Icon name={proof.icon} size={20} />
                  </span>
                  <span className={styles.proofLabel}>{proof.label}</span>
                  {proof.text ? <span className={styles.proofText}>{proof.text}</span> : null}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {variant !== 'simple' ? (
          <figure className={styles.visual}>
            <div className={styles.main}>
              <Media media={images[0]} priority sizes="(min-width: 1080px) 560px, (min-width: 700px) 70vw, 92vw" quality={82} />
            </div>
            {variant === 'collage'
              ? images.slice(1, 3).map((image, index) => (
                  <div key={image.id} className={`${styles.thumb} ${index === 0 ? styles.thumbA : styles.thumbB}`}>
                    <Media media={image} sizes="(min-width: 1080px) 280px, 42vw" />
                  </div>
                ))
              : null}
            {hero.caption ? <figcaption className={styles.caption}>{hero.caption}</figcaption> : null}
          </figure>
        ) : null}
      </div>
    </section>
  )
}
