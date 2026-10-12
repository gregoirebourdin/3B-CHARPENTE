'use client'

import { CalendarDays } from 'lucide-react'
import { useState } from 'react'
import { fr } from 'react-day-picker/locale'

import { Button } from '../ui/button'
import { Calendar } from '../ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { cn } from '../ui/utils'

const long = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

/** « 24 décembre 2026 ». */
export const formatDay = (date: Date) => long.format(date)

/** A stored date (ISO or « 2026-12-24 ») → that day, at midnight local time, for the calendar. */
export function toDay(value: unknown): Date | undefined {
  if (!value || (typeof value !== 'string' && !(value instanceof Date))) return undefined
  const ymd = typeof value === 'string' ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(value) : null
  if (ymd) return new Date(Number(ymd[1]), Number(ymd[2]) - 1, Number(ymd[3]))
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

/** A day → the ISO Payload stores for a day-only date: 12:00 UTC, so it reads the same day everywhere. */
export const dayToIso = (day: Date) => new Date(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate(), 12)).toISOString()

/** A day → « 2026-12-24 ». */
export const dayToYmd = (day: Date) => `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`

/**
 * shadcn/ui Date Picker: a Button that opens a Popover holding the Calendar
 * (in French, weeks starting on Monday, month and year lists). Under the
 * calendar, « Aujourd’hui » and, when the date is optional, « Effacer ».
 */
export function DatePicker({
  id,
  value,
  onChange,
  required,
  disabled,
  invalid,
  min,
  placeholder = 'Choisir une date',
  ...aria
}: {
  id?: string
  value: Date | undefined
  onChange: (day: Date | undefined) => void
  required?: boolean
  disabled?: boolean
  invalid?: boolean
  /** First day that can be chosen (e.g. the end of a closure after its start). */
  min?: Date
  placeholder?: string
  'aria-describedby'?: string
  'aria-required'?: boolean
}) {
  const [open, setOpen] = useState(false)
  const today = new Date()
  const choose = (day: Date | undefined) => {
    onChange(day)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          type="button"
          variant="outline"
          disabled={disabled}
          aria-invalid={invalid || undefined}
          className={cn(
            'tw:w-full tw:min-w-0 tw:justify-start tw:px-3.5 tw:text-left tw:font-normal',
            'tw:hover:border-[color-mix(in_srgb,var(--c-ink)_45%,transparent)] tw:hover:bg-card tw:data-[state=open]:border-forest',
            'tw:aria-invalid:border-error',
          )}
          {...aria}
        >
          <CalendarDays aria-hidden="true" className="tw:text-stone-text" />
          <span className={cn('tw:truncate', !value && 'tw:text-stone-text')}>{value ? formatDay(value) : placeholder}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="tw:w-auto tw:p-3">
        <Calendar
          mode="single"
          locale={fr}
          selected={value}
          onSelect={choose}
          defaultMonth={value ?? min}
          captionLayout="dropdown"
          startMonth={new Date(2007, 0)}
          endMonth={new Date(today.getFullYear() + 3, 11)}
          disabled={min ? { before: min } : undefined}
          autoFocus
        />
        <div className="tw:mt-2 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:border-0 tw:border-t tw:border-solid tw:border-line tw:pt-3">
          <Button type="button" variant="outline" size="sm" disabled={Boolean(min && today < min)} onClick={() => choose(new Date(today.getFullYear(), today.getMonth(), today.getDate()))}>
            Aujourd’hui
          </Button>
          {!required && value ? (
            <Button type="button" variant="ghost" size="sm" onClick={() => choose(undefined)}>
              Effacer
            </Button>
          ) : null}
        </div>
      </PopoverContent>
    </Popover>
  )
}
