/**
 * Fiche 10 : Balcons, terrasses et abris bois (/balcon-terrasse-abri-bois/).
 * Source : 3b-charpente-kit/docs/pages/10-balcon-terrasse-abri-bois.md
 */
import type { SeedService } from '../../types'

const md = (...paragraphs: string[]) => paragraphs.join('\n\n')

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
  cardText:
    "Balcons, terrasses, garde-corps et abris, pensés pour la montagne et l'âme de votre maison.",
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
    text: "Un balcon à créer ou à agrandir, une terrasse à couvrir, un abri pour la voiture ou le jardin ? 3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, conçoit et construit vos ouvrages extérieurs **sur mesure**, avec des **assemblages de charpentier** et du **bois des Hautes-Alpes**, le plus souvent du mélèze.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: 'Voir nos réalisations',
      href: '/balcon-terrasse-abri-bois/#realisations',
    },
    proofs: [{ label: 'Depuis 2007' }, { label: 'Bois des Hautes-Alpes' }],
    images: [HERO_PHOTO],
    caption:
      'Terrasse en mélèze et ses assemblages traditionnels, sur un chalet rénové à Vallouise.',
  },

  tldr: "3B Charpente, charpentier installé à L'Argentière-la-Bessée (Hautes-Alpes) depuis 2007, crée sur mesure des balcons, des terrasses couvertes ou ouvertes, des garde-corps, des abris voiture (carports) et des abris de jardin en bois. Nous travaillons le plus souvent le mélèze, avec des assemblages traditionnels comme le tenon-mortaise chevillé, et dessinons chaque ouvrage pour la maison qui le reçoit.",

  layout: [
    // 3.3 Balcons et garde-corps
    {
      type: 'textImage',
      kicker: 'Balcons et garde-corps',
      title: "Des balcons **sur mesure**, à l'âme de votre maison",
      text: md(
        "Un balcon se voit de loin : il fait partie de la façade. Nous concevons des balcons sur mesure, pensés pour s'intégrer à l'environnement de montagne et à l'âme de votre habitation, qu'il s'agisse d'un chalet, d'une maison de pays ou d'une construction récente.",
        "Un balcon en bois, c'est d'abord une structure : des poteaux ou des portiques qui portent, des solives, un plancher, puis un garde-corps. À La Roche-de-Rame, le balcon repose sur des portiques porteurs en mélèze, avec une balustrade en mélèze. À Gresse-en-Vercors, nous avons créé un balcon terrasse, dessiné avant d'être construit. À La Salle-les-Alpes, la réhabilitation d'une ancienne forge comprenait un balcon extérieur.",
        "**Les garde-corps** peuvent être tout bois, bois et métal, ou en bois de réemploi. À Prelles, une terrasse en mélèze a reçu un garde-corps bois-métal. À L'Argentière-la-Bessée, une maison rénovée a reçu un garde-corps en bois de réemploi. Hauteur et espacements obéissent à des règles de sécurité (norme NF P01-012), à intégrer dès le dessin.",
        'Un escalier pour accéder au balcon ? [Voir nos escaliers bois sur mesure](/escalier-bois-sur-mesure/)',
      ),
      images: [
        'creation-d-un-balcon-a-la-roche-de-rame/portiques porteurs et balustrade en mélèze.JPG',
        'creation-d-un-balcon-terrasse-a-gresse-en-vercors/de face.JPG',
      ],
      imagePosition: 'right',
      caption: 'Portiques porteurs et balustrade en mélèze, balcon créé à La Roche-de-Rame.',
    },

    // 3.4 Terrasses en bois
    {
      type: 'textImage',
      kicker: 'Terrasses bois',
      title: 'Terrasses en bois, **couvertes ou à ciel ouvert**',
      text: md(
        "Une terrasse en bois prolonge la maison vers l'extérieur. Couverte, elle protège de la neige et du soleil et devient une pièce de plus aux beaux jours. À ciel ouvert, elle profite pleinement de la vue.",
        'À Champcella, nous avons construit une terrasse couverte avec son local technique ; dans le prolongement de la toiture, un abri protège aussi la voiture. La charpente montre des assemblages à tenon passant, et le plancher est en mélèze de pays.',
        "À Vallouise, le balcon d'un chalet des années 1980 a été agrandi en terrasse et étanché, avec des assemblages traditionnels en mélèze et un escalier d'accès. À Prelles, la rénovation d'une maison en mélèze de pays comprenait la création d'une terrasse en mélèze et de son garde-corps bois-métal.",
        "Une terrasse qui couvre une pièce ou un local doit être étanchée, pas seulement posée : c'est un point à prévoir dès l'étude.",
      ),
      images: [
        `${CHAMPCELLA}/terrasse couverte et local technique.JPG`,
        'renovation-et-isolation-d-un-chalet-a-vallouise/09. Vue de la terrasse.JPG',
      ],
      imagePosition: 'left',
      caption: 'Terrasse couverte et local technique à Champcella.',
    },

    // 3.5 Carports et abris de jardin
    {
      type: 'cards',
      variant: 'photo',
      columns: 2,
      tone: 'light',
      kicker: 'Abris voiture et abris de jardin',
      title: 'Carport et abri de jardin : **une vraie charpente**',
      intro:
        "Un carport, ou abri voiture, est une toiture posée sur des poteaux, sans murs, qui protège la voiture de la neige et du givre. En montagne, il porte la neige tout l'hiver : sa charpente se dimensionne selon la charge de neige du lieu, qui augmente avec l'altitude.",
      items: [
        {
          title: 'Abri voiture (carport)',
          icon: 'roof',
          image: 'abris-voiture-a-l-argentiere-la-bessee/poinçon et entrait cintré.JPG',
          text: "À L'Argentière-la-Bessée, l'abri voiture que nous avons construit montre le travail du charpentier : un poinçon (la pièce verticale au centre de la ferme), un entrait cintré (la pièce horizontale du bas, ici courbe) et des assemblages à tenons et mortaises chevillés. À Champcella, l'abri voiture prolonge la toiture de la terrasse couverte.",
        },
        {
          title: 'Abri de jardin',
          icon: 'leaf',
          image: 'creation-d-un-abris-de-jardin-a-pelvoux/réalisation terminé.jpg',
          text: "À Pelvoux, nous avons créé un abri de jardin en bois, levé comme une petite charpente. Ranger les outils, le bois de chauffage ou les vélos : l'abri se dessine selon l'usage, la place disponible et la neige du secteur.",
        },
      ],
    },
    {
      type: 'richText',
      boxed: true,
      tone: 'light',
      content: md(
        'Selon sa surface et votre commune, un abri voiture ou un abri de jardin demande une déclaration préalable ou un permis de construire. Renseignez-vous en mairie avant de lancer le projet.',
        '[Notre savoir-faire en charpente traditionnelle](/charpente-bois/)',
      ),
    },

    // 3.6 Bois local et assemblages (section sombre « forêt »)
    {
      type: 'manifesto',
      layout: 'split',
      kicker: 'Bois local, savoir-faire de charpentier',
      title: 'Du **mélèze des Hautes-Alpes**, assemblé comme une charpente',
      text: md(
        "Notre bois est principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Pour les ouvrages extérieurs, le mélèze revient sur la plupart de nos chantiers : c'est une essence de montagne réputée pour sa bonne durabilité naturelle dehors. Laissé brut, il prend avec le temps une teinte grise argentée.",
        "Jean-Michel Tardy, fondateur de 3B Charpente, a passé son CAP chez les Compagnons du Devoir, puis fait son Tour de France. Les assemblages traditionnels font partie du métier. Le tenon-mortaise chevillé : le tenon, taillé au bout d'une pièce, entre dans la mortaise creusée dans l'autre, et une cheville en bois traverse le tout. Le tenon passant : le tenon traverse la pièce et reste visible. Ces assemblages donnent aux ouvrages leur solidité et leur caractère.",
        'Ce qui fait durer un ouvrage extérieur :',
        [
          "- des pieds de poteaux décollés du sol, pour que le bois ne reste pas dans l'eau ;",
          "- des pièces dessinées pour que l'eau s'écoule et que le bois sèche vite ;",
          '- un plancher ventilé par-dessous ;',
          '- une couverture ou des débords qui protègent les pièces de structure.',
        ].join('\n'),
      ),
      image: `${CHAMPCELLA}/tenon passant.JPG`,
    },

    // 3.7 Méthode
    {
      type: 'steps',
      variant: 'tabs',
      kicker: 'Notre méthode',
      title: 'Du dessin **au levage**',
      steps: [
        {
          title: 'Visite et prise de cotes',
          text: "Nous venons voir la maison, la façade, l'accès et l'exposition. Vous nous dites l'usage prévu : profiter de la vue, abriter la voiture, ranger le bois…",
        },
        {
          title: 'Dessin et devis',
          text: "Nous dessinons l'ouvrage et vous proposons une esthétique, comme pour le balcon terrasse de Gresse-en-Vercors. Vous recevez un devis détaillé et un calendrier estimatif.",
          image: 'creation-d-un-balcon-terrasse-a-gresse-en-vercors/dessin.jpg',
        },
        {
          title: 'Préparation',
          text: 'Une fois le dessin validé, les pièces sont préparées : taille, assemblages, et parfois un assemblage à blanc pour tout vérifier avant le chantier.',
        },
        {
          title: 'Levage et pose',
          text: 'Sur place, nous levons la structure, puis nous posons le plancher, le garde-corps ou la couverture.',
        },
        {
          title: 'Finitions',
          text: "Escalier d'accès, habillages, raccords avec la maison : l'ouvrage est prêt à servir.",
        },
      ],
    },

    // 3.8 Réalisations
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
          text: 'Assemblages à tenon passant, plancher en mélèze de pays, local technique, abri voiture dans le prolongement de la toiture.',
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

    // 3.9 3B Récup'
    {
      type: 'cta',
      variant: 'band',
      badge: '3B Récup’',
      kicker: "3B Récup'",
      title: 'Un garde-corps **en bois de réemploi** ?',
      text: "Le bois de déconstruction peut aussi avoir une seconde vie dehors. Sur une maison rénovée à L'Argentière-la-Bessée, nous avons posé un garde-corps en bois de réemploi et un bardage en vieux bois. Avec 3B Récup', notre initiative dédiée au réemploi, ce bois est trié, nettoyé et usiné dans nos ateliers avant d'être reposé.",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      secondary: { label: 'Le bois de réemploi', href: '/3b-recup/bois-de-reemploi/' },
      image:
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/08Garde corps en bois de réemploi.JPG',
    },

    // 3.10 FAQ
    {
      type: 'faq',
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

    // Prestations proches (pied de contenu, section 5 de la fiche)
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Prestations proches',
      services: ['escalier-bois-sur-mesure', 'charpente-bois'],
    },

    // 3.11 Appel à l'action final
    {
      type: 'cta',
      variant: 'band',
      kicker: 'Votre projet',
      title: 'Prêt à transformer **votre extérieur** ?',
      text: md(
        'Chaque projet est unique, et chaque projet chez 3B Charpente débute par une étude sur mesure. Balcon, terrasse, garde-corps ou abri : parlez-nous de votre maison, nous venons la voir et nous vous proposons un devis détaillé.',
        "*« Construire durablement, c'est construire pour l'avenir. »*",
      ),
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'balcon-terrasse-abri-bois-q1',
      topic: 'exterieur',
      question: 'Quel bois choisir pour une terrasse en montagne ?',
      answer:
        "Pour nos terrasses et balcons, nous utilisons le plus souvent du mélèze : une essence de montagne réputée pour sa durabilité naturelle en extérieur, et disponible près de chez nous. Notre bois provient principalement des Hautes-Alpes et est scié par notre partenaire local. Laissé brut, le mélèze grise avec le temps ; un saturateur permet de garder plus longtemps sa teinte d'origine.",
    },
    {
      key: 'balcon-terrasse-abri-bois-q2',
      topic: 'exterieur',
      question: 'Faut-il un permis pour construire un carport en bois ?',
      answer:
        "Cela dépend de la surface et des règles de votre commune. Un carport crée de l'emprise au sol : selon sa taille, une déclaration préalable ou un permis de construire est demandé, et le plan local d'urbanisme peut fixer des règles d'aspect ou d'implantation. Renseignez-vous en mairie dès le début du projet, avant de fixer les dimensions de l'abri.",
    },
    {
      key: 'balcon-terrasse-abri-bois-q3',
      topic: 'exterieur',
      question: 'Quelle hauteur pour un garde-corps de balcon en bois ?',
      answer:
        "En France, la norme NF P01-012 fixe les dimensions des garde-corps. En règle générale, la hauteur de protection est d'au moins 1 mètre au-dessus du plancher du balcon, et les espacements doivent empêcher un enfant de passer au travers ou d'escalader. Ces règles s'intègrent dès le dessin, que le garde-corps soit en bois, en bois-métal ou en bois de réemploi.",
    },
    {
      key: 'balcon-terrasse-abri-bois-q4',
      topic: 'exterieur',
      question: 'Pouvez-vous agrandir un balcon existant ?',
      answer:
        "Oui. Sur un chalet des années 1980 à Vallouise, nous avons agrandi le balcon en terrasse, avec un plancher en mélèze, des assemblages traditionnels et un escalier d'accès ; la terrasse a été étanchée. Avant d'agrandir, il faut vérifier la structure existante et ses appuis : un balcon plus grand porte plus de poids, notamment la neige en hiver.",
    },
    {
      key: 'balcon-terrasse-abri-bois-q5',
      topic: 'exterieur',
      question: 'Construisez-vous des abris de jardin en bois ?',
      answer:
        "Oui. À Pelvoux, nous avons créé un abri de jardin en bois, levé comme une petite charpente. Nous construisons aussi des abris voiture, comme à L'Argentière-la-Bessée, avec poinçon, entrait cintré et assemblages à tenons et mortaises chevillés. Chaque abri se dessine sur mesure, selon l'usage, la place disponible et la neige du secteur.",
    },
    {
      key: 'balcon-terrasse-abri-bois-q6',
      topic: 'exterieur',
      question: 'Combien de temps faut-il pour construire un balcon ou une terrasse ?',
      answer:
        'Le délai peut varier selon la complexité et la taille du projet, la saison et les éventuelles démarches en mairie. Nous vous fournirons un calendrier estimatif lors de notre première rencontre. En montagne, la saison compte : pour une terrasse prête aux beaux jours, mieux vaut nous en parler tôt.',
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
