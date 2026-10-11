/**
 * Fiche 08 : Extension et surélévation bois (/extension-surelevation-bois/).
 * Source : 3b-charpente-kit/docs/pages/08-extension-surelevation-bois.md
 */
import type { SeedService } from '../../types'

const md = (...paragraphs: string[]) => paragraphs.join('\n\n')

const HERO_PHOTO =
  "surelevation-en-ossature-bois-d-une-maison-a-briancon/2.1 levage d'un mur pignon.JPG"

export const service: SeedService = {
  kind: 'service',
  slug: 'extension-surelevation-bois',
  title: 'Extension et surélévation bois',
  menuLabel: 'Extension et surélévation',
  shortLabel: 'Extension et surélévation',
  filterKey: 'extension-surelevation',
  order: 7,
  icon: 'arrowUp',
  cardText: 'Gagner une pièce ou un étage sans tout reconstruire, comme à Briançon et à Pelvoux.',
  cardLinkLabel: 'Agrandir ma maison',
  image: HERO_PHOTO,
  schema: {
    serviceType: 'Surélévation et extension en ossature bois',
    description:
      'Surélévation et extension de maisons en ossature bois à Briançon et dans les Hautes-Alpes : structure légère préparée en atelier, bois des Hautes-Alpes, isolants biosourcés, dépassées de toit et bardage.',
  },

  seo: {
    title: 'Extension et surélévation bois, Hautes-Alpes | 3B Charpente',
    description:
      'Extension et surélévation bois à Briançon et dans les Hautes-Alpes : ossature légère, bois local, isolants biosourcés. Charpentiers depuis 2007. Devis.',
    image: HERO_PHOTO,
  },

  hero: {
    variant: 'photo',
    kicker: 'Agrandir en bois',
    title: 'Extension et **surélévation bois** à Briançon et dans les **Hautes-Alpes**',
    text: "Surélever, ajouter une pièce, couvrir une terrasse : une structure en **ossature bois**, légère et **préparée dans notre atelier**, s'adapte à une maison existante. Nous la construisons en **bois des Hautes-Alpes** et l'isolons avec des **matériaux biosourcés**.",
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: 'Voir la surélévation de Briançon',
      href: '/extension-surelevation-bois/#briancon',
    },
    proofs: [{ label: 'Depuis 2007' }, { label: 'Bois des Hautes-Alpes' }],
    images: [HERO_PHOTO, 'surelevation-a-pelvoux/chantier terminé.jpg'],
    caption: "Levage d'un mur pignon en ossature bois, surélévation d'une maison à Briançon.",
  },

  tldr: "3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, agrandit les maisons des Hautes-Alpes avec des structures bois : surélévation, extension, terrasse couverte. Légère, l'ossature bois ménage la maison existante. Nous avons notamment surélevé une maison à Briançon, en ossature bois isolée en laine de bois, et une maison à Pelvoux.",

  layout: [
    // 3.4 Surélévation ou extension
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      kicker: "Deux façons d'agrandir",
      title: 'Surélévation ou extension : **que choisir** ?',
      intro:
        "Dans les deux cas, le bois a des atouts : il est léger, se prépare à l'atelier et se pose à sec, sans temps de séchage comme le béton.",
      items: [
        {
          title: 'La surélévation',
          icon: 'arrowUp',
          text: "Surélever, c'est ajouter un niveau ou rehausser la toiture pour rendre les combles habitables. On gagne de la surface sans toucher au terrain, souvent avec une vue plus dégagée. La maison existante doit pouvoir porter le nouveau volume.",
        },
        {
          title: "L'extension",
          icon: 'house',
          text: "Une extension agrandit la maison au sol, sur le côté. Elle convient quand le terrain le permet et qu'on ne veut pas charger la structure existante. Tout se joue à la jonction avec l'existant : toiture, étanchéité, isolation.",
        },
      ],
    },

    // 3.5 Avant de surélever
    {
      type: 'list',
      style: 'numbered',
      inCard: true,
      tone: 'light',
      kicker: 'Avant de vous lancer',
      title: 'Trois questions **avant de surélever**',
      items: [
        {
          title: 'La maison peut-elle porter ?',
          text: "Murs, planchers et fondations doivent supporter le nouveau niveau. Une ossature bois pèse bien moins qu'une maçonnerie, mais une vérification de la structure reste indispensable.",
        },
        {
          title: "Le plan local d'urbanisme l'autorise-t-il ?",
          text: "Il fixe une hauteur maximale et parfois l'aspect des toitures. Une surélévation demande en général un permis de construire, parfois une déclaration préalable selon la surface créée.",
        },
        {
          title: "Comment rester hors d'eau ?",
          text: "Le toit est ouvert pendant une partie du chantier. Préparer la structure à l'atelier réduit le temps où la maison est découverte.",
        },
      ],
    },

    // 3.6 Chantier : surélévation en ossature bois à Briançon
    {
      type: 'textImage',
      anchor: 'briancon',
      kicker: 'Chantier à Briançon',
      title: 'Une surélévation **en ossature bois** à Briançon',
      text: md(
        "Sur cette maison de [Briançon](/charpentier-briancon/), nous avons levé les murs pignons en ossature bois, puis les pannes porteuses : des pièces de 14 × 30 cm de section, entaillées. Leurs extrémités portent des décors de pannes, ces abouts sculptés qu'on retrouve sur les maisons de montagne.",
        "La toiture repose sur des panneaux trois plis en épicéa, trois couches de bois croisées et collées. Ils assurent à la fois le contreventement (la rigidité de la structure) et l'étanchéité à l'air, et restent apparents au plafond. L'isolation est un remplissage en laine de bois, un isolant biosourcé. La dépassée de toit, ce débord qui protège la façade, termine l'ouvrage.",
      ),
      images: [
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/91.1façade sud finie.jpg',
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/6.1 panneaux trois plis épicéa apparents du dessous.JPG',
      ],
      imagePosition: 'right',
      caption: "Façade sud terminée. Panneaux trois plis en épicéa, apparents depuis l'intérieur.",
      cta: {
        label: 'Voir toutes les photos',
        href: '/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/',
      },
    },

    // 3.7 Chantier : surélévation à Pelvoux
    {
      type: 'textImage',
      kicker: 'Chantier à Pelvoux',
      title: 'Une surélévation **au pied des Écrins**',
      text: md(
        "À [Pelvoux](/charpentier-vallouise-pays-des-ecrins/), la surélévation s'est faite par étapes, comme le montrent les photos du chantier : la maison avant, les travaux en cours, puis le chantier terminé.",
        'Les dépassées de toit reposent sur des consoles : des pièces de bois en porte-à-faux, fixées au mur, qui soutiennent le débord de toiture. Un détail de charpentier qui compte, là où la neige charge les toits.',
      ),
      images: [
        'surelevation-a-pelvoux/avnat.JPG',
        'surelevation-a-pelvoux/console de dépassée de toit.JPG',
      ],
      imagePosition: 'left',
      caption: 'La maison avant les travaux. Console de dépassée de toit.',
      cta: { label: 'Voir toutes les photos', href: '/realisations/surelevation-a-pelvoux/' },
    },

    // 3.8 Extensions et espaces couverts
    {
      type: 'textImage',
      tone: 'light',
      kicker: 'Extensions',
      title: 'Agrandir **de plain-pied**',
      text: md(
        "Une extension en ossature bois suit les mêmes principes qu'une maison neuve : structure légère, [isolants biosourcés](/isolation-biosourcee/), bardage ou enduit. Le point clé est la jonction avec la maison existante : raccord de toiture, étanchéité et continuité de l'isolation.",
        "Agrandir, c'est aussi gagner un espace extérieur couvert. À Champcella, nous avons construit une terrasse couverte et un local technique, avec un abri voiture dans le prolongement de la toiture. À Vallouise, la dépassée nord du chalet a été agrandie et le balcon transformé en terrasse.",
      ),
      images: [
        'construction-d-une-terrasse-couverte-a-champcella/terrasse couverte et local technique.JPG',
        'renovation-et-isolation-d-un-chalet-a-vallouise/05. Dépassée Nord agrandie.JPG',
      ],
      imagePosition: 'right',
      cta: { label: 'Terrasses couvertes et abris bois', href: '/balcon-terrasse-abri-bois/' },
    },

    // 3.9 Notre méthode
    {
      type: 'steps',
      variant: 'tabs',
      kicker: 'Notre méthode',
      title: 'Six étapes, **de la visite au bardage**',
      steps: [
        {
          title: 'Visite et relevé',
          text: "Chaque projet chez 3B Charpente débute par une étude sur mesure : visite, cotes de l'existant, écoute de vos besoins.",
        },
        {
          title: 'Dessin',
          text: "Nous dessinons l'agrandissement et vous proposons une esthétique en accord avec la maison.",
        },
        {
          title: "Traçage et taille à l'atelier",
          text: 'Les pièces de charpente et de structure sont tracées et taillées dans notre atelier, selon le savoir-faire que Jean-Michel Tardy, notre fondateur, a appris chez les Compagnons du Devoir.',
        },
        {
          title: "Levage et mise hors d'eau",
          text: 'Sur place, la structure est levée, puis la toiture refermée.',
        },
        {
          title: "Isolation et étanchéité à l'air",
          text: "Laine de bois, ouate de cellulose ou fibre de bois, et une étanchéité à l'air continue jusqu'au raccord avec l'existant.",
        },
        {
          title: 'Bardage et finitions bois',
          text: 'Bardage en mélèze, dépassées de toit, menuiseries extérieures : la maison retrouve une façade cohérente.',
        },
      ],
    },

    // 3.10 3B Récup'
    {
      type: 'cta',
      variant: 'band',
      badge: '3B Récup’',
      kicker: "3B Récup'",
      title: 'La toiture déposée **peut resservir**',
      text: "Une surélévation commence souvent par la dépose de la toiture existante. Avec 3B Récup', ses bois sains ne partent pas à la benne : ils sont triés, nettoyés et usinés dans notre atelier, puis réemployés sur nos chantiers, en bardage vieux bois, en garde-corps ou en pièces de charpente.",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },

    // 3.11 Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'brand',
      kicker: 'Nos chantiers',
      title: 'Ils ont **agrandi en bois**',
      items: [
        {
          project: 'surelevation-en-ossature-bois-d-une-maison-a-briancon',
          title: 'Surélévation en ossature bois à Briançon',
          text: 'Murs pignons, pannes porteuses de 14 × 30 cm, panneaux trois plis en épicéa, laine de bois.',
        },
        {
          project: 'surelevation-a-pelvoux',
          title: 'Surélévation à Pelvoux',
          text: 'Une surélévation menée par étapes, avec ses consoles de dépassée de toit.',
        },
        {
          project: 'renovation-et-isolation-d-un-chalet-a-vallouise',
          title: 'Chalet rénové à Vallouise, balcon agrandi en terrasse',
          text: 'Dépassée nord agrandie, balcon transformé en terrasse, murs et toiture isolés en matériaux biosourcés.',
        },
        {
          project: 'construction-d-une-terrasse-couverte-a-champcella',
          title: 'Terrasse couverte à Champcella',
          text: 'Terrasse couverte, local technique et abri voiture dans le prolongement de la toiture.',
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },

    // 3.12 Prestations liées
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Pour **compléter** votre projet',
      services: ['maison-ossature-bois', 'charpente-bois', 'balcon-terrasse-abri-bois'],
    },

    // 3.13 FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: "Vos questions sur **l'extension et la surélévation**",
      faqs: [
        'extension-surelevation-bois-q1',
        'extension-surelevation-bois-q2',
        'extension-surelevation-bois-q3',
        'extension-surelevation-bois-q4',
        'extension-surelevation-bois-q5',
        'extension-surelevation-bois-q6',
      ],
    },

    // 3.14 Appel à l'action final
    {
      type: 'cta',
      variant: 'band',
      title: 'Besoin de **place en plus** ?',
      text: 'Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons voir votre maison, nous discutons de vos besoins et vous proposons un devis détaillé.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'extension-surelevation-bois-q1',
      topic: 'ossature',
      question: "Peut-on surélever n'importe quelle maison ?",
      answer:
        "Non, pas sans vérification. Les murs, les planchers et les fondations doivent pouvoir porter le nouveau niveau, et le plan local d'urbanisme doit autoriser la hauteur. Le bois aide beaucoup : une ossature bois pèse bien moins qu'une maçonnerie. C'est pour cela qu'on choisit souvent le bois pour surélever une maison existante.",
    },
    {
      key: 'extension-surelevation-bois-q2',
      topic: 'ossature',
      question: 'Faut-il un permis de construire pour une surélévation ou une extension ?',
      answer:
        "Le plus souvent, oui. Une surélévation change la hauteur et l'aspect de la maison : un permis de construire est en général demandé, parfois une simple déclaration préalable selon la surface créée et la zone. Si la surface de plancher totale dépasse 150 m² après travaux, l'architecte est obligatoire. Renseignez-vous en mairie dès le début du projet.",
    },
    {
      key: 'extension-surelevation-bois-q3',
      topic: 'ossature',
      question: 'Combien coûte une surélévation en bois ?',
      answer:
        "Le prix dépend de la surface créée, de l'état de la maison existante, de l'accès au chantier, de la toiture à déposer, des isolants et des finitions. Sans voir la maison, un chiffre serait trompeur. Chaque projet chez 3B Charpente débute par une étude sur mesure : nous venons sur place et vous proposons un devis détaillé.",
    },
    {
      key: 'extension-surelevation-bois-q4',
      topic: 'ossature',
      question: 'Peut-on habiter la maison pendant une surélévation ?',
      answer:
        "Cela dépend du chantier. Une extension se construit à côté de la maison, qui reste en général habitable. Une surélévation touche la toiture : il faut organiser la dépose et la mise hors d'eau pour limiter le temps où la maison est ouverte. Préparer la structure à l'atelier y aide. Nous en parlons dès l'étude pour organiser le chantier avec vous.",
    },
    {
      key: 'extension-surelevation-bois-q5',
      topic: 'ossature',
      question: 'Quelle isolation pour une extension ou une surélévation en bois ?',
      answer:
        "Des isolants biosourcés, comme sur nos autres chantiers : ouate de cellulose, panneaux de fibre de bois, laine de bois. À Briançon, la surélévation est isolée par un remplissage en laine de bois, sous des panneaux trois plis en épicéa qui assurent aussi l'étanchéité à l'air. Le raccord avec l'isolation de la maison existante doit être continu.",
    },
    {
      key: 'extension-surelevation-bois-q6',
      topic: 'ossature',
      question: 'Peut-on faire une extension bois sur une maison en pierre ou en béton ?',
      answer:
        "Oui, c'est courant. L'ossature bois se fixe sur la maçonnerie existante, avec un soin particulier à la jonction : étanchéité à l'eau, étanchéité à l'air et continuité de l'isolant. La façade peut rester dans l'esprit de la maison, avec un enduit, ou affirmer le bois avec un bardage en mélèze.",
    },
  ],

  photoAlts: [
    {
      photo: HERO_PHOTO,
      alt: "Levage d'un mur pignon en ossature bois pour la surélévation d'une maison à Briançon (Hautes-Alpes)",
    },
    {
      photo:
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/7.1 panes porteuses en14x30 entaillées.JPG',
      alt: 'Pannes porteuses de 14 × 30 cm entaillées, surélévation en ossature bois à Briançon',
    },
    {
      photo:
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/6.1 panneaux trois plis épicéa apparents du dessous.JPG',
      alt: "Panneaux trois plis en épicéa apparents sous la toiture d'une surélévation à Briançon",
    },
    {
      photo:
        'surelevation-en-ossature-bois-d-une-maison-a-briancon/8.1 remplissage en laine de bois.JPG',
      alt: "Remplissage en laine de bois dans la surélévation en ossature bois d'une maison à Briançon",
    },
    {
      photo: 'surelevation-en-ossature-bois-d-une-maison-a-briancon/91.1façade sud finie.jpg',
      alt: "Façade sud terminée d'une maison surélevée en ossature bois à Briançon",
    },
    {
      photo: 'surelevation-a-pelvoux/console de dépassée de toit.JPG',
      alt: "Console de dépassée de toit en bois sur la surélévation d'une maison à Pelvoux",
    },
    {
      photo: 'surelevation-a-pelvoux/chantier terminé.jpg',
      alt: 'Maison surélevée par 3B Charpente à Pelvoux, chantier terminé',
    },
  ],

  validationPoints: [
    {
      question:
        "Extension habitable : 3B en a-t-il réalisé une (pièce en plus) ? Si oui, fournir les photos (avant, pendant, après) et la commune, pour l'encadré prévu dans la section « Agrandir de plain-pied ».",
      decision:
        "Encadré retiré. La section reste centrée sur le principe de l'extension et sur les espaces couverts réels (terrasse couverte de Champcella, dépassée et terrasse de Vallouise).",
      priority: 'high',
    },
    {
      question:
        'Surélévation de Pelvoux : système constructif (ossature bois ?), surface gagnée et usage du nouvel étage ? La légende « première moitié » veut-elle dire que la maison a été surélevée en deux moitiés pour rester habitable ?',
      decision:
        "Mention retirée. Le chantier est décrit uniquement d'après les légendes des photos : avant, en cours, chantier terminé, consoles de dépassée de toit. « Une première moitié levée » est retirée du texte (pas d'interprétation) et la FAQ « habiter pendant une surélévation » reste générale.",
      priority: 'normal',
    },
    {
      question:
        'Surélévation de Briançon : la maison était-elle habitée pendant le chantier ? Combien de temps la toiture est-elle restée ouverte ?',
      decision: "Aucune durée ni information sur l'occupation n'est écrite.",
      priority: 'low',
    },
    {
      question:
        "Vérification de la structure avant une surélévation : faite par 3B, par un bureau d'études, ou les deux ?",
      decision:
        'Mention retirée. Le texte dit seulement « une vérification de la structure reste indispensable », sans dire qui la fait.',
      priority: 'normal',
    },
    {
      question: 'Permis de construire : 3B aide-t-il à monter le dossier (plans, insertion) ?',
      decision:
        "Mention retirée de l'étape 02 de la méthode, dont le titre « Dessin et démarches » devient « Dessin ». On ne dit pas qui s'occupe des démarches.",
      priority: 'normal',
    },
    {
      question:
        "Mentions réglementaires (permis de construire, déclaration préalable, seuil de 150 m² pour l'architecte) : à faire relire, par exemple par un architecte partenaire.",
      decision: 'Publiées telles que rédigées, de façon générale, avec le renvoi vers la mairie.',
      priority: 'normal',
    },
    {
      question:
        'Menuiseries extérieures (étape 06 de la méthode) : 3B les pose-t-il lui-même sur les agrandissements ?',
      decision:
        "Le texte de l'étape cite les menuiseries extérieures sans dire qui les pose ; la qualification RGE n'est pas mise en avant sur cette page.",
      priority: 'low',
    },
    {
      question:
        "Photos à fournir : une extension habitable réalisée par 3B (avant, pendant, après) ; une photo « avant » de la maison de Briançon ; l'intérieur fini de Pelvoux et une vue de la façade sous le même angle que la photo « avant » (qui ne fait que 300 × 300 px) ; la dépose d'une toiture avant surélévation.",
      decision: 'Page publiée avec les photos actuelles de la galerie.',
      priority: 'low',
    },
  ],
}
