# Serveur de Fichiers Statiques Alien Resources

Ce projet est un serveur Node.js utilisant Express pour servir les fichiers statiques de votre collection d'images alien.

## Installation

1. Installer les dépendances :
```bash
npm install
```

## Utilisation

### Démarrage en mode production
```bash
npm start
```

### Démarrage en mode développement (avec auto-rechargement)
```bash
npm run dev
```

Le serveur sera accessible sur `http://localhost:3000`

## Fonctionnalités

- **Serveur de fichiers statiques** : Tous vos fichiers (images, HTML, etc.) sont accessibles directement
- **Page d'accueil** : Accessible via `http://localhost:3000/`
- **API REST** :
  - `GET /api/images` - Liste toutes les images disponibles
  - `GET /api/status` - Informations sur le statut du serveur
- **Support CORS** : Permet l'accès depuis d'autres domaines
- **Types MIME configurés** : Gestion correcte des images JPG et GIF

## Structure des fichiers

```
f:\statics\alienressoruces\
├── server.js          # Serveur principal
├── package.json       # Configuration du projet
├── index.html         # Page d'accueil
├── *.jpg             # Images (0.jpg à 33.jpg)
└── 9x8j2a.gif        # Image animée
```

## Accès aux ressources

- Page principale : `http://localhost:3000/`
- Images individuelles : `http://localhost:3000/[nom-image].jpg`
- Exemple : `http://localhost:3000/0.jpg`
- Image GIF : `http://localhost:3000/9x8j2a.gif`

## Configuration

Le port peut être modifié via la variable d'environnement `PORT` :
```bash
PORT=8080 npm start
```
