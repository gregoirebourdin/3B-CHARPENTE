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
  cardText:
    "Fibre de bois, ouate de cellulose, laine de chanvre, lin et coton : le confort d'hiver et d'été.",
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
    text: "3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007, isole les toitures et les murs avec des **isolants biosourcés**, fabriqués à partir de matières végétales : ouate de cellulose, fibre de bois, laines de chanvre, lin et coton. Nous créons une **enveloppe isolante continue**, posée par des charpentiers **qualifiés RGE**, pour un confort d'hiver et d'été.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: "Voir nos chantiers d'isolation",
      href: '/isolation-biosourcee/#realisations',
    },
    proofs: [{ label: 'Depuis 2007' }, { label: 'Qualifié QUALIBAT-RGE' }],
    images: [HERO],
    caption:
      "Chalet des années 1980 rénové et isolé à Vallouise : 28 cm d'isolant biosourcé dans les murs, 32 cm en toiture.",
  },

  tldr: "3B Charpente, charpentier qualifié QUALIBAT-RGE à L'Argentière-la-Bessée (Hautes-Alpes), isole maisons et chalets avec des isolants biosourcés, issus du bois, du papier recyclé ou de plantes : ouate de cellulose, fibre de bois, laines de chanvre, lin et coton. Nous isolons les toitures, dont le sarking (isolant posé au-dessus des chevrons), et les murs, par l'extérieur ou par l'intérieur.",

  layout: [
    // 3.3 Isolation globale (bloc manifeste, titre à gauche, texte et photo)
    {
      type: 'manifesto',
      layout: 'split',
      kicker: 'Isolation globale',
      title: 'Une enveloppe isolante **continue**, du toit aux murs',
      text: "Isolez toute votre habitation, pas seulement une pièce ou un pan de toit. Notre travail consiste à créer une enveloppe isolante continue : la toiture, les murs et les ouvertures sont pensés ensemble. C'est ce qui améliore vraiment l'efficacité énergétique d'une maison. C'est aussi ce qui apporte un confort d'hiver et d'été.\n\nPour cela, nous utilisons des matériaux **biosourcés**. Un isolant biosourcé est fabriqué à partir de matière issue du vivant : le bois, le papier recyclé, le chanvre, le lin, le coton. Ces isolants contiennent du carbone capté par les plantes pendant leur croissance. Ils peuvent aussi absorber puis restituer une partie de l'humidité de l'air, un atout dans les maisons anciennes, dont les murs doivent pouvoir sécher.\n\nChez 3B Charpente, ce choix vient de loin : « 3B » veut dire Bio, Bâti, Bois. Nous travaillons principalement le mélèze et le sapin des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Nous isolons avec des matériaux de la même famille.",
      image: 'renovation-et-isolation-d-un-chalet-a-vallouise/04. Façade Nord et Ouest.JPG',
    },

    // 3.4 Nos isolants
    {
      type: 'cards',
      variant: 'photo',
      columns: 3,
      kicker: 'Nos matériaux',
      title: "Trois familles d'isolants **biosourcés**",
      intro:
        "Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois. Selon la paroi, nous les associons à des laines végétales. Chaque isolant a sa place.",
      items: [
        {
          title: 'Ouate de cellulose',
          icon: 'recycle',
          image:
            'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG',
          text: "Fabriquée à partir de papier recyclé, elle se pose en vrac. Soufflée sur un plancher de combles, ou insufflée sous pression dans un caisson fermé (mur, rampant, ossature), elle remplit chaque recoin sans laisser de vide.\n\n*Sur nos chantiers : insufflation de ouate de cellulose dans une ossature en poutres en I, pour isoler un bâti ancien par l'intérieur.*",
          link: {
            label: 'Voir le chantier',
            href: '/realisations/isolation-d-un-bati-ancien-par-l-interieur/',
          },
        },
        {
          title: 'Fibre de bois',
          icon: 'tree',
          image:
            'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG',
          text: "Fabriquée à partir de bois défibré, elle existe en panneaux rigides et en panneaux souples. Les panneaux rigides se posent par l'extérieur, sur les murs ou au-dessus des chevrons ; certains reçoivent directement un enduit. Les panneaux souples, qu'on appelle aussi laine de bois, garnissent les ossatures et les rampants.\n\n*Sur nos chantiers : panneaux de fibre de bois sur une toiture ancienne à L'Argentière-la-Bessée, remplissage en laine de bois sur une surélévation à Briançon, enduit sur fibre de bois à Vallouise.*",
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
          text: "Ces laines végétales, souvent mélangées, se présentent en rouleaux ou en panneaux semi-rigides. On les glisse entre les montants d'une ossature ou entre les chevrons. Légères, elles se combinent bien avec des panneaux de fibre de bois, plus denses.\n\n*Sur nos chantiers : chalet de Vallouise, avec 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs, et 32 cm en toiture.*",
          link: {
            label: 'Voir le chalet',
            href: '/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/',
          },
        },
      ],
      cta: {
        label: 'Comparer les isolants dans notre guide',
        href: '/conseils/isolant-biosource-montagne/',
      },
    },

    // 3.5 Climat de montagne : hiver et été
    {
      type: 'manifesto',
      layout: 'columns',
      kicker: 'Climat de montagne',
      title: "Au chaud l'hiver, **au frais l'été**",
      text: "Dans les Hautes-Alpes, l'hiver est long et froid. L'été, le soleil d'altitude chauffe fort les toitures et les façades exposées au sud. Une bonne isolation doit répondre aux deux saisons.",
      items: [
        {
          title: "L'hiver : garder la chaleur",
          text: "Ce qui compte, c'est l'épaisseur et la qualité de l'isolant, et surtout sa continuité. Un pont thermique, c'est-à-dire un point où l'isolant est interrompu (un plancher, un linteau, une pièce de charpente), suffit à refroidir une pièce.",
        },
        {
          title: "L'été : retarder la chaleur",
          text: "Ce qui compte, c'est le déphasage : le temps que met la chaleur du jour pour traverser la paroi. À épaisseur égale, les isolants denses, comme la fibre de bois en panneaux ou la ouate de cellulose, la ralentissent davantage que les isolants très légers. La chaleur arrive plus tard, souvent quand on peut aérer la nuit.",
        },
        {
          title: "Toute l'année : bloquer l'air",
          text: "L'étanchéité à l'air est une couche continue, membrane ou panneaux aux joints collés, qui empêche l'air de traverser les parois. Sans elle, l'isolant perd une partie de son efficacité et la vapeur d'eau de la maison peut condenser dans les murs.",
        },
      ],
      image: "isolation-d-un-bati-ancien-par-l-interieur/pose de l'étanchéité à l'air.JPG",
    },

    // 3.6 Toiture, murs, ouvertures
    {
      type: 'cards',
      variant: 'photo',
      columns: 3,
      tone: 'light',
      kicker: "Nos prestations d'isolation",
      title: 'Toiture, murs, ouvertures : **par où commencer ?**',
      intro:
        "La chaleur s'échappe par plusieurs chemins. Nous vous aidons à choisir les travaux utiles pour votre maison, et à les enchaîner dans le bon ordre.",
      items: [
        {
          title: 'Isolation de toiture et sarking',
          icon: 'layers',
          image:
            "renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/étanchéité à l'air et caissons d'isolation.jpg",
          text: "Le sarking est une isolation de toiture par l'extérieur : des panneaux isolants continus, posés au-dessus des chevrons, sous la couverture. La charpente reste visible et vous ne perdez pas de volume. Nous isolons aussi les rampants par l'intérieur et les combles.",
          link: { label: 'Isolation de toiture et sarking', href: '/isolation-toiture-sarking/' },
        },
        {
          title: 'Isolation des murs : ITE et bâti ancien',
          icon: 'wall',
          image: 'isolation-d-un-bati-ancien-par-l-interieur/poutre en I.JPG',
          text: "L'ITE, ou isolation thermique par l'extérieur, enveloppe les murs d'un manteau de fibre de bois, fini par un bardage bois ou un enduit. Pour le bâti ancien, nous isolons aussi par l'intérieur, avec de la ouate de cellulose insufflée dans une ossature.",
          link: { label: "Isolation des murs par l'extérieur", href: '/isolation-murs-ite/' },
        },
        {
          title: 'Fenêtres de toit et menuiseries',
          icon: 'window',
          image:
            "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/vue de dessous d'un velux 78x98.JPG",
          text: "Une fenêtre mal raccordée crée une fuite d'air au milieu d'une paroi bien isolée. Les fenêtres de toit, ainsi que les fenêtres, volets et portes donnant sur l'extérieur, font partie de nos domaines RGE. Nous les raccordons à l'isolant et à l'étanchéité à l'air.\n\n[Fenêtres de toit](/isolation-toiture-sarking/#fenetres-de-toit) · [Menuiseries extérieures](/isolation-murs-ite/#menuiseries)",
        },
      ],
      cta: { label: 'Rénovation de charpente et combles', href: '/renovation-charpente-combles/' },
    },

    // 3.7 Qualification RGE (carte blanche, coches) …
    {
      type: 'list',
      style: 'checks',
      inCard: true,
      kicker: 'Qualification RGE',
      title: 'Un charpentier **qualifié RGE** dans les Hautes-Alpes',
      text: "RGE signifie « Reconnu garant de l'environnement ». Ce signe de qualité est attribué par domaine de travaux. 3B Charpente est qualifié QUALIBAT-RGE : la qualification est au nom de son fondateur, Jean-Michel Tardy, et figure dans l'annuaire RGE de l'ADEME (date de rattachement : 2 octobre 2025). Elle couvre cinq domaines :",
      items: [
        { text: "isolation des murs par l'extérieur" },
        { text: "isolation des toitures par l'extérieur" },
        { text: "isolation par l'intérieur des murs ou rampants de toitures ou plafonds" },
        { text: 'fenêtres de toit' },
        { text: "fenêtres, volets, portes donnant sur l'extérieur" },
      ],
    },
    // … suite de la section 3.7 : aides, France Rénov' et les deux boutons
    {
      type: 'cta',
      variant: 'slim',
      icon: 'euro',
      text: "Le label RGE ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Ces aides (MaPrimeRénov', certificats d'économies d'énergie, éco-prêt à taux zéro…) changent souvent. Pour savoir ce qui s'applique à votre projet, contactez un conseiller France Rénov', service public gratuit, sur france-renov.gouv.fr. Nous en parlons aussi lors de notre rencontre pour le devis.",
      primary: {
        label: 'Comprendre les aides avec un artisan RGE',
        href: '/conseils/aides-renovation-artisan-rge/',
      },
      secondary: {
        label: "Vérifier notre qualification sur France Rénov'",
        href: 'https://france-renov.gouv.fr/annuaire-rge',
      },
    },

    // 3.8 Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'brand',
      tone: 'light',
      kicker: "Nos chantiers d'isolation",
      title: 'Des isolations **en photos**',
      items: [
        {
          project: 'isolation-d-un-bati-ancien-par-l-interieur',
          title: "Isolation d'un bâti ancien par l'intérieur",
          text: "Ossature en poutres en I, panneaux OSB3, étanchéité à l'air, ouate de cellulose insufflée, puis doublage, encadrements et bardage en pin.",
        },
        {
          project: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
          title: "Isolation d'une toiture ancienne à L'Argentière-la-Bessée",
          text: "Doublage pour le renfort et l'isolation, panneaux de fibre de bois, étanchéité à l'air, étanchéité à l'eau et ventilation, fenêtre de toit de 78 × 98 cm.",
        },
        {
          project: 'renovation-et-isolation-d-un-chalet-a-vallouise',
          title: "Rénovation et isolation d'un chalet à Vallouise",
          text: 'Chalet des années 1980 : 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs, 32 cm en toiture, bardage en mélèze et enduit sur fibre de bois.',
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },
    // Ligne « Voir aussi » de la section 3.8
    {
      type: 'richText',
      tone: 'light',
      content:
        "Voir aussi : [Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières](/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/) · [Rénovation d'une copropriété à Briançon](/realisations/renovation-d-une-copropriete-a-briancon/)",
    },

    // 3.9 Méthode
    {
      type: 'steps',
      variant: 'tabs',
      kicker: 'Notre méthode',
      title: 'De la visite **au chantier fini**',
      steps: [
        {
          title: 'Rencontre et visite',
          text: "Nous venons voir la maison : charpente, murs, ouvertures, traces d'humidité. Vous nous dites ce qui vous gêne : le froid, la surchauffe sous le toit, les courants d'air, un projet d'aménagement.",
        },
        {
          title: 'Étude sur mesure',
          text: "Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous choisissons la technique, par l'extérieur ou par l'intérieur, puis l'isolant et son épaisseur, paroi par paroi.",
        },
        {
          title: 'Devis détaillé',
          text: "Nous vous remettons un devis détaillé et un calendrier estimatif. C'est le bon moment pour faire le point sur les aides avec votre conseiller France Rénov'.",
        },
        {
          title: 'Chantier',
          text: "Renfort de charpente si besoin, pose des isolants, de l'étanchéité à l'air et des raccords autour des fenêtres, des poutres et des conduits.",
          image: 'renovation-d-une-copropriete-a-briancon/1 Soufflage après découverture.JPG',
        },
        {
          title: 'Finitions',
          text: 'Bardage, enduit, lambris ou doublage intérieur : la maison retrouve son allure, avec une enveloppe plus performante.',
        },
      ],
    },

    // 3.10 3B Récup'
    {
      type: 'cta',
      variant: 'card',
      badge: '3B Récup’',
      kicker: "3B Récup'",
      title: "Rénover, c'est aussi **réemployer**",
      text: "Avant d'isoler, il faut parfois déposer : une vieille charpente, un plancher, un bardage. 3B Récup', notre initiative dédiée au réemploi des matériaux et à la déconstruction sélective, donne une seconde vie à ce bois. Il est trié, nettoyé et usiné dans notre atelier, puis reposé sur nos chantiers : bardage vieux bois, garde-corps en bois de réemploi.",
      image:
        'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },

    // 3.11 FAQ
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

    // 3.12 Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Votre projet',
      title: 'Prêt à isoler **votre maison** ?',
      text: "Chaque projet chez 3B Charpente débute par une étude sur mesure. Parlez-nous de votre maison : nous venons la voir, nous discutons de vos besoins et nous vous proposons un devis détaillé.\n\n*« Construire durablement, c'est construire pour l'avenir. »*",
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'isolation-biosourcee-q1',
      question: "Qu'est-ce qu'un isolant biosourcé ?",
      answer:
        "Un isolant biosourcé est fabriqué à partir de matières issues du vivant : bois, papier recyclé, chanvre, lin, coton. Chez 3B Charpente, nous posons surtout de la ouate de cellulose, des panneaux de fibre de bois et des laines de chanvre, lin et coton. Ils isolent du froid, aident à garder la fraîcheur l'été et peuvent absorber puis restituer une partie de l'humidité de l'air.",
      topic: 'isolation',
    },
    {
      key: 'isolation-biosourcee-q2',
      question: 'Quels isolants biosourcés utilisez-vous ?',
      answer:
        "Nous nous engageons à utiliser des matériaux biosourcés et locaux. Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois, auxquels nous associons des laines de chanvre, lin et coton selon la paroi. Sur un chalet de Vallouise, par exemple, les murs ont reçu 28 cm de laine de chanvre/lin/coton et de fibre de bois.",
      topic: 'isolation',
    },
    {
      key: 'isolation-biosourcee-q3',
      question: "L'isolation biosourcée est-elle adaptée à la montagne ?",
      answer:
        "Oui, à condition d'être bien conçue et bien posée. L'hiver, ce sont l'épaisseur et la continuité de l'isolant qui comptent. L'été, les isolants denses comme la fibre de bois ralentissent la chaleur qui traverse le toit. Dans tous les cas, l'étanchéité à l'air doit être soignée pour protéger l'isolant de l'humidité. C'est ce que nous faisons sur nos chantiers du Briançonnais et de la Vallouise.",
      topic: 'isolation',
    },
    {
      key: 'isolation-biosourcee-q4',
      question: '3B Charpente est-il un charpentier RGE ?',
      answer:
        "Oui. 3B Charpente est qualifié QUALIBAT-RGE, au nom de Jean-Michel Tardy, pour cinq domaines : isolation des murs par l'extérieur ; isolation des toitures par l'extérieur ; isolation par l'intérieur des murs ou rampants de toitures ou plafonds ; fenêtres de toit ; fenêtres, volets, portes donnant sur l'extérieur. Vous pouvez le vérifier dans l'annuaire des professionnels RGE de France Rénov'.",
      topic: 'isolation',
    },
    {
      key: 'isolation-biosourcee-q5',
      question: 'Quelles aides pour une isolation biosourcée ?',
      answer:
        "Des aides publiques existent pour l'isolation, sous conditions, et la plupart exigent une entreprise qualifiée RGE pour les travaux concernés. Leurs règles et leurs montants changent chaque année. Le plus sûr est de contacter un conseiller France Rénov' (france-renov.gouv.fr), un service public gratuit, avant de signer un devis. Nous en parlons aussi lors de notre rencontre.",
      topic: 'isolation',
    },
    {
      key: 'isolation-biosourcee-q6',
      question: "Un charpentier peut-il s'occuper de l'isolation ?",
      answer:
        "Oui, et c'est souvent logique : isoler une toiture ou un mur à ossature, c'est travailler sur la charpente, les chevrons, les débords de toit. En charpentiers, nous vérifions la structure et la renforçons si besoin avant d'isoler. Nous posons ensuite l'isolant, l'étanchéité à l'air, les fenêtres de toit et les parements, comme le bardage.",
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
