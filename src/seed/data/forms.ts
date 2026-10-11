/**
 * The contact form (fiche 21, section 3), imported into the « Formulaires »
 * collection (form-builder plugin, field blocks of src/payload/forms.ts).
 * The anti-robot trap and the page of origin are hidden fields handled by the
 * code: they are not listed here.
 */
import type { Md } from '../types'

export type SeedFormField = {
  blockType:
    | 'textInput'
    | 'emailInput'
    | 'telInput'
    | 'communeInput'
    | 'textareaInput'
    | 'selectInput'
    | 'radioInput'
    | 'checkboxGroup'
    | 'fileInput'
  /** Lowercase and dashes, unique in the form. */
  name: string
  label: string
  required?: boolean
  width?: 'full' | 'half'
  helpText?: string
  placeholder?: string
  errorMessage?: string
  rows?: number
  maxFiles?: number
  maxSizeMb?: number
  /** `prefill`: comma-separated page slugs that pre-check this option via /contact/?projet=<slug>. */
  options?: { label: string; prefill?: string }[]
}

export type SeedForm = {
  title: string
  submitButtonLabel: string
  successTitle: string
  confirmationMessage: Md
  errorMessage: Md
  sendAcknowledgement: boolean
  acknowledgementSubject: string
  /** Plain text. {prenom}, {resume} and {telephone} are replaced when the e-mail is sent. */
  acknowledgementText: string
  fields: SeedFormField[]
}

export const contactForm: SeedForm = {
  title: 'Demande de devis',
  submitButtonLabel: 'Envoyer ma demande',
  successTitle: 'Merci, votre demande est bien partie.',
  confirmationMessage:
    'Nous la lisons et nous revenons vers vous pour en parler. Un projet urgent ? Appelez le 06 34 67 31 49.\n\n[Voir nos réalisations en attendant](/realisations/)',
  errorMessage:
    "Votre message n'est pas parti. Vérifiez les champs en rouge, ou appelez-nous au 06 34 67 31 49.",
  sendAcknowledgement: true,
  acknowledgementSubject: 'Votre demande à 3B Charpente',
  acknowledgementText: [
    'Bonjour {prenom},',
    '',
    'Merci pour votre message. Nous avons bien reçu votre demande concernant : {resume}.',
    '',
    'Nous revenons vers vous pour en parler et fixer une rencontre. Lors de cette rencontre, nous discuterons de vos besoins et vous donnerons un calendrier estimatif ; nous vous proposerons ensuite un devis détaillé, adapté à votre projet.',
    '',
    'Un projet urgent ? Appelez-nous au {telephone}.',
    '',
    'À bientôt,',
    "Jean-Michel Tardy et l'équipe de 3B Charpente",
    "5 rue Saint-Michel, 05120 L'Argentière-la-Bessée",
    'https://3bcharpente.fr',
  ].join('\n'),
  fields: [
    {
      blockType: 'radioInput',
      name: 'profil',
      label: 'Vous êtes',
      required: true,
      errorMessage: 'Indiquez qui vous êtes.',
      options: [
        { label: 'Particulier' },
        { label: "Architecte ou maître d'œuvre" },
        { label: 'Entreprise du bâtiment ou de la démolition' },
        { label: 'Collectivité' },
        { label: 'Autre' },
      ],
    },
    {
      blockType: 'textInput',
      name: 'nom',
      label: 'Nom et prénom',
      required: true,
      errorMessage: 'Indiquez votre nom.',
    },
    {
      blockType: 'telInput',
      name: 'telephone',
      label: 'Téléphone',
      required: true,
      width: 'half',
      helpText: 'Pour vous rappeler et fixer une rencontre.',
      errorMessage: 'Indiquez un numéro de téléphone valide.',
    },
    {
      blockType: 'emailInput',
      name: 'email',
      label: 'E-mail',
      required: true,
      width: 'half',
      errorMessage: 'Indiquez une adresse e-mail valide.',
    },
    {
      blockType: 'communeInput',
      name: 'commune',
      label: 'Commune du chantier',
      required: true,
      placeholder: 'Briançon, Vallouise-Pelvoux, La Salle-les-Alpes…',
      errorMessage: 'Indiquez la commune du chantier.',
    },
    {
      blockType: 'checkboxGroup',
      name: 'projet',
      label: 'Votre projet (plusieurs choix possibles)',
      required: true,
      errorMessage: 'Choisissez au moins un type de projet.',
      options: [
        { label: 'Charpente bois neuve', prefill: 'charpente-bois' },
        {
          label: 'Rénovation de charpente ou aménagement de combles',
          prefill: 'renovation-charpente-combles',
        },
        { label: 'Isolation biosourcée, rénovation énergétique', prefill: 'isolation-biosourcee' },
        {
          label: "Isolation de toiture par l'extérieur (sarking)",
          prefill: 'isolation-toiture-sarking',
        },
        {
          label: "Isolation des murs (par l'extérieur ou par l'intérieur)",
          prefill: 'isolation-murs-ite',
        },
        { label: 'Maison ossature bois', prefill: 'maison-ossature-bois' },
        { label: 'Extension ou surélévation bois', prefill: 'extension-surelevation-bois' },
        { label: 'Escalier bois sur mesure', prefill: 'escalier-bois-sur-mesure' },
        {
          label: 'Balcon, terrasse, garde-corps ou abri bois',
          prefill: 'balcon-terrasse-abri-bois',
        },
        { label: "3B Récup' : diagnostic des matériaux réemployables", prefill: 'diagnostic-pemd' },
        {
          label: "3B Récup' : déconstruction sélective",
          prefill: '3b-recup,deconstruction-selective',
        },
        {
          label: "3B Récup' : intégrer du bois de réemploi à mon projet",
          prefill: 'bois-de-reemploi',
        },
        { label: 'Autre projet' },
      ],
    },
    {
      blockType: 'selectInput',
      name: 'batiment',
      label: 'Type de bâtiment',
      required: true,
      errorMessage: 'Choisissez un type de bâtiment.',
      options: [
        { label: 'Maison individuelle' },
        { label: 'Chalet' },
        { label: 'Maison ancienne ou maison de pays' },
        { label: 'Copropriété' },
        { label: 'Bâtiment agricole, artisanal ou industriel' },
        { label: 'Bâtiment public' },
        { label: 'Terrain nu (construction neuve)' },
        { label: 'Autre' },
      ],
    },
    {
      blockType: 'radioInput',
      name: 'plans',
      label: 'Avez-vous des plans ?',
      options: [
        { label: 'Oui, je peux les joindre' },
        { label: "Oui, un architecte ou un maître d'œuvre suit le projet" },
        { label: 'Non, pas encore' },
        { label: 'Je ne sais pas' },
      ],
    },
    {
      blockType: 'fileInput',
      name: 'fichiers',
      label: 'Plans ou photos (facultatif)',
      helpText:
        "Plans, photos de l'existant, croquis : tout nous aide à comprendre votre projet. PDF, JPG, PNG ou HEIC, 10 Mo maximum par fichier, 5 fichiers au plus.",
      errorMessage:
        "Ce fichier est trop lourd (10 Mo maximum) ou ce format n'est pas accepté (PDF, JPG, PNG ou HEIC).",
      maxFiles: 5,
      maxSizeMb: 10,
    },
    {
      blockType: 'selectInput',
      name: 'demarrage',
      label: 'Quand souhaitez-vous démarrer ?',
      options: [
        { label: 'Dès que possible' },
        { label: 'Dans les 6 prochains mois' },
        { label: 'Dans 6 à 12 mois' },
        { label: "Dans plus d'un an" },
        { label: 'Je ne sais pas encore' },
      ],
    },
    {
      blockType: 'textareaInput',
      name: 'message',
      label: 'Votre message',
      required: true,
      rows: 6,
      placeholder:
        "Décrivez votre projet : ce que vous souhaitez faire, l'état actuel, les dimensions si vous les connaissez, vos envies de matériaux…",
      errorMessage: 'Décrivez votre projet en quelques mots.',
    },
    {
      blockType: 'selectInput',
      name: 'origine',
      label: 'Comment nous avez-vous connus ?',
      options: [
        { label: 'Recherche sur internet' },
        { label: "Recommandation d'un proche" },
        { label: 'Un architecte ou un artisan' },
        { label: 'Facebook' },
        { label: 'Un chantier vu près de chez moi' },
        { label: 'Autre' },
      ],
    },
  ],
}
