// Réalisation n° 10 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (titre court, texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'isolation-d-un-bati-ancien-par-l-interieur',
  title: "Isolation par l'intérieur d'un bâti ancien en **ouate de cellulose**",
  shortTitle: "Isolation d'un bâti ancien par l'intérieur",
  services: ['isolation-murs-ite', 'isolation-biosourcee'],
  tags: ['Bâti ancien', "Isolation par l'intérieur", 'Ouate de cellulose'],
  heroImage: 'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG',
  summary:
    "Poutres en I, ouate de cellulose insufflée, panneaux OSB3, étanchéité à l'air, nouvelles menuiseries et bardage en pin.",
  description:
    "Dans ce bâti ancien, nous avons réalisé une isolation par l'intérieur. L'isolant est de la ouate de cellulose, un isolant biosourcé fabriqué à partir de papier recyclé.\n\nElle est insufflée, c'est-à-dire soufflée sous pression dans une paroi fermée. Le chantier comprend aussi les encadrements des menuiseries et la pose d'un bardage en pin.",
  steps: [
    {
      title: 'Préparation',
      text: 'du bâti existant.',
    },
    {
      title: 'Poutres en I',
      text: "Ce sont des poutres légères en forme de I, avec une âme fine entre deux semelles. Elles créent l'épaisseur de l'isolant.",
    },
    {
      title: 'Panneaux OSB3',
      text: 'posés : des panneaux de lamelles de bois collées.',
    },
    {
      title: "Étanchéité à l'air",
      text: "pour que l'air chaud et humide ne traverse pas l'isolant.",
    },
    {
      title: 'Insufflation de ouate de cellulose',
    },
    {
      title: 'Doublage et encadrements',
      text: 'des menuiseries, livrées sur le chantier.',
    },
    {
      title: 'Bardage en pin',
      text: 'posé.',
    },
  ],
  materials: [
    'Ouate de cellulose insufflée : isolant biosourcé.',
    "Poutres en I et panneaux OSB3 : la structure qui reçoit l'isolant.",
    'Pin : bardage.',
  ],
  gallery: [
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/avant les travaux.JPG',
      caption: 'Avant les travaux',
      alt: "Bâti ancien avant son isolation par l'intérieur",
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/préparation.JPG',
      caption: 'Préparation',
      alt: "Préparation du bâti ancien avant l'isolation par l'intérieur",
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/poutre en I.JPG',
      caption: 'Poutres en I',
      alt: "Poutres en I posées pour créer l'épaisseur d'isolant dans un bâti ancien",
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/panneaux OSB3.JPG',
      caption: 'Panneaux OSB3',
      alt: "Panneaux OSB3 pour l'isolation par l'intérieur d'un bâti ancien",
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/panneaux posés.JPG',
      caption: 'Panneaux posés',
      alt: "Panneaux posés sur la structure d'isolation intérieure d'un bâti ancien",
    },
    {
      photo: "isolation-d-un-bati-ancien-par-l-interieur/pose de l'étanchéité à l'air.JPG",
      caption: "Pose de l'étanchéité à l'air",
      alt: "Pose de l'étanchéité à l'air pour l'isolation intérieure d'un bâti ancien",
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG',
      caption: 'Insufflation de ouate de cellulose',
      alt: "Insufflation de ouate de cellulose dans les parois d'un bâti ancien isolé par l'intérieur",
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/doublage.JPG',
      caption: 'Doublage',
      alt: 'Doublage intérieur posé dans le bâti ancien isolé',
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/menuiseries livrées!.JPG',
      caption: 'Livraison des menuiseries',
      alt: "Menuiseries livrées sur le chantier d'isolation d'un bâti ancien",
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/encadrement.JPG',
      caption: 'Encadrement',
      alt: "Encadrement de menuiserie dans le bâti ancien isolé par l'intérieur",
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/pose du bardage en pin.JPG',
      caption: 'Pose du bardage en pin',
      alt: "Pose d'un bardage en pin sur le bâti ancien rénové",
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/bardage posé.JPG',
      caption: 'Bardage posé',
      alt: "Bardage en pin posé, fin du chantier d'isolation d'un bâti ancien",
    },
  ],
  related: [
    'renovation-et-isolation-d-un-chalet-a-vallouise',
    'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
    'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien',
  ],
  order: 11,
  seo: {
    title: "Isolation intérieure d'un bâti ancien | 3B Charpente",
    description:
      "Isolation d'un bâti ancien par l'intérieur : poutres en I, OSB3, étanchéité à l'air, ouate de cellulose insufflée, bardage en pin. 12 photos du chantier.",
    image: 'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG',
  },
  validationPoints: [
    {
      question: 'Dans quelle commune ce chantier a-t-il été réalisé ?',
      decision:
        "Aucune commune indiquée (décisions par défaut) : le chantier est classé par prestation, n'apparaît dans aucune page secteur, la carte secteur est masquée et la balise title reste sans commune.",
    },
    {
      question: 'Épaisseur de ouate de cellulose ?',
      decision: "Non indiquée : ligne « Épaisseur d'isolant » retirée de la fiche technique.",
    },
    {
      question: 'Isolation des murs seulement, ou aussi des rampants et plafonds ?',
      decision:
        "Non précisé : le texte parle d'une isolation par l'intérieur, sans détailler les parois.",
    },
    {
      question: "Le bardage en pin est-il à l'intérieur ou à l'extérieur ?",
      decision: 'Non précisé : « Bardage en pin posé ».',
    },
    {
      question: 'Les menuiseries ont-elles été fournies et posées par 3B ?',
      decision:
        "Non précisé : on ne dit pas qui fait quoi (décisions par défaut) ; l'étape parle des menuiseries « livrées sur le chantier ».",
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
      question: 'Fiche technique : surface isolée ?',
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
