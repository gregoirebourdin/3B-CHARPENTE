import {
  BlockquoteFeature,
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  UnorderedListFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Field } from 'payload'

import { LINKABLE_COLLECTIONS } from '../utilities/routes'

const linkFeature = LinkFeature({
  enabledCollections: [...LINKABLE_COLLECTIONS],
  // Internal links open in the same tab, external ones are handled by the renderer.
  fields: ({ defaultFields }) => defaultFields.filter((field) => !('name' in field && field.name === 'newTab')),
})

/**
 * Short texts inside sections: paragraphs, bold, italic, links and lists.
 * No headings, so the H2/H3 hierarchy stays in the hands of the design.
 */
export const basicEditor = lexicalEditor({
  features: () => [
    ParagraphFeature(),
    BoldFeature(),
    ItalicFeature(),
    linkFeature,
    UnorderedListFeature(),
    OrderedListFeature(),
    InlineToolbarFeature(),
    FixedToolbarFeature(),
  ],
})

/** Long texts (guides, legal notice): adds H2/H3, quotes and separators. */
export const articleEditor = lexicalEditor({
  features: () => [
    ParagraphFeature(),
    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3'] }),
    BoldFeature(),
    ItalicFeature(),
    linkFeature,
    UnorderedListFeature(),
    OrderedListFeature(),
    BlockquoteFeature(),
    HorizontalRuleFeature(),
    InlineToolbarFeature(),
    FixedToolbarFeature(),
  ],
})

type RichTextOptions = {
  name?: string
  label?: string
  required?: boolean
  description?: string
  editor?: 'basic' | 'article'
}

export const richTextField = ({
  name = 'text',
  label = 'Texte',
  required = false,
  description,
  editor = 'basic',
}: RichTextOptions = {}): Field => ({
  name,
  type: 'richText',
  label,
  required,
  editor: editor === 'article' ? articleEditor : basicEditor,
  admin: { description },
})
