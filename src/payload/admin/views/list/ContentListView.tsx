import type { ListViewServerProps, Payload, TypedUser } from 'payload'

import { pathFor } from '@/payload/utilities/routes'

import { ContentList, type ListConfig, type ListRow } from './ContentList'

type Media = { url?: string | null; alt?: string | null; sizes?: { thumbnail?: { url?: string | null } | null } | null }
type Named = { id: number; name?: string | null; title?: string | null; shortLabel?: string | null }

const thumb = (value: unknown) => {
  const media = value && typeof value === 'object' ? (value as Media) : null
  return media ? media.sizes?.thumbnail?.url || media.url || null : null
}

const named = (value: unknown) => (value && typeof value === 'object' ? (value as Named) : null)

type Loader = (payload: Payload, user: TypedUser | null | undefined) => Promise<{ rows: ListRow[]; filters?: { id: string; label: string }[] }>

const scoped = (user: TypedUser | null | undefined) => ({ overrideAccess: false, user, draft: true, limit: 500, pagination: false }) as const

/** What each list shows: same table, words and columns adapted to the collection. */
const LISTS: Record<string, { config: Omit<ListConfig, 'createHref'>; load: Loader }> = {
  projects: {
    config: {
      title: 'Chantiers',
      description: 'Ils s’affichent dans « Réalisations » et sur la page de chaque prestation.',
      noun: { one: 'chantier', many: 'chantiers' },
      createLabel: 'Ajouter un chantier',
      createIsMain: true,
      searchPlaceholder: 'Un titre, une commune…',
      filterLabel: 'Toutes les prestations',
      columns: { main: 'Chantier et commune', tags: 'Prestations' },
      emptyFilter: 'Aucun chantier pour cette prestation.',
    },
    load: async (payload, user) => {
      const [{ docs }, services] = await Promise.all([
        payload.find({
          collection: 'projects',
          ...scoped(user),
          depth: 1,
          sort: 'order',
          select: { title: true, slug: true, commune: true, locality: true, services: true, heroImage: true, _status: true, updatedAt: true },
          populate: { communes: { name: true }, services: { title: true, shortLabel: true }, media: { url: true, sizes: true } },
        }),
        payload.find({ collection: 'services', ...scoped(user), depth: 0, sort: 'order', select: { title: true } }),
      ])
      return {
        rows: docs.map((doc) => {
          const commune = named(doc.commune)
          const tags = (doc.services ?? []).map(named).filter((service): service is Named => Boolean(service))
          return {
            id: doc.id,
            title: doc.title,
            href: `/admin/collections/projects/${doc.id}`,
            publicHref: doc._status === 'published' ? pathFor('projects', doc) : null,
            thumbnail: thumb(doc.heroImage),
            place: [doc.locality, commune?.name].filter(Boolean).join(', ') || null,
            tags: tags.map((service) => service.shortLabel || service.title || ''),
            filterIds: tags.map((service) => String(service.id)),
            status: doc._status === 'published' ? 'published' : 'draft',
            updatedAt: doc.updatedAt,
          }
        }),
        filters: services.docs.map((service) => ({ id: String(service.id), label: service.title })),
      }
    },
  },
  pages: {
    config: {
      title: 'Pages',
      description: 'Accueil, secteurs, 3B Récup’, à propos, contact… Cliquez sur une page pour changer ses textes et ses photos.',
      noun: { one: 'page', many: 'pages' },
      createLabel: 'Créer une page',
      createIsMain: false,
      searchPlaceholder: 'Un titre, une adresse…',
      columns: { main: 'Page et adresse' },
    },
    load: async (payload, user) => {
      const { docs } = await payload.find({
        collection: 'pages',
        ...scoped(user),
        depth: 1,
        sort: 'path',
        select: { title: true, path: true, slug: true, hero: { images: true }, _status: true, updatedAt: true },
        populate: { media: { url: true, sizes: true } },
      })
      return {
        rows: docs.map((doc) => {
          const path = pathFor('pages', doc)
          return {
            id: doc.id,
            title: doc.title,
            href: `/admin/collections/pages/${doc.id}`,
            publicHref: doc._status === 'published' ? path : null,
            thumbnail: thumb(doc.hero?.images?.[0]),
            place: path,
            tags: [],
            filterIds: [],
            status: doc._status === 'published' ? 'published' : 'draft',
            updatedAt: doc.updatedAt,
          }
        }),
      }
    },
  },
  services: {
    config: {
      title: 'Prestations',
      description: 'Chacune a sa page. L’ordre de la liste est celui du menu et de l’accueil.',
      noun: { one: 'prestation', many: 'prestations' },
      createLabel: 'Créer une prestation',
      createIsMain: false,
      searchPlaceholder: 'Un nom de prestation…',
      columns: { main: 'Prestation et adresse' },
    },
    load: async (payload, user) => {
      const { docs } = await payload.find({
        collection: 'services',
        ...scoped(user),
        depth: 1,
        sort: 'order',
        select: { title: true, slug: true, image: true, _status: true, updatedAt: true },
        populate: { media: { url: true, sizes: true } },
      })
      return {
        rows: docs.map((doc) => ({
          id: doc.id,
          title: doc.title,
          href: `/admin/collections/services/${doc.id}`,
          publicHref: doc._status === 'published' ? pathFor('services', doc) : null,
          thumbnail: thumb(doc.image),
          place: pathFor('services', doc),
          tags: [],
          filterIds: [],
          status: doc._status === 'published' ? 'published' : 'draft',
          updatedAt: doc.updatedAt,
        })),
      }
    },
  },
  articles: {
    config: {
      title: 'Conseils',
      description: 'Vos guides pratiques, listés sur la page Conseils. Chacun répond à une question de vos clients.',
      noun: { one: 'conseil', many: 'conseils' },
      createLabel: 'Écrire un conseil',
      createIsMain: true,
      searchPlaceholder: 'Un titre…',
      columns: { main: 'Conseil et adresse' },
    },
    load: async (payload, user) => {
      const { docs } = await payload.find({
        collection: 'articles',
        ...scoped(user),
        depth: 1,
        sort: '-publishedAt',
        select: { title: true, slug: true, image: true, _status: true, updatedAt: true },
        populate: { media: { url: true, sizes: true } },
      })
      return {
        rows: docs.map((doc) => ({
          id: doc.id,
          title: (doc.title ?? '').replace(/\*\*/g, ''),
          href: `/admin/collections/articles/${doc.id}`,
          publicHref: doc._status === 'published' ? pathFor('articles', doc) : null,
          thumbnail: thumb(doc.image),
          place: pathFor('articles', doc),
          tags: [],
          filterIds: [],
          status: doc._status === 'published' ? 'published' : 'draft',
          updatedAt: doc.updatedAt,
        })),
      }
    },
  },
}

/**
 * Lists of « Mon site » (designs § 11): one table for chantiers, pages,
 * prestations and conseils, with photo, status and plain words, instead of
 * Payload's generic list.
 */
export async function ContentListView(props: ListViewServerProps) {
  const slug = props.collectionConfig.slug
  const entry = LISTS[slug]
  const { payload, user } = props
  if (!entry) return null
  let data: Awaited<ReturnType<Loader>> = { rows: [] }
  let failed = false
  try {
    data = await entry.load(payload, user)
  } catch (error) {
    payload.logger.error({ err: error, msg: `[admin] liste ${slug} non chargée` })
    failed = true
  }
  return (
    <ContentList
      config={{ ...entry.config, createHref: slug === 'projects' ? '/admin/nouveau-chantier' : props.hasCreatePermission ? props.newDocumentURL : null }}
      rows={data.rows}
      filters={data.filters ?? []}
      failed={failed}
    />
  )
}
