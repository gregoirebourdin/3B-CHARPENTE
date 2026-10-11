import type { SeedService } from '../../types'

/** Fiche 07 : 3b-charpente-kit/docs/pages/07-maison-ossature-bois.md */

const p = (...paragraphs: string[]) => paragraphs.join('\n\n')

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
  cardText: 'Une maison neuve sur mesure, en ossature bois, avec une toiture isolée par sarking.',
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
    text: "Un habitat **personnalisé** et **écologiquement performant** : murs en ossature bois, isolants biosourcés et toiture isolée par l'extérieur, de type sarking. Nous préparons votre maison **dans notre atelier** et la levons sur votre terrain, avec du **bois des Hautes-Alpes**.",
    primaryCta: { label: 'Parler de mon projet', href: '/contact/' },
    secondaryCta: { label: 'Voir un chantier complet', href: '/maison-ossature-bois/#etapes' },
    proofs: [{ label: 'Depuis 2007' }, { label: 'Isolants biosourcés' }],
    images: [HERO],
    caption: 'Levage des murs à ossature bois et de la charpente apparente, monts du Lyonnais.',
  },

  tldr: "3B Charpente construit des maisons à ossature bois dans les Hautes-Alpes et au-delà : murs à ossature, solivage, charpente, isolation biosourcée, couverture et bardage. Nous privilégions le mélèze et le sapin des Hautes-Alpes, la ouate de cellulose et la fibre de bois, et isolons la toiture par l'extérieur (sarking). Charpentier à L'Argentière-la-Bessée depuis 2007.",

  layout: [
    // 3.4 Qu'est-ce qu'une maison à ossature bois ?
    {
      type: 'list',
      style: 'definitions',
      tone: 'light',
      kicker: 'Le principe',
      title: "Qu'est-ce qu'une **maison à ossature bois** ?",
      text: p(
        "Dans une maison à ossature bois, les murs sont faits d'une trame de montants et de traverses en bois, rigidifiée par des panneaux. L'isolant se loge dans l'épaisseur de cette trame. Le mur est ensuite fermé côté intérieur et habillé côté extérieur d'un bardage ou d'un enduit.",
        "C'est différent d'un chalet en madriers ou en rondins, où ce sont les pièces de bois empilées qui forment le mur. L'ossature laisse la place à une forte épaisseur d'isolant dans le mur lui-même.",
      ),
      items: [
        {
          title: 'Contreventement',
          text: "les panneaux qui rigidifient la structure et l'empêchent de se déformer sous le vent.",
        },
        {
          title: 'Pare-pluie',
          text: "l'écran qui protège l'isolant de l'eau tout en laissant sortir la vapeur.",
        },
        {
          title: 'Bardage',
          text: "le parement extérieur en planches de bois, posé sur une lame d'air ventilée.",
        },
        {
          title: 'ITE',
          text: "l'isolation thermique par l'extérieur, un isolant continu posé sur la face extérieure de la structure, qui coupe les ponts thermiques, ces points faibles où la chaleur s'échappe.",
        },
      ],
    },
    // 3.5 Pourquoi le bois en montagne
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
          text: "Une structure bois pèse bien moins qu'une maçonnerie : moins de charge sur les fondations, et une solution toute trouvée pour [surélever une maison existante](/extension-surelevation-bois/).",
        },
        {
          title: "Préparé à l'abri",
          icon: 'saw',
          text: "Une grande partie du travail se fait à l'atelier. Le temps passé sur le terrain, exposé à la météo de montagne, s'en trouve réduit.",
        },
        {
          title: 'Bien isolé',
          icon: 'snow',
          text: "L'isolant occupe l'épaisseur des murs et peut être doublé à l'extérieur par des panneaux de fibre de bois, pour un confort d'hiver et d'été.",
        },
        {
          title: 'Bas carbone',
          icon: 'tree',
          text: 'Le bois stocke du carbone et, quand il vient des forêts du département, voyage peu. La réglementation environnementale RE2020 pousse la construction à réduire son impact carbone sur tout le cycle de vie du bâtiment.',
        },
      ],
    },
    // 3.6 Notre système constructif (encadré « composition type » retiré, voir validationPoints)
    {
      type: 'textImage',
      tone: 'light',
      kicker: 'Notre système constructif',
      title: 'Une enveloppe **biosourcée**, des murs au toit',
      text: p(
        "Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois. Dans les murs, l'isolant remplit l'ossature ; à l'extérieur, des panneaux de fibre de bois la recouvrent, comme sur la maison des monts du Lyonnais. La façade reçoit ensuite un bardage, en mélèze ou en douglas, ou un enduit appliqué sur la fibre de bois.",
        "La toiture est isolée par l'extérieur, de type sarking : les panneaux isolants sont posés en continu sur la charpente, sous la couverture. La charpente reste apparente dans la maison, et l'isolant n'est pas interrompu par les chevrons.",
        "Côté intérieur, une membrane ou des panneaux assurent l'étanchéité à l'air : ils empêchent l'air chaud et humide de passer dans les parois. À Briançon, des panneaux trois plis en épicéa jouent ce rôle sous la toiture, tout en restant apparents.",
      ),
      images: [TROIS_PLIS, LAINE_DE_BOIS],
      imagePosition: 'right',
      links: [
        { label: 'Le sarking expliqué', href: '/isolation-toiture-sarking/' },
        { label: 'Nos isolants biosourcés', href: '/isolation-biosourcee/' },
      ],
    },
    // 3.7 Les étapes, sur un chantier réel
    {
      type: 'steps',
      variant: 'tabs',
      anchor: 'etapes',
      kicker: 'Les étapes',
      title: "Une maison ossature bois, **de l'étude au chantier terminé**",
      intro:
        "Exemple réel : une maison à ossature bois que nous avons construite dans les monts du Lyonnais, loin de notre base de L'Argentière-la-Bessée.",
      steps: [
        {
          title: 'Étude sur mesure',
          text: 'Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous vous fournirons un calendrier estimatif lors de notre première rencontre.',
        },
        {
          title: "Préparation à l'atelier",
          text: 'La charpente et les pièces de structure sont tracées et taillées dans notre atelier.',
        },
        {
          title: 'Chargement et transport',
          text: 'Les éléments sont chargés sur le camion, direction le terrain.',
          image: DEPART,
        },
        {
          title: 'Levage',
          text: 'Le solivage est levé sur poteaux, puis les murs à ossature bois et la charpente apparente.',
          image: SOLIVAGE,
        },
        {
          title: 'Enveloppe',
          text: "Les panneaux de fibre de bois recouvrent l'ossature, la couverture est posée, puis le bardage en douglas.",
          image: FIBRE,
        },
        {
          title: 'Chantier terminé',
          text: "À l'intérieur, la charpente et le solivage restent apparents. La maison repose sur un support maçonné en pierres récupérées.",
          image: SOLEIL_COUCHANT,
        },
      ],
      cta: {
        label: 'Voir toutes les photos du chantier',
        href: '/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/',
      },
    },
    // 3.8 Bois local et savoir-faire
    {
      type: 'manifesto',
      layout: 'centered',
      kicker: 'Notre façon de construire',
      title: "Du **bois d'ici**, un savoir-faire de charpentier",
      text: p(
        "Nous travaillons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Selon le projet, d'autres essences complètent : le bardage de la maison des monts du Lyonnais est en douglas.",
        "Fondée en 2007 par Jean-Michel Tardy, formé chez les Compagnons du Devoir, 3B Charpente a commencé par la charpente, puis a étendu son métier à la rénovation de chalets et de maisons de pays, et à la construction neuve en ossature bois. La mission n'a pas changé : utiliser le bois local pour construire des maisons saines et durables.",
      ),
      image: 'ambiance/foret.png',
      cta: { label: 'Notre histoire', href: '/a-propos/' },
    },
    // 3.9 Réalisations (étiquette « commune » : Briançon et Vallouise mènent aux pages secteur)
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
          text: 'Solivage sur poteaux, murs à ossature, charpente apparente, fibre de bois et bardage en douglas.',
        },
        {
          project: 'surelevation-en-ossature-bois-d-une-maison-a-briancon',
          title: 'Surélévation en ossature bois à Briançon',
          text: 'Murs pignons levés, pannes porteuses entaillées, panneaux trois plis en épicéa et isolation en laine de bois.',
        },
        {
          project: 'renovation-et-isolation-d-un-chalet-a-vallouise',
          title: 'Chalet rénové et isolé à Vallouise',
          text: '28 cm de laine de chanvre, lin et coton et de fibre de bois dans les murs, 32 cm en toiture, enduit sur fibre de bois et bardage en mélèze.',
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },
    // 3.10 3B Récup'
    {
      type: 'cta',
      variant: 'card',
      badge: '3B Récup’',
      kicker: "3B Récup'",
      title: 'Construire neuf **avec du réemploi**',
      text: "Une maison neuve peut accueillir des matériaux de seconde vie : dans les monts du Lyonnais, la maison repose sur un support maçonné en pierres récupérées. Avec 3B Récup', nous déposons des charpentes et des murs à ossature bois sur d'autres chantiers, puis trions, nettoyons et usinons ce bois dans notre atelier pour le réemployer.",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      image: SUPPORT_PIERRES,
    },
    // 3.11 Prestations liées
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Pour **compléter** votre projet',
      services: ['isolation-toiture-sarking', 'extension-surelevation-bois', 'charpente-bois'],
    },
    // 3.12 FAQ
    {
      type: 'faq',
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
    // 3.13 Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      title: 'Un projet de **maison bois** ?',
      text: "Chaque projet chez 3B Charpente débute par une étude sur mesure. Parlez-nous de votre terrain et de vos envies : nous discuterons de vos besoins lors d'une rencontre et vous proposerons un devis détaillé.",
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'maison-ossature-bois-q1',
      topic: 'ossature',
      question: "Quel est le prix d'une maison ossature bois dans les Hautes-Alpes ?",
      answer:
        "Il dépend de la surface, de la forme de la maison, de l'altitude et de l'accès au terrain, des isolants, des finitions, et de ce que vous nous confiez : structure seule ou enveloppe complète. Un prix au mètre carré donné sans projet serait trompeur. Nous vous proposons un devis détaillé après une rencontre et l'étude de vos plans.",
    },
    {
      key: 'maison-ossature-bois-q2',
      topic: 'ossature',
      question: 'Une maison ossature bois résiste-t-elle à la neige et au froid de montagne ?',
      answer:
        "Oui, si elle est bien conçue. Comme toute construction, sa structure est dimensionnée pour la charge de neige du lieu, fixée par les règles de construction selon l'altitude et la région. Côté froid, l'ossature accueille une forte épaisseur d'isolant, complétée par des panneaux de fibre de bois à l'extérieur et une étanchéité à l'air soignée.",
    },
    {
      key: 'maison-ossature-bois-q3',
      topic: 'ossature',
      question: 'Quelle différence entre une maison ossature bois et un chalet en madriers ?',
      answer:
        "Dans un chalet en madriers, ce sont les pièces de bois massif empilées qui forment le mur. Dans une maison à ossature bois, une trame de montants porte la maison et l'isolant remplit son épaisseur. L'ossature permet d'isoler plus épais dans le mur et laisse une grande liberté de façade : bardage bois, enduit, grandes ouvertures.",
    },
    {
      key: 'maison-ossature-bois-q4',
      topic: 'ossature',
      question: "Combien de temps dure la construction d'une maison ossature bois ?",
      answer:
        "Le délai peut varier selon la complexité et la taille du projet. Nous vous fournirons un calendrier estimatif lors de notre première rencontre. Une partie du travail se fait à l'atelier, à l'abri, ce qui réduit le temps passé sur le terrain. Viennent ensuite le levage, l'isolation, la couverture, le bardage et les finitions.",
    },
    {
      key: 'maison-ossature-bois-q5',
      topic: 'ossature',
      question: 'Quels isolants utilisez-vous pour une maison ossature bois ?',
      answer:
        "Des isolants biosourcés. Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois. Nous utilisons aussi la laine de chanvre, lin et coton, comme sur le chalet rénové à Vallouise. La toiture est isolée par l'extérieur, de type sarking, ce qui garde la charpente apparente à l'intérieur.",
    },
    {
      key: 'maison-ossature-bois-q6',
      topic: 'ossature',
      question: 'Construisez-vous des maisons bois en dehors des Hautes-Alpes ?',
      answer:
        "Oui. Basés à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes, nous intervenons dans tout le département, mais aussi en région PACA et Rhône-Alpes. Nous avons par exemple construit une maison à ossature bois dans les monts du Lyonnais : les éléments ont été chargés, transportés par camion, puis levés sur place.",
    },
  ],

  validationPoints: [
    {
      question:
        "Périmètre : 3B livre-t-il la maison hors d'eau et hors d'air, ou fait-il aussi les fondations, les menuiseries, les finitions intérieures ? Travaille-t-il en direct avec le client, en sous-traitance d'un constructeur, ou avec un architecte ? Qui fait les plans et le permis de construire : 3B, un architecte, un maître d'œuvre ?",
      decision:
        "Rien n'est dit sur le périmètre ni sur les plans : l'étape 01 garde seulement l'étude sur mesure et le calendrier estimatif, et la phrase du héros « Nous dessinons votre maison avec vous » est retirée (décision « travaux confiés à des partenaires »).",
      priority: 'high',
    },
    {
      question:
        "Préfabrication : les murs sont-ils assemblés en panneaux à l'atelier avant transport (les photos « chargement », « départ imminent! », « déchargement du camion » le laissent penser) ?",
      decision:
        "L'étape 02 dit seulement que la charpente et les pièces de structure sont tracées et taillées dans notre atelier. Si oui, l'affirmer dans le héros et l'étape 02.",
      priority: 'normal',
    },
    {
      question:
        "Composition type d'un mur et d'une toiture neufs (ordre des couches, épaisseurs d'isolant, performance visée), pour l'afficher en schéma dans la section « Notre système constructif ».",
      decision:
        'Encadré retiré et pas de schéma : la section est illustrée par deux photos de la surélévation de Briançon (panneaux trois plis en épicéa, remplissage en laine de bois).',
      priority: 'normal',
    },
    {
      question:
        "Calcul de structure et charge de neige : fait en interne ou par un bureau d'études ?",
      decision:
        'La FAQ sur la neige reste générale (« dimensionnée pour la charge de neige du lieu »), sans dire qui fait les calculs.',
      priority: 'normal',
    },
    {
      question:
        'Monts du Lyonnais : commune exacte et année, pour enrichir la fiche réalisation ? Qui a réalisé le support maçonné en pierres récupérées ?',
      decision:
        "« Maison à ossature bois dans les monts du Lyonnais », sans commune ni année ; le support en pierres récupérées est décrit sans dire qui l'a réalisé.",
      priority: 'low',
    },
    {
      question:
        "Autres constructions neuves non publiées dans la galerie (surtout dans les Hautes-Alpes) : photos à récupérer (extérieur fini, intérieur, préparation à l'atelier, pose de panneaux de sarking).",
      decision: "La page s'appuie sur le seul chantier neuf publié (monts du Lyonnais).",
      priority: 'normal',
    },
    {
      question:
        "Assurance décennale : obligatoire pour la construction ; nom de l'assureur à indiquer sur les devis et, si Jean le souhaite, sur le site.",
      decision: "Non mentionnée sur la page tant que l'information manque.",
      priority: 'normal',
    },
    {
      question: '« +100 projets » : chiffre de la maquette non vérifié.',
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
