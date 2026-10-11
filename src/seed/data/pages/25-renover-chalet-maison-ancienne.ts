/**
 * Fiche 25 · Guide « Rénover un chalet ou une maison ancienne en montagne : par où commencer ? »
 * Source : 3b-charpente-kit/docs/pages/25-guide-renover-chalet-maison-ancienne.md
 * Le héros (titre, chapô, signature, date, photo) et le sommaire sont générés à partir des
 * champs de l'article et des titres ## des blocs de texte : ils ne figurent pas dans `layout`.
 */
import type { SeedArticle } from '../../types'

const HERO = 'renovation-et-isolation-d-un-chalet-a-vallouise/07. Façade Sud et sa terrasse.JPG'

export const article: SeedArticle = {
  kind: 'article',
  slug: 'renover-chalet-maison-ancienne',
  title: 'Rénover un chalet ou une maison ancienne dans les Hautes-Alpes : **par où commencer** ?',
  topic: 'Rénovation',
  menuLabel: 'Rénover un chalet',
  excerpt:
    "En montagne, une maison ancienne ou un chalet se rénove dans un ordre précis : ce qui porte, puis ce qui protège, puis ce qui isole, et enfin ce qui se voit. Voici l'ordre que nous recommandons, illustré par des maisons que nous avons rénovées à Vallouise, Prelles, Briançon et L'Argentière-la-Bessée.",
  cardSummary: "L'ordre des travaux, de la charpente aux finitions, avec des exemples de chantiers.",
  image: HERO,
  tldr: "Pour rénover un chalet ou une maison ancienne en montagne, commencez par un état des lieux, puis suivez cet ordre : la structure et la charpente ; la couverture, pour mettre hors d'eau ; l'isolation et l'étanchéité à l'air ; les ouvertures ; les finitions. Gardez le vieux bois sain et isolez avec des matériaux biosourcés, adaptés au bâti ancien.",
  layout: [
    // 3.5 Avant tout, l'état des lieux
    {
      type: 'richText',
      anchor: 'etat-des-lieux',
      content: `## Avant tout, **l'état des lieux**

Une maison ancienne raconte son histoire à qui sait la lire. Avant de choisir un isolant ou une fenêtre, il faut savoir ce qui tient, ce qui souffre, et pourquoi. Regardez en particulier :

- **la charpente :** pièces fendues, affaissées, attaquées par les insectes ou l'humidité, surtout aux appuis et aux pieds de fermes ;
- **la toiture :** traces d'infiltration, état de la couverture et des dépassées de toit, ces débords qui protègent les façades ;
- **les murs :** humidité en pied de mur, enduits qui cloquent, fissures ;
- **les planchers :** solives qui fléchissent, planchers qui vibrent ou penchent ;
- **votre projet :** habiter les combles, ouvrir une pièce, agrandir. Il change l'ordre des priorités.`,
    },
    {
      type: 'richText',
      boxed: true,
      content: `Faites ce tour avec un professionnel. Chez 3B Charpente, chaque projet débute par une étude sur mesure, et nous vous fournissons un calendrier estimatif dès la première rencontre. Côté démarches, passez tôt en mairie : modifier l'aspect extérieur d'une maison demande en général une autorisation.`,
    },
    // 3.6 1. La structure et la charpente d'abord
    {
      type: 'richText',
      anchor: 'charpente',
      content: `## 1. La structure et **la charpente** d'abord

Tout repose sur la structure. Isoler une toiture dont la charpente fléchit, c'est enfermer le problème sous un isolant neuf. On commence donc par réparer, renforcer ou, si besoin, remplacer.

À [Briançon](/realisations/renovation-d-une-copropriete-a-briancon/), sur une copropriété, nous avons repris les fermes de la charpente, puis isolé et refait la couverture. À [L'Argentière-la-Bessée](/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/), l'ancienne charpente d'une maison a été déposée et remplacée par une charpente neuve, taillée et assemblée à blanc avant le levage. À [Prelles](/realisations/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/), la charpente d'une maison d'habitation a été taillée en mélèze pays, le mélèze local, puis levée avec le solivage.

C'est aussi le moment de penser aux futures ouvertures : une lucarne ou une fenêtre de toit se prépare dans la charpente, avec un chevêtre, la pièce qui encadre l'ouverture. Et si vous voulez habiter les combles, le plancher doit pouvoir porter une pièce de vie : dans un autre bâti ancien, nous avons ainsi créé un plancher neuf en douglas et en épicéa.

[Rénovation de charpente et combles](/renovation-charpente-combles/)`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: 'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg',
          caption: 'Reprise des fermes sur une copropriété à Briançon.',
        },
        {
          image: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/3Assemblage à blanc  (1).JPG',
          caption: "Assemblage à blanc de la charpente en mélèze pays d'une maison rénovée à Prelles",
        },
      ],
    },
    // 3.7 2. La couverture, pour mettre hors d'eau
    {
      type: 'richText',
      anchor: 'couverture',
      content: `## 2. La couverture, **pour mettre hors d'eau**

Une fois la structure saine, on referme le toit. Une couverture étanche protège tout ce qui suit : isolant, planchers, finitions.

Au [Casset](/realisations/renovation-d-un-toit-en-bardeau-meleze-au-casset/), nous avons rénové un toit en bardeaux de mélèze, ces petites planches de bois posées en recouvrement, un matériau traditionnel des toits alpins. À Briançon, la couverture de la copropriété a été refaite et une dépassée de toiture recréée.

Si la couverture doit être refaite, c'est l'occasion d'isoler par l'extérieur, en sarking : les panneaux isolants sont posés en continu sur la charpente, sous la nouvelle couverture. La charpente reste apparente à l'intérieur, et les pièces habitées ne sont pas touchées.

[Isolation de toiture par l'extérieur (sarking)](/isolation-toiture-sarking/)`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: 'renovation-d-un-toit-en-bardeau-meleze-au-casset/avant.JPG',
          caption: 'Toit en bardeaux de mélèze au Casset, avant',
        },
        {
          image: 'renovation-d-un-toit-en-bardeau-meleze-au-casset/après.JPG',
          caption: 'Toit en bardeaux de mélèze au Casset, après',
        },
      ],
    },
    // 3.8 3. L'isolation et l'étanchéité à l'air
    {
      type: 'richText',
      anchor: 'isolation',
      content: `## 3. Isoler avec des **matériaux biosourcés**

Une maison ancienne n'est pas une maison neuve. Ses murs en pierre ou en bois ont besoin de laisser passer la vapeur d'eau et de sécher. Les [isolants biosourcés](/conseils/isolant-biosource-montagne/), comme la fibre de bois, la ouate de cellulose ou les laines de chanvre, de lin et de coton, savent stocker puis rendre une partie de l'humidité : c'est un atout dans le bâti ancien. Les panneaux de fibre de bois, denses, ralentissent aussi la chaleur d'été.

Isoler ne suffit pas : il faut aussi rendre la maison étanche à l'air. Une membrane ou des panneaux continus, côté chauffé, empêchent l'air chaud et humide de traverser l'isolant, où il pourrait condenser. Une maison étanche à l'air doit, en contrepartie, être bien ventilée.`,
    },
    {
      type: 'richText',
      boxed: true,
      content: `**Le chalet de Vallouise :** 28 cm de laine de chanvre, lin et coton et de fibre de bois dans les murs, 32 cm en toiture.`,
    },
    {
      type: 'richText',
      content: `Quand la façade peut changer d'aspect, l'isolation thermique par l'extérieur (ITE), un isolant continu posé sur la face extérieure des murs, supprime les ponts thermiques et garde la masse des murs anciens côté intérieur. À Vallouise, une partie du chalet est ainsi enduite sur fibre de bois, l'autre habillée de bardage en mélèze.

Quand on ne peut pas toucher à la façade, on isole par l'intérieur. Sur un [bâti ancien](/realisations/isolation-d-un-bati-ancien-par-l-interieur/) isolé de cette façon, les photos du chantier montrent la méthode : doublage avec des poutres en I (des poutres légères en forme de I), panneaux OSB3, pose de l'étanchéité à l'air, puis insufflation de ouate de cellulose.

3B Charpente est qualifiée QUALIBAT-RGE pour l'isolation des murs et des toitures par l'extérieur, et des murs et rampants par l'intérieur. Ce label ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.

[Isolation biosourcée](/isolation-biosourcee/) · [Isolation des murs par l'extérieur](/isolation-murs-ite/)`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: 'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG',
          caption: "Insufflation de ouate de cellulose dans un bâti ancien isolé par l'intérieur.",
        },
      ],
    },
    // 3.9 4. Les ouvertures
    {
      type: 'richText',
      anchor: 'ouvertures',
      content: `## 4. Les ouvertures, **pensées avec l'isolation**

Fenêtres, portes, lucarnes, fenêtres de toit : on les choisit en même temps que l'isolant et on les pose quand l'enveloppe se referme. Leur position dans l'épaisseur du mur et leur raccord à l'étanchéité à l'air comptent autant que la menuiserie elle-même.

Sur le chalet de Vallouise, des ouvertures ont été créées ou modifiées. À [L'Argentière-la-Bessée](/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/), une maison d'habitation a reçu un pignon vitré et de nouveaux vitrages. À [Saint-Martin-de-Queyrières](/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/), une lucarne a été ouverte lors d'une rénovation énergétique. 3B Charpente est aussi qualifiée RGE pour les fenêtres de toit et pour les fenêtres, volets et portes donnant sur l'extérieur.`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/03Pignon vitré.JPG',
          caption: "Pignon vitré d'une maison rénovée à L'Argentière-la-Bessée.",
        },
      ],
    },
    // 3.10 5. Les finitions
    {
      type: 'richText',
      anchor: 'finitions',
      content: `## 5. Les finitions, **ce qui se voit**

Vient enfin ce qui se voit et se touche : planchers, escaliers, bardages, terrasses, garde-corps. C'est là que le bois local fait la différence, en mélèze et en sapin des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli.

À [Vallouise](/charpentier-vallouise-pays-des-ecrins/), la terrasse agrandie du chalet est en mélèze, avec des assemblages traditionnels. À Prelles, la rénovation s'est terminée par une terrasse en mélèze et un garde-corps bois-métal. À L'Argentière-la-Bessée, une maison a reçu un bardage vieux bois, un escalier balancé et un garde-corps en bois de réemploi ; une autre, un plancher en mélèze.

[Escaliers bois sur mesure](/escalier-bois-sur-mesure/) · [Balcons, terrasses et garde-corps](/balcon-terrasse-abri-bois/)`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: 'renovation-et-isolation-d-un-chalet-a-vallouise/10. Terrasse en mélèze et ses assemblages traditionnels.JPG',
          caption: 'Terrasse en mélèze et ses assemblages traditionnels, Vallouise',
        },
        {
          image: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/6Terrasse mélèze.JPG',
          caption: 'Terrasse mélèze, Prelles',
        },
        {
          image: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/07Escalier balancé.JPG',
          caption: "Escalier balancé, L'Argentière-la-Bessée",
        },
      ],
    },
    // 3.11 Garder et réemployer le vieux bois (bandeau vert forêt)
    {
      type: 'cta',
      variant: 'band',
      anchor: 'vieux-bois',
      badge: '3B Récup’',
      title: 'Garder le vieux bois **et lui donner une seconde vie**',
      text: `Dans une maison ancienne, tout le bois n'est pas à jeter. Une poutre saine, une ferme encore droite, un plancher usé mais solide peuvent rester en place, être réparés, ou être déposés puis [remis en œuvre ailleurs](/conseils/reemploi-bois-construction/).

C'est le travail de 3B Récup', notre activité de déconstruction sélective et de réemploi. Nous déposons les éléments de structure bois (charpente, solivage, murs à ossature), la couverture, l'isolation et les parements. Dans notre atelier, ce bois est trié, nettoyé et usiné, puis reposé sur nos chantiers.

Pour une maison particulière, un diagnostic ressources, c'est-à-dire un repérage volontaire des matériaux réemployables, permet de savoir avant les travaux ce qui mérite d'être sauvé.`,
      primary: { label: "Découvrir 3B Récup'", href: '/3b-recup/' },
      secondary: { label: 'Le bois de réemploi', href: '/3b-recup/bois-de-reemploi/' },
    },
    // 3.12 L'exemple du chalet de Vallouise
    {
      type: 'richText',
      anchor: 'vallouise',
      content: `## Le chalet de Vallouise, **une rénovation complète**`,
    },
    {
      type: 'textImage',
      imagePosition: 'left',
      images: [
        'renovation-et-isolation-d-un-chalet-a-vallouise/01. Façade Ouest avant les travaux.jpg',
        'renovation-et-isolation-d-un-chalet-a-vallouise/04. Façade Nord et Ouest.JPG',
      ],
      text: `Ce chalet des années 1980 a été entièrement rénové et isolé. Ce n'est pas une maison ancienne au sens du patrimoine, mais il pose les mêmes questions que toute maison de montagne : une enveloppe à reprendre, des ouvertures à revoir, des extérieurs à agrandir.

- **Murs :** 28 cm de laine de chanvre, lin et coton et de fibre de bois.
- **Toiture :** 32 cm des mêmes isolants.
- **Façades :** une partie en bardage de mélèze, l'autre enduite sur fibre de bois.
- **Ouvertures :** créées ou modifiées.
- **Extérieurs :** dépassée nord agrandie, balcon agrandi en terrasse étanchée, en mélèze et assemblages traditionnels.`,
      cta: { label: 'Voir le chantier en photos', href: '/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/' },
    },
    // 3.13 Par où commencer, concrètement
    {
      type: 'richText',
      anchor: 'checklist',
      content: `## Par où commencer, **concrètement**`,
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        { text: 'Notez ce que vous voulez faire de la maison, pièce par pièce.' },
        { text: 'Faites venir un charpentier pour examiner la charpente et la toiture.' },
        { text: 'Renseignez-vous en mairie sur les autorisations : ouvertures, façades, hauteur.' },
        { text: 'Repérez le bois et les matériaux qui méritent d\'être gardés ou réemployés.' },
        { text: 'Choisissez l\'isolant selon les murs : biosourcé et ouvert à la vapeur pour le bâti ancien.' },
        {
          text: "Vérifiez les aides possibles auprès de [France Rénov'](https://france-renov.gouv.fr/), le service public de la rénovation, avec un [artisan RGE](/conseils/aides-renovation-artisan-rge/).",
        },
        { text: 'Demandez un calendrier qui suive l\'ordre : structure, couverture, isolation, ouvertures, finitions.' },
      ],
    },
    // 3.14 Qui écrit ce guide ? (portrait de Jean non disponible)
    {
      type: 'richText',
      boxed: true,
      content: `### Qui écrit ce guide ?

3B Charpente a été fondée en 2007 à L'Argentière-la-Bessée par Jean-Michel Tardy, charpentier formé chez les Compagnons du Devoir (CAP, puis Tour de France en France, en Martinique et en Autriche). Nous avons commencé avec des projets de charpente, puis étendu nos services à la rénovation de chalets, de maisons de pays, et à la construction neuve en ossature bois.

[Notre histoire](/a-propos/)`,
    },
    // 3.15 FAQ
    {
      type: 'faq',
      title: "Vos questions sur **la rénovation d'une maison ancienne**",
      faqs: [
        'renover-chalet-maison-ancienne-q1',
        'renover-chalet-maison-ancienne-q2',
        'renover-chalet-maison-ancienne-q3',
        'renover-chalet-maison-ancienne-q4',
        'renover-chalet-maison-ancienne-q5',
        'renover-chalet-maison-ancienne-q6',
      ],
    },
    // 3.16 Appel à l'action final
    {
      type: 'cta',
      variant: 'band',
      title: 'Prêt à **transformer votre maison** ?',
      text: 'Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons voir votre chalet ou votre maison, nous regardons la charpente et l\'enveloppe avec vous, et nous vous proposons un devis détaillé, dans le bon ordre.',
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'renover-chalet-maison-ancienne-q1',
      topic: 'guides',
      question: "Par quoi commencer la rénovation d'une maison ancienne ?",
      answer:
        "Par un état des lieux, puis par la structure. On vérifie la charpente, la toiture, les murs et les planchers, et on précise le projet. L'ordre logique est ensuite : structure et charpente, couverture, isolation et étanchéité à l'air, ouvertures, finitions. Commencer par les finitions, c'est risquer de tout reprendre le jour où l'on touche à la structure.",
    },
    {
      key: 'renover-chalet-maison-ancienne-q2',
      topic: 'guides',
      question: "Faut-il refaire la toiture avant d'isoler ?",
      answer:
        "Il faut au moins qu'elle soit saine et étanche : isoler sous une couverture qui fuit abîme l'isolant et les bois. Si la couverture doit de toute façon être refaite, profitez-en pour isoler par l'extérieur, en sarking : les panneaux isolants sont posés en continu sur la charpente, sous la nouvelle couverture, et la charpente reste apparente à l'intérieur.",
    },
    {
      key: 'renover-chalet-maison-ancienne-q3',
      topic: 'guides',
      question: 'Quel isolant choisir pour un chalet ou une maison ancienne en pierre ?',
      answer:
        "Pour un bâti ancien, on privilégie des isolants biosourcés et ouverts à la vapeur d'eau : fibre de bois, ouate de cellulose, laines de chanvre, de lin ou de coton. Ils gèrent mieux l'humidité des murs anciens. Sur un chalet de Vallouise, nous avons posé 28 cm de laine de chanvre, lin et coton et de fibre de bois dans les murs, et 32 cm en toiture.",
    },
    {
      key: 'renover-chalet-maison-ancienne-q4',
      topic: 'guides',
      question: "Peut-on garder la charpente d'origine d'une maison ancienne ?",
      answer:
        "Souvent, oui. Une charpente ancienne se répare : remplacement de pièces, reprise des fermes, renfort par doublage, rallonge par un trait de Jupiter, un assemblage qui aboute deux pièces. Il faut l'examiner de près avant de décider. Si elle doit être déposée, ses pièces saines peuvent être triées, nettoyées et réemployées : c'est le rôle de 3B Récup', notre activité de réemploi du bois.",
    },
    {
      key: 'renover-chalet-maison-ancienne-q5',
      topic: 'guides',
      question: "Combien de temps dure la rénovation d'un chalet ?",
      answer:
        "Cela dépend de l'état de la maison et de l'ampleur des travaux : refaire une toiture ou rénover toute l'enveloppe, ce n'est pas le même chantier. Le délai peut varier selon la complexité et la taille du projet ; nous vous fournirons un calendrier estimatif lors de notre première rencontre. En montagne, pensez aussi aux saisons : la mise hors d'eau se prévoit avant l'hiver.",
    },
    {
      key: 'renover-chalet-maison-ancienne-q6',
      topic: 'guides',
      question: 'Existe-t-il des aides pour rénover une maison ancienne ?',
      answer:
        "Oui, sous conditions. Certains travaux d'isolation et de menuiseries réalisés par un artisan RGE peuvent ouvrir droit à des aides publiques à la rénovation énergétique. 3B Charpente est qualifiée QUALIBAT-RGE pour l'isolation des murs, des toitures et des rampants, et pour les fenêtres et fenêtres de toit. Les règles changent souvent : vérifiez votre situation auprès de France Rénov' avant de signer.",
    },
  ],
  seo: {
    title: 'Rénovation maison ancienne en montagne | 3B Charpente',
    description:
      "Rénover un chalet ou une maison ancienne en montagne : l'ordre des travaux, l'isolation biosourcée, le vieux bois à garder. Le guide d'un charpentier RGE.",
    image: HERO,
  },
  photoAlts: [
    {
      photo: HERO,
      alt: 'Chalet des années 1980 rénové et isolé par 3B Charpente à Vallouise, façade sud et terrasse en mélèze',
      caption: 'Chalet des années 1980 rénové et isolé à Vallouise, avec sa terrasse en mélèze.',
    },
    {
      photo: 'renovation-et-isolation-d-un-chalet-a-vallouise/01. Façade Ouest avant les travaux.jpg',
      alt: 'Façade ouest du chalet de Vallouise avant les travaux de rénovation',
    },
    {
      photo: 'renovation-d-une-copropriete-a-briancon/4 Reprise des fermes.jpeg',
      alt: "Reprise des fermes de la charpente d'une copropriété à Briançon",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/3Assemblage à blanc  (1).JPG',
      alt: "Assemblage à blanc de la charpente en mélèze pays d'une maison rénovée à Prelles",
    },
    {
      photo: 'renovation-d-un-toit-en-bardeau-meleze-au-casset/après.JPG',
      alt: 'Toit en bardeaux de mélèze rénové au Casset (Hautes-Alpes)',
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/insufflation de ouate de cellulose.JPG',
      alt: "Insufflation de ouate de cellulose lors de l'isolation d'un bâti ancien par l'intérieur",
    },
    {
      photo: 'renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/06Bardage vieux bois.JPG',
      alt: "Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée",
    },
  ],
  validationPoints: [
    {
      question:
        'Signature : Jean relit-il et signe-t-il le guide ? Si oui, faire pointer l’auteur des données structurées vers la Person de la page À propos.',
      decision:
        "Signé « L'équipe de 3B Charpente » (décision par défaut). La ligne d'auteur de la fiche (« Par 3B Charpente, charpentiers à L'Argentière-la-Bessée depuis 2007 … · Publié le … · Lecture : 8 minutes ») est remplacée par la signature et la date générées par le site.",
      priority: 'normal',
    },
    {
      question:
        'Ordre des travaux : l’ordre proposé (structure, couverture, isolation, ouvertures, finitions) est-il celui que Jean recommande ? Une nuance à ajouter (par exemple les menuiseries posées avant l’isolation par l’intérieur) ?',
      decision: 'Ordre publié tel que rédigé dans la fiche.',
      priority: 'normal',
    },
    {
      question: 'Chalet de Vallouise : ordre réel des travaux, durée, isolant précis des murs (marque ou composition).',
      decision: 'Travaux présentés par poste, sans chronologie, sans durée ni marque.',
      priority: 'low',
    },
    {
      question:
        'Bâti ancien isolé par l’intérieur : commune du chantier, et confirmation de la méthode lue sur les photos (doublage en poutres en I, OSB3, étanchéité à l’air, insufflation de ouate).',
      decision: 'Aucune commune indiquée ; la méthode est présentée comme « ce que montrent les photos du chantier ».',
      priority: 'normal',
    },
    {
      question: 'Plancher en douglas et épicéa (« Création d’un plancher dans un bâti ancien ») : commune, pour le citer avec un lieu.',
      decision: 'Cité sans commune (« dans un autre bâti ancien »).',
      priority: 'low',
    },
    {
      question: 'Diagnostic ressources : 3B propose-t-il ce repérage aux particuliers ? (section « Garder le vieux bois »)',
      decision:
        'La phrase générale sur le diagnostic ressources est gardée, sans dire que 3B le propose. La mention entre crochets est retirée.',
      priority: 'normal',
    },
    {
      question:
        'SIRET RGE : la qualification est rattachée au SIRET 494 482 714 00024, les mentions légales indiquent 00016 ; à vérifier avant d’afficher RGE.',
      decision:
        'Mentions RGE gardées (« qualifiée QUALIBAT-RGE », domaines exacts, sans logo) ; SIRET affiché sur le site : 494 482 714 00016 (décision par défaut).',
      priority: 'high',
    },
    {
      question: 'Ventilation : 3B travaille-t-il avec un ventiliste qu’il recommande ? (facultatif)',
      decision: 'Aucun partenaire cité ; le guide dit seulement qu’une maison étanche à l’air doit être bien ventilée.',
      priority: 'low',
    },
    {
      question: 'Date de publication et page /conseils/ : créer une page d’accueil des guides ?',
      decision: 'Page /conseils/ publiée au lancement : fil d’Ariane Accueil › Conseils › guide. Date = date de mise en ligne.',
      priority: 'low',
    },
    {
      question:
        "Exemples de la section « Garder le vieux bois » : « bardage vieux bois et garde-corps à L'Argentière-la-Bessée, ferme en vieux bois lors d'une réfection de toiture » présentés comme du bois déposé puis reposé par 3B Récup'.",
      decision:
        "Exemples retirés de cette phrase (décision « Origine du vieux bois » : ne pas dire que ce bois vient d'une déconstruction faite par 3B). Ils restent cités dans la section « Les finitions ».",
      priority: 'normal',
    },
    {
      question: 'Scierie Savoldelli (section « Les finitions ») : la fiche écrit « sciés par la Scierie Savoldelli, notre partenaire ».',
      decision:
        "Formulation de la FAQ validée appliquée : « sciés par notre partenaire local, la Scierie Savoldelli ». Nommée une seule fois dans le guide.",
      priority: 'low',
    },
    {
      question: 'Parcours de Jean (encadré « Qui écrit ce guide ? ») : la fiche écrit « formé chez les Compagnons du Devoir et sur le Tour de France ».',
      decision:
        'Formulation par défaut appliquée : « formé chez les Compagnons du Devoir (CAP, puis Tour de France en France, en Martinique et en Autriche) ». Pas de portrait (aucun disponible) : encadré texte seul.',
      priority: 'low',
    },
    {
      question:
        'Liens internes : « Vallouise » dans le chapô → /charpentier-vallouise-pays-des-ecrins/ ; « Découvrir 3B Récup’ » dans la FAQ Q4 ; guide des aides dans la FAQ Q6.',
      decision:
        'Le chapô et les réponses de FAQ sont du texte simple (sans lien) : le lien « Vallouise » est posé dans la section « Les finitions », « Découvrir 3B Récup’ » dans le bandeau « Garder le vieux bois », et le guide des aides à l’étape 6 de « Par où commencer, concrètement ».',
      priority: 'low',
    },
    {
      question:
        'Composants absents : curseur avant / après (Le Casset) et schéma de l’ordre des travaux (à redessiner).',
      decision: 'Avant / après affichés en galerie de deux photos ; schéma non repris (il n’existe pas).',
      priority: 'low',
    },
    {
      question:
        'Photos à demander : portrait de Jean, isolation en cours de pose à Vallouise, vieux bois trié à l’atelier.',
      decision: 'Photos existantes utilisées en attendant.',
      priority: 'low',
    },
  ],
}
