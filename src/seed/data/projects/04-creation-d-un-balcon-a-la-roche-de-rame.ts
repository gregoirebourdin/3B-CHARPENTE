// Réalisation n° 04 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (titre court, texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'creation-d-un-balcon-a-la-roche-de-rame',
  title: "Création d'un balcon en mélèze à **La Roche-de-Rame**",
  shortTitle: 'Balcon en mélèze à La Roche-de-Rame',
  commune: 'la-roche-de-rame',
  services: ['balcon-terrasse-abri-bois'],
  tags: ['Balcon', 'Mélèze'],
  heroImage: "creation-d-un-balcon-a-la-roche-de-rame/vue d'ensemble.JPG",
  summary: 'Un balcon porté par des portiques, avec sa balustrade en mélèze.',
  description:
    "À La Roche-de-Rame, nous avons créé un balcon en mélèze. Il est porté par des portiques : des cadres en bois faits de poteaux et d'une poutre. Ces cadres reprennent le poids du balcon, qui ne pèse pas seulement sur la façade. Une balustrade en mélèze le borde. Avec le sapin, le mélèze est l'essence que nous utilisons le plus ; il pousse dans les forêts des Hautes-Alpes.",
  steps: [
    {
      title: 'Portiques porteurs en mélèze',
      text: 'qui portent le balcon.',
    },
    {
      title: 'Balustrade en mélèze',
      text: 'le garde-corps qui protège des chutes.',
    },
    {
      title: "Vue d'ensemble",
      text: 'du balcon terminé, avec ses portiques et sa balustrade.',
    },
  ],
  materials: ['Mélèze : portiques porteurs et balustrade.'],
  gallery: [
    {
      photo:
        'creation-d-un-balcon-a-la-roche-de-rame/portiques porteurs et balustrade en mélèze.JPG',
      caption: 'Portiques porteurs et balustrade en mélèze',
      alt: 'Portiques porteurs et balustrade en mélèze du balcon créé à La Roche-de-Rame',
    },
    {
      photo: "creation-d-un-balcon-a-la-roche-de-rame/vue d'ensemble.JPG",
      caption: "Vue d'ensemble",
      alt: "Balcon en mélèze sur portiques à La Roche-de-Rame (Hautes-Alpes), vue d'ensemble",
    },
  ],
  related: [
    'creation-d-un-balcon-terrasse-a-gresse-en-vercors',
    'construction-d-une-terrasse-couverte-a-champcella',
    'renovation-et-isolation-d-un-chalet-a-vallouise',
  ],
  order: 20,
  seo: {
    title: 'Balcon en mélèze à La Roche-de-Rame | 3B Charpente',
    description:
      'À La Roche-de-Rame, 3B Charpente a créé un balcon en mélèze porté par des portiques, avec sa balustrade en mélèze. Charpentier depuis 2007. Photos.',
    image: "creation-d-un-balcon-a-la-roche-de-rame/vue d'ensemble.JPG",
  },
  validationPoints: [
    {
      question:
        "Provenance du mélèze (Scierie Savoldelli ?) ? Si oui, on peut l'écrire pour ce chantier.",
      decision:
        "Non mentionnée : la Scierie Savoldelli n'est nommée qu'une fois sur le site, dans la FAQ validée (décisions par défaut).",
    },
    {
      question: 'Plancher du balcon : essence, lames ?',
      decision:
        'Non décrit : les matériaux se limitent aux portiques porteurs et à la balustrade en mélèze.',
    },
    {
      question: 'Une photo du balcon en cours de pose ?',
      decision:
        "Galerie publiée avec les deux photos existantes ; d'autres photos pourront être ajoutées dans l'administration.",
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
      question: 'Fiche technique : surface du balcon ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
    {
      question: 'Fiche technique : contexte du client ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
  ],
}
