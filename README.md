# Portfolio GitHub

Site vitrine statique pour presenter des projets publics GitHub aux recruteurs.

## Tester en local

```sh
python3 -m http.server 4173
```

Puis ouvrir `http://localhost:4173`.

## Configurer

Les informations principales sont dans `app.js`, dans l'objet `CONFIG` :

- `githubUsername` : ton identifiant GitHub public.
- `displayName` : le nom affiche dans la vitrine.
- `contactEmail` : l'adresse du bouton de contact.
- `featuredRepoNames` : les noms des repos GitHub a mettre en avant.
- `demoRepoKeywords` : les mots-cles qui associent une demo a un repo GitHub.

## OCR

La demo OCR actuelle fonctionne cote navigateur avec Tesseract.js, charge depuis un CDN au moment de l'analyse.

Ton projet OCR local est en C. Pour utiliser exactement ce moteur dans la vitrine, il faut ensuite choisir une de ces approches :

- exposer l'executable via une API backend qui recoit l'image et renvoie le texte ;
- compiler le coeur OCR en WebAssembly pour rester 100% navigateur ;
- garder Tesseract.js comme demo recruteur, puis lier vers le depot C pour le code source reel.
