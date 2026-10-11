/**
 * Fiche 26 · Guide « Aides à la rénovation : pourquoi choisir un artisan RGE ? »
 * Source : 3b-charpente-kit/docs/pages/26-guide-aides-renovation-artisan-rge.md
 * Le héros (titre, chapô, signature, date, photo) et le sommaire sont générés à partir des
 * champs de l'article et des titres ## des blocs de texte : ils ne figurent pas dans `layout`.
 * Règle propre à ce guide : aucun montant, aucun plafond, aucune condition d'accès ;
 * les aides existent « sous conditions », renvoi vers France Rénov'.
 */
import type { SeedArticle } from '../../types'

const HERO = 'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/toiture terminée.jpg'

export const article: SeedArticle = {
  kind: 'article',
  slug: 'aides-renovation-artisan-rge',
  title: 'Aides à la rénovation : pourquoi choisir un **artisan RGE** dans les **Hautes-Alpes** ?',
  topic: 'Aides',
  excerpt:
    "Vous voulez isoler votre toit ou vos murs, ou changer vos fenêtres, et vous avez entendu parler des aides ? Avant les montants, une question compte : l'entreprise est-elle qualifiée RGE pour vos travaux ? Voici ce que recouvre ce label, comment le vérifier et comment préparer votre projet.",
  cardSummary: "Ce qu'est le label RGE, comment le vérifier et les étapes d'un projet aidé.",
  image: HERO,
  tldr: "Un artisan RGE (Reconnu garant de l'environnement) est qualifié, domaine par domaine, pour des travaux de rénovation énergétique. La plupart des aides publiques, comme MaPrimeRénov' ou les certificats d'économies d'énergie, l'exigent, sous conditions. Vérifiez l'entreprise dans l'annuaire de France Rénov' et faites le point avec un conseiller France Rénov' avant de signer un devis.",
  layout: [
    // 3.3 Encadré « Ce que ce guide ne dit pas »
    {
      type: 'cta',
      variant: 'slim',
      icon: 'info',
      text: "Ce guide ne donne volontairement aucun montant, aucun plafond et aucune condition d'accès : les règles des aides changent chaque année, parfois en cours d'année. Pour votre situation, la seule référence à jour est France Rénov' ([france-renov.gouv.fr](https://france-renov.gouv.fr/)), le service public de la rénovation de l'habitat.",
    },
    // 3.5 Le label RGE, c'est quoi ?
    {
      type: 'richText',
      anchor: 'rge',
      content: `## Le label RGE, **c'est quoi** ?

**RGE signifie « Reconnu garant de l'environnement ». C'est un signe de qualité attribué aux entreprises du bâtiment qui réalisent des travaux de rénovation énergétique** : isolation, fenêtres, chauffage, énergies renouvelables…

Il est délivré par des organismes de qualification ou de certification, comme Qualibat pour le bâtiment. Pour l'obtenir, l'entreprise doit notamment justifier de compétences techniques, désigner une personne formée qui encadre les chantiers concernés et accepter des contrôles de ses réalisations. La qualification est accordée pour une durée limitée et suivie dans le temps.

**Point essentiel : le RGE s'obtient par domaine de travaux.** Une entreprise peut être RGE pour l'isolation des toitures et pas pour la pose de fenêtres, ou l'inverse. C'est le domaine qui compte, pas le logo seul.

Le RGE n'est pas une garantie absolue : c'est un niveau d'exigence vérifié. Il ne remplace ni un devis détaillé ni les assurances de l'entreprise. Demandez aussi son attestation d'assurance décennale.`,
    },
    // 3.6 Pourquoi le RGE compte pour les aides
    {
      type: 'richText',
      anchor: 'aides',
      content: `## Pourquoi le RGE compte **pour les aides**

En France, plusieurs aides publiques soutiennent la rénovation énergétique des logements. Elles existent toutes sous conditions, et ces conditions changent souvent. Les principaux dispositifs sont :

- **MaPrimeRénov'**, l'aide de l'État gérée par l'Agence nationale de l'habitat (Anah) ;
- les **certificats d'économies d'énergie (CEE)**, souvent appelés « primes énergie », financés par les fournisseurs d'énergie ;
- l'**éco-prêt à taux zéro (éco-PTZ)**, un prêt sans intérêts pour financer des travaux ;
- une **TVA à taux réduit** sur certains travaux de rénovation énergétique ;
- des **aides locales** de collectivités, qui varient selon les territoires.

**Pour la plupart de ces aides, les travaux doivent être réalisés par une entreprise qualifiée RGE dans le domaine concerné.** Le label RGE ouvre ainsi l'accès aux aides publiques à la rénovation énergétique, sous conditions.

Les montants, les plafonds de ressources et les conditions évoluent régulièrement. Nous ne les détaillons pas ici, volontairement : la seule source à jour est France Rénov'.

Un point de méthode, valable quel que soit le dispositif : renseignez-vous **avant** de signer un devis ou de commencer les travaux. Pour plusieurs aides, l'ordre des démarches compte.`,
    },
    // 3.7 Comment vérifier qu'un artisan est RGE
    {
      type: 'richText',
      anchor: 'verifier',
      content: `## Comment vérifier **qu'un artisan est RGE**`,
    },
    {
      type: 'steps',
      variant: 'tabs',
      steps: [
        {
          title: 'Demandez le certificat',
          text: 'Une entreprise RGE peut vous transmettre son certificat de qualification : nom de l\'entreprise, organisme, domaines couverts, dates de validité.',
        },
        {
          title: "Vérifiez dans l'annuaire officiel",
          text: "L'annuaire des professionnels RGE est accessible depuis france-renov.gouv.fr. Cherchez l'entreprise par son nom, sa commune ou le type de travaux.",
        },
        {
          title: 'Contrôlez le domaine',
          text: 'Le domaine affiché doit correspondre exactement à vos travaux : « isolation des toitures par l\'extérieur » n\'est pas « isolation par l\'intérieur des murs ou rampants de toitures ou plafonds ».',
        },
        {
          title: 'Comparez les identités',
          text: 'Le nom et le numéro SIRET du certificat doivent correspondre à ceux du devis. Si une partie des travaux est confiée à une autre entreprise, demandez laquelle, et avec quelle qualification.',
        },
        {
          title: 'Regardez les dates',
          text: 'Une qualification a une date de fin. Demandez à votre conseiller France Rénov\' à quelle date elle doit être valide pour votre dossier.',
        },
      ],
    },
    {
      type: 'cta',
      variant: 'slim',
      icon: 'shield',
      text: 'Méfiez-vous des démarchages par téléphone ou à domicile, des promesses de travaux « gratuits » et des entreprises qui vous pressent de signer. Un conseiller France Rénov\' est neutre et gratuit : il ne vend rien.',
      primary: { label: "Ouvrir l'annuaire RGE de France Rénov'", href: 'https://france-renov.gouv.fr/annuaire-rge' },
    },
    // 3.8 Les domaines RGE de 3B Charpente
    {
      type: 'richText',
      anchor: 'domaines-3b',
      content: `## Les domaines RGE **de 3B Charpente**

3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007, est qualifié QUALIBAT-RGE. La qualification est au nom de son fondateur, « TARDY JEAN-MICHEL », et figure dans l'annuaire RGE de l'ADEME (données ouvertes), avec une date de rattachement au 2 octobre 2025. Elle couvre cinq domaines :`,
    },
    {
      type: 'comparisonTable',
      columns: ["Domaine RGE (intitulé de l'annuaire)", 'Ce que cela recouvre chez nous'],
      rows: [
        [
          "Isolation des murs par l'extérieur",
          "ITE (isolation thermique par l'extérieur) en panneaux de fibre de bois, sous bardage bois ou enduit",
        ],
        ["Isolation des toitures par l'extérieur", 'Sarking : isolant continu posé au-dessus des chevrons, sous la couverture'],
        [
          "Isolation par l'intérieur des murs ou rampants de toitures ou plafonds",
          'Murs du bâti ancien (ouate de cellulose insufflée), rampants, combles',
        ],
        ['Fenêtres de toit', "Ouverture dans la charpente, pose et raccords à l'isolation"],
        ["Fenêtres, volets, portes donnant sur l'extérieur", "Menuiseries raccordées à l'isolation des murs"],
      ],
    },
    {
      type: 'richText',
      content: `**Pour en savoir plus :** [Isolation des murs par l'extérieur](/isolation-murs-ite/) · [Isolation de toiture et sarking](/isolation-toiture-sarking/) · [Fenêtres de toit](/isolation-toiture-sarking/#fenetres-de-toit) · [Menuiseries extérieures](/isolation-murs-ite/#menuiseries)

Nos isolants sont biosourcés, c'est-à-dire fabriqués à partir de matières issues du vivant : ouate de cellulose, fibre de bois, laines de chanvre, lin et coton. Nos autres prestations (charpente, escaliers, terrasses) relèvent de notre métier de charpentier, en dehors de ces domaines. Et parce que rénover, c'est aussi réemployer, nous donnons une seconde vie au bois déposé avec 3B Récup'.

[Isolation biosourcée dans les Hautes-Alpes](/isolation-biosourcee/) · [3B Récup'](/3b-recup/)`,
    },
    {
      type: 'gallery',
      images: [
        {
          image: "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/vue de dessous d'un velux 78x98.JPG",
          caption: "Fenêtre de toit de 78 × 98 cm dans un rampant isolé à L'Argentière-la-Bessée",
        },
      ],
    },
    // 3.9 Les étapes d'un projet de rénovation aidé
    {
      type: 'richText',
      anchor: 'etapes',
      content: `## Les étapes d'un projet **de rénovation aidé**`,
    },
    {
      type: 'steps',
      variant: 'timeline',
      steps: [
        {
          title: "Faire le point avec un conseiller France Rénov'",
          text: "Gratuit et neutre, il vous aide à comprendre les aides possibles pour votre logement et votre situation, et l'ordre des démarches. Pour le trouver : [france-renov.gouv.fr](https://france-renov.gouv.fr/), ou le numéro national 0 808 800 700.",
        },
        {
          title: 'Faire réaliser un audit ou un diagnostic, si besoin',
          text: "Pour un projet global, un audit énergétique aide à hiérarchiser les travaux, et il peut être demandé selon les dispositifs. Pour une rénovation d'ampleur, un accompagnement par un opérateur agréé, appelé Mon Accompagnateur Rénov', peut aussi être exigé : votre conseiller vous orientera.",
        },
        {
          title: "Rencontrer l'artisan et obtenir un devis détaillé",
          text: 'Chez 3B Charpente, chaque projet débute par une étude sur mesure : nous discutons de vos besoins lors d\'une rencontre et vous proposons un devis détaillé adapté à votre projet. Un bon devis précise les matériaux, les épaisseurs, les surfaces et les performances des isolants. Ces informations servent aussi à vos dossiers.',
        },
        {
          title: "Faire les demandes d'aides au bon moment",
          text: 'Avec votre conseiller, vérifiez quelles demandes se font avant la signature du devis ou le début des travaux, et lesquelles après.',
        },
        {
          title: 'Réaliser les travaux',
          text: 'Le délai peut varier selon la complexité et la taille du projet : nous vous fournissons un calendrier estimatif dès la première rencontre. Viennent ensuite la préparation, le chantier et la fin des travaux.',
        },
        {
          title: 'Transmettre les factures et les justificatifs',
          text: 'La facture finale reprend les travaux réalisés et leurs caractéristiques. Elle sert à obtenir le versement des aides accordées.',
        },
      ],
    },
    {
      type: 'gallery',
      images: [
        {
          image: 'isolation-d-un-bati-ancien-par-l-interieur/menuiseries livrées!.JPG',
          caption: "Menuiseries livrées sur un chantier d'isolation d'un bâti ancien.",
        },
      ],
    },
    // 3.10 Par où commencer : l'ordre des travaux
    {
      type: 'richText',
      anchor: 'ordre-des-travaux',
      content: `## Par où commencer : **l'ordre des travaux**

Une rénovation aidée n'est pas forcément une rénovation complète, faite en une seule fois. Mais l'ordre des travaux compte, pour ne pas défaire demain ce que l'on fait aujourd'hui.`,
    },
    {
      type: 'list',
      style: 'bullets',
      items: [
        {
          text: "**L'enveloppe d'abord.** On isole avant de remplacer le chauffage : une maison mieux isolée a besoin d'un chauffage moins puissant.",
        },
        {
          text: "**Le toit, souvent en premier.** Dans une maison peu isolée, c'est souvent par là que part le plus de chaleur, et c'est sous le toit que l'été se fait le plus sentir.",
        },
        {
          text: '**Les murs et les fenêtres ensemble.** La position et le raccord des fenêtres dépendent de l\'isolation des murs : les traiter en même temps évite un pont thermique autour de chaque ouverture.',
        },
        {
          text: "**La ventilation avec l'étanchéité à l'air.** L'étanchéité à l'air empêche l'air de traverser les parois ; une maison rendue plus étanche doit donc rester correctement ventilée.",
        },
        {
          text: "**Les travaux déjà prévus.** Une couverture à refaire, une façade à reprendre : c'est le bon moment pour isoler par l'extérieur, puisque l'échafaudage est là.",
        },
      ],
    },
    {
      type: 'richText',
      content: `Un audit énergétique ou un rendez-vous avec un conseiller France Rénov' aide à construire ce plan. Lors de notre visite, nous regardons aussi la charpente et les ouvertures, pour que l'isolation s'inscrive dans un ensemble cohérent.`,
    },
    // 3.11 Les pièges à éviter
    {
      type: 'richText',
      anchor: 'pieges',
      content: `## Les **pièges** à éviter`,
    },
    {
      type: 'list',
      style: 'bullets',
      items: [
        { text: "**Signer trop vite**, avant d'avoir fait le point sur les aides avec un conseiller France Rénov'." },
        { text: '**Se fier au logo RGE** sans vérifier que le domaine correspond à vos travaux.' },
        {
          text: "**Choisir un isolant sur son seul prix**, sans penser au confort d'été ni à l'humidité. Notre guide des isolants biosourcés aide à comparer.",
        },
        {
          text: "**Oublier l'étanchéité à l'air et la ventilation.** L'étanchéité à l'air est la couche continue qui empêche l'air de traverser les parois ; sans elle, l'isolation perd une partie de son efficacité.",
        },
        {
          text: '**Isoler sans regarder la charpente.** En montagne, une toiture porte la neige tout l\'hiver : un isolant neuf ne doit pas cacher une structure fatiguée.',
        },
        {
          text: "**Oublier la mairie.** Une isolation par l'extérieur modifie l'aspect de la maison et demande en général une déclaration préalable de travaux.",
        },
      ],
      cta: { label: 'Quel isolant biosourcé choisir en montagne ?', href: '/conseils/isolant-biosource-montagne/' },
    },
    // 3.12 Réalisations
    {
      type: 'projects',
      mode: 'manual',
      label: 'brand',
      kicker: 'Nos chantiers',
      title: 'Des rénovations énergétiques **en photos**',
      items: [
        {
          project: 'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere',
          title: "Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières",
          text: "Caissons d'isolation et étanchéité à l'air, nouvelle lucarne, toiture terminée.",
        },
        {
          project: 'isolation-d-un-bati-ancien-par-l-interieur',
          title: "Isolation d'un bâti ancien par l'intérieur",
          text: "Ossature en poutres en I, étanchéité à l'air, ouate de cellulose insufflée, encadrements et menuiseries.",
        },
        {
          project: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
          title: "Isolation d'une toiture ancienne à L'Argentière-la-Bessée",
          text: "Panneaux de fibre de bois, étanchéité à l'air, fenêtre de toit de 78 × 98 cm.",
        },
      ],
    },
    // 3.13 FAQ
    {
      type: 'faq',
      kicker: 'Questions fréquentes',
      title: 'Vos questions sur **le RGE et les aides**',
      faqs: [
        'aides-renovation-artisan-rge-q1',
        'aides-renovation-artisan-rge-q2',
        'aides-renovation-artisan-rge-q3',
        'aides-renovation-artisan-rge-q4',
        'aides-renovation-artisan-rge-q5',
        'aides-renovation-artisan-rge-q6',
      ],
    },
    // 3.14 Appel à l'action final
    {
      type: 'cta',
      variant: 'band',
      kicker: 'Un projet de rénovation énergétique ?',
      title: 'Parlons de **votre maison**',
      text: "Isolation de toiture ou de murs, fenêtres de toit, menuiseries : contactez-nous par le site ou par téléphone. Nous venons voir votre maison et vous proposons un devis détaillé, en charpentiers qualifiés RGE. Pour les aides, nous vous orientons vers votre conseiller France Rénov'.",
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'aides-renovation-artisan-rge-q1',
      topic: 'guides',
      question: "Qu'est-ce qu'un artisan RGE ?",
      answer:
        "Un artisan RGE (Reconnu garant de l'environnement) est une entreprise qualifiée par un organisme comme Qualibat pour des travaux de rénovation énergétique précis : isolation, fenêtres, chauffage… La qualification est attribuée domaine par domaine, pour une durée limitée, avec des contrôles. Pour la plupart des aides publiques à la rénovation énergétique, elle est exigée, sous conditions.",
    },
    {
      key: 'aides-renovation-artisan-rge-q2',
      topic: 'guides',
      question: "Comment vérifier qu'un artisan est bien RGE ?",
      answer:
        "Consultez l'annuaire des professionnels RGE sur france-renov.gouv.fr et cherchez l'entreprise par son nom ou sa commune. Vérifiez que le domaine affiché correspond exactement à vos travaux, que la qualification est en cours de validité et que le nom et le SIRET sont ceux du devis. Vous pouvez aussi demander le certificat à l'entreprise.",
    },
    {
      key: 'aides-renovation-artisan-rge-q3',
      topic: 'guides',
      question: "Faut-il un artisan RGE pour avoir MaPrimeRénov' ?",
      answer:
        "Pour MaPrimeRénov', comme pour la plupart des aides publiques à la rénovation énergétique, les travaux doivent être réalisés par une entreprise qualifiée RGE dans le domaine concerné. Les montants, les plafonds et les conditions changent régulièrement : vérifiez votre situation avec un conseiller France Rénov' (france-renov.gouv.fr) avant de signer votre devis.",
    },
    {
      key: 'aides-renovation-artisan-rge-q4',
      topic: 'guides',
      question: 'Un charpentier peut-il être RGE ?',
      answer:
        "Oui. Un charpentier peut être qualifié RGE pour les travaux d'isolation et d'ouvertures qu'il réalise. 3B Charpente, à L'Argentière-la-Bessée, est qualifié QUALIBAT-RGE pour l'isolation des murs et des toitures par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit, et les fenêtres, volets et portes donnant sur l'extérieur.",
    },
    {
      key: 'aides-renovation-artisan-rge-q5',
      topic: 'guides',
      question: "Le RGE couvre-t-il tous les travaux d'une entreprise ?",
      answer:
        "Non. Le RGE est attribué par domaine de travaux. Une entreprise peut être RGE pour l'isolation des toitures sans l'être pour les fenêtres ou le chauffage. Avant de compter sur une aide, vérifiez que le domaine exact de vos travaux figure sur le certificat de l'entreprise ou dans l'annuaire de France Rénov'. Une terrasse ou un escalier, eux, ne relèvent pas du RGE.",
    },
    {
      key: 'aides-renovation-artisan-rge-q6',
      topic: 'guides',
      question: "Qui contacter pour connaître les aides auxquelles j'ai droit ?",
      answer:
        "Le réseau public France Rénov'. Ses conseillers sont gratuits et neutres : ils étudient votre logement, vos travaux et votre situation, puis vous indiquent les aides possibles et l'ordre des démarches. Rendez-vous sur france-renov.gouv.fr ou appelez le 0 808 800 700. Nous vous recommandons de le faire avant de signer un devis.",
    },
  ],
  seo: {
    title: 'Artisan RGE et aides rénovation, Hautes-Alpes | 3B Charpente',
    description:
      "Qu'est-ce qu'un artisan RGE, comment le vérifier sur France Rénov' et préparer un projet aidé ? Le guide d'un charpentier RGE des Hautes-Alpes.",
    image: HERO,
  },
  photoAlts: [
    {
      photo: HERO,
      alt: "Toiture terminée après une rénovation énergétique et l'ouverture d'une lucarne à Saint-Martin-de-Queyrières",
      caption: "Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières.",
    },
    {
      photo: "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/vue de dessous d'un velux 78x98.JPG",
      alt: "Fenêtre de toit de 78 × 98 cm dans un rampant isolé à L'Argentière-la-Bessée",
    },
    {
      photo: 'isolation-d-un-bati-ancien-par-l-interieur/menuiseries livrées!.JPG',
      alt: "Menuiseries livrées sur un chantier d'isolation d'un bâti ancien par l'intérieur",
    },
  ],
  validationPoints: [
    {
      question:
        'SIRET de la qualification RGE : l’annuaire de l’ADEME indique 494 482 714 00024, les mentions légales 494 482 714 00016. Le guide conseille de comparer le SIRET du certificat et celui du devis : ceux de 3B doivent être cohérents avant la mise en ligne.',
      decision: 'SIRET affiché sur le site : 494 482 714 00016 (décision par défaut). Le guide ne cite aucun SIRET.',
      priority: 'high',
    },
    {
      question:
        'Certificat QUALIBAT-RGE : numéro, date de fin de validité, et accord pour afficher le logo et un lien direct vers la fiche de l’annuaire (prévu sous le tableau des domaines).',
      decision:
        'Mention « À valider avec Jean : numéro du certificat QUALIBAT et date de fin de validité » retirée : ni numéro, ni date de fin, ni logo Qualibat (décision par défaut). Le bouton renvoie vers l’annuaire RGE de France Rénov’.',
      priority: 'normal',
    },
    {
      question:
        'Accompagnement aux aides : 3B aide-t-il ses clients à monter leurs dossiers (MaPrimeRénov’, CEE) ? Travaille-t-il avec un partenaire, par exemple pour les CEE ? (étape 4 « Faire les demandes d’aides au bon moment »)',
      decision:
        'On n’écrit pas que 3B monte les dossiers (décision par défaut) : la mention entre crochets de l’étape 4 est retirée, l’étape renvoie au conseiller France Rénov’.',
      priority: 'normal',
    },
    {
      question: 'Assurance décennale : le guide conseille de la demander. 3B peut-il fournir son attestation (nom de l’assureur) sur demande ou sur la page contact ?',
      decision: 'Conseil gardé tel quel ; aucun assureur cité.',
      priority: 'normal',
    },
    {
      question: 'Signature du guide : Jean accepte-t-il de signer de son nom ?',
      decision:
        "Signé « L'équipe de 3B Charpente » (décision par défaut). La ligne d'auteur de la fiche (« Par 3B Charpente, charpentier qualifié RGE à L'Argentière-la-Bessée · Mis à jour en octobre 2026 ») est remplacée par la signature et la date générées par le site.",
      priority: 'normal',
    },
    {
      question:
        'Conseiller France Rénov’ local : Jean connaît-il l’espace conseil France Rénov’ qui couvre le nord des Hautes-Alpes ? Le citer nommément serait utile, une fois l’information vérifiée.',
      decision: 'Non cité : seuls le site france-renov.gouv.fr et le numéro national figurent.',
      priority: 'low',
    },
    {
      question:
        'Relecture annuelle : qui relit cette page chaque année (noms des dispositifs, lien vers l’annuaire, numéro national) ?',
      decision: 'À planifier ; la date de mise à jour du guide se change dans l’administration à chaque relecture.',
      priority: 'normal',
    },
    {
      question: 'Page /conseils/ : à créer (liste des guides) pour que le fil d’Ariane fonctionne, ou retirer ce niveau ?',
      decision: 'Page /conseils/ publiée au lancement : fil d’Ariane Accueil › Conseils › guide.',
      priority: 'low',
    },
    {
      question: 'Adresse exacte de l’annuaire RGE de France Rénov’ (bouton « Ouvrir l’annuaire RGE de France Rénov’ »).',
      decision: 'Lien posé vers https://france-renov.gouv.fr/annuaire-rge, adresse de la fiche, à vérifier à la mise en ligne.',
      priority: 'normal',
    },
    {
      question:
        'Tableau des domaines RGE : colonne « Pour en savoir plus » avec un lien par domaine.',
      decision:
        'Les cellules du tableau n’acceptent pas de lien : la colonne est remplacée par une ligne « Pour en savoir plus » sous le tableau, avec les quatre liens de la fiche.',
      priority: 'low',
    },
    {
      question:
        'Photos des cartes de réalisations (« étanchéité à l’air et caissons d’isolation », « insufflation de ouate de cellulose », « couverture terminée »).',
      decision: 'Les cartes affichent la photo principale de chaque réalisation ; à changer dans la fiche réalisation si besoin.',
      priority: 'low',
    },
    {
      question:
        'Visuels à demander ou à créer : certificat QUALIBAT-RGE, photo de Jean en visite chez un client, capture de la fiche 3B dans l’annuaire France Rénov’, pictogrammes par domaine RGE.',
      decision: 'Non disponibles : non repris.',
      priority: 'low',
    },
  ],
}
