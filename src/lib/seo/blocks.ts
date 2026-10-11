import type { Faq, Page } from '@/payload-types'

import { faqPage, howTo } from './jsonld'

type Layout = Page['layout']

/** FAQPage and HowTo generated from the blocks actually displayed on the page. */
export function blocksJsonLd(layout: Layout, path: string) {
  const faqs: Faq[] = []
  const seen = new Set<number>()
  const howTos: ReturnType<typeof howTo>[] = []
  for (const block of layout ?? []) {
    if (block.blockType === 'faq') {
      for (const faq of block.faqs ?? []) {
        if (typeof faq === 'object' && faq && !seen.has(faq.id)) {
          seen.add(faq.id)
          faqs.push(faq)
        }
      }
    }
    if (block.blockType === 'steps' && block.isHowTo && block.steps?.length) {
      howTos.push(howTo(block.title ?? 'Méthode', path, block.steps, block.intro))
    }
  }
  return [faqPage(faqs, path), ...howTos.slice(0, 1)]
}
