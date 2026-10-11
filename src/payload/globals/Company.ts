import type { GlobalConfig } from 'payload'

import { isTeam } from '../access'
import { revalidateGlobal } from '../hooks/revalidate'

export const DAYS = [
  { label: 'Lundi', value: 'monday' },
  { label: 'Mardi', value: 'tuesday' },
  { label: 'Mercredi', value: 'wednesday' },
  { label: 'Jeudi', value: 'thursday' },
  { label: 'Vendredi', value: 'friday' },
  { label: 'Samedi', value: 'saturday' },
  { label: 'Dimanche', value: 'sunday' },
] as const

const timeField = (name: string, label: string, width: string) => ({
  name,
  type: 'text' as const,
  label,
  maxLength: 5,
  admin: { width, placeholder: '07:30' },
  validate: (value: unknown) => !value || /^([01]\d|2[0-3]):[0-5]\d$/.test(String(value)) || 'Format HH:MM (ex. : 07:30)',
})

/**
 * One source of truth for name, address, phone, e-mail and opening hours.
 * Footer, contact page, legal notice, tel: links and the LocalBusiness JSON-LD
 * all read from here, so the details are identical everywhere.
 */
export const Company: GlobalConfig = {
  slug: 'company',
  label: 'Entreprise',
  admin: {
    group: 'Réglages',
    description:
      'Coordonnées, horaires, qualifications. Une modification ici change automatiquement le pied de page, la page Contact, les mentions légales et les informations envoyées à Google.',
  },
  access: { read: () => true, update: isTeam },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Coordonnées',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'name', type: 'text', label: 'Nom commercial', required: true, admin: { width: '50%' } },
                { name: 'tagline', type: 'text', label: 'Activité (une ligne)', admin: { width: '50%' } },
              ],
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Présentation de l’entreprise (pour Google et les IA)',
              maxLength: 400,
              admin: { rows: 3 },
            },
            {
              name: 'address',
              type: 'group',
              label: 'Adresse',
              fields: [
                { name: 'street', type: 'text', label: 'Rue', required: true },
                {
                  type: 'row',
                  fields: [
                    { name: 'postalCode', type: 'text', label: 'Code postal', required: true, admin: { width: '25%' } },
                    { name: 'city', type: 'text', label: 'Commune', required: true, admin: { width: '45%' } },
                    { name: 'region', type: 'text', label: 'Département', admin: { width: '30%' } },
                  ],
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'phone',
                  type: 'text',
                  label: 'Téléphone',
                  required: true,
                  admin: { width: '50%', description: 'Format affiché : 06 34 67 31 49' },
                  validate: (value: unknown) =>
                    /^0\d( ?\d{2}){4}$/.test(String(value ?? '')) || 'Format attendu : 06 34 67 31 49',
                },
                { name: 'email', type: 'email', label: 'E-mail', required: true, admin: { width: '50%' } },
              ],
            },
            {
              name: 'geo',
              type: 'group',
              label: 'Coordonnées GPS (pour Google)',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'latitude', type: 'number', label: 'Latitude', admin: { width: '50%', step: 0.000001 } },
                    { name: 'longitude', type: 'number', label: 'Longitude', admin: { width: '50%', step: 0.000001 } },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Horaires',
          description: 'Les horaires apparaissent dans le pied de page, sur la page Contact et dans Google.',
          fields: [
            {
              name: 'hours',
              type: 'array',
              label: 'Horaires de la semaine',
              labels: { singular: 'Jour', plural: 'Jours' },
              minRows: 7,
              maxRows: 7,
              admin: { initCollapsed: false },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'day',
                      type: 'select',
                      label: 'Jour',
                      required: true,
                      options: [...DAYS],
                      admin: { width: '20%' },
                    },
                    { name: 'closed', type: 'checkbox', label: 'Fermé', defaultValue: false, admin: { width: '12%' } },
                    timeField('opens', 'Ouverture', '17%'),
                    timeField('closes', 'Fermeture', '17%'),
                    timeField('opens2', 'Réouverture (facultatif)', '17%'),
                    timeField('closes2', 'Fermeture (facultatif)', '17%'),
                  ],
                },
              ],
            },
            {
              name: 'closures',
              type: 'array',
              label: 'Fermetures exceptionnelles',
              labels: { singular: 'Fermeture', plural: 'Fermetures' },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'from', type: 'date', label: 'Du', required: true, admin: { width: '30%' } },
                    { name: 'to', type: 'date', label: 'Au', required: true, admin: { width: '30%' } },
                    { name: 'label', type: 'text', label: 'Motif (facultatif)', admin: { width: '40%' } },
                  ],
                },
              ],
            },
            {
              name: 'hoursNote',
              type: 'text',
              label: 'Précision sous les horaires (facultatif)',
              maxLength: 160,
              admin: { description: 'Ex. : « Sur rendez-vous en dehors de ces horaires ».' },
            },
          ],
        },
        {
          label: 'Identité et qualifications',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'legalName', type: 'text', label: 'Exploitant', admin: { width: '50%' } },
                { name: 'legalForm', type: 'text', label: 'Forme juridique', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'siren', type: 'text', label: 'SIREN', admin: { width: '33%' } },
                { name: 'siret', type: 'text', label: 'SIRET', admin: { width: '34%' } },
                { name: 'ape', type: 'text', label: 'Code APE', admin: { width: '33%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'foundingYear', type: 'number', label: 'Année de création', admin: { width: '33%' } },
                { name: 'founder', type: 'text', label: 'Fondateur', admin: { width: '33%' } },
                { name: 'founderRole', type: 'text', label: 'Rôle du fondateur', admin: { width: '34%' } },
              ],
            },
            {
              name: 'rge',
              type: 'group',
              label: 'Qualification RGE',
              fields: [
                { name: 'label', type: 'text', label: 'Mention', defaultValue: 'Qualifié RGE (Qualibat)' },
                { name: 'holder', type: 'text', label: 'Titulaire (tel qu’il apparaît dans l’annuaire)' },
                {
                  name: 'domains',
                  type: 'array',
                  label: 'Domaines couverts',
                  labels: { singular: 'Domaine', plural: 'Domaines' },
                  fields: [{ name: 'label', type: 'text', label: 'Domaine', required: true }],
                },
                { name: 'directoryUrl', type: 'text', label: 'Lien vers l’annuaire officiel' },
                { name: 'certificateNumber', type: 'text', label: 'Numéro de certificat (facultatif)' },
              ],
            },
            {
              name: 'legal',
              type: 'group',
              label: 'Mentions légales complémentaires',
              admin: { description: 'Les lignes vides ne s’affichent pas dans les mentions légales.' },
              fields: [
                { name: 'publicationDirector', type: 'text', label: 'Directeur de la publication' },
                { name: 'tradeRegister', type: 'text', label: 'Répertoire des métiers' },
                { name: 'vatNumber', type: 'text', label: 'N° de TVA intracommunautaire' },
                { name: 'insurance', type: 'textarea', label: 'Assurance décennale (assureur, zone couverte)' },
                { name: 'mediator', type: 'textarea', label: 'Médiateur de la consommation' },
                { name: 'hostName', type: 'text', label: 'Hébergeur', defaultValue: 'Vercel Inc.' },
                {
                  name: 'hostAddress',
                  type: 'text',
                  label: 'Adresse de l’hébergeur',
                  defaultValue: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
                },
                { name: 'hostWebsite', type: 'text', label: 'Site de l’hébergeur', defaultValue: 'https://vercel.com' },
              ],
            },
          ],
        },
        {
          label: 'Réseaux et avis',
          fields: [
            { name: 'facebook', type: 'text', label: 'Page Facebook' },
            {
              name: 'googleBusinessProfile',
              type: 'text',
              label: 'Fiche Google (lien)',
              admin: { description: 'Une fois la fiche revendiquée. Ajoutée automatiquement aux données pour Google.' },
            },
            {
              name: 'googleReviewUrl',
              type: 'text',
              label: 'Lien « laisser un avis Google »',
              admin: {
                description: 'Si rempli, un petit appel « Vous avez travaillé avec nous ? Laissez un avis » s’affiche.',
              },
            },
            {
              name: 'otherProfiles',
              type: 'array',
              label: 'Autres profils (PagesJaunes, PRECI…)',
              labels: { singular: 'Profil', plural: 'Profils' },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'label', type: 'text', label: 'Nom', required: true, admin: { width: '40%' } },
                    { name: 'url', type: 'text', label: 'Adresse', required: true, admin: { width: '60%' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
