import type { SeedPage } from '../../types'

/** Fiche 19 — Charpentier à Serre Chevalier (/charpentier-serre-chevalier/). */
export const page: SeedPage = {
  kind: 'page',
  slug: 'charpentier-serre-chevalier',
  title: 'Charpentier à Serre Chevalier',
  seo: {
    title: 'Charpentier à Serre Chevalier et au Monêtier | 3B Charpente',
    description:
      'Charpentier à Serre Chevalier : forge réhabilitée à La Salle-les-Alpes, toit en bardeaux de mélèze au Casset. Bois local, RGE. Demandez un devis.',
    image: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/8Chantier fini.JPG',
  },
  hero: {
    variant: 'map',
    kicker: 'Charpente · Toiture · Escaliers · Balcons',
    title: 'Charpentier à **Serre Chevalier**, de Saint-Chaffrey au Monêtier-les-Bains',
    text: 'Dans la vallée de la Guisane, nous reprenons charpentes et toitures, réhabilitons le bâti ancien et créons escaliers et balcons, en **bois des Hautes-Alpes** et **isolants biosourcés**.',
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: 'Voir nos chantiers de la vallée',
      href: '/charpentier-serre-chevalier/#chantiers',
    },
    proofs: [
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: 'Entreprise RGE', text: 'Qualibat', icon: 'medal' },
      {
        label: 'Une forge, un toit de mélèze',
        text: 'La Salle-les-Alpes, Le Casset',
        icon: 'mapPin',
      },
    ],
    images: [
      'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/8Chantier fini.JPG',
      'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/2Levage de la toiture.JPG',
      'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/9 Balcon exterieur.JPG',
    ],
  },
  tldr: "3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, intervient dans la vallée de Serre Chevalier. À La Salle-les-Alpes : une ancienne forge réhabilitée, avec charpente, toiture, deux escaliers et un balcon. Au Casset (Le Monêtier-les-Bains) : un toit en bardeaux de mélèze rénové.",
  layout: [
    // Nos chantiers dans la vallée
    {
      type: 'projects',
      anchor: 'chantiers',
      kicker: 'Nos chantiers à Serre Chevalier',
      title: 'Une **forge** et un **toit de mélèze**',
      intro:
        "Deux chantiers dans la vallée : un ancien bâtiment d'artisan réhabilité, une couverture traditionnelle en mélèze rénovée.",
      mode: 'manual',
      label: 'brand',
      items: [
        {
          project: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
          title: "Réhabilitation d'une ancienne forge à La Salle-les-Alpes",
          text: 'Charpente taillée, toiture levée, couverture posée. Dedans, deux escaliers ; dehors, un balcon.',
        },
        {
          project: 'renovation-d-un-toit-en-bardeau-meleze-au-casset',
          title: "Rénovation d'un toit en bardeaux de mélèze au Casset",
          text: 'Des bardeaux de mélèze, petites planches posées en recouvrement comme des tuiles. Avant, après : le toit retrouve son allure.',
        },
      ],
    },
    {
      type: 'cta',
      variant: 'slim',
      icon: 'mapPin',
      text: "Plus bas, à Briançon : la toiture d'une copropriété rénovée, une maison surélevée en ossature bois.",
      primary: { label: 'Voir nos chantiers à Briançon', href: '/charpentier-briancon/' },
    },
    // Le bâti de la Guisane
    {
      type: 'textImage',
      tone: 'light',
      kicker: 'Le bâti de la Guisane',
      title: 'Des villages anciens et des toits **de mélèze**',
      text: "De Briançon au Monêtier-les-Bains, la vallée mêle **maisons anciennes en pierre et en bois**, granges, anciens bâtiments d'artisans et chalets plus récents. Rénover ici, c'est reprendre une structure ancienne en gardant son caractère.",
      points: [
        "La neige charge les toits une bonne partie de l'hiver ; gel et soleil font vivre les bois exposés",
        'Le mélèze, arbre de montagne, couvre encore certains toits de bardeaux, comme au Casset',
        'Avant de toucher à une charpente ancienne, on comprend comment elle a été construite',
      ],
      images: [
        'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/1 Taille de la charpente.JPG',
      ],
      imagePosition: 'right',
    },
    {
      type: 'callout',
      kind: 'tip',
      tone: 'light',
      text: "Avant de changer l'aspect d'un toit ou d'une façade, renseignez-vous en mairie sur les règles d'urbanisme de votre commune. Nous en parlons avec vous dès l'étude.",
    },
    // Nos prestations dans la vallée
    {
      type: 'cards',
      variant: 'index',
      columns: 4,
      kicker: 'Ce que nous faisons',
      title: 'Nos **prestations** à Serre Chevalier',
      items: [
        {
          title: 'Charpente traditionnelle',
          icon: 'hammer',
          text: 'Taillée puis levée sur place, comme celle de la forge de La Salle-les-Alpes.',
          link: { label: 'Charpente traditionnelle', href: '/charpente-bois/' },
        },
        {
          title: 'Rénovation de charpente et toiture',
          icon: 'roof',
          text: 'Reprise de charpente, couvertures anciennes, lucarnes et combles.',
          link: {
            label: 'Rénovation de charpente et toiture',
            href: '/renovation-charpente-combles/',
          },
        },
        {
          title: 'Escaliers sur mesure',
          icon: 'stairs',
          text: 'Encloisonnés, quart tournants ou balancés, dessinés pour votre maison.',
          link: { label: 'Escaliers sur mesure', href: '/escalier-bois-sur-mesure/' },
        },
        {
          title: 'Balcons, terrasses et abris',
          icon: 'balcony',
          text: 'Balcons, terrasses et garde-corps en mélèze.',
          link: { label: 'Balcons, terrasses et abris', href: '/balcon-terrasse-abri-bois/' },
        },
        {
          title: 'Isolation biosourcée',
          icon: 'leaf',
          text: "Ouate de cellulose et fibre de bois, pour l'hiver comme pour l'été.",
          link: { label: 'Isolation biosourcée', href: '/isolation-biosourcee/' },
        },
        {
          title: "Isolation de toiture par l'extérieur",
          icon: 'layers',
          text: 'Le sarking : un isolant continu au-dessus des chevrons, charpente visible dedans.',
          link: {
            label: "Isolation de toiture par l'extérieur",
            href: '/isolation-toiture-sarking/',
          },
        },
        {
          title: 'Extension et surélévation bois',
          icon: 'arrowUp',
          text: 'Gagner de la place par le haut ou à côté, en ossature bois.',
          link: { label: 'Extension et surélévation bois', href: '/extension-surelevation-bois/' },
        },
        {
          title: "3B Récup'",
          icon: 'recycle',
          text: 'Déconstruction sélective et vieux bois réemployé dans nos rénovations.',
          link: { label: "3B Récup'", href: '/3b-recup/' },
        },
      ],
    },
    // Notre méthode
    {
      type: 'steps',
      variant: 'timeline',
      tone: 'light',
      kicker: 'Notre méthode',
      title: "De l'étude à la **dernière marche**",
      steps: [
        { title: 'Rencontre', text: 'Nous parlons de votre projet et de votre bâtiment.' },
        {
          title: 'Étude et devis',
          text: 'Une étude sur mesure, puis un devis détaillé et un calendrier estimatif.',
        },
        {
          title: 'Taille',
          text: 'La charpente est tracée, taillée, puis montée une première fois au sol pour vérifier chaque pièce.',
        },
        {
          title: 'Levage et finitions',
          text: 'Charpente levée, couverture posée, puis escaliers, balcons, bardages.',
          image:
            'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/6 Escalier quart tournant.JPG',
        },
      ],
    },
    // Nos matériaux
    {
      type: 'manifesto',
      layout: 'centered',
      kicker: 'Nos matériaux',
      title: 'Le bois **de nos montagnes**',
      text: 'Surtout du **mélèze et du sapin des Hautes-Alpes**, sciés par notre partenaire local, la Scierie Savoldelli.',
      items: [
        { title: 'Isoler', text: 'Ouate de cellulose et fibre de bois, des isolants biosourcés.' },
        {
          title: 'Réemployer',
          text: "Du vieux bois de déconstruction, préparé à l'atelier par 3B Récup'.",
        },
        {
          title: 'Les aides',
          text: "Notre qualification RGE ouvre l'accès aux aides publiques, sous conditions.",
        },
      ],
      image: 'ambiance/foret.png',
      cta: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },
    // Communes desservies
    {
      type: 'serviceArea',
      tone: 'cream',
      kicker: 'Où nous intervenons',
      title: 'Toute la **vallée de Serre Chevalier**',
      text: "Depuis L'Argentière-la-Bessée : La Salle-les-Alpes, Le Monêtier-les-Bains (Le Casset) et les communes voisines. Plus largement, les Hautes-Alpes, la région PACA et Rhône-Alpes.",
      sectors: [
        {
          title: 'Charpentier à Briançon',
          text: "À l'entrée de la vallée, Briançon a sa propre page.",
          link: { label: 'Nos chantiers à Briançon', href: '/charpentier-briancon/' },
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
      title: 'Vos questions sur un chantier à **Serre Chevalier**',
      faqs: [
        'charpentier-serre-chevalier-q1',
        'charpentier-serre-chevalier-q2',
        'charpentier-serre-chevalier-q3',
        'charpentier-serre-chevalier-q4',
        'charpentier-serre-chevalier-q5',
      ],
    },
    // Appel à l'action
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre projet',
      title: 'Un projet dans la **vallée** ?',
      text: 'Chaque projet débute par une étude sur mesure. Parlons du vôtre.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'charpentier-serre-chevalier-q1',
      topic: 'secteurs',
      question: 'Intervenez-vous à Serre Chevalier ?',
      answer:
        "Oui, dans toute la vallée : Saint-Chaffrey, La Salle-les-Alpes, Le Monêtier-les-Bains. Nous y avons réhabilité une ancienne forge à La Salle-les-Alpes et rénové un toit en bardeaux de mélèze au Casset. Nous travaillons aussi à Briançon et dans le Pays des Écrins, depuis L'Argentière-la-Bessée.",
    },
    {
      key: 'charpentier-serre-chevalier-q2',
      topic: 'secteurs',
      question: 'Pouvez-vous rénover un toit en bardeaux de mélèze ?',
      answer:
        'Oui. Au Casset, au Monêtier-les-Bains, nous avons rénové un toit en bardeaux de mélèze : de petites planches posées en recouvrement, comme des tuiles. Chaque toit est différent : nous commençons par une rencontre et une étude sur mesure, puis un devis détaillé.',
    },
    {
      key: 'charpentier-serre-chevalier-q3',
      topic: 'secteurs',
      question: 'Réhabilitez-vous les bâtiments anciens de la vallée ?',
      answer:
        'Oui. À La Salle-les-Alpes, nous avons réhabilité une ancienne forge : charpente taillée, toiture levée, couverture, deux escaliers et un balcon extérieur. Charpente, escaliers et ouvrages extérieurs réunis, et une isolation biosourcée si besoin.',
    },
    {
      key: 'charpentier-serre-chevalier-q4',
      topic: 'secteurs',
      question: 'Fabriquez-vous des escaliers et des balcons sur mesure ?',
      answer:
        "Oui : dans la forge de La Salle-les-Alpes, un escalier encloisonné, un quart tournant et un balcon extérieur. Nous prenons les cotes, dessinons l'escalier et proposons une esthétique ; une fois le dessin validé, il est tracé, taillé et assemblé dans notre atelier.",
    },
    {
      key: 'charpentier-serre-chevalier-q5',
      topic: 'secteurs',
      question: 'Quel bois utilisez-vous pour vos charpentes ?',
      answer:
        'Surtout du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local. Et du bois de réemploi issu de la déconstruction, préparé dans nos ateliers. Pour isoler : ouate de cellulose et panneaux de fibre de bois.',
    },
  ],
  photoAlts: [
    {
      photo: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/7Chantier fini.JPG',
      alt: "L'ancienne forge réhabilitée à La Salle-les-Alpes, chantier terminé",
    },
    {
      photo: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/8Chantier fini.JPG',
      alt: "Autre vue de l'ancienne forge réhabilitée à La Salle-les-Alpes, chantier terminé",
    },
    {
      photo: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/2Levage de la toiture.JPG',
      alt: "Levage de la toiture de l'ancienne forge à La Salle-les-Alpes, vallée de Serre Chevalier",
    },
    {
      photo: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/9 Balcon exterieur.JPG',
      alt: "Balcon extérieur de l'ancienne forge réhabilitée à La Salle-les-Alpes",
    },
    {
      photo: 'renovation-d-un-toit-en-bardeau-meleze-au-casset/après.JPG',
      alt: 'Toit en bardeaux de mélèze rénové au Casset, Le Monêtier-les-Bains (Hautes-Alpes)',
    },
    {
      photo:
        'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/1 Taille de la charpente.JPG',
      alt: "Taille des pièces de la charpente pour la réhabilitation d'une ancienne forge à La Salle-les-Alpes",
    },
    {
      photo:
        'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/6 Escalier quart tournant.JPG',
      alt: "Escalier quart tournant réalisé dans l'ancienne forge de La Salle-les-Alpes",
    },
  ],
  validationPoints: [
    {
      question:
        "Communes et villages couverts : Saint-Chaffrey (Chantemerle), La Salle-les-Alpes (Villeneuve), Le Monêtier-les-Bains (Le Casset). Faut-il en ajouter (Les Guibertes, Le Lauzet, La Grave, Villar-d'Arêne) ?",
      decision:
        'Pastilles limitées aux communes où un chantier est publié : La Salle-les-Alpes et Le Monêtier-les-Bains (Le Casset), suivies de « et les communes voisines ». Saint-Chaffrey reste seulement dans le texte de contexte (titre, FAQ) ; Chantemerle et Villeneuve ne sont pas cités ; aucune commune ajoutée.',
      priority: 'high',
    },
    {
      question:
        'Forge de La Salle-les-Alpes : nouvel usage du bâtiment, année, essences, type de couverture. Une phrase de Jean sur ce chantier serait la meilleure accroche de la page.',
      decision: 'Non précisés ; aucune citation de Jean sur la page.',
      priority: 'normal',
    },
    {
      question:
        'Toit du Casset : rénovation totale ou partielle ; bardeaux fendus ou sciés ; provenance du mélèze.',
      decision:
        'Non précisé : le texte décrit seulement ce que montrent les photos avant et après.',
      priority: 'normal',
    },
    {
      question:
        "Taille et assemblage à blanc (étape 03 de la méthode) : est-ce la pratique habituelle de 3B, et pas seulement sur les chantiers photographiés (Prelles, L'Argentière-la-Bessée) ?",
      decision: "Étape 03 gardée telle qu'écrite dans la fiche.",
      priority: 'normal',
    },
    {
      question:
        'Horaires (maquette « lundi au vendredi, 7 h 30 – 17 h » ou PagesJaunes « vendredi 7 h 30 – 12 h »), coordonnées GPS et fiche Google à revendiquer.',
      decision:
        "Horaires du réglage « Entreprise » (lundi au jeudi 7 h 30 – 17 h, vendredi 7 h 30 – 12 h) ; GPS par géocodage de l'adresse ; lien Google absent, seule Facebook dans sameAs.",
      priority: 'normal',
    },
    {
      question:
        "Pastille « Entreprise RGE » : vérifier le SIRET actif (00016 dans les mentions légales, 00024 dans l'annuaire RGE).",
      decision: 'Pastille gardée ; les mentions légales affichent le SIRET 494 482 714 00016.',
      priority: 'normal',
    },
    {
      question:
        "Nom du secteur : « Serre Chevalier » sans trait d'union (la station dit « Serre Chevalier Vallée »).",
      decision:
        "« Serre Chevalier » gardé dans le H1 et l'adresse, comme prévu dans le plan du site.",
      priority: 'low',
    },
    {
      question:
        'Scierie Savoldelli : la fiche la nomme deux fois sur la page (section « Nos matériaux » et FAQ « Quel bois utilisez-vous »).',
      decision:
        'Nommée une seule fois (décision par défaut), dans la section « Nos matériaux » avec la formulation de la FAQ validée ; la réponse de la FAQ dit seulement « sciés par notre partenaire local ».',
      priority: 'normal',
    },
    {
      question:
        "Section « Nos matériaux » : aucune photo de chantier prévue, seulement une photo d'ambiance.",
      decision:
        "Photo d'ambiance « forêt » de la maquette en fond (une seule sur la page), à remplacer par une vraie photo (grumes, atelier) dès qu'elle existe.",
      priority: 'low',
    },
    {
      question:
        "Photos à demander : d'autres chantiers à Saint-Chaffrey, Chantemerle, Villeneuve ou au Monêtier ; le toit du Casset en cours de rénovation ; la forge avant les travaux.",
      decision: 'Page publiée avec les photos existantes de la forge et du toit du Casset.',
      priority: 'low',
    },
  ],
}
