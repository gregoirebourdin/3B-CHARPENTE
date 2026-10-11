// Réalisation n° 20 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles',
  title: "Rénovation d'une maison d'habitation en mélèze de pays à **Prelles**",
  shortTitle: "Rénovation d'une maison en mélèze à Prelles",
  commune: 'saint-martin-de-queyrieres',
  locality: 'Prelles',
  services: ['charpente-bois', 'balcon-terrasse-abri-bois', 'renovation-charpente-combles'],
  tags: ['Charpente', 'Terrasse', 'Mélèze de pays'],
  heroImage: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/8Batiment fini.JPG',
  summary:
    'Rénovation en mélèze du pays : charpente taillée et assemblée à blanc, solivage, terrasse en mélèze et garde-corps bois-métal.',
  description:
    "À Prelles, sur la commune de Saint-Martin-de-Queyrières, nous avons rénové un bâtiment d'habitation en mélèze de pays, c'est-à-dire en mélèze local. Le chantier comprenait aussi la création d'une terrasse en mélèze et d'un garde-corps qui associe le bois et le métal.",
  steps: [
    {
      title: 'État des lieux',
      text: 'du bâtiment existant.',
    },
    {
      title: 'Taille de la charpente',
      text: 'en mélèze de pays.',
    },
    {
      title: 'Assemblage à blanc.',
      text: 'La charpente est montée une première fois au sol, pour vérifier chaque assemblage avant le levage.',
    },
    {
      title: 'Levage du solivage',
      text: "c'est-à-dire des poutres qui portent le plancher.",
    },
    {
      title: 'Charpente assemblée',
      text: 'sur le bâtiment.',
    },
    {
      title: 'Terrasse en mélèze.',
    },
    {
      title: 'Garde-corps bois-métal.',
    },
    {
      title: 'Bâtiment terminé.',
    },
  ],
  materials: [
    "Mélèze de pays : l'essence de la rénovation et de la terrasse.",
    'Bois et métal : associés pour le garde-corps.',
  ],
  gallery: [
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/1Batiment existant   (1).JPG',
      caption: 'Le bâtiment avant les travaux (1/3)',
      alt: "Maison d'habitation à Prelles avant sa rénovation en mélèze de pays",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/1Batiment existant   (2).JPG',
      caption: 'Le bâtiment avant les travaux (2/3)',
      alt: 'Autre vue de la maison de Prelles avant les travaux',
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/1Batiment existant   (3).JPG',
      caption: 'Le bâtiment avant les travaux (3/3)',
      alt: 'Troisième vue de la maison de Prelles avant sa rénovation',
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/2Taille de la charpente (1).JPG',
      caption: 'Taille de la charpente (1/2)',
      alt: 'Taille de la charpente en mélèze de pays pour une maison à Prelles (Hautes-Alpes)',
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/2Taille de la charpente (2).JPG',
      caption: 'Taille de la charpente (2/2)',
      alt: 'Pièces de charpente en mélèze de pays taillées pour la maison de Prelles',
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/3Assemblage à blanc  (1).JPG',
      caption: 'Assemblage à blanc (1/2)',
      alt: 'Assemblage à blanc de la charpente en mélèze avant le levage, maison de Prelles',
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/3Assemblage à blanc  (2).JPG',
      caption: 'Assemblage à blanc (2/2)',
      alt: "Autre vue de l'assemblage à blanc de la charpente en mélèze, maison de Prelles",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/4Levage du solivage (1).JPG',
      caption: 'Levage du solivage (1/2)',
      alt: 'Levage du solivage en mélèze sur la maison rénovée à Prelles',
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/4Levage du solivage (2).JPG',
      caption: 'Levage du solivage (2/2)',
      alt: "Solives en mélèze en cours de levage, rénovation d'une maison à Prelles",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/5Charpente assemblée.jpg',
      caption: 'Charpente assemblée',
      alt: 'Charpente en mélèze de pays assemblée sur la maison de Prelles',
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/6Terrasse mélèze.JPG',
      caption: 'Terrasse en mélèze',
      alt: 'Terrasse en mélèze créée pour la maison rénovée à Prelles',
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/7Garde corps bois-métal (1).JPG',
      caption: 'Garde-corps bois-métal (1/2)',
      alt: 'Garde-corps bois-métal de la terrasse en mélèze, maison de Prelles',
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/7Garde corps bois-métal (1).jpeg',
      caption: 'Garde-corps bois-métal (2/2)',
      alt: 'Autre vue du garde-corps bois-métal, maison rénovée à Prelles',
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/8Batiment fini.JPG',
      caption: 'Le bâtiment terminé',
      alt: "Maison d'habitation rénovée en mélèze de pays à Prelles (Hautes-Alpes), chantier terminé",
    },
  ],
  related: [
    'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
    'refection-d-une-charpente-a-l-argentiere-la-bessee',
    'construction-d-une-terrasse-couverte-a-champcella',
  ],
  order: 4,
  seo: {
    title: "Rénovation d'une maison en mélèze à Prelles | 3B Charpente",
    description:
      "À Prelles, rénovation d'une maison en mélèze de pays : taille de la charpente, assemblage à blanc, solivage, terrasse et garde-corps bois-métal. Photos.",
    image: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/8Batiment fini.JPG',
  },
  validationPoints: [
    {
      question:
        'Prelles est un village de la commune de Saint-Martin-de-Queyrières : confirmer cette mention ?',
      decision: 'Mention gardée : commune Saint-Martin-de-Queyrières, lieu affiché « Prelles ».',
      priority: 'normal',
    },
    {
      question:
        'Ce qui a été refait exactement (charpente complète, planchers, façades) et le contexte du client ?',
      decision: 'Non précisés ; ligne « Contexte » de la fiche technique masquée.',
      priority: 'normal',
    },
    {
      question:
        'Le garde-corps est-il celui de la terrasse ? La partie métal a-t-elle été faite par 3B ou par un serrurier ?',
      decision:
        'Non précisé : on ne dit pas qui a fait quoi (décisions par défaut, travaux confiés à des partenaires).',
      priority: 'normal',
    },
    {
      question:
        "Les deux photos portent la même légende « Garde corps bois-métal (1) » : s'agit-il bien de deux vues différentes ?",
      decision:
        'Les deux fichiers sont différents : les deux sont publiés, le .JPG en « (1/2) » et le .jpeg en « (2/2) ».',
      priority: 'low',
    },
    {
      question:
        "Classement : la maison de Prelles est rangée en charpente bois (fiche 15). D'accord ?",
      decision:
        'Prestation principale : charpente bois, puis balcons, terrasses et abris, et rénovation de charpente.',
      priority: 'low',
    },
    {
      question: 'Fiche technique : année du chantier ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question: 'Fiche technique : durée du chantier ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question: 'Fiche technique : surface ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question: 'Fiche technique : architecte éventuel ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
  ],
}
