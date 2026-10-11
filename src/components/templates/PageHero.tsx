import Link from 'next/link'

import { AccentTitle } from '@/components/ui/AccentTitle'
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs'
import { ButtonGroup, CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media, isMedia } from '@/components/ui/Media'
import { RichText } from '@/components/rich-text/RichText'
import { resolveLink, type ResolvedLink } from '@/lib/links'
import type { Commune, Company, Page, Project } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

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
  /** Buttons computed by a template (project page) instead of the hero fields. */
  actions?: { primary?: ResolvedLink | null; secondary?: ResolvedLink | null }
  /** Rich chapô already rendered (articles use plain text). */
  lead?: React.ReactNode
  /** Home: the largest title size. */
  display?: boolean
  /** Label of the card « Chantier · commune » (site texts). */
  highlightLabel?: string
  highlightLink?: string
}

const isProject = (value: unknown): value is Project =>
  Boolean(value && typeof value === 'object' && 'slug' in value)

/**
 * The top of every page: breadcrumb, H1 with words in green, text, two
 * buttons, the proofs in a hairline row, and real chantier photos: a large one,
 * a smaller one overlapping it and, if chosen, a card leading to a chantier.
 * Topographic contour lines (the Hautes-Alpes relief) sit behind.
 */
export function PageHero({
  hero,
  company,
  breadcrumbs,
  tags,
  meta,
  actions,
  lead,
  display,
  highlightLabel = 'Chantier',
  highlightLink = 'Voir les travaux',
}: Props) {
  const images = (hero.images ?? []).filter(isMedia)
  const variant =
    hero.variant === 'simple' || images.length === 0
      ? 'simple'
      : hero.variant === 'photo' || images.length === 1
        ? 'photo'
        : 'collage'
  const primary = actions ? (actions.primary ?? null) : resolveLink(hero.primaryCta, company)
  const secondary = actions ? (actions.secondary ?? null) : resolveLink(hero.secondaryCta, company)
  const highlight = variant === 'collage' && isProject(hero.highlight) ? hero.highlight : null
  const highlightHref = highlight ? pathFor('projects', highlight) : null
  const highlightPlace = highlight
    ? highlight.locality ||
      (typeof highlight.commune === 'object' ? (highlight.commune as Commune | null)?.name : null)
    : null

  return (
    <section className={`${styles.hero} ${styles[variant]}`} aria-labelledby="titre-page">
      <div className={styles.topo} aria-hidden="true" />
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
          {hero.kicker ? <p className="kicker">{hero.kicker}</p> : null}
          <AccentTitle
            as="h1"
            id="titre-page"
            title={hero.title}
            accent={hero.titleAccent}
            className={`${styles.title} ${display ? styles.display : ''}`}
          />
          {hero.text ? <RichText data={hero.text} className={styles.text} /> : null}
          {lead ? <div className={styles.text}>{lead}</div> : null}
          {meta ? <div className={styles.meta}>{meta}</div> : null}
          {primary || secondary ? (
            <ButtonGroup className={styles.actions}>
              <CmsLink link={primary} variant="primary" arrow={primary?.kind !== 'phone'} />
              <CmsLink link={secondary} variant="outline" arrow={secondary?.kind !== 'phone'} />
            </ButtonGroup>
          ) : null}
          {hero.proofs?.length ? (
            <ul className={styles.proofs}>
              {hero.proofs.map((proof) => (
                <li key={proof.label}>
                  <span className={styles.proofIcon}>
                    <Icon name={proof.icon} size={18} />
                  </span>
                  <span className={styles.proofCopy}>
                    <strong>{proof.label}</strong>
                    {proof.text ? <span>{proof.text}</span> : null}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {variant !== 'simple' ? (
          <figure className={styles.visual}>
            <div className={styles.stage}>
              <div className={styles.main}>
                <Media
                  media={images[0]}
                  fill
                  priority
                  sizes="(min-width: 1080px) 560px, (min-width: 700px) 80vw, 92vw"
                  quality={82}
                />
              </div>
              {variant === 'collage' && images[1] ? (
                <div className={styles.second}>
                  <Media media={images[1]} fill sizes="(min-width: 1080px) 260px, 42vw" />
                </div>
              ) : null}
              {variant === 'collage' && !highlight && images[2] ? (
                <div className={styles.third}>
                  <Media media={images[2]} fill sizes="(min-width: 1080px) 220px, 36vw" />
                </div>
              ) : null}
            </div>
            {highlight && highlightHref ? (
              <Link href={highlightHref} className={styles.float}>
                <span className={styles.floatLabel}>
                  {highlightLabel}
                  {highlightPlace ? ` · ${highlightPlace}` : ''}
                </span>
                <span className={styles.floatTitle}>{highlight.shortTitle || highlight.title}</span>
                <span className={styles.floatLink}>
                  {highlightLink}
                  <Icon name="arrowRight" size={14} />
                </span>
              </Link>
            ) : null}
            {hero.caption ? (
              <figcaption className={styles.caption}>{hero.caption}</figcaption>
            ) : null}
          </figure>
        ) : null}
      </div>
    </section>
  )
}
