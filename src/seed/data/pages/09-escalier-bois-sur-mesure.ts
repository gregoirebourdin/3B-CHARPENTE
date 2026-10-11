/**
 * Fiche 09 : Escaliers bois sur mesure (/escalier-bois-sur-mesure/).
 * Source : 3b-charpente-kit/docs/pages/09-escalier-bois-sur-mesure.md
 */
import type { SeedService } from '../../types'

const md = (...paragraphs: string[]) => paragraphs.join('\n\n')

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
  cardText:
    "Quart tournant, balancé ou en bois debout, dessinés pour votre maison, taillés à l'atelier.",
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
    text: "Des escaliers **sur mesure**, conçus pour s'intégrer à l'environnement de montagne et à **l'âme de votre maison**. Quart tournant, balancé ou encloisonné, nous les dessinons après la prise de cotes, puis les traçons, taillons et assemblons **dans notre atelier**.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: { label: 'Voir nos escaliers', href: '/escalier-bois-sur-mesure/#realisations' },
    proofs: [{ label: 'Depuis 2007' }, { label: 'Taillés dans notre atelier' }],
    images: [HERO_PHOTO, 'fabrication-d-un-escalier/frêne et aluminium.JPG'],
    caption: 'Escalier quart tournant en mélèze lamellé-collé, montage terminé.',
  },

  tldr: "3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, dessine, taille et pose des escaliers bois sur mesure dans les Hautes-Alpes : quart tournant, balancé, encloisonné. Après la prise de cotes, nous dessinons l'escalier et proposons une esthétique ; une fois validé, il est tracé, taillé et assemblé dans notre atelier. Mélèze lamellé-collé, frêne, bois debout : chaque escalier est unique.",

  layout: [
    // 3.4 Notre méthode
    {
      type: 'steps',
      variant: 'tabs',
      kicker: 'Notre méthode',
      title: 'Un escalier **dessiné pour votre maison**, en cinq étapes',
      steps: [
        {
          title: 'Prise de cotes',
          text: "Nous venons mesurer la trémie, c'est-à-dire l'ouverture dans le plancher, la hauteur à monter et la place disponible.",
          image: `${QUART_TOURNANT}/01. Lieu en attente de l'escalier .JPG`,
        },
        {
          title: 'Dessin',
          text: "Une fois les cotes prises, nous dessinons l'escalier et vous proposons une esthétique : essence, forme des marches, contremarches ou non, garde-corps.",
        },
        {
          title: 'Validation',
          text: "Vous validez le dessin. Rien n'est taillé avant votre accord.",
        },
        {
          title: "Traçage, taille et assemblage à l'atelier",
          text: "Une fois le dessin validé, nous traçons, taillons et assemblons l'escalier dans notre atelier. Le tracé d'un escalier tournant est un exercice classique de l'art du trait, enseigné chez les Compagnons du Devoir, où s'est formé notre fondateur.",
          image: `${QUART_TOURNANT}/02. début de montage.JPG`,
        },
        {
          title: 'Montage',
          text: "Sur place, il ne reste que le montage. Pour notre escalier quart tournant en mélèze lamellé-collé, il s'est fait en deux jours, finitions comprises.",
          image: HERO_PHOTO,
        },
      ],
    },

    // 3.5 L'escalier quart tournant
    {
      type: 'textImage',
      anchor: 'quart-tournant',
      kicker: 'Quart tournant',
      title: "L'escalier **quart tournant**, pour tourner sans perdre de place",
      text: md(
        "Un escalier quart tournant change de direction à 90 degrés, soit un quart de tour. Il se loge dans un angle et prend moins de longueur qu'un escalier droit. C'est souvent la solution pour [monter aux combles](/renovation-charpente-combles/) ou relier deux niveaux dans une maison ancienne.",
        "Le virage se fait avec un palier ou avec des marches balancées. Balancer les marches, c'est faire varier leur largeur dans le tournant pour que le pas reste régulier sur la ligne de foulée, le chemin naturel du pied.",
        "Dans une maison que nous avons rénovée, l'escalier quart tournant en mélèze lamellé-collé mène aux combles et sert aussi de cloison rampante à la salle de bains. Ses marches et contremarches sont posées sur des crémaillères, des limons découpés en dents de scie. À [La Salle-les-Alpes](/charpentier-serre-chevalier/), l'ancienne forge réhabilitée a elle aussi son escalier quart tournant.",
      ),
      images: [
        `${QUART_TOURNANT}/04. balancement des marches.JPG`,
        `${QUART_TOURNANT}/05. seconde volée.JPG`,
      ],
      imagePosition: 'right',
      caption: 'Balancement des marches dans le quart tournant. Seconde volée, vers les combles.',
    },

    // 3.6 Les règles d'un escalier confortable
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      tone: 'light',
      kicker: 'Bien dimensionner',
      title: "Les règles d'un **escalier confortable**",
      intro:
        'Un escalier se calcule avant de se dessiner. Quelques repères, valables pour tout escalier :',
      items: [
        {
          title: 'La loi de Blondel',
          icon: 'ruler',
          text: "Deux hauteurs de marche plus un giron (la profondeur de marche, où se pose le pied) doivent faire entre 60 et 64 cm environ : la longueur d'un pas confortable.",
        },
        {
          title: 'La régularité',
          icon: 'stairs',
          text: "Toutes les marches d'une volée ont la même hauteur. Le pied s'y habitue et ne trébuche pas.",
        },
        {
          title: "L'échappée",
          icon: 'arrowUp',
          text: 'La hauteur libre au-dessus des marches doit laisser passer la tête sans se baisser, surtout sous un rampant de toit.',
        },
        {
          title: 'La sécurité',
          icon: 'shield',
          text: 'Main courante et garde-corps protègent les côtés ouverts.',
        },
      ],
    },

    // 3.7 Les bois
    {
      type: 'cards',
      variant: 'photo',
      columns: 2,
      kicker: 'Les bois',
      title: "Mélèze, frêne, **bois debout** : le bois fait l'escalier",
      intro:
        "Nous travaillons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli : la même logique de matériaux locaux et sains que pour nos charpentes et nos isolants biosourcés. Pour un escalier, l'essence se choisit au dessin, selon l'usage et le style de la maison.",
      items: [
        {
          title: 'Mélèze lamellé-collé',
          text: "Des lamelles de mélèze collées entre elles. Ce bois reconstitué bouge moins qu'une pièce massive et se prête aux grandes pièces comme les crémaillères.",
          image: `${QUART_TOURNANT}/03. départ d'escalier terminé.JPG`,
        },
        {
          title: 'Frêne et aluminium',
          text: 'Un bois dur et clair, associé au métal pour un escalier au style plus contemporain.',
          image: 'fabrication-d-un-escalier/frêne et aluminium.JPG',
        },
        {
          title: 'Bois debout',
          text: "Du bois coupé en travers du fil, qui montre ses cernes de croissance comme un billot. Il résiste bien à l'usure et donne à l'escalier un dessin unique.",
          image: `${BOIS_DEBOUT}/bois debout en cours de pose.JPG`,
        },
        {
          title: 'Panneau trois plis',
          text: 'Trois couches de bois croisées et collées, très stables, utilisées pour former des caissons.',
          image: `${BOIS_DEBOUT}/caisson en panneau 3plis.JPG`,
        },
      ],
    },

    // 3.8 Dans une maison ancienne
    {
      type: 'textImage',
      tone: 'light',
      kicker: 'Maisons anciennes',
      title: 'Remplacer un escalier **dans un bâti ancien**',
      text: md(
        "Dans une maison ancienne, rien n'est d'équerre : murs irréguliers, planchers qui ont bougé, trémie étroite. Un escalier standard s'y adapte mal ; un escalier sur mesure, tracé d'après les cotes réelles, s'y loge.",
        "Dans un bâti ancien, nous avons démoli l'ancien escalier pour en construire un en bois debout. Les étapes : caissons en panneau trois plis, pose du bois debout, contremarches, puis escalier terminé.",
        "À L'Argentière-la-Bessée, une maison rénovée a reçu un escalier balancé et un garde-corps en bois de réemploi. À La Salle-les-Alpes, l'ancienne forge compte aussi un escalier encloisonné, c'est-à-dire pris entre deux murs ou cloisons.",
      ),
      images: [`${BOIS_DEBOUT}/ancien escalier démoli.JPG`, `${BOIS_DEBOUT}/escalier terminé.jpg`],
      imagePosition: 'left',
      caption: "L'ancien escalier démoli. L'escalier en bois debout terminé.",
    },

    // 3.9 Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'brand',
      kicker: 'Nos escaliers',
      title: 'Des escaliers **taillés dans notre atelier**',
      items: [
        {
          project: 'escalier-1-4-tournant-en-meleze-lamelle-colle',
          title: 'Escalier quart tournant en mélèze lamellé-collé',
          text: 'Marches et contremarches sur crémaillères, accès aux combles, montage en deux jours, finitions comprises.',
        },
        {
          project: 'creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien',
          title: 'Escalier en bois debout dans un bâti ancien',
          text: 'Ancien escalier démoli, caissons en panneau trois plis, bois debout et contremarches.',
        },
        {
          project: 'fabrication-d-un-escalier',
          title: 'Escalier en frêne et aluminium',
          text: 'Un escalier en frêne et aluminium, fabriqué puis livré sur le chantier.',
        },
        {
          project: 'rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes',
          title: 'Ancienne forge à La Salle-les-Alpes',
          text: 'Escalier quart tournant et escalier encloisonné dans un bâtiment réhabilité de Serre Chevalier.',
        },
        {
          project: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee',
          title: "Maison rénovée à L'Argentière-la-Bessée",
          text: 'Escalier balancé, garde-corps en bois de réemploi et bardage vieux bois.',
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },

    // 3.10 3B Récup'
    {
      type: 'cta',
      variant: 'band',
      badge: '3B Récup’',
      kicker: "3B Récup'",
      title: 'Un garde-corps **en bois de réemploi**',
      text: "Le bois de réemploi trouve aussi sa place à l'intérieur. Avec 3B Récup', nous déposons charpentes, planchers et bardages sur des chantiers de déconstruction, puis trions, nettoyons et usinons ce bois dans notre atelier. À L'Argentière-la-Bessée, une maison rénovée a reçu un garde-corps en bois de réemploi et un bardage vieux bois.",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      secondary: { label: 'Le bois de réemploi', href: '/3b-recup/bois-de-reemploi/' },
    },

    // 3.11 Prestations liées
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Pour **compléter** votre projet',
      services: ['renovation-charpente-combles', 'balcon-terrasse-abri-bois', 'charpente-bois'],
    },

    // 3.12 FAQ
    {
      type: 'faq',
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

    // 3.13 Appel à l'action final
    {
      type: 'cta',
      variant: 'band',
      title: 'Un escalier **à dessiner** ?',
      text: "Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons prendre les cotes, nous dessinons l'escalier avec vous et vous proposons un devis détaillé.",
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'escalier-bois-sur-mesure-q1',
      topic: 'escaliers',
      question: "Quel est le prix d'un escalier quart tournant en bois sur mesure ?",
      answer:
        "Il dépend de l'essence (mélèze massif ou lamellé-collé, frêne…), du nombre de marches, de la présence de contremarches, du garde-corps, des finitions et de la configuration de la trémie. Un prix catalogue n'aurait pas de sens pour un escalier dessiné pour votre maison. Après la prise de cotes, nous vous proposons un dessin et un devis détaillé.",
    },
    {
      key: 'escalier-bois-sur-mesure-q2',
      topic: 'escaliers',
      question: 'Combien de temps pour fabriquer et poser un escalier sur mesure ?',
      answer:
        "Le délai dépend du projet ; nous vous donnons un calendrier estimatif lors de notre première rencontre. L'essentiel du travail se fait à l'atelier : traçage, taille et assemblage. Sur place, le montage est court : pour notre escalier quart tournant en mélèze lamellé-collé, il s'est fait en deux jours, finitions comprises.",
    },
    {
      key: 'escalier-bois-sur-mesure-q3',
      topic: 'escaliers',
      question: 'Quel bois choisir pour un escalier intérieur ?',
      answer:
        "Il faut un bois qui résiste à l'usure et reste stable. Nous travaillons beaucoup le mélèze, essence de montagne, en massif ou en lamellé-collé, qui bouge moins. Le frêne, bois dur et clair, convient à un style plus contemporain, par exemple avec de l'aluminium. Le bois debout offre un rendu unique. Nous privilégions les bois locaux des Hautes-Alpes.",
    },
    {
      key: 'escalier-bois-sur-mesure-q4',
      topic: 'escaliers',
      question: 'Escalier quart tournant ou escalier droit : lequel prend le moins de place ?',
      answer:
        "À hauteur égale, le quart tournant prend moins de longueur au sol, car il tourne à 90 degrés dans un angle. L'escalier droit est plus simple à fabriquer et à monter, mais il demande une grande longueur libre. Dans une maison de montagne ou pour monter aux combles, le quart tournant est souvent le bon compromis entre confort et encombrement.",
    },
    {
      key: 'escalier-bois-sur-mesure-q5',
      topic: 'escaliers',
      question: 'Pouvez-vous remplacer un vieil escalier dans une maison ancienne ?',
      answer:
        "Oui. Dans un bâti ancien, nous avons démoli l'ancien escalier pour en construire un neuf en bois debout, avec des caissons en panneau trois plis. Dans une maison ancienne, rien n'est d'équerre : c'est tout l'intérêt d'un escalier tracé d'après les cotes réelles. Si l'ouverture dans le plancher doit être agrandie, la trémie est reprise avec un chevêtre.",
    },
    {
      key: 'escalier-bois-sur-mesure-q6',
      topic: 'escaliers',
      question: "Faites-vous aussi les garde-corps d'escalier et de balcon ?",
      answer:
        "Oui. Nous avons posé un garde-corps en bois de réemploi dans une maison rénovée à L'Argentière-la-Bessée, un garde-corps bois-métal à Prelles et une balustrade en mélèze sur un balcon à La Roche-de-Rame. Le garde-corps se dessine en même temps que l'escalier, pour un ensemble cohérent. Pour l'extérieur, nous utilisons volontiers le mélèze, qui tient bien aux intempéries.",
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
