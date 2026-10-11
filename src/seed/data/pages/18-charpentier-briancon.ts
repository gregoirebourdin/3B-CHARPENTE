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
    variant: 'collage',
    kicker: 'Charpente · Toiture · Isolation · Ossature bois',
    title: 'Charpentier à **Briançon** et dans le Briançonnais',
    text: "3B Charpente reprend, isole et surélève les toitures et les maisons de Briançon avec du **bois des Hautes-Alpes** et des **isolants biosourcés**. Nous sommes installés depuis 2007 à L'Argentière-la-Bessée, un peu plus bas dans la vallée de la Durance.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: 'Voir nos chantiers à Briançon',
      href: '/charpentier-briancon/#chantiers',
    },
    proofs: [
      { label: 'Depuis 2007', icon: 'calendar' },
      { label: 'Entreprise RGE', icon: 'medal' },
    ],
    images: [
      'renovation-d-une-copropriete-a-briancon/7 Paysage Briançonnais.jpeg',
      'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg',
      'surelevation-en-ossature-bois-d-une-maison-a-briancon/3.1 pannes levéesP8290281.JPG',
    ],
  },
  tldr: "3B Charpente est une entreprise de charpente installée à L'Argentière-la-Bessée depuis 2007. À Briançon, nous avons repris la charpente, l'isolation et la couverture d'une copropriété, et surélevé une maison en ossature bois. Nous travaillons le mélèze et le sapin des Hautes-Alpes, des isolants biosourcés et du bois de réemploi. Entreprise qualifiée RGE.",
  layout: [
    // Section 3 — Nos chantiers à Briançon
    {
      type: 'projects',
      anchor: 'chantiers',
      kicker: 'Nos chantiers à Briançon',
      title: 'Deux chantiers **briançonnais**, en photos',
      intro:
        "Voici deux chantiers que nous avons menés à Briançon. Ils montrent deux façons de travailler sur une maison existante : reprendre sa toiture, ou l'agrandir par le haut.",
      mode: 'manual',
      label: 'brand',
      items: [
        {
          project: 'renovation-d-une-copropriete-a-briancon',
          title: "Rénovation d'une copropriété à Briançon",
          text: "Sur cette copropriété, nous avons repris la charpente, l'isolation et la couverture. Nous avons repris les fermes et recréé une dépassée de toiture : le débord qui protège la façade de la pluie et de la neige.",
        },
        {
          project: 'surelevation-en-ossature-bois-d-une-maison-a-briancon',
          title: "Surélévation en ossature bois d'une maison à Briançon",
          text: "Pour surélever cette maison, nous avons levé des murs pignons en ossature bois, puis des pannes porteuses de 14 × 30 cm, entaillées et décorées. Des panneaux trois plis en épicéa contreventent la toiture et la rendent étanche à l'air.",
        },
      ],
    },
    // Section 3 — ligne sous les cartes
    {
      type: 'cta',
      variant: 'slim',
      icon: 'mapPin',
      text: 'Dans la vallée voisine, nous avons aussi réhabilité une ancienne forge à La Salle-les-Alpes et rénové un toit en bardeaux de mélèze au Casset.',
      primary: {
        label: 'Voir nos chantiers à Serre Chevalier',
        href: '/charpentier-serre-chevalier/',
      },
    },
    // Section 4 — Le bâti briançonnais
    {
      type: 'textImage',
      kicker: 'Le bâti briançonnais',
      title: "Des toitures qui **travaillent** toute l'année",
      text: "À Briançon, une charpente travaille plus qu'en plaine. Elle porte la neige l'hiver, la couverture passe par le gel et le dégel, et le soleil d'altitude grise les bois exposés. Les débords de toit, que l'on appelle souvent dépassées en montagne, protègent les façades : nous les reprenons ou les recréons quand il le faut, comme sur la copropriété présentée plus haut.\n\nLe bâti est varié : immeubles et copropriétés en ville, maisons anciennes en pierre et en bois, chalets plus récents dans les villages autour. Chaque cas demande sa méthode. Sur une copropriété, on travaille en hauteur et on s'organise avec les copropriétaires. Dans une maison ancienne, on découvre l'état réel des bois une fois la couverture ouverte. Pour une surélévation, on vérifie d'abord ce que les murs existants peuvent porter.\n\nDans la vieille ville et autour des fortifications de Vauban, inscrites au patrimoine mondial de l'Unesco, les travaux qui changent l'aspect extérieur sont encadrés. Renseignez-vous auprès du service urbanisme de la mairie avant de lancer un projet. Nous en parlons avec vous dès l'étude.",
      images: [
        "renovation-d-une-copropriete-a-briancon/2 Recréation d'une dépassée de toiture.JPG",
      ],
      imagePosition: 'right',
    },
    // Section 5 — Nos prestations dans le Briançonnais
    {
      type: 'cards',
      variant: 'icon',
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
          text: "Le sarking : l'isolant posé en continu au-dessus des chevrons, sans perdre de place sous le toit.",
          link: {
            label: "Isolation de toiture par l'extérieur",
            href: '/isolation-toiture-sarking/',
          },
        },
        {
          title: 'Isolation des murs',
          icon: 'wall',
          text: "L'ITE, ou isolation thermique par l'extérieur, enveloppe les murs d'un isolant continu.",
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
    // Section 6 — Notre méthode
    {
      type: 'steps',
      variant: 'tabs',
      kicker: 'Notre méthode',
      title: 'De la rencontre au **levage**',
      steps: [
        {
          title: 'Premier contact',
          text: 'Vous nous appelez au 06 34 67 31 49 ou vous nous écrivez depuis le formulaire.',
        },
        { title: 'Rencontre', text: 'Nous discutons de vos besoins et de votre maison.' },
        {
          title: 'Devis',
          text: 'Nous vous remettons un devis détaillé et un calendrier estimatif.',
        },
        {
          title: 'Atelier',
          text: "Nous dessinons l'ouvrage, puis nous traçons, taillons et assemblons les pièces dans notre atelier.",
        },
        {
          title: 'Chantier',
          text: 'Nous levons et posons sur place, à Briançon ou dans les villages autour.',
        },
      ],
    },
    // Section 7 — Nos matériaux
    {
      type: 'manifesto',
      layout: 'split',
      kicker: 'Nos matériaux',
      title: 'Du bois **des Hautes-Alpes**, des isolants **biosourcés**',
      text: "Nous utilisons « principalement du mélèze et du sapin provenant des Hautes-Alpes et sciés par notre partenaire local : la Scierie Savoldelli ». Pour isoler, nous posons de la ouate de cellulose et des panneaux de fibre de bois. Avec 3B Récup', nous donnons aussi une seconde vie au bois issu de la déconstruction, en l'intégrant à nos chantiers. Notre qualification RGE ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.",
      image:
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/6.1 panneaux trois plis épicéa apparents du dessous.JPG',
      cta: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },
    // Section 8 — Communes desservies
    {
      type: 'list',
      style: 'pills',
      kicker: 'Où nous intervenons',
      title: 'Briançon et les **communes voisines**',
      text: "Depuis L'Argentière-la-Bessée, nous intervenons à Briançon et dans les communes autour :",
      items: [{ title: 'Briançon' }, { title: 'et les communes voisines' }],
    },
    {
      type: 'textImage',
      text: "Nous travaillons aussi dans la vallée de Serre Chevalier (Saint-Chaffrey, La Salle-les-Alpes, Le Monêtier-les-Bains) et dans le Pays des Écrins, autour de Vallouise et de L'Argentière-la-Bessée. Plus largement, « nous intervenons dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes ».",
      links: [
        { label: 'Charpentier à Serre Chevalier', href: '/charpentier-serre-chevalier/' },
        {
          label: 'Charpentier en Vallouise et Pays des Écrins',
          href: '/charpentier-vallouise-pays-des-ecrins/',
        },
      ],
    },
    // Section 9 — FAQ
    {
      type: 'faq',
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
    // Section 10 — Appel à l'action et coordonnées
    {
      type: 'cta',
      variant: 'band',
      title: 'Un projet à **Briançon** ?',
      text: 'Chaque projet chez 3B Charpente débute par une étude sur mesure. Parlons du vôtre.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'charpentier-briancon-q1',
      topic: 'secteurs',
      question: 'Intervenez-vous à Briançon et dans les villages autour ?',
      answer:
        "Oui. 3B Charpente est installée à L'Argentière-la-Bessée, un peu plus bas dans la vallée de la Durance. À Briançon, nous avons déjà rénové la toiture d'une copropriété et surélevé une maison en ossature bois. Nous intervenons aussi dans les communes voisines, en vallée de Serre Chevalier et dans le Pays des Écrins, et plus largement dans les Hautes-Alpes, en région PACA et en Rhône-Alpes.",
    },
    {
      key: 'charpentier-briancon-q2',
      topic: 'secteurs',
      question: "Pouvez-vous rénover la toiture d'une copropriété à Briançon ?",
      answer:
        "Oui. À Briançon, nous avons repris la charpente, l'isolation et la couverture d'une copropriété : découverture, soufflage de l'isolant, reprise des fermes, recréation d'une dépassée de toiture, puis couverture. Nous remettons un devis détaillé, utile pour présenter les travaux aux copropriétaires, et un calendrier estimatif dès la première rencontre.",
    },
    {
      key: 'charpentier-briancon-q3',
      topic: 'secteurs',
      question: 'Peut-on surélever une maison en ossature bois à Briançon ?',
      answer:
        "Oui, selon ce que la maison existante peut porter. Nous l'avons fait à Briançon : murs pignons en ossature bois, pannes porteuses de 14 × 30 cm, panneaux trois plis en épicéa et isolation en laine de bois. Le bois est plus léger qu'une maçonnerie, ce qui limite la charge ajoutée. Une surélévation demande une autorisation d'urbanisme : renseignez-vous en mairie avant de lancer le projet.",
    },
    {
      key: 'charpentier-briancon-q4',
      topic: 'secteurs',
      question: 'Êtes-vous RGE pour isoler une toiture à Briançon ?',
      answer:
        "Oui. 3B Charpente est qualifiée QUALIBAT-RGE pour l'isolation des toitures et des murs par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit et les menuiseries extérieures. Cette qualification ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Nous isolons avec des matériaux biosourcés, comme la ouate de cellulose et la fibre de bois.",
    },
    {
      key: 'charpentier-briancon-q5',
      topic: 'secteurs',
      question: 'Comment obtenir un devis de charpente à Briançon ?',
      answer:
        "Appelez-nous au 06 34 67 31 49 ou écrivez-nous depuis le formulaire de contact. Nous discutons de vos besoins lors d'une rencontre, puis nous vous proposons un devis détaillé, adapté à votre projet. Le délai des travaux dépend de la complexité et de la taille du chantier : nous vous donnons un calendrier estimatif dès la première rencontre.",
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
