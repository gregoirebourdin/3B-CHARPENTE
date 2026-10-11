import {
  ArrowRight,
  CalendarDays,
  Camera,
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  Hammer,
  Image as ImageIcon,
  Inbox,
  MapPin,
  PenLine,
  TriangleAlert,
} from 'lucide-react'
import Link from 'next/link'
import type { CollectionSlug, Payload, TypedUser } from 'payload'

import { relativeFr, todayFr } from '../lib/time'
import { Badge } from '../ui/badge'
import { Button, Cta } from '../ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Disc, EmptyState, Page, PageHeader, TextLink } from '../ui/page'
import { cn, focusRing } from '../ui/utils'

type Props = { payload: Payload; user?: TypedUser | null }

type Submission = {
  id: number
  summary?: string | null
  contactName?: string | null
  commune?: string | null
  status?: string | null
  createdAt: string
}

type Point = { id: number; question: string; page?: string | null }

async function safe<T>(run: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await run()
  } catch {
    return fallback
  }
}

const EDITABLE: { collection: CollectionSlug; label: string }[] = [
  { collection: 'pages', label: 'Page' },
  { collection: 'services', label: 'Prestation' },
  { collection: 'projects', label: 'Chantier' },
  { collection: 'articles', label: 'Conseil' },
]

type Change = { key: string; href: string; title: string; label: string; updatedAt: string; draft: boolean }

async function recentChanges(payload: Payload, user: TypedUser | null | undefined): Promise<Change[]> {
  const lists = await Promise.all(
    EDITABLE.map(({ collection, label }) =>
      safe(
        async () =>
          (
            await payload.find({
              collection,
              sort: '-updatedAt',
              limit: 4,
              depth: 0,
              draft: true,
              overrideAccess: false,
              user,
              select: { title: true, updatedAt: true, _status: true } as never,
            })
          ).docs.map((doc) => {
            const d = doc as unknown as { id: number; title?: string; updatedAt: string; _status?: string }
            return {
              key: `${collection}-${d.id}`,
              href: `/admin/collections/${collection}/${d.id}`,
              title: (d.title ?? '').replace(/\*\*/g, ''),
              label,
              updatedAt: d.updatedAt,
              draft: d._status === 'draft',
            }
          }),
        [] as Change[],
      ),
    ),
  )
  return lists
    .flat()
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 4)
}

const ACTIONS = [
  { href: '/admin/nouveau-chantier', title: 'Ajouter un chantier', text: 'Des photos, une commune, quelques mots.', icon: Camera },
  { href: '/admin/horaires', title: 'Changer mes horaires', text: 'Et vos coordonnées : tout le site suit.', icon: Clock },
  { href: '/admin/collections/pages', title: 'Modifier une page', text: 'Les textes et les photos de chaque page.', icon: PenLine },
  { href: '/admin/collections/media', title: 'Remplacer une photo', text: 'Toutes les photos du site au même endroit.', icon: ImageIcon },
]

const HOW_IT_WORKS = [
  { title: 'Ouvrez', text: 'une page, un chantier ou une photo dans le menu de gauche.' },
  { title: 'Changez', text: 'le texte ou la photo. La mise en page reste en place : rien ne peut casser.' },
  { title: 'Publiez', text: 'avec le bouton vert. Le site est à jour en quelques secondes.' },
]

/** Generic account names are not first names: « Bonjour » alone reads better. */
const GENERIC_NAMES = new Set(['administrateur', 'admin', 'éditeur', 'editeur'])

/**
 * Home of the administration (designs § 17.2): what is waiting (requests and
 * points to confirm), how it works, the site in four numbers, the four things
 * Jean-Michel does most and the latest changes.
 */
export async function DashboardView({ payload, user }: Props) {
  const scoped = { overrideAccess: false, user }
  const [requests, newCount, points, openPoints, counts, changes] = await Promise.all([
    safe(
      async () =>
        (
          await payload.find({
            collection: 'form-submissions',
            sort: '-createdAt',
            limit: 3,
            depth: 0,
            ...scoped,
            where: { status: { in: ['new', 'in-progress'] } },
            select: { summary: true, contactName: true, commune: true, status: true, createdAt: true } as never,
          })
        ).docs as unknown as Submission[],
      [] as Submission[],
    ),
    safe(async () => (await payload.count({ collection: 'form-submissions', where: { status: { equals: 'new' } }, ...scoped })).totalDocs, 0),
    safe(
      async () =>
        (
          await payload.find({
            collection: 'validation-points',
            where: { and: [{ status: { equals: 'open' } }, { priority: { equals: 'high' } }] },
            sort: 'createdAt',
            limit: 2,
            depth: 0,
            ...scoped,
            select: { question: true, page: true } as never,
          })
        ).docs as unknown as Point[],
      [] as Point[],
    ),
    safe(async () => (await payload.count({ collection: 'validation-points', where: { status: { equals: 'open' } }, ...scoped })).totalDocs, 0),
    Promise.all(
      (['projects', 'services', 'articles', 'media'] as const).map((collection) =>
        safe(async () => (await payload.count({ collection, ...scoped })).totalDocs, 0),
      ),
    ),
    recentChanges(payload, user),
  ])
  const [projects = 0, services = 0, articles = 0, photos = 0] = counts
  const rawName = ((user as { name?: string | null } | null)?.name ?? '').trim()
  const firstName = GENERIC_NAMES.has(rawName.toLowerCase()) ? '' : rawName.split(' ')[0]
  const stats = [
    { label: projects > 1 ? 'chantiers' : 'chantier', value: projects, href: '/admin/collections/projects' },
    { label: services > 1 ? 'prestations' : 'prestation', value: services, href: '/admin/collections/services' },
    { label: articles > 1 ? 'guides conseils' : 'guide conseil', value: articles, href: '/admin/collections/articles' },
    { label: photos > 1 ? 'photos' : 'photo', value: photos, href: '/admin/collections/media' },
  ]

  return (
    <Page>
      <PageHeader
        eyebrow={
          <>
            <CalendarDays aria-hidden="true" />
            {todayFr()}
          </>
        }
        title={firstName ? `Bonjour ${firstName}` : 'Bonjour'}
        description="Voici ce qui vous attend aujourd’hui. Ce que vous changez ici apparaît sur le site en quelques secondes."
        actions={
          <Button variant="outline" asChild>
            <a href="/" target="_blank" rel="noopener">
              <ExternalLink aria-hidden="true" />
              Voir le site
              <span className="tw:sr-only"> (nouvel onglet)</span>
            </a>
          </Button>
        }
      />

      <div className="tw:grid tw:gap-6 tw:desk:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] tw:desk:gap-x-6 tw:desk:gap-y-7">
        {/* À faire */}
        <Card className="tw:order-1 tw:desk:col-start-1 tw:desk:row-span-2 tw:desk:row-start-1">
          <CardHeader>
            <CardTitle>À faire</CardTitle>
            {newCount ? (
              <Badge variant="new">
                {newCount} nouvelle{newCount > 1 ? 's' : ''} demande{newCount > 1 ? 's' : ''}
              </Badge>
            ) : null}
          </CardHeader>
          {requests.length ? (
            <ul className="tw:m-0 tw:list-none tw:p-0">
              {requests.map((request) => (
                <li key={request.id} className="tw:border-0 tw:border-b tw:border-solid tw:border-line">
                  <div className="tw:relative tw:flex tw:items-center tw:gap-4 tw:px-6 tw:py-4 tw:transition-colors tw:hover:bg-surface tw:max-desk:px-4">
                    <Disc className="tw:max-desk:hidden">
                      <Hammer />
                    </Disc>
                    <div className="tw:grid tw:min-w-0 tw:flex-1 tw:gap-1">
                      <p className="tw:m-0 tw:flex tw:flex-wrap tw:items-center tw:gap-2">
                        <Link
                          href={`/admin/demandes?id=${request.id}`}
                          className={cn(
                            'tw:font-[650] tw:text-ink tw:no-underline tw:after:absolute tw:after:inset-0 tw:after:content-[""] tw:desk:after:hidden',
                            focusRing,
                          )}
                        >
                          {request.contactName || 'Visiteur du site'}
                        </Link>
                        {request.status === 'new' ? <Badge variant="new">Nouvelle</Badge> : <Badge variant="done">En cours</Badge>}
                      </p>
                      <p className="tw:m-0 tw:truncate tw:text-base">{request.summary || 'Demande de devis'}</p>
                      <p className="tw:m-0 tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-1 tw:text-sm tw:text-stone-text tw:[&_svg]:size-4">
                        {request.commune ? (
                          <span className="tw:inline-flex tw:items-center tw:gap-1.5">
                            <MapPin aria-hidden="true" />
                            {request.commune}
                          </span>
                        ) : null}
                        <span className="tw:inline-flex tw:items-center tw:gap-1.5">
                          <Clock aria-hidden="true" />
                          {relativeFr(request.createdAt)}
                        </span>
                      </p>
                    </div>
                    <Button variant="outline" asChild className="tw:max-desk:hidden">
                      <Link href={`/admin/demandes?id=${request.id}`} aria-label={`Ouvrir la demande de ${request.contactName || 'ce visiteur'}`}>
                        Ouvrir
                      </Link>
                    </Button>
                    <ChevronRight aria-hidden="true" className="tw:size-5 tw:shrink-0 tw:text-stone-text tw:desk:hidden" />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="tw:border-0 tw:border-b tw:border-solid tw:border-line">
              <EmptyState
                icon={<Inbox />}
                title="Aucune nouvelle demande."
                text="Bonne journée."
                meta="Dès qu’un visiteur remplit le formulaire, sa demande apparaît ici et dans votre boîte e-mail."
              />
            </div>
          )}
          {points.length ? (
            <ul className="tw:m-0 tw:list-none tw:p-0">
              {points.map((point) => (
                <li key={point.id} className="tw:border-0 tw:border-b tw:border-solid tw:border-line">
                  <Link
                    href={`/admin/collections/validation-points/${point.id}`}
                    className={cn(
                      'tw:flex tw:min-h-[52px] tw:items-center tw:gap-3 tw:px-6 tw:py-2.5 tw:text-ink tw:no-underline tw:transition-colors tw:hover:bg-surface tw:max-desk:flex-wrap tw:max-desk:px-4',
                      focusRing,
                      'tw:focus-visible:outline-offset-[-2px]',
                    )}
                  >
                    <Badge variant="important">
                      <TriangleAlert aria-hidden="true" />À confirmer
                    </Badge>
                    <span className="tw:min-w-0 tw:flex-1 tw:text-base tw:font-semibold tw:max-desk:line-clamp-2 tw:max-desk:basis-full tw:desk:truncate">{point.question}</span>
                    <ChevronRight aria-hidden="true" className="tw:size-5 tw:shrink-0 tw:text-stone-text tw:max-desk:hidden" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          <CardFooter>
            {openPoints ? (
              <TextLink href="/admin/collections/validation-points?where[status][equals]=open">
                Voir les {openPoints} points à confirmer
                <ArrowRight aria-hidden="true" />
              </TextLink>
            ) : (
              <span />
            )}
            <Cta href="/admin/demandes" className="tw:max-desk:w-full tw:max-desk:justify-between">
              Répondre aux demandes
            </Cta>
          </CardFooter>
        </Card>

        {/* Comment ça marche ? */}
        <section
          aria-labelledby="tb-how"
          className="tw:relative tw:order-5 tw:overflow-hidden tw:rounded-md tw:border tw:border-[color-mix(in_srgb,var(--c-accent)_22%,transparent)] tw:bg-sage-soft tw:p-6 tw:desk:col-start-2 tw:desk:row-start-1 tw:max-desk:p-4"
        >
          <span aria-hidden="true" className="tb-topo-corner" />
          <h2 id="tb-how" className="tw:relative tw:m-0 tw:font-heading tw:text-xl tw:font-semibold tw:leading-[1.25]">
            Comment ça marche ?
          </h2>
          <ol className="tw:relative tw:mt-4 tw:mb-0 tw:grid tw:list-none tw:gap-3.5 tw:p-0">
            {HOW_IT_WORKS.map((step, index) => (
              <li key={step.title} className="tw:flex tw:gap-3">
                <span
                  aria-hidden="true"
                  className="tw:grid tw:size-[34px] tw:shrink-0 tw:place-items-center tw:rounded-full tw:bg-card tw:font-heading tw:text-base tw:font-bold tw:text-leaf"
                >
                  {index + 1}
                </span>
                <p className="tw:m-0 tw:pt-1 tw:text-base tw:leading-normal">
                  <strong className="tw:font-semibold">{step.title}</strong> {step.text}
                </p>
              </li>
            ))}
          </ol>
          <TextLink href="/admin/aide" className="tw:relative tw:mt-3">
            Le guide pas à pas
            <ArrowRight aria-hidden="true" />
          </TextLink>
        </section>

        {/* Votre site */}
        <Card className="tw:order-3 tw:desk:col-start-2 tw:desk:row-start-2">
          <CardHeader plain>
            <CardTitle>Votre site</CardTitle>
          </CardHeader>
          <CardContent className="tw:pt-3">
            <ul className="tw:m-0 tw:grid tw:list-none tw:grid-cols-2 tw:p-0">
              {stats.map((stat, index) => (
                <li
                  key={stat.href}
                  className={cn('tw:border-0 tw:border-solid tw:border-line', index < 2 && 'tw:border-b', index % 2 === 0 && 'tw:border-r')}
                >
                  <Link
                    href={stat.href}
                    className={cn(
                      'tw:group tw:grid tw:gap-1 tw:rounded-xs tw:px-3 tw:py-3.5 tw:text-ink tw:no-underline tw:transition-colors tw:hover:bg-surface',
                      focusRing,
                    )}
                  >
                    <span className="tw:font-heading tw:text-[34px] tw:font-bold tw:leading-none tw:tracking-[-0.02em]">{stat.value}</span>
                    <span className="tw:inline-flex tw:items-center tw:gap-1.5 tw:text-[15px] tw:text-stone-text">
                      {stat.label}
                      <ArrowRight aria-hidden="true" className="tw:size-4 tw:transition-transform tw:group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Que voulez-vous faire ? */}
        <section aria-labelledby="tb-actions" className="tw:order-2 tw:grid tw:gap-4 tw:desk:col-span-2 tw:desk:row-start-3">
          <h2 id="tb-actions" className="tw:m-0 tw:font-heading tw:text-[22px] tw:font-semibold tw:leading-[1.2] tw:tracking-[-0.012em]">
            Que voulez-vous faire ?
          </h2>
          <ul className="tw:m-0 tw:grid tw:list-none tw:grid-cols-2 tw:gap-4 tw:p-0 tw:wide:grid-cols-4 tw:max-desk:gap-3">
            {ACTIONS.map(({ href, title, text, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'tw:group tw:relative tw:flex tw:h-full tw:min-h-44 tw:flex-col tw:gap-3 tw:rounded-md tw:border tw:border-line tw:bg-card tw:p-[22px] tw:text-ink tw:no-underline',
                    'tw:transition-[box-shadow,transform] tw:duration-320 tw:ease-brand tw:hover:-translate-y-0.5 tw:hover:shadow-md',
                    'tw:max-desk:min-h-0 tw:max-desk:p-4',
                    focusRing,
                  )}
                >
                  <Disc tone="sage" size="lg" className="tw:max-desk:size-11 tw:max-desk:[&_svg]:size-[22px]">
                    <Icon />
                  </Disc>
                  <span className="tw:mt-auto tw:grid tw:gap-1">
                    <span className="tw:font-heading tw:text-xl tw:font-semibold tw:leading-[1.25] tw:max-desk:text-[17px]">{title}</span>
                    <span className="tw:text-[15px] tw:text-stone-text tw:max-desk:hidden">{text}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="tw:absolute tw:top-[22px] tw:right-[22px] tw:grid tw:size-10 tw:place-items-center tw:rounded-full tw:border tw:border-line-strong tw:text-ink tw:transition-colors tw:duration-180 tw:group-hover:border-forest tw:group-hover:bg-forest tw:group-hover:text-on-forest tw:max-desk:hidden"
                  >
                    <ArrowRight className="tw:size-[18px] tw:transition-transform tw:duration-320 tw:ease-brand tw:group-hover:-rotate-45" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Dernières modifications */}
        <section aria-labelledby="tb-changes" className="tw:order-4 tw:grid tw:gap-4 tw:desk:col-span-2 tw:desk:row-start-4">
          <div className="tw:flex tw:flex-wrap tw:items-baseline tw:justify-between tw:gap-3">
            <h2 id="tb-changes" className="tw:m-0 tw:font-heading tw:text-[22px] tw:font-semibold tw:leading-[1.2] tw:tracking-[-0.012em]">
              Dernières modifications
            </h2>
          </div>
          <Card>
            {changes.length ? (
              <ul className="tw:m-0 tw:grid tw:list-none tw:p-0 tw:desk:grid-cols-2">
                {changes.map((change, index) => (
                  <li
                    key={change.key}
                    className={cn(
                      'tw:border-0 tw:border-solid tw:border-line',
                      index < changes.length - 1 && 'tw:border-b',
                      index < changes.length - 2 && 'tw:desk:border-b',
                      index >= changes.length - 2 && 'tw:desk:border-b-0',
                      index % 2 === 0 && 'tw:desk:border-r',
                    )}
                  >
                    <Link
                      href={change.href}
                      className={cn(
                        'tw:flex tw:min-h-16 tw:items-center tw:gap-3 tw:px-5 tw:py-3 tw:text-ink tw:no-underline tw:transition-colors tw:hover:bg-surface tw:max-desk:px-4',
                        focusRing,
                        'tw:focus-visible:outline-offset-[-2px]',
                      )}
                    >
                      <FileText aria-hidden="true" className="tw:size-5 tw:shrink-0 tw:stroke-[1.8] tw:text-stone-text" />
                      <span className="tw:grid tw:min-w-0 tw:flex-1">
                        <span className="tw:truncate tw:text-base tw:font-semibold">{change.title || 'Sans titre'}</span>
                        <span className="tw:text-sm tw:text-stone-text">
                          {change.label} · modifié {relativeFr(change.updatedAt)}
                        </span>
                      </span>
                      {change.draft ? <Badge variant="draft">Brouillon</Badge> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="tw:m-0 tw:p-5 tw:text-base tw:text-stone-text">Rien n’a encore été modifié.</p>
            )}
          </Card>
        </section>
      </div>
    </Page>
  )
}
