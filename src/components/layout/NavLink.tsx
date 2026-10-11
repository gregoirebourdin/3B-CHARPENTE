'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

type Props = { href: string; className?: string; children: ReactNode }

/** Header link that knows the section the visitor is in (aria-current="page"). */
export function NavLink({ href, className, children }: Props) {
  const pathname = usePathname()
  const current = pathname === href || (href !== '/' && pathname.startsWith(href))
  return (
    <Link href={href} className={className} aria-current={current ? 'page' : undefined}>
      {children}
    </Link>
  )
}
