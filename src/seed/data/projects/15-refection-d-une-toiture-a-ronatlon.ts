// Réalisation n° 15 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'refection-d-une-toiture-a-ronatlon',
  title: "Réfection d'une toiture en **vieux bois**",
  shortTitle: "Réfection d'une toiture en vieux bois",
  services: ['renovation-charpente-combles'],
  tags: ['Réfection de toiture', 'Vieux bois'],
  heroImage: 'refection-d-une-toiture-a-ronatlon/pose de la charpente et du bardage.JPG',
  summary:
    "La pose d'une charpente avec une ferme en vieux bois, le détail d'un pied d'arbalétrier, puis le bardage.",
  description:
    "Sur ce chantier, nous avons refait une toiture en y intégrant une ferme en vieux bois. Le vieux bois a déjà servi dans un autre bâtiment : réemployé, il garde sa patine et prolonge la vie du matériau. Ce savoir-faire est au cœur de 3B Récup', notre initiative dédiée au réemploi des matériaux.",
  steps: [
    {
      title: 'Ferme en vieux bois.',
      text: "La ferme est l'assemblage en triangle qui porte la toiture. Celle-ci est faite de bois ancien.",
    },
    {
      title: "Pied d'arbalétrier.",
      text: "L'arbalétrier est la pièce inclinée de la ferme ; son pied s'assemble sur l'entrait, la pièce horizontale du bas.",
    },
    {
      title: 'Pose de la charpente et du bardage.',
    },
  ],
  materials: ['Vieux bois : la ferme de charpente.'],
  showRecupLink: true,
  gallery: [
    {
      photo: 'refection-d-une-toiture-a-ronatlon/ferme en vieux bois .JPG',
      caption: 'Ferme en vieux bois',
      alt: "Ferme de charpente en vieux bois pour la réfection d'une toiture",
    },
    {
      photo: "refection-d-une-toiture-a-ronatlon/pied d'arbalétrier.JPG",
      caption: "Pied d'arbalétrier",
      alt: "Détail du pied d'arbalétrier d'une ferme en vieux bois",
    },
    {
      photo: 'refection-d-une-toiture-a-ronatlon/pose de la charpente et du bardage.JPG',
      caption: 'Pose de la charpente et du bardage',
      alt: "Pose de la charpente et du bardage lors de la réfection d'une toiture",
    },
  ],
  related: [
    'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
    'refection-d-une-charpente-a-l-argentiere-la-bessee',
    'renovation-d-un-toit-en-bardeau-meleze-au-casset',
  ],
  order: 6,
  seo: {
    title: 'Toiture refaite avec une ferme en vieux bois | 3B Charpente',
    description:
      "Réfection d'une toiture avec une ferme en vieux bois de réemploi : pied d'arbalétrier, pose de la charpente et du bardage. Un chantier de 3B Charpente.",
    image: 'refection-d-une-toiture-a-ronatlon/pose de la charpente et du bardage.JPG',
  },
  validationPoints: [
    {
      question:
        "« Ronatlon » est sans doute une faute de frappe dans le nom d'une commune : où se trouve ce chantier ?",
      decision:
        "Titre affiché « Réfection d'une toiture en vieux bois », sans commune ni page secteur ; l'adresse actuelle (…/refection-d-une-toiture-a-ronatlon/) est gardée (décisions par défaut, Réalisations). Une fois la commune connue : l'ajouter au titre, à la balise title, aux textes alternatifs, et choisir la page secteur.",
      priority: 'high',
    },
    {
      question:
        "L'origine du vieux bois (déconstruction par 3B Récup' ? autre chantier ?) et son essence ?",
      decision:
        "Le vieux bois est présenté comme tel, sans dire qu'il vient d'une déconstruction faite par 3B (décisions par défaut, 3B Récup') ; essence non précisée.",
      priority: 'high',
    },
    {
      question: "S'agit-il d'une toiture d'habitation, de grange, d'annexe ?",
      decision: "Non précisé : le texte parle d'« une toiture ».",
      priority: 'normal',
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
      question: 'Fiche technique : contexte du client ?',
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
  ],
}
