'use client'

import { MapPin, X } from 'lucide-react'
import { useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'

import { fieldClass } from '../../ui/input'
import { cn, focusRing } from '../../ui/utils'
import { fold, type CommuneOption } from './lib'

/** The typed part, underlined in sage (designs § 8, artboard 4 bis). */
function highlight(name: string, query: string): ReactNode {
  const q = fold(query.trim())
  if (!q) return name
  const start = fold(name).indexOf(q)
  if (start < 0) return name
  return (
    <>
      {name.slice(0, start)}
      <span className="tw:underline tw:decoration-sage tw:decoration-[3px] tw:underline-offset-4">{name.slice(start, start + q.length)}</span>
      {name.slice(start + q.length)}
    </>
  )
}

/**
 * Commune field with suggestions: type two letters, choose with the mouse or
 * the arrows and Enter. Villages are listed under each commune.
 */
export function CommuneCombobox({
  id,
  communes,
  value,
  onChange,
  describedBy,
}: {
  id: string
  communes: CommuneOption[]
  value: number | null
  onChange: (id: number | null) => void
  describedBy?: string
}) {
  const listId = useId()
  const selected = communes.find((commune) => commune.id === value) ?? null
  const [query, setQuery] = useState(selected?.name ?? '')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const options = useMemo(() => {
    const q = fold(query.trim())
    const list = q && (!selected || q !== fold(selected.name)) ? communes.filter((commune) => fold(`${commune.name} ${commune.villages}`).includes(q)) : communes
    return list.slice(0, 8)
  }, [communes, query, selected])

  const choose = (commune: CommuneOption) => {
    onChange(commune.id)
    setQuery(commune.name)
    setOpen(false)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpen(true)
      setActive((index) => Math.min(index + 1, options.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((index) => Math.max(index - 1, 0))
    } else if (event.key === 'Enter' && open && options[active]) {
      event.preventDefault()
      choose(options[active])
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div className="tw:relative">
      <MapPin aria-hidden="true" className="tw:pointer-events-none tw:absolute tw:top-1/2 tw:left-3.5 tw:size-5 tw:-translate-y-1/2 tw:text-stone-text" />
      <input
        ref={inputRef}
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={open && options[active] ? `${listId}-${options[active].id}` : undefined}
        aria-describedby={describedBy}
        autoComplete="off"
        value={query}
        placeholder="Tapez les premières lettres"
        onChange={(event) => {
          setQuery(event.target.value)
          setActive(0)
          setOpen(true)
          if (!event.target.value.trim()) onChange(null)
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => window.setTimeout(() => setOpen(false), 120)}
        onKeyDown={onKeyDown}
        className={cn(fieldClass, 'tw:min-h-13 tw:pr-12 tw:pl-11 tw:text-[17px]')}
      />
      {query ? (
        <button
          type="button"
          onClick={() => {
            setQuery('')
            onChange(null)
            inputRef.current?.focus()
          }}
          className={cn(
            'tw:absolute tw:top-1/2 tw:right-1 tw:grid tw:size-11 tw:-translate-y-1/2 tw:cursor-pointer tw:place-items-center tw:rounded-xs tw:border-0 tw:bg-transparent tw:text-stone-text tw:hover:bg-surface',
            focusRing,
          )}
        >
          <X aria-hidden="true" className="tw:size-[18px]" />
          <span className="tw:sr-only">Effacer la commune</span>
        </button>
      ) : null}
      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Communes"
          className="tw:absolute tw:top-[calc(100%+6px)] tw:right-0 tw:left-0 tw:z-50 tw:m-0 tw:grid tw:max-h-[340px] tw:list-none tw:gap-0.5 tw:overflow-y-auto tw:rounded-sm tw:border tw:border-line tw:bg-card tw:p-1.5 tw:shadow-lg"
        >
          {options.length ? (
            options.map((commune, index) => (
              <li
                key={commune.id}
                id={`${listId}-${commune.id}`}
                role="option"
                aria-selected={index === active}
                onMouseDown={(event) => {
                  event.preventDefault()
                  choose(commune)
                }}
                onMouseEnter={() => setActive(index)}
                className="tw:grid tw:min-h-13 tw:cursor-pointer tw:content-center tw:rounded-xs tw:px-3 tw:py-1.5 tw:aria-selected:bg-sage-soft"
              >
                <span className="tw:text-base tw:font-semibold">{highlight(commune.name, query)}</span>
                {commune.villages ? <span className="tw:text-sm tw:text-stone-text">{commune.villages}</span> : null}
              </li>
            ))
          ) : (
            <li role="option" aria-selected={false} aria-disabled="true" className="tw:grid tw:min-h-13 tw:content-center tw:px-3 tw:text-base tw:text-stone-text">
              Aucune commune ne correspond. Indiquez le village dans « Lieu affiché ».
            </li>
          )}
        </ul>
      ) : null}
    </div>
  )
}
