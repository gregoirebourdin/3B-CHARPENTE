/**
 * Communes of the published projects (fiche 15, filters). Coordinates: commune
 * centres from the Base Adresse Nationale / IGN Géoplateforme (Oct. 2026).
 */
export type SeedCommune = {
  slug: string
  name: string
  department: string
  area: 'brianconnais' | 'serre-chevalier' | 'vallouise-ecrins' | 'hors-05'
  villages?: string
  /** Sector page path. */
  sector?: string
  latitude: number
  longitude: number
  inAreaServed: boolean
  showOnMap: boolean
}

export const communes: SeedCommune[] = [
  {
    slug: 'argentiere-la-bessee',
    name: 'L’Argentière-la-Bessée',
    department: 'Hautes-Alpes',
    area: 'vallouise-ecrins',
    sector: 'charpentier-vallouise-pays-des-ecrins',
    latitude: 44.7882,
    longitude: 6.5522,
    inAreaServed: true,
    showOnMap: true,
  },
  {
    slug: 'briancon',
    name: 'Briançon',
    department: 'Hautes-Alpes',
    area: 'brianconnais',
    sector: 'charpentier-briancon',
    latitude: 44.8995,
    longitude: 6.6536,
    inAreaServed: true,
    showOnMap: true,
  },
  {
    slug: 'vallouise-pelvoux',
    name: 'Vallouise-Pelvoux',
    department: 'Hautes-Alpes',
    area: 'vallouise-ecrins',
    villages: 'Vallouise, Pelvoux',
    sector: 'charpentier-vallouise-pays-des-ecrins',
    latitude: 44.8661,
    longitude: 6.4859,
    inAreaServed: true,
    showOnMap: true,
  },
  {
    slug: 'la-salle-les-alpes',
    name: 'La Salle-les-Alpes',
    department: 'Hautes-Alpes',
    area: 'serre-chevalier',
    sector: 'charpentier-serre-chevalier',
    latitude: 44.9571,
    longitude: 6.5664,
    inAreaServed: true,
    showOnMap: true,
  },
  {
    slug: 'le-monetier-les-bains',
    name: 'Le Monêtier-les-Bains',
    department: 'Hautes-Alpes',
    area: 'serre-chevalier',
    villages: 'Le Casset',
    sector: 'charpentier-serre-chevalier',
    latitude: 44.9812,
    longitude: 6.5054,
    inAreaServed: true,
    showOnMap: true,
  },
  {
    slug: 'saint-martin-de-queyrieres',
    name: 'Saint-Martin-de-Queyrières',
    department: 'Hautes-Alpes',
    area: 'vallouise-ecrins',
    villages: 'Prelles',
    sector: 'charpentier-vallouise-pays-des-ecrins',
    latitude: 44.8379,
    longitude: 6.5852,
    inAreaServed: true,
    showOnMap: true,
  },
  {
    slug: 'champcella',
    name: 'Champcella',
    department: 'Hautes-Alpes',
    area: 'vallouise-ecrins',
    sector: 'charpentier-vallouise-pays-des-ecrins',
    latitude: 44.7231,
    longitude: 6.5698,
    inAreaServed: true,
    showOnMap: true,
  },
  {
    slug: 'la-roche-de-rame',
    name: 'La Roche-de-Rame',
    department: 'Hautes-Alpes',
    area: 'vallouise-ecrins',
    sector: 'charpentier-vallouise-pays-des-ecrins',
    latitude: 44.7383,
    longitude: 6.5826,
    inAreaServed: true,
    showOnMap: true,
  },
  {
    slug: 'gresse-en-vercors',
    name: 'Gresse-en-Vercors',
    department: 'Isère',
    area: 'hors-05',
    latitude: 44.8973,
    longitude: 5.5669,
    inAreaServed: false,
    showOnMap: false,
  },
  {
    slug: 'monts-du-lyonnais',
    name: 'Monts du Lyonnais',
    department: 'Rhône',
    area: 'hors-05',
    latitude: 45.65,
    longitude: 4.45,
    inAreaServed: false,
    showOnMap: false,
  },
]
