'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Fade-up on first display of each block ([data-reveal]). The class that
 * hides blocks is only added by the inline script of the layout, after JS is
 * known to run and only if the visitor accepts motion: without JavaScript,
 * everything is visible.
 */
export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('js-reveal')) return
    const show = (element: Element) => element.setAttribute('data-revealed', '')
    const elements = Array.from(document.querySelectorAll('[data-reveal]:not([data-revealed])'))
    if (!('IntersectionObserver' in window)) {
      elements.forEach(show)
      return
    }
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
    elements.forEach((element) => observer.observe(element))
    const revealAll = () => document.querySelectorAll('[data-reveal]').forEach(show)
    window.addEventListener('beforeprint', revealAll)
    return () => {
      observer.disconnect()
      window.removeEventListener('beforeprint', revealAll)
    }
  }, [pathname])

  return null
}
