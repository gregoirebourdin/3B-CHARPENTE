/**
 * Fiche 10 : Balcons, terrasses et abris bois (/balcon-terrasse-abri-bois/).
 * Source : 3b-charpente-kit/docs/pages/10-balcon-terrasse-abri-bois.md
 */
import type { SeedService } from '../../types'

const HERO_PHOTO =
  'renovation-et-isolation-d-un-chalet-a-vallouise/10. Terrasse en mélèze et ses assemblages traditionnels.JPG'
const CHAMPCELLA = 'construction-d-une-terrasse-couverte-a-champcella'

export const service: SeedService = {
  kind: 'service',
  slug: 'balcon-terrasse-abri-bois',
  title: 'Balcons, terrasses et abris bois',
  menuLabel: 'Balcons, terrasses et abris',
  shortLabel: 'Balcons, terrasses et abris',
  filterKey: 'balcons-terrasses-abris',
  order: 9,
  icon: 'balcony',
  cardText: 'Balcons, terrasses, garde-corps et abris en mélèze, assemblés comme une charpente.',
  cardLinkLabel: 'Voir balcons et terrasses',
  image: HERO_PHOTO,
  schema: {
    serviceType: 'Construction de balcons, terrasses, garde-corps et abris en bois',
    description:
      "Conception et construction sur mesure de balcons, de terrasses couvertes ou ouvertes, de garde-corps, d'abris voiture (carports) et d'abris de jardin en bois, principalement en mélèze, avec des assemblages traditionnels de charpentier, par 3B Charpente à L'Argentière-la-Bessée.",
  },

  seo: {
    title: 'Terrasse, balcon et carport bois Hautes-Alpes | 3B Charpente',
    description:
      "Balcons, terrasses, garde-corps et abris voiture en mélèze, sur mesure, par un charpentier de L'Argentière-la-Bessée depuis 2007. Demandez un devis.",
    image: HERO_PHOTO,
  },

  hero: {
    variant: 'photo',
    kicker: 'Balcons · Terrasses · Abris',
    title: 'Balcons, terrasses et **abris en bois** dans les **Hautes-Alpes**',
    text: 'Un balcon à créer, une terrasse à couvrir, un abri pour la voiture ou le jardin ? Nous les construisons **sur mesure**, avec des **assemblages de charpentier** et du **bois des Hautes-Alpes**, le plus souvent du mélèze.',
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: 'Voir nos réalisations',
      href: '/balcon-terrasse-abri-bois/#realisations',
    },
    proofs: [
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: 'Bois des Hautes-Alpes', text: 'surtout du mélèze', icon: 'tree' },
      {
        label: 'Assemblages de charpentier',
        text: 'tenons et mortaises chevillés',
        icon: 'hammer',
      },
    ],
    images: [HERO_PHOTO],
    caption:
      'Terrasse en mélèze et ses assemblages traditionnels, sur un chalet rénové à Vallouise.',
    photoTag: 'Vallouise',
    sheet: [
      { label: 'Ouvrages', value: 'Balcons, terrasses, garde-corps, abris' },
      { label: 'Bois', value: 'Mélèze des Hautes-Alpes' },
      { label: 'Assemblages', value: 'Tenon-mortaise chevillé, tenon passant' },
    ],
  },

  tldr: "3B Charpente, charpentier à L'Argentière-la-Bessée (Hautes-Alpes) depuis 2007, crée sur mesure des balcons, des terrasses couvertes ou ouvertes, des garde-corps, des abris voiture (carports) et des abris de jardin en bois. Le plus souvent en mélèze, avec des assemblages traditionnels comme le tenon-mortaise chevillé.",

  layout: [
    // Balcons
    {
      type: 'textImage',
      kicker: 'Balcons et garde-corps',
      title: "Des balcons **sur mesure**, à l'âme de votre maison",
      text: "Un balcon se voit de loin : **il fait partie de la façade**. Nous le dessinons pour la montagne et pour votre maison, chalet, maison de pays ou construction récente.\n\nC'est d'abord une structure : poteaux ou portiques, solives, plancher, puis garde-corps.",
      points: [
        'À La Roche-de-Rame : portiques porteurs et balustrade en mélèze',
        "À Gresse-en-Vercors : un balcon terrasse, dessiné avant d'être construit",
        'À La Salle-les-Alpes : un balcon extérieur pour une ancienne forge réhabilitée',
      ],
      images: [
        'creation-d-un-balcon-a-la-roche-de-rame/portiques porteurs et balustrade en mélèze.JPG',
        'creation-d-un-balcon-terrasse-a-gresse-en-vercors/de face.JPG',
      ],
      imagePosition: 'right',
      caption: 'Portiques porteurs et balustrade en mélèze, balcon créé à La Roche-de-Rame.',
      links: [
        {
          label: 'Un escalier pour y accéder ? Nos escaliers sur mesure',
          href: '/escalier-bois-sur-mesure/',
        },
      ],
    },
    // Garde-corps
    {
      type: 'cards',
      variant: 'icon',
      columns: 3,
      tone: 'light',
      kicker: 'Garde-corps',
      title: 'Des garde-corps **tout bois, bois-métal ou de réemploi**',
      intro:
        'Hauteur et espacements obéissent à des règles de sécurité (norme NF P01-012) : nous les intégrons dès le dessin.',
      items: [
        {
          title: 'Tout bois',
          icon: 'tree',
          text: 'Une balustrade en mélèze, comme sur le balcon de La Roche-de-Rame.',
        },
        {
          title: 'Bois et métal',
          icon: 'shield',
          text: 'À Prelles, sur une terrasse en mélèze de pays.',
        },
        {
          title: 'Bois de réemploi',
          icon: 'recycle',
          text: "À L'Argentière-la-Bessée, sur une maison rénovée.",
        },
      ],
    },
    // Terrasses
    {
      type: 'textImage',
      kicker: 'Terrasses bois',
      title: 'Terrasses en bois, **couvertes ou à ciel ouvert**',
      text: 'Couverte, elle protège de la neige et du soleil, et devient **une pièce de plus** aux beaux jours. À ciel ouvert, elle profite pleinement de la vue.',
      points: [
        'À Champcella : terrasse couverte et local technique, tenons passants, plancher en mélèze de pays',
        "À Vallouise : le balcon d'un chalet des années 1980 agrandi en terrasse, avec escalier d'accès",
        'À Prelles : une terrasse en mélèze et son garde-corps bois-métal',
        "Au-dessus d'une pièce ou d'un local, une terrasse s'étanche : à prévoir dès l'étude",
      ],
      images: [
        `${CHAMPCELLA}/terrasse couverte et local technique.JPG`,
        'renovation-et-isolation-d-un-chalet-a-vallouise/09. Vue de la terrasse.JPG',
      ],
      imagePosition: 'left',
      caption: 'Terrasse couverte et local technique à Champcella.',
    },
    // Carports et abris de jardin
    {
      type: 'cards',
      variant: 'photo',
      columns: 2,
      tone: 'light',
      kicker: 'Abris voiture et abris de jardin',
      title: 'Carport et abri de jardin : **une vraie charpente**',
      intro:
        "Un carport est une toiture sur poteaux, sans murs. En montagne, il porte la neige tout l'hiver : sa charpente se dimensionne selon la charge de neige du lieu.",
      items: [
        {
          title: 'Abri voiture (carport)',
          icon: 'roof',
          image: 'abris-voiture-a-l-argentiere-la-bessee/poinçon et entrait cintré.JPG',
          text: "À L'Argentière-la-Bessée : poinçon, entrait cintré, tenons et mortaises chevillés. À Champcella, l'abri prolonge le toit de la terrasse.",
        },
        {
          title: 'Abri de jardin',
          icon: 'leaf',
          image: 'creation-d-un-abris-de-jardin-a-pelvoux/réalisation terminé.jpg',
          text: "À Pelvoux, levé comme une petite charpente. Outils, bois de chauffage, vélos : il se dessine selon l'usage et la place.",
        },
      ],
    },
    {
      type: 'callout',
      kind: 'tip',
      tone: 'light',
      title: 'Avant de construire un abri',
      text: 'Selon sa surface et votre commune, un abri voiture ou de jardin demande une déclaration préalable ou un permis de construire. Renseignez-vous en mairie avant de lancer le projet.',
      link: { label: 'Notre savoir-faire en charpente traditionnelle', href: '/charpente-bois/' },
    },
    // Bois local et assemblages
    {
      type: 'manifesto',
      layout: 'split',
      kicker: 'Bois local, savoir-faire de charpentier',
      title: 'Du **mélèze des Hautes-Alpes**, assemblé comme une charpente',
      text: 'Surtout du **mélèze et du sapin des Hautes-Alpes**, sciés par notre partenaire local, la Scierie Savoldelli. Dehors, le mélèze revient sur la plupart de nos chantiers : durable par nature, il grise en argent avec le temps.',
      items: [
        {
          title: 'Tenon-mortaise chevillé',
          text: "Le tenon, taillé au bout d'une pièce, entre dans la mortaise de l'autre ; une cheville en bois traverse le tout.",
        },
        { title: 'Tenon passant', text: 'Le tenon traverse la pièce et reste visible.' },
      ],
      emphasis:
        'Jean-Michel Tardy a passé son CAP chez les Compagnons du Devoir, puis fait son Tour de France : les assemblages, c’est le métier.',
      image: `${CHAMPCELLA}/tenon passant.JPG`,
    },
    {
      type: 'list',
      style: 'checks',
      kicker: 'Durabilité',
      title: 'Ce qui fait **durer** un ouvrage extérieur',
      text: 'Des détails de charpentier, pensés dès le dessin.',
      items: [
        { text: "Des pieds de poteaux décollés du sol : le bois ne reste pas dans l'eau" },
        { text: "Des pièces dessinées pour que l'eau s'écoule et que le bois sèche vite" },
        { text: 'Un plancher ventilé par-dessous' },
        { text: 'Une couverture ou des débords qui protègent la structure' },
      ],
    },
    // Méthode
    {
      type: 'steps',
      variant: 'tabs',
      tone: 'light',
      kicker: 'Notre méthode',
      title: 'Du dessin **au levage**',
      steps: [
        {
          title: 'Visite et prise de cotes',
          text: "Façade, accès, exposition, et l'usage prévu : profiter de la vue, abriter la voiture, ranger le bois…",
        },
        {
          title: 'Dessin et devis',
          text: 'Nous dessinons l’ouvrage, comme le balcon terrasse de Gresse-en-Vercors. Devis détaillé et calendrier estimatif.',
          image: 'creation-d-un-balcon-terrasse-a-gresse-en-vercors/dessin.jpg',
        },
        {
          title: 'Préparation',
          text: 'Taille et assemblages, parfois un assemblage à blanc pour tout vérifier avant le chantier.',
        },
        {
          title: 'Levage et pose',
          text: 'La structure est levée sur place, puis viennent le plancher, le garde-corps ou la couverture.',
        },
        {
          title: 'Finitions',
          text: "Escalier d'accès, habillages, raccords avec la maison : l'ouvrage est prêt à servir.",
        },
      ],
    },
    // Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'brand',
      kicker: 'Nos réalisations',
      title: 'Balcons, terrasses et abris **en photos**',
      items: [
        {
          project: 'creation-d-un-balcon-a-la-roche-de-rame',
          title: "Création d'un balcon à La Roche-de-Rame",
          text: 'Portiques porteurs et balustrade en mélèze.',
        },
        {
          project: 'construction-d-une-terrasse-couverte-a-champcella',
          title: "Construction d'une terrasse couverte à Champcella",
          text: 'Tenons passants, mélèze de pays, local technique et abri voiture.',
        },
        {
          project: 'abris-voiture-a-l-argentiere-la-bessee',
          title: "Abri voiture à L'Argentière-la-Bessée",
          text: 'Poinçon et entrait cintré, tenons et mortaises chevillés.',
        },
        {
          project: 'creation-d-un-balcon-terrasse-a-gresse-en-vercors',
          title: 'Balcon terrasse à Gresse-en-Vercors',
        },
        {
          project: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles',
          title: 'Terrasse en mélèze et garde-corps bois-métal à Prelles',
        },
        {
          project: 'renovation-et-isolation-d-un-chalet-a-vallouise',
          title: 'Balcon agrandi en terrasse à Vallouise',
        },
        {
          project: 'creation-d-un-abris-de-jardin-a-pelvoux',
          title: 'Abri de jardin à Pelvoux',
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },
    // 3B Récup'
    {
      type: 'cta',
      variant: 'slim',
      icon: 'recycle',
      title: 'Un garde-corps **en bois de réemploi** ?',
      text: "Avec 3B Récup', le bois de déconstruction est trié, nettoyé et usiné à l'atelier, puis reposé dehors : garde-corps, bardage. Voir le [bois de réemploi](/3b-recup/bois-de-reemploi/).",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },
    // FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: 'Vos questions sur **les ouvrages extérieurs**',
      faqs: [
        'balcon-terrasse-abri-bois-q1',
        'balcon-terrasse-abri-bois-q2',
        'balcon-terrasse-abri-bois-q3',
        'balcon-terrasse-abri-bois-q4',
        'balcon-terrasse-abri-bois-q5',
        'balcon-terrasse-abri-bois-q6',
      ],
    },
    // Prestations proches
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Prestations proches',
      services: ['escalier-bois-sur-mesure', 'charpente-bois', 'extension-surelevation-bois'],
    },
    // Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre projet',
      title: 'Prêt à transformer **votre extérieur** ?',
      text: 'Balcon, terrasse, garde-corps ou abri : nous venons voir votre maison, puis nous vous proposons un devis détaillé.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'balcon-terrasse-abri-bois-q1',
      topic: 'exterieur',
      question: 'Quel bois choisir pour une terrasse en montagne ?',
      answer:
        "Le mélèze, le plus souvent : une essence de montagne réputée pour sa durabilité naturelle dehors, qui pousse près de chez nous. Notre bois vient surtout des Hautes-Alpes, scié par notre partenaire local. Laissé brut, le mélèze grise avec le temps ; un saturateur garde plus longtemps sa teinte d'origine.",
    },
    {
      key: 'balcon-terrasse-abri-bois-q2',
      topic: 'exterieur',
      question: 'Faut-il un permis pour construire un carport en bois ?',
      answer:
        "Cela dépend de la surface et de votre commune. Un carport crée de l'emprise au sol : selon sa taille, une déclaration préalable ou un permis de construire est demandé, et le plan local d'urbanisme peut fixer l'aspect ou l'implantation. Renseignez-vous en mairie avant de fixer les dimensions.",
    },
    {
      key: 'balcon-terrasse-abri-bois-q3',
      topic: 'exterieur',
      question: 'Quelle hauteur pour un garde-corps de balcon en bois ?',
      answer:
        "En règle générale, au moins 1 mètre au-dessus du plancher du balcon, selon la norme NF P01-012. Les espacements doivent empêcher un enfant de passer au travers ou d'escalader. Ces règles s'intègrent dès le dessin, en bois, bois-métal ou bois de réemploi.",
    },
    {
      key: 'balcon-terrasse-abri-bois-q4',
      topic: 'exterieur',
      question: 'Pouvez-vous agrandir un balcon existant ?',
      answer:
        "Oui. À Vallouise, nous avons agrandi en terrasse le balcon d'un chalet des années 1980 : plancher en mélèze, assemblages traditionnels, escalier d'accès, terrasse étanchée. Avant d'agrandir, on vérifie la structure et ses appuis : un balcon plus grand porte plus de poids, neige comprise.",
    },
    {
      key: 'balcon-terrasse-abri-bois-q5',
      topic: 'exterieur',
      question: 'Construisez-vous des abris de jardin en bois ?',
      answer:
        "Oui. À Pelvoux, nous avons créé un abri de jardin levé comme une petite charpente. Nous construisons aussi des abris voiture, comme à L'Argentière-la-Bessée, avec poinçon, entrait cintré et tenons-mortaises chevillés. Chaque abri se dessine selon l'usage, la place et la neige du secteur.",
    },
    {
      key: 'balcon-terrasse-abri-bois-q6',
      topic: 'exterieur',
      question: 'Combien de temps faut-il pour construire un balcon ou une terrasse ?',
      answer:
        'Le délai varie selon la taille du projet, la saison et les démarches en mairie : nous vous donnons un calendrier estimatif dès la première rencontre. En montagne, la saison compte : pour une terrasse prête aux beaux jours, parlez-nous-en tôt.',
    },
  ],

  photoAlts: [
    {
      photo: HERO_PHOTO,
      alt: 'Terrasse en mélèze et ses assemblages traditionnels sur un chalet rénové à Vallouise',
    },
    {
      photo:
        'creation-d-un-balcon-a-la-roche-de-rame/portiques porteurs et balustrade en mélèze.JPG',
      alt: 'Balcon en bois sur portiques porteurs, avec balustrade en mélèze, à La Roche-de-Rame',
    },
    {
      photo: `${CHAMPCELLA}/terrasse couverte et local technique.JPG`,
      alt: 'Terrasse couverte en bois et son local technique à Champcella',
    },
    {
      photo: `${CHAMPCELLA}/tenon passant.JPG`,
      alt: "Assemblage à tenon passant sur la charpente d'une terrasse couverte à Champcella",
    },
    {
      photo: 'abris-voiture-a-l-argentiere-la-bessee/poinçon et entrait cintré.JPG',
      alt: "Abri voiture en bois avec poinçon et entrait cintré à L'Argentière-la-Bessée",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/7Garde corps bois-métal (1).JPG',
      alt: 'Garde-corps bois et métal sur une terrasse en mélèze à Prelles',
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/7Garde corps bois-métal (1).jpeg',
      alt: 'Garde-corps bois et métal sur une terrasse en mélèze à Prelles',
    },
  ],

  validationPoints: [
    {
      question:
        'Devis gratuit : est-ce le cas ? Si oui, la meta description peut finir par « Devis gratuit. » au lieu de « Demandez un devis. ».',
      decision: "On n'écrit pas « gratuit » : la meta description garde « Demandez un devis. ».",
      priority: 'normal',
    },
    {
      question:
        "Méthode : Jean dessine-t-il les balcons, terrasses et abris comme les escaliers (« nous dessinons… et proposons une esthétique ») ? Les pièces sont-elles taillées à l'atelier ? Le dessin du balcon de Gresse-en-Vercors est-il de 3B ?",
      decision:
        "Étape 02 publiée comme rédigée dans la fiche (« Nous dessinons l'ouvrage et vous proposons une esthétique, comme pour le balcon terrasse de Gresse-en-Vercors »). L'étape 03 parle de pièces « préparées », sans parler d'atelier.",
      priority: 'high',
    },
    {
      question:
        "Dimensionnement à la neige : les charpentes d'abris, de balcons et de terrasses couvertes sont-elles calculées par 3B ou par un bureau d'études ?",
      decision:
        'La page dit seulement que la charpente « se dimensionne selon la charge de neige du lieu », sans dire qui fait le calcul.',
      priority: 'normal',
    },
    {
      question: 'Finition du mélèze : 3B le laisse-t-il brut ou propose-t-il un saturateur ?',
      decision:
        'La FAQ « Quel bois choisir » évoque le saturateur de façon générale, sans dire que 3B le pose.',
      priority: 'low',
    },
    {
      question:
        "Démarches d'urbanisme : 3B fournit-il les plans pour la déclaration préalable ou le permis de construire d'un carport ?",
      decision: 'Non mentionné : la page renvoie seulement vers la mairie.',
      priority: 'normal',
    },
    {
      question:
        'Garde-corps bois-métal de Prelles : la partie métal est-elle faite par un serrurier partenaire ? Faut-il le nommer ?',
      decision: "On ne précise pas qui a fait la partie métal et aucun partenaire n'est nommé.",
      priority: 'low',
    },
    {
      question:
        "Terrasse étanchée de Vallouise : quel système d'étanchéité (membrane ?) et qui l'a posé ?",
      decision:
        'Le texte dit seulement que la terrasse « a été étanchée », sans système ni intervenant.',
      priority: 'low',
    },
    {
      question:
        "Abri voiture de L'Argentière-la-Bessée et abri de jardin de Pelvoux : quelle essence de bois et quel type de couverture ?",
      decision: 'Essence et couverture non précisées.',
      priority: 'low',
    },
    {
      question:
        'Prelles : la galerie dit « commune de Prelles », or Prelles est un village de la commune de Saint-Martin-de-Queyrières. Corriger le titre de la fiche réalisation ?',
      decision:
        "La page cite « Prelles », comme la galerie. L'adresse de la fiche réalisation reste inchangée (décision « Adresses des fiches »).",
      priority: 'low',
    },
    {
      question:
        'Rénovation de vieux balcons : 3B remplace-t-il des balcons de chalet abîmés ? Si oui, ajouter un exemple dans la section « Balcons et garde-corps ».',
      decision: 'Non ajouté.',
      priority: 'low',
    },
    {
      question:
        'Terrasses sur plots ou en lames composites : confirmer que 3B ne fait que du bois massif.',
      decision: "La page n'en parle pas.",
      priority: 'low',
    },
    {
      question:
        'Scierie Savoldelli : la fiche la nommait deux fois sur la page (section « Bois local » et FAQ « Quel bois choisir »).',
      decision:
        'Nommée une seule fois, dans la section « Bois local », avec la formulation validée « notre partenaire local, la Scierie Savoldelli ». Dans la FAQ, « scié par la Scierie Savoldelli » devient « scié par notre partenaire local ».',
      priority: 'low',
    },
    {
      question:
        "Photos à fournir : une vue d'ensemble de l'abri voiture de L'Argentière-la-Bessée (la galerie n'a que deux détails, alors que la page vise « carport bois ») ; un carport sous la neige ; le balcon de La Roche-de-Rame vu de plus loin ; un pied de poteau ou un plancher ventilé ; des photos d'atelier (taille d'un tenon, assemblage à blanc) ; le garde-corps en bois de réemploi en gros plan.",
      decision: 'Page publiée avec les photos actuelles de la galerie.',
      priority: 'normal',
    },
  ],
}
