import type { SeedService } from '../../types'

/** Fiche 06 : 3b-charpente-kit/docs/pages/06-isolation-murs-ite.md */

const HERO = 'renovation-et-isolation-d-un-chalet-a-vallouise/04. Façade Nord et Ouest.JPG'
const DEPASSEE = 'renovation-et-isolation-d-un-chalet-a-vallouise/05. Dépassée Nord agrandie.JPG'
const ENDUIT = 'renovation-et-isolation-d-un-chalet-a-vallouise/07. Façade Sud et sa terrasse.JPG'
const BARDAGE_MELEZE =
  'refection-d-une-charpente-a-l-argentiere-la-bessee/pose du bardage mélèze.JPG'
const FIBRE_OSSATURE =
  "maison-a-ossature-bois-dans-les-monts-du-lyonnais/Fibre de bois sur l'ossature bois.jpg"
const POUTRE_I = 'isolation-d-un-bati-ancien-par-l-interieur/poutre en I.JPG'
const INSUFFLATION =
  'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG'
const ETANCHEITE_AIR = "isolation-d-un-bati-ancien-par-l-interieur/pose de l'étanchéité à l'air.JPG"
const ENCADREMENT = 'isolation-d-un-bati-ancien-par-l-interieur/encadrement.JPG'
const MENUISERIES = 'isolation-d-un-bati-ancien-par-l-interieur/menuiseries livrées!.JPG'
const BARDAGE_VIEUX_BOIS =
  'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG'

export const service: SeedService = {
  kind: 'service',
  slug: 'isolation-murs-ite',
  title: 'Isolation des murs : ITE et bâti ancien',
  menuLabel: 'Isolation des murs (ITE)',
  shortLabel: 'Isolation des murs',
  filterKey: 'isolation-murs',
  order: 5,
  icon: 'wall',
  cardTitle: 'Isolation des murs (ITE et bâti ancien)',
  cardText: "Un manteau isolant par l'extérieur ; par l'intérieur pour le bâti ancien.",
  cardLinkLabel: 'Isoler mes murs',
  image: HERO,
  schema: {
    serviceType: "Isolation thermique des murs par l'extérieur et par l'intérieur",
    description:
      "Isolation thermique par l'extérieur (ITE) en panneaux de fibre de bois, finie par un bardage bois ou un enduit, isolation du bâti ancien par l'intérieur avec de la ouate de cellulose insufflée, étanchéité à l'air et pose de menuiseries extérieures, par un charpentier qualifié RGE (Qualibat) à L'Argentière-la-Bessée.",
  },

  seo: {
    title: "Isolation par l'extérieur (ITE) Hautes-Alpes | 3B Charpente",
    description:
      "Isolation des murs par l'extérieur en fibre de bois, bardage mélèze ou enduit, et bâti ancien isolé en ouate. Charpentier RGE dans les Hautes-Alpes. Devis.",
    image: HERO,
  },

  hero: {
    variant: 'photo',
    kicker: 'Isolation des murs · Qualifié RGE',
    title:
      "Isolation des murs **par l'extérieur** (ITE) et du **bâti ancien** dans les Hautes-Alpes",
    text: "Murs froids, courants d'air, façade à refaire ? Nous isolons les murs en **isolants biosourcés** : **par l'extérieur**, sous un bardage bois ou un enduit, ou **par l'intérieur** quand la façade doit rester telle qu'elle est.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: "Voir l'isolation d'un bâti ancien",
      href: '/realisations/isolation-d-un-bati-ancien-par-l-interieur/',
    },
    proofs: [
      { label: 'Qualifié RGE', text: 'murs et menuiseries', icon: 'medal' },
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: "Étanchéité à l'air", text: 'traitée à chaque fois', icon: 'shield' },
    ],
    images: [HERO],
    caption:
      'Chalet des années 1980 à Vallouise : 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs.',
    photoTag: 'Vallouise',
    sheet: [
      { label: "Par l'extérieur", value: 'Fibre de bois, bardage ou enduit' },
      { label: "Par l'intérieur", value: 'Poutres en I, ouate insufflée' },
      { label: 'Ouvertures', value: 'Fenêtres, volets, portes raccordés' },
    ],
  },

  tldr: "3B Charpente, charpentier qualifié RGE à L'Argentière-la-Bessée, isole les murs des maisons des Hautes-Alpes. Par l'extérieur (ITE) : fibre de bois, puis bardage en mélèze ou enduit. Par l'intérieur, pour le bâti ancien : ossature en poutres en I et ouate de cellulose insufflée. L'étanchéité à l'air est traitée à chaque fois.",

  layout: [
    // L'ITE, un manteau isolant
    {
      type: 'manifesto',
      layout: 'split',
      kicker: "Isolation par l'extérieur",
      title: "L'ITE, un **manteau isolant** autour de la maison",
      text: "L'ITE (isolation thermique par l'extérieur) pose l'isolant **sur la face extérieure des murs**, protégé par un bardage bois ou un enduit. Le mur existant se retrouve au chaud, dans l'enveloppe isolante.",
      items: [
        {
          title: 'Moins de ponts thermiques',
          text: "L'isolant passe devant les planchers et les murs de refend, sans interruption.",
        },
        {
          title: 'Aucune surface perdue',
          text: "Rien ne change dans les pièces, et peu de travaux à l'intérieur.",
        },
        {
          title: "Plus de confort l'été",
          text: 'Les murs maçonnés, restés côté intérieur, amortissent les écarts de température.',
        },
        {
          title: 'Une façade neuve',
          text: 'Isolation et ravalement se font en une fois.',
        },
      ],
      emphasis:
        "Selon le mur, la fibre de bois est fixée sur la maçonnerie, ou sur une ossature bois rapportée garnie d'isolant souple.",
      image: DEPASSEE,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: 'En montagne, deux points à anticiper',
      text: "**Les dépassées** : l'épaisseur ajoutée doit rester à l'abri sous les débords de toit, qu'il faut parfois prolonger. À Vallouise, la dépassée nord a été agrandie.\n\n**La mairie** : une ITE change l'aspect de la façade. Une déclaration préalable est en général nécessaire.",
    },
    // Deux finitions : bardage bois ou enduit
    {
      type: 'cards',
      variant: 'photo',
      columns: 2,
      tone: 'light',
      kicker: 'Finitions de façade',
      title: 'Bardage bois **ou enduit** sur fibre de bois',
      intro:
        'Sur le chalet de Vallouise, les deux se répondent : une partie en bardage de mélèze, l’autre enduite sur fibre de bois.',
      items: [
        {
          title: 'Bardage bois',
          icon: 'tree',
          image: BARDAGE_MELEZE,
          text: "Posé sur tasseaux, avec une lame d'air ventilée : la façade sèche vite. Surtout du mélèze et du sapin des Hautes-Alpes, sciés par la Scierie Savoldelli.",
        },
        {
          title: 'Enduit sur fibre de bois',
          icon: 'wall',
          image: ENDUIT,
          text: "Certains panneaux de fibre de bois reçoivent directement un enduit, armé d'une trame. Un aspect minéral, proche des maisons de pays.",
        },
      ],
      cta: {
        label: 'Voir le chalet de Vallouise',
        href: '/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/',
      },
    },
    // Bâti ancien : isoler par l'intérieur
    {
      type: 'textImage',
      kicker: 'Bâti ancien',
      title: "Isoler un bâti ancien **par l'intérieur**",
      text: "Façade en pierre à préserver, maison mitoyenne, règles d'urbanisme : l'ITE n'est pas toujours possible. On isole alors **par l'intérieur**, un domaine de notre qualification RGE.\n\nUn mur en pierre **doit pouvoir sécher**. Mal conçue, une isolation intérieure piège l'humidité dans la maçonnerie.",
      points: [
        "Des isolants biosourcés, qui absorbent puis restituent une partie de l'humidité",
        "Une étanchéité à l'air continue côté pièce",
        'Souvent, une membrane frein-vapeur : elle limite la vapeur tout en laissant le mur sécher',
      ],
      images: [POUTRE_I],
      imagePosition: 'right',
      links: [
        {
          label: 'Rénover une maison ancienne en montagne : notre guide',
          href: '/conseils/renover-chalet-maison-ancienne/',
        },
      ],
    },
    {
      type: 'list',
      style: 'checks',
      tone: 'light',
      kicker: 'Sur le chantier',
      title: "Un bâti ancien isolé **par l'intérieur**, en photos",
      text: 'Les planchers et les murs de refend qui touchent la façade restent des ponts thermiques : nous les traitons au cas par cas.',
      image: 'isolation-d-un-bati-ancien-par-l-interieur/panneaux OSB3.JPG',
      caption: "Panneaux OSB3 sur l'ossature d'un bâti ancien isolé par l'intérieur.",
      items: [
        {
          title: 'Ossature en poutres en I',
          text: 'Deux semelles en bois reliées par une âme mince : des caissons profonds, très peu de bois, peu de ponts thermiques.',
        },
        {
          title: 'Panneaux OSB3',
          text: 'De grandes lamelles de bois collées, adaptées aux ambiances humides.',
        },
        { title: "Étanchéité à l'air", text: "La couche qui empêche l'air de traverser le mur." },
        {
          title: 'Ouate de cellulose insufflée',
          text: 'Envoyée sous pression dans le caisson fermé, elle le remplit sans laisser de vide.',
        },
        {
          title: 'Finitions',
          text: 'Doublage, encadrements des ouvertures, nouvelles menuiseries et bardage en pin.',
        },
      ],
      cta: {
        label: 'Voir le chantier en photos',
        href: '/realisations/isolation-d-un-bati-ancien-par-l-interieur/',
      },
    },
    // L'étanchéité à l'air
    {
      type: 'cards',
      variant: 'icon',
      kicker: "Étanchéité à l'air",
      title: "L'étanchéité à l'air, **la couche qu'on ne voit pas**",
      intro:
        "Une couche continue, membrane ou panneaux aux joints collés, qui empêche l'air intérieur de traverser les parois. Elle ne remplace ni l'étanchéité à l'eau, ni la ventilation.",
      asideImage: ETANCHEITE_AIR,
      items: [
        {
          title: 'Le confort',
          icon: 'snow',
          text: "Moins de courants d'air froids, surtout par grand vent.",
        },
        {
          title: 'La durée de vie',
          icon: 'shield',
          text: "L'air chaud porte de la vapeur d'eau : s'il traverse l'isolant, elle peut condenser dans le mur froid.",
        },
        {
          title: 'La performance',
          icon: 'layers',
          text: "Un isolant traversé par l'air isole moins bien.",
        },
      ],
    },
    {
      type: 'callout',
      kind: 'site',
      text: "Étanchéité à l'air posée sur le bâti ancien isolé par l'intérieur, sur la toiture ancienne de L'Argentière-la-Bessée, et en panneaux trois plis d'épicéa sur une surélévation à Briançon. Un test d'infiltrométrie, par un opérateur spécialisé, permet de vérifier le résultat.",
    },
    // Menuiseries extérieures
    {
      type: 'textImage',
      anchor: 'menuiseries',
      tone: 'light',
      kicker: 'Menuiseries extérieures',
      title: 'Fenêtres, volets, portes : **raccorder les ouvertures**',
      text: "Fenêtres et murs se pensent ensemble. **La position de la fenêtre** dans le mur et ses raccords à l'isolant comptent autant que la fenêtre elle-même.",
      points: [
        "Avec une ITE : la fenêtre avancée vers l'isolant, ou l'isolant prolongé autour de l'ouverture",
        "Par l'intérieur : l'encadrement relie la menuiserie, l'ossature et la membrane",
        "Fenêtres, volets, portes donnant sur l'extérieur : un domaine de notre qualification RGE",
      ],
      images: [ENCADREMENT, MENUISERIES],
      imagePosition: 'left',
      caption: "Encadrement d'une ouverture, raccordé à l'isolation d'un bâti ancien.",
    },
    // Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'brand',
      kicker: 'Nos chantiers de murs',
      title: 'Des murs isolés **en photos**',
      items: [
        {
          project: 'isolation-d-un-bati-ancien-par-l-interieur',
          title: "Isolation d'un bâti ancien par l'intérieur",
          text: "Poutres en I, OSB3, étanchéité à l'air, ouate insufflée, menuiseries et bardage en pin.",
        },
        {
          project: 'renovation-et-isolation-d-un-chalet-a-vallouise',
          title: "Rénovation et isolation d'un chalet à Vallouise",
          text: "28 cm d'isolant biosourcé dans les murs, bardage en mélèze et enduit sur fibre de bois.",
        },
        {
          project: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais',
          title: 'Maison à ossature bois dans les monts du Lyonnais',
          text: "Fibre de bois sur l'ossature, bardage en douglas, support maçonné en pierres récupérées.",
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },
    {
      type: 'list',
      style: 'pills',
      kicker: 'Voir aussi',
      items: [
        {
          title: "Maison rénovée à L'Argentière-la-Bessée : bardage en vieux bois, pignon vitré",
          link: {
            label: "Rénovation d'une maison d'habitation à L'Argentière-la-Bessée",
            href: '/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/',
          },
        },
      ],
    },
    // Aides et RGE
    {
      type: 'callout',
      kind: 'aid',
      tone: 'light',
      title: 'Isolation des murs : les aides',
      text: "Qualifiés RGE (Qualibat) pour les murs par l'extérieur, les murs par l'intérieur et les fenêtres, volets et portes : vos travaux peuvent ouvrir droit à des aides, sous conditions. Les règles changent chaque année : voyez un conseiller [France Rénov'](https://france-renov.gouv.fr/) avant de signer.",
      link: {
        label: 'Notre guide des aides avec un artisan RGE',
        href: '/conseils/aides-renovation-artisan-rge/',
      },
    },
    // 3B Récup'
    {
      type: 'textImage',
      kicker: "3B Récup'",
      title: 'Un bardage **en vieux bois** ?',
      text: "Sur une maison rénovée à L'Argentière-la-Bessée : un **bardage en vieux bois** et un garde-corps en bois de réemploi.\n\nAvec 3B Récup', le bois issu de la déconstruction est trié, nettoyé et usiné dans nos ateliers avant d'être reposé. Une façade isolée peut aussi raconter une histoire.",
      badge: "3B Récup'",
      images: [BARDAGE_VIEUX_BOIS],
      imagePosition: 'right',
      cta: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      links: [{ label: 'Le bois de réemploi', href: '/3b-recup/bois-de-reemploi/' }],
    },
    // FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: "Vos questions sur **l'isolation des murs**",
      faqs: [
        'isolation-murs-ite-q1',
        'isolation-murs-ite-q2',
        'isolation-murs-ite-q3',
        'isolation-murs-ite-q4',
        'isolation-murs-ite-q5',
        'isolation-murs-ite-q6',
      ],
    },
    // Prestations proches
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Prestations proches',
      services: ['isolation-toiture-sarking', 'maison-ossature-bois', 'isolation-biosourcee'],
    },
    // Pour aller plus loin
    {
      type: 'list',
      style: 'pills',
      kicker: 'Pour aller plus loin',
      items: [
        {
          title: 'Quel isolant biosourcé choisir en montagne ?',
          link: {
            label: 'Quel isolant biosourcé choisir en montagne ?',
            href: '/conseils/isolant-biosource-montagne/',
          },
        },
      ],
    },
    // Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre façade',
      title: 'Des murs à isoler, **une façade à refaire** ?',
      text: "Nous venons voir vos murs, nous vous expliquons les options, par l'extérieur ou par l'intérieur, puis nous vous proposons un devis détaillé.",
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'isolation-murs-ite-q1',
      topic: 'isolation',
      question: "Isolation par l'extérieur ou par l'intérieur : que choisir ?",
      answer:
        "L'extérieur (ITE) si c'est possible : elle traite mieux les ponts thermiques, ne prend pas de place dans les pièces et rénove la façade, mais demande l'accord de la mairie et des débords de toit suffisants. L'intérieur quand la façade doit être conservée. Dans un mur ancien, avec des isolants qui gèrent l'humidité.",
    },
    {
      key: 'isolation-murs-ite-q2',
      topic: 'isolation',
      question: "Quel isolant pour une isolation par l'extérieur en montagne ?",
      answer:
        "Des panneaux de fibre de bois : un isolant biosourcé qui reçoit un bardage ou, pour certains panneaux, un enduit, et dont la densité aide au confort d'été. À Vallouise, les murs d'un chalet ont reçu 28 cm de laine de chanvre/lin/coton et de fibre de bois, sous bardage en mélèze et sous enduit.",
    },
    {
      key: 'isolation-murs-ite-q3',
      topic: 'isolation',
      question: "Qu'est-ce que l'étanchéité à l'air d'une maison ?",
      answer:
        "Une couche continue, membrane ou panneaux aux joints collés, qui empêche l'air de traverser les murs et la toiture. Elle évite les courants d'air, protège l'isolant de la condensation et lui permet d'isoler vraiment. Elle ne remplace pas la ventilation et se distingue de l'étanchéité à l'eau, contre la pluie.",
    },
    {
      key: 'isolation-murs-ite-q4',
      topic: 'isolation',
      question: "Faut-il une autorisation pour isoler ses murs par l'extérieur ?",
      answer:
        "En général, oui. Une ITE change l'aspect de la maison : une déclaration préalable est le plus souvent demandée en mairie, et le plan local d'urbanisme peut encadrer matériaux, teintes ou débords. En secteur protégé, d'autres avis s'ajoutent. Renseignez-vous avant de fixer le calendrier des travaux.",
    },
    {
      key: 'isolation-murs-ite-q5',
      topic: 'isolation',
      question: "Peut-on isoler un mur en pierre par l'intérieur ?",
      answer:
        "Oui, avec précaution : un mur en pierre doit pouvoir sécher. Il faut des isolants biosourcés qui gèrent l'humidité, une étanchéité à l'air continue côté pièce et un frein-vapeur adapté. Sur un bâti ancien, nous avons monté une ossature en poutres en I et insufflé de la ouate de cellulose dans les caissons.",
    },
    {
      key: 'isolation-murs-ite-q6',
      topic: 'isolation',
      question: "Faut-il changer les fenêtres en même temps que l'isolation des murs ?",
      answer:
        "C'est souvent le bon moment. La position de la fenêtre dans le mur et ses raccords à l'isolant et à l'étanchéité à l'air comptent autant que la fenêtre elle-même : traités ensemble, ils évitent un pont thermique autour de l'ouverture. Fenêtres, volets et portes font partie de nos domaines RGE.",
    },
  ],

  validationPoints: [
    {
      question:
        'Menuiseries : types de menuiseries proposées (bois, bois-aluminium…), fabricant ou atelier, volets ou portes déjà posés ? 3B fournit-il et pose-t-il lui-même fenêtres, volets et portes ? (La galerie montre « menuiseries livrées! » sans plus de détail.)',
      decision:
        'Mention retirée de la section « Menuiseries extérieures » : la page cite seulement le domaine RGE et les encadrements et nouvelles menuiseries du bâti ancien, sans matériau ni fabricant.',
      priority: 'normal',
    },
    {
      question: "Chantier « Isolation d'un bâti ancien par l'intérieur » : dans quelle commune ?",
      decision:
        'Aucune commune affichée (décision « communes inconnues ») : la mention « Commune : … » de la carte de réalisation est retirée.',
      priority: 'normal',
    },
    {
      question:
        "Chantier « Isolation d'un bâti ancien par l'intérieur » : nature du mur (pierre ?), épaisseur de ouate insufflée, rôle exact des panneaux OSB3, emplacement du bardage en pin (intérieur ou extérieur) ?",
      decision:
        "La page décrit ce que montrent les photos, en liste à coches (sans ordre d'étapes), sans épaisseur ni emplacement du bardage.",
      priority: 'normal',
    },
    {
      question:
        "Enduit sur fibre de bois : réalisé par 3B ou par un façadier partenaire ? Quel système d'enduit ?",
      decision:
        "La carte « Enduit sur fibre de bois » décrit la technique sans dire qui applique l'enduit ni citer de système (décision « travaux confiés à des partenaires »).",
      priority: 'normal',
    },
    {
      question:
        "Chalet de Vallouise : quelles façades sont en bardage mélèze, lesquelles en enduit ? L'agrandissement de la dépassée nord est-il lié à l'isolation par l'extérieur ? L'isolation des murs y est-elle par l'extérieur ?",
      decision:
        "Texte de la fiche gardé (« une partie… l'autre… », dépassée nord agrandie donnée en exemple), sans préciser les façades ni la technique d'isolation des murs.",
      priority: 'normal',
    },
    {
      question:
        'ITE sur maçonnerie : 3B a-t-il déjà posé une ITE sur une maison existante (hors Vallouise) ? Une réalisation de ce type renforcerait beaucoup la page (photo de fibre de bois fixée sur une maçonnerie).',
      decision:
        "Aucune réalisation d'ITE sur maison existante présentée ; la technique est décrite en général.",
      priority: 'normal',
    },
    {
      question: "Test d'infiltrométrie : 3B en propose-t-il ou en fait-il réaliser ?",
      decision: 'Cité de façon générale (« par un opérateur spécialisé »), sans engagement de 3B.',
      priority: 'low',
    },
    {
      question:
        'Démarches en mairie : 3B aide-t-il à préparer la déclaration préalable (plans, choix de teinte) ?',
      decision:
        "La page dit seulement qu'une déclaration préalable est en général nécessaire, sans dire qui la prépare.",
      priority: 'low',
    },
    {
      question:
        'Essences de bardage : le pin et le douglas viennent-ils aussi de la Scierie Savoldelli ?',
      decision:
        'Texte gardé : bois « surtout » mélèze et sapin des Hautes-Alpes ; pin et douglas cités seulement dans les chantiers, sans provenance.',
      priority: 'low',
    },
    {
      question:
        "Bardage en vieux bois et garde-corps en bois de réemploi (maison d'habitation à L'Argentière-la-Bessée) : ce bois vient-il d'une déconstruction faite par 3B ?",
      decision:
        "Présentés comme « bardage en vieux bois » et « garde-corps en bois de réemploi », sans dire d'où vient ce bois : la phrase « Ce bois vient de la déconstruction » est remplacée par une description générale de 3B Récup' (le bois issu de la déconstruction est trié, nettoyé et usiné dans nos ateliers).",
      priority: 'high',
    },
    {
      question:
        "Qualification RGE : quel SIRET est rattaché (00024 dans l'annuaire ADEME, 00016 dans les mentions légales) ? Numéro et date de fin de validité du certificat Qualibat ?",
      decision:
        "Mention « qualifié RGE (Qualibat) » sans logo ni numéro de certificat : « QUALIBAT-RGE » des textes de la fiche est écrit « RGE (Qualibat) ». Aides toujours « sous conditions », avec renvoi vers France Rénov'.",
      priority: 'normal',
    },
  ],

  photoAlts: [
    {
      photo: HERO,
      alt: "Façades nord et ouest d'un chalet des années 1980 isolé en fibre de bois et laines végétales à Vallouise, après rénovation",
      caption:
        'Chalet des années 1980 à Vallouise : 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs.',
    },
    {
      photo: DEPASSEE,
      alt: 'Dépassée nord agrandie sur un chalet rénové et isolé à Vallouise',
      caption: 'Dépassée nord agrandie sur un chalet rénové et isolé à Vallouise.',
    },
    {
      photo: FIBRE_OSSATURE,
      alt: 'Panneaux de fibre de bois posés côté extérieur sur une ossature bois, maison neuve dans les monts du Lyonnais',
    },
    {
      photo: POUTRE_I,
      alt: "Ossature en poutres en I montée contre un mur ancien avant l'insufflation de ouate de cellulose",
    },
    {
      photo: INSUFFLATION,
      alt: "Insufflation de ouate de cellulose dans les caissons d'une ossature, isolation d'un bâti ancien par l'intérieur",
    },
    {
      photo: ETANCHEITE_AIR,
      alt: "Pose de la membrane d'étanchéité à l'air sur l'ossature d'un bâti ancien isolé par l'intérieur",
    },
    {
      photo: ENCADREMENT,
      alt: "Encadrement d'une ouverture raccordé à l'isolation d'un bâti ancien par l'intérieur",
      caption: "Encadrement d'une ouverture, raccordé à l'isolation d'un bâti ancien.",
    },
  ],
}
