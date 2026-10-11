import type { Block } from 'payload'

import { richTextField } from '../editor'
import { linkField, optionalLink } from '../fields/link'
import { headingFields, tailFields, toneField } from './shared'

export const ServicesGridBlock: Block = {
  slug: 'servicesGrid',
  interfaceName: 'ServicesGridBlock',
  labels: { singular: 'Cartes prestations', plural: 'Cartes prestations' },
  fields: [
    ...headingFields(),
    {
      type: 'row',
      fields: [
        {
          name: 'mode',
          type: 'select',
          label: 'Prestations affichées',
          defaultValue: 'all',
          options: [
            { label: 'Toutes, dans l’ordre de la collection', value: 'all' },
            { label: 'Je les choisis', value: 'manual' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Style',
          defaultValue: 'full',
          options: [
            { label: 'Cartes complètes (icône, texte, lien)', value: 'full' },
            { label: 'Petites cartes (prestations liées)', value: 'compact' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Prestations',
      admin: {
        condition: (_, siblingData) => siblingData?.mode === 'manual',
        description: 'Glissez pour changer l’ordre.',
      },
    },
    optionalLink({ name: 'cta', label: 'Bouton sous les cartes (facultatif)' }),
    toneField,
    ...tailFields,
  ],
}

export const ProjectsBlock: Block = {
  slug: 'projects',
  interfaceName: 'ProjectsBlock',
  labels: { singular: 'Réalisations', plural: 'Réalisations' },
  fields: [
    ...headingFields(),
    {
      type: 'row',
      fields: [
        {
          name: 'mode',
          type: 'select',
          label: 'Réalisations affichées',
          defaultValue: 'manual',
          options: [
            { label: 'Je les choisis', value: 'manual' },
            { label: 'Automatique : par prestation', value: 'service' },
            { label: 'Automatique : par commune', value: 'commune' },
            { label: 'Automatique : par secteur', value: 'sector' },
            { label: 'Automatique : mises en avant', value: 'featured' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'limit',
          type: 'number',
          label: 'Nombre maximum',
          defaultValue: 6,
          min: 1,
          max: 60,
          admin: {
            width: '25%',
            condition: (_, siblingData) => siblingData?.mode !== 'manual',
          },
        },
        {
          name: 'label',
          type: 'select',
          label: 'Étiquette sur la photo',
          defaultValue: 'commune',
          options: [
            { label: 'La commune', value: 'commune' },
            { label: '« 3B Charpente »', value: 'brand' },
          ],
          admin: { width: '25%' },
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Réalisations choisies',
      labels: { singular: 'Réalisation', plural: 'Réalisations' },
      maxRows: 12,
      admin: {
        condition: (_, siblingData) => siblingData?.mode === 'manual',
        initCollapsed: true,
      },
      fields: [
        { name: 'project', type: 'relationship', relationTo: 'projects', required: true, label: 'Réalisation' },
        {
          type: 'row',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titre de la carte (facultatif)',
              maxLength: 100,
              admin: { width: '50%', description: 'Laissez vide pour reprendre le titre de la réalisation.' },
            },
            {
              name: 'tag',
              type: 'text',
              label: 'Étiquette (facultatif)',
              maxLength: 40,
              admin: { width: '50%' },
            },
          ],
        },
        {
          name: 'text',
          type: 'textarea',
          label: 'Texte de la carte (facultatif)',
          maxLength: 240,
          admin: { rows: 2, description: 'Laissez vide pour reprendre le résumé de la réalisation.' },
        },
      ],
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      label: 'Prestation',
      admin: { condition: (_, siblingData) => siblingData?.mode === 'service' },
    },
    {
      name: 'communes',
      type: 'relationship',
      relationTo: 'communes',
      hasMany: true,
      label: 'Communes',
      admin: { condition: (_, siblingData) => siblingData?.mode === 'commune' },
    },
    {
      name: 'sector',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Page secteur',
      admin: { condition: (_, siblingData) => siblingData?.mode === 'sector' },
    },
    optionalLink({ name: 'cta', label: 'Bouton sous les cartes (facultatif)' }),
    toneField,
    ...tailFields,
  ],
}

export const GalleryBlock: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlock',
  labels: { singular: 'Galerie photos', plural: 'Galeries photos' },
  fields: [
    ...headingFields(),
    {
      name: 'images',
      type: 'array',
      label: 'Photos',
      labels: { singular: 'Photo', plural: 'Photos' },
      minRows: 1,
      maxRows: 40,
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true, label: 'Photo' },
        {
          name: 'caption',
          type: 'text',
          label: 'Légende (facultatif)',
          maxLength: 160,
          admin: { description: 'Laissez vide pour reprendre la légende de la photo.' },
        },
      ],
    },
    toneField,
    ...tailFields,
  ],
}

export const FaqBlock: Block = {
  slug: 'faq',
  interfaceName: 'FaqBlock',
  labels: { singular: 'Questions fréquentes', plural: 'Questions fréquentes' },
  fields: [
    ...headingFields(),
    {
      name: 'faqs',
      type: 'relationship',
      relationTo: 'faqs',
      hasMany: true,
      required: true,
      label: 'Questions',
      admin: {
        description:
          'Choisissez les questions dans la collection « Questions fréquentes ». Les données pour Google sont générées automatiquement.',
      },
    },
    toneField,
    ...tailFields,
  ],
}

export const ProofsBlock: Block = {
  slug: 'proofs',
  interfaceName: 'ProofsBlock',
  labels: { singular: 'Bandeau de preuves', plural: 'Bandeaux de preuves' },
  admin: { disableBlockName: true },
  fields: [
    {
      name: 'note',
      type: 'ui',
      admin: {
        components: { Field: '@/payload/admin/components/Notice#ProofsNotice' },
      },
    },
    {
      name: 'variant',
      type: 'select',
      label: 'Style',
      defaultValue: 'band',
      options: [
        { label: 'Bandeau', value: 'band' },
        { label: 'Rappel compact', value: 'compact' },
      ],
    },
    ...tailFields,
  ],
}

export const TeamBlock: Block = {
  slug: 'team',
  interfaceName: 'TeamBlock',
  labels: { singular: 'Équipe', plural: 'Équipe' },
  fields: [...headingFields(), toneField, ...tailFields],
}

export const ServiceAreaBlock: Block = {
  slug: 'serviceArea',
  interfaceName: 'ServiceAreaBlock',
  labels: { singular: 'Zone desservie', plural: 'Zones desservies' },
  fields: [
    ...headingFields({ intro: false }),
    richTextField({ name: 'text', label: 'Texte' }),
    {
      name: 'sectors',
      type: 'array',
      label: 'Cartes secteur',
      labels: { singular: 'Carte', plural: 'Cartes' },
      maxRows: 4,
      fields: [
        { name: 'title', type: 'text', label: 'Titre', required: true, maxLength: 80 },
        { name: 'text', type: 'textarea', label: 'Texte', maxLength: 240 },
        linkField({ name: 'link', label: 'Lien', required: true }),
      ],
    },
    {
      name: 'showMap',
      type: 'checkbox',
      label: 'Afficher la carte des communes',
      defaultValue: true,
      admin: { description: 'Carte dessinée, légère, sans Google Maps : les communes viennent de la collection « Communes ».' },
    },
    toneField,
    ...tailFields,
  ],
}

export const ContactFormBlock: Block = {
  slug: 'contactForm',
  interfaceName: 'ContactFormBlock',
  labels: { singular: 'Formulaire de contact', plural: 'Formulaires de contact' },
  fields: [
    ...headingFields(),
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
      label: 'Formulaire',
      admin: { description: 'Les champs se modifient dans « Formulaires ».' },
    },
    {
      name: 'showCompanyInfo',
      type: 'checkbox',
      label: 'Afficher les coordonnées et les horaires à côté',
      defaultValue: true,
    },
    richTextField({
      name: 'privacyNotice',
      label: 'Mention d’information sous le bouton (RGPD)',
    }),
    ...tailFields,
  ],
}

export const ReviewsBlock: Block = {
  slug: 'reviews',
  interfaceName: 'ReviewsBlock',
  labels: { singular: 'Avis clients', plural: 'Avis clients' },
  fields: [
    {
      name: 'note',
      type: 'ui',
      admin: { components: { Field: '@/payload/admin/components/Notice#ReviewsNotice' } },
    },
    ...headingFields(),
    toneField,
    ...tailFields,
  ],
}

export const ArticlesBlock: Block = {
  slug: 'articles',
  interfaceName: 'ArticlesBlock',
  labels: { singular: 'Liste des conseils', plural: 'Listes des conseils' },
  fields: [
    ...headingFields(),
    {
      name: 'mode',
      type: 'select',
      label: 'Guides affichés',
      defaultValue: 'all',
      options: [
        { label: 'Tous, du plus récent au plus ancien', value: 'all' },
        { label: 'Je les choisis', value: 'manual' },
      ],
    },
    {
      name: 'articles',
      type: 'relationship',
      relationTo: 'articles',
      hasMany: true,
      label: 'Guides',
      admin: { condition: (_, siblingData) => siblingData?.mode === 'manual' },
    },
    optionalLink({ name: 'cta', label: 'Bouton (facultatif)' }),
    toneField,
    ...tailFields,
  ],
}

export const ProjectsExplorerBlock: Block = {
  slug: 'projectsExplorer',
  interfaceName: 'ProjectsExplorerBlock',
  labels: { singular: 'Toutes les réalisations, avec filtres', plural: 'Réalisations avec filtres' },
  fields: [
    {
      name: 'note',
      type: 'ui',
      admin: { components: { Field: '@/payload/admin/components/Notice#ExplorerNotice' } },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'serviceFilterLabel',
          type: 'text',
          label: 'Libellé du filtre 1',
          defaultValue: 'Par prestation',
          maxLength: 40,
          admin: { width: '33%' },
        },
        {
          name: 'communeFilterLabel',
          type: 'text',
          label: 'Libellé du filtre 2',
          defaultValue: 'Par commune',
          maxLength: 40,
          admin: { width: '33%' },
        },
        {
          name: 'recupFilterLabel',
          type: 'text',
          label: 'Pastille « réemploi »',
          defaultValue: 'Réemploi (3B Récup’)',
          maxLength: 40,
          admin: { width: '34%' },
        },
      ],
    },
    {
      name: 'emptyMessage',
      type: 'textarea',
      label: 'Message si aucun chantier ne correspond',
      maxLength: 240,
      admin: { rows: 2 },
    },
    optionalLink({ name: 'emptyCta', label: 'Bouton sous ce message' }),
    {
      name: 'groups',
      type: 'array',
      label: 'Familles de chantiers',
      labels: { singular: 'Famille', plural: 'Familles' },
      admin: {
        initCollapsed: true,
        description:
          'Sans filtre, les chantiers s’affichent par famille. Un chantier oublié ici s’affiche quand même, dans « Autres chantiers ».',
      },
      fields: [
        ...headingFields(),
        {
          name: 'links',
          type: 'array',
          label: 'Liens vers les prestations',
          labels: { singular: 'Lien', plural: 'Liens' },
          maxRows: 4,
          fields: [linkField({ name: 'link', label: 'Lien', required: true })],
        },
        {
          name: 'projects',
          type: 'relationship',
          relationTo: 'projects',
          hasMany: true,
          label: 'Chantiers de cette famille',
        },
        ...tailFields,
      ],
    },
    ...tailFields,
  ],
}
