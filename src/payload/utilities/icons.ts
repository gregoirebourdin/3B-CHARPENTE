/**
 * Icon catalogue shared by the admin (select options) and the front-end
 * (src/components/ui/Icon.tsx draws them). Add an icon in both places.
 */
export const ICONS = {
  roof: 'Toit',
  hammer: 'Marteau',
  leaf: 'Feuille',
  layers: 'Couches superposées',
  wall: 'Mur',
  house: 'Maison',
  arrowUp: 'Flèche vers le haut',
  stairs: 'Escalier',
  balcony: 'Balcon',
  recycle: 'Réemploi',
  medal: 'Médaille',
  calendar: 'Calendrier',
  tree: 'Sapin',
  shield: 'Bouclier',
  check: 'Coche',
  mapPin: 'Repère',
  phone: 'Téléphone',
  mail: 'E-mail',
  clock: 'Horloge',
  document: 'Document',
  search: 'Loupe',
  users: 'Équipe',
  ruler: 'Équerre',
  saw: 'Scie',
  truck: 'Camion',
  sun: 'Soleil',
  snow: 'Flocon',
  window: 'Fenêtre de toit',
  euro: 'Aides',
  info: 'Information',
} as const

export type IconName = keyof typeof ICONS

export const ICON_OPTIONS = Object.entries(ICONS).map(([value, label]) => ({ value, label }))
