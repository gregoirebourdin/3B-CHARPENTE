'use client'

import { useNav } from '@payloadcms/ui'
import { ChevronDown, ExternalLink, LifeBuoy, LogOut, UserRound } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { Avatar, AvatarFallback } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { cn } from '../ui/utils'
import { NAV_ICONS } from './icons'
import type { NavGroup, NavLink } from './items'

type Props = { groups: NavGroup[]; requests: number; userName: string; userRole: string }

const isActive = (pathname: string, link: NavLink) => {
  if (link.href === '/admin') return pathname === '/admin' || pathname === '/admin/'
  return [link.href, ...(link.match ?? [])].some((href) => pathname === href || pathname.startsWith(`${href}/`))
}

const initials = (name: string) =>
  name
    .split(/[\s@._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')

/** Client part of the sidebar: active link, collapsible « more » group, account menu. */
export function NavShell({ groups, requests, userName, userRole }: Props) {
  const { hydrated, navOpen, navRef, setNavOpen, shouldAnimate } = useNav()
  const pathname = usePathname() ?? '/admin'
  const moreActive = groups.some((group) => group.collapsible && group.links.some((link) => isActive(pathname, link)))
  const [moreOpen, setMoreOpen] = useState(moreActive)
  const closeOnSmallScreens = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches) setNavOpen(false)
  }

  const renderLink = (link: NavLink) => {
    const Icon = NAV_ICONS[link.icon]
    const active = isActive(pathname, link)
    return (
      <li key={link.href}>
        <Link
          href={link.href}
          onClick={closeOnSmallScreens}
          aria-current={active ? 'page' : undefined}
          className={cn(
            'tw:group tw:flex tw:min-h-11 tw:items-center tw:gap-3 tw:rounded-lg tw:px-3 tw:text-[15px] tw:font-medium tw:text-foreground/85 tw:no-underline tw:transition-colors tw:hover:bg-muted tw:hover:text-foreground tw:focus-visible:outline-none tw:focus-visible:ring-[3px] tw:focus-visible:ring-ring/40',
            active && 'tw:bg-accent tw:font-semibold tw:text-foreground tw:hover:bg-accent',
          )}
        >
          <Icon className={cn('tw:size-[19px] tw:shrink-0 tw:text-muted-foreground tw:transition-colors tw:group-hover:text-foreground', active && 'tw:text-foreground')} aria-hidden="true" />
          <span className="tw:flex-1 tw:truncate">{link.label}</span>
          {link.badge === 'requests' && requests > 0 ? (
            <Badge className="tw:min-w-6 tw:justify-center tw:px-2" aria-label={`${requests} nouvelle${requests > 1 ? 's' : ''}`}>
              {requests}
            </Badge>
          ) : null}
        </Link>
      </li>
    )
  }

  return (
    <aside
      className={['nav', navOpen && 'nav--nav-open', shouldAnimate && 'nav--nav-animate', hydrated && 'nav--nav-hydrated', 'tb-admin-nav']
        .filter(Boolean)
        .join(' ')}
      inert={!navOpen ? true : undefined}
    >
      <div className="nav__scroll tw:!gap-0" ref={navRef}>
        <nav aria-label="Navigation de l’administration" className="tw:flex tw:w-full tw:flex-1 tw:flex-col tw:gap-6 tw:pt-2">
          {groups.map((group, index) =>
            group.collapsible ? (
              <div key={group.label ?? index} className="tw:flex tw:flex-col tw:gap-1">
                <button
                  type="button"
                  aria-expanded={moreOpen}
                  onClick={() => setMoreOpen((open) => !open)}
                  className="tw:flex tw:min-h-10 tw:w-full tw:cursor-pointer tw:items-center tw:justify-between tw:rounded-lg tw:border-0 tw:bg-transparent tw:px-3 tw:font-sans tw:text-[13px] tw:font-semibold tw:uppercase tw:tracking-[0.08em] tw:text-muted-foreground tw:hover:bg-muted tw:hover:text-foreground"
                >
                  {group.label}
                  <ChevronDown className={cn('tw:size-4 tw:transition-transform', moreOpen && 'tw:rotate-180')} aria-hidden="true" />
                </button>
                {moreOpen ? <ul className="tw:m-0 tw:flex tw:list-none tw:flex-col tw:gap-0.5 tw:p-0">{group.links.map(renderLink)}</ul> : null}
              </div>
            ) : (
              <div key={group.label ?? index} className="tw:flex tw:flex-col tw:gap-1">
                {group.label ? (
                  <p className="tw:m-0 tw:px-3 tw:pb-1 tw:text-[13px] tw:font-semibold tw:uppercase tw:tracking-[0.08em] tw:text-muted-foreground">{group.label}</p>
                ) : null}
                <ul className="tw:m-0 tw:flex tw:list-none tw:flex-col tw:gap-0.5 tw:p-0">{group.links.map(renderLink)}</ul>
              </div>
            ),
          )}
        </nav>

        <div className="tw:mt-6 tw:flex tw:w-full tw:flex-col tw:gap-1 tw:border-t tw:border-border tw:pt-4">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="tw:flex tw:min-h-11 tw:items-center tw:gap-3 tw:rounded-lg tw:px-3 tw:text-[15px] tw:font-medium tw:text-foreground/85 tw:no-underline tw:hover:bg-muted tw:hover:text-foreground"
          >
            <ExternalLink className="tw:size-[19px] tw:text-muted-foreground" aria-hidden="true" />
            Voir le site
            <span className="tw:sr-only"> (nouvel onglet)</span>
          </a>
          <Link
            href="/admin/aide"
            onClick={closeOnSmallScreens}
            aria-current={pathname.startsWith('/admin/aide') ? 'page' : undefined}
            className={cn(
              'tw:flex tw:min-h-11 tw:items-center tw:gap-3 tw:rounded-lg tw:px-3 tw:text-[15px] tw:font-medium tw:text-foreground/85 tw:no-underline tw:hover:bg-muted tw:hover:text-foreground',
              pathname.startsWith('/admin/aide') && 'tw:bg-accent tw:font-semibold tw:text-foreground',
            )}
          >
            <LifeBuoy className="tw:size-[19px] tw:text-muted-foreground" aria-hidden="true" />
            Aide
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="tw:mt-1 tw:flex tw:min-h-14 tw:w-full tw:cursor-pointer tw:items-center tw:gap-3 tw:rounded-xl tw:border tw:border-border tw:bg-card tw:px-2.5 tw:text-left tw:font-sans tw:outline-none tw:hover:bg-muted tw:focus-visible:ring-[3px] tw:focus-visible:ring-ring/40">
              <Avatar>
                <AvatarFallback>{initials(userName) || '3B'}</AvatarFallback>
              </Avatar>
              <span className="tw:flex tw:min-w-0 tw:flex-1 tw:flex-col">
                <span className="tw:truncate tw:text-[15px] tw:font-semibold tw:text-foreground">{userName}</span>
                <span className="tw:text-[13px] tw:text-muted-foreground">{userRole}</span>
              </span>
              <ChevronDown className="tw:size-4 tw:text-muted-foreground" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="top" className="tw:w-[--radix-dropdown-menu-trigger-width]">
              <DropdownMenuLabel>Connecté en tant que {userName}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/admin/account" onClick={closeOnSmallScreens}>
                  <UserRound aria-hidden="true" />
                  Mon compte et mot de passe
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin/logout" prefetch={false}>
                  <LogOut aria-hidden="true" />
                  Se déconnecter
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </aside>
  )
}
