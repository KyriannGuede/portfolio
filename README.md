# Portfolio — Kyriann Guede

Portfolio statique en HTML, CSS et JavaScript, sans framework ni outil de build.

## Contenu

- index éditorial de onze projets académiques, dont un projet OCR en C ;
- fiches détaillées orientées compétences et recrutement ;
- parcours de cinq piscines intensives en C, SQL, Java, C++ et JavaScript ;
- recherche et filtres par domaine ;
- carte interactive des compétences ;
- laboratoire OCR interactif dans le navigateur et présentation de l'intérêt pour le machine learning ;
- synchronisation des dépôts publics via l'API GitHub ;
- thèmes clair et sombre, raccourcis clavier et mise en page responsive ;
- CV public consultable depuis la navigation et la section contact.

## Confidentialité

Les documents académiques utilisés comme sources restent strictement locaux. Ils ne sont pas inclus
dans ce dépôt. Le site ne publie ni énoncés, ni code privé, ni jeux de tests, ni détails permettant de
reconstituer les sujets. Seuls des résumés généraux, technologies et apprentissages transférables sont
présentés.

La démonstration publique s'appuie sur Tesseract.js et traite l'image sélectionnée dans le navigateur.
Elle illustre l'usage de l'OCR sans exposer le code du projet académique, qui reposait sur une chaîne
personnalisée en C : prétraitement d'image, segmentation et réseau de neurones.

## Lancer en local

Depuis ce dossier :

```sh
python -m http.server 4173
```

Puis ouvrir `http://localhost:4173`.

## Configuration

Les informations publiques et les fiches de projets se trouvent dans `app.js`. Le design se trouve dans
`styles.css`. Aucun secret ni variable d'environnement n'est nécessaire.
