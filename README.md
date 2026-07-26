# Aravis Deux Versants

Site statique, responsive et sans dépendance externe.

## Mise en ligne rapide

1. Décompressez le dossier.
2. Remplacez les valeurs de démonstration :
   - `exemple.fr`
   - `bonjour@votre-domaine.fr`
   - les éléments entre crochets dans `mentions-legales.html` et `confidentialite.html`
   - le lien de réservation dans `parapente.html`
3. Téléversez tout le contenu du dossier à la racine de votre hébergement.
4. Activez HTTPS chez l’hébergeur.
5. Testez les pages sur mobile et ordinateur.

Le site fonctionne sur un hébergement statique : o2switch, OVH, Infomaniak, Netlify, Cloudflare Pages, GitHub Pages, etc.

## Modifier les restaurants

Ouvrez `assets/js/data.js`. Chaque adresse comporte :

- `name` : nom affiché ;
- `place` : localisation affichée ;
- `zone` : `giettaz`, `col` ou `clusaz` ;
- `tags` : filtres ;
- `summary` : votre avis personnel ;
- `note` : information prudente ;
- `maps` : lien d’itinéraire ;
- `official` : site ou fiche de référence.

## Remplacer les illustrations

Les fichiers sont dans `assets/img/`.

Vous pouvez remplacer une illustration SVG par une photo JPG ou WebP. Modifiez ensuite le chemin dans la page HTML concernée. Utilisez vos propres photos ou des images pour lesquelles vous avez une autorisation.

## Formulaire de contact

La version livrée ouvre l’application de messagerie du visiteur. Elle n’utilise pas de serveur.

Dans `contact.html`, remplacez deux fois :

`bonjour@votre-domaine.fr`

Pour un vrai formulaire en ligne, raccordez un service ou un script conforme à votre hébergeur et mettez la politique de confidentialité à jour.

## Référencement

- Chaque page a un titre et une description.
- Remplacez tous les liens canoniques `https://www.exemple.fr/`.
- Modifiez aussi `robots.txt` et `sitemap.xml`.
- Ne créez pas de fiche Google Business uniquement pour ce média s’il n’accueille pas réellement de clients.
- Utilisez le nom réel et public de votre structure.

## Transparence

Le pied de page indique que le site est indépendant.
La page Aravis Parapente précise que cette activité appartient à l’éditeur.
Toute mise en avant rémunérée doit être signalée clairement.

## Vérifications avant publication

- Identité de l’éditeur et mentions légales.
- Objet social ou activité déclarée.
- Assurance couvrant le site et les activités proposées.
- Droits sur les textes, logos et photos.
- Exactitude des liens et noms d’établissements.
- Adhésion à un médiateur de la consommation si nécessaire.
