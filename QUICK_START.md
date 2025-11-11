# 🚀 Guide de Démarrage Rapide

## Installation et Lancement

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

### 3. Ouvrir dans le navigateur
```
http://localhost:3000
```

## 📁 Structure du Projet

```
sboui-prtfolio/
├── app/                    # App Router Next.js
│   ├── layout.tsx          # Layout principal avec métadonnées
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/             # Composants React
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx        # ⭐ Avec intégration GitHub
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── github.ts           # Fonctions API GitHub
└── hooks/
    └── useScrollAnimation.ts
```

## ✨ Fonctionnalités Principales

- ✅ **Intégration GitHub** : Récupération automatique des projets
- ✅ **Animations fluides** : Scroll animations, compteurs, barres de progression
- ✅ **Responsive Design** : Mobile, tablette, desktop
- ✅ **SEO Optimisé** : Métadonnées et Open Graph
- ✅ **TypeScript** : Typage fort pour une meilleure maintenabilité

## 🔧 Personnalisation GitHub

Pour changer le nom d'utilisateur GitHub, modifiez dans `components/Projects.tsx` :

```typescript
const repos = await fetchGitHubRepos('sbouiii') // Votre username
```

## 📦 Scripts Disponibles

- `npm run dev` - Développement (port 3000)
- `npm run build` - Build de production
- `npm start` - Serveur de production
- `npm run lint` - Vérification du code

## 🌐 Déploiement

### Vercel (Recommandé)
1. Poussez sur GitHub
2. Importez sur [vercel.com](https://vercel.com)
3. Déploiement automatique !

### Autres
```bash
npm run build
npm start
```

---

**Prêt à l'emploi ! 🎉**

