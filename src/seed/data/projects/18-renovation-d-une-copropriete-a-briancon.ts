// Réalisation n° 18 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'renovation-d-une-copropriete-a-briancon',
  title: "Rénovation d'une copropriété à **Briançon** : charpente, isolation et couverture",
  shortTitle: "Rénovation d'une copropriété à Briançon",
  commune: 'briancon',
  services: ['renovation-charpente-combles', 'isolation-biosourcee'],
  tags: ['Copropriété', 'Charpente', 'Isolation', 'Couverture'],
  heroImage: 'renovation-d-une-copropriete-a-briancon/6 Couverture.JPG',
  summary:
    'Reprise de la charpente et des fermes, isolation soufflée, dépassée de toiture recréée et nouvelle couverture. Avec en prime, une belle vue.',
  description:
    "À Briançon, nous avons rénové la toiture d'une copropriété : reprise de la charpente, isolation et couverture. Un chantier en hauteur, avec en prime une belle vue sur le paysage briançonnais.",
  steps: [
    {
      title: 'État des lieux',
      text: 'avant intervention.',
    },
    {
      title: 'Découverture et soufflage.',
      text: "Une fois la couverture retirée, l'isolant a été soufflé.",
    },
    {
      title: 'Reprise de la charpente et des fermes.',
      text: 'Les fermes sont les assemblages en triangle qui portent la toiture.',
    },
    {
      title: "Recréation d'une dépassée de toiture.",
      text: "La dépassée, c'est le débord du toit au-delà du mur : elle protège la façade de la pluie et de la neige.",
    },
    {
      title: 'Couverture',
      text: 'refaite.',
    },
  ],
  materials: [],
  gallery: [
    {
      photo: 'renovation-d-une-copropriete-a-briancon/0 Avant intervention.JPG',
      caption: 'Avant intervention',
      alt: 'Toiture de la copropriété de Briançon avant la rénovation',
    },
    {
      photo: 'renovation-d-une-copropriete-a-briancon/1 Soufflage après découverture.JPG',
      caption: "Soufflage de l'isolant après découverture",
      alt: "Isolant soufflé après la découverture du toit d'une copropriété à Briançon",
    },
    {
      photo: 'renovation-d-une-copropriete-a-briancon/3 Charpente.JPG',
      caption: 'La charpente',
      alt: 'Charpente de la copropriété de Briançon pendant la rénovation',
    },
    {
      photo: 'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg',
      caption: 'Reprise des fermes (1/2)',
      alt: "Reprise des fermes de la charpente d'une copropriété à Briançon",
    },
    {
      photo: 'renovation-d-une-copropriete-a-briancon/5 Reprise des fermes.jpeg',
      caption: 'Reprise des fermes (2/2)',
      alt: 'Fermes reprises sur la charpente de la copropriété, Briançon',
    },
    {
      photo: "renovation-d-une-copropriete-a-briancon/2 Recréation d'une dépassée de toiture.JPG",
      caption: "Recréation d'une dépassée de toiture",
      alt: 'Dépassée de toiture recréée sur une copropriété à Briançon',
    },
    {
      photo: 'renovation-d-une-copropriete-a-briancon/6 Couverture.JPG',
      caption: 'La couverture',
      alt: "Couverture refaite sur la toiture d'une copropriété à Briançon (Hautes-Alpes)",
    },
    {
      photo: 'renovation-d-une-copropriete-a-briancon/7 Paysage Briançonnais.jpeg',
      caption: 'Le paysage briançonnais',
      alt: 'Vue sur le paysage briançonnais depuis le chantier de la copropriété',
    },
  ],
  related: [
    'surelevation-en-ossature-bois-d-une-maison-a-briancon',
    'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
    'refection-d-une-charpente-a-l-argentiere-la-bessee',
  ],
  featured: true,
  order: 2,
  seo: {
    title: "Rénovation d'une copropriété à Briançon | 3B Charpente",
    description:
      "À Briançon, 3B Charpente a repris la charpente, l'isolation et la couverture d'une copropriété : fermes reprises, dépassée de toit recréée. Photos.",
    image: 'renovation-d-une-copropriete-a-briancon/6 Couverture.JPG',
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
      question: 'Fiche technique : contexte du client (syndic, nombre de logements) ?',
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'normal',
    },
    {
      question: "Fiche technique : architecte ou maître d'œuvre éventuel ?",
      decision:
        'Ligne masquée de la fiche technique (champ vide, non affiché), en attendant la réponse de Jean.',
      priority: 'low',
    },
    {
      question:
        'Matériaux : isolant soufflé (ouate de cellulose ?) et épaisseur, matériau de couverture, essence des bois de reprise ?',
      decision: 'Section « Les matériaux » masquée : ils ne sont pas précisés par la source.',
      priority: 'normal',
    },
    {
      question:
        "L'isolant soufflé, son épaisseur, et l'endroit où il a été soufflé (rampants, plancher des combles) ?",
      decision: "Non précisés : le texte dit seulement « l'isolant a été soufflé ».",
      priority: 'normal',
    },
    {
      question: 'Le matériau de couverture ?',
      decision: 'Non précisé : « Couverture refaite ».',
      priority: 'normal',
    },
    {
      question: "L'ordre réel des étapes (soufflage avant ou après la reprise des fermes) ?",
      decision:
        'Ordre de la fiche gardé : découverture et soufflage, reprise de la charpente et des fermes, dépassée de toiture, couverture.',
      priority: 'low',
    },
    {
      question: "L'accord du syndic pour citer « copropriété à Briançon » (sans adresse) ?",
      decision:
        'Commune gardée, sans adresse : elle est déjà publique sur le site actuel (décisions par défaut, Accord des clients).',
      priority: 'normal',
    },
  ],
}
