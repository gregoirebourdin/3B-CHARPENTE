// Réalisation n° 17 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'renovation-d-un-toit-en-bardeau-meleze-au-casset',
  title: "Rénovation d'un toit en bardeaux de mélèze au **Casset** (Le Monêtier-les-Bains)",
  shortTitle: "Rénovation d'un toit en bardeaux de mélèze au Casset",
  commune: 'le-monetier-les-bains',
  locality: 'Le Casset',
  services: ['renovation-charpente-combles'],
  tags: ['Toiture', 'Bardeaux de mélèze'],
  heroImage: 'renovation-d-un-toit-en-bardeau-meleze-au-casset/après.JPG',
  summary:
    'Une toiture en bardeaux de mélèze (petites planchettes posées en recouvrement, comme des tuiles), avant et après rénovation.',
  description:
    'Au Casset, hameau du Monêtier-les-Bains dans la vallée de Serre Chevalier, nous avons rénové un toit couvert de bardeaux de mélèze. Les bardeaux sont de petites planches de bois posées en recouvrement, comme des tuiles. Le mélèze, arbre des forêts de montagne, est une essence traditionnelle des toits alpins.\n\nDans la même vallée, nous avons aussi [réhabilité une ancienne forge à La Salle-les-Alpes](/realisations/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/).',
  steps: [
    {
      title: 'État des lieux.',
      text: "La photo « avant » montre le toit d'origine.",
    },
    {
      title: 'Rénovation de la couverture en bardeaux de mélèze.',
      text: 'Les bardeaux se posent en rangs qui se recouvrent, du bas vers le haut du toit.',
    },
    {
      title: 'Résultat.',
      text: 'La photo « après » montre le toit rénové.',
    },
  ],
  materials: ['Bardeaux de mélèze : la couverture du toit.'],
  gallery: [
    {
      photo: 'renovation-d-un-toit-en-bardeau-meleze-au-casset/avant.JPG',
      caption: 'Avant les travaux',
      alt: 'Toit en bardeaux de mélèze au Casset, Le Monêtier-les-Bains, avant sa rénovation',
    },
    {
      photo: 'renovation-d-un-toit-en-bardeau-meleze-au-casset/après.JPG',
      caption: 'Après la rénovation',
      alt: 'Toit en bardeaux de mélèze rénové au Casset, Le Monêtier-les-Bains (Hautes-Alpes)',
    },
  ],
  related: [
    'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
    'renovation-d-une-copropriete-a-briancon',
    'refection-d-une-toiture-a-ronatlon',
  ],
  order: 5,
  seo: {
    title: 'Toit en bardeaux de mélèze au Casset | 3B Charpente',
    description:
      "Au Casset, au Monêtier-les-Bains, 3B Charpente a rénové un toit en bardeaux de mélèze. Photos avant et après d'un chantier de la vallée de Serre Chevalier.",
    image: 'renovation-d-un-toit-en-bardeau-meleze-au-casset/après.JPG',
  },
  validationPoints: [
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
      question: 'Fiche technique : surface de toiture ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question: 'Fiche technique : contexte du client, type de bâtiment ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'normal',
    },
    {
      question: 'Fiche technique : architecte éventuel ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question: 'Bardeaux remplacés en totalité ou en partie ? Charpente reprise ou non ?',
      decision:
        'Non précisé : le texte dit « nous avons rénové un toit couvert de bardeaux de mélèze ».',
      priority: 'normal',
    },
    {
      question: 'Bardeaux fendus ou sciés ? Provenance du mélèze (Scierie Savoldelli ?)',
      decision: 'Non précisés : « Bardeaux de mélèze : la couverture du toit » seulement.',
      priority: 'low',
    },
    {
      question: "D'autres photos du chantier en cours, pour enrichir une page très courte ?",
      decision: 'Page publiée avec les deux photos disponibles (avant, après).',
      priority: 'low',
    },
  ],
}
