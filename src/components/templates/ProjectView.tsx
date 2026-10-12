import Link from 'next/link'

import { PhotoGrid } from '@/components/blocks/Gallery'
import { ProjectCard, projectCommune, projectServices } from '@/components/blocks/ProjectCard'
import { AccentTitle } from '@/components/ui/AccentTitle'
import { ButtonGroup, CmsLink } from '@/components/ui/CmsLink'
import { Icon } from '@/components/ui/Icon'
import { isMedia } from '@/components/ui/Media'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RichText } from '@/components/rich-text/RichText'
import { homeCrumb, listingCrumb } from '@/lib/cms/breadcrumbs'
import { getCompany, getProjects, getSiteTexts } from '@/lib/cms/queries'
import { phoneToE164, starTitle, template, type ResolvedLink } from '@/lib/links'
import { JsonLd } from '@/lib/seo/JsonLd'
import { breadcrumbList, graph, projectSchema, webPage } from '@/lib/seo/jsonld'
import type { Media, Page, Project, Service } from '@/payload-types'
import { pathFor } from '@/payload/utilities/routes'

import { PageHero } from './PageHero'
import styles from './ProjectView.module.css'

const internal = (href: string, label: string): ResolvedLink => ({
  href,
  label,
  external: false,
  kind: 'internal',
})

/** "Taille." + "Chaque pièce…" → bold title + text; "Abri voiture" + "dans le prolongement…" → one sentence. */
function stepParts(title: string, text?: string | null) {
  if (!text) return { title, rest: '' }
  if (/^[a-zàâçéèêëîïôûùüÿœ]/.test(text))
    return { title: title.replace(/[.:]\s*$/, ''), rest: ` ${text}` }
  return { title: /[.!?:]$/.test(title) ? title : `${title}.`, rest: ` ${text}` }
}

/** The page of one chantier (fiche 16, part A): fixed template, content from the "Réalisations" collection. */
export async function ProjectView({ project }: { project: Project }) {
  const [company, texts] = await Promise.all([getCompany(), getSiteTexts()])
  const t = texts.project
  const path = pathFor('projects', project) ?? '/realisations/'
  const commune = projectCommune(project)
  const services = projectServices(project)
  const main = services[0]
  const place = project.locality || commune?.name
  const crumbs = [
    await homeCrumb(),
    await listingCrumb('realisations'),
    { name: project.shortTitle || project.title, path },
  ]

  const mainLink = (() => {
    const link = project.mainLink
    if (link && typeof link.value === 'object' && link.value) {
      const doc = link.value as Service | Page
      return { href: pathFor(link.relationTo, doc) ?? '/', title: 'title' in doc ? doc.title : '' }
    }
    return main ? { href: pathFor('services', main) ?? '/', title: main.title } : null
  })()

  const sector =
    commune?.sector && typeof commune.sector === 'object' ? (commune.sector as Page) : null
  const sectorName = sector
    ? sector.breadcrumbLabel || sector.title.replace(/^Charpentier (à|en|au|aux)\s+/i, '')
    : ''

  const related: Project[] = (() => {
    const chosen = (project.related ?? []).filter(
      (item): item is Project => typeof item === 'object' && item !== null,
    )
    return chosen
  })()
  const similar = related.length
    ? related
    : main
      ? (await getProjects(JSON.stringify({ services: { contains: main.id } }), 4))
          .filter((p) => p.id !== project.id)
          .slice(0, 3)
      : []

  const facts = [
    {
      label: t.factCommune,
      value: place
        ? `${place}${commune && commune.name !== place ? ` (${commune.name})` : ''}${commune?.department ? `, ${commune.department}` : ''}`
        : null,
    },
    { label: t.factService, value: main?.title ?? null, href: mainLink?.href },
    { label: t.factYear, value: project.facts?.year },
    { label: t.factDuration, value: project.facts?.duration },
    { label: t.factSurface, value: project.facts?.surface },
    { label: t.factContext, value: project.facts?.context },
    { label: t.factArchitect, value: project.facts?.architect },
  ].filter((fact) => fact.value)

  const gallery = (project.gallery ?? [])
    .filter((item) => isMedia(item.image))
    .map((item) => ({ image: item.image as Media, caption: item.caption }))

  const introTitle = starTitle(
    place ? template(t.introTitle, { commune: place }) : t.introTitleNoCommune,
  )
  const stepsTitle = starTitle(t.stepsTitle)
  const galleryTitle = starTitle(template(t.galleryTitle, { n: gallery.length }))
  const materialsTitle = starTitle(t.materialsTitle)
  const moreTitle = starTitle(t.moreTitle)
  const similarTitle = starTitle(t.similarTitle)
  const ctaTitle = starTitle(t.ctaTitle)
  const contactHref = `/contact/${main ? `?projet=${main.slug}` : ''}`
  const tel = {
    href: `tel:${phoneToE164(company.phone)}`,
    label: template(t.ctaSecondary, { telephone: company.phone }),
    external: false,
    kind: 'phone' as const,
  }

  return (
    <>
      <PageHero
        hero={{
          variant: 'photo',
          title: project.title.replace(/\*\*/g, ''),
          titleAccent: project.titleAccent,
          images: [project.heroImage],
        }}
        company={company}
        breadcrumbs={crumbs}
        tags={[place, ...(project.tags ?? [])].filter((tag): tag is string => Boolean(tag))}
        actions={{
          primary: internal(contactHref, t.heroPrimary),
          secondary: internal('/realisations/', t.heroSecondary),
        }}
      />

      <Section tone="cream">
        <div className={styles.intro}>
          <div>
            <SectionHeading
              kicker={t.introKicker}
              title={introTitle.title}
              accent={introTitle.accent}
            />
            <RichText data={project.description} className={styles.description} />
          </div>
          {facts.length ? (
            <aside className={styles.facts} aria-labelledby="fiche-technique" data-reveal="">
              <h2 id="fiche-technique" className={styles.factsTitle}>
                {t.factsTitle}
              </h2>
              <dl>
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.href ? <Link href={fact.href}>{fact.value}</Link> : fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          ) : null}
        </div>
      </Section>

      {project.steps?.length ? (
        <Section tone="light">
          <SectionHeading
            kicker={t.stepsKicker}
            title={stepsTitle.title}
            accent={stepsTitle.accent}
          />
          <ol className={styles.steps}>
            {project.steps.map((step, index) => {
              const parts = stepParts(step.title, step.text)
              return (
                <li
                  key={step.id ?? index}
                  data-reveal=""
                  style={{ ['--reveal-delay' as string]: `${(index % 3) * 70}ms` }}
                >
                  <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <p>
                    <strong>{parts.title}</strong>
                    {parts.rest}
                  </p>
                </li>
              )
            })}
          </ol>
        </Section>
      ) : null}

      {gallery.length ? (
        <Section tone="cream" anchor="photos">
          <SectionHeading
            kicker={t.galleryKicker}
            title={galleryTitle.title}
            accent={galleryTitle.accent}
          />
          <PhotoGrid items={gallery} id="galerie-chantier" />
        </Section>
      ) : null}

      {project.materials?.length ? (
        <Section tone="light">
          <div className={styles.materials}>
            <SectionHeading
              kicker={t.materialsKicker}
              title={materialsTitle.title}
              accent={materialsTitle.accent}
            />
            <div data-reveal="">
              <ul className={styles.materialList}>
                {project.materials.map((material, index) => (
                  <li key={material.id ?? index}>{material.text}</li>
                ))}
              </ul>
              {project.showRecupLink ? (
                <CmsLink link={internal('/3b-recup/', t.recupLink)} variant="outline" arrow />
              ) : null}
            </div>
          </div>
        </Section>
      ) : null}

      <Section tone="cream">
        <SectionHeading kicker={t.moreKicker} title={moreTitle.title} accent={moreTitle.accent} />
        <ul className={styles.more}>
          {mainLink ? (
            <li className={styles.moreCard} data-reveal="">
              <span className={styles.moreIcon}>
                <Icon name={main?.icon ?? 'roof'} size={24} />
              </span>
              <h3>
                <Link href={mainLink.href} className={styles.stretched}>
                  {mainLink.title}
                </Link>
              </h3>
              <p>{template(t.serviceCardText, { prestation: mainLink.title.toLowerCase() })}</p>
              <span className={styles.moreLink} aria-hidden="true">
                {t.serviceCardLink} <Icon name="arrowRight" size={16} />
              </span>
            </li>
          ) : null}
          {sector ? (
            <li className={styles.moreCard} data-reveal="">
              <span className={styles.moreIcon}>
                <Icon name="mapPin" size={24} />
              </span>
              <h3>
                <Link href={pathFor('pages', sector) ?? '/'} className={styles.stretched}>
                  {sector.title}
                </Link>
              </h3>
              <p>{template(t.sectorCardText, { secteur: sectorName })}</p>
              <span className={styles.moreLink} aria-hidden="true">
                {t.sectorCardLink} <Icon name="arrowRight" size={16} />
              </span>
            </li>
          ) : commune?.area === 'hors-05' ? (
            <li className={styles.moreCard} data-reveal="">
              <span className={styles.moreIcon}>
                <Icon name="mapPin" size={24} />
              </span>
              <h3>
                <Link href="/realisations/" className={styles.stretched}>
                  {t.outsideTitle}
                </Link>
              </h3>
              <p>{t.outsideText}</p>
              <span className={styles.moreLink} aria-hidden="true">
                {t.outsideLink} <Icon name="arrowRight" size={16} />
              </span>
            </li>
          ) : null}
        </ul>
      </Section>

      {similar.length ? (
        <Section tone="light">
          <SectionHeading
            kicker={t.similarKicker}
            title={similarTitle.title}
            accent={similarTitle.accent}
          />
          <ul className={styles.similar}>
            {similar.map((item) => (
              <li key={item.id} data-reveal="">
                <ProjectCard
                  project={item}
                  linkLabel={texts.general.projectCardLink}
                  photosLabel={texts.general.projectPhotos}
                />
              </li>
            ))}
          </ul>
          <div className={styles.similarLink}>
            <CmsLink link={internal('/realisations/', t.similarLink)} variant="outline" arrow />
          </div>
        </Section>
      ) : null}

      <section className={styles.ctaWrap} data-tone="forest">
        <div className={`container`}>
          <div className={styles.cta} data-reveal="">
            <div className={styles.ctaInner}>
              <AccentTitle
                as="h2"
                title={ctaTitle.title}
                accent={ctaTitle.accent}
                className={styles.ctaTitle}
              />
              <p className={styles.ctaText}>{t.ctaText}</p>
              <ButtonGroup className={styles.ctaActions}>
                <CmsLink
                  link={internal(contactHref, t.ctaPrimary)}
                  variant="light"
                  size="large"
                  arrow
                />
                <CmsLink link={tel} variant="outlineLight" size="large" />
              </ButtonGroup>
              <p className={styles.ctaAddress}>
                {company.name}, {company.address.street}, {company.address.postalCode}{' '}
                {company.address.city}, {company.phone}
              </p>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={graph([
          webPage(path, project.title, project.meta?.description),
          projectSchema(project, path, project.meta?.description),
          breadcrumbList(crumbs),
        ])}
      />
    </>
  )
}
