import { ArrowRight, Camera, CircleCheck, Clock, ExternalLink, FileText, Image as ImageIcon, Inbox, MapPin, PenLine } from 'lucide-react'
import Link from 'next/link'
import type { CollectionSlug, Payload, TypedUser } from 'payload'

import { relativeFr, todayFr } from '../lib/time'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { EmptyState, Page, PageHeader, Section } from '../ui/page'

type Props = { payload: Payload; user?: TypedUser | null }

type Submission = {
  id: number
  summary?: string | null
  contactName?: string | null
  commune?: string | null
  status?: string | null
  createdAt: string
}

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

async function recentChanges(payload: Payload, user: TypedUser | null | undefined) {
  const lists = await Promise.all(
    EDITABLE.map(({ collection, label }) =>
      safe(
        async () =>
          (
            await payload.find({
              collection,
              sort: '-updatedAt',
              limit: 5,
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
        [] as { key: string; href: string; title: string; label: string; updatedAt: string; draft: boolean }[],
      ),
    ),
  )
  return lists
    .flat()
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 5)
}

const ACTIONS = [
  { href: '/admin/nouveau-chantier', title: 'Ajouter un chantier', text: 'Des photos, une commune, quelques mots.', icon: Camera },
  { href: '/admin/horaires', title: 'Changer mes horaires', text: 'Et vos coordonnées : tout le site suit.', icon: Clock },
  { href: '/admin/collections/pages', title: 'Modifier une page', text: 'Les textes et les photos de chaque page.', icon: PenLine },
  { href: '/admin/collections/media', title: 'Remplacer une photo', text: 'Toutes les photos du site au même endroit.', icon: ImageIcon },
]

/**
 * Home of the administration: what is waiting (requests), the four things
 * Jean-Michel does most, the site at a glance and the latest changes.
 */
export async function DashboardView({ payload, user }: Props) {
  const scoped = { overrideAccess: false, user }
  const [requests, newCount, openPoints, counts, changes] = await Promise.all([
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
    safe(async () => (await payload.count({ collection: 'validation-points', where: { status: { equals: 'open' } }, ...scoped })).totalDocs, 0),
    Promise.all(
      (['projects', 'services', 'articles', 'media'] as const).map((collection) =>
        safe(async () => (await payload.count({ collection, ...scoped })).totalDocs, 0),
      ),
    ),
    recentChanges(payload, user),
  ])
  const [projects, services, articles, photos] = counts
  const firstName = ((user as { name?: string | null } | null)?.name ?? '').split(' ')[0]

  return (
    <Page>
      <PageHeader
        eyebrow={todayFr()}
        title={firstName ? `Bonjour ${firstName}` : 'Bonjour'}
        description="Voici ce qui vous attend aujourd’hui. Tout ce que vous changez ici apparaît sur le site en quelques secondes."
        actions={
          <Button variant="outline" asChild>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden="true" />
              Voir le site
            </a>
          </Button>
        }
      />

      <div className="tw:grid tw:gap-6 tw:lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Card className="tw:gap-0 tw:py-0">
          <CardHeader className="tw:border-b tw:border-border tw:py-5">
            <CardTitle className="tw:flex tw:items-center tw:gap-2.5">
              <Inbox className="tw:size-5 tw:text-muted-foreground" aria-hidden="true" />
              Demandes à traiter
              {newCount ? <Badge>{newCount} nouvelle{newCount > 1 ? 's' : ''}</Badge> : null}
            </CardTitle>
            <CardDescription>Les dernières demandes de devis envoyées depuis le site.</CardDescription>
          </CardHeader>
          <CardContent className="tw:px-0">
            {requests.length ? (
              <ul className="tw:m-0 tw:list-none tw:p-0">
                {requests.map((request) => (
                  <li key={request.id} className="tw:border-b tw:border-border tw:last:border-b-0">
                    <Link
                      href={`/admin/demandes?id=${request.id}`}
                      className="tw:flex tw:min-h-16 tw:items-center tw:gap-4 tw:px-6 tw:py-3.5 tw:text-foreground tw:no-underline tw:transition-colors tw:hover:bg-muted"
                    >
                      <span className="tw:flex tw:min-w-0 tw:flex-1 tw:flex-col tw:gap-0.5">
                        <span className="tw:truncate tw:text-[15px] tw:font-semibold">{request.contactName || 'Visiteur'}</span>
                        <span className="tw:truncate tw:text-sm tw:text-muted-foreground">
                          {[request.summary, request.commune].filter(Boolean).join(' · ') || 'Demande de devis'}
                        </span>
                      </span>
                      <span className="tw:hidden tw:text-sm tw:text-muted-foreground tw:sm:inline">{relativeFr(request.createdAt)}</span>
                      {request.status === 'new' ? <Badge>Nouvelle</Badge> : <Badge variant="secondary">En cours</Badge>}
                      <ArrowRight className="tw:size-4 tw:text-muted-foreground" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="tw:p-6">
                <EmptyState icon={<Inbox />} title="Aucune demande en attente." text="Les nouvelles demandes de devis arrivent ici et par e-mail." />
              </div>
            )}
          </CardContent>
          <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3 tw:border-t tw:border-border tw:px-6 tw:py-4">
            <Button asChild>
              <Link href="/admin/demandes">
                Ouvrir les demandes
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            {openPoints ? (
              <Link
                href="/admin/collections/validation-points?where[status][equals]=open"
                className="tw:inline-flex tw:items-center tw:gap-2 tw:text-sm tw:font-semibold tw:text-foreground tw:no-underline tw:hover:underline"
              >
                <CircleCheck className="tw:size-4 tw:text-muted-foreground" aria-hidden="true" />
                {openPoints} information{openPoints > 1 ? 's' : ''} à confirmer pour le site
              </Link>
            ) : null}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Votre site</CardTitle>
            <CardDescription>Ce qui est en ligne aujourd’hui.</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="tw:m-0 tw:grid tw:grid-cols-2 tw:gap-3">
              {[
                { label: 'chantiers', value: projects, href: '/admin/collections/projects' },
                { label: 'prestations', value: services, href: '/admin/collections/services' },
                { label: 'conseils', value: articles, href: '/admin/collections/articles' },
                { label: 'photos', value: photos, href: '/admin/collections/media' },
              ].map((stat) => (
                <Link
                  key={stat.label}
                  href={stat.href}
                  className="tw:flex tw:flex-col tw:gap-1 tw:rounded-lg tw:bg-muted tw:px-4 tw:py-3 tw:text-foreground tw:no-underline tw:transition-colors tw:hover:bg-accent"
                >
                  <dd className="tw:m-0 tw:font-heading tw:text-[28px] tw:font-bold tw:leading-none">{stat.value}</dd>
                  <dt className="tw:text-sm tw:text-muted-foreground">{stat.label}</dt>
                </Link>
              ))}
            </dl>
          </CardContent>
        </Card>
      </div>

      <Section title="Que voulez-vous faire ?">
        <ul className="tw:m-0 tw:grid tw:list-none tw:gap-4 tw:p-0 tw:sm:grid-cols-2 tw:xl:grid-cols-4">
          {ACTIONS.map(({ href, title, text, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="tw:group tw:flex tw:h-full tw:flex-col tw:gap-4 tw:rounded-xl tw:border tw:border-border tw:bg-card tw:p-5 tw:text-foreground tw:no-underline tw:shadow-xs tw:transition-[border-color,box-shadow,transform] tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:border-transparent tw:hover:shadow-md tw:focus-visible:outline-none tw:focus-visible:ring-[3px] tw:focus-visible:ring-ring/40"
              >
                <span className="tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:bg-sage tw:text-[#102311]">
                  <Icon className="tw:size-[22px]" aria-hidden="true" />
                </span>
                <span className="tw:flex tw:flex-col tw:gap-1">
                  <span className="tw:font-heading tw:text-lg tw:font-semibold">{title}</span>
                  <span className="tw:text-[15px] tw:text-muted-foreground">{text}</span>
                </span>
                <span className="tw:mt-auto tw:inline-flex tw:items-center tw:gap-1.5 tw:text-sm tw:font-semibold tw:text-primary tw:dark:text-sage">
                  Commencer
                  <ArrowRight className="tw:size-4 tw:transition-transform tw:group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <div className="tw:grid tw:gap-6 tw:lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Section title="Dernières modifications">
          <Card className="tw:gap-0 tw:py-0">
            {changes.length ? (
              <ul className="tw:m-0 tw:list-none tw:p-0">
                {changes.map((change) => (
                  <li key={change.key} className="tw:border-b tw:border-border tw:last:border-b-0">
                    <Link
                      href={change.href}
                      className="tw:flex tw:min-h-14 tw:items-center tw:gap-3 tw:px-5 tw:py-3 tw:text-foreground tw:no-underline tw:hover:bg-muted"
                    >
                      <FileText className="tw:size-[18px] tw:shrink-0 tw:text-muted-foreground" aria-hidden="true" />
                      <span className="tw:flex tw:min-w-0 tw:flex-1 tw:flex-col">
                        <span className="tw:truncate tw:text-[15px] tw:font-medium">{change.title || 'Sans titre'}</span>
                        <span className="tw:text-sm tw:text-muted-foreground">
                          {change.label} · modifié {relativeFr(change.updatedAt)}
                        </span>
                      </span>
                      {change.draft ? <Badge variant="warning">Brouillon</Badge> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="tw:m-0 tw:p-5 tw:text-[15px] tw:text-muted-foreground">Rien n’a encore été modifié.</p>
            )}
          </Card>
        </Section>

        <Section title="Comment ça marche ?">
          <Card>
            <CardContent>
              <ol className="tw:m-0 tw:flex tw:list-none tw:flex-col tw:gap-4 tw:p-0">
                {[
                  { n: '1', title: 'Ouvrez', text: 'une page, un chantier ou une photo dans le menu de gauche.' },
                  { n: '2', title: 'Changez', text: 'le texte ou la photo. Le design reste en place : vous ne pouvez rien casser.' },
                  { n: '3', title: 'Publiez', text: 'avec le bouton vert en haut à droite. Le site est à jour.' },
                ].map((step) => (
                  <li key={step.n} className="tw:flex tw:gap-3">
                    <span className="tw:grid tw:size-8 tw:shrink-0 tw:place-items-center tw:rounded-full tw:bg-primary tw:font-heading tw:text-sm tw:font-bold tw:text-primary-foreground">
                      {step.n}
                    </span>
                    <p className="tw:m-0 tw:pt-1 tw:text-[15px] tw:leading-relaxed">
                      <strong className="tw:font-semibold">{step.title}</strong> {step.text}
                    </p>
                  </li>
                ))}
              </ol>
              <Link
                href="/admin/aide"
                className="tw:mt-5 tw:inline-flex tw:items-center tw:gap-2 tw:text-sm tw:font-semibold tw:text-foreground tw:no-underline tw:hover:underline"
              >
                <MapPin className="tw:size-4 tw:text-muted-foreground" aria-hidden="true" />
                Le guide pas à pas
              </Link>
            </CardContent>
          </Card>
        </Section>
      </div>
    </Page>
  )
}
