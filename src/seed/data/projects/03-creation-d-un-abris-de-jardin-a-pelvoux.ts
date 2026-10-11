// Réalisation n° 03 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (titre court, texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'creation-d-un-abris-de-jardin-a-pelvoux',
  title: "Création d'un abri de jardin à **Pelvoux**",
  shortTitle: 'Abri de jardin à Pelvoux',
  commune: 'vallouise-pelvoux',
  locality: 'Pelvoux',
  services: ['balcon-terrasse-abri-bois'],
  tags: ['Abri de jardin'],
  heroImage: 'creation-d-un-abris-de-jardin-a-pelvoux/réalisation terminé.jpg',
  summary: 'Un abri de jardin en bois, du levage à la réalisation terminée.',
  description:
    "À Pelvoux, nous avons créé un abri de jardin. Même pour un petit ouvrage, la méthode reste celle du charpentier : une structure levée sur place, jusqu'à l'abri terminé. En montagne, un abri sert souvent à garder au sec le bois de chauffage, les outils ou le matériel. Pelvoux fait partie de la commune de Vallouise-Pelvoux, où nous avons aussi réalisé une surélévation. Nous construisons aussi des abris voiture, comme à L'Argentière-la-Bessée, et des terrasses couvertes, comme à Champcella.",
  steps: [
    {
      title: 'Levage de la structure',
      text: "Le levage, c'est le moment où la charpente préparée est montée et assemblée sur place.",
    },
    {
      title: 'Abri terminé',
    },
  ],
  materials: [],
  gallery: [
    {
      photo: 'creation-d-un-abris-de-jardin-a-pelvoux/en cours de levage.jpg',
      caption: 'En cours de levage',
      alt: "Levage de la structure d'un abri de jardin à Pelvoux",
    },
    {
      photo: 'creation-d-un-abris-de-jardin-a-pelvoux/réalisation terminé.jpg',
      caption: 'Abri terminé',
      alt: 'Abri de jardin terminé à Pelvoux (Vallouise-Pelvoux, Hautes-Alpes)',
    },
  ],
  related: [
    'abris-voiture-a-l-argentiere-la-bessee',
    'construction-d-une-terrasse-couverte-a-champcella',
    'surelevation-a-pelvoux',
  ],
  order: 23,
  seo: {
    title: 'Abri de jardin à Pelvoux (Vallouise-Pelvoux) | 3B Charpente',
    description:
      "Création d'un abri de jardin à Pelvoux par 3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007 : du levage à l'abri terminé.",
    image: 'creation-d-un-abris-de-jardin-a-pelvoux/réalisation terminé.jpg',
  },
  validationPoints: [
    {
      question:
        "Essence du bois et matériau de couverture de l'abri ? Avec une essence confirmée, le H1 peut devenir « Abri de jardin en {essence} à Pelvoux ».",
      decision:
        'Non indiqués : H1 sans essence, section « Matériaux » masquée (liste vide) et ligne « Essence et couverture » retirée de la fiche technique.',
    },
    {
      question: "Usage réel de l'abri (contexte du client) ?",
      decision:
        "Non connu : la phrase générale « En montagne, un abri sert souvent… » est gardée telle que la fiche la propose, et la ligne « Contexte » n'est pas affichée.",
    },
    {
      question: 'Fiche technique : année du chantier ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
    {
      question: 'Fiche technique : durée du chantier ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
    {
      question: "Fiche technique : surface de l'abri ?",
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
  ],
}
