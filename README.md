# Automatisation-email

Ce dépôt contient une application React/TypeScript permettant d'automatiser l'envoi d'e-mails de prospection. Les modèles sont définis à l'avance et peuvent être personnalisés avant l'envoi.

## Installation et commandes

Exécutez les commandes suivantes dans le dossier `project` :

```bash
npm install       # installation des dépendances
npm run dev       # démarre le serveur de développement
npm run build     # génère la version de production
npm run lint      # vérifie le code avec ESLint
```

## Configuration

Un fichier `.env.example` est fourni à la racine du dépôt. Copiez-le dans le
dossier `project` sous le nom `.env` :

```bash
cp .env.example project/.env
```

Renseignez ensuite les variables suivantes :

- `VITE_SENDGRID_API_KEY` : votre clé d'API SendGrid (obligatoire pour envoyer
  des e-mails).
- `VITE_SENDGRID_FROM_EMAIL` : adresse d'expéditeur utilisée par défaut
  (optionnelle).

## Structure des dossiers

- `src/components` : composants React utilisés par l'application (en-tête, formulaire, aperçu, etc.).
- `src/data` : données statiques et modèles d'e-mails.
- `src/types` : définitions TypeScript partagées.
- `src` : fichiers principaux de l'application (`App.tsx`, `main.tsx`, `index.css`, …).
- Des fichiers de configuration tels que `vite.config.ts` ou `tailwind.config.js` se trouvent à la racine du dossier `project`.
