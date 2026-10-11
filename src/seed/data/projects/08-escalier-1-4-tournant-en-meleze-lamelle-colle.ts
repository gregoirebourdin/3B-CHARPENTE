// Réalisation n° 08 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (titre court, texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'escalier-1-4-tournant-en-meleze-lamelle-colle',
  title: 'Escalier quart tournant en **mélèze lamellé-collé**',
  shortTitle: 'Escalier quart tournant en mélèze lamellé-collé',
  services: ['escalier-bois-sur-mesure', 'renovation-charpente-combles'],
  tags: ['Escalier quart tournant', 'Mélèze lamellé-collé', 'Combles'],
  heroImage: 'escalier-1-4-tournant-en-meleze-lamelle-colle/07. montage terminé .JPG',
  summary:
    "Marches et contremarches sur crémaillères, dessinées puis taillées à l'atelier ; il mène aux combles et sert de cloison à la salle de bains.",
  description:
    "Nous avons rénové la maison où cet escalier est posé, combles compris. L'escalier mène aux combles et sert aussi de cloison rampante à la salle de bains. Il est en mélèze lamellé-collé : des lamelles de mélèze collées entre elles, pour un bois stable qui travaille peu.",
  facts: {
    duration: 'Deux jours de montage sur place',
  },
  steps: [
    {
      title: 'Prise de cotes',
      text: 'sur place.',
    },
    {
      title: 'Dessin',
      text: "Nous dessinons l'escalier et proposons une esthétique au client.",
    },
    {
      title: 'Atelier',
      text: "Une fois le dessin validé, nous traçons, taillons et assemblons l'escalier dans notre atelier.",
    },
    {
      title: 'Montage en deux jours',
      text: "finitions comprises : départ de l'escalier, balancement des marches, puis seconde volée. Balancer les marches, c'est faire varier leur largeur dans le virage pour garder un pas régulier.",
    },
    {
      title: 'Marches et contremarches',
      text: 'posées sur des crémaillères, les pièces découpées en escalier qui les portent.',
    },
  ],
  materials: ['Mélèze lamellé-collé : marches, contremarches et crémaillères.'],
  gallery: [
    {
      photo: "escalier-1-4-tournant-en-meleze-lamelle-colle/01. Lieu en attente de l'escalier .JPG",
      caption: "L'emplacement avant l'escalier",
      alt: "Emplacement prévu pour l'escalier quart tournant, avant le montage",
    },
    {
      photo: 'escalier-1-4-tournant-en-meleze-lamelle-colle/02. début de montage.JPG',
      caption: 'Début du montage',
      alt: "Début du montage de l'escalier quart tournant en mélèze lamellé-collé",
    },
    {
      photo: "escalier-1-4-tournant-en-meleze-lamelle-colle/03. départ d'escalier terminé.JPG",
      caption: "Départ de l'escalier terminé",
      alt: "Départ terminé de l'escalier quart tournant en mélèze lamellé-collé",
    },
    {
      photo: 'escalier-1-4-tournant-en-meleze-lamelle-colle/04. balancement des marches.JPG',
      caption: 'Balancement des marches',
      alt: "Marches balancées dans le virage de l'escalier quart tournant en mélèze",
    },
    {
      photo: 'escalier-1-4-tournant-en-meleze-lamelle-colle/05. seconde volée.JPG',
      caption: 'Seconde volée',
      alt: "Seconde volée de l'escalier quart tournant en mélèze lamellé-collé",
    },
    {
      photo: 'escalier-1-4-tournant-en-meleze-lamelle-colle/07. montage terminé .JPG',
      caption: 'Montage terminé',
      alt: 'Escalier quart tournant en mélèze lamellé-collé terminé, accès aux combles',
    },
    {
      photo: 'escalier-1-4-tournant-en-meleze-lamelle-colle/06. combles rénovés par nos soins.JPG',
      caption: 'Les combles, rénovés par nos soins',
      alt: "Combles rénovés par 3B Charpente, desservis par l'escalier quart tournant en mélèze",
    },
  ],
  related: [
    'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien',
    'fabrication-d-un-escalier',
    'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
  ],
  featured: true,
  order: 16,
  seo: {
    title: 'Escalier quart tournant en mélèze sur mesure | 3B Charpente',
    description:
      'Escalier quart tournant en mélèze lamellé-collé : dessiné, tracé et taillé dans notre atelier, monté en deux jours finitions comprises. Voir le chantier.',
    image: 'escalier-1-4-tournant-en-meleze-lamelle-colle/07. montage terminé .JPG',
  },
  validationPoints: [
    {
      question: 'Dans quelle commune ce chantier a-t-il été réalisé ?',
      decision:
        "Aucune commune indiquée (décisions par défaut) : le chantier est classé par prestation, n'apparaît dans aucune page secteur, la carte secteur est masquée et la balise title reste sans commune.",
    },
    {
      question: 'Fiche technique : année du chantier ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
    {
      question:
        "D'autres photos des combles rénovés ? Elles pourraient nourrir la page Rénovation de charpente et combles.",
      decision:
        "Galerie publiée avec les sept photos existantes ; de nouvelles photos pourront être ajoutées dans l'administration.",
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
    {
      question:
        'Fiche technique : « Montage sur place : deux jours, finitions comprises » (texte publié).',
      decision:
        "Repris dans le champ « Durée » : « Deux jours de montage sur place » ; « finitions comprises » figure dans l'étape 4.",
      priority: 'low',
    },
  ],
}
