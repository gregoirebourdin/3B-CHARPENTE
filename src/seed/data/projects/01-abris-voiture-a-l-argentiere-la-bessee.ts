// Réalisation n° 01 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (titre court, texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'abris-voiture-a-l-argentiere-la-bessee',
  title: "Abri voiture en charpente traditionnelle à **L'Argentière-la-Bessée**",
  shortTitle: "Abri de voiture à L'Argentière-la-Bessée",
  commune: 'argentiere-la-bessee',
  services: ['balcon-terrasse-abri-bois', 'charpente-bois'],
  tags: ['Abri voiture', 'Charpente traditionnelle'],
  heroImage: 'abris-voiture-a-l-argentiere-la-bessee/poinçon et entrait cintré.JPG',
  summary:
    'Charpente traditionnelle avec poinçon et entrait cintré, assemblée à tenons et mortaises chevillés.',
  description:
    "À L'Argentière-la-Bessée, nous avons construit un abri voiture en charpente traditionnelle. Sa structure comprend une ferme avec un poinçon et un entrait cintré, assemblée par tenons et mortaises chevillés. C'est un petit ouvrage, mais il est taillé avec les assemblages de la charpente traditionnelle.",
  steps: [
    {
      title: 'La ferme',
      text: "Le poinçon est la pièce verticale au centre. L'entrait est la pièce horizontale du bas, ici cintrée, c'est-à-dire courbe.",
    },
    {
      title: 'Les assemblages tenon-mortaise chevillés',
      text: "Le tenon, au bout d'une pièce, entre dans la mortaise, une entaille creusée dans l'autre. Une cheville en bois traverse le tout et le serre.",
    },
  ],
  materials: [],
  gallery: [
    {
      photo: 'abris-voiture-a-l-argentiere-la-bessee/poinçon et entrait cintré.JPG',
      caption: 'Poinçon et entrait cintré',
      alt: "Ferme d'abri voiture avec poinçon et entrait cintré à L'Argentière-la-Bessée",
    },
    {
      photo: 'abris-voiture-a-l-argentiere-la-bessee/tenons mortaise chevillé.JPG',
      caption: 'Assemblage tenon-mortaise chevillé',
      alt: "Assemblage tenon-mortaise chevillé de l'abri voiture en bois, L'Argentière-la-Bessée",
    },
  ],
  related: [
    'construction-d-une-terrasse-couverte-a-champcella',
    'creation-d-un-abris-de-jardin-a-pelvoux',
    'refection-d-une-charpente-a-l-argentiere-la-bessee',
  ],
  order: 22,
  seo: {
    title: "Abri voiture à L'Argentière-la-Bessée | 3B Charpente",
    description:
      "Abri voiture en bois à L'Argentière-la-Bessée : ferme avec poinçon et entrait cintré, assemblages tenon-mortaise chevillés. Voir le chantier en photos.",
    image: 'abris-voiture-a-l-argentiere-la-bessee/poinçon et entrait cintré.JPG',
  },
  validationPoints: [
    {
      question: 'Un ou plusieurs abris ? Le titre actuel dit « Abris ».',
      decision:
        "Titre au singulier (« Abri voiture »), comme les légendes des photos. L'adresse « abris » est conservée (décisions par défaut).",
    },
    {
      question: "Essence du bois et matériau de couverture de l'abri ?",
      decision:
        'Non indiqués : section « Matériaux » masquée (liste vide) et ligne « Essence et couverture » retirée de la fiche technique.',
    },
    {
      question: "Une photo d'ensemble de l'abri terminé, qui manque aujourd'hui ?",
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
      question: 'Fiche technique : surface couverte ?',
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
