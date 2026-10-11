'use client'

import { useNav } from '@payloadcms/ui'
import { ChevronDown, ExternalLink, LifeBuoy, LogOut, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { cn, focusRing } from '../ui/utils'
import { NAV_ICONS } from './icons'
import { isCurrent, type NavEntry, type NavGroup, type NavLink } from './items'

type Props = { entries: NavEntry[]; requests: number; userName: string }

const initials = (name: string) =>
  name
    .split(/[\s@._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')

const itemClass = cn(
  'tw:group tw:relative tw:flex tw:min-h-11 tw:w-full tw:cursor-pointer tw:items-center tw:gap-3 tw:rounded-sm tw:border-0 tw:bg-transparent tw:px-3',
  'tw:text-left tw:font-sans tw:text-base tw:font-medium tw:leading-[1.25] tw:text-ink tw:no-underline tw:transition-colors tw:duration-180 tw:ease-brand tw:hover:bg-surface',
  'tw:aria-[current=page]:bg-sage-soft tw:aria-[current=page]:font-[650]',
  focusRing,
  'tw:focus-visible:outline-offset-[-2px]',
)

const iconClass = 'tw:size-5 tw:shrink-0 tw:stroke-[1.8] tw:text-stone-text tw:group-aria-[current=page]:text-leaf'

/**
 * Client part of the sidebar (designs § 3): brand, five entries, two groups
 * that fold, « Plus d'options » folded, then « Voir le site », « Aide » and
 * the account. Open by default on a computer; a full-screen sheet on a phone.
 */
export function NavShell({ entries, requests, userName }: Props) {
  const { hydrated, navOpen, navRef, setNavOpen, shouldAnimate } = useNav()
  const pathname = usePathname() ?? '/admin'
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(entries.filter((entry): entry is NavGroup => entry.kind === 'group').map((group) => [group.id, group.defaultOpen])),
  )

  // Payload closes its sidebar under 1 440 px; on a computer it stays open here.
  useEffect(() => {
    if (!hydrated) return
    const queries = [window.matchMedia('(min-width: 1025px)'), window.matchMedia('(min-width: 1441px)')]
    const sync = () => {
      if (queries[0]?.matches) setNavOpen(true)
    }
    const timer = window.setTimeout(sync, 0)
    queries.forEach((query) => query.addEventListener('change', sync))
    return () => {
      window.clearTimeout(timer)
      queries.forEach((query) => query.removeEventListener('change', sync))
    }
  }, [hydrated, setNavOpen])

  const toggle = (id: string) => setOpen((current) => ({ ...current, [id]: !current[id] }))

  const closeOnSmallScreens = () => {
    if (window.matchMedia('(max-width: 1024px)').matches) setNavOpen(false)
  }

  const renderLink = (link: NavLink) => {
    const Icon = NAV_ICONS[link.icon]
    const current = isCurrent(pathname, link)
    return (
      <li key={link.href}>
        <Link href={link.href} onClick={closeOnSmallScreens} aria-current={current ? 'page' : undefined} className={itemClass}>
          <Icon className={iconClass} aria-hidden="true" />
          <span className="tw:min-w-0 tw:flex-1 tw:truncate">{link.label}</span>
          {link.badge === 'requests' && requests > 0 ? (
            <span className="tw:ml-auto tw:inline-grid tw:h-[26px] tw:min-w-[26px] tw:place-items-center tw:rounded-full tw:bg-sage tw:px-2 tw:text-sm tw:font-bold tw:leading-none tw:text-on-sage">
              <span aria-hidden="true">{requests}</span>
              <span className="tw:sr-only">Nouvelles demandes : {requests}</span>
            </span>
          ) : null}
        </Link>
      </li>
    )
  }

  const renderGroup = (group: NavGroup) => {
    const Icon = NAV_ICONS[group.icon]
    const hasCurrent = group.links.some((link) => isCurrent(pathname, link))
    const expanded = open[group.id] || hasCurrent
    const listId = `tb-nav-${group.id}`
    return (
      <li key={group.id}>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => toggle(group.id)}
          className={cn(itemClass, hasCurrent && 'tw:font-[650]')}
        >
          <Icon className={iconClass} aria-hidden="true" />
          <span className="tw:min-w-0 tw:flex-1 tw:truncate">{group.label}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn('tw:ml-auto tw:size-4 tw:shrink-0 tw:text-stone-text tw:transition-transform tw:duration-320 tw:ease-brand', !expanded && 'tw:-rotate-90')}
          />
        </button>
        <ul
          id={listId}
          hidden={!expanded}
          className={cn('tw:m-0 tw:mb-0.5 tw:ml-[21px] tw:grid tw:list-none tw:gap-0.5 tw:border-0 tw:border-l tw:border-solid tw:border-line tw:p-0 tw:pl-3', !expanded && 'tw:hidden')}
        >
          {group.links.map((link) => {
            const current = isCurrent(pathname, link)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeOnSmallScreens}
                  aria-current={current ? 'page' : undefined}
                  className={cn(
                    'tw:relative tw:flex tw:min-h-11 tw:flex-col tw:justify-center tw:rounded-sm tw:px-3 tw:py-[3px] tw:font-sans tw:text-base tw:leading-[1.25] tw:text-ink tw:no-underline tw:transition-colors tw:duration-180 tw:hover:bg-surface',
                    "tw:aria-[current=page]:bg-sage-soft tw:aria-[current=page]:font-[650] tw:aria-[current=page]:before:absolute tw:aria-[current=page]:before:top-2.5 tw:aria-[current=page]:before:bottom-2.5 tw:aria-[current=page]:before:-left-[13.5px] tw:aria-[current=page]:before:w-0.5 tw:aria-[current=page]:before:rounded-[2px] tw:aria-[current=page]:before:bg-forest tw:aria-[current=page]:before:content-['']",
                    focusRing,
                    'tw:focus-visible:outline-offset-[-2px]',
                  )}
                >
                  {link.label}
                  {link.hint ? <small className="tw:text-sm tw:font-normal tw:leading-[1.3] tw:text-stone-text">{link.hint}</small> : null}
                </Link>
              </li>
            )
          })}
        </ul>
      </li>
    )
  }

  const helpCurrent = pathname.startsWith('/admin/aide')
  const accountCurrent = pathname.startsWith('/admin/account')

  return (
    <aside
      className={['nav', navOpen && 'nav--nav-open', shouldAnimate && 'nav--nav-animate', hydrated && 'nav--nav-hydrated', 'tb-admin-nav'].filter(Boolean).join(' ')}
      inert={!navOpen ? true : undefined}
    >
      <div className="nav__scroll tb-admin-nav__scroll" ref={navRef}>
        <div className="tw:flex tw:min-h-11 tw:items-center tw:justify-between tw:gap-3 tw:px-1">
          <Link href="/admin" onClick={closeOnSmallScreens} className={cn('tw:flex tw:items-center tw:gap-3 tw:rounded-sm tw:text-ink tw:no-underline', focusRing)}>
            {/* eslint-disable-next-line @next/next/no-img-element -- small static file of the admin */}
            <img src="/icon-192.png" alt="" width={40} height={40} className="tw:size-10 tw:shrink-0 tw:rounded-full" />
            <span className="tw:grid">
              <b className="tw:font-heading tw:text-[17px] tw:font-semibold tw:leading-[1.2] tw:tracking-[-0.01em]">3B Charpente</b>
              <small className="tw:text-sm tw:leading-[1.3] tw:text-stone-text">Administration</small>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setNavOpen(false)}
            className={cn(
              'tb-admin-nav__close tw:inline-flex tw:min-h-11 tw:cursor-pointer tw:items-center tw:gap-2 tw:rounded-xs tw:border tw:border-solid tw:border-line-strong tw:bg-card tw:px-3.5 tw:font-sans tw:text-base tw:font-semibold tw:text-ink tw:hover:bg-surface',
              focusRing,
            )}
          >
            <X aria-hidden="true" className="tw:size-[18px]" />
            Fermer
          </button>
        </div>

        <nav aria-label="Menu principal" className="tw:mt-6 tw:w-full">
          <ul className="tw:m-0 tw:grid tw:list-none tw:gap-0.5 tw:p-0">{entries.map((entry) => (entry.kind === 'link' ? renderLink(entry) : renderGroup(entry)))}</ul>
        </nav>

        <div className="tw:mt-auto tw:grid tw:w-full tw:gap-0.5 tw:border-0 tw:border-t tw:border-solid tw:border-line tw:pt-2">
          <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:gap-0.5">
            <a href="/" target="_blank" rel="noopener" className={itemClass}>
              <ExternalLink className={iconClass} aria-hidden="true" />
              Voir le site
              <span className="tw:sr-only"> (nouvel onglet)</span>
            </a>
            <Link href="/admin/aide" onClick={closeOnSmallScreens} aria-current={helpCurrent ? 'page' : undefined} className={itemClass}>
              <LifeBuoy className={iconClass} aria-hidden="true" />
              Aide
            </Link>
          </div>
          <Link
            href="/admin/account"
            onClick={closeOnSmallScreens}
            aria-current={accountCurrent ? 'page' : undefined}
            className={cn(itemClass, 'tw:min-h-[52px] tw:py-0.5')}
          >
            <span aria-hidden="true" className="tw:grid tw:size-10 tw:shrink-0 tw:place-items-center tw:rounded-full tw:bg-forest tw:text-[15px] tw:font-[650] tw:tracking-[0.02em] tw:text-on-forest">
              {initials(userName) || '3B'}
            </span>
            <span className="tw:grid tw:min-w-0">
              <b className="tw:truncate tw:text-base tw:font-semibold tw:leading-[1.25]">{userName}</b>
              <small className="tw:text-sm tw:font-normal tw:leading-[1.3] tw:text-stone-text">Votre compte</small>
            </span>
          </Link>
          <Link href="/admin/logout" prefetch={false} className={itemClass}>
            <LogOut className={iconClass} aria-hidden="true" />
            Se déconnecter
          </Link>
        </div>
      </div>
    </aside>
  )
}
