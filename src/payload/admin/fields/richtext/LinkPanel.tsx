'use client'

import type { Editor } from '@tiptap/react'
import { ExternalLink, FileText, Link2Off, Search } from 'lucide-react'
import { useEffect, useMemo, useState, type ReactNode } from 'react'

import { Button } from '../../ui/button'
import { IconField, Input } from '../../ui/input'
import { Popover, PopoverAnchor, PopoverContent } from '../../ui/popover'
import { cn } from '../../ui/utils'
import { loadSitePages, type SitePage } from './sitePages'

const fold = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

/** What was typed, as an address: « www.x.fr » → https://…, an e-mail → mailto:, a number → tel:. */
function asAddress(text: string): string | null {
  const value = text.trim()
  if (!value) return null
  if (/^(https?:\/\/|mailto:|tel:|\/|#)/i.test(value)) return value
  if (/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(value)) return `mailto:${value}`
  if (/^\+?[\d\s.]{9,}$/.test(value)) return `tel:${value.replace(/[\s.]/g, '').replace(/^0(\d{9})$/, '+33$1')}`
  if (/^[\w-]+(\.[\w-]+)+(\/\S*)?$/.test(value)) return `https://${value}`
  return null
}

/**
 * Link editor of the text: search a page of the site by its name (the link
 * then follows the page if its address changes), or paste any address.
 */
export function LinkPanel({ editor, open, onOpenChange, children }: { editor: Editor; open: boolean; onOpenChange: (open: boolean) => void; children: ReactNode }) {
  const [pages, setPages] = useState<SitePage[]>([])
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const current = editor.getAttributes('link') as { href?: string; ref?: string | null }

  useEffect(() => {
    if (!open) return
    void loadSitePages().then(setPages)
  }, [open])

  const matches = useMemo(() => {
    const q = fold(query.trim())
    const list = q ? pages.filter((page) => fold(`${page.label} ${page.href}`).includes(q)) : pages.filter((page) => page.kind !== 'Chantier')
    return list.slice(0, 7)
  }, [pages, query])
  const address = asAddress(query)

  const close = () => {
    onOpenChange(false)
    setQuery('')
    setActive(0)
  }

  const apply = (href: string, ref: string | null, label?: string) => {
    const target = /^https?:\/\//.test(href) ? '_blank' : null
    const chain = editor.chain().focus().extendMarkRange('link')
    if (editor.state.selection.empty && !editor.isActive('link')) {
      chain.insertContent({ type: 'text', text: label ?? href, marks: [{ type: 'link', attrs: { href, ref, target } }] }).run()
    } else {
      chain.setLink({ href, target, ref } as never).run()
    }
    close()
  }

  const remove = () => {
    editor.chain().focus().extendMarkRange('link').unsetLink().run()
    close()
  }

  const choices = [...matches.map((page) => ({ key: page.ref, onPick: () => apply(page.href, page.ref, page.label), page })), ...(address ? [{ key: 'address', onPick: () => apply(address, null), page: null }] : [])]

  return (
    <Popover open={open} onOpenChange={(next) => (next ? onOpenChange(true) : close())}>
      <PopoverAnchor asChild>
        <span className="tw:inline-flex">{children}</span>
      </PopoverAnchor>
      <PopoverContent onCloseAutoFocus={(event) => event.preventDefault()}>
        <div className="tw:grid tw:gap-3">
          <div className="tw:grid tw:gap-1">
            <p className="tw:m-0 tw:text-base tw:font-semibold">{current.href ? 'Modifier le lien' : 'Ajouter un lien'}</p>
            <p className="tw:m-0 tw:text-sm tw:text-stone-text">
              {current.href ? (
                <>
                  Il mène à <strong className="tw:break-all tw:text-ink">{current.href}</strong>.
                </>
              ) : (
                'Cherchez une page du site par son nom, ou collez une adresse.'
              )}
            </p>
          </div>
          <IconField icon={<Search />}>
            <Input
              autoFocus
              value={query}
              placeholder="Ex. : charpente, Briançon, https://…"
              aria-label="Page ou adresse"
              aria-controls="tb-link-choices"
              aria-activedescendant={choices[active] ? `tb-link-${active}` : undefined}
              onChange={(event) => {
                setQuery(event.target.value)
                setActive(0)
              }}
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown') {
                  event.preventDefault()
                  setActive((index) => Math.min(choices.length - 1, index + 1))
                } else if (event.key === 'ArrowUp') {
                  event.preventDefault()
                  setActive((index) => Math.max(0, index - 1))
                } else if (event.key === 'Enter') {
                  event.preventDefault()
                  choices[active]?.onPick()
                }
              }}
            />
          </IconField>
          <ul id="tb-link-choices" role="listbox" aria-label="Pages du site" className="tw:m-0 tw:grid tw:max-h-72 tw:list-none tw:gap-0.5 tw:overflow-y-auto tw:p-0">
            {choices.map((choice, index) => (
              <li
                key={choice.key}
                id={`tb-link-${index}`}
                role="option"
                aria-selected={index === active}
                onPointerMove={() => setActive(index)}
                onPointerDown={(event) => event.preventDefault()}
                onClick={choice.onPick}
                className={cn('tw:flex tw:min-h-11 tw:cursor-pointer tw:items-center tw:gap-3 tw:rounded-xs tw:px-2.5 tw:py-1.5', index === active && 'tw:bg-surface')}
              >
                {choice.page ? <FileText aria-hidden="true" className="tw:size-4 tw:shrink-0 tw:text-stone-text" /> : <ExternalLink aria-hidden="true" className="tw:size-4 tw:shrink-0 tw:text-stone-text" />}
                <span className="tw:grid tw:min-w-0 tw:flex-1">
                  <span className="tw:truncate tw:text-base tw:font-semibold">{choice.page ? choice.page.label : `Utiliser l’adresse « ${address} »`}</span>
                  {choice.page ? (
                    <span className="tw:truncate tw:text-sm tw:text-stone-text">
                      {choice.page.kind} · {choice.page.href}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
            {!choices.length ? <li className="tw:px-2.5 tw:py-2 tw:text-sm tw:text-stone-text">{pages.length ? 'Aucune page ne correspond.' : 'Chargement des pages…'}</li> : null}
          </ul>
          <div className="tw:flex tw:items-center tw:justify-between tw:gap-2">
            {current.href ? (
              <Button type="button" variant="destructiveGhost" size="sm" onClick={remove}>
                <Link2Off aria-hidden="true" />
                Retirer le lien
              </Button>
            ) : (
              <span />
            )}
            <Button type="button" variant="ghost" size="sm" onClick={close}>
              Annuler
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
