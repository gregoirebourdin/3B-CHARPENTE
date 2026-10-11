import Link from 'next/link'

import { Icon } from '@/components/ui/Icon'
import { Media } from '@/components/ui/Media'
import { template } from '@/lib/links'
import type { Commune, Project, Service } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

import styles from './ProjectCard.module.css'

export type ProjectCardData = {
  project: Project
  title?: string | null
  text?: string | null
  tag?: string | null
}

type Props = ProjectCardData & {
  label?: 'commune' | 'brand' | null
  linkLabel: string
  photosLabel: string
  priority?: boolean
  headingLevel?: 'h3' | 'h2'
  /** First card of a bento grid: taller photo, larger title. */
  large?: boolean
  /** « row »: a square photo on the left, the words on the right. */
  layout?: 'stack' | 'row'
}

export const projectCommune = (project: Project) =>
  project.commune && typeof project.commune === 'object' ? (project.commune as Commune) : null

export const projectServices = (project: Project) =>
  (project.services ?? []).filter((service): service is Service => typeof service === 'object' && service !== null)

/** Card of a chantier: photo with a label, info line, title, short text, "Voir les travaux →". The whole card is the link. */
export function ProjectCard({
  project,
  title,
  text,
  tag,
  label = 'commune',
  linkLabel,
  photosLabel,
  priority,
  headingLevel = 'h3',
  large,
  layout = 'stack',
}: Props) {
  const href = pathFor('projects', project) ?? '/realisations/'
  const commune = projectCommune(project)
  const main = projectServices(project)[0]
  const photos = project.gallery?.length ?? 0
  const place = project.locality || commune?.name
  const badge = tag || (label === 'brand' ? '3B Charpente' : place || main?.shortLabel || main?.title || '3B Charpente')
  const pinned = !tag && label !== 'brand' && Boolean(place)
  const Heading = headingLevel

  const info = [main?.shortLabel || main?.title, photos ? template(photosLabel, { n: photos }) : null].filter(Boolean).join(' · ')

  return (
    <article className={[styles.card, large ? styles.large : undefined, layout === 'row' ? styles.row : undefined].filter(Boolean).join(' ')}>
      <div className={styles.media}>
        <Media
          media={project.heroImage}
          fill
          sizes={
            large
              ? '(min-width: 1100px) 700px, 92vw'
              : layout === 'row'
                ? '(min-width: 1100px) 240px, 40vw'
                : '(min-width: 1100px) 400px, (min-width: 700px) 45vw, 92vw'
          }
          priority={priority}
        />
        <span className={styles.badge}>
          {pinned ? <Icon name="mapPin" size={13} /> : null}
          {badge}
        </span>
      </div>
      <div className={styles.body}>
        {info ? <p className={styles.info}>{info}</p> : null}
        <Heading className={styles.title}>
          <Link href={href} className={styles.stretched}>
            {title || project.shortTitle || project.title.replace(/\*\*/g, '')}
          </Link>
        </Heading>
        <p className={styles.text}>{text || project.summary}</p>
        <span className={styles.more} aria-hidden="true">
          {linkLabel}
          <Icon name="arrowRight" size={16} />
        </span>
      </div>
    </article>
  )
}
