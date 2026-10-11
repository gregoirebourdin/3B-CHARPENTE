import type { Block } from 'payload'

import {
  CardsBlock,
  ComparisonTableBlock,
  CtaBlock,
  ListBlock,
  ManifestoBlock,
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

/**
 * The page builder. Order = order of the "Ajouter une section" menu.
 * Each block has exactly one React component in src/components/blocks.
 */
export const PAGE_BLOCKS: Block[] = [
  TextImageBlock,
  CardsBlock,
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
]
