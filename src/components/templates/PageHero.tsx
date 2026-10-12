import Link from 'next/link'
import type { ReactNode } from 'react'

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
type Proof = { label: string; text?: string | null; icon?: string | null }

type Props = {
  hero: Hero
  company: Company
  breadcrumbs?: Crumb[]
  /** Tags shown as sage pills above the title (projects, guides). The first one may carry a pin. */
  tags?: string[]
  /** The first tag is a place: drawn with a map pin. */
  placeTag?: boolean
  /** Small line next to the tags (reading time…). */
  topline?: ReactNode
  /** Extra line under the text (article author/date…). */
  meta?: ReactNode
  /** Buttons computed by a template (project page) instead of the hero fields. */
  actions?: { primary?: ResolvedLink | null; secondary?: ResolvedLink | null }
  /** Rich chapô already rendered (articles use plain text). */
  lead?: ReactNode
  /** Home: the largest title size. */
  display?: boolean
  /** Label of the card « Chantier · commune » (site texts). */
  highlightLabel?: string
  highlightLink?: string
  /** Site-wide proofs added to the page's own, as pills (service pages). */
  extraProofs?: Proof[]
  /** @deprecated The « fiche technique » rows (hero.sheet) now sit under the hero, without a header. */
  sheet?: { label: string; number?: string; title: string }
  /** Visual of the « map » variant, built by the template (sector pages). */
  map?: ReactNode
  /** Card pinned on the photo (a guide's chantier). */
  float?: ReactNode
  /** Badge in the top right corner of the photo (« 11 photos »). */
  photoBadge?: string
  /** Pills or links under a hairline, across the whole width (topics of the guides, sections of a legal page). */
  aside?: ReactNode
  /** A landscape photo (4:3) instead of the portrait frame (guides). */
  landscape?: boolean
  /** « wide »: the title over the whole width, the photo and `children` underneath (a chantier's carnet). */
  layout?: 'default' | 'wide'
  children?: ReactNode
}

const isProject = (value: unknown): value is Project =>
  Boolean(value && typeof value === 'object' && 'slug' in value)

const sameProof = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase()

/**
 * The top of every page: breadcrumb, H1 with words in green, a short text,
 * buttons, a row of facts and real chantier photos (a single framed photo, a
 * mosaic on the home page, the map of the communes on sector pages). Under it,
 * the « fiche technique » of service pages. 3B Récup' opens on a forest panel
 * with the wood rings; a page may lay a mood photo (the forest) behind it.
 */
export function PageHero({
  hero,
  company,
  breadcrumbs,
  tags,
  placeTag,
  topline,
  meta,
  actions,
  lead,
  display,
  highlightLabel = 'Chantier',
  extraProofs,
  map,
  float,
  photoBadge,
  aside,
  landscape,
  layout = 'default',
  children,
}: Props) {
  const images = (hero.images ?? []).filter(isMedia)
  const variant =
    hero.variant === 'map' && map
      ? 'map'
      : hero.variant === 'simple' || images.length === 0
        ? 'simple'
        : hero.variant === 'photo' || images.length === 1
          ? 'photo'
          : 'collage'
  const forest = hero.tone === 'forest'
  const backdrop = !forest && isMedia(hero.backdrop) ? hero.backdrop : null
  const dark = forest || Boolean(backdrop)
  const primary = actions ? (actions.primary ?? null) : resolveLink(hero.primaryCta, company)
  const secondary = actions ? (actions.secondary ?? null) : resolveLink(hero.secondaryCta, company)
  const highlight = variant === 'collage' && isProject(hero.highlight) ? hero.highlight : null
  const highlightHref = highlight ? pathFor('projects', highlight) : null
  const highlightPlace = highlight
    ? highlight.locality ||
      (typeof highlight.commune === 'object' ? (highlight.commune as Commune | null)?.name : null)
    : null
  const sheetRows = (hero.sheet ?? []).filter((row) => row.label && row.value)

  // The page's facts, then the site-wide ones it does not already say: three at most.
  const proofs: Proof[] = [...(hero.proofs ?? [])]
  for (const extra of extraProofs ?? []) {
    if (proofs.length >= 3) break
    if (!proofs.some((proof) => sameProof(proof.label, extra.label))) proofs.push(extra)
  }

  const head = (
    <div className={styles.head}>
      {tags?.length || topline ? (
        <div className={styles.topline}>
          {tags?.length ? (
            <ul className={styles.tags}>
              {tags.map((tag, index) => (
                <li key={tag} data-place={placeTag && index === 0 ? '' : undefined}>
                  {placeTag && index === 0 ? <Icon name="mapPin" size={14} /> : null}
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
          {topline ? <div className={styles.toplineText}>{topline}</div> : null}
        </div>
      ) : null}
      {hero.kicker ? <p className="kicker">{hero.kicker}</p> : null}
      <AccentTitle
        as="h1"
        id="titre-page"
        title={hero.title}
        accent={hero.titleAccent}
        className={`${styles.title} ${display ? styles.display : ''}`}
      />
    </div>
  )

  const buttons =
    primary || secondary ? (
      <ButtonGroup className={styles.actions}>
        <CmsLink link={primary} variant={dark ? 'light' : 'primary'} arrow={primary?.kind !== 'phone'} />
        <CmsLink link={secondary} variant={dark ? 'outlineLight' : 'outline'} />
      </ButtonGroup>
    ) : null

  const body =
    layout === 'wide' ? null : (
      <div className={styles.body}>
        {hero.text ? <RichText data={hero.text} className={styles.text} /> : null}
        {lead ? <div className={styles.text}>{lead}</div> : null}
        {meta ? <div className={styles.meta}>{meta}</div> : null}
        {buttons}
        {proofs.length ? (
          <ul className={styles.facts}>
            {proofs.map((proof) => (
              <li key={proof.label}>
                <span className={styles.factIcon}>
                  <Icon name={proof.icon ?? 'check'} size={20} />
                </span>
                <span className={styles.factCopy}>
                  <strong>{proof.label}</strong>
                  {proof.text ? <span>{proof.text}</span> : null}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    )

  const copy = (
    <div className={styles.copy}>
      {head}
      {body}
    </div>
  )

  const tag = highlight && highlightHref ? (
    <Link href={highlightHref} className={styles.photoTag}>
      <Icon name="mapPin" size={14} />
      {highlightLabel}
      {highlightPlace ? ` · ${highlightPlace}` : ''}
    </Link>
  ) : hero.photoTag ? (
    <span className={styles.photoTag}>
      <Icon name="mapPin" size={14} />
      {hero.photoTag}
    </span>
  ) : null

  const visual =
    variant === 'map' ? (
      <div className={styles.mapVisual}>{map}</div>
    ) : variant === 'photo' ? (
      <figure className={styles.single} data-ratio={landscape ? 'landscape' : undefined}>
        <div className={styles.frame}>
          <Media
            media={images[0]}
            fill
            priority
            sizes={layout === 'wide' ? '(min-width: 1100px) 760px, 92vw' : '(min-width: 1100px) 500px, (min-width: 700px) 80vw, 92vw'}
            quality={82}
          />
          {tag}
          {photoBadge ? <span className={styles.photoBadge}>{photoBadge}</span> : null}
          {float ? <div className={styles.floatSlot}>{float}</div> : null}
        </div>
        {hero.caption ? <figcaption className={styles.caption}>{hero.caption}</figcaption> : null}
      </figure>
    ) : variant === 'collage' ? (
      <figure className={styles.mosaic} data-count={Math.min(images.length, 3)}>
        <div className={`${styles.frame} ${styles.first}`}>
          <Media media={images[0]} fill priority sizes="(min-width: 1080px) 300px, 50vw" quality={82} />
          {tag}
        </div>
        {images.slice(1, 3).map((image) => (
          <div key={image.id} className={styles.frame}>
            <Media media={image} fill sizes="(min-width: 1080px) 260px, 42vw" />
          </div>
        ))}
        {hero.caption ? <figcaption className={`visually-hidden`}>{hero.caption}</figcaption> : null}
      </figure>
    ) : null

  const wideRow =
    layout === 'wide' ? (
      <div className={styles.wideRow}>
        <div className={styles.wideLead}>
          {hero.text ? <RichText data={hero.text} className={styles.text} /> : null}
          {lead ? <div className={styles.text}>{lead}</div> : null}
          {meta ? <div className={styles.meta}>{meta}</div> : null}
        </div>
        {buttons}
      </div>
    ) : null

  const classes = [
    styles.hero,
    styles[variant],
    forest ? styles.forest : undefined,
    backdrop ? styles.backdrop : undefined,
    layout === 'wide' ? styles.wide : undefined,
  ]
    .filter(Boolean)
    .join(' ')

  const grid = (
    <>
      <div className={styles.grid}>
        {copy}
        {layout === 'wide' ? null : visual}
      </div>
      {wideRow}
      {layout === 'wide' && (visual || children) ? (
        <div className={styles.wideVisual}>
          {visual}
          {children}
        </div>
      ) : null}
      {sheetRows.length ? (
        <dl className={styles.spec} data-count={Math.min(sheetRows.length, 4)}>
          {sheetRows.map((row) => (
            <div key={row.id ?? row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {aside ? <div className={styles.aside}>{aside}</div> : null}
    </>
  )

  return (
    <section className={classes} aria-labelledby="titre-page" data-dark={dark ? '' : undefined} data-tone={dark ? 'dark' : undefined}>
      {backdrop ? (
        <div className={styles.backdropImage} aria-hidden="true">
          <Media media={backdrop} alt="" sizes="100vw" quality={70} />
        </div>
      ) : null}
      <div className={`container ${styles.inner}`}>
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} inverse={Boolean(backdrop)} /> : null}
        {forest ? (
          <div className={styles.panel}>
            <div className={styles.rings} aria-hidden="true" />
            {grid}
          </div>
        ) : (
          grid
        )}
      </div>
    </section>
  )
}
