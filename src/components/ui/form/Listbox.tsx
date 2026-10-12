'use client'

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react'

import { Icon } from '@/components/ui/Icon'

import styles from './Form.module.css'

export type ListOption = { value: string; label: string; hint?: string }
export type ListGroup = { label?: string; options: ListOption[] }

type Props = {
  id: string
  value: string
  onChange: (value: string) => void
  /** Options, or groups of options with a heading. */
  groups: ListGroup[]
  placeholder?: string
  labelledBy?: string
  describedBy?: string
  invalid?: boolean
  required?: boolean
  name?: string
  onBlur?: () => void
  className?: string
}

/**
 * A list to choose from, drawn by the site instead of the system menu
 * (WAI-ARIA « select-only combobox »): arrows, Home/End, typing a letter,
 * Enter or Space to choose, Escape to close.
 */
export function Listbox({ id, value, onChange, groups, placeholder = '—', labelledBy, describedBy, invalid, required, name, onBlur, className }: Props) {
  const listId = useId()
  const options = useMemo(() => groups.flatMap((group) => group.options), [groups])
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const root = useRef<HTMLDivElement>(null)
  const list = useRef<HTMLUListElement>(null)
  const typed = useRef({ text: '', at: 0 })
  const selected = options.find((option) => option.value === value)
  // Position of each group's first option in the flat list (keyboard and aria-activedescendant use it).
  const offsets = useMemo(() => groups.map((_, groupIndex) => groups.slice(0, groupIndex).reduce((count, group) => count + group.options.length, 0)), [groups])

  const show = (index = Math.max(0, options.findIndex((option) => option.value === value))) => {
    setActive(index)
    setOpen(true)
  }
  const choose = (index: number) => {
    const option = options[index]
    if (option) onChange(option.value)
    setOpen(false)
  }

  // Close when clicking elsewhere.
  useEffect(() => {
    if (!open) return
    const onDown = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [open])

  // Keep the active line in view.
  useEffect(() => {
    if (!open || active < 0) return
    list.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [open, active])

  const typeAhead = (key: string) => {
    const now = Date.now()
    typed.current = { text: (now - typed.current.at > 700 ? '' : typed.current.text) + key.toLowerCase(), at: now }
    const fold = (text: string) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    const match = options.findIndex((option) => fold(option.label).startsWith(fold(typed.current.text)))
    if (match >= 0) (open ? setActive : choose)(match)
  }

  const onKeyDown = (event: KeyboardEvent) => {
    const last = options.length - 1
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        if (!open) show()
        else setActive((index) => Math.min(last, index + 1))
        break
      case 'ArrowUp':
        event.preventDefault()
        if (!open) show()
        else setActive((index) => Math.max(0, index - 1))
        break
      case 'Home':
        if (open) {
          event.preventDefault()
          setActive(0)
        }
        break
      case 'End':
        if (open) {
          event.preventDefault()
          setActive(last)
        }
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (open) choose(active)
        else show()
        break
      case 'Escape':
        if (open) {
          event.preventDefault()
          setOpen(false)
        }
        break
      case 'Tab':
        if (open) choose(active)
        break
      default:
        if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) typeAhead(event.key)
    }
  }

  return (
    <div ref={root} className={`${styles.wrap} ${className ?? ''}`}>
      <div
        id={id}
        role="combobox"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open && active >= 0 ? `${listId}-${active}` : undefined}
        aria-labelledby={[labelledBy, `${id}-value`].filter(Boolean).join(' ')}
        aria-describedby={describedBy}
        aria-invalid={invalid || undefined}
        aria-required={required || undefined}
        className={`${styles.control} ${styles.trigger}`}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={onKeyDown}
        onBlur={(event) => {
          if (!root.current?.contains(event.relatedTarget as Node)) {
            setOpen(false)
            onBlur?.()
          }
        }}
      >
        <span id={`${id}-value`} className={`${styles.value} ${selected ? '' : styles.placeholder}`}>
          {selected?.label ?? placeholder}
        </span>
        <Icon name="chevronDown" size={18} className={styles.chevron} />
      </div>
      {name ? <input type="hidden" name={name} value={value} /> : null}
      {open ? (
        <ul ref={list} id={listId} role="listbox" aria-labelledby={labelledBy} className={styles.popup} tabIndex={-1}>
          {groups.map((group, groupIndex) => (
            <li key={group.label ?? groupIndex} role="presentation">
              {group.label ? (
                <div id={`${listId}-g${groupIndex}`} className={styles.groupLabel} role="presentation">
                  {group.label}
                </div>
              ) : null}
              <ul role="group" aria-labelledby={group.label ? `${listId}-g${groupIndex}` : undefined} style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {group.options.map((option, optionIndex) => {
                  const current = offsets[groupIndex]! + optionIndex
                  return (
                    <li
                      key={option.value}
                      id={`${listId}-${current}`}
                      role="option"
                      aria-selected={option.value === value}
                      data-index={current}
                      data-active={current === active}
                      className={styles.option}
                      onPointerMove={() => setActive(current)}
                      onPointerDown={(event) => event.preventDefault()}
                      onClick={() => choose(current)}
                    >
                      <Icon name="check" size={18} className={styles.tick} />
                      <span className={styles.optionText}>{option.label}</span>
                      {option.hint ? <span className={styles.optionHint}>{option.hint}</span> : null}
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
