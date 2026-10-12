/**
 * Fiche 04 : Isolation biosourcée et rénovation énergétique RGE (/isolation-biosourcee/).
 * Page pilier de la rénovation énergétique (renvoie vers les fiches 05 et 06).
 * Source : 3b-charpente-kit/docs/pages/04-isolation-biosourcee.md
 */
import type { SeedService } from '../../types'

const HERO = 'renovation-et-isolation-d-un-chalet-a-vallouise/07. Façade Sud et sa terrasse.JPG'

export const service: SeedService = {
  kind: 'service',
  slug: 'isolation-biosourcee',
  title: 'Isolation biosourcée',
  menuLabel: 'Isolation biosourcée',
  shortLabel: 'Isolation biosourcée',
  filterKey: 'isolation-biosourcee',
  order: 3,
  icon: 'leaf',
  cardText: "Fibre de bois, ouate, chanvre : chaud l'hiver, frais l'été.",
  cardLinkLabel: 'Isoler ma maison',
  image: HERO,
  schema: {
    serviceType: 'Isolation thermique avec des isolants biosourcés',
    description:
      "Isolation des toitures et des murs, par l'extérieur ou par l'intérieur, avec des isolants biosourcés (ouate de cellulose, fibre de bois, laines de chanvre, lin et coton), par un charpentier qualifié QUALIBAT-RGE installé à L'Argentière-la-Bessée.",
  },

  seo: {
    title: 'Isolation biosourcée RGE Hautes-Alpes | 3B Charpente',
    description:
      "Charpentier RGE à L'Argentière-la-Bessée depuis 2007 : isolation en ouate de cellulose, fibre de bois et chanvre, toits et murs. Demandez un devis.",
    image: HERO,
  },

  hero: {
    variant: 'photo',
    kicker: 'Rénovation énergétique · Qualifié RGE',
    title: 'Isolation **biosourcée** et rénovation énergétique dans les **Hautes-Alpes**',
    text: "Toitures et murs isolés avec des **isolants biosourcés** (ouate de cellulose, fibre de bois, chanvre, lin, coton), posés par des charpentiers **qualifiés RGE** : chaud l'hiver, frais l'été.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: "Voir nos chantiers d'isolation",
      href: '/isolation-biosourcee/#realisations',
    },
    proofs: [
      { label: 'Depuis 2007', text: "à L'Argentière-la-Bessée", icon: 'calendar' },
      { label: 'Qualifié QUALIBAT-RGE', text: 'cinq domaines', icon: 'medal' },
      { label: 'Une enveloppe continue', text: 'du toit aux murs', icon: 'layers' },
    ],
    images: [HERO],
    caption:
      "Chalet des années 1980 rénové et isolé à Vallouise : 28 cm d'isolant biosourcé dans les murs, 32 cm en toiture.",
    photoTag: 'Vallouise',
    sheet: [
      { label: 'Isolants', value: 'Ouate de cellulose, fibre de bois, chanvre, lin, coton' },
      { label: 'Parois', value: 'Toitures, rampants, murs' },
      { label: 'Qualification', value: 'QUALIBAT-RGE' },
    ],
  },

  tldr: "3B Charpente, charpentier qualifié QUALIBAT-RGE à L'Argentière-la-Bessée (Hautes-Alpes), isole maisons et chalets avec des isolants biosourcés : ouate de cellulose, fibre de bois, laines de chanvre, lin et coton. Toitures, dont le sarking (isolant posé au-dessus des chevrons), et murs, par l'extérieur ou par l'intérieur.",

  layout: [
    // Isolation globale
    {
      type: 'textImage',
      kicker: 'Isolation globale',
      title: 'Une enveloppe isolante **continue**, du toit aux murs',
      text: "Toiture, murs et ouvertures pensés ensemble : c'est ce qui rend une maison **vraiment plus économe**, et plus confortable en toute saison.\n\nPour cela, nous posons des isolants **biosourcés**, fabriqués à partir de matière issue du vivant : bois, papier recyclé, chanvre, lin, coton.",
      points: [
        'Du carbone stocké, capté par les plantes pendant leur croissance',
        "Une partie de l'humidité de l'air absorbée puis restituée : un atout pour les murs anciens, qui doivent sécher",
        '« 3B » veut dire Bio, Bâti, Bois : des isolants de la même famille que notre mélèze et notre sapin',
      ],
      images: ['renovation-et-isolation-d-un-chalet-a-vallouise/04. Façade Nord et Ouest.JPG'],
      imagePosition: 'right',
      caption:
        'Façades nord et ouest du chalet de Vallouise, isolé en laines végétales et fibre de bois.',
    },

    // Nos isolants
    {
      type: 'cards',
      variant: 'photo',
      columns: 3,
      tone: 'light',
      kicker: 'Nos matériaux',
      title: "Trois familles d'isolants **biosourcés**",
      intro:
        'Chaque isolant a sa place : nous les choisissons paroi par paroi, et les associons souvent.',
      items: [
        {
          title: 'Ouate de cellulose',
          icon: 'recycle',
          image:
            'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG',
          text: 'Du papier recyclé, posé en vrac : soufflée sur un plancher de combles, insufflée dans un caisson fermé, elle remplit chaque recoin.',
          link: {
            label: 'Voir le bâti ancien isolé',
            href: '/realisations/isolation-d-un-bati-ancien-par-l-interieur/',
          },
        },
        {
          title: 'Fibre de bois',
          icon: 'tree',
          image:
            'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG',
          text: "En panneaux rigides par l'extérieur (toits, murs, sous enduit), ou souples, en laine de bois, dans les ossatures et les rampants.",
          link: {
            label: 'Voir la toiture isolée',
            href: '/realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/',
          },
        },
        {
          title: 'Laines de chanvre, lin et coton',
          icon: 'leaf',
          image:
            'surelevation-en-ossature-bois-d-une-maison-a-briancon/8.1 remplissage en laine de bois.JPG',
          text: "En rouleaux ou en panneaux, entre les montants d'une ossature ou les chevrons. Légères, elles s'associent à la fibre de bois.",
          link: {
            label: 'Voir le chalet de Vallouise',
            href: '/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/',
          },
        },
      ],
      cta: {
        label: 'Comparer les isolants dans notre guide',
        href: '/conseils/isolant-biosource-montagne/',
      },
    },

    // Climat de montagne : hiver et été
    {
      type: 'manifesto',
      layout: 'columns',
      kicker: 'Climat de montagne',
      title: "Au chaud l'hiver, **au frais l'été**",
      text: "Un hiver long et froid, un soleil d'altitude qui chauffe fort les toits l'été : une bonne isolation répond aux deux saisons.",
      items: [
        {
          title: "L'hiver : garder la chaleur",
          text: "L'épaisseur compte, et surtout la continuité : un seul pont thermique (un point où l'isolant s'interrompt) suffit à refroidir une pièce.",
        },
        {
          title: "L'été : retarder la chaleur",
          text: 'Les isolants denses, comme la fibre de bois, freinent la chaleur du jour : elle arrive tard, quand on peut aérer.',
        },
        {
          title: "Toute l'année : bloquer l'air",
          text: "Une étanchéité à l'air continue protège l'isolant : sans elle, il perd en efficacité et la vapeur peut condenser.",
        },
      ],
    },

    // Toiture, murs, ouvertures
    {
      type: 'cards',
      variant: 'photo',
      columns: 3,
      kicker: "Nos prestations d'isolation",
      title: 'Toiture, murs, ouvertures : **par où commencer ?**',
      intro:
        'La chaleur s’échappe par plusieurs chemins : nous vous aidons à choisir les travaux utiles, et à les faire dans le bon ordre.',
      items: [
        {
          title: 'Isolation de toiture et sarking',
          icon: 'layers',
          image:
            "renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/étanchéité à l'air et caissons d'isolation.jpg",
          text: "Le sarking isole le toit par l'extérieur, au-dessus des chevrons : la charpente reste visible. Rampants et combles aussi.",
          link: { label: 'Isolation de toiture et sarking', href: '/isolation-toiture-sarking/' },
        },
        {
          title: 'Isolation des murs : ITE et bâti ancien',
          icon: 'wall',
          image: 'isolation-d-un-bati-ancien-par-l-interieur/poutre en I.JPG',
          text: "Un manteau de fibre de bois par l'extérieur, sous bardage ou enduit ; par l'intérieur pour le bâti ancien.",
          link: { label: "Isolation des murs par l'extérieur", href: '/isolation-murs-ite/' },
        },
        {
          title: 'Fenêtres de toit et menuiseries',
          icon: 'window',
          image:
            "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/vue de dessous d'un velux 78x98.JPG",
          text: "Raccordées à l'isolant et à l'étanchéité à l'air, pour ne pas créer de fuite. [Menuiseries extérieures](/isolation-murs-ite/#menuiseries)",
          link: { label: 'Fenêtres de toit', href: '/isolation-toiture-sarking/#fenetres-de-toit' },
        },
      ],
      cta: { label: 'Rénovation de charpente et combles', href: '/renovation-charpente-combles/' },
    },

    // Qualification RGE
    {
      type: 'list',
      style: 'checks',
      tone: 'light',
      kicker: 'Qualification RGE',
      title: 'Un charpentier **qualifié RGE** dans les Hautes-Alpes',
      intro:
        "RGE veut dire « reconnu garant de l'environnement ». Notre qualification QUALIBAT-RGE, au nom de Jean-Michel Tardy, couvre cinq domaines :",
      items: [
        { text: "isolation des murs par l'extérieur" },
        { text: "isolation des toitures par l'extérieur" },
        { text: "isolation par l'intérieur des murs ou rampants de toitures ou plafonds" },
        { text: 'fenêtres de toit' },
        { text: "fenêtres, volets, portes donnant sur l'extérieur" },
      ],
    },
    {
      type: 'callout',
      kind: 'aid',
      tone: 'light',
      title: 'Et les aides ?',
      text: "Le label RGE ouvre l'accès aux aides publiques (MaPrimeRénov', certificats d'économies d'énergie, éco-prêt à taux zéro…), sous conditions. Elles changent souvent : demandez à un conseiller [France Rénov'](https://france-renov.gouv.fr/annuaire-rge), service public gratuit, avant de signer.",
      link: {
        label: 'Comprendre les aides avec un artisan RGE',
        href: '/conseils/aides-renovation-artisan-rge/',
      },
    },

    // Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'commune',
      kicker: "Nos chantiers d'isolation",
      title: 'Des isolations **en photos**',
      items: [
        {
          project: 'isolation-d-un-bati-ancien-par-l-interieur',
          title: "Un bâti ancien isolé par l'intérieur",
          text: "Ossature en poutres en I, étanchéité à l'air, ouate de cellulose insufflée.",
        },
        {
          project: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
          title: 'Une toiture ancienne isolée',
          text: "Charpente doublée, fibre de bois, étanchéité à l'air et à l'eau, fenêtre de toit.",
        },
        {
          project: 'renovation-et-isolation-d-un-chalet-a-vallouise',
          title: "Rénovation et isolation d'un chalet",
          text: "28 cm d'isolant dans les murs, 32 cm en toiture, bardage en mélèze et enduit.",
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
          title: 'Lucarne et rénovation énergétique à Saint-Martin-de-Queyrières',
          link: {
            label: "Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières",
            href: '/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/',
          },
        },
        {
          title: "Rénovation d'une copropriété à Briançon",
          link: {
            label: "Rénovation d'une copropriété à Briançon",
            href: '/realisations/renovation-d-une-copropriete-a-briancon/',
          },
        },
      ],
    },

    // Méthode
    {
      type: 'steps',
      variant: 'tabs',
      tone: 'light',
      kicker: 'Notre méthode',
      title: 'De la visite **au chantier fini**',
      steps: [
        {
          title: 'Rencontre et visite',
          text: "Charpente, murs, ouvertures, traces d'humidité : nous regardons, et vous nous dites ce qui vous gêne.",
          image: 'renovation-d-une-copropriete-a-briancon/1 Soufflage après découverture.JPG',
        },
        {
          title: 'Étude sur mesure',
          text: "Par l'extérieur ou par l'intérieur, quel isolant, quelle épaisseur : paroi par paroi.",
        },
        {
          title: 'Devis détaillé',
          text: "Avec un calendrier estimatif : le bon moment pour faire le point sur les aides avec France Rénov'.",
        },
        {
          title: 'Chantier',
          text: "Renfort de charpente si besoin, isolants, étanchéité à l'air, raccords autour des fenêtres et des conduits.",
        },
        {
          title: 'Finitions',
          text: 'Bardage, enduit, lambris ou doublage : la maison retrouve son allure.',
        },
      ],
    },

    // 3B Récup'
    {
      type: 'cta',
      variant: 'slim',
      icon: 'recycle',
      title: "Rénover, c'est aussi **réemployer**",
      text: "Avant d'isoler, il faut parfois déposer. Avec 3B Récup', ce bois est trié et usiné à l'atelier, puis reposé : bardage vieux bois, garde-corps de réemploi.",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },

    // FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: "Vos questions sur **l'isolation biosourcée**",
      faqs: [
        'isolation-biosourcee-q1',
        'isolation-biosourcee-q2',
        'isolation-biosourcee-q3',
        'isolation-biosourcee-q4',
        'isolation-biosourcee-q5',
        'isolation-biosourcee-q6',
      ],
    },

    // Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre projet',
      title: 'Prêt à isoler **votre maison** ?',
      text: 'Nous venons voir votre maison, nous parlons de vos besoins, puis nous vous proposons un devis détaillé.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'isolation-biosourcee-q1',
      question: "Qu'est-ce qu'un isolant biosourcé ?",
      answer:
        "Un isolant fabriqué à partir de matières issues du vivant : bois, papier recyclé, chanvre, lin, coton. Nous posons surtout de la ouate de cellulose, des panneaux de fibre de bois et des laines de chanvre, lin et coton. Ils isolent du froid, aident à garder la fraîcheur l'été et régulent une partie de l'humidité de l'air.",
      topic: 'isolation',
    },
    {
      key: 'isolation-biosourcee-q2',
      question: 'Quels isolants biosourcés utilisez-vous ?',
      answer:
        'De la ouate de cellulose et des panneaux de fibre de bois, auxquels nous associons des laines de chanvre, lin et coton selon la paroi. Sur un chalet de Vallouise, par exemple, les murs ont reçu 28 cm de laine de chanvre, lin et coton et de fibre de bois, et la toiture 32 cm.',
      topic: 'isolation',
    },
    {
      key: 'isolation-biosourcee-q3',
      question: "L'isolation biosourcée est-elle adaptée à la montagne ?",
      answer:
        "Oui, si elle est bien conçue et bien posée. L'hiver, l'épaisseur et la continuité de l'isolant comptent ; l'été, les isolants denses comme la fibre de bois ralentissent la chaleur qui traverse le toit. Dans tous les cas, une étanchéité à l'air soignée protège l'isolant de l'humidité.",
      topic: 'isolation',
    },
    {
      key: 'isolation-biosourcee-q4',
      question: '3B Charpente est-il un charpentier RGE ?',
      answer:
        "Oui. 3B Charpente est qualifié QUALIBAT-RGE, au nom de Jean-Michel Tardy, pour l'isolation des murs et des toitures par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit et les menuiseries extérieures. Vous pouvez le vérifier dans l'annuaire RGE de France Rénov'.",
      topic: 'isolation',
    },
    {
      key: 'isolation-biosourcee-q5',
      question: 'Quelles aides pour une isolation biosourcée ?',
      answer:
        "Des aides publiques existent, sous conditions, et la plupart exigent une entreprise qualifiée RGE pour les travaux concernés. Leurs règles changent chaque année : le plus sûr est de contacter un conseiller France Rénov' (france-renov.gouv.fr), service public gratuit, avant de signer un devis.",
      topic: 'isolation',
    },
    {
      key: 'isolation-biosourcee-q6',
      question: "Un charpentier peut-il s'occuper de l'isolation ?",
      answer:
        "Oui, et c'est souvent logique : isoler un toit ou un mur à ossature, c'est travailler sur la charpente, les chevrons, les débords de toit. Nous vérifions et renforçons la structure si besoin, puis nous posons l'isolant, l'étanchéité à l'air, les fenêtres de toit et les parements.",
      topic: 'isolation',
    },
  ],

  photoAlts: [
    {
      photo: HERO,
      alt: "Façade sud d'un chalet des années 1980 rénové et isolé en matériaux biosourcés à Vallouise, avec sa terrasse en mélèze",
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG',
      alt: "Insufflation de ouate de cellulose dans une ossature, isolation d'un bâti ancien par l'intérieur",
    },
    {
      photo:
        'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG',
      alt: "Panneaux de fibre de bois posés sur une toiture ancienne à L'Argentière-la-Bessée",
    },
    {
      photo: "isolation-d-un-bati-ancien-par-l-interieur/pose de l'étanchéité à l'air.JPG",
      alt: "Pose de la membrane d'étanchéité à l'air avant l'isolation d'un bâti ancien par l'intérieur",
    },
    {
      photo:
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
      alt: "Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée",
    },
  ],

  validationPoints: [
    {
      question:
        "SIRET de la qualification RGE : l'annuaire de l'ADEME indique 494 482 714 00024, les mentions légales 494 482 714 00016. Quel est l'établissement actif ? Il faut le même partout (mentions légales, données structurées, devis).",
      decision:
        'Qualification RGE affichée (décision « Mentions RGE ») ; les mentions légales gardent le SIRET 00016.',
      priority: 'high',
    },
    {
      question:
        "Certificat QUALIBAT-RGE : numéro, date de fin de validité, et accord pour afficher le logo et un lien vers la fiche de l'annuaire (mention « À VALIDER » de la section Qualification RGE).",
      decision:
        "Mention retirée. Pas de logo Qualibat : texte « qualifié QUALIBAT-RGE », liste exacte des cinq domaines et bouton vers l'annuaire officiel France Rénov'.",
      priority: 'high',
    },
    {
      question:
        "Adresse exacte de l'annuaire RGE France Rénov' pour le bouton « Vérifier notre qualification sur France Rénov' » (à vérifier à l'intégration).",
      decision: 'Lien externe posé vers https://france-renov.gouv.fr/annuaire-rge.',
      priority: 'low',
    },
    {
      question:
        'Pose de la ouate : 3B souffle-t-il et insuffle-t-il la ouate lui-même (machine en propre) ou avec un partenaire ?',
      decision:
        'On ne précise pas qui fait quoi (décision « Travaux confiés à des partenaires ») : la page dit seulement « nous posons » et « insufflation », comme la fiche.',
      priority: 'normal',
    },
    {
      question:
        "Enduit sur fibre de bois (Vallouise) : réalisé par 3B ou par un façadier partenaire ? La méthode (étape 05) cite l'enduit parmi les finitions.",
      decision: "Texte gardé sans préciser qui réalise l'enduit.",
      priority: 'low',
    },
    {
      question:
        "Marques d'isolants : Jean souhaite-t-il citer des fabricants ? Utilise-t-il d'autres isolants biosourcés (paille, liège, laine de mouton…) ?",
      decision: 'Aucune marque, aucun autre isolant cité.',
      priority: 'low',
    },
    {
      question:
        "Chantier « Isolation d'un bâti ancien par l'intérieur » : commune (mention « À VALIDER » de la carte de réalisation), nature du mur, et emplacement du bardage en pin (intérieur ou extérieur).",
      decision:
        'Commune non indiquée (décision « Communes inconnues ») : la ligne « Commune : … » est retirée de la carte. Le texte reste celui de la fiche.',
      priority: 'normal',
    },
    {
      question:
        "Toiture ancienne à L'Argentière-la-Bessée : que désigne exactement le « doublage pour le renfort et l'isolation » (doublage des chevrons ?) ? La toiture a-t-elle été isolée par l'extérieur ou par l'intérieur ?",
      decision: 'On reprend la légende de la photo, sans interprétation.',
      priority: 'low',
    },
    {
      question:
        "Accompagnement aux aides : 3B aide-t-il à monter les dossiers (MaPrimeRénov', CEE) ou travaille-t-il avec un partenaire ?",
      decision:
        "Aides toujours « sous conditions », avec renvoi vers France Rénov'. On n'écrit pas que 3B monte les dossiers.",
      priority: 'normal',
    },
    {
      question: "Preuve « +100 projets » : à confirmer pour l'accueil.",
      decision: 'Non affichée.',
      priority: 'low',
    },
    {
      question:
        'Phrase de Jean : une citation courte sur son choix des isolants biosourcés renforcerait la page (bloc citation possible après « Isolation globale »).',
      decision: "Pas de bloc citation tant que Jean ne l'a pas donnée.",
      priority: 'low',
    },
    {
      question: "Bandeau 3B Récup' : la fiche écrit « usiné dans nos ateliers » (pluriel).",
      decision:
        'Écrit « dans notre atelier », comme le texte validé du service « Utilisation de bois de réemploi » (décision « Atelier »).',
      priority: 'low',
    },
    {
      question:
        "Photos à demander : pose de laine de chanvre/lin/coton, les trois isolants en gros plan à l'atelier, photo d'équipe sur un chantier d'isolation, « avant / après » d'une même façade (Vallouise), certificat QUALIBAT-RGE.",
      decision:
        'En attendant, la carte « Laines de chanvre, lin et coton » utilise la photo « remplissage en laine de bois » (surélévation à Briançon), comme prévu par la fiche.',
      priority: 'low',
    },
  ],
}
