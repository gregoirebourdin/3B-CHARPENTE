import type { Form } from '@/payload-types'

export type FieldKind = NonNullable<Form['fields']>[number]['blockType']

/** A form field as the visitor's browser and the server action both see it. */
export type FormFieldDef = {
  kind: FieldKind
  name: string
  label: string
  required: boolean
  width: 'full' | 'half'
  helpText?: string
  placeholder?: string
  errorMessage?: string
  rows?: number
  maxFiles?: number
  maxSizeMb?: number
  options: { label: string; prefill: string[] }[]
}

export type FormValues = Record<string, string | string[]>

export type UploadedFile = { url: string; name: string }

export type ValidationTexts = { requiredError: string; emailError: string; phoneError: string }

export const ACCEPTED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/heic', 'image/heif', 'image/webp']

export function toFieldDefs(form: Pick<Form, 'fields'>): FormFieldDef[] {
  return (form.fields ?? []).map((field) => {
    const raw = field as Record<string, unknown>
    const options = Array.isArray(raw.options) ? (raw.options as { label: string; prefill?: string | null }[]) : []
    return {
      kind: field.blockType,
      name: String(raw.name ?? ''),
      label: String(raw.label ?? ''),
      required: Boolean(raw.required),
      width: raw.width === 'half' ? 'half' : 'full',
      helpText: (raw.helpText as string | null) ?? undefined,
      placeholder: (raw.placeholder as string | null) ?? undefined,
      errorMessage: (raw.errorMessage as string | null) ?? undefined,
      rows: (raw.rows as number | null) ?? undefined,
      maxFiles: (raw.maxFiles as number | null) ?? undefined,
      maxSizeMb: (raw.maxSizeMb as number | null) ?? undefined,
      options: options.map((option) => ({
        label: option.label,
        prefill: (option.prefill ?? '')
          .split(',')
          .map((value) => value.trim())
          .filter(Boolean),
      })),
    }
  })
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
/** French or international numbers: 06 34 67 31 49, +33 6 34 67 31 49… */
const PHONE = /^(?:(?:\+|00)\d{2}[\s.-]?|0)[1-9](?:[\s.-]?\d{2}){4}$|^\+\d[\d\s.-]{7,16}$/

/** Same rules in the browser (instant feedback) and on the server (the real check). */
export function validateField(field: FormFieldDef, value: string | string[] | undefined, texts: ValidationTexts): string | null {
  const values = Array.isArray(value) ? value.filter(Boolean) : [value ?? ''].map((v) => v.trim()).filter(Boolean)
  if (field.kind === 'fileInput') return null
  if (field.required && values.length === 0) return field.errorMessage || texts.requiredError
  if (!values.length) return null
  const single = values[0] ?? ''
  if (field.kind === 'emailInput' && !EMAIL.test(single)) return field.errorMessage || texts.emailError
  if (field.kind === 'telInput' && !PHONE.test(single.trim())) return field.errorMessage || texts.phoneError
  if ((field.kind === 'selectInput' || field.kind === 'radioInput' || field.kind === 'checkboxGroup') && field.options.length) {
    const allowed = new Set(field.options.map((option) => option.label))
    if (values.some((v) => !allowed.has(v))) return field.errorMessage || texts.requiredError
  }
  if (single.length > 5000) return field.errorMessage || texts.requiredError
  return null
}

export function validateAll(fields: FormFieldDef[], values: FormValues, texts: ValidationTexts): Record<string, string> {
  const errors: Record<string, string> = {}
  for (const field of fields) {
    const error = validateField(field, values[field.name], texts)
    if (error) errors[field.name] = error
  }
  return errors
}
