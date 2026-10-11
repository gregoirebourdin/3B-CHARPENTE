'use client'

import { SetStepNav, toast } from '@payloadcms/ui'
import { CalendarOff, Copy, Eye, Plus, Save, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMemo, useState, useTransition } from 'react'

import { groupedHours } from '@/lib/hours'
import type { Company } from '@/payload-types'

import { Button } from '../../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import { FieldHint, Input, Label } from '../../ui/input'
import { EmptyState, Page, PageHeader } from '../../ui/page'
import { Switch } from '../../ui/switch'
import { cn } from '../../ui/utils'

type Day = NonNullable<Company['hours']>[number]
type Closure = NonNullable<Company['closures']>[number]

type Data = {
  phone: string
  email: string
  address: { street: string; postalCode: string; city: string; region: string }
  hours: Day[]
  closures: Closure[]
  hoursNote: string
}

const DAYS: { value: Day['day']; label: string }[] = [
  { value: 'monday', label: 'Lundi' },
  { value: 'tuesday', label: 'Mardi' },
  { value: 'wednesday', label: 'Mercredi' },
  { value: 'thursday', label: 'Jeudi' },
  { value: 'friday', label: 'Vendredi' },
  { value: 'saturday', label: 'Samedi' },
  { value: 'sunday', label: 'Dimanche' },
]

const PHONE = /^0\d( ?\d{2}){4}$/
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** One row per day, always the seven days in order (missing ones are added, closed). */
function normalise(hours: Day[]): Day[] {
  return DAYS.map(({ value }) => hours.find((day) => day.day === value) ?? { day: value, closed: true })
}

function dayError(day: Day): string | null {
  if (day.closed) return null
  if (!day.opens || !day.closes) return 'Indiquez l’heure d’ouverture et de fermeture.'
  if (day.opens >= day.closes) return 'L’heure de fermeture doit être après l’ouverture.'
  if (day.opens2 || day.closes2) {
    if (!day.opens2 || !day.closes2) return 'Indiquez les deux heures de l’après-midi.'
    if (day.opens2 <= day.closes) return 'L’après-midi doit commencer après la pause.'
    if (day.opens2 >= day.closes2) return 'L’heure de fermeture doit être après la réouverture.'
  }
  return null
}

/** The week, the phone and the address: the details shown everywhere on the site and sent to Google. */
export function HoursEditor({ initial }: { initial: Data | null }) {
  const router = useRouter()
  const [data, setData] = useState<Data | null>(initial ? { ...initial, hours: normalise(initial.hours) } : null)
  const [saved, setSaved] = useState(JSON.stringify(initial ? { ...initial, hours: normalise(initial.hours) } : null))
  const [pending, startTransition] = useTransition()
  const [showErrors, setShowErrors] = useState(false)

  const dirty = JSON.stringify(data) !== saved
  const preview = useMemo(() => (data ? groupedHours(data.hours as Company['hours']) : []), [data])

  if (!data) {
    return (
      <Page>
        <SetStepNav nav={[{ label: 'Coordonnées et horaires' }]} />
        <EmptyState title="Les réglages n’ont pas pu être chargés." text="Rechargez la page dans un instant." />
      </Page>
    )
  }

  const setDay = (index: number, patch: Partial<Day>) =>
    setData((current) => current && { ...current, hours: current.hours.map((day, i) => (i === index ? { ...day, ...patch } : day)) })

  const copyToWeekdays = () => {
    const monday = data.hours[0]!
    setData(
      (current) =>
        current && {
          ...current,
          hours: current.hours.map((day, index) =>
            index > 0 && index < 5
              ? { ...day, closed: monday.closed, opens: monday.opens, closes: monday.closes, opens2: monday.opens2, closes2: monday.closes2 }
              : day,
          ),
        },
    )
    toast.info('Les horaires du lundi sont copiés du mardi au vendredi. Pensez à enregistrer.')
  }

  const errors = {
    phone: PHONE.test(data.phone.trim()) ? null : 'Format attendu : 06 34 67 31 49',
    email: EMAIL.test(data.email.trim()) ? null : 'Adresse e-mail incomplète.',
    street: data.address.street.trim() ? null : 'Indiquez la rue.',
    postalCode: /^\d{5}$/.test(data.address.postalCode.trim()) ? null : '5 chiffres, ex. : 05120',
    city: data.address.city.trim() ? null : 'Indiquez la commune.',
    days: data.hours.map(dayError),
    closures: data.closures.map((closure) =>
      !closure.from || !closure.to ? 'Indiquez les deux dates.' : closure.from > closure.to ? 'La date de fin doit être après le début.' : null,
    ),
  }
  const hasErrors =
    [errors.phone, errors.email, errors.street, errors.postalCode, errors.city].some(Boolean) ||
    errors.days.some(Boolean) ||
    errors.closures.some(Boolean)

  const save = () => {
    if (hasErrors) {
      setShowErrors(true)
      toast.error('Quelques cases sont à corriger : elles sont signalées en rouge.')
      return
    }
    startTransition(async () => {
      const body = {
        phone: data.phone.trim(),
        email: data.email.trim(),
        address: { ...data.address, street: data.address.street.trim(), city: data.address.city.trim() },
        hours: data.hours.map((day) =>
          day.closed ? { ...day, opens: null, closes: null, opens2: null, closes2: null } : { ...day, opens2: day.opens2 || null, closes2: day.closes2 || null },
        ),
        closures: data.closures,
        hoursNote: data.hoursNote.trim() || null,
      }
      try {
        const response = await fetch('/api/globals/company', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
        if (!response.ok) throw new Error(String(response.status))
        setSaved(JSON.stringify(data))
        setShowErrors(false)
        toast.success('Enregistré. Le site est à jour.')
        router.refresh()
      } catch {
        toast.error('L’enregistrement n’a pas abouti. Vérifiez la connexion et réessayez.')
      }
    })
  }

  const err = (message: string | null | undefined) => (showErrors && message ? message : null)

  return (
    <Page>
      <SetStepNav nav={[{ label: 'Coordonnées et horaires' }]} />
      <PageHeader
        title="Coordonnées et horaires"
        description="Ces informations s’affichent partout sur le site : en haut des pages, dans le pied de page, sur la page Contact et dans Google."
        actions={
          <Button size="lg" onClick={save} disabled={pending || !dirty}>
            <Save aria-hidden="true" />
            {pending ? 'Enregistrement…' : dirty ? 'Enregistrer' : 'Tout est enregistré'}
          </Button>
        }
      />

      <div className="tw:grid tw:items-start tw:gap-6 tw:xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="tw:flex tw:flex-col tw:gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Horaires de la semaine</CardTitle>
              <CardDescription>Cochez les jours d’ouverture. La pause de midi est facultative.</CardDescription>
            </CardHeader>
            <CardContent className="tw:flex tw:flex-col">
              {data.hours.map((day, index) => {
                const label = DAYS[index]!.label
                const open = !day.closed
                const split = Boolean(day.opens2 || day.closes2)
                const error = err(errors.days[index])
                return (
                  <fieldset key={day.day} className="tw:m-0 tw:grid tw:min-w-0 tw:gap-3 tw:border-0 tw:border-t tw:border-solid tw:border-border tw:px-0 tw:py-4 tw:first:border-t-0 tw:first:pt-0 tw:md:grid-cols-[150px_minmax(0,1fr)] tw:md:items-center">
                    <legend className="tw:sr-only">{label}</legend>
                    <div className="tw:flex tw:items-center tw:gap-3">
                      <Switch
                        id={`open-${day.day}`}
                        checked={open}
                        onCheckedChange={(checked) =>
                          setDay(index, checked ? { closed: false, opens: day.opens || '07:30', closes: day.closes || '17:00' } : { closed: true })
                        }
                        aria-label={`${label} : ${open ? 'ouvert' : 'fermé'}`}
                      />
                      <Label htmlFor={`open-${day.day}`} className="tw:cursor-pointer tw:text-base">
                        {label}
                      </Label>
                    </div>
                    {open ? (
                      <div className="tw:flex tw:flex-col tw:gap-2">
                        <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-2">
                          <TimeInput label={`${label}, ouverture`} value={day.opens} onChange={(opens) => setDay(index, { opens })} invalid={Boolean(error)} />
                          <span className="tw:text-muted-foreground">à</span>
                          <TimeInput label={`${label}, fermeture`} value={day.closes} onChange={(closes) => setDay(index, { closes })} invalid={Boolean(error)} />
                          {split ? (
                            <>
                              <span className="tw:px-1 tw:text-muted-foreground">puis</span>
                              <TimeInput label={`${label}, réouverture`} value={day.opens2} onChange={(opens2) => setDay(index, { opens2 })} invalid={Boolean(error)} />
                              <span className="tw:text-muted-foreground">à</span>
                              <TimeInput label={`${label}, fermeture du soir`} value={day.closes2} onChange={(closes2) => setDay(index, { closes2 })} invalid={Boolean(error)} />
                              <Button variant="ghost" size="sm" onClick={() => setDay(index, { opens2: null, closes2: null })}>
                                Sans pause
                              </Button>
                            </>
                          ) : (
                            <Button variant="ghost" size="sm" onClick={() => setDay(index, { closes: '12:00', opens2: '13:30', closes2: day.closes || '17:00' })}>
                              <Plus aria-hidden="true" />
                              Pause de midi
                            </Button>
                          )}
                        </div>
                        {error ? (
                          <p role="alert" className="tw:m-0 tw:text-sm tw:font-medium tw:text-destructive">
                            {error}
                          </p>
                        ) : null}
                      </div>
                    ) : (
                      <p className="tw:m-0 tw:text-[15px] tw:text-muted-foreground">Fermé</p>
                    )}
                  </fieldset>
                )
              })}
              <div className="tw:flex tw:flex-wrap tw:gap-3 tw:border-t tw:border-border tw:pt-4">
                <Button variant="outline" onClick={copyToWeekdays}>
                  <Copy aria-hidden="true" />
                  Copier le lundi sur toute la semaine
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fermetures exceptionnelles</CardTitle>
              <CardDescription>Congés, ponts… Elles s’affichent sur le site deux mois à l’avance.</CardDescription>
            </CardHeader>
            <CardContent className="tw:flex tw:flex-col tw:gap-4">
              {data.closures.length ? (
                data.closures.map((closure, index) => {
                  const error = err(errors.closures[index])
                  const set = (patch: Partial<Closure>) =>
                    setData((current) => current && { ...current, closures: current.closures.map((c, i) => (i === index ? { ...c, ...patch } : c)) })
                  return (
                    <div key={closure.id ?? index} className="tw:grid tw:gap-3 tw:rounded-lg tw:bg-muted tw:p-4 tw:md:grid-cols-[1fr_1fr_1.4fr_auto] tw:md:items-end">
                      <div className="tw:flex tw:flex-col tw:gap-1.5">
                        <Label htmlFor={`from-${index}`}>Du</Label>
                        <Input id={`from-${index}`} type="date" value={(closure.from ?? '').slice(0, 10)} onChange={(e) => set({ from: e.target.value })} aria-invalid={Boolean(error)} />
                      </div>
                      <div className="tw:flex tw:flex-col tw:gap-1.5">
                        <Label htmlFor={`to-${index}`}>Au</Label>
                        <Input id={`to-${index}`} type="date" value={(closure.to ?? '').slice(0, 10)} onChange={(e) => set({ to: e.target.value })} aria-invalid={Boolean(error)} />
                      </div>
                      <div className="tw:flex tw:flex-col tw:gap-1.5">
                        <Label htmlFor={`label-${index}`}>Motif (facultatif)</Label>
                        <Input id={`label-${index}`} value={closure.label ?? ''} placeholder="Congés d’été" onChange={(e) => set({ label: e.target.value })} />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Supprimer cette fermeture"
                        onClick={() => setData((current) => current && { ...current, closures: current.closures.filter((_, i) => i !== index) })}
                      >
                        <Trash2 aria-hidden="true" />
                      </Button>
                      {error ? (
                        <p role="alert" className="tw:m-0 tw:text-sm tw:font-medium tw:text-destructive tw:md:col-span-4">
                          {error}
                        </p>
                      ) : null}
                    </div>
                  )
                })
              ) : (
                <p className="tw:m-0 tw:flex tw:items-center tw:gap-2 tw:text-[15px] tw:text-muted-foreground">
                  <CalendarOff className="tw:size-[18px]" aria-hidden="true" />
                  Aucune fermeture prévue.
                </p>
              )}
              <Button
                variant="outline"
                className="tw:self-start"
                onClick={() => setData((current) => current && { ...current, closures: [...current.closures, { from: '', to: '', label: '' } as Closure] })}
              >
                <Plus aria-hidden="true" />
                Ajouter une fermeture
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="tw:flex tw:flex-col tw:gap-6 tw:xl:sticky tw:xl:top-[calc(var(--app-header-height)+16px)]">
          <Card>
            <CardHeader>
              <CardTitle>Téléphone, e-mail et adresse</CardTitle>
            </CardHeader>
            <CardContent className="tw:flex tw:flex-col tw:gap-4">
              <Field id="phone" label="Téléphone" error={err(errors.phone)} hint="Comme il s’affiche : 06 34 67 31 49">
                <Input id="phone" type="tel" inputMode="tel" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} aria-invalid={Boolean(err(errors.phone))} />
              </Field>
              <Field id="email" label="E-mail" error={err(errors.email)} hint="Les demandes du site arrivent à cette adresse.">
                <Input id="email" type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} aria-invalid={Boolean(err(errors.email))} />
              </Field>
              <Field id="street" label="Rue" error={err(errors.street)}>
                <Input id="street" value={data.address.street} onChange={(e) => setData({ ...data, address: { ...data.address, street: e.target.value } })} aria-invalid={Boolean(err(errors.street))} />
              </Field>
              <div className="tw:grid tw:grid-cols-[120px_minmax(0,1fr)] tw:gap-3">
                <Field id="postalCode" label="Code postal" error={err(errors.postalCode)}>
                  <Input
                    id="postalCode"
                    inputMode="numeric"
                    value={data.address.postalCode}
                    onChange={(e) => setData({ ...data, address: { ...data.address, postalCode: e.target.value } })}
                    aria-invalid={Boolean(err(errors.postalCode))}
                  />
                </Field>
                <Field id="city" label="Commune" error={err(errors.city)}>
                  <Input id="city" value={data.address.city} onChange={(e) => setData({ ...data, address: { ...data.address, city: e.target.value } })} aria-invalid={Boolean(err(errors.city))} />
                </Field>
              </div>
              <Field id="note" label="Précision sous les horaires (facultatif)" hint="Ex. : « Sur rendez-vous en dehors de ces horaires ».">
                <Input id="note" value={data.hoursNote} maxLength={160} onChange={(e) => setData({ ...data, hoursNote: e.target.value })} />
              </Field>
            </CardContent>
          </Card>

          <Card className="tw:border-transparent tw:bg-[#2c4f2d] tw:text-white tw:dark:bg-[#1f3a22]">
            <CardHeader>
              <CardTitle className="tw:flex tw:items-center tw:gap-2 tw:text-white">
                <Eye className="tw:size-5" aria-hidden="true" />
                Ce que voient vos clients
              </CardTitle>
            </CardHeader>
            <CardContent className="tw:flex tw:flex-col tw:gap-3">
              <p className="tw:m-0 tw:font-heading tw:text-[28px] tw:font-bold tw:leading-none">{data.phone || '—'}</p>
              <ul className="tw:m-0 tw:flex tw:list-none tw:flex-col tw:gap-1 tw:p-0 tw:text-[15px] tw:text-white/85">
                {preview.map((group) => (
                  <li key={group.days} className={cn(group.closed && 'tw:text-white/60')}>
                    <strong className="tw:font-semibold tw:text-white">{group.days}</strong> : {group.hours}
                  </li>
                ))}
              </ul>
              {data.hoursNote ? <p className="tw:m-0 tw:text-sm tw:text-white/75">{data.hoursNote}</p> : null}
              <p className="tw:m-0 tw:text-sm tw:text-white/75">
                {data.address.street}, {data.address.postalCode} {data.address.city}
              </p>
            </CardContent>
          </Card>

          <p className="tw:m-0 tw:text-sm tw:text-muted-foreground">
            Nom, SIRET, qualifications RGE :{' '}
            <Link href="/admin/globals/company" className="tw:font-semibold tw:text-foreground">
              toutes les informations de l’entreprise
            </Link>
            .
          </p>
        </div>
      </div>
    </Page>
  )
}

function TimeInput({ label, value, onChange, invalid }: { label: string; value?: string | null; onChange: (value: string) => void; invalid?: boolean }) {
  return <Input type="time" step={300} aria-label={label} value={value ?? ''} onChange={(e) => onChange(e.target.value)} aria-invalid={invalid} className="tw:w-[140px]" />
}

function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string | null; children: React.ReactNode }) {
  return (
    <div className="tw:flex tw:flex-col tw:gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p role="alert" className="tw:m-0 tw:text-sm tw:font-medium tw:text-destructive">
          {error}
        </p>
      ) : hint ? (
        <FieldHint>{hint}</FieldHint>
      ) : null}
    </div>
  )
}
