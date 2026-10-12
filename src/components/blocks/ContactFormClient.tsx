'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore, type FormEvent, type ReactNode } from 'react'

import { submitContact } from '@/app/(site)/actions/contact'
import { Icon } from '@/components/ui/Icon'
import {
  ACCEPTED_FILE_TYPES,
  validateAll,
  validateField,
  type FormFieldDef,
  type FormValues,
  type UploadedFile,
} from '@/lib/forms/schema'

import styles from './ContactForm.module.css'

type Texts = {
  requiredNote: string
  sending: string
  addFiles: string
  removeFile: string
  tooSoon: string
  tooMany: string
  successCta: string
  requiredError: string
  emailError: string
  phoneError: string
  fileError: string
  uploading: string
}

// The address does not change while the form is open: nothing to subscribe to.
const noSubscription = () => () => {}
const readProjet = () => new URLSearchParams(window.location.search).get('projet')
const noProjet = () => null

type Props = {
  formId: number
  fields: FormFieldDef[]
  submitLabel: string
  successTitle: string
  success: ReactNode
  failure: ReactNode
  privacy: ReactNode
  communes: string[]
  uploadsEnabled: boolean
  texts: Texts
}

type FileState = { id: string; name: string; status: 'uploading' | 'done' | 'error'; url?: string }

export function ContactFormClient({
  formId,
  fields,
  submitLabel,
  successTitle,
  success,
  failure,
  privacy,
  communes,
  uploadsEnabled,
  texts,
}: Props) {
  const base = useId()
  const pathname = usePathname()
  const [typed, setValues] = useState<FormValues>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [notice, setNotice] = useState<string | null>(null)
  const [files, setFiles] = useState<FileState[]>([])
  const startedAt = useRef(0)
  const fileCount = useRef(0)
  const formRef = useRef<HTMLFormElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)

  // "Demander mon devis" from a service page: /contact/?projet=charpente-bois pre-checks the matching box.
  const projet = useSyncExternalStore(noSubscription, readProjet, noProjet)
  const values = useMemo<FormValues>(() => {
    if (!projet) return typed
    const prefill: FormValues = {}
    for (const field of fields) {
      if (field.kind !== 'checkboxGroup') continue
      const match = field.options.filter((option) => option.prefill.includes(projet)).map((option) => option.label)
      if (match.length) prefill[field.name] = match.slice(0, 1)
    }
    return { ...prefill, ...typed }
  }, [projet, fields, typed])

  // Time to fill the form (bots answer in under a second).
  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  const setValue = (name: string, value: string | string[]) => {
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors(({ [name]: _removed, ...rest }) => rest)
  }

  const onBlur = (field: FormFieldDef) => {
    const error = validateField(field, values[field.name], texts)
    setErrors((current) => {
      const { [field.name]: _removed, ...rest } = current
      return error ? { ...rest, [field.name]: error } : rest
    })
  }

  const addFiles = async (field: FormFieldDef, list: FileList | null) => {
    if (!list) return
    const max = field.maxFiles ?? 5
    const maxBytes = (field.maxSizeMb ?? 10) * 1024 * 1024
    const selected = Array.from(list).slice(0, Math.max(0, max - files.length))
    for (const file of selected) {
      const id = `${file.name}-${file.size}-${(fileCount.current += 1)}`
      const typeOk = ACCEPTED_FILE_TYPES.includes(file.type) || /\.(heic|heif)$/i.test(file.name)
      if (!typeOk || file.size > maxBytes) {
        setFiles((current) => [...current, { id, name: file.name, status: 'error' }])
        continue
      }
      setFiles((current) => [...current, { id, name: file.name, status: 'uploading' }])
      try {
        const safeName = file.name.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\w.-]+/g, '-')
        // The upload library (~27 kB) only loads when a visitor actually attaches a file.
        const { uploadPresigned } = await import('@vercel/blob/client')
        const blob = await uploadPresigned(`demandes/${safeName}`, file, {
          access: 'public',
          contentType: file.type || undefined,
          handleUploadUrl: '/site-api/upload',
        })
        setFiles((current) => current.map((item) => (item.id === id ? { ...item, status: 'done', url: blob.url } : item)))
      } catch {
        setFiles((current) => current.map((item) => (item.id === id ? { ...item, status: 'error' } : item)))
      }
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const honeypot = (new FormData(event.currentTarget).get('website') as string | null) ?? ''
    const found = validateAll(fields, values, texts)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus('error')
      setNotice(null)
      const first = fields.find((field) => found[field.name])
      formRef.current?.querySelector<HTMLElement>(`[name="${first?.name}"]`)?.focus()
      return
    }
    setStatus('sending')
    setNotice(null)
    const uploaded: UploadedFile[] = files.filter((file) => file.status === 'done' && file.url).map((file) => ({ url: file.url!, name: file.name }))
    const result = await submitContact({
      formId,
      values,
      files: uploaded,
      startedAt: startedAt.current,
      website: honeypot,
      source: `${pathname}${window.location.search}`,
    }).catch(() => ({ ok: false as const, reason: 'error' as const }))

    if (result.ok) {
      setStatus('success')
      window.dispatchEvent(new CustomEvent('tb:track', { detail: 'Envoi formulaire' }))
      requestAnimationFrame(() => statusRef.current?.focus())
      return
    }
    setStatus('error')
    if (result.reason === 'invalid') setErrors(result.errors)
    setNotice(result.reason === 'tooSoon' ? texts.tooSoon : result.reason === 'tooMany' ? texts.tooMany : null)
    requestAnimationFrame(() => statusRef.current?.focus())
  }

  if (status === 'success') {
    return (
      <div ref={statusRef} tabIndex={-1} className={styles.success} role="status">
        <span className={styles.successIcon}>
          <Icon name="check" size={28} />
        </span>
        {successTitle ? <p className={styles.successTitle}>{successTitle}</p> : null}
        {success}
      </div>
    )
  }

  const fieldId = (name: string) => `${base}-${name}`
  const describedBy = (field: FormFieldDef) =>
    [field.helpText ? `${fieldId(field.name)}-help` : null, errors[field.name] ? `${fieldId(field.name)}-error` : null]
      .filter(Boolean)
      .join(' ') || undefined

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate>
      {texts.requiredNote ? <p className={styles.requiredNote}>{texts.requiredNote}</p> : null}

      {status === 'error' ? (
        <div ref={statusRef} tabIndex={-1} className={styles.alert} role="alert">
          {notice ? <p>{notice}</p> : failure}
        </div>
      ) : null}

      {/* Anti-robot trap: invisible to people, tempting for bots. */}
      <div className={styles.trap} aria-hidden="true">
        <label htmlFor={`${base}-website`}>Site web</label>
        <input id={`${base}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.fields}>
        {fields.map((field) => {
          const id = fieldId(field.name)
          const value = values[field.name]
          const error = errors[field.name]
          const common = {
            id,
            name: field.name,
            'aria-invalid': error ? true : undefined,
            'aria-describedby': describedBy(field),
            onBlur: () => onBlur(field),
          }
          const label = (
            <>
              {field.label}
              {field.required ? <span className={styles.star} aria-hidden="true"> *</span> : null}
            </>
          )
          const help = field.helpText ? (
            <p id={`${id}-help`} className={styles.help}>
              {field.helpText}
            </p>
          ) : null
          const errorLine = error ? (
            <p id={`${id}-error`} className={styles.error}>
              {error}
            </p>
          ) : null
          const wrapperClass = `${styles.field} ${field.width === 'half' ? styles.half : ''} ${error ? styles.invalid : ''}`

          if (field.kind === 'radioInput' || field.kind === 'checkboxGroup') {
            const multiple = field.kind === 'checkboxGroup'
            const selected = Array.isArray(value) ? value : value ? [value] : []
            return (
              <fieldset key={field.name} className={wrapperClass} aria-describedby={describedBy(field)} aria-required={field.required || undefined}>
                <legend className={styles.label}>{label}</legend>
                {help}
                <div className={multiple ? styles.checks : styles.radios}>
                  {field.options.map((option, index) => {
                    const checked = selected.includes(option.label)
                    return (
                      <label key={option.label} className={styles.choice}>
                        <input
                          type={multiple ? 'checkbox' : 'radio'}
                          name={field.name}
                          value={option.label}
                          checked={checked}
                          aria-invalid={error ? true : undefined}
                          onChange={() =>
                            setValue(
                              field.name,
                              multiple ? (checked ? selected.filter((item) => item !== option.label) : [...selected, option.label]) : option.label,
                            )
                          }
                          id={`${id}-${index}`}
                        />
                        <span>{option.label}</span>
                      </label>
                    )
                  })}
                </div>
                {errorLine}
              </fieldset>
            )
          }

          if (field.kind === 'fileInput') {
            if (!uploadsEnabled) return null
            return (
              <div key={field.name} className={wrapperClass}>
                <span className={styles.label} id={`${id}-label`}>
                  {label}
                </span>
                {help}
                <label className={styles.fileButton} htmlFor={id}>
                  <Icon name="plus" size={18} />
                  {texts.addFiles}
                </label>
                <input
                  id={id}
                  type="file"
                  className="visually-hidden"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.heic,.heif,.webp"
                  aria-labelledby={`${id}-label`}
                  onChange={(event) => {
                    void addFiles(field, event.target.files)
                    event.target.value = ''
                  }}
                />
                {files.length ? (
                  <ul className={styles.files} aria-live="polite">
                    {files.map((file) => (
                      <li key={file.id} data-status={file.status}>
                        <span>
                          {file.name}
                          {file.status === 'uploading' ? ` — ${texts.uploading}` : null}
                          {file.status === 'error' ? ` — ${field.errorMessage || texts.fileError}` : null}
                        </span>
                        <button type="button" onClick={() => setFiles((current) => current.filter((item) => item.id !== file.id))}>
                          {texts.removeFile}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            )
          }

          return (
            <div key={field.name} className={wrapperClass}>
              <label htmlFor={id} className={styles.label}>
                {label}
              </label>
              {field.kind === 'textareaInput' ? (
                <textarea
                  {...common}
                  rows={field.rows ?? 6}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={(value as string) ?? ''}
                  onChange={(event) => setValue(field.name, event.target.value)}
                />
              ) : field.kind === 'selectInput' ? (
                <select
                  {...common}
                  required={field.required}
                  value={(value as string) ?? ''}
                  onChange={(event) => setValue(field.name, event.target.value)}
                >
                  <option value="">—</option>
                  {field.options.map((option) => (
                    <option key={option.label} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...common}
                  type={field.kind === 'emailInput' ? 'email' : field.kind === 'telInput' ? 'tel' : 'text'}
                  inputMode={field.kind === 'telInput' ? 'tel' : field.kind === 'emailInput' ? 'email' : undefined}
                  autoComplete={
                    field.kind === 'emailInput'
                      ? 'email'
                      : field.kind === 'telInput'
                        ? 'tel'
                        : field.kind === 'communeInput'
                          ? 'address-level2'
                          : /nom/.test(field.name)
                            ? 'name'
                            : undefined
                  }
                  list={field.kind === 'communeInput' ? `${id}-list` : undefined}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={(value as string) ?? ''}
                  onChange={(event) => setValue(field.name, event.target.value)}
                />
              )}
              {field.kind === 'communeInput' ? (
                <datalist id={`${id}-list`}>
                  {communes.map((commune) => (
                    <option key={commune} value={commune} />
                  ))}
                </datalist>
              ) : null}
              {help}
              {errorLine}
            </div>
          )
        })}
      </div>

      <button type="submit" className={styles.submit} disabled={status === 'sending'} data-track="Clic envoyer formulaire">
        {status === 'sending' ? texts.sending : submitLabel}
        {status === 'sending' ? null : <Icon name="arrowRight" size={18} />}
      </button>
      {privacy ? <div className={styles.privacy}>{privacy}</div> : null}
    </form>
  )
}
