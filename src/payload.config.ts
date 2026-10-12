import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { fr } from '@payloadcms/translations/languages/fr'
import { buildConfig, type Field } from 'payload'
import sharp from 'sharp'

import { DEPLOYMENT_ORIGINS } from './lib/deployment'
import { isTeam } from './payload/access'
import { Articles } from './payload/collections/Articles'
import { Communes } from './payload/collections/Communes'
import { Faqs } from './payload/collections/Faqs'
import { Media } from './payload/collections/Media'
import { Pages } from './payload/collections/Pages'
import { Projects } from './payload/collections/Projects'
import { Reviews } from './payload/collections/Reviews'
import { Services } from './payload/collections/Services'
import { Team } from './payload/collections/Team'
import { Users } from './payload/collections/Users'
import { ValidationPoints } from './payload/collections/ValidationPoints'
import { formBuilderConfig } from './payload/forms'
import { Company } from './payload/globals/Company'
import { Analytics, Footer, Header, Proofs, SeoSettings } from './payload/globals/Navigation'
import { SiteTextsGlobal } from './payload/globals/SiteTexts'
import { revalidateHooks } from './payload/hooks/revalidate'
import { blobStorage } from './payload/storage/blobStorage'
import { redirectDestinationField } from './payload/fields/redirectDestination'
import { customFields } from './payload/utilities/customFields'
import { hideApiTab } from './payload/utilities/hideApiTab'
import { orderAdminNav } from './payload/utilities/orderAdminNav'
import { LINKABLE_COLLECTIONS } from './payload/utilities/routes'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/**
 * The Neon database created from Vercel (Storage → Neon) comes first, with or
 * without the prefix chosen when it was connected; DATABASE_URL otherwise.
 */
const databaseUrl = () =>
  process.env.POSTGRES_URL ||
  process.env.STORAGE_POSTGRES_URL ||
  process.env.STORAGE_DATABASE_URL ||
  process.env.DATABASE_URL ||
  ''

export default buildConfig({
  // Left empty on Vercel: the admin then calls its API on whatever address it is opened from.
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || undefined,
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  graphQL: { disable: true },
  cors: DEPLOYMENT_ORIGINS,
  csrf: DEPLOYMENT_ORIGINS,
  i18n: {
    supportedLanguages: { fr },
    fallbackLanguage: 'fr',
    // A few of Payload's messages, in the plain words of the rest of the administration.
    translations: {
      fr: {
        authentication: {
          emailOrUsername: 'Identifiant ou adresse e-mail',
          loggedOutSuccessfully: 'Vous êtes déconnecté. À bientôt.',
        },
        fields: {
          addNew: 'Ajouter',
          addNewLabel: 'Ajouter : {{label}}',
          uploadNewLabel: 'Envoyer : {{label}}',
        },
        general: {
          // Payload prints "label:" + value; a non-breaking space before the colon is the French rule.
          created: 'Création\u00a0',
          lastModified: 'Dernière modification\u00a0',
          perPage: 'Par page\u00a0: {{limit}}',
          save: 'Enregistrer',
          selectValue: 'Choisir…',
          saveChanges: 'Enregistrer les modifications',
          createNew: 'Ajouter',
          createNewLabel: 'Ajouter : {{label}}',
          creatingNewLabel: 'Nouveau : {{label}}',
          updatedSuccessfully: 'Enregistré. Le site est à jour.',
          successfullyCreated: '{{label}} : c’est enregistré.',
          deletedSuccessfully: 'Supprimé.',
        },
        version: {
          status: 'Statut\u00a0',
          versionID: 'Numéro',
          draftSavedSuccessfully: 'Brouillon enregistré. Il n’est pas encore sur le site.',
          autosavedSuccessfully: 'Brouillon enregistré automatiquement.',
        },
        'plugin-redirects': {
          fromUrl: 'Ancienne adresse',
          toUrlType: 'Rediriger vers',
          internalLink: 'Une page du site',
          customUrl: 'Une adresse précise',
          documentToRedirect: 'Page du site',
          redirectType: 'Type',
        },
      },
    },
  },
  admin: {
    user: Users.slug,
    dateFormat: 'dd/MM/yyyy HH:mm',
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      titleSuffix: ' · Administration 3B Charpente',
      robots: 'noindex, nofollow',
      icons: [{ rel: 'icon', type: 'image/png', url: '/favicon-48.png' }],
    },
    components: {
      graphics: {
        Logo: '@/payload/admin/components/Brand#Logo',
        Icon: '@/payload/admin/components/Brand#Icon',
      },
      Nav: '@/payload/admin/nav/AdminNav#AdminNav',
      beforeLogin: ['@/payload/admin/components/LoginIntro#LoginIntro'],
      afterLogin: ['@/payload/admin/components/LoginIntro#LoginAside'],
      views: {
        dashboard: { Component: '@/payload/admin/views/DashboardView#DashboardView' },
        demandes: { Component: '@/payload/admin/views/requests/RequestsView#RequestsView', path: '/demandes' },
        horaires: { Component: '@/payload/admin/views/hours/HoursView#HoursView', path: '/horaires' },
        nouveauChantier: { Component: '@/payload/admin/views/project/NewProjectView#NewProjectView', path: '/nouveau-chantier' },
        aide: { Component: '@/payload/admin/views/help/HelpView#HelpView', path: '/aide' },
      },
    },
    livePreview: {
      breakpoints: [
        { label: 'Téléphone', name: 'mobile', width: 390, height: 844 },
        { label: 'Tablette', name: 'tablet', width: 820, height: 1180 },
        { label: 'Ordinateur', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  collections: [Pages, Articles, Services, Projects, Communes, Faqs, Media, Team, Reviews, ValidationPoints, Users],
  globals: [Company, Header, Footer, Proofs, SiteTextsGlobal, SeoSettings, Analytics],
  db: postgresAdapter({
    pool: { connectionString: databaseUrl() },
    migrationDir: path.resolve(dirname, 'migrations'),
    // Schema changes go through migrations (src/migrations), never through a silent push.
    push: process.env.PAYLOAD_DB_PUSH === 'true',
  }),
  email: process.env.RESEND_API_KEY
    ? resendAdapter({
        apiKey: process.env.RESEND_API_KEY,
        defaultFromAddress: process.env.EMAIL_FROM_ADDRESS || 'site@3bcharpente.fr',
        defaultFromName: process.env.EMAIL_FROM_NAME || '3B Charpente (site internet)',
      })
    : undefined,
  upload: { limits: { fileSize: 25_000_000 } },
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  plugins: [
    redirectsPlugin({
      collections: [...LINKABLE_COLLECTIONS],
      redirectTypes: ['301', '302'],
      redirectTypeFieldOverride: {
        label: 'Type',
        defaultValue: '301',
        options: [
          { label: 'Définitive (301), le cas habituel', value: '301' },
          { label: 'Temporaire (302)', value: '302' },
        ],
      },
      overrides: {
        labels: { singular: 'Redirection', plural: 'Redirections' },
        admin: {
          group: 'Référencement',
          useAsTitle: 'from',
          defaultColumns: ['from', 'destination', 'type', 'updatedAt'],
          description:
            'Quand une adresse change, l’ancienne redirige vers la nouvelle (301). Les redirections sont créées automatiquement quand vous modifiez l’adresse d’une page publiée.',
        },
        access: { read: () => true, create: isTeam, update: isTeam, delete: isTeam },
        hooks: revalidateHooks,
        fields: ({ defaultFields }) =>
          defaultFields.map((field) => {
            if (!('name' in field)) return field
            if (field.name === 'from') {
              return { ...field, label: 'Ancienne adresse', admin: { description: 'Le chemin seul, ex. : /galerie/abris-voiture' } } as Field
            }
            if (field.name === 'to' && field.type === 'group') {
              return {
                ...field,
                fields: field.fields.map((sub) =>
                  'name' in sub && sub.name === 'url'
                    ? ({
                        ...sub,
                        label: 'Nouvelle adresse',
                        admin: { ...sub.admin, description: 'Ex. : /contact/ ou /mentions-legales/#confidentialite' },
                      } as Field)
                    : sub,
                ),
              } as Field
            }
            return field
          }).concat(redirectDestinationField),
      },
    }),
    formBuilderPlugin(formBuilderConfig),
    // Photos in Vercel Blob (OIDC or read-write token); large ones go straight from the browser.
    blobStorage({ collections: { media: { prefix: 'medias' } } }),
    orderAdminNav([
      'Demandes',
      'Contenu du site',
      'Prestations et chantiers',
      'Contenus réutilisables',
      'Référencement',
      'Réglages',
      'Suivi',
      'Administration',
    ]),
    hideApiTab,
    customFields,
  ],
})
