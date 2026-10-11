'use client'

import { SetStepNav, toast } from '@payloadcms/ui'
import { Archive, ArrowLeft, CircleCheck, FileText, Inbox, Mail, MapPin, Paperclip, Phone, RotateCcw, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useMemo, useState, useTransition } from 'react'

import { relativeFr } from '../../lib/time'
import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { FieldHint, Input, Label, Textarea } from '../../ui/input'
import { EmptyState, Page, PageHeader } from '../../ui/page'
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs'
import { cn } from '../../ui/utils'

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

const STATUS: Record<InboxRequest['status'], { label: string; variant: 'default' | 'secondary' | 'success' | 'outline' }> = {
  new: { label: 'Nouvelle', variant: 'default' },
  'in-progress': { label: 'En cours', variant: 'outline' },
  done: { label: 'Traitée', variant: 'success' },
  archived: { label: 'Archivée', variant: 'secondary' },
}

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

/** Inbox of the requests: list on the left, the open request on the right (one or the other on a phone). */
export function RequestsInbox({ requests, initialId, failed }: { requests: InboxRequest[]; initialId: number | null; failed: boolean }) {
  const router = useRouter()
  const [items, setItems] = useState(requests)
  const [filter, setFilter] = useState<Filter>('todo')
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState<number | null>(initialId)
  const [pending, startTransition] = useTransition()

  const counts = useMemo(
    () => ({
      todo: items.filter((item) => item.status === 'new' || item.status === 'in-progress').length,
      done: items.filter((item) => item.status === 'done').length,
      all: items.length,
    }),
    [items],
  )

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => {
      if (filter === 'todo' && !(item.status === 'new' || item.status === 'in-progress')) return false
      if (filter === 'done' && item.status !== 'done') return false
      if (!q) return true
      return [item.name, item.email, item.phone, item.commune, item.summary].some((text) => text.toLowerCase().includes(q))
    })
  }, [items, filter, query])

  const selected = items.find((item) => item.id === selectedId) ?? null

  const update = (id: number, data: Partial<Pick<InboxRequest, 'status' | 'notes'>>, message: string) => {
    const before = items
    setItems((list) => list.map((item) => (item.id === id ? { ...item, ...data } : item)))
    startTransition(async () => {
      try {
        await patch(id, data)
        toast.success(message)
        router.refresh()
      } catch {
        setItems(before)
        toast.error('Le changement n’a pas été enregistré. Vérifiez la connexion et réessayez.')
      }
    })
  }

  return (
    <Page>
      <SetStepNav nav={[{ label: 'Demandes' }]} />
      <PageHeader
        title="Demandes"
        description="Les demandes de devis envoyées depuis le site. Répondez, puis marquez la demande comme traitée."
      />

      {failed ? (
        <EmptyState icon={<Inbox />} title="Les demandes n’ont pas pu être chargées." text="Rechargez la page dans un instant." />
      ) : (
        <div className="tw:grid tw:items-start tw:gap-6 tw:lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <section aria-label="Liste des demandes" className={cn('tw:flex tw:flex-col tw:gap-4', selected && 'tw:hidden tw:lg:flex')}>
            <div className="tw:flex tw:flex-col tw:gap-3">
              <Tabs value={filter} onValueChange={(value) => setFilter(value as Filter)}>
                <TabsList aria-label="Filtrer les demandes">
                  <TabsTrigger value="todo">À traiter ({counts.todo})</TabsTrigger>
                  <TabsTrigger value="done">Traitées ({counts.done})</TabsTrigger>
                  <TabsTrigger value="all">Toutes ({counts.all})</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="tw:relative">
                <Search className="tw:pointer-events-none tw:absolute tw:top-1/2 tw:left-3.5 tw:size-[18px] tw:-translate-y-1/2 tw:text-muted-foreground" aria-hidden="true" />
                <Input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Chercher un nom, une commune…"
                  aria-label="Chercher une demande"
                  className="tw:pl-10"
                />
              </div>
            </div>

            {visible.length ? (
              <Card className="tw:gap-0 tw:overflow-hidden tw:py-0">
                <ul className="tw:m-0 tw:list-none tw:p-0">
                  {visible.map((item) => {
                    const active = item.id === selectedId
                    return (
                      <li key={item.id} className="tw:border-b tw:border-border tw:last:border-b-0">
                        <button
                          type="button"
                          onClick={() => setSelectedId(item.id)}
                          aria-current={active ? 'true' : undefined}
                          className={cn(
                            'tw:flex tw:w-full tw:cursor-pointer tw:items-start tw:gap-3 tw:border-0 tw:bg-transparent tw:px-5 tw:py-4 tw:text-left tw:font-sans tw:text-foreground tw:transition-colors tw:hover:bg-muted tw:focus-visible:outline-none tw:focus-visible:ring-[3px] tw:focus-visible:ring-inset tw:focus-visible:ring-ring/40',
                            active && 'tw:bg-accent tw:hover:bg-accent',
                          )}
                        >
                          <span
                            className={cn('tw:mt-2 tw:size-2.5 tw:shrink-0 tw:rounded-full', item.status === 'new' ? 'tw:bg-primary tw:dark:bg-sage' : 'tw:bg-transparent')}
                            aria-hidden="true"
                          />
                          <span className="tw:flex tw:min-w-0 tw:flex-1 tw:flex-col tw:gap-1">
                            <span className="tw:flex tw:items-baseline tw:justify-between tw:gap-3">
                              <span className={cn('tw:truncate tw:text-[15px]', item.status === 'new' ? 'tw:font-bold' : 'tw:font-semibold')}>
                                {item.name || 'Visiteur'}
                              </span>
                              <span className="tw:shrink-0 tw:text-[13px] tw:text-muted-foreground">{relativeFr(item.createdAt)}</span>
                            </span>
                            <span className="tw:truncate tw:text-sm tw:text-muted-foreground">
                              {[item.summary, item.commune].filter(Boolean).join(' · ') || 'Demande de devis'}
                            </span>
                            <span className="tw:mt-1">
                              <Badge variant={STATUS[item.status].variant}>{STATUS[item.status].label}</Badge>
                            </span>
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </Card>
            ) : (
              <EmptyState
                icon={<Inbox />}
                title={filter === 'todo' && !query ? 'Aucune demande à traiter.' : 'Aucune demande ici.'}
                text={filter === 'todo' && !query ? 'Bonne journée. Les nouvelles demandes arriveront ici et par e-mail.' : 'Essayez un autre filtre ou un autre mot.'}
              />
            )}
          </section>

          <section aria-label="Demande ouverte" className={cn(!selected && 'tw:hidden tw:lg:block')}>
            {selected ? (
              <RequestDetail
                key={selected.id}
                request={selected}
                pending={pending}
                onBack={() => setSelectedId(null)}
                onStatus={(status, message) => update(selected.id, { status }, message)}
                onNotes={(notes) => update(selected.id, { notes }, 'Note enregistrée.')}
              />
            ) : (
              <EmptyState icon={<FileText />} title="Choisissez une demande dans la liste." text="Elle s’ouvrira ici, avec les boutons pour appeler ou répondre." />
            )}
          </section>
        </div>
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
  onStatus: (status: InboxRequest['status'], message: string) => void
  onNotes: (notes: string) => void
}) {
  const [notes, setNotes] = useState(request.notes)
  const subject = encodeURIComponent(`Votre demande à 3B Charpente${request.summary ? ` : ${request.summary}` : ''}`)
  const done = request.status === 'done' || request.status === 'archived'
  const date = new Date(request.createdAt).toLocaleString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Paris',
  })

  return (
    <Card className="tw:gap-6 tw:lg:sticky tw:lg:top-[calc(var(--app-header-height)+16px)]">
      <div className="tw:flex tw:flex-col tw:gap-4 tw:px-6">
        <Button variant="ghost" size="sm" onClick={onBack} className="tw:-ml-2 tw:self-start tw:lg:hidden">
          <ArrowLeft aria-hidden="true" />
          Toutes les demandes
        </Button>
        <div className="tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3">
          <div className="tw:flex tw:min-w-0 tw:flex-col tw:gap-1">
            <h2 className="tw:m-0 tw:font-heading tw:text-2xl tw:font-bold tw:tracking-[-0.01em]">{request.name || 'Visiteur'}</h2>
            <p className="tw:m-0 tw:text-sm tw:text-muted-foreground tw:first-letter:uppercase">Reçue {date}</p>
          </div>
          <Badge variant={STATUS[request.status].variant}>{STATUS[request.status].label}</Badge>
        </div>
        <div className="tw:flex tw:flex-wrap tw:gap-3">
          {request.phone ? (
            <Button size="lg" asChild>
              <a href={tel(request.phone)}>
                <Phone aria-hidden="true" />
                Appeler le {request.phone}
              </a>
            </Button>
          ) : null}
          {request.email ? (
            <Button size="lg" variant={request.phone ? 'outline' : 'default'} asChild>
              <a href={`mailto:${request.email}?subject=${subject}`}>
                <Mail aria-hidden="true" />
                Répondre par e-mail
              </a>
            </Button>
          ) : null}
        </div>
      </div>

      <dl className="tw:m-0 tw:grid tw:gap-x-6 tw:gap-y-4 tw:border-y tw:border-border tw:px-6 tw:py-5 tw:sm:grid-cols-2">
        {request.summary ? <Fact label="Projet" value={request.summary} /> : null}
        {request.commune ? <Fact label="Commune" value={request.commune} icon={<MapPin aria-hidden="true" />} /> : null}
        {request.email ? <Fact label="E-mail" value={request.email} /> : null}
        {request.phone ? <Fact label="Téléphone" value={request.phone} /> : null}
        {request.data
          .filter((row) => !['nom', 'e-mail', 'email', 'téléphone', 'commune'].some((skip) => row.label.toLowerCase().startsWith(skip)))
          .map((row, index) => (
            <Fact key={`${row.label}-${index}`} label={row.label} value={row.value} wide={row.long} />
          ))}
      </dl>

      {request.attachments.length ? (
        <div className="tw:flex tw:flex-col tw:gap-2 tw:px-6">
          <p className="tw:m-0 tw:text-sm tw:font-semibold">Pièces jointes</p>
          <ul className="tw:m-0 tw:flex tw:list-none tw:flex-wrap tw:gap-2 tw:p-0">
            {request.attachments.map((file) => (
              <li key={file.url}>
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw:inline-flex tw:min-h-10 tw:items-center tw:gap-2 tw:rounded-lg tw:border tw:border-border tw:bg-muted tw:px-3 tw:text-sm tw:font-medium tw:text-foreground tw:no-underline tw:hover:bg-accent"
                >
                  <Paperclip className="tw:size-4" aria-hidden="true" />
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="tw:flex tw:flex-col tw:gap-2 tw:px-6">
        <Label htmlFor={`notes-${request.id}`}>Notes pour vous</Label>
        <Textarea
          id={`notes-${request.id}`}
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Ex. : rappelé le 12, visite prévue mardi."
          rows={3}
        />
        <div className="tw:flex tw:items-center tw:justify-between tw:gap-3">
          <FieldHint>Visible seulement dans l’administration.</FieldHint>
          <Button size="sm" variant="outline" disabled={pending || notes === request.notes} onClick={() => onNotes(notes)}>
            Enregistrer la note
          </Button>
        </div>
      </div>

      <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3 tw:border-t tw:border-border tw:px-6 tw:pt-5">
        {done ? (
          <Button variant="outline" disabled={pending} onClick={() => onStatus('new', 'La demande est de nouveau à traiter.')}>
            <RotateCcw aria-hidden="true" />
            Remettre à traiter
          </Button>
        ) : (
          <Button disabled={pending} onClick={() => onStatus('done', 'Demande marquée comme traitée.')}>
            <CircleCheck aria-hidden="true" />
            Marquer comme traitée
          </Button>
        )}
        {request.status !== 'archived' ? (
          <Button variant="ghost" disabled={pending} onClick={() => onStatus('archived', 'Demande archivée.')}>
            <Archive aria-hidden="true" />
            Archiver
          </Button>
        ) : null}
        {request.sourcePage ? <p className="tw:m-0 tw:w-full tw:text-[13px] tw:text-muted-foreground">Envoyée depuis la page {request.sourcePage}</p> : null}
      </div>
    </Card>
  )
}

function Fact({ label, value, icon, wide }: { label: string; value: string; icon?: React.ReactNode; wide?: boolean }) {
  return (
    <div className={cn('tw:flex tw:min-w-0 tw:flex-col tw:gap-1', wide && 'tw:sm:col-span-2')}>
      <dt className="tw:text-[13px] tw:font-semibold tw:uppercase tw:tracking-[0.06em] tw:text-muted-foreground">{label}</dt>
      <dd className="tw:m-0 tw:flex tw:items-start tw:gap-1.5 tw:whitespace-pre-line tw:text-[15px] tw:leading-relaxed tw:break-words tw:[&_svg]:mt-1 tw:[&_svg]:size-4 tw:[&_svg]:shrink-0">
        {icon}
        {value}
      </dd>
    </div>
  )
}
