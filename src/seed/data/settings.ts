/**
 * Global settings, menus, team, redirects and general points to validate.
 * Sources: 00-brief.md (§1 facts, §7 menu, §8 redirects), decisions-par-defaut.md,
 * questions-jean.md and fiche 01 (header, footer, JSON-LD).
 */
import type { IconName } from '../../payload/utilities/icons'
import type { Href, SeedValidationPoint } from '../types'

export const company = {
  name: '3B Charpente',
  tagline: 'Charpente, isolation biosourcée, ossature bois et réemploi du bois',
  description:
    'Entreprise de charpente bois fondée en 2007 à L’Argentière-la-Bessée (Hautes-Alpes) : charpente, rénovation, isolation biosourcée, ossature bois, escaliers, balcons et réemploi du bois avec 3B Récup’.',
  address: { street: '5 rue Saint-Michel', postalCode: '05120', city: 'L’Argentière-la-Bessée', region: 'Hautes-Alpes' },
  phone: '06 34 67 31 49',
  email: 'tardy@3bcharpente.fr',
  // Base Adresse Nationale, « 5 Rue Saint-Michel 05120 L'Argentière-la-Bessée ».
  geo: { latitude: 44.799082, longitude: 6.564673 },
  hours: [
    { day: 'monday', closed: false, opens: '07:30', closes: '17:00' },
    { day: 'tuesday', closed: false, opens: '07:30', closes: '17:00' },
    { day: 'wednesday', closed: false, opens: '07:30', closes: '17:00' },
    { day: 'thursday', closed: false, opens: '07:30', closes: '17:00' },
    { day: 'friday', closed: false, opens: '07:30', closes: '12:00' },
    { day: 'saturday', closed: true },
    { day: 'sunday', closed: true },
  ] as const,
  legalName: 'Jean-Michel Tardy',
  legalForm: 'Entrepreneur individuel',
  siren: '494 482 714',
  siret: '494 482 714 00016',
  ape: '4391A (travaux de charpente)',
  foundingYear: 2007,
  founder: 'Jean-Michel Tardy',
  founderRole: 'Fondateur et charpentier',
  rge: {
    label: 'Qualifié RGE (Qualibat)',
    holder: 'TARDY JEAN-MICHEL',
    domains: [
      'Isolation des murs par l’extérieur',
      'Isolation des toitures par l’extérieur',
      'Isolation par l’intérieur des murs ou rampants de toitures ou plafonds',
      'Fenêtres de toit',
      'Fenêtres, volets, portes donnant sur l’extérieur',
    ],
    directoryUrl: 'https://france-renov.gouv.fr/annuaires-professionnels/artisan-rge-architecte',
  },
  legal: {
    publicationDirector: 'Jean-Michel Tardy',
    hostName: 'Vercel Inc.',
    hostAddress: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
    hostWebsite: 'https://vercel.com',
  },
  facebook: 'https://www.facebook.com/3bcharpente',
}

export const header: { nav: { label: string; kind: 'link' | 'services'; href?: Href; highlight?: boolean }[]; cta: { label: string; href: Href } } = {
  nav: [
    { label: 'Prestations', kind: 'services' },
    { label: '3B Récup’', kind: 'link', href: '/3b-recup/', highlight: true },
    { label: 'Réalisations', kind: 'link', href: '/realisations/' },
    { label: 'À propos', kind: 'link', href: '/a-propos/' },
    { label: 'Contact', kind: 'link', href: '/contact/' },
  ],
  cta: { label: 'Demander mon devis', href: '/contact/' },
}

export const footer: {
  tagline: string
  columns: { title: string; source: 'manual' | 'services' | 'articles'; links?: { label: string; href: Href }[] }[]
  legalLinks: { label: string; href: Href }[]
} = {
  tagline: 'Construire durablement, c’est construire pour l’avenir.',
  columns: [
    {
      title: 'Pages',
      source: 'manual',
      links: [
        { label: 'Accueil', href: '/' },
        { label: 'Réalisations', href: '/realisations/' },
        { label: 'À propos', href: '/a-propos/' },
        { label: 'Contact et devis', href: '/contact/' },
      ],
    },
    { title: 'Prestations', source: 'services' },
    {
      title: '3B Récup’',
      source: 'manual',
      links: [
        { label: '3B Récup’', href: '/3b-recup/' },
        { label: 'Diagnostic et gisement (PEMD)', href: '/3b-recup/diagnostic-pemd/' },
        { label: 'Déconstruction sélective', href: '/3b-recup/deconstruction-selective/' },
        { label: 'Bois de réemploi', href: '/3b-recup/bois-de-reemploi/' },
      ],
    },
    {
      title: 'Secteurs',
      source: 'manual',
      links: [
        { label: 'Charpentier à Briançon', href: '/charpentier-briancon/' },
        { label: 'Charpentier à Serre Chevalier', href: '/charpentier-serre-chevalier/' },
        { label: 'Charpentier en Vallouise et Pays des Écrins', href: '/charpentier-vallouise-pays-des-ecrins/' },
      ],
    },
    { title: 'Conseils', source: 'articles' },
  ],
  legalLinks: [{ label: 'Mentions légales et confidentialité', href: '/mentions-legales/' }],
}

/** Decision « +100 projets » : not displayed. These are the proofs of decisions-par-defaut.md. */
export const proofs: { label: string; icon: IconName }[] = [
  { label: 'Depuis 2007', icon: 'calendar' },
  { label: 'Formé chez les Compagnons du Devoir', icon: 'medal' },
  { label: 'Bois des Hautes-Alpes', icon: 'tree' },
  { label: 'Isolants biosourcés', icon: 'leaf' },
  { label: 'Qualifié RGE', icon: 'shield' },
]

export const seoSettings = {
  titleTemplate: '%s | 3B Charpente',
  defaultDescription:
    'Charpentiers à L’Argentière-la-Bessée depuis 2007 : charpente, isolation biosourcée RGE, ossature bois, réemploi du bois local. Parlons de votre projet.',
  defaultImage: 'refection-d-une-charpente-a-l-argentiere-la-bessee/levage des fermes.JPG',
  areaServed: ['Hautes-Alpes', 'Provence-Alpes-Côte d’Azur', 'Auvergne-Rhône-Alpes'],
  knowsAbout: [
    'Charpente bois traditionnelle',
    'Rénovation de charpente et aménagement de combles',
    'Isolation biosourcée',
    'Isolation de toiture par l’extérieur (sarking)',
    'Isolation thermique par l’extérieur (ITE)',
    'Maison ossature bois',
    'Surélévation bois',
    'Escalier bois sur mesure',
    'Balcon et terrasse en mélèze',
    'Déconstruction sélective',
    'Réemploi du bois',
  ],
  llmsIntro:
    '3B Charpente est une entreprise de charpente bois fondée en 2007 par Jean-Michel Tardy, formé chez les Compagnons du Devoir, et installée à L’Argentière-la-Bessée (Hautes-Alpes). Elle réalise charpentes, rénovations, isolation biosourcée avec la qualification RGE, maisons ossature bois, escaliers et balcons, en bois local. Avec 3B Récup’, elle déconstruit et réemploie le bois.',
}

/** decisions-par-defaut.md : only Jean-Michel Tardy is visible until each person agrees. */
export const team = [
  {
    name: 'Jean-Michel Tardy',
    role: 'Fondateur et charpentier',
    bio: 'Apprenti à 16 ans en 1995, formé chez les Compagnons du Devoir (CAP, puis Tour de France en France, en Martinique et en Autriche), puis formateur à L’Argentière-la-Bessée avant de créer 3B Charpente en 2007.',
    visible: true,
    order: 1,
  },
  { name: 'Abel Hamadene', role: 'Chef d’équipe', visible: false, order: 2 },
  { name: 'Claire Patin', role: 'Responsable organisation', visible: false, order: 3 },
  { name: 'Mickael Oudot', role: 'Charpentier', visible: false, order: 4 },
  { name: 'Chloé Nicod', role: 'Apprentie', visible: false, order: 5 },
]

const GALERIE_SLUGS = [
  'abris-voiture-a-l-argentiere-la-bessee',
  'construction-d-une-terrasse-couverte-a-champcella',
  'creation-d-un-abris-de-jardin-a-pelvoux',
  'creation-d-un-balcon-a-la-roche-de-rame',
  'creation-d-un-balcon-terrasse-a-gresse-en-vercors',
  'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien',
  'creation-d-un-plancher-dans-un-bati-ancien',
  'escalier-1-4-tournant-en-meleze-lamelle-colle',
  'fabrication-d-un-escalier',
  'isolation-d-un-bati-ancien-par-l-interieur',
  'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
  'maison-a-ossature-bois-dans-les-monts-du-lyonnais',
  'refection-d-une-charpente-a-l-argentiere-la-bessee',
  'refection-d-une-toiture-a-ronatlon',
  'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
  'renovation-d-un-toit-en-bardeau-meleze-au-casset',
  'renovation-d-une-copropriete-a-briancon',
  'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
  'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles',
  'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere',
  'renovation-et-isolation-d-un-chalet-a-vallouise',
  'surelevation-a-pelvoux',
  'surelevation-en-ossature-bois-d-une-maison-a-briancon',
]

/** Brief §8 (+ fiche 16 A5). `to` is a public path: internal pages become references in the admin. */
export const redirects: { from: string; to: string }[] = [
  { from: '/galerie', to: '/realisations/' },
  ...GALERIE_SLUGS.map((slug) => ({ from: `/galerie/${slug}`, to: `/realisations/${slug}/` })),
  // Vault without photos: page not created (decisions-par-defaut.md).
  { from: '/galerie/isolation-et-habillage-d-une-voute-a-l-argentiere-la-bessee', to: '/isolation-biosourcee/' },
  { from: '/realisations/isolation-et-habillage-d-une-voute-a-l-argentiere-la-bessee/', to: '/isolation-biosourcee/' },
  { from: '/sitemap', to: '/sitemap.xml' },
  { from: '/index.php', to: '/' },
  // Old pages of new.3bcharpente.fr (same paths once the sub-domain points here).
  { from: '/nos-metiers', to: '/a-propos/' },
  { from: '/equipe', to: '/a-propos/' },
  { from: '/reemploi', to: '/3b-recup/' },
  { from: '/politique-de-confidentialite', to: '/mentions-legales/#confidentialite' },
]

/** General points (questions-jean.md) with the decision applied meanwhile. */
export const generalValidationPoints: (SeedValidationPoint & { page: string })[] = [
  {
    page: 'Tout le site',
    question: 'Police Nohemi (titres) : la licence fournie couvre-t-elle un site commercial (Pangram Pangram) ?',
    decision: 'Fichiers fournis par le client utilisés tels quels (auto-hébergés). Sans licence commerciale, remplacer la police des titres dans src/styles/fonts.ts par une police libre.',
    priority: 'high',
  },
  {
    page: 'Tout le site',
    question: 'Diagnostic PEMD : Jean réalise-t-il lui-même le diagnostic réglementaire, ou intervient-il en appui d’un diagnostiqueur ?',
    decision: 'Variante A partout : « expertise du gisement de bois, en amont ou en appui du diagnostic PEMD ».',
    priority: 'high',
  },
  {
    page: 'Réglage Entreprise',
    question: 'SIRET : 494 482 714 00024 (annuaire RGE) ou 494 482 714 00016 (mentions légales) ? Numéro et fin de validité du certificat Qualibat ?',
    decision: 'SIRET 494 482 714 00016 affiché ; mention « Qualifié RGE (Qualibat) » sans logo.',
    priority: 'high',
  },
  {
    page: 'Réglage Entreprise',
    question: 'Horaires : du lundi au vendredi 7 h 30 – 17 h (maquette) ou vendredi 7 h 30 – 12 h (PagesJaunes) ?',
    decision: 'Lundi au jeudi 7 h 30 – 17 h, vendredi 7 h 30 – 12 h, week-end fermé (version des annuaires).',
    priority: 'high',
  },
  {
    page: 'Réglage Entreprise',
    question: 'Fiche Google : la revendiquer, puis fournir son lien et le lien « laisser un avis ».',
    decision: 'Champs vides : seule la page Facebook est déclarée à Google ; l’appel à laisser un avis reste masqué.',
    priority: 'high',
  },
  {
    page: 'Mise en ligne',
    question: 'new.3bcharpente.fr : accord pour la rediriger vers le nouveau site puis la fermer ? Accès au domaine et à l’hébergement (OVH) ?',
    decision: 'Table des redirections prête dans l’administration ; la bascule du domaine est faite par Grégoire.',
    priority: 'high',
  },
  {
    page: 'Données structurées',
    question: 'E-mail déclaré à Google : tardy@3bcharpente.fr à la place de l’ancienne adresse Gmail ?',
    decision: 'tardy@3bcharpente.fr partout, y compris dans les données structurées.',
    priority: 'normal',
  },
  {
    page: '3B Récup’',
    question: 'Vente de bois de réemploi, ou réemploi uniquement sur les chantiers de 3B ?',
    decision: 'Variante A : le bois est réemployé sur les chantiers de 3B, pas de vente, pas de catalogue.',
    priority: 'normal',
  },
  {
    page: '3B Récup’',
    question: 'Depuis quand 3B Récup’ existe-t-il ? Un chantier de déconstruction déjà réalisé à raconter ?',
    decision: 'Aucune date de création de 3B Récup’ n’est écrite ; aucun chantier de déconstruction n’est décrit.',
    priority: 'normal',
  },
  {
    page: '3B Récup’',
    question: 'Ordre de la méthode : Diagnostic, Stratégie, Intervention (dépose), Transformation, Repose ?',
    decision: 'Cet ordre est appliqué partout (onglets 01 à 05).',
    priority: 'normal',
  },
  {
    page: 'Tout le site',
    question: 'Jean a-t-il été reçu Compagnon du Devoir ?',
    decision: 'Formulation « formé chez les Compagnons du Devoir » ; jamais « Compagnon du Devoir » comme titre.',
    priority: 'normal',
  },
  {
    page: 'Tout le site',
    question: '« +100 projets » (maquette) : chiffre à confirmer ou à retirer.',
    decision: 'Non affiché ; preuves utilisées : Depuis 2007, Compagnons du Devoir, bois des Hautes-Alpes, isolants biosourcés, RGE.',
    priority: 'normal',
  },
  {
    page: 'À propos',
    question: 'Équipe : liste, rôles et accord écrit de chacun pour le nom et la photo.',
    decision: 'Seul Jean-Michel Tardy est visible ; les autres membres sont créés « non visibles » dans Équipe.',
    priority: 'normal',
  },
  {
    page: 'Tout le site',
    question: 'Le devis est-il gratuit ? Quel délai de réponse ? La première rencontre se fait-elle sur place ?',
    decision: 'Ni « gratuit » ni délai promis : « Nous discutons de votre projet lors d’une rencontre, puis nous vous remettons un devis détaillé. »',
    priority: 'normal',
  },
  {
    page: 'Tout le site',
    question: 'Travaux faits par 3B ou confiés à des partenaires (insufflation, enduit, fenêtres, métal, plâtrerie, permis, calculs, dossiers d’aides) ?',
    decision: 'On ne précise pas qui fait quoi ; on décrit seulement ce que montrent les photos et les textes validés.',
    priority: 'normal',
  },
  {
    page: 'Tout le site',
    question: 'Prix : afficher des fourchettes indicatives ?',
    decision: 'Aucun prix, aucune fourchette.',
    priority: 'low',
  },
  {
    page: 'Réalisations',
    question: 'Accord des clients pour afficher la commune (syndic pour la copropriété de Briançon).',
    decision: 'Les communes déjà publiques sur le site actuel sont conservées.',
    priority: 'normal',
  },
  {
    page: 'Réalisations',
    question: 'Corriger les anciennes adresses (abris → abri, queyriere → queyrieres, ronatlon) ?',
    decision: 'Adresses gardées à l’identique ; seuls les titres affichés sont corrigés (redirection simple, sans chaîne).',
    priority: 'low',
  },
  {
    page: 'Tout le site',
    question: 'Scierie Savoldelli : accord pour la nommer comme partenaire et la photographier ?',
    decision: 'Nommée avec la formulation de la FAQ validée (« notre partenaire local »), sans logo ni photo.',
    priority: 'normal',
  },
  {
    page: 'Tout le site',
    question: 'Financement européen FEADER / LEADER : quel projet ? Le logo est-il obligatoire ?',
    decision: 'Non affiché.',
    priority: 'low',
  },
  {
    page: 'Mentions légales',
    question: 'Répertoire des métiers, n° de TVA, assureur décennale et n° de contrat, médiateur de la consommation.',
    decision: 'Lignes retirées tant que l’information manque (champs prévus dans Réglages › Entreprise).',
    priority: 'high',
  },
  {
    page: 'Mesure d’audience',
    question: 'Outil de mesure d’audience retenu.',
    decision: 'Vercel Analytics (sans cookie, sans bandeau) ; modifiable dans Administration › Mesure d’audience.',
    priority: 'low',
  },
  {
    page: 'Conseils',
    question: 'Guides signés « l’équipe de 3B Charpente » ou par Jean ? Une citation de Jean pour le guide sur les isolants ?',
    decision: 'Signés « L’équipe de 3B Charpente », sans citation.',
    priority: 'low',
  },
  {
    page: 'Photos',
    question: 'Photos à fournir : portrait de Jean, équipe, atelier, chantier 3B Récup’, sarking en cours, chantiers récents en haute définition.',
    decision: 'Uniquement les vraies photos de chantier du site actuel ; chaque photo se remplace dans « Photos et médias ».',
    priority: 'normal',
  },
]
