import type { SeedService } from '../../types'

/** Fiche 06 : 3b-charpente-kit/docs/pages/06-isolation-murs-ite.md */

const p = (...paragraphs: string[]) => paragraphs.join('\n\n')
const list = (...items: string[]) => items.map((item) => `- ${item}`).join('\n')

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
  cardText:
    "L'ITE, ou isolation thermique par l'extérieur, enveloppe les murs d'un manteau isolant. En bâti ancien, aussi par l'intérieur.",
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
    text: "Des murs froids, des courants d'air, une façade à refaire ? 3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, isole les murs des maisons et des chalets avec des **isolants biosourcés**, issus du bois ou de plantes. Par l'extérieur, avec un manteau de fibre de bois fini par un **bardage bois ou un enduit**. Par l'intérieur, quand la façade doit rester telle qu'elle est. Avec, à chaque fois, une **étanchéité à l'air** soignée : la couche qui empêche l'air de traverser les murs.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: "Voir l'isolation d'un bâti ancien",
      href: '/realisations/isolation-d-un-bati-ancien-par-l-interieur/',
    },
    proofs: [{ label: 'Qualifié RGE murs et menuiseries' }, { label: 'Charpentiers depuis 2007' }],
    images: [HERO],
    caption:
      'Chalet des années 1980 à Vallouise : 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs.',
  },

  tldr: "3B Charpente, charpentier qualifié RGE à L'Argentière-la-Bessée, isole les murs des maisons des Hautes-Alpes. Par l'extérieur (ITE, isolation thermique par l'extérieur) : panneaux de fibre de bois, puis bardage en mélèze ou enduit. Par l'intérieur, pour le bâti ancien : ossature en poutres en I et ouate de cellulose insufflée. L'étanchéité à l'air est traitée à chaque fois.",

  layout: [
    // 3.3 L'ITE, un manteau isolant (légende de la photo : voir photoAlts)
    {
      type: 'manifesto',
      layout: 'split',
      kicker: "Isolation par l'extérieur",
      title: "L'ITE, un **manteau isolant** autour de la maison",
      text: p(
        "L'ITE, pour isolation thermique par l'extérieur, consiste à poser l'isolant sur la face extérieure des murs, puis à le protéger par un parement : un bardage bois ou un enduit. Le mur existant se retrouve à l'intérieur de l'enveloppe isolante, au chaud. C'est la façon la plus directe de créer une enveloppe isolante continue.",
        'Ce que ça change :',
        list(
          "**moins de ponts thermiques** : l'isolant passe devant les planchers et les murs de refend, sans interruption ;",
          "**aucune surface perdue** à l'intérieur, et peu de travaux dans les pièces ;",
          "**un meilleur confort d'été** : les murs maçonnés, restés côté intérieur, amortissent les variations de température ;",
          "**une façade neuve** : l'isolation et le ravalement se font en une fois.",
        ),
        "Selon le mur, les panneaux de fibre de bois sont fixés directement sur la maçonnerie, ou posés sur une ossature bois rapportée, garnie d'isolant souple. Plus dense que beaucoup d'isolants, la fibre de bois aide aussi à garder la fraîcheur l'été.",
        "**En montagne, deux points à anticiper.** D'abord, l'épaisseur ajoutée doit rester à l'abri sous les débords de toit, qu'on appelle ici les dépassées : il faut parfois les prolonger. Sur le chalet de Vallouise, la dépassée nord a été agrandie. Ensuite, une ITE change l'aspect de la façade : une déclaration préalable de travaux est en général nécessaire en mairie.",
      ),
      image: DEPASSEE,
    },
    // 3.4 Deux finitions : bardage bois ou enduit (le texte sous les cartes passe en introduction)
    {
      type: 'cards',
      variant: 'photo',
      columns: 2,
      kicker: 'Finitions de façade',
      title: 'Bardage bois **ou enduit** sur fibre de bois',
      intro:
        "Sur le chalet de Vallouise, les deux finitions se répondent : une partie de l'extérieur est habillée de bardage en mélèze, l'autre est enduite sur une fibre de bois.",
      items: [
        {
          title: 'Bardage bois',
          icon: 'tree',
          image: BARDAGE_MELEZE,
          text: "Le bardage se pose sur des tasseaux qui laissent une lame d'air ventilée derrière les lames : la façade sèche vite après la pluie ou la neige. Notre bois est principalement du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Sur nos chantiers, on trouve du bardage en mélèze, en pin, en douglas, et même en vieux bois de réemploi.",
        },
        {
          title: 'Enduit sur fibre de bois',
          icon: 'wall',
          image: ENDUIT,
          text: "Certains panneaux de fibre de bois sont conçus pour recevoir directement un enduit, appliqué en plusieurs couches avec une trame d'armature. La façade garde un aspect minéral, proche de celui des maisons de pays, tout en étant isolée par un matériau biosourcé.",
        },
      ],
      cta: {
        label: 'Voir le chalet de Vallouise',
        href: '/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/',
      },
    },
    // 3.5 Bâti ancien : isoler par l'intérieur
    {
      type: 'textImage',
      tone: 'light',
      kicker: 'Bâti ancien',
      title: "Isoler un bâti ancien **par l'intérieur**",
      text: p(
        "L'isolation par l'extérieur n'est pas toujours possible : façade en pierre à préserver, maison mitoyenne, limite de propriété, règles d'urbanisme. On isole alors les murs par l'intérieur, un domaine de notre qualification RGE.",
        "Un mur ancien en pierre doit pouvoir sécher. Une isolation par l'intérieur mal conçue peut piéger l'humidité dans la maçonnerie. Nous utilisons des isolants biosourcés, capables d'absorber puis de restituer une partie de l'humidité, et une étanchéité à l'air continue côté pièce, souvent avec une membrane dite frein-vapeur, qui limite le passage de la vapeur tout en laissant le mur sécher.",
        "Sur notre chantier « Isolation d'un bâti ancien par l'intérieur », la technique se lit dans les photos :",
        list(
          '**une ossature en poutres en I** : des poutres légères en forme de I, faites de deux semelles en bois reliées par une âme mince. Elles créent des caissons profonds avec très peu de bois, donc peu de ponts thermiques ;',
          '**des panneaux OSB3**, faits de grandes lamelles de bois collées, adaptés aux ambiances humides ;',
          "**la pose de l'étanchéité à l'air** ;",
          "**l'insufflation de ouate de cellulose** : l'isolant en vrac est envoyé sous pression dans le caisson fermé, qu'il remplit sans laisser de vide ;",
          '**le doublage, les encadrements des ouvertures, de nouvelles menuiseries et un bardage en pin.**',
        ),
        "Reste à traiter les planchers et les murs de refend qui touchent la façade : ce sont des ponts thermiques que l'isolation par l'intérieur ne coupe pas d'elle-même. Ils se traitent au cas par cas.",
      ),
      images: [POUTRE_I, INSUFFLATION],
      imagePosition: 'right',
      cta: {
        label: 'Voir le chantier en photos',
        href: '/realisations/isolation-d-un-bati-ancien-par-l-interieur/',
      },
      links: [
        {
          label: 'Rénover une maison ancienne en montagne : notre guide',
          href: '/conseils/renover-chalet-maison-ancienne/',
        },
      ],
    },
    // 3.6 L'étanchéité à l'air
    {
      type: 'manifesto',
      layout: 'split',
      kicker: "Étanchéité à l'air",
      title: "L'étanchéité à l'air, **la couche qu'on ne voit pas**",
      text: p(
        "L'étanchéité à l'air, c'est une couche continue qui empêche l'air intérieur de traverser les parois. On la réalise avec une membrane, ou avec des panneaux dont les joints sont collés à l'adhésif, et des manchettes autour des gaines et des tuyaux qui traversent. Elle ne se confond pas avec l'étanchéité à l'eau, qui protège de la pluie côté extérieur. Elle ne remplace pas non plus la ventilation : une maison bien étanche doit être bien ventilée.",
        'Pourquoi elle compte :',
        list(
          "**le confort** : moins de courants d'air froids, surtout par grand vent ;",
          "**la durée de vie** : l'air chaud de la maison transporte de la vapeur d'eau ; s'il traverse l'isolant, cette vapeur peut condenser dans le mur froid ;",
          "**la performance** : un isolant traversé par l'air isole moins bien.",
        ),
        "On la retrouve sur nos chantiers : pose de l'étanchéité à l'air sur le bâti ancien isolé par l'intérieur, étanchéité à l'air de la toiture ancienne de L'Argentière-la-Bessée, et panneaux trois plis en épicéa pour le contreventement et l'étanchéité à l'air de la toiture d'une surélévation à Briançon.",
        "Une mesure de perméabilité à l'air (test d'infiltrométrie), réalisée par un opérateur spécialisé, permet de vérifier le résultat.",
      ),
      image: ETANCHEITE_AIR,
    },
    // 3.7 Menuiseries extérieures
    {
      type: 'textImage',
      anchor: 'menuiseries',
      kicker: 'Menuiseries extérieures',
      title: 'Fenêtres, volets, portes : **raccorder les ouvertures**',
      text: p(
        "Changer les fenêtres sans isoler les murs, ou isoler les murs sans s'occuper des fenêtres, laisse des points faibles. Les deux se pensent ensemble : la position de la fenêtre dans l'épaisseur du mur, son raccord à l'isolant et à l'étanchéité à l'air comptent autant que la fenêtre elle-même.",
        "Avec une ITE, on avance souvent la fenêtre vers l'isolant, ou on prolonge l'isolant sur les côtés de l'ouverture, pour éviter un pont thermique tout autour. Par l'intérieur, l'encadrement fait le lien entre la menuiserie, l'ossature et la membrane.",
        "« Fenêtres, volets, portes donnant sur l'extérieur » fait partie de nos domaines RGE. Sur le bâti ancien isolé par l'intérieur, le chantier a compris les encadrements des ouvertures et de nouvelles menuiseries.",
      ),
      images: [ENCADREMENT, MENUISERIES],
      imagePosition: 'left',
      caption: "Encadrement d'une ouverture, raccordé à l'isolation d'un bâti ancien.",
    },
    // 3.8 Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'brand',
      tone: 'light',
      kicker: 'Nos chantiers de murs',
      title: 'Des murs isolés **en photos**',
      items: [
        {
          project: 'isolation-d-un-bati-ancien-par-l-interieur',
          title: "Isolation d'un bâti ancien par l'intérieur",
          text: "Poutres en I, panneaux OSB3, étanchéité à l'air, ouate de cellulose insufflée, encadrements, menuiseries et bardage en pin.",
        },
        {
          project: 'renovation-et-isolation-d-un-chalet-a-vallouise',
          title: "Rénovation et isolation d'un chalet à Vallouise",
          text: 'Chalet des années 1980 entièrement rénové : 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs, bardage en mélèze et enduit sur fibre de bois, ouvertures créées ou modifiées.',
        },
        {
          project: 'maison-a-ossature-bois-dans-les-monts-du-lyonnais',
          title: 'Maison à ossature bois dans les monts du Lyonnais',
          text: "Construction neuve : fibre de bois sur l'ossature bois, bardage en douglas, support maçonné en pierres récupérées.",
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },
    // 3.8 Ligne « Voir aussi »
    {
      type: 'richText',
      tone: 'light',
      content:
        "Voir aussi : [Rénovation d'une maison d'habitation à L'Argentière-la-Bessée](/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/) (bardage en vieux bois, pignon vitré).",
    },
    // 3.9 Aides et RGE
    {
      type: 'cta',
      variant: 'slim',
      icon: 'euro',
      kicker: 'Aides et RGE',
      title: 'Isolation des murs : **les aides**',
      text: "3B Charpente est qualifié RGE (Qualibat) pour l'isolation des murs par l'extérieur, l'isolation par l'intérieur des murs, et les fenêtres, volets et portes donnant sur l'extérieur. Ce label ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Les règles changent chaque année : faites le point avec un conseiller France Rénov' ([france-renov.gouv.fr](https://france-renov.gouv.fr/)) avant de signer un devis.",
      primary: {
        label: 'Notre guide des aides avec un artisan RGE',
        href: '/conseils/aides-renovation-artisan-rge/',
      },
    },
    // 3.10 3B Récup'
    {
      type: 'cta',
      variant: 'card',
      badge: '3B Récup’',
      kicker: "3B Récup'",
      title: 'Un bardage **en vieux bois** ?',
      text: "Sur une maison rénovée à L'Argentière-la-Bessée, nous avons posé un bardage en vieux bois et un garde-corps en bois de réemploi. Avec 3B Récup', notre initiative dédiée au réemploi, le bois issu de la déconstruction est trié, nettoyé et usiné dans nos ateliers avant d'être reposé. Une façade isolée peut aussi raconter une histoire.",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      secondary: { label: 'Le bois de réemploi', href: '/3b-recup/bois-de-reemploi/' },
      image: BARDAGE_VIEUX_BOIS,
    },
    // 3.11 FAQ
    {
      type: 'faq',
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
    // Liens internes : bloc « Prestations proches » (pied de contenu)
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Prestations proches',
      services: ['isolation-toiture-sarking', 'maison-ossature-bois'],
    },
    // Liens internes : bloc « Pour aller plus loin »
    {
      type: 'list',
      style: 'bullets',
      title: 'Pour aller plus loin',
      items: [
        {
          text: '[Quel isolant biosourcé choisir en montagne ?](/conseils/isolant-biosource-montagne/)',
        },
      ],
    },
    // 3.12 Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre façade',
      title: 'Des murs à isoler, **une façade à refaire** ?',
      text: p(
        "Chaque projet est unique, et chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons voir vos murs, nous vous expliquons les options, par l'extérieur ou par l'intérieur, et nous vous proposons un devis détaillé.",
        "[Toutes nos solutions d'isolation biosourcée](/isolation-biosourcee/)",
      ),
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'isolation-murs-ite-q1',
      topic: 'isolation',
      question: "Isolation par l'extérieur ou par l'intérieur : que choisir ?",
      answer:
        "L'isolation par l'extérieur (ITE) traite mieux les ponts thermiques, ne prend pas de place dans les pièces et rénove la façade. Elle demande un accord de la mairie et des débords de toit suffisants. L'isolation par l'intérieur convient quand la façade doit être conservée ou que l'ITE est impossible. Dans un mur ancien, elle se conçoit avec des isolants qui gèrent l'humidité.",
    },
    {
      key: 'isolation-murs-ite-q2',
      topic: 'isolation',
      question: "Quel isolant pour une isolation par l'extérieur en montagne ?",
      answer:
        "Nous utilisons des panneaux de fibre de bois, un isolant biosourcé qui reçoit un bardage ou, pour certains panneaux, un enduit. Sa densité aide aussi au confort d'été. Sur un chalet de Vallouise, les murs ont reçu 28 cm de laine de chanvre/lin/coton et de fibre de bois, avec un bardage en mélèze d'un côté et un enduit sur fibre de bois de l'autre.",
    },
    {
      key: 'isolation-murs-ite-q3',
      topic: 'isolation',
      question: "Qu'est-ce que l'étanchéité à l'air d'une maison ?",
      answer:
        "C'est une couche continue, membrane ou panneaux aux joints collés, qui empêche l'air de traverser les murs et la toiture. Elle évite les courants d'air, protège l'isolant de la vapeur d'eau qui pourrait condenser dans la paroi et lui permet d'isoler vraiment. Elle ne remplace pas la ventilation et se distingue de l'étanchéité à l'eau, qui protège de la pluie.",
    },
    {
      key: 'isolation-murs-ite-q4',
      topic: 'isolation',
      question: "Faut-il une autorisation pour isoler ses murs par l'extérieur ?",
      answer:
        "En général, oui. Une ITE modifie l'aspect extérieur de la maison : une déclaration préalable de travaux est le plus souvent demandée en mairie, et le plan local d'urbanisme peut encadrer les matériaux, les teintes ou les débords. Dans certains secteurs protégés, d'autres avis s'ajoutent. Renseignez-vous en mairie avant de fixer le calendrier des travaux.",
    },
    {
      key: 'isolation-murs-ite-q5',
      topic: 'isolation',
      question: "Peut-on isoler un mur en pierre par l'intérieur ?",
      answer:
        "Oui, avec précaution : un mur en pierre doit pouvoir sécher. On choisit des isolants biosourcés capables de gérer l'humidité, avec une étanchéité à l'air continue côté pièce et un frein-vapeur adapté. Sur un bâti ancien, nous avons ainsi monté une ossature en poutres en I, posé l'étanchéité à l'air et insufflé de la ouate de cellulose dans les caissons.",
    },
    {
      key: 'isolation-murs-ite-q6',
      topic: 'isolation',
      question: "Faut-il changer les fenêtres en même temps que l'isolation des murs ?",
      answer:
        "C'est souvent le bon moment. La position de la fenêtre dans le mur, son raccord à l'isolant et à l'étanchéité à l'air comptent autant que la fenêtre elle-même. En traitant les deux ensemble, on évite un pont thermique tout autour de l'ouverture. Les fenêtres, volets et portes donnant sur l'extérieur font partie de nos domaines RGE.",
    },
  ],

  validationPoints: [
    {
      question:
        'Menuiseries : types de menuiseries proposées (bois, bois-aluminium…), fabricant ou atelier, volets ou portes déjà posés ? 3B fournit-il et pose-t-il lui-même fenêtres, volets et portes ? (La galerie montre « menuiseries livrées! » sans plus de détail.)',
      decision:
        'Mention retirée de la section « Menuiseries extérieures » : la page cite seulement le domaine RGE et les encadrements et nouvelles menuiseries du bâti ancien, sans matériau ni fabricant.',
      priority: 'normal',
    },
    {
      question: "Chantier « Isolation d'un bâti ancien par l'intérieur » : dans quelle commune ?",
      decision:
        'Aucune commune affichée (décision « communes inconnues ») : la mention « Commune : … » de la carte de réalisation est retirée.',
      priority: 'normal',
    },
    {
      question:
        "Chantier « Isolation d'un bâti ancien par l'intérieur » : nature du mur (pierre ?), épaisseur de ouate insufflée, rôle exact des panneaux OSB3, emplacement du bardage en pin (intérieur ou extérieur) ?",
      decision:
        "La page décrit ce que montrent les photos, sans en déduire l'ordre des étapes, l'épaisseur ni l'emplacement du bardage.",
      priority: 'normal',
    },
    {
      question:
        "Enduit sur fibre de bois : réalisé par 3B ou par un façadier partenaire ? Quel système d'enduit ?",
      decision:
        "La carte « Enduit sur fibre de bois » décrit la technique sans dire qui applique l'enduit ni citer de système (décision « travaux confiés à des partenaires »).",
      priority: 'normal',
    },
    {
      question:
        "Chalet de Vallouise : quelles façades sont en bardage mélèze, lesquelles en enduit ? L'agrandissement de la dépassée nord est-il lié à l'isolation par l'extérieur ? L'isolation des murs y est-elle par l'extérieur ?",
      decision:
        "Texte de la fiche gardé (« une partie… l'autre… », dépassée nord agrandie donnée en exemple), sans préciser les façades ni la technique d'isolation des murs.",
      priority: 'normal',
    },
    {
      question:
        'ITE sur maçonnerie : 3B a-t-il déjà posé une ITE sur une maison existante (hors Vallouise) ? Une réalisation de ce type renforcerait beaucoup la page (photo de fibre de bois fixée sur une maçonnerie).',
      decision:
        "Aucune réalisation d'ITE sur maison existante présentée ; la technique est décrite en général.",
      priority: 'normal',
    },
    {
      question: "Test d'infiltrométrie : 3B en propose-t-il ou en fait-il réaliser ?",
      decision:
        'Cité de façon générale (« réalisée par un opérateur spécialisé »), sans engagement de 3B.',
      priority: 'low',
    },
    {
      question:
        'Démarches en mairie : 3B aide-t-il à préparer la déclaration préalable (plans, choix de teinte) ?',
      decision:
        "La page dit seulement qu'une déclaration préalable est en général nécessaire, sans dire qui la prépare.",
      priority: 'low',
    },
    {
      question:
        'Essences de bardage : le pin et le douglas viennent-ils aussi de la Scierie Savoldelli ?',
      decision:
        'Texte gardé : bois « principalement » mélèze et sapin des Hautes-Alpes ; pin et douglas cités comme essences posées, sans provenance.',
      priority: 'low',
    },
    {
      question:
        "Bardage en vieux bois et garde-corps en bois de réemploi (maison d'habitation à L'Argentière-la-Bessée) : ce bois vient-il d'une déconstruction faite par 3B ?",
      decision:
        "Présentés comme « bardage en vieux bois » et « garde-corps en bois de réemploi », sans dire d'où vient ce bois : la phrase « Ce bois vient de la déconstruction » est remplacée par une description générale de 3B Récup' (le bois issu de la déconstruction est trié, nettoyé et usiné dans nos ateliers).",
      priority: 'high',
    },
    {
      question:
        "Qualification RGE : quel SIRET est rattaché (00024 dans l'annuaire ADEME, 00016 dans les mentions légales) ? Numéro et date de fin de validité du certificat Qualibat ?",
      decision:
        "Mention « qualifié RGE (Qualibat) » sans logo ni numéro de certificat : « QUALIBAT-RGE » des textes de la fiche est écrit « RGE (Qualibat) ». Aides toujours « sous conditions », avec renvoi vers France Rénov'.",
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
