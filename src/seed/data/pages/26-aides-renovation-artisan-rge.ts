/**
 * Fiche 26 · Guide « Aides à la rénovation : pourquoi choisir un artisan RGE ? »
 * Source : 3b-charpente-kit/docs/pages/26-guide-aides-renovation-artisan-rge.md
 * Le héros (titre, chapô, signature, date, photo) et le sommaire sont générés à partir des
 * champs de l'article et des titres ## des blocs de texte : ils ne figurent pas dans `layout`.
 * Règle propre à ce guide : aucun montant, aucun plafond, aucune condition d'accès ;
 * les aides existent « sous conditions », renvoi vers France Rénov'.
 */
import type { SeedArticle } from '../../types'

const HERO =
  'renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/toiture terminée.jpg'

export const article: SeedArticle = {
  kind: 'article',
  slug: 'aides-renovation-artisan-rge',
  title: 'Aides à la rénovation : pourquoi choisir un **artisan RGE** dans les **Hautes-Alpes** ?',
  topic: 'Aides',
  menuLabel: 'Aides à la rénovation et RGE',
  excerpt:
    "Isoler un toit, des murs, changer des fenêtres avec des aides ? Une question compte avant les montants : l'entreprise est-elle qualifiée RGE pour vos travaux ? Ce que recouvre le label, comment le vérifier, comment préparer votre projet.",
  cardSummary: "Ce qu'est le label RGE, comment le vérifier et les étapes d'un projet aidé.",
  image: HERO,
  tldr: "Un artisan RGE (« reconnu garant de l'environnement ») est qualifié, domaine par domaine, pour des travaux de rénovation énergétique. La plupart des aides publiques l'exigent, comme MaPrimeRénov' ou les certificats d'économies d'énergie, sous conditions. Vérifiez l'entreprise dans l'annuaire de France Rénov' et voyez un conseiller avant de signer.",
  layout: [
    // Ce que ce guide ne dit pas
    {
      type: 'callout',
      kind: 'tip',
      title: 'Ce que ce guide ne dit pas',
      text: "Aucun montant, aucun plafond, aucune condition d'accès : les règles changent chaque année, parfois en cours d'année. Pour votre situation, la seule référence à jour est [France Rénov'](https://france-renov.gouv.fr/), le service public de la rénovation de l'habitat.",
    },
    // Le label RGE, c'est quoi ?
    {
      type: 'richText',
      anchor: 'rge',
      content: `## Le label RGE, **c'est quoi** ?

**RGE signifie « Reconnu garant de l'environnement ».** C'est un signe de qualité attribué aux entreprises du bâtiment qui réalisent des travaux de rénovation énergétique : isolation, fenêtres, chauffage, énergies renouvelables…

Il est délivré par des organismes de qualification ou de certification, comme Qualibat pour le bâtiment, pour une durée limitée et suivie dans le temps.

**Point essentiel : le RGE s'obtient par domaine de travaux.** Une entreprise peut être RGE pour l'isolation des toitures et pas pour les fenêtres, ou l'inverse. C'est le domaine qui compte, pas le logo seul.`,
    },
    {
      type: 'prosCons',
      prosLabel: 'Ce que vérifie le RGE',
      consLabel: "Ce qu'il ne remplace pas",
      pros: [
        "Des compétences techniques justifiées par l'entreprise",
        'Une personne formée qui encadre les chantiers concernés',
        'Des contrôles des réalisations',
      ],
      cons: [
        "Ce n'est pas une garantie absolue, mais un niveau d'exigence vérifié",
        'Un devis détaillé',
        "L'assurance décennale de l'entreprise : demandez son attestation",
      ],
    },
    // Pourquoi le RGE compte pour les aides
    {
      type: 'richText',
      anchor: 'aides',
      content: `## Pourquoi le RGE compte **pour les aides**

Plusieurs aides publiques soutiennent la rénovation énergétique des logements, toutes sous conditions :

- **MaPrimeRénov'**, l'aide de l'État gérée par l'Agence nationale de l'habitat (Anah) ;
- les **certificats d'économies d'énergie (CEE)**, ou « primes énergie », financés par les fournisseurs d'énergie ;
- l'**éco-prêt à taux zéro (éco-PTZ)**, un prêt sans intérêts pour financer des travaux ;
- une **TVA à taux réduit** sur certains travaux ;
- des **aides locales**, qui varient selon les territoires.

**Pour la plupart, les travaux doivent être réalisés par une entreprise qualifiée RGE dans le domaine concerné.** Montants, plafonds de ressources et conditions évoluent : la seule source à jour est France Rénov'.`,
    },
    {
      type: 'callout',
      kind: 'tip',
      text: "Renseignez-vous **avant** de signer un devis ou de commencer les travaux : pour plusieurs aides, l'ordre des démarches compte.",
    },
    // Comment vérifier qu'un artisan est RGE
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
          text: "Nom de l'entreprise, organisme, domaines couverts, dates de validité : une entreprise RGE peut vous le transmettre.",
        },
        {
          title: "Vérifiez dans l'annuaire officiel",
          text: "L'annuaire des professionnels RGE, sur france-renov.gouv.fr : par nom, par commune ou par type de travaux.",
        },
        {
          title: 'Contrôlez le domaine',
          text: "Il doit correspondre exactement à vos travaux : « isolation des toitures par l'extérieur » n'est pas « isolation par l'intérieur des murs ou rampants ».",
        },
        {
          title: 'Comparez les identités',
          text: 'Même nom et même SIRET sur le certificat et sur le devis. Une partie des travaux sous-traitée ? Demandez à qui, et avec quelle qualification.',
        },
        {
          title: 'Regardez les dates',
          text: "Une qualification a une date de fin : votre conseiller France Rénov' vous dira à quelle date elle doit être valide.",
        },
      ],
    },
    {
      type: 'callout',
      kind: 'tip',
      title: 'Attention au démarchage',
      text: "Méfiez-vous des appels ou visites non sollicités, des travaux « gratuits » et des entreprises qui pressent de signer. Un conseiller France Rénov' est neutre et gratuit : il ne vend rien.",
      link: {
        label: "Ouvrir l'annuaire RGE de France Rénov'",
        href: 'https://france-renov.gouv.fr/annuaire-rge',
      },
    },
    // Les domaines RGE de 3B Charpente
    {
      type: 'richText',
      anchor: 'domaines-3b',
      content: `## Les domaines RGE **de 3B Charpente**

3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, est qualifié **QUALIBAT-RGE**. La qualification est au nom de son fondateur, « TARDY JEAN-MICHEL », et figure dans l'annuaire RGE de l'ADEME (données ouvertes), rattachée au 2 octobre 2025. Elle couvre cinq domaines :`,
    },
    {
      type: 'comparisonTable',
      columns: ["Domaine RGE (intitulé de l'annuaire)", 'Ce que cela recouvre chez nous'],
      rows: [
        [
          "Isolation des murs par l'extérieur",
          "ITE (isolation thermique par l'extérieur) en panneaux de fibre de bois, sous bardage bois ou enduit",
        ],
        [
          "Isolation des toitures par l'extérieur",
          'Sarking : isolant continu posé au-dessus des chevrons, sous la couverture',
        ],
        [
          "Isolation par l'intérieur des murs ou rampants de toitures ou plafonds",
          'Murs du bâti ancien (ouate de cellulose insufflée), rampants, combles',
        ],
        ['Fenêtres de toit', "Ouverture dans la charpente, pose et raccords à l'isolation"],
        [
          "Fenêtres, volets, portes donnant sur l'extérieur",
          "Menuiseries raccordées à l'isolation des murs",
        ],
      ],
    },
    {
      type: 'richText',
      content: `**Pour en savoir plus :** [Isolation des murs par l'extérieur](/isolation-murs-ite/) · [Isolation de toiture et sarking](/isolation-toiture-sarking/) · [Fenêtres de toit](/isolation-toiture-sarking/#fenetres-de-toit) · [Menuiseries extérieures](/isolation-murs-ite/#menuiseries)

Nos isolants sont **biosourcés** : ouate de cellulose, fibre de bois, laines de chanvre, lin et coton. Nos autres prestations (charpente, escaliers, terrasses) sortent de ces domaines. Et le bois déposé retrouve une seconde vie avec 3B Récup'.

[Isolation biosourcée dans les Hautes-Alpes](/isolation-biosourcee/) · [3B Récup'](/3b-recup/)`,
    },
    {
      type: 'gallery',
      images: [
        {
          image:
            "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/vue de dessous d'un velux 78x98.JPG",
          caption: "Fenêtre de toit de 78 × 98 cm dans un rampant isolé à L'Argentière-la-Bessée",
        },
      ],
    },
    // Les étapes d'un projet de rénovation aidé
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
          title: "Voir un conseiller France Rénov'",
          text: 'Gratuit et neutre : les aides possibles et l’ordre des démarches. Sur [france-renov.gouv.fr](https://france-renov.gouv.fr/) ou au 0 808 800 700.',
        },
        {
          title: 'Audit ou diagnostic, si besoin',
          text: "Un audit énergétique hiérarchise les travaux. Pour une rénovation d'ampleur, Mon Accompagnateur Rénov' peut être exigé.",
        },
        {
          title: 'Rencontre et devis détaillé',
          text: 'Matériaux, épaisseurs, surfaces, performances des isolants : un bon devis sert aussi à vos dossiers.',
        },
        {
          title: "Demandes d'aides au bon moment",
          text: 'Avec votre conseiller : lesquelles avant la signature ou le début des travaux, lesquelles après.',
        },
        {
          title: 'Réaliser les travaux',
          text: 'Calendrier estimatif dès la première rencontre, puis préparation, chantier et fin des travaux.',
        },
        {
          title: 'Factures et justificatifs',
          text: 'La facture finale reprend les travaux et leurs caractéristiques : elle déclenche le versement des aides.',
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
    // Par où commencer : l'ordre des travaux
    {
      type: 'richText',
      anchor: 'ordre-des-travaux',
      content: `## Par où commencer : **l'ordre des travaux**

Une rénovation aidée n'est pas forcément faite en une fois. Mais **l'ordre compte**, pour ne pas défaire demain ce que l'on fait aujourd'hui.`,
    },
    {
      type: 'list',
      style: 'definitions',
      items: [
        {
          title: "L'enveloppe d'abord",
          text: 'On isole avant de changer le chauffage : une maison mieux isolée en demande un moins puissant.',
        },
        {
          title: 'Le toit, souvent en premier',
          text: "C'est souvent par là que part le plus de chaleur, et sous le toit que l'été se sent le plus.",
        },
        {
          title: 'Murs et fenêtres ensemble',
          text: 'Traités en même temps, ils évitent un pont thermique autour de chaque ouverture.',
        },
        {
          title: "Ventilation et étanchéité à l'air",
          text: 'Une maison rendue plus étanche doit rester correctement ventilée.',
        },
        {
          title: 'Les travaux déjà prévus',
          text: "Couverture ou façade à refaire : c'est le moment d'isoler par l'extérieur, l'échafaudage est là.",
        },
      ],
    },
    {
      type: 'richText',
      content: `Un audit énergétique ou un rendez-vous France Rénov' aide à bâtir ce plan. À notre visite, nous regardons aussi la charpente et les ouvertures, pour une isolation cohérente.`,
    },
    // Les pièges à éviter
    {
      type: 'richText',
      anchor: 'pieges',
      content: `## Les **pièges** à éviter`,
    },
    {
      type: 'list',
      style: 'checks',
      items: [
        { text: "**Signer trop vite**, avant d'avoir vu un conseiller France Rénov'." },
        { text: '**Se fier au logo RGE** sans vérifier le domaine de vos travaux.' },
        {
          text: "**Choisir un isolant sur son seul prix**, sans penser au confort d'été ni à l'humidité.",
        },
        {
          text: "**Oublier l'étanchéité à l'air et la ventilation** : sans elles, l'isolation perd une partie de son efficacité.",
        },
        {
          text: "**Isoler sans regarder la charpente** : en montagne, un toit porte la neige tout l'hiver.",
        },
        {
          text: "**Oublier la mairie** : une isolation par l'extérieur demande en général une déclaration préalable.",
        },
      ],
      cta: {
        label: 'Quel isolant biosourcé choisir en montagne ?',
        href: '/conseils/isolant-biosource-montagne/',
      },
    },
    // Réalisations
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
          text: "Caissons d'isolation, étanchéité à l'air, lucarne ouverte.",
        },
        {
          project: 'isolation-d-un-bati-ancien-par-l-interieur',
          title: "Isolation d'un bâti ancien par l'intérieur",
          text: "Poutres en I, étanchéité à l'air, ouate insufflée, menuiseries.",
        },
        {
          project: 'isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee',
          title: "Isolation d'une toiture ancienne à L'Argentière-la-Bessée",
          text: "Fibre de bois, étanchéité à l'air, fenêtre de toit.",
        },
      ],
    },
    // FAQ
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
    // Appel à l'action final
    {
      type: 'cta',
      variant: 'card',
      kicker: 'Un projet de rénovation énergétique ?',
      title: 'Parlons de **votre maison**',
      text: "Toiture, murs, fenêtres de toit, menuiseries : nous venons voir votre maison et vous proposons un devis détaillé. Pour les aides, nous vous orientons vers votre conseiller France Rénov'.",
      primary: { label: 'Demander mon devis', href: '/contact/' },
      secondary: { label: 'Appeler le {telephone}', href: 'tel' },
      showAddress: true,
    },
  ],
  faqs: [
    {
      key: 'aides-renovation-artisan-rge-q1',
      topic: 'guides',
      question: "Qu'est-ce qu'un artisan RGE ?",
      answer:
        "Une entreprise qualifiée « Reconnu garant de l'environnement » par un organisme comme Qualibat, pour des travaux de rénovation énergétique précis : isolation, fenêtres, chauffage… La qualification est attribuée domaine par domaine, pour une durée limitée, avec des contrôles. La plupart des aides publiques l'exigent, sous conditions.",
    },
    {
      key: 'aides-renovation-artisan-rge-q2',
      topic: 'guides',
      question: "Comment vérifier qu'un artisan est bien RGE ?",
      answer:
        "Dans l'annuaire des professionnels RGE sur france-renov.gouv.fr, par nom ou par commune. Vérifiez que le domaine correspond exactement à vos travaux, que la qualification est valide, et que le nom et le SIRET sont ceux du devis. Vous pouvez aussi demander le certificat à l'entreprise.",
    },
    {
      key: 'aides-renovation-artisan-rge-q3',
      topic: 'guides',
      question: "Faut-il un artisan RGE pour avoir MaPrimeRénov' ?",
      answer:
        "Oui : pour MaPrimeRénov', comme pour la plupart des aides publiques, les travaux doivent être réalisés par une entreprise RGE dans le domaine concerné. Montants, plafonds et conditions changent régulièrement : voyez un conseiller France Rénov' (france-renov.gouv.fr) avant de signer.",
    },
    {
      key: 'aides-renovation-artisan-rge-q4',
      topic: 'guides',
      question: 'Un charpentier peut-il être RGE ?',
      answer:
        "Oui, pour les travaux d'isolation et d'ouvertures qu'il réalise. 3B Charpente, à L'Argentière-la-Bessée, est qualifié QUALIBAT-RGE pour l'isolation des murs et des toitures par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit et les menuiseries extérieures.",
    },
    {
      key: 'aides-renovation-artisan-rge-q5',
      topic: 'guides',
      question: "Le RGE couvre-t-il tous les travaux d'une entreprise ?",
      answer:
        "Non, il est attribué par domaine. Une entreprise peut être RGE pour l'isolation des toitures sans l'être pour les fenêtres ou le chauffage. Vérifiez que le domaine exact de vos travaux figure sur son certificat ou dans l'annuaire. Une terrasse ou un escalier ne relèvent pas du RGE.",
    },
    {
      key: 'aides-renovation-artisan-rge-q6',
      topic: 'guides',
      question: "Qui contacter pour connaître les aides auxquelles j'ai droit ?",
      answer:
        "Le réseau public France Rénov' : ses conseillers, gratuits et neutres, étudient votre logement, vos travaux et votre situation, puis vous indiquent les aides possibles et l'ordre des démarches. Sur france-renov.gouv.fr ou au 0 808 800 700, de préférence avant de signer un devis.",
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
      photo:
        "isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/vue de dessous d'un velux 78x98.JPG",
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
      decision:
        'SIRET affiché sur le site : 494 482 714 00016 (décision par défaut). Le guide ne cite aucun SIRET.',
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
      question:
        'Assurance décennale : le guide conseille de la demander. 3B peut-il fournir son attestation (nom de l’assureur) sur demande ou sur la page contact ?',
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
      decision:
        'À planifier ; la date de mise à jour du guide se change dans l’administration à chaque relecture.',
      priority: 'normal',
    },
    {
      question:
        'Page /conseils/ : à créer (liste des guides) pour que le fil d’Ariane fonctionne, ou retirer ce niveau ?',
      decision: 'Page /conseils/ publiée au lancement : fil d’Ariane Accueil › Conseils › guide.',
      priority: 'low',
    },
    {
      question:
        'Adresse exacte de l’annuaire RGE de France Rénov’ (bouton « Ouvrir l’annuaire RGE de France Rénov’ »).',
      decision:
        'Lien posé vers https://france-renov.gouv.fr/annuaire-rge, adresse de la fiche, à vérifier à la mise en ligne.',
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
      decision:
        'Les cartes affichent la photo principale de chaque réalisation ; à changer dans la fiche réalisation si besoin.',
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
