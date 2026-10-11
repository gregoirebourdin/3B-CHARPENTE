import { CmsLink } from '@/components/ui/CmsLink'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getProjects } from '@/lib/cms/queries'
import { resolveLink } from '@/lib/links'
import type { Project, ProjectsBlock as Data } from '@/payload-types'

import { ProjectCard, type ProjectCardData } from './ProjectCard'
import styles from './Projects.module.css'
import type { BlockProps } from './types'

const idOf = (value: unknown) => (value && typeof value === 'object' ? (value as { id: number }).id : (value as number))

/** Chantiers chosen by hand, or automatically by service, commune, sector or "featured". */
export async function resolveProjectCards(block: Data): Promise<ProjectCardData[]> {
  const limit = block.limit ?? 6
  switch (block.mode) {
    case 'service':
      if (!block.service) return []
      return (await getProjects(JSON.stringify({ services: { contains: idOf(block.service) } }), limit)).map((project) => ({ project }))
    case 'commune': {
      const ids = (block.communes ?? []).map(idOf)
      if (!ids.length) return []
      return (await getProjects(JSON.stringify({ commune: { in: ids } }), limit)).map((project) => ({ project }))
    }
    case 'sector':
      if (!block.sector) return []
      return (await getProjects(JSON.stringify({ 'commune.sector': { equals: idOf(block.sector) } }), limit)).map((project) => ({
        project,
      }))
    case 'featured':
      return (await getProjects(JSON.stringify({ featured: { equals: true } }), limit)).map((project) => ({ project }))
    default:
      return (block.items ?? [])
        .filter((item) => typeof item.project === 'object' && item.project && (item.project as Project)._status !== 'draft')
        .map((item) => ({ project: item.project as Project, title: item.title, text: item.text, tag: item.tag }))
  }
}

export async function Projects({ block, context }: BlockProps<Data>) {
  const cards = await resolveProjectCards(block)
  if (!cards.length) return null
  const cta = resolveLink(block.cta, context.company)
  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} />
      <ul className={styles.grid} data-count={cards.length}>
        {cards.map((card, index) => (
          <li key={card.project.id} data-reveal="" style={{ ['--reveal-delay' as string]: `${(index % 3) * 90}ms` }}>
            <ProjectCard
              {...card}
              label={block.label}
              linkLabel={context.texts.general.projectCardLink}
              photosLabel={context.texts.general.projectPhotos}
            />
          </li>
        ))}
      </ul>
      {cta ? (
        <div className={styles.cta}>
          <CmsLink link={cta} variant="outline" arrow />
        </div>
      ) : null}
    </Section>
  )
}
