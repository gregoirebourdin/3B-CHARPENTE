import type { SeedPage } from '../../types'

/** Fiche 18 — Charpentier à Briançon (/charpentier-briancon/). */
export const page: SeedPage = {
  kind: 'page',
  slug: 'charpentier-briancon',
  title: 'Charpentier à Briançon',
  seo: {
    title: 'Charpentier à Briançon, toiture et isolation | 3B Charpente',
    description:
      '3B Charpente, charpentier depuis 2007 : reprise de charpente, isolation biosourcée et surélévation bois à Briançon. Bois local, RGE. Demandez un devis.',
    image: 'renovation-d-une-copropriete-a-briancon/7 Paysage Briançonnais.jpeg',
  },
  hero: {
    variant: 'map',
    kicker: 'Charpente · Toiture · Isolation · Ossature bois',
    title: 'Charpentier à **Briançon** et dans le Briançonnais',
    text: "Nous reprenons, isolons et surélevons les toitures et les maisons de Briançon, en **bois des Hautes-Alpes** et **isolants biosourcés**. Installés depuis 2007 à L'Argentière-la-Bessée, un peu plus bas dans la vallée.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: 'Voir nos chantiers à Briançon',
      href: '/charpentier-briancon/#chantiers',
    },
    proofs: [
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: 'Entreprise RGE', text: 'Qualibat', icon: 'medal' },
      { label: 'Deux chantiers à Briançon', text: 'copropriété, surélévation', icon: 'mapPin' },
    ],
    images: [
      'renovation-d-une-copropriete-a-briancon/7 Paysage Briançonnais.jpeg',
      'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg',
      'surelevation-en-ossature-bois-d-une-maison-a-briancon/3.1 pannes levéesP8290281.JPG',
    ],
  },
  tldr: "3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, intervient à Briançon : charpente, isolation et couverture d'une copropriété, surélévation d'une maison en ossature bois. Mélèze et sapin des Hautes-Alpes, isolants biosourcés, bois de réemploi. Entreprise qualifiée RGE.",
  layout: [
    // Nos chantiers à Briançon
    {
      type: 'projects',
      anchor: 'chantiers',
      kicker: 'Nos chantiers à Briançon',
      title: 'Deux chantiers **briançonnais**, en photos',
      intro:
        "Deux façons de travailler sur une maison existante : reprendre sa toiture, ou l'agrandir par le haut.",
      mode: 'manual',
      label: 'brand',
      items: [
        {
          project: 'renovation-d-une-copropriete-a-briancon',
          title: "Rénovation d'une copropriété à Briançon",
          text: 'Charpente, isolation et couverture reprises, fermes reprises, dépassée de toiture recréée pour protéger la façade.',
        },
        {
          project: 'surelevation-en-ossature-bois-d-une-maison-a-briancon',
          title: "Surélévation en ossature bois d'une maison à Briançon",
          text: "Murs pignons en ossature bois, pannes de 14 × 30 cm entaillées et décorées, trois plis d'épicéa sous la toiture.",
        },
      ],
    },
    {
      type: 'cta',
      variant: 'slim',
      icon: 'mapPin',
      text: 'Dans la vallée voisine : une ancienne forge réhabilitée à La Salle-les-Alpes, un toit en bardeaux de mélèze au Casset.',
      primary: {
        label: 'Voir nos chantiers à Serre Chevalier',
        href: '/charpentier-serre-chevalier/',
      },
    },
    // Le bâti briançonnais
    {
      type: 'textImage',
      tone: 'light',
      kicker: 'Le bâti briançonnais',
      title: "Des toitures qui **travaillent** toute l'année",
      text: "Ici, une charpente **porte la neige l'hiver**, passe par le gel et le dégel, et le soleil d'altitude grise les bois exposés. Les dépassées protègent les façades : nous les reprenons ou les recréons.",
      points: [
        'Copropriétés : un travail en hauteur, organisé avec les copropriétaires',
        "Maisons anciennes : l'état réel des bois se révèle à l'ouverture de la couverture",
        "Surélévations : on vérifie d'abord ce que les murs existants peuvent porter",
      ],
      images: [
        "renovation-d-une-copropriete-a-briancon/2 Recréation d'une dépassée de toiture.JPG",
      ],
      imagePosition: 'right',
    },
    {
      type: 'callout',
      kind: 'tip',
      tone: 'light',
      title: 'Dans la vieille ville',
      text: "Autour des fortifications de Vauban, inscrites au patrimoine mondial de l'Unesco, les travaux qui changent l'aspect extérieur sont encadrés. Renseignez-vous auprès du service urbanisme de la mairie : nous en parlons avec vous dès l'étude.",
    },
    // Nos prestations dans le Briançonnais
    {
      type: 'cards',
      variant: 'index',
      columns: 3,
      kicker: 'Ce que nous faisons',
      title: 'Nos **prestations** à Briançon',
      items: [
        {
          title: 'Rénovation de charpente et toiture',
          icon: 'roof',
          text: 'Reprise de fermes, recréation de dépassées, lucarnes et combles aménagés.',
          link: {
            label: 'Rénovation de charpente et toiture',
            href: '/renovation-charpente-combles/',
          },
        },
        {
          title: 'Isolation biosourcée',
          icon: 'leaf',
          text: 'Ouate de cellulose et fibre de bois, posées par une entreprise qualifiée RGE.',
          link: { label: 'Isolation biosourcée', href: '/isolation-biosourcee/' },
        },
        {
          title: "Isolation de toiture par l'extérieur",
          icon: 'layers',
          text: "Le sarking : l'isolant en continu au-dessus des chevrons, sans perdre de place sous le toit.",
          link: {
            label: "Isolation de toiture par l'extérieur",
            href: '/isolation-toiture-sarking/',
          },
        },
        {
          title: 'Isolation des murs',
          icon: 'wall',
          text: "L'ITE enveloppe les murs d'un isolant continu, par l'extérieur.",
          link: { label: 'Isolation des murs', href: '/isolation-murs-ite/' },
        },
        {
          title: 'Extension et surélévation bois',
          icon: 'arrowUp',
          text: 'Gagner de la place par le haut, avec une structure légère en ossature bois.',
          link: { label: 'Extension et surélévation bois', href: '/extension-surelevation-bois/' },
        },
        {
          title: 'Maison ossature bois',
          icon: 'house',
          text: 'Une maison neuve en bois, isolée avec des matériaux biosourcés.',
          link: { label: 'Maison ossature bois', href: '/maison-ossature-bois/' },
        },
        {
          title: 'Charpente traditionnelle',
          icon: 'hammer',
          text: 'Des pièces tracées, taillées et assemblées à blanc, puis levées sur place.',
          link: { label: 'Charpente traditionnelle', href: '/charpente-bois/' },
        },
        {
          title: 'Balcons, terrasses et abris',
          icon: 'balcony',
          text: 'En mélèze, avec des assemblages traditionnels.',
          link: { label: 'Balcons, terrasses et abris', href: '/balcon-terrasse-abri-bois/' },
        },
        {
          title: 'Escaliers sur mesure',
          icon: 'stairs',
          text: 'Dessinés, tracés, taillés et assemblés dans notre atelier.',
          link: { label: 'Escaliers sur mesure', href: '/escalier-bois-sur-mesure/' },
        },
      ],
    },
    // Notre méthode
    {
      type: 'steps',
      variant: 'tabs',
      tone: 'light',
      kicker: 'Notre méthode',
      title: 'De la rencontre au **levage**',
      steps: [
        {
          title: 'Premier contact',
          text: 'Vous nous appelez au 06 34 67 31 49 ou vous nous écrivez depuis le formulaire.',
        },
        { title: 'Rencontre', text: 'Nous parlons de vos besoins et de votre maison.' },
        {
          title: 'Devis',
          text: 'Un devis détaillé et un calendrier estimatif.',
        },
        {
          title: 'Atelier',
          text: "Nous dessinons l'ouvrage, puis traçons, taillons et assemblons les pièces dans notre atelier.",
        },
        {
          title: 'Chantier',
          text: 'Levage et pose sur place, à Briançon ou dans les villages autour.',
        },
      ],
    },
    // Nos matériaux
    {
      type: 'manifesto',
      layout: 'split',
      kicker: 'Nos matériaux',
      title: 'Du bois **des Hautes-Alpes**, des isolants **biosourcés**',
      text: 'Surtout du **mélèze et du sapin des Hautes-Alpes**, sciés par notre partenaire local, la Scierie Savoldelli.',
      items: [
        { title: 'Isoler', text: 'Ouate de cellulose et panneaux de fibre de bois.' },
        {
          title: 'Réemployer',
          text: "Avec 3B Récup', le bois de déconstruction retrouve un chantier.",
        },
        {
          title: 'Les aides',
          text: "Notre qualification RGE ouvre l'accès aux aides publiques, sous conditions.",
        },
      ],
      image:
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/6.1 panneaux trois plis épicéa apparents du dessous.JPG',
      cta: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },
    // Communes desservies
    {
      type: 'serviceArea',
      tone: 'cream',
      kicker: 'Où nous intervenons',
      title: 'Briançon et les **communes voisines**',
      text: "Depuis L'Argentière-la-Bessée, nous intervenons à Briançon et dans les communes autour, et plus largement dans les Hautes-Alpes, en région PACA et Rhône-Alpes.",
      sectors: [
        {
          title: 'Charpentier à Serre Chevalier',
          text: 'Saint-Chaffrey, La Salle-les-Alpes, Le Monêtier-les-Bains.',
          link: { label: 'Nos chantiers à Serre Chevalier', href: '/charpentier-serre-chevalier/' },
        },
        {
          title: 'Charpentier en Vallouise et Pays des Écrins',
          text: "Autour de Vallouise et de L'Argentière-la-Bessée.",
          link: {
            label: 'Nos chantiers en Vallouise',
            href: '/charpentier-vallouise-pays-des-ecrins/',
          },
        },
      ],
      showMap: false,
    },
    // FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: 'Vos questions sur un chantier à **Briançon**',
      faqs: [
        'charpentier-briancon-q1',
        'charpentier-briancon-q2',
        'charpentier-briancon-q3',
        'charpentier-briancon-q4',
        'charpentier-briancon-q5',
      ],
    },
    // Appel à l'action
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre projet',
      title: 'Un projet à **Briançon** ?',
      text: 'Chaque projet débute par une étude sur mesure. Parlons du vôtre.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'charpentier-briancon-q1',
      topic: 'secteurs',
      question: 'Intervenez-vous à Briançon et dans les villages autour ?',
      answer:
        "Oui. Installés à L'Argentière-la-Bessée, un peu plus bas dans la vallée de la Durance, nous avons déjà rénové la toiture d'une copropriété et surélevé une maison à Briançon. Nous intervenons aussi à Serre Chevalier, dans le Pays des Écrins, et plus largement dans les Hautes-Alpes, en PACA et en Rhône-Alpes.",
    },
    {
      key: 'charpentier-briancon-q2',
      topic: 'secteurs',
      question: "Pouvez-vous rénover la toiture d'une copropriété à Briançon ?",
      answer:
        "Oui. À Briançon, nous avons repris la charpente, l'isolation et la couverture d'une copropriété : découverture, soufflage de l'isolant, reprise des fermes, dépassée de toiture recréée, couverture. Le devis détaillé sert aussi à présenter les travaux aux copropriétaires.",
    },
    {
      key: 'charpentier-briancon-q3',
      topic: 'secteurs',
      question: 'Peut-on surélever une maison en ossature bois à Briançon ?',
      answer:
        "Oui, selon ce que la maison peut porter. Nous l'avons fait à Briançon : murs pignons en ossature bois, pannes de 14 × 30 cm, trois plis d'épicéa, laine de bois. Le bois, plus léger qu'une maçonnerie, limite la charge ajoutée. Une autorisation d'urbanisme est nécessaire : renseignez-vous en mairie.",
    },
    {
      key: 'charpentier-briancon-q4',
      topic: 'secteurs',
      question: 'Êtes-vous RGE pour isoler une toiture à Briançon ?',
      answer:
        "Oui, QUALIBAT-RGE pour l'isolation des toitures et des murs par l'extérieur, l'isolation par l'intérieur, les fenêtres de toit et les menuiseries extérieures. Elle ouvre l'accès aux aides publiques, sous conditions. Nous isolons avec des matériaux biosourcés, comme la ouate de cellulose et la fibre de bois.",
    },
    {
      key: 'charpentier-briancon-q5',
      topic: 'secteurs',
      question: 'Comment obtenir un devis de charpente à Briançon ?',
      answer:
        "Appelez-nous au 06 34 67 31 49 ou écrivez-nous depuis le formulaire de contact. Nous parlons de votre projet lors d'une rencontre, puis nous vous proposons un devis détaillé et un calendrier estimatif.",
    },
  ],
  photoAlts: [
    {
      photo: 'renovation-d-une-copropriete-a-briancon/6 Couverture.JPG',
      alt: "Couverture refaite sur la toiture d'une copropriété à Briançon (Hautes-Alpes)",
    },
    {
      photo: 'renovation-d-une-copropriete-a-briancon/7 Paysage Briançonnais.jpeg',
      alt: 'Vue sur le paysage briançonnais depuis le chantier de la copropriété',
    },
    {
      photo: 'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg',
      alt: "Reprise des fermes de la charpente d'une copropriété à Briançon",
    },
    {
      photo: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/91.1façade sud finie.jpg',
      alt: 'Façade sud de la maison surélevée en ossature bois à Briançon (Hautes-Alpes)',
    },
    {
      photo: "renovation-d-une-copropriete-a-briancon/2 Recréation d'une dépassée de toiture.JPG",
      alt: 'Dépassée de toiture recréée sur une copropriété à Briançon',
    },
    {
      photo:
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/6.1 panneaux trois plis épicéa apparents du dessous.JPG',
      alt: 'Sous-face apparente des panneaux trois plis en épicéa, surélévation à Briançon',
    },
    {
      photo: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/3.1 pannes levéesP8290281.JPG',
      alt: 'Pannes de toiture levées sur la surélévation en ossature bois, Briançon',
    },
  ],
  validationPoints: [
    {
      question:
        'Communes desservies autour de Briançon : Villard-Saint-Pancrace, Puy-Saint-André, Montgenèvre, Cervières. Jean y va-t-il vraiment ? Faut-il en ajouter (Puy-Saint-Pierre, Val-des-Prés, Névache) ?',
      decision:
        'Pastilles limitées à Briançon (seule commune avec un chantier publié), suivies de « et les communes voisines ». Les communes proposées par les rédacteurs ne sont ni en pastilles ni dans areaServed.',
      priority: 'high',
    },
    {
      question:
        'Horaires à afficher : la maquette indique « lundi au vendredi, 7 h 30 – 17 h », PagesJaunes « vendredi 7 h 30 – 12 h ».',
      decision:
        'Horaires du réglage « Entreprise » : lundi au jeudi 7 h 30 – 17 h, vendredi 7 h 30 – 12 h, samedi et dimanche fermé (version des annuaires).',
      priority: 'normal',
    },
    {
      question:
        'Années des deux chantiers briançonnais (« En {année}, nous avons… » renforce la preuve).',
      decision: 'Aucune année affichée.',
      priority: 'low',
    },
    {
      question:
        'Secteur protégé : Jean a-t-il déjà travaillé dans la vieille ville ou en périmètre protégé ?',
      decision:
        'La phrase sur la vieille ville et les fortifications de Vauban reste un conseil général, sans affirmer de chantier en secteur protégé.',
      priority: 'normal',
    },
    {
      question:
        'Copropriété : accord du syndic pour citer le chantier ; isolant soufflé et épaisseur ; matériau de couverture.',
      decision:
        'Chantier cité comme « copropriété à Briançon », sans adresse (commune déjà publique sur le site actuel). Isolant, épaisseur et matériau de couverture non précisés.',
      priority: 'normal',
    },
    {
      question:
        'Atelier : est-il au 5 rue Saint-Michel ? La page écrit « notre atelier » (étape 04 de la méthode).',
      decision:
        "« Notre atelier » gardé pour le traçage, la taille et l'assemblage ; aucune adresse d'atelier.",
      priority: 'normal',
    },
    {
      question:
        "Pastille « Entreprise RGE » : la qualification est au nom de « TARDY JEAN-MICHEL » (SIRET 494 482 714 00024), les mentions légales donnent 494 482 714 00016. Quel établissement est actif à l'adresse affichée ?",
      decision: 'Pastille gardée ; les mentions légales affichent le SIRET 494 482 714 00016.',
      priority: 'normal',
    },
    {
      question:
        'Fiche Google à revendiquer, puis à ajouter dans sameAs et sur une petite carte (section coordonnées).',
      decision:
        'Lien Google absent (seule Facebook dans sameAs) ; pas de carte Google Maps sous le bandeau de contact.',
      priority: 'normal',
    },
    {
      question: "Coordonnées GPS de l'adresse pour geo.",
      decision: "Coordonnées obtenues par géocodage de l'adresse (Base Adresse Nationale).",
      priority: 'low',
    },
    {
      question: "Avis clients : aucun à afficher pour l'instant (1 avis Google).",
      decision: 'Aucun avis ni témoignage affiché sur la page.',
      priority: 'low',
    },
    {
      question:
        "Photos à demander : d'autres chantiers à Briançon ou dans les communes voisines, une photo de l'équipe sur un toit briançonnais, les fichiers d'origine en haute définition des fiches n° 18 et 24.",
      decision: 'Page publiée avec les photos existantes des deux chantiers briançonnais.',
      priority: 'low',
    },
  ],
}
