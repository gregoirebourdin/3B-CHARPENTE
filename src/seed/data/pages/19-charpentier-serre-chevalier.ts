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
    variant: 'collage',
    kicker: 'Charpente · Toiture · Escaliers · Balcons',
    title: 'Charpentier à **Serre Chevalier**, de Saint-Chaffrey au Monêtier-les-Bains',
    text: "Dans la vallée de la Guisane, 3B Charpente reprend les charpentes et les toitures, réhabilite le bâti ancien et crée des escaliers et des balcons en bois. Nous sommes installés depuis 2007 à L'Argentière-la-Bessée et nous travaillons le **bois des Hautes-Alpes** et des **isolants biosourcés**.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: 'Voir nos chantiers de la vallée',
      href: '/charpentier-serre-chevalier/#chantiers',
    },
    proofs: [
      { label: 'Depuis 2007', icon: 'calendar' },
      { label: 'Entreprise RGE', icon: 'medal' },
    ],
    images: [
      'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/8Chantier fini.JPG',
      'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/2Levage de la toiture.JPG',
      'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/9 Balcon exterieur.JPG',
    ],
  },
  tldr: "3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007, intervient dans la vallée de Serre Chevalier. À La Salle-les-Alpes, nous avons réhabilité une ancienne forge : charpente, toiture, deux escaliers et un balcon. Au Casset, sur la commune du Monêtier-les-Bains, nous avons rénové un toit en bardeaux de mélèze. Bois des Hautes-Alpes, isolants biosourcés.",
  layout: [
    // Section 3 — Nos chantiers dans la vallée
    {
      type: 'projects',
      anchor: 'chantiers',
      kicker: 'Nos chantiers à Serre Chevalier',
      title: 'Une **forge** et un **toit de mélèze**',
      intro:
        "Deux chantiers dans la vallée : la réhabilitation d'un ancien bâtiment d'artisan, et la rénovation d'une couverture traditionnelle en mélèze.",
      mode: 'manual',
      label: 'brand',
      items: [
        {
          project: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
          title: "Réhabilitation d'une ancienne forge à La Salle-les-Alpes",
          text: "Pour réhabiliter cette ancienne forge, nous avons taillé la charpente, levé la toiture et posé la couverture. À l'intérieur, nous avons réalisé deux escaliers. Un balcon extérieur complète le chantier.",
        },
        {
          project: 'renovation-d-un-toit-en-bardeau-meleze-au-casset',
          title: "Rénovation d'un toit en bardeaux de mélèze au Casset",
          text: "Au Casset, hameau du Monêtier-les-Bains, nous avons rénové un toit couvert de bardeaux de mélèze : de petites planches de bois posées en recouvrement, comme des tuiles. Les photos avant et après montrent le toit d'origine et le toit rénové.",
        },
      ],
    },
    // Section 3 — ligne sous les cartes
    {
      type: 'cta',
      variant: 'slim',
      icon: 'mapPin',
      text: "Plus bas dans la vallée, à Briançon, nous avons rénové la toiture d'une copropriété et surélevé une maison en ossature bois.",
      primary: { label: 'Voir nos chantiers à Briançon', href: '/charpentier-briancon/' },
    },
    // Section 4 — Le bâti de la Guisane
    {
      type: 'textImage',
      kicker: 'Le bâti de la Guisane',
      title: 'Des villages anciens et des toits **de mélèze**',
      text: "La vallée de Serre Chevalier suit la Guisane, de Briançon jusqu'au Monêtier-les-Bains. Ses villages mêlent maisons anciennes en pierre et en bois, granges, anciens bâtiments d'artisans comme la forge de La Salle-les-Alpes, et chalets plus récents autour de la station. Rénover ici, c'est souvent reprendre une structure ancienne en gardant ce qui fait son caractère.\n\nL'altitude compte. La neige peut charger les toitures une bonne partie de l'hiver, et les bois exposés vivent avec le gel et le soleil. Le mélèze, arbre des forêts de montagne, est une essence traditionnelle des toits en bardeaux que l'on voit encore dans certains hameaux, comme au Casset.\n\nRéhabiliter un bâtiment ancien demande de comprendre comment il a été construit avant de toucher à sa charpente. Chaque projet commence donc par une étude sur mesure. Avant de changer l'aspect d'un toit ou d'une façade, renseignez-vous aussi en mairie sur les règles d'urbanisme de votre commune.",
      images: [
        'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/1 Taille de la charpente.JPG',
      ],
      imagePosition: 'right',
    },
    // Section 5 — Nos prestations dans la vallée
    {
      type: 'cards',
      variant: 'icon',
      columns: 3,
      kicker: 'Ce que nous faisons',
      title: 'Nos **prestations** à Serre Chevalier',
      items: [
        {
          title: 'Charpente traditionnelle',
          icon: 'hammer',
          text: 'Charpentes taillées puis levées sur place, comme celle de la forge de La Salle-les-Alpes.',
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
          text: 'Escaliers encloisonnés, quart tournants ou balancés, dessinés pour votre maison.',
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
          text: "Ouate de cellulose et fibre de bois, pour un confort d'hiver comme d'été.",
          link: { label: 'Isolation biosourcée', href: '/isolation-biosourcee/' },
        },
        {
          title: "Isolation de toiture par l'extérieur",
          icon: 'layers',
          text: "Le sarking : un isolant continu posé au-dessus des chevrons, qui laisse la charpente visible à l'intérieur.",
          link: {
            label: "Isolation de toiture par l'extérieur",
            href: '/isolation-toiture-sarking/',
          },
        },
        {
          title: 'Extension et surélévation bois',
          icon: 'arrowUp',
          text: 'Gagner de la place par le haut ou à côté, avec une structure en ossature bois.',
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
    // Section 6 — Notre méthode
    {
      type: 'steps',
      variant: 'timeline',
      kicker: 'Notre méthode',
      title: "De l'étude à la **dernière marche**",
      steps: [
        { title: 'Rencontre', text: 'Nous discutons de votre projet et de votre bâtiment.' },
        {
          title: 'Étude et devis',
          text: 'Une étude sur mesure, puis un devis détaillé et un calendrier estimatif.',
        },
        {
          title: 'Taille',
          text: 'La charpente est tracée et taillée, puis assemblée à blanc : montée une première fois au sol pour vérifier chaque pièce.',
        },
        {
          title: 'Levage et finitions',
          text: 'Nous levons la charpente, posons la couverture et réalisons les ouvrages en bois : escaliers, balcons, bardages.',
          image:
            'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/6 Escalier quart tournant.JPG',
        },
      ],
    },
    // Section 7 — Nos matériaux
    {
      type: 'manifesto',
      layout: 'centered',
      kicker: 'Nos matériaux',
      title: 'Le bois **de nos montagnes**',
      text: "Notre bois vient des Hautes-Alpes : « principalement du mélèze et du sapin provenant des Hautes-Alpes et sciés par notre partenaire local : la Scierie Savoldelli ». Nous isolons avec des matériaux biosourcés, la ouate de cellulose et la fibre de bois. Nous intégrons aussi à nos chantiers du vieux bois issu de la déconstruction, préparé dans nos ateliers par 3B Récup'. Notre qualification RGE ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.",
      image: 'ambiance/foret.png',
      cta: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },
    // Section 8 — Communes desservies
    {
      type: 'list',
      style: 'pills',
      kicker: 'Où nous intervenons',
      title: 'Toute la **vallée de Serre Chevalier**',
      text: "Depuis L'Argentière-la-Bessée, nous intervenons dans la vallée de Serre Chevalier :",
      items: [
        { title: 'La Salle-les-Alpes' },
        { title: 'Le Monêtier-les-Bains (Le Casset)' },
        { title: 'et les communes voisines' },
      ],
    },
    {
      type: 'textImage',
      text: "À l'entrée de la vallée, Briançon a sa propre page. Nous travaillons aussi dans le Pays des Écrins, autour de Vallouise et de L'Argentière-la-Bessée. Plus largement, « nous intervenons dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes ».",
      links: [
        { label: 'Charpentier à Briançon', href: '/charpentier-briancon/' },
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
      title: 'Vos questions sur un chantier à **Serre Chevalier**',
      faqs: [
        'charpentier-serre-chevalier-q1',
        'charpentier-serre-chevalier-q2',
        'charpentier-serre-chevalier-q3',
        'charpentier-serre-chevalier-q4',
        'charpentier-serre-chevalier-q5',
      ],
    },
    // Section 10 — Appel à l'action et coordonnées
    {
      type: 'cta',
      variant: 'band',
      title: 'Un projet dans la **vallée** ?',
      text: 'Chaque projet chez 3B Charpente débute par une étude sur mesure. Parlons du vôtre.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'charpentier-serre-chevalier-q1',
      topic: 'secteurs',
      question: 'Intervenez-vous à Serre Chevalier ?',
      answer:
        "Oui. 3B Charpente est installée à L'Argentière-la-Bessée et intervient dans la vallée de Serre Chevalier : Saint-Chaffrey, La Salle-les-Alpes et Le Monêtier-les-Bains. Nous y avons réhabilité une ancienne forge à La Salle-les-Alpes et rénové un toit en bardeaux de mélèze au Casset. Nous travaillons aussi à Briançon et dans le Pays des Écrins.",
    },
    {
      key: 'charpentier-serre-chevalier-q2',
      topic: 'secteurs',
      question: 'Pouvez-vous rénover un toit en bardeaux de mélèze ?',
      answer:
        'Oui. Au Casset, sur la commune du Monêtier-les-Bains, nous avons rénové un toit couvert de bardeaux de mélèze. Les bardeaux sont de petites planches de bois posées en recouvrement, comme des tuiles. Chaque toit est différent : nous commençons par une rencontre et une étude sur mesure, puis nous vous remettons un devis détaillé.',
    },
    {
      key: 'charpentier-serre-chevalier-q3',
      topic: 'secteurs',
      question: 'Réhabilitez-vous les bâtiments anciens de la vallée ?',
      answer:
        'Oui. À La Salle-les-Alpes, nous avons réhabilité une ancienne forge : taille de la charpente, levage de la toiture, couverture, deux escaliers et un balcon extérieur. Sur ce type de bâtiment, nous réunissons la charpente, les escaliers et les ouvrages extérieurs. Nous pouvons aussi isoler avec des matériaux biosourcés, comme la ouate de cellulose et la fibre de bois.',
    },
    {
      key: 'charpentier-serre-chevalier-q4',
      topic: 'secteurs',
      question: 'Fabriquez-vous des escaliers et des balcons sur mesure ?',
      answer:
        "Oui. Dans l'ancienne forge de La Salle-les-Alpes, nous avons réalisé un escalier encloisonné, un escalier quart tournant et un balcon extérieur. Pour nos escaliers, nous prenons les cotes, nous dessinons l'ouvrage et proposons une esthétique. Une fois le dessin validé, nous le traçons, le taillons et l'assemblons dans notre atelier.",
    },
    {
      key: 'charpentier-serre-chevalier-q5',
      topic: 'secteurs',
      question: 'Quel bois utilisez-vous pour vos charpentes ?',
      answer:
        'Nous utilisons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local. Nous intégrons aussi à nos chantiers du bois de réemploi issu de la déconstruction, préparé dans nos ateliers. Pour isoler, nous choisissons des matériaux biosourcés : ouate de cellulose et panneaux de fibre de bois.',
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
