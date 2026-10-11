import { AccentTitle } from '@/components/ui/AccentTitle'
import { CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { getCommunes, getProjects, getServices } from '@/lib/cms/queries'
import { resolveLink, template } from '@/lib/links'
import type { Project, ProjectsExplorerBlock as Data } from '@/payload-types'

import { ExplorerShell, type ExplorerFilters } from './ExplorerShell'
import { ProjectCard, projectCommune, projectServices } from './ProjectCard'
import styles from './ProjectsExplorer.module.css'
import type { BlockProps } from './types'

const idOf = (value: unknown) => (value && typeof value === 'object' ? (value as { id: number }).id : (value as number))

/**
 * Page Réalisations: every published chantier, grouped by family, with
 * filters by service and by commune. All cards are in the HTML from the
 * start (Google sees every link); filtering only hides cards, client-side.
 */
export async function ProjectsExplorer({ block, context }: BlockProps<Data>) {
  const [projects, services, communes] = await Promise.all([getProjects(), getServices(), getCommunes()])
  const texts = context.texts.explorer
  const filterKey = (service: { filterKey?: string | null; slug: string }) => service.filterKey || service.slug

  // Families from the admin; projects forgotten there go to "Autres chantiers".
  const placed = new Set<number>()
  const groups = (block.groups ?? []).map((group) => {
    const items = (group.projects ?? [])
      .map((item) => projects.find((project) => project.id === idOf(item)))
      .filter((project): project is Project => Boolean(project))
    items.forEach((project) => placed.add(project.id))
    return { group, items }
  })
  const rest = projects.filter((project) => !placed.has(project.id))

  const serviceFilters = services
    .map((service) => ({
      key: filterKey(service),
      label: service.shortLabel || service.title,
      count: projects.filter((project) => projectServices(project).some((s) => s.id === service.id)).length,
    }))
    .filter((filter) => filter.count > 0)
  const recupCount = projects.filter((project) => project.showRecupLink).length

  const areaLabel: Record<string, string> = {
    brianconnais: texts.areaBrianconnais,
    'serre-chevalier': texts.areaSerreChevalier,
    'vallouise-ecrins': texts.areaVallouise,
    'hors-05': texts.areaOutside,
  }
  const communeGroups = Object.entries(areaLabel)
    .map(([area, label]) => ({
      label,
      options: communes
        .filter((commune) => (commune.area ?? 'vallouise-ecrins') === area)
        .map((commune) => ({
          key: commune.slug,
          label: commune.villages ? `${commune.name} (${commune.villages})` : commune.name,
          count: projects.filter((project) => projectCommune(project)?.id === commune.id).length,
        }))
        .filter((option) => option.count > 0),
    }))
    .filter((group) => group.options.length > 0)

  const filters: ExplorerFilters = {
    serviceLabel: block.serviceFilterLabel || '',
    communeLabel: block.communeFilterLabel || '',
    services: [
      ...serviceFilters,
      ...(recupCount ? [{ key: 'reemploi', label: block.recupFilterLabel || '3B Récup’', count: recupCount }] : []),
    ],
    communeGroups,
    total: projects.length,
    texts: { all: texts.all, allCommunes: texts.allCommunes, count: texts.count, countOne: texts.countOne, reset: texts.reset },
  }

  const emptyCta = resolveLink(block.emptyCta, context.company)
  let cardIndex = 0
  const renderCard = (project: Project) => {
    const index = cardIndex++
    const keys = projectServices(project).map(filterKey)
    if (project.showRecupLink) keys.push('reemploi')
    return (
      <li key={project.id} className={styles.cardItem} data-services={keys.join(' ')} data-commune={projectCommune(project)?.slug ?? ''}>
        <ProjectCard
          project={project}
          linkLabel={context.texts.general.projectCardLink}
          photosLabel={context.texts.general.projectPhotos}
          priority={index < 3}
        />
      </li>
    )
  }

  return (
    <section id={block.anchor || undefined} className={styles.explorer}>
      <ExplorerShell filters={filters}>
        <div className={`container ${styles.groups}`} data-explorer-groups="">
          {[...groups, ...(rest.length ? [{ group: null, items: rest }] : [])].map(({ group, items }, index) => {
            if (!items.length) return null
            const links = (group?.links ?? []).map((item) => resolveLink(item.link, context.company)).filter(Boolean)
            return (
              <section key={group?.id ?? `rest-${index}`} className={styles.group} id={group?.anchor || undefined} data-explorer-group="">
                <header className={styles.groupHead} data-reveal="">
                  {group?.kicker ? <p className={styles.kicker}>{group.kicker}</p> : null}
                  <AccentTitle as="h2" title={group?.title || texts.otherGroup} accent={group?.titleAccent} className={styles.groupTitle} />
                  {group?.intro ? <p className={styles.intro}>{group.intro}</p> : null}
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
                </header>
                <ul className={styles.cards}>{items.map(renderCard)}</ul>
              </section>
            )
          })}
        </div>
        <div className={`container ${styles.empty}`} data-explorer-empty="" hidden>
          <p>{block.emptyMessage}</p>
          {emptyCta ? <CmsLink link={emptyCta} variant="primary" arrow /> : null}
        </div>
      </ExplorerShell>
      <p className="visually-hidden">{template(texts.count, { n: projects.length })}</p>
    </section>
  )
}
