# Formation Angular

## 📌 Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **Node.js** (Version recommandée : 18.x ou plus) : [Télécharger ici](https://nodejs.org/)
- **Angular CLI** (Interface en ligne de commande d'Angular)
  ```sh
  npm install -g @angular/cli
  ```
- **Un éditeur de code** :
  - [VS Code recommandé](https://code.visualstudio.com/)
  - [WebStorm](https://www.jetbrains.com/webstorm/) - disponible gratuitement pour une utilisation non commerciale

## 🏗️ Création d'un projet Angular

👉 [Documentation ](https://angular.dev/cli/new)

Si vous souhaitez créer un nouveau projet Angular, utilisez la commande :

```sh
ng new NomProjet --routing --style=scss --skip-tests
```

Explication des options :

- `--routing` : Ajoute le support du routing.
- `--style=scss` : Configure l'utilisation de SCSS pour le style (disponible : css, scss, less, sass).
- `--skip-tests` : Ne génère pas les fichiers de tests.

## 🎨 Création d'un composant&#x20;

👉 [Documentation ](https://angular.dev/cli/generate)

Génération d'un composant :

```sh
ng generate component chemin/nomComposant [options]
```

Ou en version courte :

```sh
ng g c chemin/nomComposant [options]
```

## 📌 Lancement du projet

👉 [Documentation](https://angular.dev/cli/serve)

Démarrez le serveur de développement en exécutant :

```sh
ng serve --open --port 4200 
```

Cette commande ouvre automatiquement le projet dans le navigateur sur `http://localhost:4200/`.

Explication des options :

- `--port 4200` : Définit le port sur lequel l'application sera servie (modifiable selon besoin).
- `--open` : Ouvre automatiquement l'application dans le navigateur après le démarrage du serveur.

## 📚 Structure du projet

```
TF_202502_BootcampNET__Angular/
│-- src/
│   ├── app/               # Code principal de l'application
│   ├── assets/            # Fichiers statiques (images, styles, etc.)
│   ├── environments/      # Fichiers de configuration des environnements
│   ├── index.html         # Fichier HTML principal
│   ├── main.ts            # Point d'entrée de l'application
│-- angular.json           # Configuration Angular
│-- package.json           # Gestionnaire de dépendances
│-- tsconfig.json          # Configuration TypeScript
```

## 🔥 Concepts Angular

### One-Way Binding (avec interpolation)

L'interpolation permet d'afficher dynamiquement des données dans le template HTML en utilisant `{{ }}`.

```html
<p>Bonjour, {{ nom }}</p>
```

### Two-Way Binding (avec ngModel)

Le Two-Way Binding permet de synchroniser les données entre le modèle et la vue.

```html
<input [(ngModel)]="nom" placeholder="Entrez votre nom">
<p>Bonjour, {{ nom }}</p>
```

Assurez-vous d'importer `FormsModule` dans votre module Angular.

### Attribute Binding

L'Attribute Binding permet de lier dynamiquement des attributs HTML à des valeurs TypeScript.

```html
<button [disabled]="isDisabled">Cliquez-moi</button>
```

### Event Binding

L'Event Binding permet d'exécuter des fonctions lorsqu'un événement est déclenché.

```html
<button (click)="onClick()">Cliquez-moi</button>
```

Dans le fichier TypeScript :

```typescript
onClick() {
  console.log("Bouton cliqué !");
}
```

## 🛠️ Bonnes pratiques

- **Utilisez des modules** : Favorisez l'organisation du code en modules pour faciliter la maintenance.
- **Suivez le style guide Angular** : [Consulter ici](https://angular.io/guide/styleguide)

## 📜 Ressources utiles

- [Documentation officielle Angular](https://angular.dev/)
- [Angular CLI](https://angular.dev/cli)

