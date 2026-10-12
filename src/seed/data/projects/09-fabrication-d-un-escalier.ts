// Réalisation n° 09 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (titre court, texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'fabrication-d-un-escalier',
  title: "Fabrication d'un escalier en **frêne et aluminium**",
  shortTitle: 'Escalier en frêne et aluminium',
  services: ['escalier-bois-sur-mesure'],
  tags: ['Escalier', 'Frêne', 'Aluminium'],
  heroImage: 'fabrication-d-un-escalier/frêne et aluminium.JPG',
  summary: 'Un escalier en frêne et aluminium, de la fabrication à son arrivée sur place.',
  description:
    "Nous avons fabriqué un escalier sur mesure qui associe le frêne et l'aluminium. Le frêne est un bois feuillu, clair et dur, qui résiste bien à l'usure : il convient aux marches.\n\nL'aluminium est un métal léger qui ne rouille pas. Comme tous nos escaliers, celui-ci est fait sur mesure : il est dessiné pour son emplacement exact, selon la hauteur à monter, la place disponible et la forme de la trémie, c'est-à-dire l'ouverture dans le plancher.",
  steps: [
    {
      title: 'Fabrication',
      text: "de l'escalier en frêne et aluminium.",
    },
    {
      title: "L'arrivée de l'escalier",
      text: "c'est-à-dire sa partie haute.",
    },
    {
      title: "Le détail du frêne et de l'aluminium",
      text: 'que montre la photo principale.',
    },
  ],
  materials: ['Frêne : bois feuillu clair et dur.', 'Aluminium.'],
  gallery: [
    {
      photo: 'fabrication-d-un-escalier/frêne et aluminium.JPG',
      caption: 'Frêne et aluminium',
      alt: 'Escalier sur mesure en frêne et aluminium fabriqué par 3B Charpente',
    },
    {
      photo: "fabrication-d-un-escalier/arrivée de l'escalier.JPG",
      caption: "L'arrivée de l'escalier",
      alt: "Arrivée de l'escalier en frêne et aluminium",
    },
  ],
  related: [
    'escalier-1-4-tournant-en-meleze-lamelle-colle',
    'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien',
    'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
  ],
  order: 18,
  seo: {
    title: 'Escalier en frêne et aluminium sur mesure | 3B Charpente',
    description:
      "Fabrication d'un escalier sur mesure en frêne et aluminium par 3B Charpente, charpentier dans les Hautes-Alpes depuis 2007. Voir le résultat en photos.",
    image: 'fabrication-d-un-escalier/frêne et aluminium.JPG',
  },
  validationPoints: [
    {
      question:
        "Sens de « arrivée de l'escalier » : partie haute de l'escalier, ou livraison sur le chantier ?",
      decision:
        "Étape 2 de la fiche 16 gardée (« c'est-à-dire sa partie haute ») et texte de carte de la fiche 15 gardé (« de la fabrication à son arrivée sur place ») : à harmoniser selon la réponse (corriger l'étape 2 si c'est une livraison).",
    },
    {
      question: 'Dans quelle commune ce chantier a-t-il été réalisé ?',
      decision:
        "Aucune commune indiquée (décisions par défaut) : le chantier est classé par prestation, n'apparaît dans aucune page secteur, la carte secteur est masquée et la balise title reste sans commune.",
    },
    {
      question: "Forme de l'escalier ?",
      decision: 'Non précisée sur la page.',
    },
    {
      question:
        "Rôle de l'aluminium (limons, garde-corps, nez de marche ?) et qui a fait la partie métal ?",
      decision:
        'Non précisés : « Frêne et aluminium » seulement ; on ne dit pas qui a fait la partie métal (décisions par défaut).',
    },
    {
      question: "L'escalier a-t-il été fabriqué à l'atelier ?",
      decision: "Non affirmé : le texte dit « Nous avons fabriqué », sans parler d'atelier.",
    },
    {
      question: "D'autres photos : la page est très courte.",
      decision:
        "Galerie publiée avec les deux photos existantes ; d'autres photos pourront être ajoutées dans l'administration.",
    },
    {
      question: 'Fiche technique : année du chantier ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
    {
      question: 'Fiche technique : contexte du client ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
    {
      question: 'Fiche technique : architecte éventuel ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
  ],
}
