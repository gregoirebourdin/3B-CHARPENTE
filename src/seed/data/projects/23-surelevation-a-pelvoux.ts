// Réalisation n° 23 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'surelevation-a-pelvoux',
  title: 'Surélévation à **Pelvoux**, avec une dépassée de toit sur consoles',
  shortTitle: 'Surélévation à Pelvoux',
  commune: 'vallouise-pelvoux',
  locality: 'Pelvoux',
  services: ['extension-surelevation-bois'],
  tags: ['Surélévation'],
  heroImage: 'surelevation-a-pelvoux/chantier terminé.jpg',
  summary:
    "Une surélévation, de l'existant au chantier terminé, et le détail d'une console de dépassée de toit.",
  description:
    "À Pelvoux, au pied du massif des Écrins, nous avons réalisé une surélévation. Surélever, c'est rehausser un bâtiment existant pour gagner de la hauteur ou un niveau. Pelvoux fait partie de la commune de Vallouise-Pelvoux.\n\nLa nouvelle toiture déborde du mur : c'est la dépassée, qui repose ici sur des consoles. Les photos suivent le chantier de l'état d'origine jusqu'au résultat, dedans comme dehors.",
  steps: [
    {
      title: 'État avant travaux.',
    },
    {
      title: 'Chantier en cours',
      text: "puis première moitié de l'ouvrage.",
    },
    {
      title: 'Console de dépassée de toit.',
      text: 'Une console est une pièce en porte-à-faux, fixée au mur, qui soutient ce débord.',
    },
    {
      title: 'Vue intérieure.',
    },
    {
      title: 'Chantier terminé.',
    },
  ],
  materials: [],
  gallery: [
    {
      photo: 'surelevation-a-pelvoux/avnat.JPG',
      caption: 'Avant les travaux',
      alt: 'Bâtiment à Pelvoux avant sa surélévation',
    },
    {
      photo: 'surelevation-a-pelvoux/en cours.JPG',
      caption: 'Chantier en cours',
      alt: 'Chantier de surélévation en cours à Pelvoux (Vallouise-Pelvoux)',
    },
    {
      photo: 'surelevation-a-pelvoux/première moitié.jpg',
      caption: "Première moitié de l'ouvrage",
      alt: 'Première moitié de la surélévation à Pelvoux',
    },
    {
      photo: 'surelevation-a-pelvoux/console de dépassée de toit.JPG',
      caption: 'Console de dépassée de toit',
      alt: 'Console soutenant la dépassée de toit de la surélévation à Pelvoux',
    },
    {
      photo: 'surelevation-a-pelvoux/vue intérieure.jpg',
      caption: 'Vue intérieure',
      alt: 'Vue intérieure de la surélévation à Pelvoux',
    },
    {
      photo: 'surelevation-a-pelvoux/chantier terminé.jpg',
      caption: 'Chantier terminé',
      alt: 'Surélévation terminée à Pelvoux, dans le Pays des Écrins (Hautes-Alpes)',
    },
  ],
  related: [
    'surelevation-en-ossature-bois-d-une-maison-a-briancon',
    'creation-d-un-abris-de-jardin-a-pelvoux',
    'renovation-et-isolation-d-un-chalet-a-vallouise',
  ],
  order: 14,
  seo: {
    title: 'Surélévation à Pelvoux (Vallouise-Pelvoux) | 3B Charpente',
    description:
      "Surélévation à Pelvoux par 3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007 : levage, consoles de dépassée de toit, vue intérieure. Photos.",
    image: 'surelevation-a-pelvoux/chantier terminé.jpg',
  },
  validationPoints: [
    {
      question: 'Le type de bâtiment (maison, chalet, grange) et le contexte du client ?',
      decision:
        "Non précisés : la fiche est décrite d'après les légendes des photos (décisions par défaut). « Maison » retiré du titre court (« Surélévation à Pelvoux ») et du texte de carte de la fiche 15 (« Une surélévation, de l'existant au chantier terminé… »).",
      priority: 'normal',
    },
    {
      question: 'Le système constructif (ossature bois ?) et les essences ?',
      decision: 'Section « Les matériaux » masquée : ils ne sont pas précisés par la source.',
      priority: 'normal',
    },
    {
      question: "L'isolant ?",
      decision: 'Non précisé.',
      priority: 'normal',
    },
    {
      question: 'Ce que montre « première moitié » : la moitié de la structure levée ?',
      decision:
        "Pas d'interprétation (décisions par défaut) : légende « Première moitié de l'ouvrage » et étape « Chantier en cours, puis première moitié de l'ouvrage ».",
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
      question: 'Fiche technique : surface gagnée ?',
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
