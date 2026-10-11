import type { PluginConfig as FormBuilderPluginConfig } from '@payloadcms/plugin-form-builder/types'
import type { Block, CollectionAfterChangeHook, Field } from 'payload'

import { isTeam } from './access'
import { richTextField } from './editor'

/* ------------------------------------------------------------------ */
/* Form field blocks (what Jean can add to a form)                      */
/* ------------------------------------------------------------------ */

const baseFields = (options: { placeholder?: boolean } = {}): Field[] => [
  {
    type: 'row',
    fields: [
      {
        name: 'label',
        type: 'text',
        label: 'Libellé affiché',
        required: true,
        maxLength: 120,
        admin: { width: '50%' },
      },
      {
        name: 'name',
        type: 'text',
        label: 'Nom technique',
        required: true,
        maxLength: 40,
        admin: { width: '30%', description: 'Minuscules et tirets, unique dans le formulaire.' },
        validate: (value: unknown) => /^[a-z0-9-]+$/.test(String(value ?? '')) || 'Minuscules, chiffres et tirets.',
      },
      {
        name: 'width',
        type: 'select',
        label: 'Largeur',
        defaultValue: 'full',
        options: [
          { label: 'Pleine largeur', value: 'full' },
          { label: 'Demi-largeur', value: 'half' },
        ],
        admin: { width: '20%' },
      },
    ],
  },
  {
    type: 'row',
    fields: [
      { name: 'required', type: 'checkbox', label: 'Obligatoire', defaultValue: false, admin: { width: '20%' } },
      {
        name: 'errorMessage',
        type: 'text',
        label: 'Message si le champ est mal rempli',
        maxLength: 140,
        admin: { width: '80%' },
      },
    ],
  },
  { name: 'helpText', type: 'text', label: 'Texte d’aide sous le champ (facultatif)', maxLength: 240 },
  ...(options.placeholder
    ? ([{ name: 'placeholder', type: 'text', label: 'Exemple affiché dans le champ', maxLength: 200 }] satisfies Field[])
    : []),
]

const optionsField: Field = {
  name: 'options',
  type: 'array',
  label: 'Choix',
  labels: { singular: 'Choix', plural: 'Choix' },
  minRows: 1,
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'label', type: 'text', label: 'Texte', required: true, admin: { width: '60%' } },
        {
          name: 'prefill',
          type: 'text',
          label: 'Pré-coché depuis (facultatif)',
          admin: {
            width: '40%',
            description: 'Adresses de pages séparées par des virgules (ex. : charpente-bois).',
          },
        },
      ],
    },
  ],
}

const fieldBlock = (slug: string, singular: string, fields: Field[]): Block => ({
  slug,
  labels: { singular, plural: singular },
  fields,
})

export const FORM_FIELD_BLOCKS: Record<string, Block> = {
  textInput: fieldBlock('textInput', 'Texte court', baseFields({ placeholder: true })),
  emailInput: fieldBlock('emailInput', 'E-mail', baseFields({ placeholder: true })),
  telInput: fieldBlock('telInput', 'Téléphone', baseFields({ placeholder: true })),
  communeInput: fieldBlock('communeInput', 'Commune (avec suggestions)', baseFields({ placeholder: true })),
  textareaInput: fieldBlock('textareaInput', 'Texte long', [
    ...baseFields({ placeholder: true }),
    { name: 'rows', type: 'number', label: 'Hauteur (lignes)', defaultValue: 6, min: 2, max: 12 },
  ]),
  selectInput: fieldBlock('selectInput', 'Liste déroulante', [...baseFields(), optionsField]),
  radioInput: fieldBlock('radioInput', 'Choix unique (boutons)', [...baseFields(), optionsField]),
  checkboxGroup: fieldBlock('checkboxGroup', 'Cases à cocher (plusieurs choix)', [...baseFields(), optionsField]),
  fileInput: fieldBlock('fileInput', 'Pièces jointes', [
    ...baseFields(),
    { name: 'maxFiles', type: 'number', label: 'Nombre de fichiers maximum', defaultValue: 5, min: 1, max: 10 },
    { name: 'maxSizeMb', type: 'number', label: 'Taille maximum par fichier (Mo)', defaultValue: 10, min: 1, max: 20 },
  ]),
}

/* ------------------------------------------------------------------ */
/* E-mail notification for each new request                            */
/* ------------------------------------------------------------------ */

type Submission = {
  id: number | string
  form: number | string | { id: number | string; title?: string }
  submissionData?: { field: string; value: string }[] | null
  contactName?: string | null
  contactEmail?: string | null
  commune?: string | null
  summary?: string | null
  sourcePage?: string | null
  attachments?: { url: string; name?: string | null }[] | null
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] ?? char)

/**
 * Sends the request to the company e-mail (réglage « Entreprise ») and an
 * acknowledgement to the visitor. Without RESEND_API_KEY no e-mail adapter is
 * configured: the request is only stored in the admin, nothing is lost.
 */
export const notifyNewSubmission: CollectionAfterChangeHook<Submission> = async ({ doc, operation, req }) => {
  if (operation !== 'create' || !process.env.RESEND_API_KEY) return doc
  try {
    const { payload } = req
    const company = await payload.findGlobal({ slug: 'company', depth: 0, req })
    const formId = typeof doc.form === 'object' ? doc.form.id : doc.form
    const form = (await payload.findByID({ collection: 'forms', id: formId, depth: 0, req })) as {
      title?: string
      notifyEmail?: string | null
      sendAcknowledgement?: boolean | null
      acknowledgementSubject?: string | null
      acknowledgementText?: string | null
    }
    const to = form.notifyEmail || company.email
    const rows = (doc.submissionData ?? [])
      .map(
        ({ field, value }) =>
          `<tr><td style="padding:6px 12px;color:#57534e;vertical-align:top">${escapeHtml(field)}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
      )
      .join('')
    const files = (doc.attachments ?? [])
      .map(({ url, name }) => `<li><a href="${escapeHtml(url)}">${escapeHtml(name || url)}</a></li>`)
      .join('')
    const adminUrl = `${process.env.NEXT_PUBLIC_SERVER_URL ?? ''}/admin/collections/form-submissions/${doc.id}`

    await payload.sendEmail({
      to,
      replyTo: doc.contactEmail || undefined,
      subject: `Nouvelle demande : ${doc.summary ?? form.title ?? 'site internet'}`,
      html: `<div style="font-family:Arial,sans-serif;font-size:15px;color:#102311">
        <h2 style="color:#2C4F2D">Nouvelle demande reçue sur le site</h2>
        <table style="border-collapse:collapse">${rows}</table>
        ${files ? `<p><strong>Pièces jointes :</strong></p><ul>${files}</ul>` : ''}
        ${doc.sourcePage ? `<p>Page d’origine : ${escapeHtml(doc.sourcePage)}</p>` : ''}
        <p><a href="${adminUrl}">Voir la demande dans l’administration</a></p>
      </div>`,
    })

    if (form.sendAcknowledgement && doc.contactEmail) {
      const firstName = (doc.contactName ?? '').split(' ')[0] ?? ''
      const text = (form.acknowledgementText ?? '')
        .replaceAll('{prenom}', firstName)
        .replaceAll('{resume}', doc.summary ?? '')
        .replaceAll('{telephone}', company.phone)
      await payload.sendEmail({
        to: doc.contactEmail,
        replyTo: to,
        subject: form.acknowledgementSubject || `Votre demande à ${company.name}`,
        text,
      })
    }
  } catch (error) {
    req.payload.logger.error({ err: error, msg: '[form] e-mail non envoyé (la demande est bien enregistrée)' })
  }
  return doc
}

/* ------------------------------------------------------------------ */
/* Plugin configuration                                                 */
/* ------------------------------------------------------------------ */

const HIDDEN_FORM_FIELDS = new Set(['confirmationType', 'redirect', 'emails'])

export const formBuilderConfig: FormBuilderPluginConfig = {
  fields: {
    text: false,
    textarea: false,
    select: false,
    email: false,
    state: false,
    country: false,
    checkbox: false,
    number: false,
    message: false,
    payment: false,
    date: false,
    radio: false,
    upload: false,
    ...FORM_FIELD_BLOCKS,
  },
  formOverrides: {
    labels: { singular: 'Formulaire', plural: 'Formulaires' },
    admin: {
      group: 'Demandes',
      description: 'Les champs du formulaire de contact. Vous pouvez changer les libellés, l’ordre et les choix proposés.',
    },
    access: { read: () => true, create: isTeam, update: isTeam, delete: isTeam },
    fields: ({ defaultFields }) => [
      ...defaultFields
        .filter((field) => !('name' in field && HIDDEN_FORM_FIELDS.has(field.name)))
        .map((field) => {
          if ('name' in field && field.name === 'title') return { ...field, label: 'Nom du formulaire' }
          if ('name' in field && field.name === 'fields') return { ...field, label: 'Champs' }
          if ('name' in field && field.name === 'submitButtonLabel') return { ...field, label: 'Texte du bouton d’envoi' }
          if ('name' in field && field.name === 'confirmationMessage') {
            return { ...field, label: 'Message après l’envoi', admin: { condition: () => true } } as Field
          }
          return field
        }),
      { name: 'successTitle', type: 'text', label: 'Titre du message de confirmation', maxLength: 120 },
      richTextField({ name: 'errorMessage', label: 'Message en cas d’erreur d’envoi' }),
      {
        name: 'notifyEmail',
        type: 'email',
        label: 'Envoyer les demandes à (facultatif)',
        admin: { description: 'Laissez vide pour utiliser l’e-mail du réglage « Entreprise ».' },
      },
      {
        name: 'sendAcknowledgement',
        type: 'checkbox',
        label: 'Envoyer un accusé de réception au visiteur',
        defaultValue: true,
      },
      {
        name: 'acknowledgementSubject',
        type: 'text',
        label: 'Objet de l’accusé de réception',
        admin: { condition: (_, siblingData) => Boolean(siblingData?.sendAcknowledgement) },
      },
      {
        name: 'acknowledgementText',
        type: 'textarea',
        label: 'Texte de l’accusé de réception',
        admin: {
          rows: 10,
          condition: (_, siblingData) => Boolean(siblingData?.sendAcknowledgement),
          description: 'Mots remplacés automatiquement : {prenom}, {resume}, {telephone}.',
        },
      },
    ],
  },
  formSubmissionOverrides: {
    labels: { singular: 'Demande reçue', plural: 'Demandes reçues' },
    admin: {
      group: 'Demandes',
      useAsTitle: 'summary',
      defaultColumns: ['summary', 'contactName', 'status', 'createdAt'],
      description:
        'Chaque demande envoyée par le formulaire. Passez-la à « Traitée » quand vous avez répondu. Pour répondre, cliquez sur l’e-mail ou le téléphone du visiteur.',
    },
    defaultSort: '-createdAt',
    access: {
      // Only the server action (Local API) creates submissions: no public REST endpoint for spam bots.
      create: () => false,
      read: isTeam,
      update: isTeam,
      delete: isTeam,
    },
    hooks: { afterChange: [notifyNewSubmission] },
    fields: ({ defaultFields }): Field[] => [
      {
        type: 'row',
        fields: [
          {
            name: 'status',
            type: 'select',
            label: 'Statut',
            defaultValue: 'new',
            options: [
              { label: 'Nouvelle', value: 'new' },
              { label: 'En cours', value: 'in-progress' },
              { label: 'Traitée', value: 'done' },
              { label: 'Archivée', value: 'archived' },
            ],
            admin: { width: '30%' },
          },
          { name: 'summary', type: 'text', label: 'Résumé', admin: { width: '70%', readOnly: true } },
        ],
      },
      {
        type: 'row',
        fields: [
          { name: 'contactName', type: 'text', label: 'Nom', admin: { readOnly: true, width: '25%' } },
          {
            name: 'contactEmail',
            type: 'text',
            label: 'E-mail',
            admin: {
              readOnly: true,
              width: '25%',
              components: { Cell: '@/payload/admin/components/ContactCell#EmailCell' },
            },
          },
          { name: 'contactPhone', type: 'text', label: 'Téléphone', admin: { readOnly: true, width: '25%' } },
          { name: 'commune', type: 'text', label: 'Commune', admin: { readOnly: true, width: '25%' } },
        ],
      },
      {
        name: 'replyLinks',
        type: 'ui',
        admin: { components: { Field: '@/payload/admin/components/ContactCell#ReplyActions' } },
      },
      { name: 'notes', type: 'textarea', label: 'Notes internes', admin: { rows: 3 } },
      ...defaultFields.map((field): Field => {
        if ('name' in field && field.name === 'form') {
          return { ...field, label: 'Formulaire', admin: { readOnly: true } } as Field
        }
        if ('name' in field && field.name === 'submissionData') {
          return { ...field, label: 'Réponses', admin: { readOnly: true } } as Field
        }
        return field
      }),
      {
        name: 'attachments',
        type: 'array',
        label: 'Pièces jointes',
        admin: { readOnly: true },
        fields: [
          { name: 'name', type: 'text', label: 'Fichier' },
          { name: 'url', type: 'text', label: 'Adresse' },
        ],
      },
      { name: 'sourcePage', type: 'text', label: 'Page d’origine', admin: { readOnly: true, position: 'sidebar' } },
      { name: 'ipHash', type: 'text', admin: { hidden: true } },
    ],
  },
}
