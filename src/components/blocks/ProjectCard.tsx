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
}

export const projectCommune = (project: Project) =>
  project.commune && typeof project.commune === 'object' ? (project.commune as Commune) : null

export const projectServices = (project: Project) =>
  (project.services ?? []).filter((service): service is Service => typeof service === 'object' && service !== null)

/** Card of a chantier: photo with a label, title, info line, short text, "Voir les travaux →". */
export function ProjectCard({ project, title, text, tag, label = 'commune', linkLabel, photosLabel, priority, headingLevel = 'h3' }: Props) {
  const href = pathFor('projects', project) ?? '/realisations/'
  const commune = projectCommune(project)
  const main = projectServices(project)[0]
  const photos = project.gallery?.length ?? 0
  const badge =
    tag || (label === 'brand' ? '3B Charpente' : project.locality || commune?.name || main?.shortLabel || main?.title || '3B Charpente')
  const Heading = headingLevel

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Media media={project.heroImage} sizes="(min-width: 1100px) 380px, (min-width: 700px) 45vw, 92vw" priority={priority} />
        <span className={styles.badge}>{badge}</span>
      </div>
      <div className={styles.body}>
        <Heading className={styles.title}>
          <Link href={href} className={styles.stretched}>
            {title || project.shortTitle || project.title.replace(/\*\*/g, '')}
          </Link>
        </Heading>
        <p className={styles.info}>
          {[main?.shortLabel || main?.title, photos ? template(photosLabel, { n: photos }) : null].filter(Boolean).join(' · ')}
        </p>
        <p className={styles.text}>{text || project.summary}</p>
        <span className={styles.more} aria-hidden="true">
          {linkLabel}
          <Icon name="arrowRight" size={16} />
        </span>
      </div>
    </article>
  )
}
