'use client'

import { SetStepNav, toast } from '@payloadcms/ui'
import { CalendarOff, Check, Copy, Mail, MapPin, Phone, Plus, Trash2, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useMemo, useState, useTransition, type ReactNode } from 'react'

import { groupedHours } from '@/lib/hours'
import type { Company } from '@/payload-types'

import { Button, Cta } from '../../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Field, FieldError, FieldHint, fieldClass, IconField, Input, Label, Optional, selectClass } from '../../ui/input'
import { notify } from '../../ui/notify'
import { Alert, EmptyState, Page, PageHeader, TextLink } from '../../ui/page'
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
    toast.info('Le lundi est copié du mardi au vendredi.', { description: 'Pensez à enregistrer.' })
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
      toast.error('Quelques cases sont à corriger.', { description: 'Elles sont signalées en rouge.' })
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
        notify.saved('Vos coordonnées et vos horaires s’affichent déjà sur le site.')
        router.refresh()
      } catch {
        notify.error(save)
      }
    })
  }

  const err = (message: string | null | undefined) => (showErrors && message ? message : null)
  const savedData = JSON.parse(saved) as Data
  const changedDays = new Set(data.hours.filter((day, index) => JSON.stringify(day) !== JSON.stringify(savedData.hours[index])).map((day) => day.day))

  return (
    <Page>
      <SetStepNav nav={[{ label: 'Coordonnées et horaires' }]} />
      <PageHeader
        crumbs={[{ label: 'Réglages' }, { label: 'Coordonnées et horaires' }]}
        title="Coordonnées et horaires"
        description="Votre téléphone, votre adresse et vos heures d’ouverture, tels que vos clients les voient."
        actions={
          <Cta onClick={save} loading={pending} disabled={!dirty} icon={<Check />}>
            {pending ? 'Enregistrement…' : dirty ? 'Enregistrer' : 'Tout est enregistré'}
          </Cta>
        }
      />

      <Alert>
        <p>
          <strong>Ces informations s’affichent partout sur le site</strong> : en haut des pages, dans le pied de page, sur la page Contact et dans Google.
        </p>
      </Alert>

      <div className="tw:grid tw:items-start tw:gap-6 tw:wide:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="tw:grid tw:gap-6">
          <Card>
            <CardHeader>
              <div className="tw:grid tw:gap-1">
                <CardTitle>Horaires de la semaine</CardTitle>
                <CardDescription>Ouvert ou fermé, puis les heures. La pause de midi est facultative.</CardDescription>
              </div>
            </CardHeader>
            <div>
              {data.hours.map((day, index) => {
                const label = DAYS[index]!.label
                const open = !day.closed
                const split = Boolean(day.opens2 || day.closes2)
                const error = err(errors.days[index])
                const errorId = `day-error-${day.day}`
                return (
                  <div
                    key={day.day}
                    role="group"
                    aria-labelledby={`day-${day.day}`}
                    className={cn(
                      'tw:grid tw:gap-x-4 tw:gap-y-2 tw:border-0 tw:border-b tw:border-solid tw:border-line tw:px-6 tw:py-3 tw:last:border-b-0 tw:max-desk:px-4',
                      'tw:desk:grid-cols-[92px_116px_minmax(0,1fr)] tw:desk:items-center',
                      changedDays.has(day.day) && 'tw:bg-[color-mix(in_srgb,var(--c-sage-soft)_45%,transparent)]',
                    )}
                  >
                    <div className="tw:flex tw:items-center tw:justify-between tw:gap-3 tw:desk:contents">
                      <span id={`day-${day.day}`} className={cn('tw:text-base tw:font-semibold', !open && 'tw:text-stone-text')}>
                        {label}
                      </span>
                      <Switch
                        checked={open}
                        onCheckedChange={(checked) =>
                          setDay(index, checked ? { closed: false, opens: day.opens || '07:30', closes: day.closes || '17:00' } : { closed: true })
                        }
                        aria-label={`${label} ouvert`}
                        onLabel="Ouvert"
                        offLabel="Fermé"
                      />
                    </div>
                    {open ? (
                      <div className="tw:grid tw:gap-2">
                        <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-x-2 tw:gap-y-2">
                          <TimeInput label={`${label}, ouverture`} value={day.opens} onChange={(opens) => setDay(index, { opens })} invalid={Boolean(error)} describedBy={error ? errorId : undefined} />
                          <span className="tw:text-stone-text">à</span>
                          <TimeInput label={`${label}, fermeture`} value={day.closes} onChange={(closes) => setDay(index, { closes })} invalid={Boolean(error)} describedBy={error ? errorId : undefined} />
                          {split ? (
                            <>
                              <span className="tw:px-1 tw:text-stone-text">puis</span>
                              <TimeInput label={`${label}, réouverture`} value={day.opens2} onChange={(opens2) => setDay(index, { opens2 })} invalid={Boolean(error)} describedBy={error ? errorId : undefined} />
                              <span className="tw:text-stone-text">à</span>
                              <TimeInput label={`${label}, fermeture du soir`} value={day.closes2} onChange={(closes2) => setDay(index, { closes2 })} invalid={Boolean(error)} describedBy={error ? errorId : undefined} />
                              <Button variant="ghost" onClick={() => setDay(index, { opens2: null, closes2: null })}>
                                <X aria-hidden="true" />
                                Sans pause
                              </Button>
                            </>
                          ) : (
                            <Button variant="ghost" onClick={() => setDay(index, { closes: '12:00', opens2: '13:30', closes2: day.closes || '17:00' })}>
                              <Plus aria-hidden="true" />
                              Pause de midi
                            </Button>
                          )}
                        </div>
                        {error ? <FieldError id={errorId}>{error}</FieldError> : null}
                      </div>
                    ) : (
                      <p className="tw:m-0 tw:text-base tw:text-stone-text">Fermé toute la journée</p>
                    )}
                  </div>
                )
              })}
            </div>
            <CardFooter>
              <Button variant="outline" onClick={copyToWeekdays}>
                <Copy aria-hidden="true" />
                Copier le lundi sur toute la semaine
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="tw:grid tw:gap-1">
                <CardTitle>Fermetures exceptionnelles</CardTitle>
                <CardDescription>Congés, ponts… Elles s’affichent sur le site deux mois à l’avance.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="tw:grid tw:gap-4">
              {data.closures.length ? (
                data.closures.map((closure, index) => {
                  const error = err(errors.closures[index])
                  const set = (patch: Partial<Closure>) =>
                    setData((current) => current && { ...current, closures: current.closures.map((c, i) => (i === index ? { ...c, ...patch } : c)) })
                  return (
                    <div key={closure.id ?? index} className="tw:grid tw:gap-3 tw:rounded-sm tw:border tw:border-line tw:bg-surface tw:p-4 tw:desk:grid-cols-[1fr_1fr_1.4fr_auto] tw:desk:items-end">
                      <Field>
                        <Label htmlFor={`from-${index}`}>Du</Label>
                        <Input id={`from-${index}`} type="date" value={(closure.from ?? '').slice(0, 10)} onChange={(e) => set({ from: e.target.value })} aria-invalid={Boolean(error)} />
                      </Field>
                      <Field>
                        <Label htmlFor={`to-${index}`}>Au</Label>
                        <Input id={`to-${index}`} type="date" value={(closure.to ?? '').slice(0, 10)} onChange={(e) => set({ to: e.target.value })} aria-invalid={Boolean(error)} />
                      </Field>
                      <Field>
                        <Label htmlFor={`label-${index}`}>
                          Motif <Optional />
                        </Label>
                        <Input id={`label-${index}`} value={closure.label ?? ''} placeholder="Congés d’été" onChange={(e) => set({ label: e.target.value })} />
                      </Field>
                      <Button
                        variant="destructiveGhost"
                        onClick={() => setData((current) => current && { ...current, closures: current.closures.filter((_, i) => i !== index) })}
                      >
                        <Trash2 aria-hidden="true" />
                        Retirer
                      </Button>
                      {error ? <FieldError className="tw:desk:col-span-4">{error}</FieldError> : null}
                    </div>
                  )
                })
              ) : (
                <p className="tw:m-0 tw:flex tw:items-center tw:gap-2 tw:text-base tw:text-stone-text">
                  <CalendarOff className="tw:size-5" aria-hidden="true" />
                  Aucune fermeture prévue.
                </p>
              )}
              <Button
                variant="outline"
                className="tw:justify-self-start"
                onClick={() => setData((current) => current && { ...current, closures: [...current.closures, { from: '', to: '', label: '' } as Closure] })}
              >
                <Plus aria-hidden="true" />
                Ajouter une fermeture
              </Button>
            </CardContent>
          </Card>
        </div>

        <aside aria-label="Aperçu" className="tw:grid tw:gap-3 tw:wide:sticky tw:wide:top-6">
          <p className="tw:m-0 tw:text-sm tw:font-semibold tw:text-stone-text">Aperçu du pied de page</p>
          <div className="tw:grid tw:gap-4 tw:rounded-md tw:bg-night tw:p-6 tw:text-on-night tw:shadow-md">
            <p className="tw:m-0 tw:font-heading tw:text-[26px] tw:font-bold tw:leading-none">{data.phone || '—'}</p>
            <ul className="tw:m-0 tw:grid tw:list-none tw:gap-1 tw:p-0 tw:text-[15px]">
              {preview.map((group) => (
                <li key={group.days} className={cn('tw:text-on-night/85', group.closed && 'tw:text-on-night/60')}>
                  <strong className="tw:font-semibold tw:text-on-night">{group.days}</strong> : {group.hours}
                </li>
              ))}
            </ul>
            {data.hoursNote ? <p className="tw:m-0 tw:text-sm tw:text-on-night/75">{data.hoursNote}</p> : null}
            <p className="tw:m-0 tw:text-sm tw:text-on-night/75">
              {data.address.street}
              <br />
              {data.address.postalCode} {data.address.city}
            </p>
            <p className="tw:m-0 tw:text-sm tw:text-on-night/75">{data.email}</p>
          </div>
          <FieldHint>L’aperçu change dès que vous modifiez une case.</FieldHint>
        </aside>
      </div>

      <Card>
        <CardHeader>
          <div className="tw:grid tw:gap-1">
            <CardTitle>Téléphone, e-mail et adresse</CardTitle>
            <CardDescription>Les demandes du site arrivent à cette adresse e-mail.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="tw:grid tw:gap-5 tw:desk:grid-cols-2">
          <FormField id="phone" label="Téléphone" error={err(errors.phone)} hint="Comme il s’affiche : 06 34 67 31 49">
            <IconField icon={<Phone />}>
              <Input id="phone" type="tel" inputMode="tel" autoComplete="tel" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} aria-invalid={Boolean(err(errors.phone))} aria-describedby="phone-help" />
            </IconField>
          </FormField>
          <FormField id="email" label="E-mail" error={err(errors.email)} hint="Une seule adresse.">
            <IconField icon={<Mail />}>
              <Input id="email" type="email" autoComplete="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} aria-invalid={Boolean(err(errors.email))} aria-describedby="email-help" />
            </IconField>
          </FormField>
          <FormField id="street" label="Adresse" error={err(errors.street)} className="tw:desk:col-span-2">
            <IconField icon={<MapPin />}>
              <Input id="street" autoComplete="street-address" value={data.address.street} onChange={(e) => setData({ ...data, address: { ...data.address, street: e.target.value } })} aria-invalid={Boolean(err(errors.street))} aria-describedby="street-help" />
            </IconField>
          </FormField>
          <div className="tw:grid tw:grid-cols-[132px_minmax(0,1fr)] tw:gap-3 tw:desk:col-span-2 tw:desk:grid-cols-[160px_minmax(0,1fr)]">
            <FormField id="postalCode" label="Code postal" error={err(errors.postalCode)}>
              <Input
                id="postalCode"
                inputMode="numeric"
                autoComplete="postal-code"
                value={data.address.postalCode}
                onChange={(e) => setData({ ...data, address: { ...data.address, postalCode: e.target.value } })}
                aria-invalid={Boolean(err(errors.postalCode))}
                aria-describedby="postalCode-help"
              />
            </FormField>
            <FormField id="city" label="Commune" error={err(errors.city)}>
              <Input id="city" autoComplete="address-level2" value={data.address.city} onChange={(e) => setData({ ...data, address: { ...data.address, city: e.target.value } })} aria-invalid={Boolean(err(errors.city))} aria-describedby="city-help" />
            </FormField>
          </div>
          <FormField id="note" label={<>Précision sous les horaires <Optional /></>} hint="Ex. : « Sur rendez-vous en dehors de ces horaires »." className="tw:desk:col-span-2">
            <Input id="note" value={data.hoursNote} maxLength={160} onChange={(e) => setData({ ...data, hoursNote: e.target.value })} aria-describedby="note-help" />
          </FormField>
        </CardContent>
        <CardFooter>
          <TextLink href="/admin/globals/company">Nom, SIRET, qualifications : toutes les informations de l’entreprise</TextLink>
        </CardFooter>
      </Card>
    </Page>
  )
}

/** Quarter-hours from 5 h to 22 h: big native list, no AM/PM, easy on a phone. */
const TIMES = Array.from({ length: (22 - 5) * 4 + 1 }, (_, i) => {
  const minutes = 5 * 60 + i * 15
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`
})

const spoken = (time: string) => {
  const [h = '0', m = '00'] = time.split(':')
  return `${Number(h)} h${m === '00' ? '' : ` ${m}`}`
}

function TimeInput({
  label,
  value,
  onChange,
  invalid,
  describedBy,
}: {
  label: string
  value?: string | null
  onChange: (value: string) => void
  invalid?: boolean
  describedBy?: string
}) {
  const current = (value ?? '').slice(0, 5)
  const options = current && !TIMES.includes(current) ? [...TIMES, current].sort() : TIMES
  return (
    <select
      aria-label={label}
      value={current}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={invalid}
      aria-describedby={describedBy}
      className={cn(fieldClass, selectClass, 'tw:min-h-11 tw:w-[104px] tw:cursor-pointer tw:pr-9 tw:bg-[position:right_12px_center] tw:tabular-nums')}
    >
      {current ? null : <option value="">—</option>}
      {options.map((time) => (
        <option key={time} value={time}>
          {spoken(time)}
        </option>
      ))}
    </select>
  )
}

function FormField({ id, label, hint, error, className, children }: { id: string; label: ReactNode; hint?: string; error?: string | null; className?: string; children: ReactNode }) {
  return (
    <Field className={className}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <FieldError id={`${id}-help`} role="alert">
          {error}
        </FieldError>
      ) : hint ? (
        <FieldHint id={`${id}-help`}>{hint}</FieldHint>
      ) : null}
    </Field>
  )
}
