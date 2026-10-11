// Réalisation n° 24 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'surelevation-en-ossature-bois-d-une-maison-a-briancon',
  title: "Surélévation en ossature bois d'une maison à **Briançon**",
  shortTitle: 'Surélévation en ossature bois à Briançon',
  commune: 'briancon',
  services: ['extension-surelevation-bois', 'maison-ossature-bois', 'isolation-biosourcee'],
  tags: ['Surélévation', 'Ossature bois', 'Épicéa'],
  heroImage: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/91.1façade sud finie.jpg',
  summary:
    'Murs pignons en ossature bois, pannes porteuses de 14 × 30 entaillées, panneaux trois plis en épicéa et remplissage en laine de bois.',
  description:
    "À Briançon, nous avons surélevé une maison avec une structure en ossature bois. Surélever, c'est rehausser un bâtiment existant, souvent pour gagner un niveau. L'ossature bois, plus légère qu'une maçonnerie, limite la charge ajoutée sur les murs en place.",
  steps: [
    {
      title: 'Levage des murs pignons',
      text: 'en ossature bois. Le pignon est le mur en triangle qui suit la pente du toit.',
    },
    {
      title: 'Pannes levées',
      text: 'dont des pannes porteuses de 14 × 30 cm, entaillées. Les pannes sont les poutres horizontales qui portent la toiture.',
    },
    {
      title: 'Décor des pannes.',
    },
    {
      title: 'Panneaux trois plis en épicéa',
      text: "sur la toiture : trois couches de bois croisées, qui assurent le contreventement (la stabilité face au vent) et l'étanchéité à l'air. Ils restent apparents à l'intérieur.",
    },
    {
      title: 'Remplissage en laine de bois.',
    },
    {
      title: 'Dépassée de toit',
      text: 'et façade sud terminée.',
    },
  ],
  materials: [
    'Ossature bois : murs pignons.',
    'Pannes porteuses de 14 × 30 cm, entaillées.',
    "Panneaux trois plis en épicéa : contreventement et étanchéité à l'air de la toiture, apparents en sous-face.",
    'Laine de bois : isolant biosourcé de remplissage.',
  ],
  gallery: [
    {
      photo:
        "surelevation-en-ossature-bois-d-une-maison-a-briancon/1.1 levage d'un mur pignonIMG_0948.JPG",
      caption: "Levage d'un mur pignon (1/2)",
      alt: "Levage d'un mur pignon en ossature bois pour la surélévation d'une maison à Briançon",
    },
    {
      photo: "surelevation-en-ossature-bois-d-une-maison-a-briancon/2.1 levage d'un mur pignon.JPG",
      caption: "Levage d'un mur pignon (2/2)",
      alt: 'Mur pignon en ossature bois levé sur une maison à Briançon',
    },
    {
      photo: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/3.1 pannes levéesP8290281.JPG',
      caption: 'Pannes levées',
      alt: 'Pannes de toiture levées sur la surélévation en ossature bois, Briançon',
    },
    {
      photo:
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/7.1 panes porteuses en14x30 entaillées.JPG',
      caption: 'Pannes porteuses de 14 × 30 cm, entaillées',
      alt: "Pannes porteuses de 14 × 30 cm entaillées, surélévation d'une maison à Briançon",
    },
    {
      photo: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/4.1décors de pannes.JPG',
      caption: 'Décor des pannes',
      alt: 'Pannes décorées de la surélévation en ossature bois à Briançon',
    },
    {
      photo:
        "surelevation-en-ossature-bois-d-une-maison-a-briancon/5.1panneau trois plis épicéa pour le contreventement et l'étanchéité à l'air de la toiture.JPG",
      caption:
        "Panneaux trois plis en épicéa pour le contreventement et l'étanchéité à l'air de la toiture",
      alt: 'Panneaux trois plis en épicéa posés sur la toiture pour le contreventement, Briançon',
    },
    {
      photo:
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/6.1 panneaux trois plis épicéa apparents du dessous.JPG',
      caption: "Panneaux trois plis en épicéa, apparents depuis l'intérieur",
      alt: 'Sous-face apparente des panneaux trois plis en épicéa, surélévation à Briançon',
    },
    {
      photo:
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/8.1 remplissage en laine de bois.JPG',
      caption: 'Remplissage en laine de bois',
      alt: 'Isolation en laine de bois dans la surélévation en ossature bois à Briançon',
    },
    {
      photo:
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/9.1 détail de dépassée de toit.JPG',
      caption: 'Détail de la dépassée de toit',
      alt: 'Détail de la dépassée de toit de la maison surélevée à Briançon',
    },
    {
      photo: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/91.1façade sud finie.jpg',
      caption: 'Façade sud terminée',
      alt: 'Façade sud de la maison surélevée en ossature bois à Briançon (Hautes-Alpes)',
    },
  ],
  related: [
    'surelevation-a-pelvoux',
    'maison-a-ossature-bois-dans-les-monts-du-lyonnais',
    'renovation-d-une-copropriete-a-briancon',
  ],
  featured: true,
  order: 13,
  seo: {
    title: 'Surélévation en ossature bois à Briançon | 3B Charpente',
    description:
      "Surélévation d'une maison à Briançon en ossature bois : murs pignons, pannes de 14 × 30 cm, panneaux trois plis épicéa, laine de bois. Voir le chantier.",
    image: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/91.1façade sud finie.jpg',
  },
  validationPoints: [
    {
      question: "L'essence de l'ossature et des pannes (mélèze, sapin ?) ?",
      decision: "Non précisée : seul l'épicéa des panneaux trois plis est cité.",
      priority: 'normal',
    },
    {
      question: "L'épaisseur de laine de bois ?",
      decision: 'Non précisée.',
      priority: 'low',
    },
    {
      question: 'La surface gagnée et le nombre de niveaux ajoutés ?',
      decision: 'Non précisés ; ligne « Surface » de la fiche technique masquée.',
      priority: 'normal',
    },
    {
      question:
        'Le « décor des pannes » : abouts sculptés, chanfreins ? Une phrase de Jean sur ce détail serait précieuse.',
      decision: 'Étape « Décor des pannes » gardée sans explication.',
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
