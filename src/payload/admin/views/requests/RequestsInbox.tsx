'use client'

import { SetStepNav } from '@payloadcms/ui'
import { Archive, ArrowLeft, CircleCheck, FileText, Hammer, Inbox, Mail, MapPin, Paperclip, Phone, RotateCcw, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useMemo, useState, useTransition, type ReactNode } from 'react'

import { relativeFr } from '../../lib/time'
import { Badge } from '../../ui/badge'
import { Button, Cta } from '../../ui/button'
import { Card } from '../../ui/card'
import { FieldHint, IconField, Input, Label, Textarea } from '../../ui/input'
import { notify } from '../../ui/notify'
import { EmptyState, Page, PageHeader } from '../../ui/page'
import { TabCount, Tabs, TabsList, TabsTrigger } from '../../ui/tabs'
import { cn, focusRing } from '../../ui/utils'

export type InboxRequest = {
  id: number
  status: 'new' | 'in-progress' | 'done' | 'archived'
  summary: string
  name: string
  email: string
  phone: string
  commune: string
  notes: string
  sourcePage: string
  createdAt: string
  attachments: { url: string; name: string }[]
  data: { label: string; value: string; long: boolean }[]
}

type Filter = 'todo' | 'done' | 'all'

const STATUS: Record<InboxRequest['status'], { label: string; variant: 'new' | 'done' | 'draft' }> = {
  new: { label: 'Nouvelle', variant: 'new' },
  'in-progress': { label: 'En cours', variant: 'draft' },
  done: { label: 'Traitée', variant: 'done' },
  archived: { label: 'Archivée', variant: 'done' },
}

const IMAGE = /\.(jpe?g|png|webp|avif|gif|heic)(\?|$)/i
const SKIP_FACTS = ['nom', 'prénom', 'e-mail', 'email', 'téléphone', 'commune']

const tel = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '').replace(/^0(\d{9})$/, '+33$1')}`

async function patch(id: number, data: Partial<Pick<InboxRequest, 'status' | 'notes'>>) {
  const response = await fetch(`/api/form-submissions/${id}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error(String(response.status))
}

const isTodo = (item: InboxRequest) => item.status === 'new' || item.status === 'in-progress'

/**
 * « Demandes » (designs § 17.3): one card in two panes, the list on the left
 * and the open request on the right. On a phone, the list alone; a request
 * opens in its own screen.
 */
export function RequestsInbox({ requests, initialId, failed }: { requests: InboxRequest[]; initialId: number | null; failed: boolean }) {
  const router = useRouter()
  const [items, setItems] = useState(requests)
  const [filter, setFilter] = useState<Filter>('todo')
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState<number | null>(initialId ?? requests.find(isTodo)?.id ?? null)
  const [mobileOpen, setMobileOpen] = useState(initialId !== null)
  const [pending, startTransition] = useTransition()

  const counts = useMemo(
    () => ({ todo: items.filter(isTodo).length, done: items.filter((item) => item.status === 'done').length, all: items.length }),
    [items],
  )

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => {
      if (filter === 'todo' && !isTodo(item)) return false
      if (filter === 'done' && item.status !== 'done') return false
      if (!q) return true
      return [item.name, item.email, item.phone, item.commune, item.summary].some((text) => text.toLowerCase().includes(q))
    })
  }, [items, filter, query])

  const selected = items.find((item) => item.id === selectedId) ?? null

  const update = (id: number, data: Partial<Pick<InboxRequest, 'status' | 'notes'>>, done: () => void) => {
    const before = items
    setItems((list) => list.map((item) => (item.id === id ? { ...item, ...data } : item)))
    startTransition(async () => {
      try {
        await patch(id, data)
        done()
        router.refresh()
      } catch {
        setItems(before)
        notify.error(() => update(id, data, done))
      }
    })
  }

  const open = (id: number) => {
    setSelectedId(id)
    setMobileOpen(true)
  }

  const emptyList =
    filter === 'todo' && !query ? (
      <EmptyState
        icon={<Inbox />}
        title="Aucune nouvelle demande."
        text="Bonne journée."
        meta="Dès qu’un visiteur remplit le formulaire, sa demande apparaît ici."
        action={
          counts.done ? (
            <Button variant="outline" onClick={() => setFilter('done')}>
              Voir les demandes traitées
            </Button>
          ) : null
        }
      />
    ) : query ? (
      <EmptyState
        icon={<Search />}
        title={`Rien ne correspond à « ${query.trim()} ».`}
        action={
          <Button variant="outline" onClick={() => setQuery('')}>
            Effacer la recherche
          </Button>
        }
      />
    ) : (
      <EmptyState icon={<Inbox />} title="Aucune demande ici." text="Essayez un autre onglet." />
    )

  return (
    <Page>
      <SetStepNav nav={[{ label: 'Demandes' }]} />
      <PageHeader
        title="Demandes"
        description="Les demandes de devis envoyées depuis le site. Appelez ou répondez, puis rangez la demande dans « Traitées »."
      />

      {failed ? (
        <Card>
          <EmptyState icon={<Inbox />} title="Les demandes n’ont pas pu être chargées." text="Rechargez la page dans un instant." />
        </Card>
      ) : (
        <Card className="tw:overflow-hidden tw:desk:grid tw:desk:min-h-[640px] tw:desk:grid-cols-[minmax(300px,372px)_minmax(0,1fr)]">
          {/* List */}
          <section
            aria-label="Liste des demandes"
            className={cn(
              'tw:flex tw:min-w-0 tw:flex-col tw:desk:max-h-[calc(100dvh-180px)] tw:desk:min-h-[640px] tw:desk:border-0 tw:desk:border-r tw:desk:border-solid tw:desk:border-line',
              mobileOpen && selected && 'tw:max-desk:hidden',
            )}
          >
            <div className="tw:grid tw:gap-3 tw:border-0 tw:border-b tw:border-solid tw:border-line tw:px-4 tw:pt-2 tw:pb-4">
              <Tabs value={filter} onValueChange={(value) => setFilter(value as Filter)}>
                <TabsList aria-label="Filtrer les demandes">
                  <TabsTrigger value="todo">
                    À traiter <TabCount value={counts.todo} />
                  </TabsTrigger>
                  <TabsTrigger value="done">
                    Traitées <TabCount value={counts.done} />
                  </TabsTrigger>
                  <TabsTrigger value="all">Toutes</TabsTrigger>
                </TabsList>
              </Tabs>
              <IconField icon={<Search />}>
                <Input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Un nom, une commune…" aria-label="Chercher une demande" />
              </IconField>
            </div>
            {visible.length ? (
              <ul className="tw:m-0 tw:flex-1 tw:list-none tw:overflow-y-auto tw:p-0">
                {visible.map((item) => {
                  const active = item.id === selectedId
                  return (
                    <li key={item.id} className="tw:border-0 tw:border-b tw:border-solid tw:border-line">
                      <button
                        type="button"
                        onClick={() => open(item.id)}
                        aria-current={active ? 'true' : undefined}
                        className={cn(
                          'tw:relative tw:grid tw:w-full tw:cursor-pointer tw:gap-1 tw:border-0 tw:bg-transparent tw:py-3.5 tw:pr-4 tw:pl-7 tw:text-left tw:font-sans tw:text-ink tw:transition-colors tw:duration-180 tw:hover:bg-surface',
                          "tw:aria-[current=true]:bg-sage-soft tw:desk:aria-[current=true]:before:absolute tw:desk:aria-[current=true]:before:inset-y-0 tw:desk:aria-[current=true]:before:left-0 tw:desk:aria-[current=true]:before:w-[3px] tw:desk:aria-[current=true]:before:bg-forest tw:desk:aria-[current=true]:before:content-['']",
                          focusRing,
                          'tw:focus-visible:outline-offset-[-2px]',
                        )}
                      >
                        {item.status === 'new' ? (
                          <span className="tw:absolute tw:top-[21px] tw:left-3 tw:size-2 tw:rounded-full tw:bg-leaf">
                            <span className="tw:sr-only">Non lue</span>
                          </span>
                        ) : null}
                        <span className="tw:flex tw:items-baseline tw:justify-between tw:gap-3">
                          <span className={cn('tw:truncate tw:text-base', item.status === 'new' ? 'tw:font-bold' : 'tw:font-semibold')}>{item.name || 'Visiteur du site'}</span>
                          <span className="tw:shrink-0 tw:text-sm tw:text-stone-text">{relativeFr(item.createdAt)}</span>
                        </span>
                        <span className="tw:truncate tw:text-[15px]">{item.summary || 'Demande de devis'}</span>
                        <span className="tw:flex tw:items-center tw:justify-between tw:gap-3">
                          <span className="tw:inline-flex tw:min-w-0 tw:items-center tw:gap-1.5 tw:truncate tw:text-sm tw:text-stone-text tw:[&_svg]:size-4 tw:[&_svg]:shrink-0">
                            {item.commune ? (
                              <>
                                <MapPin aria-hidden="true" />
                                {item.commune}
                              </>
                            ) : null}
                          </span>
                          <Badge variant={STATUS[item.status].variant}>{STATUS[item.status].label}</Badge>
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="tw:flex-1">{emptyList}</div>
            )}
          </section>

          {/* Open request */}
          <section aria-label="Demande ouverte" className={cn('tw:min-w-0', !(mobileOpen && selected) && 'tw:max-desk:hidden')}>
            {selected ? (
              <RequestDetail
                key={selected.id}
                request={selected}
                pending={pending}
                onBack={() => setMobileOpen(false)}
                onStatus={(status) =>
                  update(selected.id, { status }, () =>
                    status === 'done'
                      ? notify.done('Demande rangée dans « Traitées ».')
                      : status === 'archived'
                        ? notify.done('Demande archivée.', 'Elle reste dans « Toutes ».')
                        : notify.done('La demande est de nouveau à traiter.'),
                  )
                }
                onNotes={(notes) => update(selected.id, { notes }, () => notify.done('Note enregistrée.', 'Elle n’est visible que dans l’administration.'))}
              />
            ) : (
              <EmptyState icon={<FileText />} title="Choisissez une demande." text="Elle s’ouvrira ici, avec les boutons pour appeler ou répondre." />
            )}
          </section>
        </Card>
      )}
    </Page>
  )
}

function RequestDetail({
  request,
  pending,
  onBack,
  onStatus,
  onNotes,
}: {
  request: InboxRequest
  pending: boolean
  onBack: () => void
  onStatus: (status: InboxRequest['status']) => void
  onNotes: (notes: string) => void
}) {
  const [notes, setNotes] = useState(request.notes)
  const subject = encodeURIComponent(`Votre demande à 3B Charpente${request.summary ? ` : ${request.summary}` : ''}`)
  const done = request.status === 'done' || request.status === 'archived'
  const received = new Date(request.createdAt).toLocaleString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Paris',
  })
  const message = request.data.find((row) => row.long)
  const facts = request.data.filter((row) => row !== message && !SKIP_FACTS.some((skip) => row.label.toLowerCase().startsWith(skip)))
  const images = request.attachments.filter((file) => IMAGE.test(file.url))
  const files = request.attachments.filter((file) => !IMAGE.test(file.url))

  return (
    <article className="tw:flex tw:h-full tw:flex-col">
      <header className="tw:grid tw:gap-3 tw:border-0 tw:border-b tw:border-solid tw:border-line tw:p-6 tw:max-desk:p-4">
        <Button variant="ghost" onClick={onBack} className="tw:-ml-3 tw:justify-self-start tw:desk:hidden">
          <ArrowLeft aria-hidden="true" />
          Toutes les demandes
        </Button>
        <p className="tw:m-0 tw:flex tw:flex-wrap tw:items-center tw:gap-2.5 tw:text-sm tw:text-stone-text">
          <Badge variant={STATUS[request.status].variant}>{STATUS[request.status].label}</Badge>
          Reçue le {received.replace(':', ' h ')}
        </p>
        <h2 className="tw:m-0 tw:font-heading tw:text-[28px] tw:font-bold tw:leading-[1.15] tw:tracking-[-0.02em]">{request.name || 'Visiteur du site'}</h2>
        <p className="tw:m-0 tw:flex tw:flex-wrap tw:items-center tw:gap-x-2 tw:gap-y-1 tw:text-base tw:[&_svg]:size-[18px] tw:[&_svg]:text-leaf">
          <Hammer aria-hidden="true" />
          <span className="tw:font-semibold">{request.summary || 'Demande de devis'}</span>
          {request.commune ? <span className="tw:text-stone-text">· {request.commune}</span> : null}
        </p>
        <div className="tw:mt-1 tw:flex tw:flex-wrap tw:gap-3 tw:max-desk:grid">
          {request.phone ? (
            <Cta href={tel(request.phone)} size="lg" icon={<Phone />} className="tw:max-desk:w-full tw:max-desk:justify-between">
              Appeler
            </Cta>
          ) : null}
          {request.email ? (
            <Button variant="outline" size="lg" asChild>
              <a href={`mailto:${request.email}?subject=${subject}`}>
                <Mail aria-hidden="true" />
                Répondre par e-mail
              </a>
            </Button>
          ) : null}
        </div>
      </header>

      <div className="tw:grid tw:flex-1 tw:content-start tw:gap-6 tw:p-6 tw:wide:grid-cols-[minmax(0,1fr)_260px] tw:max-desk:p-4">
        <div className="tw:grid tw:content-start tw:gap-5">
          {message ? (
            <figure className="tw:m-0 tw:grid tw:gap-2">
              <figcaption className="tw:text-sm tw:font-semibold tw:text-stone-text">{message.label}</figcaption>
              <blockquote className="tw:m-0 tw:rounded-r-xs tw:border-0 tw:border-l-[3px] tw:border-solid tw:border-sage tw:bg-surface tw:px-4 tw:py-3.5 tw:text-base tw:leading-relaxed tw:whitespace-pre-line tw:break-words">
                {message.value}
              </blockquote>
            </figure>
          ) : null}

          {request.attachments.length ? (
            <div className="tw:grid tw:gap-2">
              <p className="tw:m-0 tw:text-sm tw:font-semibold tw:text-stone-text">Pièces jointes</p>
              {images.length ? (
                <ul className="tw:m-0 tw:grid tw:list-none tw:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] tw:gap-3 tw:p-0">
                  {images.map((file) => (
                    <li key={file.url}>
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn('tw:block tw:overflow-hidden tw:rounded-sm tw:border tw:border-line', focusRing)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element -- visitor's file, shown as is */}
                        <img src={file.url} alt={file.name} className="tw:block tw:aspect-[4/3] tw:w-full tw:object-cover" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
              {files.length ? (
                <ul className="tw:m-0 tw:flex tw:list-none tw:flex-wrap tw:gap-2 tw:p-0">
                  {files.map((file) => (
                    <li key={file.url}>
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'tw:inline-flex tw:min-h-11 tw:items-center tw:gap-2 tw:rounded-xs tw:border tw:border-dashed tw:border-line-strong tw:px-3 tw:text-[15px] tw:font-medium tw:text-ink tw:no-underline tw:hover:bg-surface',
                          focusRing,
                        )}
                      >
                        <Paperclip className="tw:size-4" aria-hidden="true" />
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}

          <div className="tw:grid tw:gap-2">
            <Label htmlFor={`notes-${request.id}`}>Notes pour vous</Label>
            <Textarea id={`notes-${request.id}`} value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Ex. : rappelé le 12, visite prévue mardi." rows={3} />
            <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3">
              <FieldHint>Visibles seulement dans l’administration.</FieldHint>
              <Button variant="outline" disabled={pending || notes === request.notes} onClick={() => onNotes(notes)}>
                Enregistrer la note
              </Button>
            </div>
          </div>
        </div>

        <dl className="tw:m-0 tw:grid tw:content-start tw:gap-4 tw:rounded-sm tw:border tw:border-line tw:p-4">
          {request.phone ? <Fact label="Téléphone" value={<a href={tel(request.phone)} className="tw:font-semibold tw:text-leaf">{request.phone}</a>} /> : null}
          {request.email ? <Fact label="E-mail" value={<a href={`mailto:${request.email}`} className="tw:font-semibold tw:break-all tw:text-leaf">{request.email}</a>} /> : null}
          {request.commune ? <Fact label="Commune" value={request.commune} /> : null}
          {facts.map((row, index) => (
            <Fact key={`${row.label}-${index}`} label={row.label} value={row.value} />
          ))}
          {request.sourcePage ? <Fact label="Envoyée depuis" value={request.sourcePage} /> : null}
        </dl>
      </div>

      <footer className="tw:mt-auto tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3 tw:border-0 tw:border-t tw:border-solid tw:border-line tw:bg-surface tw:px-6 tw:py-4 tw:max-desk:px-4">
        {request.status !== 'archived' ? (
          <Button variant="ghost" disabled={pending} onClick={() => onStatus('archived')}>
            <Archive aria-hidden="true" />
            Archiver
          </Button>
        ) : (
          <span />
        )}
        {done ? (
          <Button variant="outline" disabled={pending} onClick={() => onStatus('new')}>
            <RotateCcw aria-hidden="true" />
            Remettre à traiter
          </Button>
        ) : (
          <Button disabled={pending} onClick={() => onStatus('done')}>
            <CircleCheck aria-hidden="true" />
            Marquer comme traitée
          </Button>
        )}
      </footer>
    </article>
  )
}

function Fact({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="tw:grid tw:min-w-0 tw:gap-0.5">
      <dt className="tw:text-sm tw:text-stone-text">{label}</dt>
      <dd className="tw:m-0 tw:text-base tw:leading-normal tw:whitespace-pre-line tw:break-words">{value}</dd>
    </div>
  )
}
