// Réalisation n° 02 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (titre court, texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'construction-d-une-terrasse-couverte-a-champcella',
  title: 'Terrasse couverte et abri voiture à **Champcella**',
  shortTitle: 'Terrasse couverte à Champcella',
  commune: 'champcella',
  services: ['balcon-terrasse-abri-bois', 'charpente-bois'],
  tags: ['Terrasse couverte', 'Abri voiture', 'Mélèze de pays'],
  heroImage:
    'construction-d-une-terrasse-couverte-a-champcella/terrasse couverte et local technique.JPG',
  summary:
    'Terrasse couverte et local technique, abri de voiture en prolongement de toiture et plancher en mélèze du pays.',
  description:
    "À Champcella, nous avons construit une terrasse couverte. Sa toiture se prolonge pour abriter une voiture, et l'ensemble accueille aussi un local technique. Le plancher est en mélèze de pays, c'est-à-dire en mélèze local, et les assemblages restent visibles. Une terrasse couverte permet de profiter de l'extérieur à l'abri de la pluie et de la neige.",
  steps: [
    {
      title: 'Charpente de la terrasse couverte',
      text: 'avec ses assemblages taillés.',
    },
    {
      title: 'Tenons passants',
      text: "Le tenon traverse toute la pièce et ressort de l'autre côté, où on le voit.",
    },
    {
      title: 'Plancher en mélèze de pays',
    },
    {
      title: 'Abri voiture',
      text: 'dans le prolongement de la toiture.',
    },
    {
      title: 'Local technique',
      text: "intégré à l'ouvrage.",
    },
  ],
  materials: ['Mélèze de pays : plancher de la terrasse.'],
  gallery: [
    {
      photo:
        'construction-d-une-terrasse-couverte-a-champcella/terrasse couverte et local technique.JPG',
      caption: 'Terrasse couverte et local technique',
      alt: 'Terrasse couverte en bois et local technique construits à Champcella (Hautes-Alpes)',
    },
    {
      photo:
        'construction-d-une-terrasse-couverte-a-champcella/abris de voiture en prolongement de toiture.JPG',
      caption: 'Abri voiture dans le prolongement de la toiture',
      alt: 'Abri voiture dans le prolongement de la toiture de la terrasse couverte, Champcella',
    },
    {
      photo: 'construction-d-une-terrasse-couverte-a-champcella/plancher en mélèze pays.JPG',
      caption: 'Plancher en mélèze de pays',
      alt: 'Plancher en mélèze de pays de la terrasse couverte à Champcella',
    },
    {
      photo: 'construction-d-une-terrasse-couverte-a-champcella/tenon passant.JPG',
      caption: 'Tenon passant',
      alt: 'Assemblage à tenon passant sur la charpente de la terrasse couverte, Champcella',
    },
    {
      photo: "construction-d-une-terrasse-couverte-a-champcella/détail d'assemblage.JPG",
      caption: "Détail d'assemblage",
      alt: "Détail d'assemblage de la charpente de la terrasse couverte à Champcella",
    },
  ],
  related: [
    'abris-voiture-a-l-argentiere-la-bessee',
    'creation-d-un-balcon-a-la-roche-de-rame',
    'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles',
  ],
  order: 19,
  seo: {
    title: 'Terrasse couverte en bois à Champcella | 3B Charpente',
    description:
      'À Champcella, terrasse couverte avec local technique et abri voiture dans le prolongement du toit : plancher en mélèze de pays, tenons passants. Photos.',
    image:
      'construction-d-une-terrasse-couverte-a-champcella/terrasse couverte et local technique.JPG',
  },
  validationPoints: [
    {
      question: 'Essence de la charpente de la terrasse couverte ?',
      decision:
        'Non indiquée : seul le plancher en mélèze de pays (légende de photo) figure dans les matériaux.',
    },
    {
      question: 'Matériau de couverture ?',
      decision: 'Non mentionné sur la page.',
    },
    {
      question: 'La terrasse est-elle accolée à la maison ou indépendante ?',
      decision:
        "Non précisé : le texte décrit seulement la terrasse couverte, l'abri voiture et le local technique.",
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
    {
      question: 'Fiche technique : architecte éventuel ?',
      decision: 'Champ vide, donc non affiché dans la fiche technique (décisions par défaut).',
      priority: 'low',
    },
  ],
}
