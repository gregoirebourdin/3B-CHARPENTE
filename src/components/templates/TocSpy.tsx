'use client'

import { useEffect } from 'react'

/**
 * Marks the link of the section being read in a table of contents
 * (aria-current="true"). Without JavaScript the list simply stays a list.
 */
export function TocSpy({ navId }: { navId: string }) {
  useEffect(() => {
    const nav = document.getElementById(navId)
    if (!nav) return
    const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[href*="#"]'))
    const targets = links
      .map((link) => {
        const id = decodeURIComponent(link.hash.slice(1))
        const element = id ? document.getElementById(id) : null
        return element ? { link, element } : null
      })
      .filter((item): item is { link: HTMLAnchorElement; element: HTMLElement } => Boolean(item))
    if (!targets.length || !('IntersectionObserver' in window)) return

    const update = () => {
      // The last heading above the middle of the screen is the current one.
      let current = targets[0]
      for (const target of targets) {
        if (target.element.getBoundingClientRect().top < window.innerHeight * 0.35) current = target
      }
      for (const { link } of targets) link.removeAttribute('aria-current')
      current?.link.setAttribute('aria-current', 'true')
    }
    const observer = new IntersectionObserver(update)
    targets.forEach(({ element }) => observer.observe(element))
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', update)
    }
  }, [navId])
  return null
}
