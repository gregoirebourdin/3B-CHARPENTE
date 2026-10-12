# Design « Atelier ouvert »

Le site garde le logo et la palette de 3B Charpente (crème, vert forêt, sauge, titres Nohemi), avec une grammaire plus aérée : des sections blanches qui alternent avec le crème, des titres posés à gauche et le contenu à droite, des pastilles et des carrés d’icône sauge, peu de texte par bloc. La refonte a été dessinée dans Claude Design avant d’être codée.

La planche de tous les composants, avec le contenu réel, est en ligne sur **`/styleguide/`** (non indexée).

## 1. Les canevas Claude Design

| Écran | Canevas |
|---|---|
| **Refonte « Atelier ouvert » : 16 planches (direction, règles d’écriture, chaque gabarit de page, ordinateur et téléphone)** | https://claude.ai/artifact/492C6jHebRwTtjwKSpdU9i |
| Système de design « 3B Charpente » (jetons, composants, photos) | https://claude.ai/artifact/BMg4Sy2KQJ3VP8T6inD8GF |
| Administration (12 écrans) | https://claude.ai/artifact/CZgb9R7iGGFS32pZvb2LS8 |

Les canevas de la première version (« Atelier alpin », une page par gabarit) restent consultables pour mémoire : accueil https://claude.ai/artifact/VgCVjs7YAAMqWh5x1n4V3a, prestation https://claude.ai/artifact/CkVuTQR3fr5W1G4cWFJeQr, secteur https://claude.ai/artifact/XUrFsyvJXnHPXYX9WGeEPW, 3B Récup’ https://claude.ai/artifact/TXxCj2SWmXDZp4iax4dQHc. Ils sont privés sur claude.ai tant qu’ils ne sont pas partagés.

## 2. Règles d’écriture

Le texte de chaque page a été réécrit pour se lire en diagonale, sans rien perdre de ce qui sert le référencement (H1, titre et description SEO, mots clés des H2, questions de la FAQ, liens internes et données structurées inchangés).

| Élément | Limite |
|---|---|
| Paragraphe | 3 phrases ou 55 mots |
| Texte d’une carte | 20 mots environ |
| Texte d’une étape | 25 mots |
| « En bref » | 50 mots |
| Réponse de FAQ | 60 mots, la réponse d’abord (« Oui. », « Non, pas sans… ») |
| Texte d’une carte de prestation (`cardText`) | une ligne, 12 mots environ |

- Une énumération devient une **liste** (points clés, coches, définitions), jamais une phrase de quatre virgules.
- Les précisions deviennent des **encadrés** : « Bon à savoir », « Sur nos chantiers », « Définition », « Aides et qualification ».
- Les avantages et limites d’un matériau deviennent un bloc **Points forts / Points d’attention**.
- Un chiffre vérifié devient un **chiffre clé** (28 cm, 1 000 m², 2007).
- Aucun fait inventé : chaque phrase vient des fiches du kit ou des décisions déjà prises (`docs/a-valider.md`). La Scierie Savoldelli est nommée une fois par page.

## 3. Jetons

Tous dans `src/styles/tokens.css` (site) et `src/app/(payload)/admin-ui.css` (administration), mêmes noms, valeurs jour et nuit.

| Jeton | Jour | Nuit | Usage |
|---|---|---|---|
| `--c-cream` | #f8f4ee | #0e1a10 | fond des pages |
| `--c-paper` | #ffffff | #122015 | sections blanches, entre deux sections crème |
| `--c-card` | #ffffff | #16271a | cartes |
| `--c-ink` | #102311 | #eef1e8 | titres |
| `--c-ink-2` | #33443a | #d6ddd1 | texte courant (9,8:1 sur crème) |
| `--c-stone-text` | #5f6a60 | #a8b0a2 | texte secondaire (5,2:1 sur crème) |
| `--c-forest` | #2c4f2d | #a3d2a3 | boutons, panneaux d’appel |
| `--c-accent` | #336233 | #a3d2a3 | mots en vert dans les titres |
| `--c-sage` | #a3d2a3 | #a3d2a3 | accents sur fond sombre |
| `--c-sage-soft` | #e3f0e0 | #24402a | pastilles, carrés d’icône, filtre actif |
| `--c-sage-tint` | #f0f6ee | #16291a | « En bref », encadrés, points forts |
| `--c-night` | #0f1f10 | #08110a | pied de page, bande manifeste |
| `--c-error` | #a12c1d | #f2a093 | erreurs |

Rayons : 6, 10, 12 (boutons, champs, carrés d’icône), 16, 24, 32 px et pilule. Conteneur 1 200 px, en-tête 76 px, marge de section `clamp(4rem, 7.5vw, 7rem)`. Mouvement : `cubic-bezier(0.22, 1, 0.36, 1)`, 180 ms pour les couleurs, 320 ms pour les déplacements ; tout s’arrête avec `prefers-reduced-motion`.

## 4. Typographie

- **Nohemi** (700) pour les grands titres : H1 `clamp(2.125rem, 1.4rem + 3vw, 3.75rem)`, H2 `clamp(1.875rem, 1.3rem + 2.1vw, 2.875rem)`.
- **Inter** pour le texte et les titres de cartes et d’étapes (H3 19 px, graisse 650).
- **Surtitre en pastille** sauge, avec une petite marque carrée tournée (la marque du charpentier sur une pièce de bois). Plus de numérotation automatique.
- Français soigné à l’import : apostrophes courbes, espaces insécables avant « : ; ? ! » et dans les guillemets.

> **Licences** : Nohemi (Rajesh Rajput) est un *freeware* utilisable pour des projets commerciaux d’après l’EULA fournie avec la police (`src/fonts/Nohemi-EULA.pdf`), à condition de ne pas modifier les fichiers : ils sont servis tels quels. Inter est sous licence libre SIL OFL 1.1 ; seul son fichier « latin » est servi (`src/fonts/LICENCE.md`).

## 5. Composants

- **Haut de page** : titre, chapô court, deux boutons, trois preuves avec icône (« Depuis 2007 », « Qualifié RGE »…), photo à droite (ou mosaïque, ou carte du secteur), et une **fiche technique** en barre sous la photo (isolants, parois, bois…).
- **En bref** : encadré sauge pâle avec une icône, 50 mots.
- **Sections en deux colonnes** : titre et photo collés à gauche pendant le défilement, contenu à droite (listes, étapes, FAQ).
- **Cartes à icône** entièrement cliquables, cartes photo, cartes « lettre » (Bio, Bâti, Bois), rangées de liens.
- **Étapes** : frise de cartes, ou liste numérotée verticale avec vignettes et la photo de la première étape.
- **Encadrés** (« Bon à savoir », « Sur nos chantiers », « Définition », « Aides et qualification »), **chiffres clés**, **points forts / points d’attention**, **liste de définitions**, **pastilles de liens** (« Voir aussi » sur une ligne).
- **Bande manifeste** nuit, une par page au plus : citation, rangées de points, phrase forte ; seule la forêt de mélèzes peut remplir le fond.
- **Panneau forêt arrondi** pour l’appel à l’action final et pour 3B Récup’, avec la carte téléphone et horaires.
- **Barre d’appel** collée en bas de l’écran sur téléphone et tablette : « Appeler » et « Demander mon devis ».
- **Boutons** au rayon de 12 px, flèche qui glisse au survol ; une seule action principale par écran.
- **Photos** encadrées, 800 px au plus, jamais étirées en plein écran ; étiquette de commune posée sur la photo.

## 6. Accessibilité

- Contrastes AA vérifiés : texte courant 9,8:1 et secondaire 5,2:1 sur crème, blanc sur forêt 9,3:1, surtitre clair sur forêt 5,3:1, vert d’accent sur blanc 7,2:1. Lighthouse : 100 en accessibilité sur les pages mesurées.
- Un seul H1 par page, vrais liens et boutons, champs étiquetés, texte alternatif sur chaque photo de contenu (obligatoire dans l’administration), cibles de 44 px, focus visible (anneau vert de 2 px).
- Lien d’évitement « Aller au contenu », navigation au clavier du menu des prestations et des filtres.

## 7. Redirections : 301 et 308

Les anciennes adresses du site (32 redirections importées) et celles créées quand on change l’adresse d’une page répondent par une redirection **permanente**. Next.js l’envoie avec le code **308** (permanente, méthode conservée), que Google traite exactement comme un 301 : l’ancienne adresse transmet son référencement à la nouvelle. La mise en forme des adresses (majuscules, barre finale) répond, elle, par un **301**.

## 8. Administration

Même langage visuel, adapté à un utilisateur peu à l’aise avec l’informatique : barre latérale de 288 px (cinq entrées, le reste replié), pilule forêt pour l’action principale, badges en mots (« Nouvelle », « Publié », « Brouillon »), champs de 44 px, aide sous chaque champ, message de confirmation sombre « Enregistré. Le site est à jour. », thème nuit. L’éditeur de texte est Tiptap.

**Les champs sont les composants shadcn/ui d’origine, seulement habillés.** `src/payload/admin/ui/` contient les fichiers shadcn/ui (style new-york, Radix, Tailwind v4 avec le préfixe `tw:` pour ne pas toucher aux écrans de Payload) : Input, Textarea, Label, Field, Input Group, Select, Checkbox, Radio Group, Switch, Calendar, Command, Popover, Dialog, Aspect Ratio, Dropdown Menu, Tabs, Tooltip, Button, Card, Badge… Même structure, mêmes noms et mêmes props que `npx shadcn add` ; seules les classes changent (jetons 3B Charpente). Les assemblages suivent les exemples de shadcn : cartes de choix = `FieldLabel` + `Field` + `Checkbox` ou `RadioGroupItem`, liste des communes = Combobox (`Popover` + `Command`), dates = Date Picker (`Popover` + `Button` + `Calendar`, `components/DatePicker.tsx`), recherche avec loupe = `InputGroup`. `components.json` est à la racine : un nouveau composant s’ajoute avec la commande shadcn habituelle.

`src/payload/admin/fields/` ne contient pas de champs refaits : ce sont de petits adaptateurs qui branchent ces composants shadcn sur les champs de Payload (valeur, validation, message d’erreur), parce que Payload affiche sinon ses propres champs. Les champs propres à Payload qu’on ne remplace pas (relations, sections) gardent leur fonctionnement et reçoivent seulement le même habillage (`src/app/(payload)/custom.scss`).

**Dates.** Les dates à choisir au jour près (avis, date de publication, fermetures) utilisent le Date Picker : calendrier en français, semaine commençant le lundi, listes du mois et de l’année, « Aujourd’hui » et « Effacer ». La date est enregistrée à 12 h UTC, comme le fait Payload, pour tomber le même jour quel que soit le fuseau. Une date avec heure ou fuseau garderait le sélecteur de Payload.

**Photos.** Le champ photo (`fields/UploadField.tsx`) montre la photo choisie en 4/3 (Aspect Ratio), avec « Voir en grand », « Changer », « Description » et « Retirer » ; un clic ouvre la visionneuse (`components/PhotoLightbox.tsx`, un Dialog shadcn avec photo précédente / suivante et les flèches du clavier). « Changer » et « Choisir dans les photos » ouvrent le tiroir de Payload, qui affiche l’écran **Photos** : dans ce tiroir, cet écran devient un sélecteur (un clic choisit la photo) et respecte le filtre du champ (`components/PhotoPickerContext.tsx`, par exemple seulement les photos « Ambiance » pour un fond). Les lignes de galerie repliées montrent leur vignette (`components/PhotoRowLabel.tsx`) et la fiche d’une photo l’affiche en 420 px au lieu de la vignette carrée de Payload.
