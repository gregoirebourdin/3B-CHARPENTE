'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Fade-up of the blocks ([data-reveal]) as they come into view. Only blocks
 * still below the screen once the page is running are hidden: what is
 * already on screen never waits for JavaScript, and without JavaScript (or
 * with reduced motion) everything is simply visible.
 */
export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const show = (element: Element) => element.removeAttribute('data-reveal-pending')
    const below = Array.from(document.querySelectorAll('[data-reveal]')).filter(
      (element) => element.getBoundingClientRect().top > window.innerHeight,
    )
    if (!below.length) return
    below.forEach((element) => element.setAttribute('data-reveal-pending', ''))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    below.forEach((element) => observer.observe(element))
    const showAll = () => below.forEach(show)
    window.addEventListener('beforeprint', showAll)
    return () => {
      observer.disconnect()
      window.removeEventListener('beforeprint', showAll)
      showAll()
    }
  }, [pathname])

  return null
}
