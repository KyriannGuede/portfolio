# Portfolio — Kyriann Guede

Portfolio statique en HTML, CSS et JavaScript, sans framework ni outil de build.

## Contenu

- index éditorial de neuf projets académiques ;
- fiches détaillées orientées compétences et recrutement ;
- recherche et filtres par domaine ;
- carte interactive des compétences ;
- synchronisation des dépôts publics via l'API GitHub ;
- thèmes clair et sombre, raccourcis clavier et mise en page responsive.

## Confidentialité

Les documents académiques utilisés comme sources restent strictement locaux. Ils ne sont pas inclus
dans ce dépôt. Le site ne publie ni énoncés, ni code privé, ni jeux de tests, ni détails permettant de
reconstituer les sujets. Seuls des résumés généraux, technologies et apprentissages transférables sont
présentés.

## Lancer en local

Depuis ce dossier :

```sh
python -m http.server 4173
```

Puis ouvrir `http://localhost:4173`.

## Configuration

Les informations publiques et les fiches de projets se trouvent dans `app.js`. Le design se trouve dans
`styles.css`. Aucun secret ni variable d'environnement n'est nécessaire.
