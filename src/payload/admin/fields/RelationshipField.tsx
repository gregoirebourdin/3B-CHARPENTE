'use client'

import { getTranslation } from '@payloadcms/translations'
import { useConfig, useDocumentDrawer, useField, useTranslation } from '@payloadcms/ui'
import { ArrowDown, ArrowUp, Check, ChevronsUpDown, PenLine, Plus, X } from 'lucide-react'
import type { CollectionSlug, RelationshipFieldClientComponent } from 'payload'
import { useCallback, useMemo, useState, type ReactNode } from 'react'

import { invalidateRelationOptions, useRelationOptions, type RelationOption } from '../components/useRelationOptions'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { cn } from '../ui/utils'
import { FieldShell, fieldId } from './FieldShell'

type Ref = { relationTo: string; value: number | string }

/** « Choisir une prestation », « Ajouter un chantier »… */
const NOUN: Record<string, string> = {
  pages: 'une page',
  services: 'une prestation',
  projects: 'un chantier',
  articles: 'un guide',
  communes: 'une commune',
  faqs: 'une question',
  forms: 'un formulaire',
}

const fold = (text: string) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const keyOf = (ref: { relationTo: string; value?: number | string; id?: number | string }) => `${ref.relationTo}:${String(ref.value ?? ref.id)}`

/** The typed part, underlined in sage (as in the commune list). */
function highlight(text: string, query: string): ReactNode {
  const q = fold(query.trim())
  const start = q ? fold(text).indexOf(q) : -1
  if (start < 0) return text
  return (
    <>
      {text.slice(0, start)}
      <span className="tw:underline tw:decoration-sage tw:decoration-[3px] tw:underline-offset-4">{text.slice(start, start + q.length)}</span>
      {text.slice(start + q.length)}
    </>
  )
}

/**
 * Link to other documents (a page, prestations, communes, questions…), built
 * with shadcn/ui: a Combobox (Popover + Command) to search by name, accents
 * optional. With several values, an ordered list with ↑ ↓ to reorder,
 * « Ouvrir » to edit the document in a drawer and « Retirer ».
 */
export const RelationshipField: RelationshipFieldClientComponent = (props) => {
  const { field, path: pathFromProps, readOnly, validate } = props
  const { required, hasMany, relationTo } = field as { required?: boolean; hasMany?: boolean; relationTo: string | string[] }
  const maxRows = (field as { maxRows?: number }).maxRows
  const admin = (field.admin ?? {}) as { allowCreate?: boolean; allowEdit?: boolean; isSortable?: boolean }
  const poly = Array.isArray(relationTo)
  const collections = useMemo(() => (Array.isArray(relationTo) ? relationTo : [relationTo]), [relationTo])
  const noun = poly ? 'une page' : (NOUN[collections[0] ?? ''] ?? 'un élément')

  const memoizedValidate = useCallback(
    (value: unknown, options: Record<string, unknown>) =>
      typeof validate === 'function' ? (validate as (v: unknown, o: Record<string, unknown>) => true | string)(value, { ...options, required }) : true,
    [validate, required],
  )
  const { customComponents, disabled, filterOptions, path, setValue, showError, errorMessage, value } = useField<unknown>({
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate as never,
  })
  const id = fieldId(path)
  const locked = Boolean(readOnly || disabled)

  const refs = useMemo<Ref[]>(() => {
    const list = hasMany ? (Array.isArray(value) ? value : []) : value === null || value === undefined || value === '' ? [] : [value]
    return list
      .map((item): Ref | null => {
        if (item && typeof item === 'object') {
          if ('relationTo' in item) {
            const inner = (item as { value: unknown }).value
            const docId = inner && typeof inner === 'object' && 'id' in inner ? (inner as { id: number | string }).id : (inner as number | string)
            return docId === undefined || docId === null ? null : { relationTo: String((item as { relationTo: string }).relationTo), value: docId }
          }
          if ('id' in item) return { relationTo: collections[0]!, value: (item as { id: number | string }).id }
          return null
        }
        return typeof item === 'number' || typeof item === 'string' ? { relationTo: collections[0]!, value: item } : null
      })
      .filter((item): item is Ref => item !== null)
  }, [value, hasMany, collections])

  const { options, loading, failed } = useRelationOptions(collections, filterOptions as Record<string, unknown> | undefined)
  const byKey = useMemo(() => new Map(options.map((option) => [keyOf(option), option])), [options])

  const commit = (next: Ref[]) => {
    const out = next.map((ref) => (poly ? { relationTo: ref.relationTo, value: ref.value } : ref.value))
    setValue(hasMany ? out : (out[0] ?? null))
  }
  const pick = (option: RelationOption) => {
    const ref = { relationTo: option.relationTo, value: option.id }
    commit(hasMany ? [...refs.filter((item) => keyOf(item) !== keyOf(ref)), ref] : [ref])
  }

  const allowCreate = admin.allowCreate !== false && !poly
  const allowEdit = admin.allowEdit !== false
  const sortable = admin.isSortable !== false
  const [CreateDrawer, , { openDrawer: openCreate, closeDrawer: closeCreate }] = useDocumentDrawer({ collectionSlug: collections[0] as CollectionSlug })
  const canAdd = !locked && (!hasMany || !maxRows || refs.length < maxRows)

  const picker = (
    <RelationPicker
      id={id}
      mode={hasMany ? 'add' : 'single'}
      noun={noun}
      options={options}
      collections={collections}
      loading={loading}
      failed={failed}
      selected={hasMany ? undefined : refs[0] ? (byKey.get(keyOf(refs[0])) ?? null) : null}
      selectedKeys={new Set(refs.map(keyOf))}
      onPick={pick}
      onClear={!hasMany && !required && refs.length ? () => commit([]) : undefined}
      onCreate={allowCreate ? openCreate : undefined}
      disabled={locked}
      invalid={showError}
      describedBy={`${id}-help`}
    />
  )

  return (
    <FieldShell field={field} path={path} type="relationship" required={required} customComponents={customComponents} showError={showError} errorMessage={errorMessage}>
      <div className="tw:grid tw:gap-2.5" data-slot="relationship-field">
        {hasMany ? (
          <>
            {refs.length ? (
              <ol className="tw:m-0 tw:grid tw:list-none tw:gap-2 tw:p-0">
                {refs.map((ref, index) => (
                  <RelationRow
                    key={keyOf(ref)}
                    reference={ref}
                    option={byKey.get(keyOf(ref))}
                    loading={loading}
                    index={index}
                    count={refs.length}
                    locked={locked}
                    sortable={sortable}
                    allowEdit={allowEdit}
                    onMove={(step) => {
                      const next = [...refs]
                      const [item] = next.splice(index, 1)
                      if (!item) return
                      next.splice(index + step, 0, item)
                      commit(next)
                    }}
                    onRemove={() => commit(refs.filter((_, i) => i !== index))}
                  />
                ))}
              </ol>
            ) : null}
            {canAdd ? picker : null}
            {!canAdd && !locked && maxRows ? <p className="tw:m-0 tw:text-sm tw:text-stone-text">{maxRows} au maximum : retirez-en un pour en choisir un autre.</p> : null}
          </>
        ) : (
          <div className="tw:@container tw:flex tw:min-w-0 tw:items-center tw:gap-1">
            <div className="tw:min-w-0 tw:flex-1">{picker}</div>
            {refs[0] && allowEdit && !locked ? <EditButton reference={refs[0]} label={byKey.get(keyOf(refs[0]))?.title} /> : null}
          </div>
        )}
      </div>
      {allowCreate ? (
        <CreateDrawer
          onSave={({ doc }) => {
            invalidateRelationOptions(collections[0]!)
            const docId = (doc as { id?: number | string }).id
            if (docId !== undefined) {
              const ref = { relationTo: collections[0]!, value: docId }
              commit(hasMany ? [...refs, ref] : [ref])
            }
            closeCreate()
          }}
        />
      ) : null}
    </FieldShell>
  )
}

/** The Combobox: a button, and under it the searchable list (grouped by kind of page when several). */
function RelationPicker({
  id,
  mode,
  noun,
  options,
  collections,
  loading,
  failed,
  selected,
  selectedKeys,
  onPick,
  onClear,
  onCreate,
  disabled,
  invalid,
  describedBy,
}: {
  id: string
  mode: 'single' | 'add'
  noun: string
  options: RelationOption[]
  collections: string[]
  loading: boolean
  failed: boolean
  selected?: RelationOption | null
  selectedKeys: Set<string>
  onPick: (option: RelationOption) => void
  onClear?: () => void
  onCreate?: () => void
  disabled?: boolean
  invalid?: boolean
  describedBy?: string
}) {
  const { getEntityConfig } = useConfig()
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const close = () => {
    setOpen(false)
    setQuery('')
  }
  const shown = mode === 'add' ? options.filter((option) => !selectedKeys.has(keyOf(option))) : options
  const groups = collections
    .map((slug) => ({
      slug,
      heading: collections.length > 1 ? getTranslation(getEntityConfig({ collectionSlug: slug })?.labels?.plural ?? slug, i18n) : undefined,
      items: shown.filter((option) => option.relationTo === slug),
    }))
    .filter((group) => group.items.length)
  const hasValue = mode === 'single' && selectedKeys.size > 0

  return (
    <Popover open={open} onOpenChange={(next) => (next ? setOpen(true) : close())}>
      <PopoverTrigger asChild>
        {mode === 'single' ? (
          <Button
            id={id}
            type="button"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-describedby={describedBy}
            aria-invalid={invalid || undefined}
            disabled={disabled}
            className={cn(
              'tw:w-full tw:min-w-0 tw:justify-between tw:gap-3 tw:px-3.5 tw:text-left tw:font-normal',
              'tw:hover:border-[color-mix(in_srgb,var(--c-ink)_45%,transparent)] tw:hover:bg-card tw:data-[state=open]:border-forest tw:aria-invalid:border-error',
            )}
          >
            <span className={cn('tw:flex tw:min-w-0 tw:items-center tw:gap-2', !hasValue && 'tw:text-stone-text')}>
              <span className="tw:truncate">{hasValue ? (selected?.title ?? (loading ? 'Chargement…' : 'Document introuvable')) : `Choisir ${noun}`}</span>
              {selected?.draft ? <Badge variant="draft">Brouillon</Badge> : null}
            </span>
            <ChevronsUpDown aria-hidden="true" className="tw:size-4 tw:text-stone-text" />
          </Button>
        ) : (
          <Button id={id} type="button" variant="outline" role="combobox" aria-expanded={open} aria-describedby={describedBy} disabled={disabled} className="tw:w-fit">
            <Plus aria-hidden="true" />
            Ajouter {noun}
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="tw:w-[max(var(--radix-popover-trigger-width),340px)] tw:max-w-[calc(100vw-32px)] tw:p-0">
        <Command filter={(itemValue, search, keywords) => (fold(`${(keywords ?? []).join(' ')}`).includes(fold(search.trim())) ? 1 : 0)}>
          <CommandInput placeholder="Tapez quelques lettres" value={query} onValueChange={setQuery} />
          <CommandList>
            {loading ? (
              <p className="tw:m-0 tw:px-4 tw:py-6 tw:text-center tw:text-base tw:text-stone-text">Chargement…</p>
            ) : failed ? (
              <p className="tw:m-0 tw:px-4 tw:py-6 tw:text-center tw:text-base tw:text-error">La liste n’a pas pu être chargée. Rouvrez-la dans un instant.</p>
            ) : (
              <CommandEmpty>{query.trim() ? `Rien ne correspond à « ${query.trim()} ».` : 'La liste est vide.'}</CommandEmpty>
            )}
            {onClear ? (
              <CommandGroup>
                <CommandItem
                  value="__clear"
                  keywords={['aucun', 'aucune', 'retirer', 'vider']}
                  onSelect={() => {
                    onClear()
                    close()
                  }}
                  className="tw:text-stone-text"
                >
                  <X aria-hidden="true" />
                  Ne rien choisir
                </CommandItem>
              </CommandGroup>
            ) : null}
            {groups.map((group) => (
              <CommandGroup key={group.slug} heading={group.heading}>
                {group.items.map((option) => {
                  const isSelected = mode === 'single' && selectedKeys.has(keyOf(option))
                  return (
                    <CommandItem
                      key={keyOf(option)}
                      value={keyOf(option)}
                      keywords={[option.title, option.slug ?? '']}
                      onSelect={() => {
                        onPick(option)
                        close()
                      }}
                      className="tw:items-start"
                    >
                      <Check aria-hidden="true" className={cn('tw:mt-0.5 tw:text-forest', isSelected ? 'tw:opacity-100' : 'tw:opacity-0')} />
                      <span className="tw:grid tw:min-w-0 tw:flex-1 tw:gap-0.5">
                        <span className={cn('tw:text-base', isSelected && 'tw:font-semibold')}>{highlight(option.title, query)}</span>
                        {option.slug ? <span className="tw:truncate tw:text-sm tw:text-stone-text">/{option.slug}</span> : null}
                      </span>
                      {option.draft ? <Badge variant="draft">Brouillon</Badge> : null}
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            ))}
            {onCreate && !loading ? (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    value="__create"
                    forceMount
                    onSelect={() => {
                      close()
                      onCreate()
                    }}
                    className="tw:font-semibold tw:text-forest"
                  >
                    <Plus aria-hidden="true" />
                    Créer {noun}
                  </CommandItem>
                </CommandGroup>
              </>
            ) : null}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

/** One chosen document in a list: its place, its name, and its buttons. */
function RelationRow({
  reference,
  option,
  loading,
  index,
  count,
  locked,
  sortable,
  allowEdit,
  onMove,
  onRemove,
}: {
  reference: Ref
  option: RelationOption | undefined
  loading: boolean
  index: number
  count: number
  locked: boolean
  sortable: boolean
  allowEdit: boolean
  onMove: (step: number) => void
  onRemove: () => void
}) {
  const title = option?.title ?? (loading ? 'Chargement…' : `Document introuvable (n° ${String(reference.value)})`)
  return (
    <li className="tw:flex tw:min-h-13 tw:min-w-0 tw:flex-wrap tw:items-center tw:gap-x-2 tw:gap-y-0.5 tw:rounded-xs tw:border tw:border-solid tw:border-line tw:bg-card tw:py-1.5 tw:pr-1.5 tw:pl-3">
      <span aria-hidden="true" className="tw:grid tw:size-7 tw:shrink-0 tw:place-items-center tw:rounded-full tw:bg-sage-soft tw:text-sm tw:font-semibold tw:tabular-nums">
        {index + 1}
      </span>
      {/* Narrow column: the buttons go to a second line rather than cut the name. */}
      <span className="tw:flex tw:min-w-0 tw:flex-[1_1_150px] tw:items-center tw:gap-2">
        <span className="tw:line-clamp-2 tw:text-base tw:font-semibold tw:leading-snug">{title}</span>
        {option?.draft ? <Badge variant="draft">Brouillon</Badge> : null}
      </span>
      {!locked ? (
        <span className="tw:ml-auto tw:flex tw:shrink-0 tw:items-center">
          {sortable && count > 1 ? (
            <>
              <Button type="button" variant="ghost" size="icon" className="tw:size-9" disabled={index === 0} onClick={() => onMove(-1)} aria-label={`Monter « ${title} »`}>
                <ArrowUp aria-hidden="true" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="tw:size-9" disabled={index === count - 1} onClick={() => onMove(1)} aria-label={`Descendre « ${title} »`}>
                <ArrowDown aria-hidden="true" />
              </Button>
            </>
          ) : null}
          {allowEdit ? <EditButton reference={reference} label={option?.title} compact /> : null}
          <Button type="button" variant="destructiveGhost" size="icon" className="tw:size-9" onClick={onRemove} aria-label={`Retirer « ${title} »`}>
            <X aria-hidden="true" />
          </Button>
        </span>
      ) : null}
    </li>
  )
}

/** « Ouvrir »: the chosen document in a drawer, to correct it without leaving the page. */
function EditButton({ reference, label, compact = false }: { reference: Ref; label?: string; compact?: boolean }) {
  const [DocumentDrawer, , { openDrawer, closeDrawer }] = useDocumentDrawer({ collectionSlug: reference.relationTo as CollectionSlug, id: Number(reference.value) })
  return (
    <>
      {compact ? (
        <Button type="button" variant="ghost" size="icon" className="tw:size-9" onClick={openDrawer} aria-label={`Ouvrir « ${label ?? 'le document'} »`}>
          <PenLine aria-hidden="true" />
        </Button>
      ) : (
        <Button type="button" variant="ghost" onClick={openDrawer} aria-label={`Ouvrir « ${label ?? 'le document'} »`} title="Ouvrir pour modifier" className="tw:px-3">
          <PenLine aria-hidden="true" />
          <span className="tw:hidden tw:@min-[400px]:inline">Ouvrir</span>
        </Button>
      )}
      <DocumentDrawer
        onSave={() => {
          invalidateRelationOptions(reference.relationTo)
          closeDrawer()
        }}
      />
    </>
  )
}
