import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
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
import { basicEditor } from './payload/editor'
import { formBuilderConfig } from './payload/forms'
import { Company } from './payload/globals/Company'
import { Analytics, Footer, Header, Proofs, SeoSettings } from './payload/globals/Navigation'
import { SiteTextsGlobal } from './payload/globals/SiteTexts'
import { revalidateHooks } from './payload/hooks/revalidate'
import { blobStorage } from './payload/storage/blobStorage'
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
  editor: basicEditor,
  graphQL: { disable: true },
  cors: DEPLOYMENT_ORIGINS,
  csrf: DEPLOYMENT_ORIGINS,
  i18n: {
    supportedLanguages: { fr },
    fallbackLanguage: 'fr',
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
      beforeDashboard: ['@/payload/admin/components/Dashboard#Dashboard'],
      beforeNavLinks: ['@/payload/admin/components/NavExtras#ViewSiteLink'],
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
      redirectTypeFieldOverride: { label: 'Type', defaultValue: '301' },
      overrides: {
        labels: { singular: 'Redirection', plural: 'Redirections' },
        admin: {
          group: 'Référencement',
          defaultColumns: ['from', 'to', 'type', 'updatedAt'],
          description:
            'Quand une adresse change, l’ancienne redirige vers la nouvelle (301). Les redirections sont créées automatiquement quand vous modifiez l’adresse d’une page publiée.',
        },
        access: { read: () => true, create: isTeam, update: isTeam, delete: isTeam },
        hooks: revalidateHooks,
        fields: ({ defaultFields }) =>
          defaultFields.map((field) =>
            'name' in field && field.name === 'from'
              ? ({
                  ...field,
                  label: 'Ancienne adresse',
                  admin: { description: 'Le chemin seul, ex. : /galerie/abris-voiture' },
                } as Field)
              : field,
          ),
      },
    }),
    formBuilderPlugin(formBuilderConfig),
    // Registered for its translations and its fields (used in src/payload/fields/seo.ts).
    seoPlugin({ collections: [], uploadsCollection: 'media' }),
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
  ],
})
