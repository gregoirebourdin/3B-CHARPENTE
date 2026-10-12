// Réalisation n° 05 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (titre court, texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'creation-d-un-balcon-terrasse-a-gresse-en-vercors',
  title: "Création d'un balcon-terrasse à **Gresse-en-Vercors**",
  shortTitle: 'Balcon terrasse à Gresse-en-Vercors',
  commune: 'gresse-en-vercors',
  services: ['balcon-terrasse-abri-bois'],
  tags: ['Isère', 'Balcon-terrasse'],
  heroImage: 'creation-d-un-balcon-terrasse-a-gresse-en-vercors/de face.JPG',
  summary: "Un balcon terrasse, du dessin à la réalisation, vu de face, d'en haut et d'en bas.",
  description:
    "Hors des Hautes-Alpes, à Gresse-en-Vercors, en Isère, nous avons créé un balcon-terrasse. Comme chaque projet chez nous, il a commencé par une étude sur mesure et un dessin.\n\nComme tous nos balcons, il est conçu pour s'intégrer à l'environnement de montagne et à l'âme de la maison. Basés dans le nord des Hautes-Alpes, nous intervenons aussi en région PACA et en Rhône-Alpes.",
  steps: [
    {
      title: 'Le dessin',
      text: 'du balcon-terrasse. Il permet de valider la forme et les dimensions avant de tailler la moindre pièce.',
    },
    {
      title: "L'état avant travaux",
    },
    {
      title: 'Le balcon-terrasse terminé',
      text: "vu d'en bas, d'en haut et de face.",
    },
  ],
  materials: [],
  gallery: [
    {
      photo: 'creation-d-un-balcon-terrasse-a-gresse-en-vercors/dessin.jpg',
      caption: 'Le dessin du projet',
      alt: 'Dessin du projet de balcon-terrasse à Gresse-en-Vercors',
    },
    {
      photo: 'creation-d-un-balcon-terrasse-a-gresse-en-vercors/avant.jpg',
      caption: 'Avant les travaux',
      alt: 'Emplacement du balcon-terrasse avant les travaux, Gresse-en-Vercors',
    },
    {
      photo: "creation-d-un-balcon-terrasse-a-gresse-en-vercors/d'en bas.JPG",
      caption: "Vu d'en bas",
      alt: "Balcon-terrasse vu d'en bas à Gresse-en-Vercors (Isère)",
    },
    {
      photo: "creation-d-un-balcon-terrasse-a-gresse-en-vercors/d'en haut.JPG",
      caption: "Vu d'en haut",
      alt: "Balcon-terrasse vu d'en haut à Gresse-en-Vercors",
    },
    {
      photo: 'creation-d-un-balcon-terrasse-a-gresse-en-vercors/de face.JPG',
      caption: 'Vu de face',
      alt: 'Balcon-terrasse terminé vu de face à Gresse-en-Vercors (Isère)',
    },
  ],
  related: [
    'creation-d-un-balcon-a-la-roche-de-rame',
    'renovation-et-isolation-d-un-chalet-a-vallouise',
    'maison-a-ossature-bois-dans-les-monts-du-lyonnais',
  ],
  order: 21,
  seo: {
    title: 'Balcon-terrasse à Gresse-en-Vercors (Isère) | 3B Charpente',
    description:
      "Création d'un balcon-terrasse à Gresse-en-Vercors, en Isère : du dessin du projet à l'ouvrage terminé, vu d'en bas, d'en haut et de face. Voir les photos.",
    image: 'creation-d-un-balcon-terrasse-a-gresse-en-vercors/de face.JPG',
  },
  validationPoints: [
    {
      question: 'Essence du bois et système porteur (poteaux, consoles) ?',
      decision:
        'Non indiqués : section « Matériaux » masquée (liste vide) et ligne « Essence et structure » retirée de la fiche technique.',
    },
    {
      question: 'Le dessin montré est-il un dessin de 3B (croquis, plan, 3D) ?',
      decision: "Présenté comme « Le dessin du projet », sans préciser qui l'a fait.",
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
      question: 'Fiche technique : surface ?',
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
