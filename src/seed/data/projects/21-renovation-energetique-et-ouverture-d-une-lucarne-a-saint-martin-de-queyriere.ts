// Réalisation n° 21 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere',
  title: "Rénovation énergétique et ouverture d'une lucarne à **Saint-Martin-de-Queyrières**",
  shortTitle: 'Rénovation énergétique et lucarne à Saint-Martin-de-Queyrières',
  commune: 'saint-martin-de-queyrieres',
  services: ['isolation-biosourcee', 'renovation-charpente-combles'],
  tags: ['Rénovation énergétique', 'Lucarne'],
  heroImage:
    'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/toiture terminée.jpg',
  summary:
    "Ouverture d'une lucarne, caissons d'isolation et étanchéité à l'air, jusqu'à la toiture terminée.",
  description:
    'À Saint-Martin-de-Queyrières, nous avons mené une rénovation énergétique et ouvert une lucarne dans la toiture. Une lucarne est une ouverture verticale construite dans la pente du toit : elle fait entrer la lumière et donne de la hauteur sous les combles.',
  steps: [
    {
      title: 'Ouverture de la lucarne',
      text: 'dans la toiture existante.',
    },
    {
      title: "Étanchéité à l'air.",
      text: "Une barrière continue, en membrane ou en panneaux, empêche l'air chaud et humide de la maison de passer dans l'isolant.",
    },
    {
      title: "Caissons d'isolation",
      text: "mis en place : ils reçoivent l'isolant sur toute l'épaisseur prévue.",
    },
    {
      title: 'Toiture terminée.',
    },
    {
      title: "À l'intérieur",
      text: 'deux vues montrent le résultat.',
    },
  ],
  materials: [],
  gallery: [
    {
      photo:
        "renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/étanchéité à l'air et caissons d'isolation.jpg",
      caption: "Étanchéité à l'air et caissons d'isolation",
      alt: "Étanchéité à l'air et caissons d'isolation, rénovation énergétique à Saint-Martin-de-Queyrières",
    },
    {
      photo:
        'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/toiture terminée.jpg',
      caption: 'Toiture terminée',
      alt: 'Toiture terminée après la rénovation énergétique, Saint-Martin-de-Queyrières (Hautes-Alpes)',
    },
    {
      photo:
        "renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/vue de l'intérieur.jpg",
      caption: "Vue de l'intérieur (1/2)",
      alt: 'Vue intérieure sous la toiture rénovée à Saint-Martin-de-Queyrières',
    },
    {
      photo:
        "renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/vue de l'intérieur 2.jpg",
      caption: "Vue de l'intérieur (2/2)",
      alt: 'Autre vue intérieure après la rénovation énergétique, Saint-Martin-de-Queyrières',
    },
  ],
  related: [
    'refection-d-une-charpente-a-l-argentiere-la-bessee',
    'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
    'renovation-et-isolation-d-un-chalet-a-vallouise',
  ],
  order: 9,
  seo: {
    title: 'Lucarne à Saint-Martin-de-Queyrières | 3B Charpente',
    description:
      "Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières : étanchéité à l'air, caissons d'isolation, toiture terminée. Photos.",
    image:
      'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/toiture terminée.jpg',
  },
  validationPoints: [
    {
      question: "L'isolant des caissons et son épaisseur ?",
      decision: 'Section « Les matériaux » masquée : isolant non précisé par la source.',
      priority: 'normal',
    },
    {
      question:
        'La rénovation porte-t-elle seulement sur la toiture ? (fiche technique : contexte du client, étendue de la rénovation)',
      decision: 'Non précisé ; ligne « Contexte » de la fiche technique masquée.',
      priority: 'normal',
    },
    {
      question:
        'La lucarne est-elle visible sur la photo « toiture terminée » ? Si oui, la mentionner dans le texte alternatif.',
      decision: 'Texte alternatif de la fiche gardé, sans mention de la lucarne.',
      priority: 'low',
    },
    {
      question:
        'Une photo de la lucarne en cours de création ? « Lucarne » se cherche 8 000 fois par mois.',
      decision: 'Page publiée avec les quatre photos disponibles.',
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
      question: 'Fiche technique : surface isolée ?',
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
