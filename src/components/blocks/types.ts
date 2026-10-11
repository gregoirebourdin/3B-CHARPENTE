import type { Company } from '@/payload-types'
import type { SiteTexts } from '@/payload/globals/siteTextDefaults'

/** What every block receives besides its own data. */
export type BlockContext = {
  company: Company
  texts: SiteTexts
  /** Public path of the page being rendered. */
  path: string
}

export type BlockProps<T> = { block: T; context: BlockContext }
