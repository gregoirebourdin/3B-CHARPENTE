import type { ComponentType } from 'react'

import type { Page } from '@/payload-types'

import { Articles } from './Articles'
import { Callout } from './Callout'
import { Cards } from './Cards'
import { ComparisonTable } from './ComparisonTable'
import { ContactForm } from './ContactForm'
import { Cta } from './Cta'
import { Faq } from './Faq'
import { Figures } from './Figures'
import { Gallery } from './Gallery'
import { List } from './List'
import { Manifesto } from './Manifesto'
import { Projects } from './Projects'
import { ProjectsExplorer } from './ProjectsExplorer'
import { ProsCons } from './ProsCons'
import { Proofs } from './Proofs'
import { Quote } from './Quote'
import { Reviews } from './Reviews'
import { RichTextBlock } from './RichTextBlock'
import { ServiceArea } from './ServiceArea'
import { ServicesGrid } from './ServicesGrid'
import { Spotlight } from './Spotlight'
import { Steps } from './Steps'
import { Team } from './Team'
import { TextImage } from './TextImage'
import type { BlockContext } from './types'

export type LayoutBlock = NonNullable<Page['layout']>[number]

/**
 * One block type in the admin = one component here. Adding a block means:
 * its config in src/payload/blocks, its component in this folder, one line below.
 */
const REGISTRY: { [K in LayoutBlock['blockType']]: ComponentType<{ block: Extract<LayoutBlock, { blockType: K }>; context: BlockContext }> } = {
  textImage: TextImage,
  cards: Cards,
  figures: Figures,
  callout: Callout,
  prosCons: ProsCons,
  servicesGrid: ServicesGrid,
  projects: Projects,
  projectsExplorer: ProjectsExplorer,
  steps: Steps,
  list: List,
  faq: Faq,
  cta: Cta,
  manifesto: Manifesto,
  spotlight: Spotlight,
  gallery: Gallery,
  comparisonTable: ComparisonTable,
  quote: Quote,
  proofs: Proofs,
  serviceArea: ServiceArea,
  team: Team,
  reviews: Reviews,
  articles: Articles,
  contactForm: ContactForm,
  richText: RichTextBlock,
}

export function RenderBlocks({ blocks, context }: { blocks: LayoutBlock[] | null | undefined; context: BlockContext }) {
  if (!blocks?.length) return null
  return (
    <>
      {blocks.map((block, index) => {
        const Component = REGISTRY[block.blockType] as ComponentType<{ block: LayoutBlock; context: BlockContext }> | undefined
        return Component ? <Component key={block.id ?? index} block={block} context={context} /> : null
      })}
    </>
  )
}
