import type { Block } from 'payload'

import {
  CalloutBlock,
  CardsBlock,
  ComparisonTableBlock,
  CtaBlock,
  FiguresBlock,
  ListBlock,
  ManifestoBlock,
  ProsConsBlock,
  QuoteBlock,
  RichTextBlock,
  SpotlightBlock,
  StepsBlock,
  TextImageBlock,
} from './content'
import {
  ArticlesBlock,
  ContactFormBlock,
  FaqBlock,
  GalleryBlock,
  ProjectsBlock,
  ProjectsExplorerBlock,
  ProofsBlock,
  ReviewsBlock,
  ServiceAreaBlock,
  ServicesGridBlock,
  TeamBlock,
} from './dynamic'

/** Short table names: Postgres identifiers are limited to 63 characters. */
const DB_NAMES: Record<string, string> = {
  textImage: 'b_txtimg',
  cards: 'b_cards',
  servicesGrid: 'b_svc',
  projects: 'b_proj',
  projectsExplorer: 'b_explr',
  steps: 'b_steps',
  list: 'b_list',
  faq: 'b_faq',
  cta: 'b_cta',
  manifesto: 'b_mnf',
  spotlight: 'b_spot',
  gallery: 'b_gal',
  comparisonTable: 'b_table',
  quote: 'b_quote',
  proofs: 'b_proofs',
  serviceArea: 'b_area',
  team: 'b_team',
  reviews: 'b_reviews',
  articles: 'b_arts',
  contactForm: 'b_form',
  richText: 'b_rich',
  figures: 'b_fig',
  callout: 'b_note',
  prosCons: 'b_pc',
}

// Prefixed by the parent table (pages, services, articles…) so collections never share a table.
// Each section is labelled with its own title in the admin (BlockRowLabel), not « Sans titre ».
const withDbName = (block: Block): Block => {
  const short = DB_NAMES[block.slug] ?? block.slug
  return {
    ...block,
    dbName: ({ tableName }) => (tableName ? `${tableName}_${short}` : short),
    admin: {
      ...block.admin,
      components: { ...block.admin?.components, Label: '@/payload/admin/components/BlockRowLabel#BlockRowLabel' },
    },
  }
}

/**
 * The page builder. Order = order of the "Ajouter une section" menu.
 * Each block has exactly one React component in src/components/blocks.
 */
export const PAGE_BLOCKS: Block[] = [
  TextImageBlock,
  CardsBlock,
  FiguresBlock,
  CalloutBlock,
  ProsConsBlock,
  ServicesGridBlock,
  ProjectsBlock,
  ProjectsExplorerBlock,
  StepsBlock,
  ListBlock,
  FaqBlock,
  CtaBlock,
  ManifestoBlock,
  SpotlightBlock,
  GalleryBlock,
  ComparisonTableBlock,
  QuoteBlock,
  ProofsBlock,
  ServiceAreaBlock,
  TeamBlock,
  ReviewsBlock,
  ArticlesBlock,
  ContactFormBlock,
  RichTextBlock,
].map(withDbName)
