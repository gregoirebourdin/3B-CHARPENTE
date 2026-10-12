'use client'

import { ChevronsUpDown, MapPin } from 'lucide-react'
import { useState, type ReactNode } from 'react'

import { Button } from '../../ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover'
import { cn } from '../../ui/utils'
import { fold, type CommuneOption } from './lib'

/** The typed part, underlined in sage. */
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
 * Commune field: shadcn/ui Combobox (Popover + Command). Type the first
 * letters, accents optional (« briancon »), villages are searched too and
 * shown under each commune.
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
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const selected = communes.find((commune) => commune.id === value) ?? null

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-describedby={describedBy}
          className={cn(
            'tw:min-h-13 tw:w-full tw:justify-between tw:gap-3 tw:rounded-xs tw:border-line-strong tw:bg-card tw:px-3.5 tw:text-left tw:text-[17px] tw:font-normal',
            !selected && 'tw:text-stone-text',
          )}
        >
          <span className="tw:flex tw:min-w-0 tw:items-center tw:gap-3">
            <MapPin aria-hidden="true" className="tw:size-5 tw:shrink-0 tw:text-stone-text" />
            <span className="tw:truncate">{selected ? selected.name : 'Choisir une commune'}</span>
          </span>
          <ChevronsUpDown aria-hidden="true" className="tw:size-4 tw:shrink-0 tw:text-stone-text" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="tw:w-[var(--radix-popover-trigger-width)] tw:min-w-[280px] tw:p-0">
        <Command filter={(itemValue, search, keywords) => (fold(`${itemValue} ${(keywords ?? []).join(' ')}`).includes(fold(search.trim())) ? 1 : 0)}>
          <CommandInput placeholder="Tapez les premières lettres" value={query} onValueChange={setQuery} />
          <CommandList>
            <CommandEmpty>Aucune commune ne correspond. Indiquez le village dans « Lieu affiché ».</CommandEmpty>
            <CommandGroup>
              {selected ? (
                <CommandItem
                  value="__aucune"
                  keywords={['effacer', 'aucune']}
                  onSelect={() => {
                    onChange(null)
                    setOpen(false)
                  }}
                  className="tw:text-stone-text"
                >
                  Aucune commune
                </CommandItem>
              ) : null}
              {communes.map((commune) => (
                <CommandItem
                  key={commune.id}
                  value={commune.name}
                  keywords={commune.villages ? [commune.villages] : undefined}
                  onSelect={() => {
                    onChange(commune.id)
                    setOpen(false)
                    setQuery('')
                  }}
                  className={cn('tw:grid tw:content-center tw:gap-0', commune.id === value && 'tw:font-semibold')}
                >
                  <span className="tw:text-base tw:font-semibold">{highlight(commune.name, query)}</span>
                  {commune.villages ? <span className="tw:text-sm tw:text-stone-text">{commune.villages}</span> : null}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
