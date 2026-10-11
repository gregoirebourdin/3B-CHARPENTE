// Réalisation n° 16 (realisations-source.md), transcrite de la fiche 16
// (3b-charpente-kit/docs/pages/16-fiches-realisations.md) et de la fiche 15 (texte de carte).
import type { SeedProject } from '../../types'

export const project: SeedProject = {
  slug: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
  title: "Réhabilitation d'une ancienne forge à **La Salle-les-Alpes**",
  shortTitle: "Réhabilitation d'une ancienne forge à La Salle-les-Alpes",
  commune: 'la-salle-les-alpes',
  services: ['charpente-bois', 'escalier-bois-sur-mesure', 'balcon-terrasse-abri-bois'],
  tags: ['Charpente', 'Escaliers', 'Balcon'],
  heroImage: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/7Chantier fini.JPG',
  summary:
    'Charpente taillée puis levée, couverture finie, escalier quart tournant encloisonné et balcon extérieur.',
  description:
    "À La Salle-les-Alpes, dans la vallée de Serre Chevalier, nous avons réhabilité une ancienne forge. Ce chantier a réuni plusieurs savoir-faire du charpentier : une charpente taillée puis levée, la couverture de la toiture, deux escaliers à l'intérieur et un balcon à l'extérieur.",
  steps: [
    {
      title: 'Taille de la charpente.',
      text: 'Chaque pièce est tracée, puis taillée avant le levage.',
    },
    {
      title: 'Levage de la toiture.',
      text: 'La charpente est montée et assemblée sur le bâtiment.',
    },
    {
      title: 'Couverture.',
      text: "La toiture est couverte jusqu'à la finition.",
    },
    {
      title: 'Escalier encloisonné.',
      text: "C'est un escalier fermé, pris entre deux murs ou deux cloisons.",
    },
    {
      title: 'Escalier quart tournant.',
      text: "Il tourne d'un quart de tour pour changer de direction.",
    },
    {
      title: 'Balcon extérieur',
      text: 'en complément de la charpente et des escaliers.',
    },
  ],
  materials: [],
  gallery: [
    {
      photo:
        'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/1 Taille de la charpente.JPG',
      caption: 'Taille de la charpente',
      alt: "Taille des pièces de la charpente pour la réhabilitation d'une ancienne forge à La Salle-les-Alpes",
    },
    {
      photo: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/2Levage de la toiture.JPG',
      caption: 'Levage de la toiture',
      alt: "Levage de la toiture de l'ancienne forge à La Salle-les-Alpes, vallée de Serre Chevalier",
    },
    {
      photo: "rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/3 Vue d'en haut.JPG",
      caption: "Vue d'en haut",
      alt: "Vue d'en haut du chantier de l'ancienne forge à La Salle-les-Alpes",
    },
    {
      photo: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/4 Couverture finie.JPG',
      caption: 'Couverture terminée',
      alt: "Couverture terminée sur l'ancienne forge réhabilitée à La Salle-les-Alpes",
    },
    {
      photo: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/5 Escalier encloisonné.JPG',
      caption: 'Escalier encloisonné',
      alt: "Escalier encloisonné réalisé dans l'ancienne forge de La Salle-les-Alpes",
    },
    {
      photo:
        'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/6 Escalier quart tournant.JPG',
      caption: 'Escalier quart tournant',
      alt: "Escalier quart tournant réalisé dans l'ancienne forge de La Salle-les-Alpes",
    },
    {
      photo: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/9 Balcon exterieur.JPG',
      caption: 'Balcon extérieur',
      alt: "Balcon extérieur de l'ancienne forge réhabilitée à La Salle-les-Alpes",
    },
    {
      photo: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/7Chantier fini.JPG',
      caption: 'Chantier terminé (1/2)',
      alt: "L'ancienne forge réhabilitée à La Salle-les-Alpes, chantier terminé",
    },
    {
      photo: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/8Chantier fini.JPG',
      caption: 'Chantier terminé (2/2)',
      alt: "Autre vue de l'ancienne forge réhabilitée à La Salle-les-Alpes, chantier terminé",
    },
  ],
  related: [
    'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles',
    'escalier-1-4-tournant-en-meleze-lamelle-colle',
    'renovation-d-un-toit-en-bardeau-meleze-au-casset',
  ],
  order: 3,
  seo: {
    title: 'Forge réhabilitée à La Salle-les-Alpes | 3B Charpente',
    description:
      "Réhabilitation d'une ancienne forge à La Salle-les-Alpes : charpente taillée, levage de la toiture, couverture, deux escaliers et un balcon. Photos.",
    image: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/7Chantier fini.JPG',
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
      question: 'Fiche technique : surface ?',
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
    {
      question:
        'Le nouvel usage de la forge (habitation, atelier, gîte…) et le contexte du client ?',
      decision: 'Non précisés ; ligne « Contexte » de la fiche technique masquée.',
      priority: 'normal',
    },
    {
      question: 'La charpente est-elle neuve, ou en partie conservée ?',
      decision: "Non précisé : le texte parle d'« une charpente taillée puis levée ».",
      priority: 'normal',
    },
    {
      question:
        'Les essences de la charpente, des escaliers et du balcon, et le type de couverture ?',
      decision: 'Section « Les matériaux » masquée : ils ne sont pas montrés par les légendes.',
      priority: 'normal',
    },
    {
      question: "L'ordre des deux photos « Chantier fini » ?",
      decision:
        'Ordre des fichiers gardé : « 7Chantier fini » = Chantier terminé (1/2), photo principale ; « 8Chantier fini » = Chantier terminé (2/2).',
      priority: 'low',
    },
    {
      question:
        "Un ou deux escaliers ? La fiche 16 parle de deux escaliers (encloisonné, quart tournant), le texte de carte de la fiche 15 d'un « escalier quart tournant encloisonné ».",
      decision:
        'Textes des fiches repris tels quels (description : deux escaliers ; résumé de carte : texte de la fiche 15).',
      priority: 'low',
    },
  ],
}
