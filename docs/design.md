# Design « Atelier alpin »

Le site reprend l’univers de la maquette Framer (crème, vert forêt, sauge, titres Nohemi) et le pousse vers un ton plus éditorial : celui d’un carnet d’atelier de charpentier, avec des courbes de niveau pour la montagne et des cernes du bois pour 3B Récup’. Chaque page a été dessinée dans Claude Design avant d’être codée.

La planche de tous les composants, avec le contenu réel, est en ligne sur **`/styleguide/`** (non indexée).

## 1. Les canevas Claude Design

Chaque page a son canevas (ordinateur 1 440 px et téléphone 390 px), et l’administration a le sien. Ils sont privés sur claude.ai tant qu’ils ne sont pas partagés.

| Écran | Canevas |
|---|---|
| Système de design « 3B Charpente » (jetons, composants, photos) | https://claude.ai/artifact/BMg4Sy2KQJ3VP8T6inD8GF |
| Accueil | https://claude.ai/artifact/VgCVjs7YAAMqWh5x1n4V3a |
| Prestation | https://claude.ai/artifact/CkVuTQR3fr5W1G4cWFJeQr |
| Secteur | https://claude.ai/artifact/XUrFsyvJXnHPXYX9WGeEPW |
| 3B Récup’ | https://claude.ai/artifact/TXxCj2SWmXDZp4iax4dQHc |
| À propos | https://claude.ai/artifact/9df5aZ6pzdUTgTjsV5YuyV |
| Réalisations | https://claude.ai/artifact/Jjmxtj9pfYNXHdmxe6XyGv |
| Fiche chantier | https://claude.ai/artifact/ALnHoFozPLxLKaNmbWC8Cj |
| Conseils | https://claude.ai/artifact/21fPHwbZX9VwsR6vjeUtFv |
| Guide (article) | https://claude.ai/artifact/SWvVEYBKHd3tahgpy7Fnkt |
| Contact | https://claude.ai/artifact/Lv1H5yb2VCMNYAQgsVcKD5 |
| Mentions légales | https://claude.ai/artifact/LNoY63Bnc1S7Tt8nSFyR9X |
| Page introuvable (404) | https://claude.ai/artifact/YTnRgjocRqMrsFiR9Eq4wm |
| Administration (12 écrans) | https://claude.ai/artifact/CZgb9R7iGGFS32pZvb2LS8 |

## 2. Jetons

Tous dans `src/styles/tokens.css` (site) et `src/app/(payload)/admin-ui.css` (administration), mêmes noms, valeurs jour et nuit.

| Jeton | Jour | Nuit | Usage |
|---|---|---|---|
| `--c-cream` | #f8f4ee | #0e1a10 | fond des pages |
| `--c-surface` | #f2f2ec | #122015 | sections claires |
| `--c-card` | #ffffff | #16271a | cartes |
| `--c-ink` | #102311 | #eef1e8 | texte |
| `--c-stone-text` | #6b645f | #a8b0a2 | texte secondaire |
| `--c-forest` | #2c4f2d | #a3d2a3 | boutons, bandeaux |
| `--c-accent` | #336233 | #a3d2a3 | mots en vert |
| `--c-sage` | #a3d2a3 | #a3d2a3 | pastilles, disques |
| `--c-sage-soft` | #dcecd9 | #24402a | teinte sauge |
| `--c-night` | #0f1f10 | #08110a | pied de page, panneaux sombres |
| `--c-error` | #a12c1d | #f2a093 | erreurs |

Rayons : 6, 8, 14, 22, 32 px et pilule. Espacements par pas de 4 px. Mouvement : `cubic-bezier(0.22, 1, 0.36, 1)`, 180 ms pour les couleurs, 320 ms pour les déplacements ; tout s’arrête avec `prefers-reduced-motion`.

## 3. Typographie

- **Nohemi** (700 et 600) pour les titres : affichage `clamp(2rem, 1.2rem + 3.6vw, 4rem)`, H1 jusqu’à 60 px, H2 jusqu’à 48 px, interlettrage −0,022 em.
- **Inter** pour le texte : 17 px, chapeau 20 px, secondaire 15 px.
- Surtitres en capitales espacées (0,14 em), **numérotés automatiquement** dans chaque page (compteur CSS).
- Français soigné à l’import : apostrophes courbes, espaces insécables avant « : ; ? ! » et dans les guillemets.

> **Licences** : Nohemi (Rajesh Rajput) est un *freeware* utilisable pour des projets commerciaux d’après l’EULA fournie avec la police (`src/fonts/Nohemi-EULA.pdf`), à condition de ne pas modifier les fichiers : ils sont servis tels quels. Inter est sous licence libre SIL OFL 1.1 ; seul son fichier « latin » est servi (`src/fonts/LICENCE.md`).

## 4. Composants signature

- **Bouton-pilule à disque sauge** : flèche qui tourne de −45° au survol ; une seule action principale par écran.
- **Surtitre numéroté** « 01 | Le projet », filet vertical.
- **Photos en passe-partout** : cadre blanc, rayon 32 px, étiquette commune posée sur la photo. Les photos de chantier ne sont jamais étirées en plein écran ; seule la forêt de mélèzes (photo d’ambiance) peut l’être.
- **Courbes de niveau** (`public/motifs/courbes-de-niveau.svg`) et **cernes du bois** (`cernes-du-bois.svg`), en masques CSS teintés.
- **Index éditorial** des prestations, **frise** des étapes, **bento** des chantiers, **fiche d’atelier** dans le haut de page des prestations, **carte du secteur** dans le haut de page des secteurs, **carnet de chantier** (fiche technique) sur chaque réalisation.
- **Panneau forêt** d’appel à l’action avec la carte téléphone et horaires, **pied de page nuit**.

## 5. Accessibilité

- Contrastes AA vérifiés : texte secondaire 5,3:1 sur crème, blanc sur forêt 9,3:1, `#102311` sur sauge 9,7:1, vert d’accent sur blanc 7,2:1.
- Un seul H1 par page, vrais liens et boutons, champs étiquetés, texte alternatif sur chaque photo de contenu (obligatoire dans l’administration), cibles de 44 px, focus visible (anneau vert de 2 px).
- Lien d’évitement « Aller au contenu », navigation au clavier du menu des prestations et des filtres.

## 6. Redirections : 301 et 308

Les anciennes adresses du site (32 redirections importées) et celles créées quand on change l’adresse d’une page répondent par une redirection **permanente**. Next.js l’envoie avec le code **308** (permanente, méthode conservée), que Google traite exactement comme un 301 : l’ancienne adresse transmet son référencement à la nouvelle. La mise en forme des adresses (majuscules, barre finale) répond, elle, par un **301**.

## 7. Administration

Même langage visuel, adapté à un utilisateur peu à l’aise avec l’informatique : barre latérale de 288 px (cinq entrées, le reste replié), pilule forêt pour l’action principale, badges en mots (« Nouvelle », « Publié », « Brouillon »), champs de 44 px, aide sous chaque champ, message de confirmation sombre « Enregistré. Le site est à jour. », thème nuit, tout en composants shadcn/ui personnalisés (Radix + Tailwind isolé par le préfixe `tw:`).
