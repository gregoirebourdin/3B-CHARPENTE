import type { SeedPage } from '../../types'

/** Fiche 12 · Diagnostic PEMD et gisement bois · /3b-recup/diagnostic-pemd/ (variante A) */

const DEPOSE =
  "refection-d-une-charpente-a-l-argentiere-la-bessee/dépose de l'ancienne charpente.JPG"
const PIED_ARBALETRIER = "refection-d-une-toiture-a-ronatlon/pied d'arbalétrier.JPG"
const EXISTANT = 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/01Existant.JPG'

export const page: SeedPage = {
  kind: 'page',
  slug: 'diagnostic-pemd',
  parent: '3b-recup',
  title: 'Diagnostic PEMD et gisement bois',
  seo: {
    title: 'Diagnostic PEMD et ressources, Hautes-Alpes | 3B Charpente',
    description:
      "Diagnostic PEMD : qui est concerné, diagnostic ressources sous 1 000 m², expertise du bois réemployable par 3B Récup', charpentier depuis 2007. Parlons-en.",
    image: DEPOSE,
  },
  hero: {
    variant: 'photo',
    kicker: "3B Récup' · Diagnostic et gisement",
    title: 'Diagnostic PEMD et **gisement de bois réemployable** dans les Hautes-Alpes',
    text: 'Avant de démolir ou de rénover, mieux vaut savoir **ce que contient un bâtiment**. Nos charpentiers y repèrent **le bois réemployable** : charpente, solivage, ossature, planchers, bardages.',
    primaryCta: { label: 'Faire évaluer mon bâtiment', href: '/contact/' },
    secondaryCta: {
      label: 'Suis-je concerné ?',
      href: '/3b-recup/diagnostic-pemd/#qui-est-concerne',
    },
    proofs: [
      { label: 'Charpentiers depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: 'Expertise du gisement bois', text: 'état, quantité, usages', icon: 'search' },
      { label: 'En amont du PEMD', text: 'ou en appui', icon: 'document' },
    ],
    images: [DEPOSE],
    caption: "Dépose de l'ancienne charpente avant sa réfection, à L'Argentière-la-Bessée.",
    photoTag: "L'Argentière-la-Bessée",
    sheet: [
      { label: 'Diagnostic PEMD', value: 'Obligatoire au-delà de 1 000 m²' },
      { label: 'Diagnostic ressources', value: 'Volontaire, pour les plus petits' },
      { label: 'Notre rôle', value: 'Le gisement bois' },
    ],
  },
  tldr: "Le diagnostic PEMD (produits, équipements, matériaux et déchets) est obligatoire avant de démolir ou de rénover fortement un bâtiment de plus de 1 000 m², ou ayant accueilli des substances dangereuses. En dessous : le diagnostic ressources. 3B Récup', à L'Argentière-la-Bessée, évalue le bois réemployable en amont ou en appui.",
  layout: [
    // Qu'est-ce que le diagnostic PEMD ?
    {
      type: 'list',
      style: 'definitions',
      kicker: 'Définition',
      title: 'Le diagnostic PEMD, **en clair**',
      text: 'PEMD : « produits, équipements, matériaux et déchets ». Un repérage obligatoire avant certains travaux de démolition ou de rénovation significative.',
      items: [
        {
          title: 'Le diagnostic',
          text: 'Il recense ce que contient le bâtiment : ce qui sera réemployé, valorisé ou devra être éliminé.',
        },
        {
          title: 'Les textes',
          text: "Les décrets n° 2021-821 et n° 2021-822 du 25 juin 2021, les articles L. 126-34 et R. 126-12 du Code de la construction et de l'habitation.",
        },
        {
          title: 'Le récolement',
          text: "Le bilan après travaux : ce que sont réellement devenus les matériaux. Son formulaire est exigé pour les demandes d'autorisation déposées après le 1er juillet 2023.",
        },
      ],
    },
    {
      type: 'figures',
      tone: 'light',
      items: [
        {
          value: '1 000',
          unit: 'm²',
          label: 'de surface de plancher cumulée : au-delà, le diagnostic est obligatoire',
        },
        { value: '2021', label: 'les deux décrets du 25 juin qui encadrent le diagnostic' },
        {
          value: '2023',
          label: 'le récolement exigé pour les demandes déposées après le 1er juillet',
        },
      ],
    },
    // Qui est concerné ?
    {
      type: 'list',
      style: 'checks',
      anchor: 'qui-est-concerne',
      tone: 'light',
      kicker: 'Obligations',
      title: 'Qui doit faire **un diagnostic PEMD** ?',
      text: 'Il est réalisé par un diagnostiqueur qui justifie de ses compétences et de son assurance.\n\nUn doute sur la « rénovation significative » de votre projet ? Demandez à votre architecte ou à votre mairie avant de déposer votre demande.',
      items: [
        {
          title: 'Au-delà de 1 000 m²',
          text: 'Les bâtiments dont la surface de plancher cumulée dépasse 1 000 m², avant démolition ou rénovation significative.',
        },
        {
          title: 'Les bâtiments à risque',
          text: 'Ceux qui ont accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses, même en dessous de 1 000 m².',
        },
      ],
    },
    {
      type: 'callout',
      kind: 'tip',
      tone: 'light',
      title: "Propriétaire d'une grange ?",
      text: "Sous 1 000 m², le seuil de surface n'est pas atteint. Mais si elle a accueilli une activité agricole avec des substances classées dangereuses, le diagnostic PEMD peut s'imposer. Dans tous les cas, un diagnostic ressources vous dit ce qui mérite d'être gardé.",
      link: { label: 'Rénover une charpente existante', href: '/renovation-charpente-combles/' },
    },
    // Moins de 1 000 m² : le diagnostic ressources
    {
      type: 'list',
      style: 'numbered',
      kicker: 'Petits bâtiments',
      title: 'Le diagnostic ressources, **pour les bâtiments plus modestes**',
      text: 'Sous 1 000 m², un **diagnostic ressources** repère, de façon volontaire, les matériaux réemployables. Un outil, pas une obligation : la démarche la plus réaliste pour une maison, une grange, un chalet ou un petit bâtiment communal.\n\nIl répond à trois questions. Pour le bois, les réponses relèvent de notre métier.',
      items: [
        { title: "Qu'y a-t-il dans ce bâtiment qui puisse resservir ?" },
        { title: 'Dans quel état, et en quelle quantité ?' },
        { title: "Comment le déposer sans l'abîmer, et pour en faire quoi ?" },
      ],
    },
    // Ce que 3B Récup' apporte
    {
      type: 'manifesto',
      layout: 'split',
      kicker: 'Notre rôle',
      title: "L'œil du charpentier **sur votre gisement bois**",
      text: "Le **gisement**, c'est l'ensemble des matériaux réemployables d'un bâtiment, comme le gisement d'une carrière. Pour un charpentier, c'est d'abord le bois.\n\nNous en faisons l'expertise, **en amont ou en appui du diagnostic PEMD**. Sous 1 000 m², nous proposons un diagnostic ressources centré sur le bois.",
      items: [
        {
          title: 'Repérer',
          text: "Charpente, solivage, ossature, planchers, bardages, panneaux d'habillage.",
        },
        { title: 'Évaluer', text: 'Leur état et leur potentiel de réemploi.' },
        { title: 'Déposer', text: 'Comment les démonter en préservant les pièces.' },
        { title: 'Proposer', text: "Ce qu'ils peuvent devenir dans un nouveau projet." },
      ],
      emphasis:
        'Charpentiers de métier, nous savons lire une structure : comment elle a été taillée, assemblée, chargée.',
      image: PIED_ARBALETRIER,
    },
    // Le livrable
    {
      type: 'list',
      style: 'checks',
      kicker: 'Ce que vous obtenez',
      title: 'Un état des lieux **utile pour la suite**',
      text: 'Un document qui décrit le gisement bois de votre bâtiment.\n\nIl nourrit le diagnostic PEMD du diagnostiqueur, ou sert de base à la feuille de route de la déconstruction : ce qui sera déposé, dans quel ordre, pour devenir quoi.',
      items: [
        { text: 'Les éléments en bois repérés' },
        { text: 'Leur état et leur potentiel de réemploi' },
        { text: 'Les conditions de leur dépose' },
      ],
    },
    // Pour qui
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      tone: 'light',
      kicker: 'Pour qui',
      title: "Maîtres d'ouvrage, architectes **ou particuliers**",
      asideImage: EXISTANT,
      items: [
        {
          title: 'Professionnels',
          icon: 'ruler',
          text: 'Diagnostic PEMD à prévoir, projet de réemploi ? Associez-nous dès la faisabilité : le gisement se repère avant de caler la démolition, pas après.',
        },
        {
          title: 'Particuliers',
          icon: 'house',
          text: "Une grange achetée, un chalet à rénover ? Un diagnostic ressources vous dit ce qui mérite d'être gardé : poutres, planchers, bardage.",
        },
      ],
    },
    // Et après le diagnostic ?
    {
      type: 'steps',
      variant: 'tabs',
      isHowTo: true,
      kicker: 'La suite',
      title: 'Du diagnostic **à la repose**',
      intro: "Le diagnostic est la première des cinq étapes de la méthode 3B Récup'.",
      steps: [
        { title: 'Diagnostic', text: 'Connaître le gisement (vous êtes ici).' },
        {
          title: 'Stratégie',
          text: "Une feuille de route détaillée, qui préserve l'intégrité et la valeur des matériaux réutilisables.",
        },
        {
          title: 'Intervention',
          text: 'Nos charpentiers déposent les matériaux sur site.\n\n[La déconstruction sélective](/3b-recup/deconstruction-selective/)',
        },
        {
          title: 'Transformation',
          text: 'Tri, nettoyage et usinage dans nos ateliers.\n\n[Le bois de réemploi](/3b-recup/bois-de-reemploi/)',
        },
        { title: 'Repose', text: "Notre système constructif s'adapte aux matériaux de réemploi." },
      ],
      cta: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },
    // FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: 'Diagnostic PEMD : **vos questions**',
      faqs: [
        'diagnostic-pemd-q1',
        'diagnostic-pemd-q2',
        'diagnostic-pemd-q3',
        'diagnostic-pemd-q4',
        'diagnostic-pemd-q5',
        'diagnostic-pemd-q6',
      ],
    },
    // Voir aussi
    {
      type: 'list',
      style: 'pills',
      kicker: 'Voir aussi',
      items: [
        {
          title: 'Notre guide du réemploi du bois',
          link: {
            label: 'notre guide du réemploi du bois',
            href: '/conseils/reemploi-bois-construction/',
          },
        },
        {
          title: "La dépose d'une ancienne charpente à L'Argentière-la-Bessée",
          link: {
            label: "la dépose d'une ancienne charpente à L'Argentière-la-Bessée",
            href: '/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/',
          },
        },
      ],
    },
    // Appel à l'action
    {
      type: 'cta',
      variant: 'card',
      badge: '3B Récup’',
      kicker: 'Un bâtiment à évaluer ?',
      title: 'Faites le point sur **votre gisement bois**',
      text: 'Dites-nous où se trouve le bâtiment, sa surface approximative et ce que vous projetez : nous vous proposons une première rencontre sur place.',
      primary: { label: 'Faire évaluer mon bâtiment', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'diagnostic-pemd-q1',
      topic: 'recup',
      question: "Qu'est-ce que le diagnostic PEMD ?",
      answer:
        "Un repérage des produits, équipements, matériaux et déchets d'un bâtiment, avant certains travaux de démolition ou de rénovation significative : ce qui pourra être réemployé, valorisé ou éliminé. Il est encadré par les décrets n° 2021-821 et n° 2021-822 du 25 juin 2021 et par le Code de la construction et de l'habitation.",
    },
    {
      key: 'diagnostic-pemd-q2',
      topic: 'recup',
      question: 'Quand le diagnostic PEMD est-il obligatoire ?',
      answer:
        "Avant la démolition ou la rénovation significative d'un bâtiment de plus de 1 000 m² de surface de plancher cumulée, ou ayant accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. Pour les demandes déposées après le 1er juillet 2023, un formulaire de récolement est en plus exigé.",
    },
    {
      key: 'diagnostic-pemd-q3',
      topic: 'recup',
      question: "Qu'est-ce qu'un diagnostic ressources ?",
      answer:
        "Un repérage volontaire des matériaux réemployables d'un bâtiment, souvent sous 1 000 m². Il n'est pas imposé, mais c'est la démarche la plus réaliste pour une maison, une grange ou un chalet. Chez 3B Récup', il porte sur le bois : ce qui peut resservir, dans quel état, pour quel usage.",
    },
    {
      key: 'diagnostic-pemd-q4',
      topic: 'recup',
      question: 'Ma grange est-elle concernée par le diagnostic PEMD ?',
      answer:
        "Pas pour sa surface si elle fait moins de 1 000 m². Mais si elle a accueilli une activité agricole avec des substances classées dangereuses, le diagnostic PEMD peut s'imposer avant sa démolition ou sa rénovation significative. En cas de doute, renseignez-vous avant de déposer votre demande d'autorisation.",
    },
    {
      key: 'diagnostic-pemd-q5',
      topic: 'recup',
      question: "3B Récup' réalise-t-il le diagnostic PEMD ?",
      answer:
        "Nous intervenons en amont ou en appui du diagnostic PEMD, avec l'expertise du gisement bois : repérer le bois, évaluer son état et son potentiel, préparer sa dépose. Sous 1 000 m², nous proposons un diagnostic ressources centré sur le bois. Nos charpentiers peuvent ensuite le déposer, le transformer et le reposer.",
    },
    {
      key: 'diagnostic-pemd-q6',
      topic: 'recup',
      question: "Qu'est-ce que le formulaire de récolement ?",
      answer:
        "Le bilan après travaux : il rend compte de ce que sont réellement devenus les produits, équipements, matériaux et déchets repérés par le diagnostic PEMD. Il est exigé pour les demandes d'autorisation déposées après le 1er juillet 2023. Une déconstruction sélective, qui trie au fur et à mesure, aide à le remplir.",
    },
  ],
  validationPoints: [
    {
      question:
        'Rôle de 3B dans le diagnostic PEMD (point bloquant) : 3B réalise-t-il lui-même le diagnostic PEMD réglementaire ? Si oui, avec quelle attestation de compétences et quelle assurance ?',
      decision:
        "Variante A publiée partout (En bref, section « Notre rôle », FAQ « 3B Récup' réalise-t-il le diagnostic PEMD ? ») : expertise du gisement bois en amont ou en appui du diagnostic PEMD, diagnostic ressources sous 1 000 m². La variante B (3B diagnostiqueur PEMD, avec justificatifs affichés) est rédigée dans la fiche 12 et reste disponible.",
      priority: 'high',
    },
    {
      question:
        "Phrase « Il concerne donc d'abord celui qui commande les travaux, le maître d'ouvrage : collectivité, bailleur, entreprise, propriétaire d'un grand bâtiment » (section « Qui est concerné ? ») : à faire confirmer par un diagnostiqueur ou sur le texte officiel.",
      decision: 'Phrase retirée en attendant la confirmation.',
      priority: 'high',
    },
    {
      question:
        "Relecture réglementaire : faire relire les sections « Définition » et « Qui est concerné ? » et les FAQ 1, 2, 4 et 6 par un diagnostiqueur PEMD ou au regard du Cerfa de récolement et de la note de la SPREC (notamment la phrase sur les compétences et l'assurance du diagnostiqueur et la formule « réemployé, valorisé ou éliminé »).",
      decision: 'Textes publiés tels que rédigés dans la fiche, en attendant la relecture.',
      priority: 'high',
    },
    {
      question:
        "Diagnostic ressources : 3B le propose-t-il déjà ? Sous quel nom ? Se limite-t-il au bois ou couvre-t-il aussi la couverture et l'isolation que nos charpentiers savent déposer ?",
      decision:
        'Publié comme dans la fiche (variante A) : « diagnostic ressources centré sur le bois et sur les éléments que nos charpentiers savent déposer ».',
      priority: 'normal',
    },
    {
      question:
        "Livrable : forme exacte (rapport écrit, tableau d'inventaire, photos, plans annotés, estimation des quantités ?), ce qui est remis au maître d'ouvrage ou au diagnostiqueur ; un exemple anonymisé peut-il être montré ?",
      decision:
        'Seule la description générale est publiée (« un document qui décrit le gisement bois de votre bâtiment… »), sans format ni contenu détaillé.',
      priority: 'normal',
    },
    {
      question:
        "Ambition PRECI : confirmer le message « associez-nous dès l'étude de faisabilité » (repris de la fiche PRECI).",
      decision: 'Message conservé (carte « Professionnels »).',
      priority: 'low',
    },
    {
      question:
        'Photos : prévoir une séance photo de repérage sur un vrai bâtiment (charpentier relevant une charpente ancienne, extrait anonymisé de livrable, grange avant déconstruction).',
      decision:
        "Héros illustré provisoirement par « dépose de l'ancienne charpente » (L'Argentière-la-Bessée) ; la photo « releve-gisement-bois-charpente » n'existe pas encore.",
      priority: 'low',
    },
    {
      question:
        'Lien « des charpentiers formés chez les Compagnons du Devoir » vers /a-propos/ (section « Notre rôle ») : la formulation au pluriel est-elle exacte ?',
      decision:
        'Lien non ajouté : seul le fondateur est présenté comme formé chez les Compagnons du Devoir.',
      priority: 'low',
    },
    {
      question:
        "Idées d'actions : identifier un ou deux diagnostiqueurs PEMD du secteur avec qui travailler ; publier en phase 2 un exemple réel et anonymisé de gisement bois relevé.",
      decision: "Rien n'est publié ; aucun diagnostiqueur n'est cité sans accord écrit.",
      priority: 'low',
    },
  ],
  photoAlts: [
    {
      photo: DEPOSE,
      alt: "Dépose de l'ancienne charpente d'une maison avant sa réfection par 3B Charpente à L'Argentière-la-Bessée",
      caption: "Dépose de l'ancienne charpente avant sa réfection, à L'Argentière-la-Bessée.",
    },
    {
      photo: PIED_ARBALETRIER,
      alt: "Pied d'arbalétrier d'une charpente en vieux bois, réfection d'une toiture par 3B Charpente",
    },
  ],
}
