'use client'

import { SetStepNav } from '@payloadcms/ui'
import { ArrowLeft, ArrowRight, Check, ExternalLink, MapPin, PenLine, Plus, Save, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/payload/utilities/icons'

import { Badge } from '../../ui/badge'
import { Button, Cta } from '../../ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Field, FieldError, FieldHint, Input, Label, Optional, Textarea } from '../../ui/input'
import { notify } from '../../ui/notify'
import { Alert, EmptyState, Page, PageHeader } from '../../ui/page'
import { Stepper } from '../../ui/stepper'
import { cn, focusRing } from '../../ui/utils'
import { CommuneCombobox } from './CommuneCombobox'
import { api, countWords, metaLength, preparePhoto, suggestMeta, toRichText, uploadPhoto, type CommuneOption, type ServiceOption } from './lib'
import { PhotoGrid, type Photo } from './PhotoGrid'

const STEPS = [{ label: 'Le chantier' }, { label: 'Les photos' }, { label: 'Le texte' }]
const SUMMARY_MAX = 220

type Saved = { id: number; slug: string; status: 'draft' | 'published' }

let counter = 0
const nextKey = () => `photo-${Date.now().toString(36)}-${(counter += 1)}`

/**
 * « Ajouter un chantier » (designs § 12, artboards 4 to 4 ter): three steps
 * a beginner can follow without help. Photos upload as soon as they are
 * chosen; the chantier can be saved as a draft at any time.
 */
export function NewProjectWizard({ services, communes, order }: { services: ServiceOption[]; communes: CommuneOption[]; order: number }) {
  const [step, setStep] = useState(0)
  const [title, setTitle] = useState('')
  const [communeId, setCommuneId] = useState<number | null>(null)
  const [locality, setLocality] = useState('')
  const [serviceIds, setServiceIds] = useState<number[]>([])
  const [photos, setPhotos] = useState<Photo[]>([])
  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')
  const [meta, setMeta] = useState('')
  const [metaTouched, setMetaTouched] = useState(false)
  const [showErrors, setShowErrors] = useState<number | null>(null)
  const [saving, setSaving] = useState<'draft' | 'published' | null>(null)
  const [saved, setSaved] = useState<Saved | null>(null)
  const [published, setPublished] = useState(false)
  const files = useRef(new Map<string, File>())
  const headingRef = useRef<HTMLHeadingElement>(null)

  const commune = communes.find((item) => item.id === communeId) ?? null
  const chosen = serviceIds.map((id) => services.find((service) => service.id === id)).filter((service): service is ServiceOption => Boolean(service))
  const ready = photos.filter((photo) => photo.status === 'done')
  const busy = photos.some((photo) => photo.status === 'preparing' || photo.status === 'uploading')
  const metaText = metaTouched ? meta : suggestMeta(summary, locality || commune?.name || null)
  const words = countWords(description)

  const errors = useMemo(
    () => ({
      title: title.trim().length < 8 ? 'Donnez un titre au chantier, sur le modèle « Ouvrage à Commune ».' : null,
      services: serviceIds.length ? null : 'Cochez au moins une prestation.',
      photos: ready.length ? (busy ? 'Attendez la fin de l’envoi des photos.' : null) : 'Ajoutez au moins une photo.',
      summary: !summary.trim() ? 'Écrivez une phrase de résumé.' : summary.length > SUMMARY_MAX ? `${SUMMARY_MAX} caractères au plus.` : null,
      description: words < 15 ? 'Décrivez le chantier en quelques phrases (40 à 70 mots).' : null,
      meta:
        metaText.length < metaLength.min || metaText.length > metaLength.max
          ? `Entre ${metaLength.min} et ${metaLength.max} caractères (actuellement ${metaText.length}).`
          : null,
    }),
    [title, serviceIds.length, ready.length, busy, summary, words, metaText],
  )
  const stepErrors = [
    [errors.title, errors.services],
    [errors.photos],
    [errors.summary, errors.description, errors.meta],
  ]
  const err = (index: number, message: string | null) => (showErrors !== null && showErrors >= index && message ? message : null)

  // Leaving the page with unsaved work asks for confirmation.
  const dirty = !published && (title.trim() !== '' || photos.length > 0)
  useEffect(() => {
    if (!dirty) return
    const warn = (event: BeforeUnloadEvent) => event.preventDefault()
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [dirty])

  const goTo = (index: number) => {
    setStep(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.setTimeout(() => headingRef.current?.focus(), 50)
  }

  const next = () => {
    if (stepErrors[step]!.some(Boolean)) {
      setShowErrors(step)
      return
    }
    goTo(step + 1)
  }

  // ---------- Photos ----------
  const patchPhoto = (key: string, patch: Partial<Photo>) => setPhotos((list) => list.map((photo) => (photo.key === key ? { ...photo, ...patch } : photo)))

  const send = async (key: string, file: File, alt: string) => {
    patchPhoto(key, { status: 'preparing', progress: 0, error: undefined })
    try {
      const light = await preparePhoto(file)
      patchPhoto(key, { status: 'uploading' })
      const media = await uploadPhoto(light, alt, (progress) => patchPhoto(key, { progress }))
      patchPhoto(key, { status: 'done', mediaId: media.id, progress: 1 })
      return media.id
    } catch (error) {
      patchPhoto(key, { status: 'error', error: (error as Error).message })
      return null
    }
  }

  const altFor = (index: number) => `${title.trim() || 'Chantier de 3B Charpente'} : photo ${index + 1}`.slice(0, 160)

  const addFiles = async (list: File[]) => {
    const added = list.map((file) => {
      const key = nextKey()
      files.current.set(key, file)
      return { key, preview: URL.createObjectURL(file), status: 'preparing' as const, progress: 0, caption: '' }
    })
    const start = photos.length
    setPhotos((current) => [...current, ...added])
    // Two at a time: quick, without saturating a 4G connection.
    const queue = added.map((photo, index) => ({ photo, index: start + index }))
    const worker = async () => {
      for (let item = queue.shift(); item; item = queue.shift()) await send(item.photo.key, files.current.get(item.photo.key)!, altFor(item.index))
    }
    await Promise.all([worker(), worker()])
  }

  const removePhoto = (key: string) => {
    const photo = photos.find((item) => item.key === key)
    setPhotos((list) => list.filter((item) => item.key !== key))
    files.current.delete(key)
    if (photo?.mediaId) void api(`/api/media/${photo.mediaId}`, { method: 'DELETE' }).catch(() => undefined)
  }

  const replacePhoto = async (key: string, file: File) => {
    const old = photos.find((item) => item.key === key)
    files.current.set(key, file)
    patchPhoto(key, { preview: URL.createObjectURL(file), mediaId: undefined })
    const id = await send(key, file, altFor(photos.findIndex((item) => item.key === key)))
    if (id && old?.mediaId) void api(`/api/media/${old.mediaId}`, { method: 'DELETE' }).catch(() => undefined)
  }

  const retryPhoto = (key: string) => {
    const file = files.current.get(key)
    if (file) void send(key, file, altFor(photos.findIndex((item) => item.key === key)))
  }

  // ---------- Saving ----------
  const save = async (status: 'draft' | 'published') => {
    if (status === 'published') {
      const firstWrong = stepErrors.findIndex((list) => list.some(Boolean))
      if (firstWrong >= 0) {
        setShowErrors(2)
        if (firstWrong !== step) goTo(firstWrong)
        return
      }
    } else if (errors.title) {
      setShowErrors(0)
      goTo(0)
      return
    }
    setSaving(status)
    try {
      // Captions become the photos' descriptions too (better for Google and for blind visitors).
      await Promise.all(
        ready
          .filter((photo) => photo.caption.trim())
          .map((photo) => api(`/api/media/${photo.mediaId}`, { method: 'PATCH', json: { alt: photo.caption.trim(), caption: photo.caption.trim() } })),
      )
      const accent = commune && title.includes(commune.name) ? commune.name : locality && title.includes(locality) ? locality : undefined
      const body = {
        title: title.trim(),
        ...(accent ? { titleAccent: accent } : {}),
        commune: communeId,
        locality: locality.trim() || null,
        services: serviceIds,
        heroImage: ready[0]?.mediaId ?? null,
        gallery: ready.map((photo) => ({ image: photo.mediaId, caption: photo.caption.trim() || null })),
        summary: summary.trim() || null,
        description: description.trim() ? toRichText(description) : null,
        meta: { description: metaText || null },
        ...(saved ? {} : { order }),
        _status: status,
      }
      const query = status === 'draft' ? '?draft=true' : ''
      const result = saved
        ? await api<{ doc: { id: number; slug: string } }>(`/api/projects/${saved.id}${query}`, { method: 'PATCH', json: body })
        : await api<{ doc: { id: number; slug: string } }>(`/api/projects${query}`, { method: 'POST', json: body })
      setSaved({ id: result.doc.id, slug: result.doc.slug, status })
      if (status === 'published') {
        setPublished(true)
        notify.saved('Le chantier est en ligne, sur la page Réalisations.')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        notify.draft('Il n’est pas encore sur le site. Vous pourrez le reprendre plus tard dans « Chantiers ».')
      }
    } catch (error) {
      const message = (error as Error).message
      notify.error(() => void save(status), /slug|unique|existe/i.test(message) ? 'Un chantier porte déjà ce titre : changez-le un peu.' : message)
    } finally {
      setSaving(null)
    }
  }

  /** Back to an empty first step, for the next chantier. */
  const reset = () => {
    setStep(0)
    setTitle('')
    setCommuneId(null)
    setLocality('')
    setServiceIds([])
    setPhotos([])
    setSummary('')
    setDescription('')
    setMeta('')
    setMetaTouched(false)
    setShowErrors(null)
    setSaved(null)
    setPublished(false)
    files.current.clear()
    window.scrollTo({ top: 0 })
  }

  if (published && saved) {
    return (
      <Page>
        <SetStepNav nav={[{ label: 'Chantiers', url: '/admin/collections/projects' }, { label: 'Ajouter un chantier' }]} />
        <Card className="tw:mx-auto tw:w-full tw:max-w-[720px]">
          <EmptyState
            icon={<Check />}
            title="Le chantier est en ligne."
            text={title}
            meta="Il apparaît sur la page Réalisations et sur les pages des prestations cochées."
            action={
              <div className="tw:flex tw:flex-wrap tw:justify-center tw:gap-3">
                <Cta href={`/realisations/${saved.slug}/`} external icon={<ExternalLink />}>
                  Voir le chantier sur le site
                </Cta>
                <Button variant="outline" onClick={reset}>
                  <Plus aria-hidden="true" />
                  Ajouter un autre chantier
                </Button>
                <Button variant="ghost" asChild>
                  <Link href={`/admin/collections/projects/${saved.id}`}>
                    <PenLine aria-hidden="true" />
                    Compléter le détail
                  </Link>
                </Button>
              </div>
            }
          />
        </Card>
      </Page>
    )
  }

  const draftButton = (
    <Button variant="outline" onClick={() => void save('draft')} disabled={saving !== null || busy}>
      <Save aria-hidden="true" />
      {saving === 'draft' ? 'Enregistrement…' : 'Enregistrer en brouillon'}
    </Button>
  )

  return (
    <Page>
      <SetStepNav nav={[{ label: 'Chantiers', url: '/admin/collections/projects' }, { label: 'Ajouter un chantier' }]} />
      <PageHeader
        crumbs={[{ label: 'Mon site' }, { label: 'Chantiers', href: '/admin/collections/projects' }, { label: 'Ajouter un chantier' }]}
        title="Ajouter un chantier"
        description="Trois étapes : le chantier, les photos, puis quelques phrases. Rien n’est publié avant le dernier bouton."
        status={saved ? <Badge variant="draft">Brouillon enregistré</Badge> : null}
        actions={draftButton}
      />

      <Stepper steps={STEPS} current={step} onSelect={goTo} />

      <div className={cn('tw:grid tw:items-start tw:gap-6', step > 0 && 'tw:wide:grid-cols-[minmax(0,1fr)_340px]')}>
        <Card>
          <CardHeader>
            <CardTitle>
              <span ref={headingRef} tabIndex={-1} className="tw:outline-none">
                {step + 1}. {STEPS[step]!.label}
              </span>
            </CardTitle>
            <span className="tw:text-sm tw:text-stone-text">
              Étape {step + 1} sur {STEPS.length}
            </span>
          </CardHeader>

          <CardContent className="tw:grid tw:gap-6">
            {step === 0 ? (
              <>
                <Field>
                  <Label htmlFor="project-title">Titre du chantier</Label>
                  <Input
                    id="project-title"
                    size="lg"
                    value={title}
                    maxLength={110}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Ex. : Surélévation en ossature bois à Briançon"
                    aria-invalid={Boolean(err(0, errors.title))}
                    aria-describedby="project-title-help"
                  />
                  {err(0, errors.title) ? (
                    <FieldError id="project-title-help">{errors.title}</FieldError>
                  ) : (
                    <FieldHint id="project-title-help">Ce qui a été fait, puis la commune. Il devient le titre de la page.</FieldHint>
                  )}
                </Field>

                <div className="tw:grid tw:gap-5 tw:desk:grid-cols-2">
                  <Field>
                    <Label htmlFor="project-commune">
                      Commune <Optional />
                    </Label>
                    <CommuneCombobox id="project-commune" communes={communes} value={communeId} onChange={setCommuneId} describedBy="project-commune-help" />
                    <FieldHint id="project-commune-help">Laissez vide si le client ne souhaite pas qu’elle soit publiée.</FieldHint>
                  </Field>
                  <Field>
                    <Label htmlFor="project-locality">
                      Lieu affiché <Optional />
                    </Label>
                    <Input
                      id="project-locality"
                      size="lg"
                      value={locality}
                      maxLength={60}
                      onChange={(event) => setLocality(event.target.value)}
                      placeholder="Ex. : Le Casset, Prelles"
                      aria-describedby="project-locality-help"
                    />
                    <FieldHint id="project-locality-help">Le village ou le hameau, s’il diffère de la commune.</FieldHint>
                  </Field>
                </div>

                <fieldset className="tw:m-0 tw:grid tw:min-w-0 tw:gap-3 tw:border-0 tw:p-0" aria-describedby="project-services-help">
                  <legend className="tw:mb-2 tw:p-0 tw:text-base tw:font-semibold">Prestations</legend>
                  <ul className="tw:m-0 tw:grid tw:list-none tw:grid-cols-3 tw:gap-3 tw:p-0 tw:max-wide:grid-cols-2 tw:max-desk:grid-cols-1">
                    {services.map((service) => {
                      const checked = serviceIds.includes(service.id)
                      const main = serviceIds[0] === service.id
                      return (
                        <li key={service.id}>
                          <label
                            className={cn(
                              'tw:flex tw:min-h-14 tw:cursor-pointer tw:items-center tw:gap-3 tw:rounded-sm tw:border tw:border-line-strong tw:bg-card tw:px-3.5 tw:py-2.5 tw:transition-colors tw:hover:bg-surface',
                              'tw:has-focus-visible:outline-solid tw:has-focus-visible:outline-2 tw:has-focus-visible:outline-offset-3 tw:has-focus-visible:outline-leaf',
                              checked && 'tw:border-forest tw:bg-sage-soft tw:shadow-[0_0_0_1px_var(--c-forest)] tw:hover:bg-sage-soft',
                            )}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => setServiceIds((ids) => (checked ? ids.filter((id) => id !== service.id) : [...ids, service.id]))}
                              className="tw:m-0 tw:size-[22px] tw:shrink-0 tw:accent-forest"
                            />
                            <Icon name={service.icon as IconName} className="tw:size-6 tw:shrink-0 tw:text-leaf" aria-hidden="true" />
                            <span className="tw:grid tw:min-w-0">
                              <span className="tw:text-base tw:font-semibold tw:leading-[1.25]">{service.title}</span>
                              {main && serviceIds.length > 1 ? <span className="tw:text-sm tw:text-stone-text">Prestation principale</span> : null}
                            </span>
                          </label>
                        </li>
                      )
                    })}
                  </ul>
                  {err(0, errors.services) ? (
                    <FieldError id="project-services-help">{errors.services}</FieldError>
                  ) : (
                    <FieldHint id="project-services-help">La première cochée est la prestation principale. Le chantier apparaîtra sur leurs pages.</FieldHint>
                  )}
                </fieldset>
              </>
            ) : null}

            {step === 1 ? (
              <PhotoGrid
                photos={photos}
                onAdd={(list) => void addFiles(list)}
                onReorder={setPhotos}
                onCaption={(key, caption) => patchPhoto(key, { caption })}
                onRemove={removePhoto}
                onReplace={(key, file) => void replacePhoto(key, file)}
                onRetry={retryPhoto}
                error={err(1, errors.photos)}
              />
            ) : null}

            {step === 2 ? (
              <>
                <Field>
                  <Label htmlFor="project-summary">
                    Résumé pour les cartes
                    <span className={cn('tw:ml-auto tw:text-sm tw:font-normal tw:tabular-nums tw:text-stone-text', summary.length > SUMMARY_MAX && 'tw:font-semibold tw:text-error')}>
                      {summary.length} / {SUMMARY_MAX}
                    </span>
                  </Label>
                  <Textarea
                    id="project-summary"
                    rows={2}
                    value={summary}
                    onChange={(event) => setSummary(event.target.value)}
                    placeholder="Ex. : Une charpente traditionnelle en mélèze, taillée à l’atelier et levée en deux jours."
                    aria-invalid={Boolean(err(2, errors.summary))}
                    aria-describedby="project-summary-help"
                    className="tw:min-h-[88px]"
                  />
                  {err(2, errors.summary) ? (
                    <FieldError id="project-summary-help">{errors.summary}</FieldError>
                  ) : (
                    <FieldHint id="project-summary-help">Une phrase qui donne envie de voir le chantier. Elle s’affiche sous la photo.</FieldHint>
                  )}
                </Field>

                <Field>
                  <Label htmlFor="project-description">
                    Le projet
                    <span className={cn('tw:ml-auto tw:text-sm tw:font-normal tw:tabular-nums tw:text-stone-text', words > 0 && (words < 40 || words > 70) && 'tw:text-ink')}>
                      {words} mot{words > 1 ? 's' : ''}
                    </span>
                  </Label>
                  <Textarea
                    id="project-description"
                    rows={6}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Ce qui a été fait, où, avec quels matériaux. Des phrases simples."
                    aria-invalid={Boolean(err(2, errors.description))}
                    aria-describedby="project-description-help"
                  />
                  {err(2, errors.description) ? (
                    <FieldError id="project-description-help">{errors.description}</FieldError>
                  ) : (
                    <FieldHint id="project-description-help">40 à 70 mots. Laissez une ligne vide pour commencer un nouveau paragraphe.</FieldHint>
                  )}
                </Field>

                <Field>
                  <Label htmlFor="project-meta">
                    Description pour Google
                    <span
                      className={cn(
                        'tw:ml-auto tw:text-sm tw:font-normal tw:tabular-nums tw:text-stone-text',
                        metaText && (metaText.length < metaLength.min || metaText.length > metaLength.max) && 'tw:font-semibold tw:text-error',
                      )}
                    >
                      {metaText.length} / {metaLength.min} à {metaLength.max}
                    </span>
                  </Label>
                  <Textarea
                    id="project-meta"
                    rows={3}
                    value={metaText}
                    onChange={(event) => {
                      setMetaTouched(true)
                      setMeta(event.target.value)
                    }}
                    aria-invalid={Boolean(err(2, errors.meta))}
                    aria-describedby="project-meta-help"
                    className="tw:min-h-[96px]"
                  />
                  {err(2, errors.meta) ? (
                    <FieldError id="project-meta-help">{errors.meta}</FieldError>
                  ) : (
                    <FieldHint id="project-meta-help" className="tw:flex tw:items-center tw:gap-1.5">
                      <Sparkles aria-hidden="true" className="tw:size-4 tw:shrink-0 tw:text-leaf" />
                      Proposée à partir du résumé. Vous pouvez la reprendre : c’est le texte affiché sous le titre dans Google.
                    </FieldHint>
                  )}
                </Field>
              </>
            ) : null}
          </CardContent>

          <CardFooter>
            {step > 0 ? (
              <Button variant="ghost" onClick={() => goTo(step - 1)}>
                <ArrowLeft aria-hidden="true" />
                <span>
                  Retour
                  {step < STEPS.length - 1 ? <span className="tw:max-desk:hidden"> : {STEPS[step - 1]!.label.toLowerCase()}</span> : null}
                </span>
              </Button>
            ) : (
              <span />
            )}
            {step < STEPS.length - 1 ? (
              <Cta onClick={next} icon={<ArrowRight />} className="tw:max-desk:w-full tw:max-desk:justify-between">
                Continuer : {STEPS[step + 1]!.label.toLowerCase()}
              </Cta>
            ) : (
              <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-3 tw:max-desk:w-full tw:max-desk:[&>*]:flex-auto">
                {draftButton}
                <Cta onClick={() => void save('published')} loading={saving === 'published'} disabled={saving !== null || busy} icon={<Check />}>
                  Publier le chantier
                </Cta>
              </div>
            )}
          </CardFooter>
        </Card>

        {step > 0 ? (
          <aside aria-label="Récapitulatif" className="tw:grid tw:gap-4 tw:wide:sticky tw:wide:top-6">
            <Card>
              <CardHeader className="tw:py-4">
                <CardTitle className="tw:text-lg">Récapitulatif</CardTitle>
                <button
                  type="button"
                  onClick={() => goTo(0)}
                  className={cn('tw:inline-flex tw:min-h-8 tw:cursor-pointer tw:items-center tw:gap-1.5 tw:border-0 tw:bg-transparent tw:p-0 tw:font-sans tw:text-base tw:font-[650] tw:text-leaf tw:hover:underline', focusRing)}
                >
                  Modifier
                  <span className="tw:sr-only"> le chantier</span>
                </button>
              </CardHeader>
              <CardContent className="tw:py-4">
                <dl className="tw:m-0 tw:grid tw:gap-3">
                  <Recap label="Titre" value={title || '—'} />
                  <Recap label="Commune" value={[locality, commune?.name].filter(Boolean).join(', ') || 'Non précisée'} />
                  <Recap label="Prestations" value={chosen.map((service) => service.title).join(', ') || '—'} />
                  {step === 2 ? <Recap label="Photos" value={`${ready.length} photo${ready.length > 1 ? 's' : ''}`} /> : null}
                </dl>
              </CardContent>
            </Card>

            <div className="tw:grid tw:gap-2">
              <p className="tw:m-0 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:text-sm tw:font-semibold tw:text-stone-text">
                Aperçu sur le site
                <Badge variant="draft">Brouillon</Badge>
              </p>
              <PreviewCard
                photo={ready[0]?.preview ?? photos[0]?.preview ?? null}
                tag={locality || commune?.name || chosen[0]?.shortLabel || '3B Charpente'}
                info={[chosen[0]?.shortLabel || chosen[0]?.title, ready.length ? `${ready.length} photo${ready.length > 1 ? 's' : ''}` : null].filter(Boolean).join(' · ')}
                title={title}
                summary={summary}
              />
            </div>
          </aside>
        ) : null}
      </div>

      {step === 0 ? (
        <Alert>
          <p>
            <strong>Astuce :</strong> préparez cinq à quinze photos dans l’ordre du chantier (avant, pendant, terminé). La première sera la photo principale ; vous pourrez
            changer l’ordre à l’étape suivante.
          </p>
        </Alert>
      ) : null}
    </Page>
  )
}

function Recap({ label, value }: { label: string; value: string }) {
  return (
    <div className="tw:grid tw:gap-0.5">
      <dt className="tw:text-sm tw:text-stone-text">{label}</dt>
      <dd className="tw:m-0 tw:text-base tw:leading-snug tw:break-words">{value}</dd>
    </div>
  )
}

/** The chantier's card as it will appear on the site (same parts as ProjectCard). */
function PreviewCard({ photo, tag, info, title, summary }: { photo: string | null; tag: string; info: string; title: string; summary: string }) {
  return (
    <article className="tw:overflow-hidden tw:rounded-md tw:border tw:border-line tw:bg-card tw:shadow-sm">
      <div className="tw:relative tw:aspect-[4/3] tw:bg-surface">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element -- local preview
          <img src={photo} alt="" className="tw:block tw:size-full tw:object-cover" />
        ) : (
          <span className="tw:grid tw:size-full tw:place-items-center tw:text-sm tw:text-stone-text">La photo principale</span>
        )}
        <span className="tw:absolute tw:top-3 tw:left-3 tw:inline-flex tw:min-h-7 tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-[rgb(248_244_238/0.94)] tw:px-3 tw:text-[13px] tw:font-semibold tw:text-[#102311]">
          <MapPin aria-hidden="true" className="tw:size-3.5" />
          {tag}
        </span>
      </div>
      <div className="tw:grid tw:gap-1.5 tw:p-4">
        {info ? <p className="tw:m-0 tw:text-[13px] tw:font-semibold tw:tracking-[0.06em] tw:text-stone-text tw:uppercase">{info}</p> : null}
        <p className="tw:m-0 tw:font-heading tw:text-lg tw:font-semibold tw:leading-[1.25]">{title || 'Titre du chantier'}</p>
        <p className={cn('tw:m-0 tw:line-clamp-3 tw:text-[15px] tw:leading-snug', !summary && 'tw:text-stone-text')}>{summary || 'Le résumé s’affichera ici.'}</p>
        <p className="tw:m-0 tw:mt-1 tw:inline-flex tw:items-center tw:gap-1.5 tw:text-[15px] tw:font-semibold tw:text-leaf">
          Voir les travaux
          <ArrowRight aria-hidden="true" className="tw:size-4" />
        </p>
      </div>
    </article>
  )
}

