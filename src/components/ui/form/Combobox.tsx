'use client'

import { useEffect, useId, useMemo, useRef, useState, type InputHTMLAttributes } from 'react'

import { Icon } from '@/components/ui/Icon'

import styles from './Form.module.css'

const fold = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[-'’\s]+/g, ' ')
    .toLowerCase()
    .trim()

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'list'> & {
  id: string
  value: string
  onChange: (value: string) => void
  suggestions: string[]
  max?: number
}

/**
 * Free text with suggestions under it (WAI-ARIA combobox with a list): the
 * communes we work in come first, any other one can still be typed.
 */
export function Combobox({ id, value, onChange, suggestions, max = 8, onBlur, onKeyDown, ...input }: Props) {
  const listId = useId()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const root = useRef<HTMLDivElement>(null)

  const matches = useMemo(() => {
    const query = fold(value)
    if (!query) return suggestions.slice(0, max)
    const starts = suggestions.filter((item) => fold(item).startsWith(query))
    const contains = suggestions.filter((item) => !fold(item).startsWith(query) && fold(item).includes(query))
    return [...starts, ...contains].filter((item) => fold(item) !== query).slice(0, max)
  }, [value, suggestions, max])

  useEffect(() => {
    if (!open) return
    const onDown = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [open])

  const expanded = open && matches.length > 0

  return (
    <div ref={root} className={styles.wrap}>
      <div className={styles.control} style={{ padding: 0 }}>
        <input
          {...input}
          id={id}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={expanded}
          aria-controls={listId}
          aria-activedescendant={expanded && active >= 0 ? `${listId}-${active}` : undefined}
          value={value}
          autoComplete="off"
          onChange={(event) => {
            onChange(event.target.value)
            setOpen(true)
            setActive(-1)
          }}
          onFocus={() => setOpen(true)}
          onBlur={(event) => {
            if (!root.current?.contains(event.relatedTarget as Node)) setOpen(false)
            onBlur?.(event)
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault()
              setOpen(true)
              setActive((index) => Math.min(matches.length - 1, index + 1))
            } else if (event.key === 'ArrowUp') {
              event.preventDefault()
              setActive((index) => Math.max(-1, index - 1))
            } else if (event.key === 'Enter' && expanded && active >= 0) {
              event.preventDefault()
              onChange(matches[active]!)
              setOpen(false)
            } else if (event.key === 'Escape' && expanded) {
              event.preventDefault()
              setOpen(false)
            }
            onKeyDown?.(event)
          }}
          style={{ flex: 1, minWidth: 0, minHeight: 50, padding: '0.8rem 1rem', border: 0, background: 'transparent', color: 'inherit', font: 'inherit', outline: 'none' }}
        />
        <Icon name="mapPin" size={18} className={styles.chevron} style={{ marginRight: '1rem' }} />
      </div>
      {expanded ? (
        <ul id={listId} role="listbox" className={styles.popup}>
          {matches.map((item, index) => (
            <li
              key={item}
              id={`${listId}-${index}`}
              role="option"
              aria-selected={index === active}
              data-active={index === active}
              className={styles.option}
              onPointerMove={() => setActive(index)}
              onPointerDown={(event) => event.preventDefault()}
              onClick={() => {
                onChange(item)
                setOpen(false)
              }}
            >
              <span className={styles.optionText}>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
