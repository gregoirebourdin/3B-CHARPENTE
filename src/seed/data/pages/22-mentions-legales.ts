import type { SeedPage } from '../../types'

/**
 * Fiche 22 : Mentions légales et confidentialité (/mentions-legales/).
 * Variante « mesure d'audience sans consentement » (option A), sans bandeau cookies.
 * Ancres : #editeur, #hebergement (titre H2), #confidentialite, #cookies.
 */
export const page: SeedPage = {
  kind: 'page',
  slug: 'mentions-legales',
  title: 'Mentions légales et confidentialité',
  breadcrumbLabel: 'Mentions légales et confidentialité',
  seo: {
    title: 'Mentions légales et confidentialité | 3B Charpente',
    description:
      'Mentions légales de 3B Charpente (EI Jean-Michel Tardy, SIREN 494 482 714) et politique de confidentialité : formulaire, cookies, vos droits.',
  },
  hero: {
    variant: 'simple',
    title: 'Mentions légales et **confidentialité**',
    text: 'Cette page présente les informations légales du site 3bcharpente.fr, la façon dont nous traitons vos données personnelles et notre usage des cookies.',
  },
  layout: [
    // Sommaire (liens d'ancre)
    {
      type: 'richText',
      content: [
        '**Sommaire**',
        '',
        '- [Éditeur du site](/mentions-legales/#editeur)',
        '- [Hébergement](/mentions-legales/#hebergement)',
        '- [Activité et qualification](/mentions-legales/#activite-et-qualification)',
        '- [Médiation de la consommation](/mentions-legales/#mediation-de-la-consommation)',
        '- [Propriété intellectuelle](/mentions-legales/#propriete-intellectuelle)',
        '- [Responsabilité](/mentions-legales/#responsabilite-et-liens)',
        '- [Politique de confidentialité](/mentions-legales/#confidentialite)',
        '- [Cookies](/mentions-legales/#cookies)',
      ].join('\n'),
    },
    // Sections 2 à 7 : éditeur, hébergement, activité, médiation, propriété intellectuelle, responsabilité
    {
      type: 'richText',
      anchor: 'editeur',
      content: [
        '## Éditeur du site',
        '',
        'Le site 3bcharpente.fr est édité par **Jean-Michel Tardy EI** (entrepreneur individuel), qui exerce sous le nom commercial **3B Charpente**.',
        '',
        "- Adresse : 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, France",
        '- Téléphone : 06 34 67 31 49',
        '- E-mail : tardy@3bcharpente.fr',
        '- SIREN : 494 482 714',
        '- SIRET : 494 482 714 00016',
        '- Code APE : 4391A (travaux de charpente)',
        '- Directeur de la publication : Jean-Michel Tardy',
        '',
        '## Hébergement',
        '',
        'Le site est hébergé par : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.',
        '',
        '## Activité et qualification',
        '',
        "Activité principale : travaux de charpente (code APE 4391A). 3B Charpente réalise aussi des travaux d'isolation, de construction en ossature bois, d'escaliers, de balcons et de terrasses, ainsi que la déconstruction sélective et le réemploi du bois sous le nom 3B Récup'.",
        '',
        "Qualification : 3B Charpente est qualifiée **QUALIBAT-RGE** (reconnu garant de l'environnement), au nom de « TARDY JEAN-MICHEL », pour les domaines suivants : isolation des murs par l'extérieur ; isolation des toitures par l'extérieur ; isolation par l'intérieur des murs ou rampants de toitures ou plafonds ; fenêtres de toit ; fenêtres, volets, portes donnant sur l'extérieur. Cette qualification peut être vérifiée dans l'[annuaire officiel des professionnels RGE](https://france-renov.gouv.fr/annuaire-rge).",
        '',
        '## Médiation de la consommation',
        '',
        "Conformément aux articles L. 611-1 et suivants du Code de la consommation, si vous êtes un particulier et qu'un litige vous oppose à 3B Charpente, vous pouvez recourir gratuitement à un médiateur de la consommation.",
        '',
        'Avant de le saisir, vous devez nous avoir adressé une réclamation écrite (par courrier ou par e-mail à tardy@3bcharpente.fr) pour tenter de régler le litige directement avec nous.',
        '',
        '## Propriété intellectuelle',
        '',
        'Les textes, photographies de chantiers, logos, plans et illustrations de ce site appartiennent à 3B Charpente ou à leurs auteurs, sauf mention contraire. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite est interdite.',
        '',
        "Vous souhaitez reprendre une photo pour un article, une présentation ou un projet d'architecture ? Écrivez-nous à tardy@3bcharpente.fr.",
        '',
        '### Crédits',
        '',
        '- Photographies de chantiers : 3B Charpente.',
        '- Polices de caractères : Nohemi et Inter, hébergées sur notre propre serveur.',
        '',
        '## Responsabilité et liens',
        '',
        "Nous veillons à l'exactitude des informations publiées sur ce site, mais elles peuvent contenir des erreurs ou devenir inexactes avec le temps. Signalez-nous toute erreur à tardy@3bcharpente.fr.",
        '',
        "Les réalisations présentées sont des exemples : chaque projet fait l'objet d'une étude et d'un devis personnalisés.",
        '',
        "Les liens vers d'autres sites (Facebook, annuaire RGE, PRECI…) sont donnés pour votre information. Nous ne sommes pas responsables de leur contenu.",
      ].join('\n'),
    },
    // Section 9 : politique de confidentialité
    {
      type: 'richText',
      anchor: 'confidentialite',
      content: [
        '## Politique de confidentialité',
        '',
        'Nous collectons le moins de données possible, uniquement pour répondre à vos demandes et réaliser vos travaux. Voici, en clair, ce que nous en faisons.',
        '',
        '### Qui est responsable de vos données ?',
        '',
        "Le responsable du traitement est Jean-Michel Tardy EI (3B Charpente), 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, tardy@3bcharpente.fr, 06 34 67 31 49. Nous n'avons pas désigné de délégué à la protection des données, cette désignation n'étant pas obligatoire pour notre activité.",
        '',
        '### Quelles données collectons-nous ?',
        '',
        "- **Quand vous remplissez le formulaire de contact :** votre qualité (particulier, architecte, entreprise, collectivité…), vos nom et prénom, téléphone, e-mail, la commune du chantier, le type de projet et de bâtiment, l'existence de plans, l'échéance souhaitée, votre message, les fichiers que vous joignez (plans, photos), la façon dont vous nous avez connus et la page depuis laquelle vous écrivez.",
        '- **Quand vous nous appelez ou nous écrivez :** les informations que vous choisissez de nous donner.',
        "- **Si vous devenez client :** vos coordonnées, l'adresse du chantier et les informations nécessaires au devis, à la facturation et au suivi des travaux.",
        "- **Quand vous naviguez sur le site :** des données de fréquentation (pages vues, site de provenance, type d'appareil), dans les conditions décrites dans la partie « Cookies », et les journaux techniques de l'hébergeur (adresse IP, date et heure de connexion), utilisés pour la sécurité.",
        '',
        'Nous ne vous demandons aucune donnée sensible (santé, opinions, etc.). Merci de ne pas en indiquer dans votre message.',
        '',
        '### Pourquoi utilisons-nous vos données, et sur quelle base ?',
        '',
        'Ce que nous faisons, et sa base légale (article 6 du RGPD) :',
        '',
        '- **Répondre à votre demande, organiser une rencontre, établir un devis :** mesures précontractuelles prises à votre demande.',
        '- **Réaliser les travaux, facturer, assurer le suivi et les garanties :** exécution du contrat et respect de nos obligations légales (comptabilité, garanties).',
        "- **Mesurer la fréquentation du site pour l'améliorer :** intérêt légitime (mesure d'audience exemptée de consentement).",
        '- **Protéger le site et le formulaire (anti-spam, journaux de sécurité) :** intérêt légitime.',
        '- **Publier des photos de votre chantier dans nos réalisations :** votre accord préalable ; nous ne publions jamais votre nom ni votre adresse précise.',
        '',
        'Nous ne vendons et ne louons jamais vos données.',
        '',
        '### Qui reçoit vos données ?',
        '',
        '- Jean-Michel Tardy et les personnes de 3B Charpente qui traitent votre demande ou votre chantier.',
        "- Nos prestataires techniques, qui agissent uniquement sur nos instructions : hébergeur du site (Vercel Inc.), outil d'envoi du formulaire (Resend), messagerie électronique, outil de mesure d'audience.",
        '- Les autorités, si la loi nous y oblige.',
        '',
        "### Vos données quittent-elles l'Union européenne ?",
        '',
        "Nous privilégions des prestataires qui hébergent les données dans l'Union européenne. Si l'un d'eux transfère des données hors de l'Union, ce transfert est encadré par une décision d'adéquation de la Commission européenne ou par des clauses contractuelles types.",
        '',
        '### Combien de temps gardons-nous vos données ?',
        '',
        '- **Demande de contact ou de devis restée sans suite (y compris les fichiers joints) :** 3 ans après notre dernier échange.',
        '- **Dossier client (devis signé, échanges, plans, photos du chantier) :** pendant les travaux, puis 10 ans après la réception des travaux (durée de la garantie décennale).',
        '- **Factures et pièces comptables :** 10 ans (obligation légale).',
        "- **Cookies et traceurs de mesure d'audience :** 13 mois au plus ; données de fréquentation conservées 25 mois au plus.",
        '',
        '### Comment protégeons-nous vos données ?',
        '',
        "Le site est servi en connexion sécurisée (HTTPS). Les demandes reçues ne sont accessibles qu'aux personnes qui en ont besoin, avec des comptes protégés par mot de passe. Nos prestataires sont choisis pour leurs garanties de sécurité.",
        '',
        '### Quels sont vos droits ?',
        '',
        'Vous pouvez à tout moment :',
        '',
        '- accéder à vos données et en obtenir une copie ;',
        '- les faire corriger ou compléter ;',
        '- les faire effacer ;',
        '- demander la limitation de leur utilisation ;',
        '- vous opposer à leur utilisation fondée sur notre intérêt légitime ;',
        '- récupérer les données que vous nous avez fournies, dans un format lisible (portabilité) ;',
        "- retirer votre consentement, quand l'utilisation repose sur celui-ci ;",
        '- définir des directives sur le sort de vos données après votre décès.',
        '',
        "Pour exercer ces droits, écrivez à tardy@3bcharpente.fr ou à 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée. Nous vous répondons dans un délai d'un mois (prolongeable de deux mois si la demande est complexe ; nous vous en informerons). Nous ne vous demanderons un justificatif d'identité qu'en cas de doute raisonnable.",
        '',
        '### Une réclamation ?',
        '',
        "Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL : Commission nationale de l'informatique et des libertés, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, [www.cnil.fr](https://www.cnil.fr).",
      ].join('\n'),
    },
    // Section 10 : cookies et traceurs (option A : mesure d'audience sans consentement)
    {
      type: 'richText',
      anchor: 'cookies',
      content: [
        '## Cookies et traceurs',
        '',
        'Un cookie est un petit fichier déposé sur votre appareil quand vous visitez un site. Sur 3bcharpente.fr, nous en utilisons le moins possible : **aucun cookie publicitaire**, aucun bouton de partage qui vous suit, aucun pixel Facebook. Le lien vers notre page Facebook est un simple lien. Nos polices de caractères sont hébergées sur notre propre serveur.',
        '',
        '### Les traceurs utilisés',
        '',
        "- **Mesure d'audience :** compter les visites et les pages vues, de façon anonyme. Durée : 13 mois au plus. Votre accord : non requis (exempté).",
        '',
        "### Mesure d'audience",
        '',
        "Nous utilisons un outil de mesure d'audience sans cookie, configuré selon les recommandations de la CNIL pour être dispensé de consentement. Les données servent uniquement à produire des statistiques anonymes de fréquentation de notre site ; elles ne sont ni croisées avec d'autres données ni transmises à des tiers. Les traceurs ont une durée de vie de 13 mois au plus et les données sont conservées 25 mois au plus.",
        '',
        '### Gérer les cookies dans votre navigateur',
        '',
        'Vous pouvez aussi bloquer ou supprimer les cookies depuis les réglages de votre navigateur (Chrome, Firefox, Safari, Edge). Le site restera utilisable.',
      ].join('\n'),
    },
    // Section 11 : contact
    {
      type: 'cta',
      variant: 'slim',
      icon: 'mail',
      title: 'Une question sur cette page ?',
      text: 'Écrivez-nous à tardy@3bcharpente.fr ou appelez le 06 34 67 31 49.',
      secondary: { label: 'Nous contacter', href: '/contact/' },
    },
  ],
  validationPoints: [
    {
      question:
        "SIRET à afficher : les mentions légales actuelles indiquent 494 482 714 00016 ; l'annuaire RGE de l'ADEME indique 494 482 714 00024. Vérifier sur annuaire-entreprises.data.gouv.fr quel établissement est actif au 5 rue Saint-Michel, et n'afficher que celui-là, partout (site, devis, fiche Google).",
      decision: 'SIRET affiché : 494 482 714 00016 (celui des mentions légales actuelles).',
      priority: 'high',
    },
    {
      question:
        'Immatriculation : mention exacte au Registre national des entreprises (RNE), activité artisanale, et chambre de métiers de rattachement.',
      decision:
        "Ligne « Immatriculation » retirée de l'éditeur du site tant que l'information manque.",
      priority: 'high',
    },
    {
      question: 'Numéro de TVA intracommunautaire.',
      decision: 'Ligne retirée tant que le numéro manque.',
      priority: 'high',
    },
    {
      question:
        "Assurance responsabilité civile décennale : nom de l'assureur, numéro de contrat, couverture géographique.",
      decision:
        "Ligne retirée tant que l'information manque ; le titre de section devient « Activité et qualification » (au lieu de « Activité, qualification et assurance »), sommaire compris.",
      priority: 'high',
    },
    {
      question:
        "Médiateur de la consommation : lequel (nom, adresse postale, site internet) ? Obligatoire dès qu'on travaille pour des particuliers.",
      decision:
        'Ligne « Médiateur de la consommation » retirée ; les deux paragraphes généraux de la section sont gardés.',
      priority: 'high',
    },
    {
      question: 'Hébergeur du nouveau site : raison sociale, adresse, téléphone.',
      decision:
        'Hébergeur du déploiement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Téléphone non affiché.',
      priority: 'normal',
    },
    {
      question:
        'Conception et réalisation du site : qui est cité (personne ou agence, lien éventuel) ?',
      decision: 'Sous-titre « Conception et réalisation » retiré.',
      priority: 'low',
    },
    {
      question:
        "Mesure d'audience : option A (sans bandeau, conseillée) ou option B (Google Analytics avec bandeau) ? Nom de l'outil et des cookies.",
      decision:
        "Option A : mesure d'audience sans cookie (Vercel Analytics, Plausible ou Umami, au choix dans le réglage « Mesure d'audience »), sans bandeau de consentement. Le nom de l'outil n'est pas écrit. Retirés : le module d'opposition « Mes visites sont comptabilisées de façon anonyme » (pas fourni par ces outils), le traceur « Préférences de consentement », la durée « Votre choix concernant les cookies (6 mois) », la fin de phrase « seule la mesure d'audience sera désactivée » (fausse sans cookie) et la mention « ou votre consentement, selon l'option retenue ».",
      priority: 'normal',
    },
    {
      question:
        "Traceurs conditionnels : sécurité du formulaire (si l'outil retenu en dépose) et carte interactive de la page contact (si elle est activée au clic).",
      decision:
        "Lignes retirées : le formulaire utilise un champ piège sans cookie et la page contact n'a pas de carte interactive. À rétablir si l'un des deux change.",
      priority: 'low',
    },
    {
      question:
        "Outils : formulaire, messagerie (où sont hébergés les e-mails ?), mesure d'audience, et qui, dans l'équipe, a accès aux demandes.",
      decision:
        "Prestataires cités : hébergeur du site (Vercel Inc.), outil d'envoi du formulaire (Resend), messagerie électronique et outil de mesure d'audience sans nom. Accès décrit comme dans la fiche : « Jean-Michel Tardy et les personnes de 3B Charpente qui traitent votre demande ou votre chantier ».",
      priority: 'normal',
    },
    {
      question: "Transferts hors de l'Union européenne : préciser selon les outils retenus.",
      decision:
        "Paragraphe général gardé (décision d'adéquation ou clauses contractuelles types), sans détail par outil. Vercel et Resend sont des sociétés américaines.",
      priority: 'normal',
    },
    {
      question: "Durée de conservation des journaux techniques de l'hébergeur (1 an au plus ?).",
      decision: 'Ligne retirée des durées de conservation.',
      priority: 'low',
    },
    {
      question:
        'Photos des clients : leur accord est-il demandé avant de publier les photos de leur maison ? Sinon, le prévoir pour les nouveaux chantiers, et vérifier les réalisations déjà en ligne.',
      decision:
        'Texte de la fiche gardé (« votre accord préalable ; nous ne publions jamais votre nom ni votre adresse précise »). Les communes, déjà publiques sur le site actuel, sont gardées.',
      priority: 'normal',
    },
    {
      question:
        "Partage avec les autres intervenants du chantier (architecte, bureau d'études, autres artisans), avec votre accord et seulement pour votre projet : à confirmer.",
      decision: 'Ligne retirée de « Qui reçoit vos données ? ».',
      priority: 'normal',
    },
    {
      question:
        "Durées de conservation : 3 ans pour les demandes sans suite, 10 ans pour les dossiers clients. D'accord ?",
      decision: 'Durées de la fiche gardées.',
      priority: 'normal',
    },
    {
      question:
        "Financement européen FEADER / LEADER : objet du financement et obligation d'affichage (logos, durée).",
      decision: 'Section « Financement européen » non affichée (et retirée du sommaire).',
      priority: 'normal',
    },
    {
      question:
        "Démarchage téléphonique et lettre d'information : « Nous n'envoyons pas de lettre d'information et nous ne faisons pas de démarchage téléphonique » à confirmer ; le régime du démarchage téléphonique a été réformé en 2025 : vérifier si une mention (liste Bloctel ou consentement préalable) reste obligatoire quand on recueille le numéro d'un particulier.",
      decision:
        'Phrase retirée (avec « votre numéro sert uniquement à vous rappeler au sujet de votre demande ») ; seule reste « Nous ne vendons et ne louons jamais vos données. »',
      priority: 'normal',
    },
    {
      question:
        "Crédits : auteur et licence des photographies d'ambiance ; licence d'usage web de la police Nohemi.",
      decision:
        "Ligne « Photographies d'ambiance » retirée. Ligne des polices gardée : la licence fournie (src/fonts/LICENCE.md) autorise l'usage commercial gratuit, fichiers non modifiés. Ligne « Plan d'accès © OpenStreetMap » retirée (pas de plan statique pour l'instant).",
      priority: 'low',
    },
    {
      question: "Lien vers l'annuaire officiel des professionnels RGE : adresse exacte.",
      decision:
        "Lien vers https://france-renov.gouv.fr/annuaire-rge (annuaire France Rénov') ; à vérifier à la mise en ligne.",
      priority: 'low',
    },
    {
      question:
        'Date « Dernière mise à jour » de la page (et dateModified des données structurées) : date de mise en ligne.',
      decision:
        "Ligne retirée du haut de page ; la date de modification enregistrée par l'administration peut servir aux données structurées.",
      priority: 'low',
    },
  ],
}
