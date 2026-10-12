import type { Field } from 'payload'

import { isRichTextEmpty } from '../../lib/richtext'

type RichTextOptions = {
  name?: string
  label?: string
  required?: boolean
  description?: string
  /**
   * « basic »: texts inside sections (paragraphs, bold, italic, lists, links).
   * « article »: guides and legal pages, with part titles, quotes and separators.
   */
  editor?: 'basic' | 'article'
  placeholder?: string
}

/**
 * A rich text written with the Tiptap editor of the admin
 * (src/payload/admin/fields/RichTextField.tsx), stored as Tiptap JSON in a
 * jsonb column and drawn by src/components/rich-text/RichText.tsx.
 */
export const richTextField = ({ name = 'text', label = 'Texte', required = false, description, editor = 'basic', placeholder }: RichTextOptions = {}): Field => ({
  name,
  type: 'json',
  label,
  required,
  admin: {
    description,
    components: {
      Field: { path: '@/payload/admin/fields/RichTextField#RichTextField', clientProps: { variant: editor, ...(placeholder ? { placeholder } : {}) } },
    },
  },
  validate: (value: unknown) => (required && isRichTextEmpty(value) ? 'Ce texte est obligatoire.' : true),
  typescriptSchema: [
    () => ({
      type: 'object',
      description: 'Tiptap document (type « doc »).',
      properties: { type: { type: 'string', enum: ['doc'] }, content: { type: 'array', items: { type: 'object', additionalProperties: true } } },
      required: ['type'],
      additionalProperties: true,
    }),
  ],
})
