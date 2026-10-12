import type { Block, Config, Field, Plugin } from 'payload'

const BASE = '@/payload/admin/fields'

/** Our component for each simple field type (src/payload/admin/fields). */
const COMPONENTS: Partial<Record<Field['type'], string>> = {
  text: `${BASE}/TextField#TextField`,
  email: `${BASE}/TextField#TextField`,
  textarea: `${BASE}/TextareaField#TextareaField`,
  number: `${BASE}/NumberField#NumberField`,
  select: `${BASE}/SelectField#SelectField`,
  checkbox: `${BASE}/CheckboxField#CheckboxField`,
  radio: `${BASE}/RadioField#RadioField`,
  upload: `${BASE}/UploadField#UploadField`,
}

/** Types whose component also handles lists of values (hasMany). */
const HANDLES_MANY = new Set<Field['type']>(['upload'])

type AnyField = Field & { admin?: { hidden?: boolean; components?: { Field?: unknown } }; hasMany?: boolean; fields?: Field[]; tabs?: { fields: Field[] }[]; blocks?: (Block | string)[] }

/** « Page (facultatif) » → « Page »: the admin adds « facultatif » itself, on every optional field. */
const withoutOptionalMark = (field: Field): Field => {
  const label = (field as { label?: unknown }).label
  return typeof label === 'string' && /\s*\((facultatif|optionnel)\)\s*$/i.test(label)
    ? ({ ...field, label: label.replace(/\s*\((facultatif|optionnel)\)\s*$/i, '') } as Field)
    : field
}

function withComponents(fields: Field[] | undefined): Field[] | undefined {
  return fields?.map((original) => {
    const input = withoutOptionalMark(original)
    const field = input as AnyField
    if ('fields' in field && Array.isArray(field.fields)) return { ...field, fields: withComponents(field.fields) } as Field
    if (field.type === 'tabs') return { ...field, tabs: field.tabs!.map((tab) => ({ ...tab, fields: withComponents(tab.fields)! })) } as Field
    if (field.type === 'blocks' && field.blocks) {
      return { ...field, blocks: field.blocks.map((block) => (typeof block === 'string' ? block : withBlock(block))) } as Field
    }
    const component = COMPONENTS[field.type]
    // Fields with their own component (SEO counters, notices…), hidden ones and lists of values keep theirs.
    if (!component || field.admin?.hidden || field.admin?.components?.Field || (field.hasMany && !HANDLES_MANY.has(field.type))) return input
    return { ...field, admin: { ...field.admin, components: { ...field.admin?.components, Field: component } } } as Field
  })
}

const withBlock = (block: Block): Block => ({ ...block, fields: withComponents(block.fields)! })

/**
 * Every simple field of the administration (text, list, box, choice…) uses
 * our components, drawn like the rest of the admin, instead of Payload's
 * defaults. Placed after the other plugins so their collections get them too.
 */
export const customFields: Plugin = (config: Config): Config => ({
  ...config,
  blocks: config.blocks?.map(withBlock),
  collections: config.collections?.map((collection) => ({ ...collection, fields: withComponents(collection.fields)! })),
  globals: config.globals?.map((global) => ({ ...global, fields: withComponents(global.fields)! })),
})
