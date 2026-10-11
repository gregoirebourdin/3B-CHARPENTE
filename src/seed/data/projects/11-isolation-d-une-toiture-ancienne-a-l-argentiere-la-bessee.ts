// Réalisation n° 11 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (titre court, texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
  title: "Isolation d'une toiture ancienne en fibre de bois à **L'Argentière-la-Bessée**",
  shortTitle: "Isolation d'une toiture ancienne à L'Argentière-la-Bessée",
  commune: 'argentiere-la-bessee',
  services: ['isolation-toiture-sarking', 'isolation-biosourcee', 'renovation-charpente-combles'],
  tags: ['Isolation de toiture', 'Fibre de bois', 'Fenêtre de toit'],
  heroImage: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/couverture terminée.JPG',
  summary:
    "Doublage pour le renfort et l'isolation, panneaux en fibre de bois, étanchéité à l'air et à l'eau, fenêtre de toit.",
  description:
    "Sur cette toiture ancienne de L'Argentière-la-Bessée, nous avons renforcé la charpente et isolé le toit avec des panneaux en fibre de bois, un isolant biosourcé. Le chantier comprend aussi une fenêtre de toit de 78 × 98 cm et la couverture.",
  steps: [
    {
      title: "Doublage pour le renfort et l'isolation",
      text: "Des pièces de bois sont ajoutées à la charpente existante : elles la renforcent et donnent l'épaisseur nécessaire à l'isolant.",
    },
    {
      title: "Étanchéité à l'air",
      text: "pour que l'air chaud et humide de la maison ne traverse pas l'isolant.",
    },
    {
      title: 'Panneaux en fibre de bois',
    },
    {
      title: "Étanchéité à l'eau et ventilation",
      text: 'sous la couverture.',
    },
    {
      title: 'Fenêtre de toit',
      text: 'de 78 × 98 cm.',
    },
    {
      title: 'Couverture terminée',
    },
  ],
  materials: [
    'Fibre de bois : panneaux isolants biosourcés.',
    'Bois de doublage : renfort de la charpente existante.',
    'Fenêtre de toit de 78 × 98 cm.',
  ],
  gallery: [
    {
      photo:
        "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/doublage pour le renfort et l'isolation.JPG",
      caption: "Doublage pour le renfort et l'isolation",
      alt: "Doublage de la charpente ancienne pour la renforcer et l'isoler, L'Argentière-la-Bessée",
    },
    {
      photo: "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/étanchéité à l'air.JPG",
      caption: "Étanchéité à l'air",
      alt: "Pose de l'étanchéité à l'air sous une toiture ancienne à L'Argentière-la-Bessée",
    },
    {
      photo:
        'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG',
      caption: 'Panneaux en fibre de bois',
      alt: "Panneaux isolants en fibre de bois sur une toiture ancienne à L'Argentière-la-Bessée",
    },
    {
      photo:
        "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/étanchéité à l'eau et ventilation .JPG",
      caption: "Étanchéité à l'eau et ventilation",
      alt: "Étanchéité à l'eau et ventilation de la toiture isolée, L'Argentière-la-Bessée",
    },
    {
      photo:
        "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/vue de dessous d'un velux 78x98.JPG",
      caption: 'Fenêtre de toit de 78 × 98 cm, vue de dessous',
      alt: "Fenêtre de toit de 78 × 98 cm vue de l'intérieur, toiture isolée à L'Argentière-la-Bessée",
    },
    {
      photo: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/couverture terminée.JPG',
      caption: 'Couverture terminée',
      alt: "Couverture terminée sur la toiture ancienne isolée en fibre de bois, L'Argentière-la-Bessée",
    },
    {
      photo:
        "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/vue d'ensemble intérieure.JPG",
      caption: "Vue d'ensemble intérieure",
      alt: "Vue d'ensemble sous la toiture isolée à L'Argentière-la-Bessée",
    },
  ],
  related: [
    'refection-d-une-charpente-a-l-argentiere-la-bessee',
    'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere',
    'renovation-d-une-copropriete-a-briancon',
  ],
  order: 10,
  seo: {
    title: "Toit ancien isolé à L'Argentière-la-Bessée | 3B Charpente",
    description:
      "À L'Argentière-la-Bessée, isolation d'une toiture ancienne : renfort de charpente, étanchéité à l'air, panneaux en fibre de bois, fenêtre de toit. Photos.",
    image: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/couverture terminée.JPG',
  },
  validationPoints: [
    {
      question:
        "Technique : isolation par l'extérieur (sarking, isolant posé en continu au-dessus des chevrons) ou entre chevrons doublés ? La prestation principale en dépend.",
      decision:
        "Prestation principale gardée : « Isolation de toiture » (fiche 16), puis isolation biosourcée et rénovation de charpente. Le mot « sarking » n'apparaît pas sur la fiche. Si ce n'est pas un sarking, retirer « Isolation de toiture » et mettre « Isolation biosourcée » en premier.",
      priority: 'high',
    },
    {
      question: 'Épaisseur de fibre de bois ?',
      decision: "Non indiquée : ligne « Épaisseur d'isolant » retirée de la fiche technique.",
    },
    {
      question: 'Matériau de couverture ?',
      decision: 'Non indiqué : « Couverture terminée », sans matériau.',
    },
    {
      question:
        'Le site actuel écrit « velux » (une marque) : est-ce bien un Velux, et Jean veut-il le dire ?',
      decision: '« Fenêtre de toit » partout (légende, texte alternatif, étapes, matériaux).',
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
      question: 'Fiche technique : surface de toiture ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
    {
      question: 'Fiche technique : type de bâtiment et contexte du client ?',
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
