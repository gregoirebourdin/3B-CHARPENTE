import Link from 'next/link'

import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { Media } from '@/components/ui/Media'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getProjectSteps, getProjects } from '@/lib/cms/queries'
import { resolveLink, template } from '@/lib/links'
import type { Project, ProjectsBlock as Data } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

import { ProjectCard, projectCommune, projectServices, type ProjectCardData } from './ProjectCard'
import styles from './Projects.module.css'
import type { BlockProps } from './types'

const idOf = (value: unknown) =>
  value && typeof value === 'object' ? (value as { id: number }).id : (value as number)

/** Chantiers chosen by hand, or automatically by service, commune, sector or "featured". */
export async function resolveProjectCards(block: Data): Promise<ProjectCardData[]> {
  const limit = block.limit ?? 6
  switch (block.mode) {
    case 'service':
      if (!block.service) return []
      return (
        await getProjects(JSON.stringify({ services: { contains: idOf(block.service) } }), limit)
      ).map((project) => ({ project }))
    case 'commune': {
      const ids = (block.communes ?? []).map(idOf)
      if (!ids.length) return []
      return (await getProjects(JSON.stringify({ commune: { in: ids } }), limit)).map(
        (project) => ({ project }),
      )
    }
    case 'sector':
      if (!block.sector) return []
      return (
        await getProjects(
          JSON.stringify({ 'commune.sector': { equals: idOf(block.sector) } }),
          limit,
        )
      ).map((project) => ({
        project,
      }))
    case 'featured':
      return (await getProjects(JSON.stringify({ featured: { equals: true } }), limit)).map(
        (project) => ({ project }),
      )
    default:
      return (block.items ?? [])
        .filter(
          (item) =>
            typeof item.project === 'object' &&
            item.project &&
            (item.project as Project)._status !== 'draft',
        )
        .map((item) => ({
          project: item.project as Project,
          title: item.title,
          text: item.text,
          tag: item.tag,
        }))
  }
}

const cleanStep = (title: string) => title.replace(/[.:;,]\s*$/, '')

/** Two chantiers told in full: a large photo, the words and their first steps. */
async function Duo({
  cards,
  context,
}: {
  cards: ProjectCardData[]
  context: BlockProps<Data>['context']
}) {
  const details = await getProjectSteps(JSON.stringify(cards.map((card) => card.project.id)))
  const texts = context.texts.general
  return (
    <ul className={styles.duo}>
      {cards.map((card, index) => {
        const { project } = card
        const href = pathFor('projects', project) ?? '/realisations/'
        const main = projectServices(project)[0]
        const commune = projectCommune(project)
        const place = project.locality || commune?.name
        const photos = project.gallery?.length ?? 0
        const info = [main?.shortLabel || main?.title, photos ? template(texts.projectPhotos, { n: photos }) : null]
          .filter(Boolean)
          .join(' · ')
        const steps = (details.find((item) => item.id === project.id)?.steps ?? []).slice(0, 3)
        return (
          <li key={project.id} className={styles.duoCard} data-reveal="" style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}>
            <div className={styles.duoPhoto}>
              <Media media={project.heroImage} fill sizes="(min-width: 1100px) 580px, 92vw" />
              {place ? (
                <span className={styles.tag}>
                  <Icon name="mapPin" size={13} />
                  {place}
                </span>
              ) : null}
            </div>
            <div className={styles.duoBody}>
              {info ? <p className={styles.duoInfo}>{info}</p> : null}
              <h3 className={styles.duoTitle}>
                <Link href={href} className={styles.stretched}>
                  {card.title || project.shortTitle || project.title.replace(/\*\*/g, '')}
                </Link>
              </h3>
              <p className={styles.duoText}>{card.text || project.summary}</p>
              {steps.length ? (
                <ul className={styles.duoSteps}>
                  {steps.map((step, stepIndex) => (
                    <li key={step.id ?? stepIndex}>{cleanStep(step.title)}</li>
                  ))}
                </ul>
              ) : null}
              <span className={styles.duoLink} aria-hidden="true">
                {texts.projectCardLink}
                <Icon name="arrowRight" size={16} />
              </span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

/**
 * Chantiers as photo cards: two told in full, otherwise a grid of three (or
 * four) columns. The link to all chantiers sits next to the title.
 */
export async function Projects({ block, context }: BlockProps<Data>) {
  const cards = await resolveProjectCards(block)
  if (!cards.length) return null
  const cta = resolveLink(block.cta, context.company)
  const duo = cards.length === 2
  const columns = cards.length === 4 || cards.length === 7 || cards.length === 8 ? 4 : cards.length === 1 ? 2 : 3
  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading
        kicker={block.kicker}
        title={block.title}
        accent={block.titleAccent}
        intro={block.intro}
        layout="split"
        actions={cta ? <CmsLink link={cta} variant="outline" arrow /> : undefined}
      />
      {duo ? (
        <Duo cards={cards} context={context} />
      ) : (
        <ul className={styles.grid} style={{ ['--columns' as string]: columns }}>
          {cards.map((card, index) => (
            <li key={card.project.id} data-reveal="" style={{ ['--reveal-delay' as string]: `${(index % 3) * 80}ms` }}>
              <ProjectCard
                {...card}
                label={block.label}
                linkLabel={context.texts.general.projectCardLink}
                photosLabel={context.texts.general.projectPhotos}
                compact={columns === 4}
              />
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
