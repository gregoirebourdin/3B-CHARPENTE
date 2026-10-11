/**
 * The site plan (brief §7). Used by the seed checker and the importer to
 * validate links before anything is written to the database.
 */
export const SERVICE_SLUGS = [
  'charpente-bois',
  'renovation-charpente-combles',
  'isolation-biosourcee',
  'isolation-toiture-sarking',
  'isolation-murs-ite',
  'maison-ossature-bois',
  'extension-surelevation-bois',
  'escalier-bois-sur-mesure',
  'balcon-terrasse-abri-bois',
] as const

/** Page paths ('' = home). */
export const PAGE_PATHS = [
  '',
  '3b-recup',
  '3b-recup/diagnostic-pemd',
  '3b-recup/deconstruction-selective',
  '3b-recup/bois-de-reemploi',
  'realisations',
  'a-propos',
  'charpentier-briancon',
  'charpentier-serre-chevalier',
  'charpentier-vallouise-pays-des-ecrins',
  'contact',
  'mentions-legales',
  'conseils',
] as const

/** The 23 published projects (the vault "isolation et habillage d'une voûte" has no photo: not created). */
export const PROJECT_SLUGS = [
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
] as const

export const ARTICLE_SLUGS = [
  'isolant-biosource-montagne',
  'reemploi-bois-construction',
  'renover-chalet-maison-ancienne',
  'aides-renovation-artisan-rge',
] as const

/** Every public path of the site, with trailing slash. */
export const ALL_PATHS: string[] = [
  ...PAGE_PATHS.map((path) => (path ? `/${path}/` : '/')),
  ...SERVICE_SLUGS.map((slug) => `/${slug}/`),
  ...PROJECT_SLUGS.map((slug) => `/realisations/${slug}/`),
  ...ARTICLE_SLUGS.map((slug) => `/conseils/${slug}/`),
]
