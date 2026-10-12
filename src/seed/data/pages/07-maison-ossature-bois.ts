import type { SeedService } from '../../types'

/** Fiche 07 : 3b-charpente-kit/docs/pages/07-maison-ossature-bois.md */

const LYON = 'maison-a-ossature-bois-dans-les-monts-du-lyonnais'
const HERO = `${LYON}/Levage des murs à ossature bois et de la charpente apparente.jpg`
const DEPART = `${LYON}/départ imminent!.JPG`
const SOLIVAGE = `${LYON}/Levage du solivage sur poteaux.jpg`
const FIBRE = `${LYON}/Fibre de bois sur l'ossature bois.jpg`
const SOLEIL_COUCHANT = `${LYON}/charpente apparent et soleil couchant...jpg`
const BARDAGE_DOUGLAS = `${LYON}/Bardage en douglas.jpg`
const CHARPENTE_SOLIVAGE = `${LYON}/charpente et solivage apparents.jpg`
const SUPPORT_PIERRES = `${LYON}/support maçonné en pierre récupérées.jpg`
const BRIANCON = 'surelevation-en-ossature-bois-d-une-maison-a-briancon'
const TROIS_PLIS = `${BRIANCON}/5.1panneau trois plis épicéa pour le contreventement et l'étanchéité à l'air de la toiture.JPG`
const LAINE_DE_BOIS = `${BRIANCON}/8.1 remplissage en laine de bois.JPG`

export const service: SeedService = {
  kind: 'service',
  slug: 'maison-ossature-bois',
  title: 'Maison ossature bois',
  menuLabel: 'Maison ossature bois',
  shortLabel: 'Maison ossature bois',
  filterKey: 'ossature-bois',
  order: 6,
  icon: 'house',
  cardText: 'Une maison neuve sur mesure en ossature bois, isolée en biosourcé.',
  cardLinkLabel: 'Construire en bois',
  image: HERO,
  schema: {
    serviceType: 'Construction bois',
    description:
      "Construction neuve en ossature bois dans les Hautes-Alpes : murs à ossature, solivage, charpente, isolation biosourcée en ouate de cellulose et fibre de bois, isolation de toiture par l'extérieur de type sarking, couverture et bardage, avec du mélèze et du sapin des Hautes-Alpes.",
  },

  seo: {
    title: 'Maison ossature bois dans les Hautes-Alpes | 3B Charpente',
    description:
      'Maison ossature bois dans les Hautes-Alpes : bois local, isolants biosourcés, toiture en sarking. Charpentiers depuis 2007. Demandez votre devis.',
    image: HERO,
  },

  hero: {
    variant: 'photo',
    kicker: 'Construction neuve et maison ossature bois',
    title: 'Maison **ossature bois** dans les **Hautes-Alpes**',
    text: "Un habitat **personnalisé** et **écologiquement performant** : ossature bois, isolants biosourcés, toiture isolée par l'extérieur. Préparée **dans notre atelier**, en **bois des Hautes-Alpes**, puis levée sur votre terrain.",
    primaryCta: { label: 'Parler de mon projet', href: '/contact/' },
    secondaryCta: { label: 'Voir un chantier complet', href: '/maison-ossature-bois/#etapes' },
    proofs: [
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: 'Isolants biosourcés', text: 'ouate de cellulose, fibre de bois', icon: 'leaf' },
      { label: "Préparée à l'atelier", text: 'puis levée sur place', icon: 'saw' },
    ],
    images: [HERO],
    caption: 'Levage des murs à ossature bois et de la charpente apparente, monts du Lyonnais.',
    photoTag: 'Monts du Lyonnais',
    sheet: [
      { label: 'Structure', value: 'Ossature bois, charpente apparente' },
      { label: 'Isolants', value: 'Ouate de cellulose, fibre de bois' },
      { label: 'Bois', value: 'Mélèze et sapin des Hautes-Alpes' },
    ],
  },

  tldr: "3B Charpente construit des maisons à ossature bois dans les Hautes-Alpes et au-delà : murs, solivage, charpente, isolation biosourcée, couverture et bardage. Mélèze et sapin des Hautes-Alpes, ouate de cellulose, fibre de bois, toiture isolée par l'extérieur (sarking). Charpentier à L'Argentière-la-Bessée depuis 2007.",

  layout: [
    // Qu'est-ce qu'une maison à ossature bois ?
    {
      type: 'list',
      style: 'definitions',
      tone: 'light',
      kicker: 'Le principe',
      title: "Qu'est-ce qu'une **maison à ossature bois** ?",
      text: "Les murs sont **une trame de montants et de traverses en bois**, rigidifiée par des panneaux. L'isolant se loge dans son épaisseur. Le mur est fermé dedans, habillé dehors d'un bardage ou d'un enduit.",
      image: CHARPENTE_SOLIVAGE,
      caption: 'Charpente et solivage apparents, maison des monts du Lyonnais.',
      items: [
        {
          title: 'Contreventement',
          text: 'Les panneaux qui rigidifient la structure contre le vent.',
        },
        {
          title: 'Pare-pluie',
          text: "L'écran qui protège l'isolant de l'eau et laisse sortir la vapeur.",
        },
        { title: 'Bardage', text: "Le parement en planches de bois, sur une lame d'air ventilée." },
        {
          title: 'ITE',
          text: "L'isolation thermique par l'extérieur : un isolant continu qui coupe les ponts thermiques, ces points où la chaleur s'échappe.",
        },
      ],
    },
    {
      type: 'callout',
      kind: 'definition',
      tone: 'light',
      title: 'Ossature ou madriers ?',
      text: "Dans un chalet en madriers ou en rondins, ce sont les pièces de bois empilées qui forment le mur. L'ossature, elle, laisse la place à **une forte épaisseur d'isolant** dans le mur lui-même.",
    },
    // Pourquoi le bois en montagne
    {
      type: 'cards',
      variant: 'icon',
      columns: 4,
      kicker: 'Pourquoi le bois',
      title: 'Construire **en bois en montagne**',
      items: [
        {
          title: 'Léger',
          icon: 'arrowUp',
          text: 'Moins de charge sur les fondations, et la solution pour [surélever une maison existante](/extension-surelevation-bois/).',
        },
        {
          title: "Préparé à l'abri",
          icon: 'saw',
          text: "Une grande partie du travail se fait à l'atelier : moins de temps exposé à la météo de montagne.",
        },
        {
          title: 'Bien isolé',
          icon: 'snow',
          text: "L'isolant remplit les murs, doublé dehors de fibre de bois : confort d'hiver et d'été.",
        },
        {
          title: 'Bas carbone',
          icon: 'tree',
          text: 'Le bois stocke du carbone et, venu du département, voyage peu. La RE2020 pousse dans ce sens.',
        },
      ],
    },
    // Notre système constructif
    {
      type: 'textImage',
      tone: 'light',
      kicker: 'Notre système constructif',
      title: 'Une enveloppe **biosourcée**, des murs au toit',
      text: "Notre système constructif inclut **la ouate de cellulose et les panneaux de fibre de bois**. L'isolant ne s'interrompt pas : des murs jusqu'au toit.",
      points: [
        "Murs : l'isolant remplit l'ossature, la fibre de bois la recouvre côté extérieur",
        'Façade : bardage en mélèze ou en douglas, ou enduit sur fibre de bois',
        "Toit : isolé par l'extérieur, de type sarking, la charpente reste apparente dedans",
        "Intérieur : membrane ou panneaux pour l'étanchéité à l'air, comme les trois plis d'épicéa à Briançon",
      ],
      images: [TROIS_PLIS, LAINE_DE_BOIS],
      imagePosition: 'right',
      links: [
        { label: 'Le sarking expliqué', href: '/isolation-toiture-sarking/' },
        { label: 'Nos isolants biosourcés', href: '/isolation-biosourcee/' },
      ],
    },
    // Les étapes, sur un chantier réel
    {
      type: 'steps',
      variant: 'tabs',
      anchor: 'etapes',
      kicker: 'Les étapes',
      title: "Une maison ossature bois, **de l'étude au chantier terminé**",
      intro:
        "Exemple réel : une maison construite dans les monts du Lyonnais, loin de notre base de L'Argentière-la-Bessée.",
      steps: [
        {
          title: 'Étude sur mesure',
          text: 'Chaque projet débute par une étude sur mesure. Calendrier estimatif dès notre première rencontre.',
        },
        {
          title: "Préparation à l'atelier",
          text: 'Charpente et pièces de structure tracées et taillées dans notre atelier.',
        },
        {
          title: 'Chargement et transport',
          text: 'Les éléments partent en camion, direction le terrain.',
          image: DEPART,
        },
        {
          title: 'Levage',
          text: 'Le solivage levé sur poteaux, puis les murs à ossature bois et la charpente apparente.',
          image: SOLIVAGE,
        },
        {
          title: 'Enveloppe',
          text: "Fibre de bois sur l'ossature, couverture, puis bardage en douglas.",
          image: FIBRE,
        },
        {
          title: 'Chantier terminé',
          text: 'Charpente et solivage apparents dedans. La maison repose sur un support maçonné en pierres récupérées.',
          image: SOLEIL_COUCHANT,
        },
      ],
      cta: {
        label: 'Voir toutes les photos du chantier',
        href: '/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/',
      },
    },
    // Bois local et savoir-faire
    {
      type: 'manifesto',
      layout: 'centered',
      kicker: 'Notre façon de construire',
      title: "Du **bois d'ici**, un savoir-faire de charpentier",
      text: "Surtout du **mélèze et du sapin des Hautes-Alpes**, sciés par notre partenaire local, la Scierie Savoldelli. D'autres essences complètent selon le projet : le bardage des monts du Lyonnais est en douglas.",
      items: [
        {
          title: '2007',
          text: 'Jean-Michel Tardy, formé chez les Compagnons du Devoir, fonde 3B Charpente : d’abord la charpente.',
        },
        { title: 'Puis', text: 'La rénovation de chalets et de maisons de pays.' },
        { title: "Aujourd'hui", text: 'La construction neuve en ossature bois.' },
      ],
      emphasis: 'La mission ne change pas : du bois local, pour des maisons saines et durables.',
      image: 'ambiance/foret.png',
      cta: { label: 'Notre histoire', href: '/a-propos/' },
    },
    // Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'commune',
      kicker: 'Nos chantiers',
      title: 'Nos constructions **en ossature bois**',
      items: [
        {
          project: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais',
          title: 'Maison à ossature bois dans les monts du Lyonnais',
          text: 'Solivage sur poteaux, charpente apparente, fibre de bois, bardage en douglas.',
        },
        {
          project: 'surelevation-en-ossature-bois-d-une-maison-a-briancon',
          title: 'Surélévation en ossature bois à Briançon',
          text: "Murs pignons levés, trois plis d'épicéa, isolation en laine de bois.",
        },
        {
          project: 'renovation-et-isolation-d-un-chalet-a-vallouise',
          title: 'Chalet rénové et isolé à Vallouise',
          text: "28 cm d'isolant biosourcé dans les murs, 32 cm en toiture, enduit et mélèze.",
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },
    // 3B Récup'
    {
      type: 'textImage',
      tone: 'light',
      kicker: "3B Récup'",
      title: 'Construire neuf **avec du réemploi**',
      text: "Une maison neuve peut accueillir des matériaux de seconde vie : dans les monts du Lyonnais, elle repose sur un **support maçonné en pierres récupérées**.\n\nAvec 3B Récup', nous déposons charpentes et murs à ossature sur d'autres chantiers, puis trions, nettoyons et usinons ce bois à l'atelier pour le réemployer.",
      badge: "3B Récup'",
      images: [SUPPORT_PIERRES],
      imagePosition: 'left',
      cta: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },
    // Prestations liées
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Pour **compléter** votre projet',
      services: ['isolation-toiture-sarking', 'extension-surelevation-bois', 'charpente-bois'],
    },
    // FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: 'Vos questions sur **la maison ossature bois**',
      faqs: [
        'maison-ossature-bois-q1',
        'maison-ossature-bois-q2',
        'maison-ossature-bois-q3',
        'maison-ossature-bois-q4',
        'maison-ossature-bois-q5',
        'maison-ossature-bois-q6',
      ],
    },
    // Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre projet',
      title: 'Un projet de **maison bois** ?',
      text: 'Parlez-nous de votre terrain et de vos envies : nous en discutons lors d’une rencontre, puis nous vous proposons un devis détaillé.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'maison-ossature-bois-q1',
      topic: 'ossature',
      question: "Quel est le prix d'une maison ossature bois dans les Hautes-Alpes ?",
      answer:
        "Il n'y a pas de prix au mètre carré honnête sans projet. Le prix dépend de la surface, de la forme, de l'altitude et de l'accès au terrain, des isolants, des finitions, et de ce que vous nous confiez : structure seule ou enveloppe complète. Nous vous proposons un devis détaillé après une rencontre et l'étude de vos plans.",
    },
    {
      key: 'maison-ossature-bois-q2',
      topic: 'ossature',
      question: 'Une maison ossature bois résiste-t-elle à la neige et au froid de montagne ?',
      answer:
        "Oui, si elle est bien conçue. Sa structure est dimensionnée pour la charge de neige du lieu, fixée par les règles de construction selon l'altitude et la région. Contre le froid, l'ossature accueille une forte épaisseur d'isolant, doublée de fibre de bois à l'extérieur et d'une étanchéité à l'air soignée.",
    },
    {
      key: 'maison-ossature-bois-q3',
      topic: 'ossature',
      question: 'Quelle différence entre une maison ossature bois et un chalet en madriers ?',
      answer:
        "Le mur. En madriers, ce sont les pièces de bois massif empilées qui le forment. En ossature bois, une trame de montants porte la maison et l'isolant remplit son épaisseur. L'ossature isole plus épais et laisse une grande liberté de façade : bardage bois, enduit, grandes ouvertures.",
    },
    {
      key: 'maison-ossature-bois-q4',
      topic: 'ossature',
      question: "Combien de temps dure la construction d'une maison ossature bois ?",
      answer:
        "Le délai varie selon la taille et la complexité du projet : nous vous donnons un calendrier estimatif dès la première rencontre. Une partie du travail se fait à l'atelier, à l'abri, ce qui réduit le temps passé sur le terrain. Suivent le levage, l'isolation, la couverture, le bardage et les finitions.",
    },
    {
      key: 'maison-ossature-bois-q5',
      topic: 'ossature',
      question: 'Quels isolants utilisez-vous pour une maison ossature bois ?',
      answer:
        "Des isolants biosourcés : notre système constructif inclut la ouate de cellulose et les panneaux de fibre de bois. Nous posons aussi la laine de chanvre, lin et coton, comme à Vallouise. La toiture est isolée par l'extérieur, de type sarking : la charpente reste apparente à l'intérieur.",
    },
    {
      key: 'maison-ossature-bois-q6',
      topic: 'ossature',
      question: 'Construisez-vous des maisons bois en dehors des Hautes-Alpes ?',
      answer:
        "Oui. Basés à L'Argentière-la-Bessée, nous intervenons dans tout le département, mais aussi en région PACA et Rhône-Alpes. Nous avons par exemple construit une maison à ossature bois dans les monts du Lyonnais : les éléments ont été chargés, transportés en camion, puis levés sur place.",
    },
  ],

  validationPoints: [
    {
      question:
        "Périmètre : 3B livre-t-il la maison hors d'eau et hors d'air, ou fait-il aussi les fondations, les menuiseries, les finitions intérieures ? Travaille-t-il en direct avec le client, en sous-traitance d'un constructeur, ou avec un architecte ? Qui fait les plans et le permis de construire : 3B, un architecte, un maître d'œuvre ?",
      decision:
        "Rien n'est dit sur le périmètre ni sur les plans : l'étape « Étude sur mesure » garde seulement l'étude et le calendrier estimatif, et la phrase du héros « Nous dessinons votre maison avec vous » est retirée (décision « travaux confiés à des partenaires »).",
      priority: 'high',
    },
    {
      question:
        "Préfabrication : les murs sont-ils assemblés en panneaux à l'atelier avant transport (les photos « chargement », « départ imminent! », « déchargement du camion » le laissent penser) ?",
      decision:
        "L'étape « Préparation à l'atelier » dit seulement que la charpente et les pièces de structure sont tracées et taillées dans notre atelier. Si oui, l'affirmer dans le héros et cette étape.",
      priority: 'normal',
    },
    {
      question:
        "Composition type d'un mur et d'une toiture neufs (ordre des couches, épaisseurs d'isolant, performance visée), pour l'afficher en schéma dans la section « Notre système constructif ».",
      decision:
        'Encadré retiré et pas de schéma : la section liste murs, façade, toit et intérieur en points courts, illustrés par deux photos de la surélévation de Briançon.',
      priority: 'normal',
    },
    {
      question:
        "Calcul de structure et charge de neige : fait en interne ou par un bureau d'études ?",
      decision:
        'La FAQ sur la neige reste générale (« dimensionnée pour la charge de neige du lieu »), sans dire qui fait les calculs.',
      priority: 'normal',
    },
    {
      question:
        'Monts du Lyonnais : commune exacte et année, pour enrichir la fiche réalisation ? Qui a réalisé le support maçonné en pierres récupérées ?',
      decision:
        "« Maison à ossature bois dans les monts du Lyonnais », sans commune ni année ; le support en pierres récupérées est décrit sans dire qui l'a réalisé.",
      priority: 'low',
    },
    {
      question:
        "Autres constructions neuves non publiées dans la galerie (surtout dans les Hautes-Alpes) : photos à récupérer (extérieur fini, intérieur, préparation à l'atelier, pose de panneaux de sarking).",
      decision: "La page s'appuie sur le seul chantier neuf publié (monts du Lyonnais).",
      priority: 'normal',
    },
    {
      question:
        "Assurance décennale : obligatoire pour la construction ; nom de l'assureur à indiquer sur les devis et, si Jean le souhaite, sur le site.",
      decision: "Non mentionnée sur la page tant que l'information manque.",
      priority: 'normal',
    },
    {
      question: '« +100 projets » : chiffre de la maquette non vérifié.',
      decision: 'Non affiché (décision par défaut).',
      priority: 'low',
    },
  ],

  photoAlts: [
    {
      photo: HERO,
      alt: "Levage des murs à ossature bois et de la charpente apparente d'une maison construite par 3B Charpente dans les monts du Lyonnais",
      caption: 'Levage des murs à ossature bois et de la charpente apparente, monts du Lyonnais.',
    },
    {
      photo: SOLIVAGE,
      alt: "Levage du solivage sur poteaux d'une maison à ossature bois, monts du Lyonnais",
      caption: 'Levage du solivage sur poteaux.',
    },
    {
      photo: FIBRE,
      alt: "Panneaux de fibre de bois posés sur l'ossature d'une maison neuve, monts du Lyonnais",
      caption: "Fibre de bois sur l'ossature bois.",
    },
    {
      photo: DEPART,
      alt: "Éléments d'une maison à ossature bois chargés sur le camion avant le départ vers le chantier",
      caption: 'Départ imminent pour les monts du Lyonnais.',
    },
    {
      photo: BARDAGE_DOUGLAS,
      alt: 'Maison à ossature bois terminée, bardage en douglas, monts du Lyonnais',
    },
    {
      photo: CHARPENTE_SOLIVAGE,
      alt: "Charpente et solivage apparents à l'intérieur d'une maison à ossature bois",
    },
    {
      photo: SUPPORT_PIERRES,
      alt: 'Support maçonné en pierres récupérées sous une maison à ossature bois',
    },
    {
      photo: SOLEIL_COUCHANT,
      alt: 'Charpente apparente au soleil couchant',
      caption: 'Charpente apparente au soleil couchant.',
    },
  ],
}
