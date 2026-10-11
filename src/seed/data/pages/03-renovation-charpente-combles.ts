/**
 * Fiche 03 : Rénovation de charpente et combles (/renovation-charpente-combles/).
 * Source : 3b-charpente-kit/docs/pages/03-renovation-charpente-combles.md
 */
import type { SeedService } from '../../types'

const HERO = 'refection-d-une-charpente-a-l-argentiere-la-bessee/levage des jouées de lucarne.JPG'

export const service: SeedService = {
  kind: 'service',
  slug: 'renovation-charpente-combles',
  title: 'Rénovation de charpente et combles',
  menuLabel: 'Rénovation de charpente et combles',
  shortLabel: 'Rénovation de charpente et combles',
  filterKey: 'renovation-charpente',
  order: 2,
  icon: 'hammer',
  cardText: 'Renforcer la structure, aménager les combles, ouvrir lucarnes et fenêtres de toit.',
  cardLinkLabel: 'Rénover ma charpente',
  image: HERO,
  schema: {
    serviceType: 'Rénovation de charpente',
    description:
      'Réparation et renforcement de charpentes anciennes, aménagement des combles, création de lucarnes et pose de fenêtres de toit, isolation biosourcée des rampants et des toitures dans les Hautes-Alpes.',
  },

  seo: {
    title: 'Rénovation charpente et combles, Hautes-Alpes | 3B Charpente',
    description:
      'Rénovation de charpente, aménagement des combles, lucarnes et fenêtres de toit dans les Hautes-Alpes. Artisan RGE, isolants biosourcés. Demandez un devis.',
    image: HERO,
  },

  hero: {
    variant: 'photo',
    kicker: 'Rénovation de charpente et toiture',
    title: 'Rénovation de **charpente** et aménagement des **combles** dans les Hautes-Alpes',
    text: 'Rénovez la charpente existante de votre maison pour **réaménager les combles**. Nous **renforçons la structure** de toiture, créons les ouvertures, **lucarnes et fenêtres de toit**, et isolons avec des **matériaux biosourcés**.',
    primaryCta: { label: 'Demander mon devis', href: '/contact/' },
    secondaryCta: {
      label: 'Voir nos rénovations',
      href: '/renovation-charpente-combles/#realisations',
    },
    proofs: [{ label: 'Depuis 2007' }, { label: 'Artisan RGE' }],
    images: [HERO],
    caption: "Levage des jouées d'une lucarne, réfection d'une charpente à L'Argentière-la-Bessée.",
  },

  tldr: "3B Charpente, charpentier qualifié RGE installé à L'Argentière-la-Bessée depuis 2007, rénove les charpentes anciennes des Hautes-Alpes pour rendre les combles habitables : réparation et renforcement des fermes, création de lucarnes et de fenêtres de toit, isolation biosourcée, plancher et escalier. Nous travaillons le mélèze et le sapin des Hautes-Alpes, et réemployons le bois déposé quand il est sain.",

  layout: [
    // 3.4 Ce que nous faisons
    {
      type: 'cards',
      variant: 'icon',
      columns: 2,
      kicker: 'Ce que nous faisons',
      title: 'Rénover la charpente **pour vivre sous le toit**',
      intro:
        'Une charpente ancienne a souvent de la ressource. Avant de la remplacer, nous regardons ce qui peut être gardé, réparé ou renforcé.',
      items: [
        {
          title: 'Réparer',
          icon: 'hammer',
          text: "Remplacer une pièce abîmée, reprendre un pied d'arbalétrier, rallonger une poutre par un trait de Jupiter. Si la charpente est trop atteinte, nous la déposons et en taillons une neuve.",
        },
        {
          title: 'Renforcer',
          icon: 'shield',
          text: 'Pour porter un plancher, une isolation épaisse ou une nouvelle couverture, la structure doit parfois être renforcée : doublage des pièces, reprise des fermes.',
        },
        {
          title: 'Ouvrir',
          icon: 'window',
          text: "Lucarnes et fenêtres de toit apportent lumière et hauteur. Elles se préparent dans la charpente avec un chevêtre, la pièce qui encadre l'ouverture et reprend les chevrons coupés.",
        },
        {
          title: 'Aménager',
          icon: 'house',
          text: "Isolation biosourcée, étanchéité à l'air, plancher, escalier : nous réalisons tout ce qui touche au bois et à l'isolation.",
        },
      ],
    },

    // 3.5 Vos combles sont-ils aménageables ?
    {
      type: 'list',
      style: 'numbered',
      inCard: true,
      tone: 'light',
      kicker: 'Avant de vous lancer',
      title: 'Vos combles sont-ils **aménageables** ?',
      intro:
        "Cinq questions à se poser avant d'aménager un grenier. Nous les regardons avec vous lors de la première visite.",
      items: [
        {
          text: '**La hauteur.** Seules les parties de plus de 1,80 m de hauteur comptent dans la surface habitable. Une lucarne peut gagner la hauteur qui manque.',
        },
        {
          text: '**La charpente.** Des fermettes en W encombrent le volume et demandent une transformation lourde ; une charpente à fermes et pannes se libère plus facilement.',
        },
        {
          text: "**L'état des bois.** Traces d'humidité, d'insectes, pièces fendues ou affaissées : tout se voit en montant sous le toit.",
        },
        {
          text: "**Le plancher.** Les solives d'un grenier n'ont pas toujours été prévues pour porter une pièce de vie.",
        },
        {
          text: "**Les démarches.** Une lucarne ou une fenêtre de toit change l'aspect du toit : une déclaration préalable est en général demandée, parfois un permis de construire selon la surface créée. Renseignez-vous en mairie.",
        },
      ],
      cta: {
        label: 'Rénover un chalet ou une maison ancienne',
        href: '/conseils/renover-chalet-maison-ancienne/',
      },
    },

    // 3.6 Créer une lucarne (ancre citée par /charpente-bois/)
    {
      type: 'textImage',
      anchor: 'lucarnes',
      kicker: 'Lucarnes',
      title: 'Créer une **lucarne** dans une charpente existante',
      text: "Une lucarne est un ouvrage de charpente qui sort du toit : une petite façade verticale avec une fenêtre, deux côtés appelés jouées, et sa propre toiture. Elle apporte de la lumière et surtout de la hauteur, là où le toit descend bas.\n\nLes formes varient : à deux pans (jacobine), à trois pans (capucine), à un seul pan (rampante). Dans les Hautes-Alpes, elle se choisit avec l'architecture de la maison et les règles d'urbanisme de la commune.\n\nPour l'ouvrir, on coupe des chevrons et on reprend leurs charges sur un chevêtre. La lucarne est ensuite tracée et taillée à l'atelier comme une petite charpente, puis levée sur le toit. C'est le métier que Jean-Michel Tardy, notre fondateur, a appris chez les Compagnons du Devoir.",
      images: [
        'refection-d-une-charpente-a-l-argentiere-la-bessee/lucarne en cours de levage.JPG',
        'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/toiture terminée.jpg',
      ],
      imagePosition: 'right',
      caption:
        "Levage des jouées de lucarne, L'Argentière-la-Bessée. Lucarne ouverte lors d'une rénovation énergétique à Saint-Martin-de-Queyrières.",
    },

    // 3.7 Fenêtres de toit
    {
      type: 'textImage',
      kicker: 'Fenêtres de toit',
      title: 'Des **fenêtres de toit** posées par un artisan RGE',
      text: "Une fenêtre de toit se pose dans le plan de la toiture. Plus simple qu'une lucarne, elle demande quand même un travail de charpentier : chevêtre, encadrement, raccord soigné avec l'isolant et l'étanchéité à l'air, sans quoi elle devient un point froid.\n\n3B Charpente est qualifiée QUALIBAT-RGE pour la pose de fenêtres de toit, l'isolation des toitures par l'extérieur et l'isolation des rampants par l'intérieur. Ce label ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.",
      images: [
        "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/vue de dessous d'un velux 78x98.JPG",
      ],
      imagePosition: 'left',
      badge: 'RGE',
      caption:
        "Fenêtre de toit de 78 × 98 cm vue de dessous, toiture ancienne isolée à L'Argentière-la-Bessée.",
    },

    // 3.8 Isoler les combles
    {
      type: 'textImage',
      tone: 'light',
      kicker: 'Isolation des combles',
      title: 'Des combles isolés avec des **matériaux biosourcés**',
      text: "Rénover une charpente, c'est le bon moment pour isoler. Nous posons des isolants biosourcés, issus de matières végétales : panneaux de fibre de bois, ouate de cellulose, laine de chanvre, lin et coton.\n\nDeux techniques existent. Par l'intérieur, l'isolant se place entre et sous les chevrons : on parle d'isolation des rampants. Par l'extérieur, il se pose en continu au-dessus de la charpente, sous la couverture : c'est le sarking, qui laisse la charpente apparente côté pièce.\n\nDans les deux cas, une membrane d'étanchéité à l'air, posée côté chauffé, empêche l'air chaud et humide de traverser l'isolant. Côté extérieur, l'étanchéité à l'eau et la ventilation de la couverture protègent les bois.",
      images: [
        'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG',
      ],
      imagePosition: 'right',
      caption: "Panneaux de fibre de bois sur une toiture ancienne à L'Argentière-la-Bessée.",
      links: [
        { label: 'Nos isolants biosourcés', href: '/isolation-biosourcee/' },
        {
          label: "Le sarking, isolation de toiture par l'extérieur",
          href: '/isolation-toiture-sarking/',
        },
      ],
    },

    // 3.9 Plancher et escalier
    {
      type: 'textImage',
      kicker: 'Plancher et escalier',
      title: 'Un plancher solide et **un escalier pour y monter**',
      text: "Des combles habitables demandent un plancher qui porte et un accès confortable. Nous levons des solivages, posons des planchers en mélèze et dessinons des escaliers sur mesure. Dans une maison que nous avons rénovée, l'escalier quart tournant en mélèze lamellé-collé qui mène aux combles sert aussi de cloison rampante à la salle de bains.",
      images: ['escalier-1-4-tournant-en-meleze-lamelle-colle/07. montage terminé .JPG'],
      imagePosition: 'left',
      caption:
        'Escalier quart tournant en mélèze lamellé-collé menant aux combles rénovés par 3B Charpente.',
      links: [{ label: 'Nos escaliers bois sur mesure', href: '/escalier-bois-sur-mesure/' }],
    },

    // 3.10 Réalisations
    {
      type: 'projects',
      mode: 'manual',
      anchor: 'realisations',
      label: 'brand',
      tone: 'light',
      kicker: 'Nos chantiers',
      title: 'Charpentes et combles **rénovés dans les Hautes-Alpes**',
      items: [
        {
          project: 'refection-d-une-charpente-a-l-argentiere-la-bessee',
          title: "Réfection d'une charpente à L'Argentière-la-Bessée",
          text: 'Charpente neuve taillée et levée, lucarnes, chevêtre de cheminée, encadrements de fenêtres de toit, fibre de bois et plancher en mélèze.',
        },
        {
          project: 'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere',
          title: 'Lucarne et rénovation énergétique à Saint-Martin-de-Queyrières',
          text: "Ouverture d'une lucarne, caissons d'isolation et étanchéité à l'air.",
        },
        {
          project: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
          title: "Toiture ancienne isolée à L'Argentière-la-Bessée",
          text: "Doublage de la charpente pour le renfort et l'isolation, fibre de bois, étanchéité à l'air et fenêtre de toit.",
        },
        {
          project: 'renovation-d-une-copropriete-a-briancon',
          title: "Rénovation d'une copropriété à Briançon",
          text: 'Reprise des fermes, isolant soufflé après découverture, dépassée de toiture (le débord du toit) recréée, nouvelle couverture.',
        },
      ],
      cta: { label: 'Toutes nos réalisations', href: '/realisations/' },
    },

    // 3.11 3B Récup'
    {
      type: 'cta',
      variant: 'card',
      badge: '3B Récup’',
      kicker: "3B Récup'",
      title: 'Votre ancienne charpente **a encore de la valeur**',
      text: "Quand une charpente doit être déposée, ses pièces saines ne partent pas forcément à la benne. Avec 3B Récup', notre activité de réemploi, nous les trions, les nettoyons et les usinons dans notre atelier pour les remettre en œuvre. Une ferme en vieux bois a ainsi retrouvé sa place lors d'une réfection de toiture.",
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
    },

    // 3.12 Prestations liées
    {
      type: 'servicesGrid',
      mode: 'manual',
      variant: 'compact',
      title: 'Pour aller **plus loin**',
      services: ['charpente-bois', 'isolation-toiture-sarking', 'escalier-bois-sur-mesure'],
    },

    // 3.13 FAQ
    {
      type: 'faq',
      tone: 'light',
      kicker: 'Questions fréquentes',
      title: 'Vos questions sur **les combles et la charpente**',
      faqs: [
        'renovation-charpente-combles-q1',
        'renovation-charpente-combles-q2',
        'renovation-charpente-combles-q3',
        'renovation-charpente-combles-q4',
        'renovation-charpente-combles-q5',
        'renovation-charpente-combles-q6',
      ],
    },

    // 3.14 Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      title: 'Prêt à **transformer vos combles** ?',
      text: 'Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons voir votre charpente, nous discutons de vos besoins et vous proposons un devis détaillé.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],

  faqs: [
    {
      key: 'renovation-charpente-combles-q1',
      question: 'Comment savoir si mes combles sont aménageables ?',
      answer:
        "Trois points comptent : la hauteur, la charpente et le plancher. Seules les parties de plus de 1,80 m de hauteur entrent dans la surface habitable. Une charpente à fermes et pannes se libère plus facilement que des fermettes en W. Enfin, les solives doivent pouvoir porter une pièce de vie. Le plus simple : nous montrer vos combles lors d'une visite.",
      topic: 'charpente',
    },
    {
      key: 'renovation-charpente-combles-q2',
      question: 'Peut-on aménager des combles avec une charpente en fermettes ?',
      answer:
        "C'est possible, mais plus lourd. Les fermettes, petites fermes en W rapprochées, occupent tout le volume. Pour libérer l'espace, il faut les modifier ou les remplacer par une autre structure, ce qui demande une étude de charpente. Avec une charpente traditionnelle à fermes et pannes, l'espace sous le toit est en général plus facile à aménager.",
      topic: 'charpente',
    },
    {
      key: 'renovation-charpente-combles-q3',
      question: 'Faut-il une autorisation pour créer une lucarne ?',
      answer:
        "En général, oui. Une lucarne modifie l'aspect extérieur de la maison : une déclaration préalable de travaux est le plus souvent demandée, et un permis de construire peut être nécessaire selon la surface créée. Le plan local d'urbanisme de la commune peut aussi imposer une forme ou des matériaux. Renseignez-vous en mairie avant de lancer le projet.",
      topic: 'charpente',
    },
    {
      key: 'renovation-charpente-combles-q4',
      question: 'Comment renforcer une charpente ancienne ?',
      answer:
        "Tout dépend de son état. On peut doubler des pièces trop faibles, reprendre les fermes, remplacer un pied d'arbalétrier abîmé ou rallonger une pièce par un trait de Jupiter. Si la charpente est trop atteinte, mieux vaut la déposer et en tailler une neuve, comme nous l'avons fait à L'Argentière-la-Bessée. Le diagnostic se fait sur place, en montant sous le toit.",
      topic: 'charpente',
    },
    {
      key: 'renovation-charpente-combles-q5',
      question: 'Lucarne ou fenêtre de toit : que choisir ?',
      answer:
        "La fenêtre de toit est plus simple : elle se pose dans le plan du toit et apporte beaucoup de lumière. La lucarne sort du toit : elle demande plus de travail de charpente, mais elle crée de la hauteur sous plafond et une vraie fenêtre verticale. Dans des combles bas, la lucarne fait souvent la différence. Les deux doivent être raccordées avec soin à l'isolation.",
      topic: 'charpente',
    },
    {
      key: 'renovation-charpente-combles-q6',
      question: "Les travaux d'aménagement de combles ouvrent-ils droit à des aides ?",
      answer:
        "Cela dépend des travaux et de votre situation. 3B Charpente est qualifiée QUALIBAT-RGE pour l'isolation des rampants et des toitures et pour la pose de fenêtres de toit. Ce label ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Les règles évoluent : vérifiez votre cas auprès de France Rénov', le service public de la rénovation, avant de signer.",
      topic: 'isolation',
    },
  ],

  photoAlts: [
    {
      photo: HERO,
      alt: "Levage des jouées d'une lucarne dans une charpente refaite par 3B Charpente à L'Argentière-la-Bessée (Hautes-Alpes)",
    },
    {
      photo:
        'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/toiture terminée.jpg',
      alt: 'Toiture terminée avec la lucarne créée par 3B Charpente à Saint-Martin-de-Queyrières',
    },
    {
      photo:
        "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/doublage pour le renfort et l'isolation.JPG",
      alt: "Doublage d'une charpente ancienne pour le renfort et l'isolation, L'Argentière-la-Bessée",
    },
    {
      photo:
        'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/panneaux en fibre de bois.JPG',
      alt: "Panneaux de fibre de bois posés sur une toiture ancienne à L'Argentière-la-Bessée",
    },
    {
      photo:
        "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/vue de dessous d'un velux 78x98.JPG",
      alt: "Fenêtre de toit de 78 × 98 cm vue de dessous dans des combles isolés à L'Argentière-la-Bessée",
    },
    {
      photo: 'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg',
      alt: "Reprise des fermes de la charpente d'une copropriété à Briançon par 3B Charpente",
    },
    {
      photo: 'refection-d-une-charpente-a-l-argentiere-la-bessee/chevêtre de cheminée.JPG',
      alt: "Chevêtre autour d'une cheminée dans une charpente neuve à L'Argentière-la-Bessée",
    },
  ],

  validationPoints: [
    {
      question:
        "SIRET RGE : l'annuaire ADEME rattache la qualification au SIRET 494 482 714 00024, alors que les mentions légales indiquent 00016. Vérifier que l'établissement qualifié est bien l'établissement actuel avant d'afficher « Artisan RGE ».",
      decision:
        'Mention RGE affichée (décision « Mentions RGE ») : « Artisan RGE » dans les preuves du héros et la meta description, « qualifiée QUALIBAT-RGE » dans le texte. Les mentions légales gardent le SIRET 00016.',
      priority: 'high',
    },
    {
      question:
        "Logo QUALIBAT-RGE : numéro de certificat et date de validité, pour afficher le logo et le lien vers l'attestation.",
      decision:
        'Pas de logo Qualibat (numéro de certificat manquant) : seule la pastille texte « RGE » est posée sur la photo.',
      priority: 'normal',
    },
    {
      question:
        "Corps d'état associés : plâtrerie, électricité, plomberie dans les combles : faites par 3B, par des partenaires, ou à la charge du client ? (mention « À VALIDER » de la carte « Aménager »)",
      decision:
        "Mention retirée. La carte « Aménager » garde seulement « nous réalisons tout ce qui touche au bois et à l'isolation » ; on ne précise pas qui fait quoi.",
      priority: 'normal',
    },
    {
      question:
        "Démarches : 3B aide-t-il à préparer la déclaration préalable ou le permis (plans, insertion) ? Si oui, l'ajouter à la FAQ Q3.",
      decision: 'Rien ajouté : la FAQ Q3 renvoie vers la mairie.',
      priority: 'low',
    },
    {
      question:
        'Fermettes : 3B transforme-t-il des charpentes en fermettes pour aménager des combles ?',
      decision: 'La FAQ Q2 reste générale.',
      priority: 'low',
    },
    {
      question: 'Isolant soufflé à Briançon : quel matériau (ouate de cellulose ?)',
      decision: 'La carte de la copropriété dit seulement « isolant soufflé ».',
      priority: 'low',
    },
    {
      question:
        "Commune « Ronatlon » (ferme en vieux bois citée dans le bandeau 3B Récup') : libellé à corriger.",
      decision:
        "La ferme est citée sans commune (« lors d'une réfection de toiture »). Titre affiché de la réalisation : « Réfection d'une toiture en vieux bois ».",
      priority: 'normal',
    },
    {
      question:
        'Diagnostic de charpente : la visite est-elle gratuite ? Donne-t-elle lieu à un compte rendu écrit ?',
      decision:
        "Rien ajouté à la FAQ Q4. On n'écrit pas « gratuit » : rencontre puis devis détaillé (décision « Devis »).",
      priority: 'low',
    },
    {
      question: 'Traitement des bois (insectes, champignons) : 3B le propose-t-il ?',
      decision: "Rien n'est écrit sur le traitement des bois.",
      priority: 'low',
    },
    {
      question:
        "Liens « à lier » de la fiche : « Briançon » dans la carte 4 des réalisations (vers /charpentier-briancon/) et « France Rénov' et aides » dans la FAQ Q6 (vers le guide /conseils/aides-renovation-artisan-rge/).",
      decision:
        'Non posés : les textes des cartes de réalisations et les réponses de FAQ sont en texte simple, sans lien.',
      priority: 'low',
    },
    {
      question:
        "Photos à demander : combles « avant / après » vus de l'intérieur, lucarne terminée vue de l'extérieur en plan large, gros plan d'un renfort, pièce de vie aménagée sous les combles.",
      decision:
        "En attendant : « lucarne en cours de levage » et « toiture terminée » (Saint-Martin-de-Queyrières) pour la section Lucarnes, « montage terminé » de l'escalier quart tournant pour Plancher et escalier.",
      priority: 'low',
    },
  ],
}
