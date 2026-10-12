/**
 * Fiche 09 : Escaliers bois sur mesure (/escalier-bois-sur-mesure/).
 * Source : 3b-charpente-kit/docs/pages/09-escalier-bois-sur-mesure.md
 */
import type { SeedService } from '../../types'

const QUART_TOURNANT = 'escalier-1-4-tournant-en-meleze-lamelle-colle'
const BOIS_DEBOUT = 'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien'
const HERO_PHOTO = `${QUART_TOURNANT}/07. montage terminé .JPG`

export const service: SeedService = {
  kind: 'service',
  slug: 'escalier-bois-sur-mesure',
  title: 'Escaliers bois sur mesure',
  menuLabel: 'Escaliers sur mesure',
  shortLabel: 'Escaliers',
  filterKey: 'escaliers',
  order: 8,
  icon: 'stairs',
  cardText: 'Quart tournant, balancé, bois debout : dessiné pour votre maison.',
  cardLinkLabel: 'Voir nos escaliers',
  image: HERO_PHOTO,
  schema: {
    serviceType: "Fabrication et pose d'escaliers en bois",
    description:
      'Escaliers bois sur mesure dans les Hautes-Alpes : quart tournant, balancé, encloisonné, en mélèze lamellé-collé, frêne ou bois debout. Prise de cotes, dessin, validation, traçage, taille et assemblage en atelier, puis montage sur place.',
  },

  seo: {
    title: 'Escalier bois sur mesure, Hautes-Alpes | 3B Charpente',
    description:
      'Escalier bois sur mesure dans les Hautes-Alpes : quart tournant en mélèze lamellé-collé, frêne, bois debout. Dessiné et taillé dans notre atelier. Devis.',
    image: HERO_PHOTO,
  },

  hero: {
    variant: 'photo',
    kicker: 'Escaliers bois sur mesure',
    title: 'Escalier bois **sur mesure** dans les **Hautes-Alpes**',
    text: "Des escaliers **sur mesure**, à **l'âme de votre maison** : quart tournant, balancé ou encloisonné. Dessinés après la prise de cotes, puis tracés, taillés et assemblés **dans notre atelier**.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: { label: 'Voir nos escaliers', href: '/escalier-bois-sur-mesure/#realisations' },
    proofs: [
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: "Taillés à l'atelier", text: "selon l'art du trait", icon: 'saw' },
      { label: 'Deux jours de montage', text: 'pour notre quart tournant', icon: 'clock' },
    ],
    images: [HERO_PHOTO, 'fabrication-d-un-escalier/frêne et aluminium.JPG'],
    caption: 'Escalier quart tournant en mélèze lamellé-collé, montage terminé.',
    sheet: [
      { label: 'Formes', value: 'Quart tournant, balancé, encloisonné' },
      { label: 'Bois', value: 'Mélèze lamellé-collé, frêne, bois debout' },
      { label: 'Fabrication', value: "Tracé, taillé, assemblé à l'atelier" },
    ],
  },

  tldr: "3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, dessine, taille et pose des escaliers bois sur mesure dans les Hautes-Alpes : quart tournant, balancé, encloisonné. Dessin après la prise de cotes, puis traçage, taille et assemblage dans notre atelier. Mélèze lamellé-collé, frêne, bois debout : chaque escalier est unique.",

  layout: [
    // Notre méthode
    {
      type: 'steps',
      variant: 'tabs',
      kicker: 'Notre méthode',
      title: 'Un escalier **dessiné pour votre maison**, en cinq étapes',
      steps: [
        {
          title: 'Prise de cotes',
          text: "Nous mesurons la trémie (l'ouverture dans le plancher), la hauteur à monter et la place disponible.",
          image: `${QUART_TOURNANT}/01. Lieu en attente de l'escalier .JPG`,
        },
        {
          title: 'Dessin',
          text: "Nous dessinons l'escalier et vous proposons une esthétique : essence, forme des marches, contremarches ou non, garde-corps.",
        },
        {
          title: 'Validation',
          text: "Vous validez le dessin. Rien n'est taillé avant votre accord.",
        },
        {
          title: "Traçage, taille et assemblage à l'atelier",
          text: "Le tracé d'un escalier tournant relève de l'art du trait, enseigné chez les Compagnons du Devoir, où s'est formé notre fondateur.",
          image: `${QUART_TOURNANT}/02. début de montage.JPG`,
        },
        {
          title: 'Montage',
          text: 'Sur place, il ne reste que le montage : deux jours, finitions comprises, pour notre quart tournant en mélèze lamellé-collé.',
          image: HERO_PHOTO,
        },
      ],
    },

    // L'escalier quart tournant
    {
      type: 'textImage',
      anchor: 'quart-tournant',
      tone: 'light',
      kicker: 'Quart tournant',
      title: "L'escalier **quart tournant**, pour tourner sans perdre de place",
      text: "Il change de direction à **90 degrés** dans un angle, et prend moins de longueur qu'un escalier droit. Souvent la solution pour [monter aux combles](/renovation-charpente-combles/).\n\nÀ [La Salle-les-Alpes](/charpentier-serre-chevalier/), l'ancienne forge réhabilitée a elle aussi son quart tournant.",
      points: [
        'Le virage : un palier, ou des marches balancées',
        'Balancer, c’est varier la largeur des marches dans le tournant pour garder un pas régulier',
        'Notre quart tournant en mélèze : marches sur crémaillères, et cloison rampante pour la salle de bains',
      ],
      images: [
        `${QUART_TOURNANT}/04. balancement des marches.JPG`,
        `${QUART_TOURNANT}/05. seconde volée.JPG`,
      ],
      imagePosition: 'right',
      caption: 'Balancement des marches dans le quart tournant. Seconde volée, vers les combles.',
    },

    // Les règles d'un escalier confortable
    {
      type: 'cards',
      variant: 'icon',
      columns: 4,
      kicker: 'Bien dimensionner',
      title: "Les règles d'un **escalier confortable**",
      intro:
        'Un escalier se calcule avant de se dessiner. Quatre repères, valables pour tout escalier.',
      items: [
        {
          title: 'La loi de Blondel',
          icon: 'ruler',
          text: 'Deux hauteurs de marche plus un giron (sa profondeur) : entre 60 et 64 cm environ, un pas confortable.',
        },
        {
          title: 'La régularité',
          icon: 'stairs',
          text: "Toutes les marches d'une volée ont la même hauteur : le pied ne trébuche pas.",
        },
        {
          title: "L'échappée",
          icon: 'arrowUp',
          text: 'Assez de hauteur libre pour passer sans se baisser, surtout sous un rampant de toit.',
        },
        {
          title: 'La sécurité',
          icon: 'shield',
          text: 'Main courante et garde-corps protègent les côtés ouverts.',
        },
      ],
    },

    // Les bois
    {
      type: 'cards',
      variant: 'photo',
      columns: 4,
      tone: 'light',
      kicker: 'Les bois',
      title: "Mélèze, frêne, **bois debout** : le bois fait l'escalier",
      intro:
        "Surtout du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. L'essence se choisit au dessin, selon l'usage et le style de la maison.",
      items: [
        {
          title: 'Mélèze lamellé-collé',
          text: 'Des lamelles de mélèze collées : un bois qui bouge peu, pour les grandes pièces comme les crémaillères.',
          image: `${QUART_TOURNANT}/03. départ d'escalier terminé.JPG`,
        },
        {
          title: 'Frêne et aluminium',
          text: 'Un bois dur et clair, associé au métal, pour un style plus contemporain.',
          image: 'fabrication-d-un-escalier/frêne et aluminium.JPG',
        },
        {
          title: 'Bois debout',
          text: "Coupé en travers du fil, il montre ses cernes comme un billot. Il résiste bien à l'usure.",
          image: `${BOIS_DEBOUT}/bois debout en cours de pose.JPG`,
        },
        {
          title: 'Panneau trois plis',
          text: 'Trois couches de bois croisées et collées, très stables : pour former des caissons.',
          image: `${BOIS_DEBOUT}/caisson en panneau 3plis.JPG`,
        },
      ],
    },

    // Dans une maison ancienne
    {
      type: 'textImage',
      kicker: 'Maisons anciennes',
      title: 'Remplacer un escalier **dans un bâti ancien**',
      text: "Dans une maison ancienne, **rien n'est d'équerre** : murs irréguliers, planchers qui ont bougé, trémie étroite. Un escalier standard s'y adapte mal ; un escalier tracé d'après les cotes réelles s'y loge.",
      points: [
        'Dans un bâti ancien : ancien escalier démoli, caissons en trois plis, bois debout, contremarches',
        "À L'Argentière-la-Bessée : un escalier balancé et un garde-corps en bois de réemploi",
        'À La Salle-les-Alpes : un escalier encloisonné, pris entre deux murs ou cloisons',
      ],
      images: [`${BOIS_DEBOUT}/ancien escalier démoli.JPG`, `${BOIS_DEBOUT}/escalier terminé.jpg`],
      imagePosition: 'left',
      caption: "L'ancien escalier démoli. L'escalier en bois debout terminé.",
    },

    // Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'brand',
      tone: 'light',
      kicker: 'Nos escaliers',
      title: 'Des escaliers **taillés dans notre atelier**',
      items: [
        {
          project: 'escalier-1-4-tournant-en-meleze-lamelle-colle',
          title: 'Escalier quart tournant en mélèze lamellé-collé',
          text: 'Marches sur crémaillères, accès aux combles, monté en deux jours.',
        },
        {
          project: 'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien',
          title: 'Escalier en bois debout dans un bâti ancien',
          text: 'Ancien escalier démoli, caissons en trois plis, bois debout.',
        },
        {
          project: 'fabrication-d-un-escalier',
          title: 'Escalier en frêne et aluminium',
          text: 'Fabriqué à l’atelier, puis livré sur le chantier.',
        },
        {
          project: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
          title: 'Ancienne forge à La Salle-les-Alpes',
          text: 'Un quart tournant et un escalier encloisonné, à Serre Chevalier.',
        },
        {
          project: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
          title: "Maison rénovée à L'Argentière-la-Bessée",
          text: 'Escalier balancé, garde-corps de réemploi, bardage vieux bois.',
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },

    // 3B Récup'
    {
      type: 'cta',
      variant: 'slim',
      icon: 'recycle',
      title: 'Un garde-corps **en bois de réemploi**',
      text: "Avec 3B Récup', le bois de déconstruction est trié, nettoyé et usiné à l'atelier. À L'Argentière-la-Bessée, il est devenu garde-corps et bardage : voir le [bois de réemploi](/3b-recup/bois-de-reemploi/).",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },

    // Prestations liées
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Pour **compléter** votre projet',
      services: ['renovation-charpente-combles', 'balcon-terrasse-abri-bois', 'charpente-bois'],
    },

    // FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: 'Vos questions sur **les escaliers bois**',
      faqs: [
        'escalier-bois-sur-mesure-q1',
        'escalier-bois-sur-mesure-q2',
        'escalier-bois-sur-mesure-q3',
        'escalier-bois-sur-mesure-q4',
        'escalier-bois-sur-mesure-q5',
        'escalier-bois-sur-mesure-q6',
      ],
    },

    // Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre escalier',
      title: 'Un escalier **à dessiner** ?',
      text: "Nous venons prendre les cotes, nous dessinons l'escalier avec vous, puis nous vous proposons un devis détaillé.",
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'escalier-bois-sur-mesure-q1',
      topic: 'escaliers',
      question: "Quel est le prix d'un escalier quart tournant en bois sur mesure ?",
      answer:
        "Il dépend de l'essence (mélèze massif ou lamellé-collé, frêne…), du nombre de marches, des contremarches, du garde-corps, des finitions et de la trémie. Un prix catalogue n'a pas de sens pour un escalier dessiné pour votre maison : après la prise de cotes, nous vous proposons un dessin et un devis détaillé.",
    },
    {
      key: 'escalier-bois-sur-mesure-q2',
      topic: 'escaliers',
      question: 'Combien de temps pour fabriquer et poser un escalier sur mesure ?',
      answer:
        "Le délai dépend du projet : nous vous donnons un calendrier estimatif dès la première rencontre. L'essentiel se fait à l'atelier : traçage, taille, assemblage. Sur place, le montage est court : deux jours, finitions comprises, pour notre quart tournant en mélèze lamellé-collé.",
    },
    {
      key: 'escalier-bois-sur-mesure-q3',
      topic: 'escaliers',
      question: 'Quel bois choisir pour un escalier intérieur ?',
      answer:
        "Un bois qui résiste à l'usure et reste stable. Nous travaillons beaucoup le mélèze, en massif ou en lamellé-collé, qui bouge moins. Le frêne, dur et clair, va bien à un style contemporain, avec de l'aluminium par exemple. Le bois debout offre un rendu unique. Nous privilégions les bois des Hautes-Alpes.",
    },
    {
      key: 'escalier-bois-sur-mesure-q4',
      topic: 'escaliers',
      question: 'Escalier quart tournant ou escalier droit : lequel prend le moins de place ?',
      answer:
        "Le quart tournant : à hauteur égale, il prend moins de longueur au sol, car il tourne à 90 degrés dans un angle. L'escalier droit est plus simple à fabriquer, mais demande une grande longueur libre. Pour monter aux combles, le quart tournant est souvent le bon compromis.",
    },
    {
      key: 'escalier-bois-sur-mesure-q5',
      topic: 'escaliers',
      question: 'Pouvez-vous remplacer un vieil escalier dans une maison ancienne ?',
      answer:
        "Oui. Dans un bâti ancien, nous avons démoli l'ancien escalier pour en construire un en bois debout, sur des caissons en trois plis. Rien n'y est d'équerre : c'est tout l'intérêt d'un escalier tracé d'après les cotes réelles. Si la trémie doit être agrandie, nous la reprenons avec un chevêtre.",
    },
    {
      key: 'escalier-bois-sur-mesure-q6',
      topic: 'escaliers',
      question: "Faites-vous aussi les garde-corps d'escalier et de balcon ?",
      answer:
        "Oui : un garde-corps en bois de réemploi à L'Argentière-la-Bessée, un garde-corps bois-métal à Prelles, une balustrade en mélèze à La Roche-de-Rame. Le garde-corps se dessine avec l'escalier, pour un ensemble cohérent. Dehors, nous utilisons volontiers le mélèze, qui tient bien aux intempéries.",
    },
  ],

  photoAlts: [
    {
      photo: HERO_PHOTO,
      alt: 'Escalier quart tournant en mélèze lamellé-collé dessiné, taillé et monté par 3B Charpente',
    },
    {
      photo: `${QUART_TOURNANT}/04. balancement des marches.JPG`,
      alt: "Balancement des marches d'un escalier quart tournant en mélèze lamellé-collé",
    },
    {
      photo: `${QUART_TOURNANT}/06. combles rénovés par nos soins.JPG`,
      alt: 'Escalier quart tournant en mélèze menant aux combles rénovés par 3B Charpente',
    },
    {
      photo: `${BOIS_DEBOUT}/escalier terminé.jpg`,
      alt: 'Escalier en bois debout construit par 3B Charpente dans un bâti ancien',
    },
    {
      photo: 'fabrication-d-un-escalier/frêne et aluminium.JPG',
      alt: 'Escalier en frêne et aluminium fabriqué par 3B Charpente',
    },
    {
      photo:
        'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/6 Escalier quart tournant.JPG',
      alt: 'Escalier quart tournant dans une ancienne forge réhabilitée à La Salle-les-Alpes (Hautes-Alpes)',
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/07Escalier balancé.JPG',
      alt: "Escalier balancé dans une maison rénovée par 3B Charpente à L'Argentière-la-Bessée",
    },
  ],

  validationPoints: [
    {
      question:
        'Escalier quart tournant en mélèze lamellé-collé : dans quelle commune ? (pour la carte et le texte alternatif). La durée « deux jours, finitions comprises » est citée pour cet escalier uniquement : est-ce juste ?',
      decision:
        'Aucune commune affichée (règle des communes inconnues). La durée de deux jours reste rattachée à cet escalier précis, jamais présentée comme une règle.',
      priority: 'normal',
    },
    {
      question:
        'Escalier en bois debout dans un bâti ancien : commune du chantier, essence du bois debout, et où il est posé (marches, contremarches ?).',
      decision:
        'Mention retirée de la section « Remplacer un escalier dans un bâti ancien ». Aucune commune affichée ; le texte décrit seulement les étapes visibles sur les photos.',
      priority: 'normal',
    },
    {
      question:
        'Escalier en frêne et aluminium : commune, et qui a fait la partie aluminium (3B ou un métallier partenaire) ?',
      decision: 'Aucune commune affichée ; on ne précise pas qui a réalisé la partie aluminium.',
      priority: 'normal',
    },
    {
      question:
        "Escalier d'accès à la terrasse du chalet de Vallouise : réalisé par 3B ? Si oui, on peut ajouter « escaliers extérieurs » à la page et à la FAQ sur les garde-corps.",
      decision: 'Non mentionné sur cette page : les escaliers extérieurs ne sont pas ajoutés.',
      priority: 'low',
    },
    {
      question: 'Finitions des escaliers : lesquelles sont proposées (huile, vernis, brut) ?',
      decision: 'Aucune finition citée ; la FAQ « Quel bois choisir » reste sur les essences.',
      priority: 'low',
    },
    {
      question: "Délai type de fabrication à l'atelier : Jean souhaite-t-il le publier ?",
      decision:
        'Non publié. La FAQ sur les délais renvoie au calendrier estimatif donné lors de la première rencontre.',
      priority: 'low',
    },
    {
      question:
        "Garde-corps : 3B les dimensionne-t-il selon la norme française en vigueur ? Si oui, on peut l'écrire.",
      decision:
        'La page reste générale (« Main courante et garde-corps protègent les côtés ouverts »).',
      priority: 'low',
    },
    {
      question:
        "Bandeau 3B Récup' : le garde-corps et le bardage vieux bois de L'Argentière-la-Bessée viennent-ils d'une déconstruction faite par 3B ?",
      decision:
        "La fiche disait « il est devenu un garde-corps et un bardage vieux bois », après la description de la déconstruction. Remplacé par « une maison rénovée a reçu un garde-corps en bois de réemploi et un bardage vieux bois » : on ne dit pas d'où vient ce bois (décision « Origine du vieux bois des chantiers »).",
      priority: 'normal',
    },
    {
      question:
        "Photos à fournir : un escalier en cours de taille ou d'assemblage à l'atelier ; un dessin d'escalier remis à un client (avec son accord) ; des gros plans (marche en bois debout, assemblage marche-crémaillère, main courante) ; un escalier extérieur s'il en existe un.",
      decision: 'Page publiée avec les photos actuelles de la galerie.',
      priority: 'low',
    },
  ],
}
