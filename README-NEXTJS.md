# Portfolio Next.js - SBOUI AZIZ

Portfolio professionnel converti en Next.js avec intégration GitHub pour afficher dynamiquement les projets.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **GitHub API** pour les projets

## 📦 Installation

1. **Installer les dépendances** :
```bash
npm install
```

2. **Lancer le serveur de développement** :
```bash
npm run dev
```

3. **Ouvrir dans le navigateur** :
```
http://localhost:3000
```

## 🏗️ Structure du Projet

```
sboui-prtfolio/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx             # Page d'accueil
│   └── globals.css          # Styles globaux
├── components/
│   ├── Navigation.tsx       # Navigation
│   ├── Hero.tsx             # Section Hero
│   ├── About.tsx            # Section À propos
│   ├── Skills.tsx           # Section Compétences
│   ├── Projects.tsx         # Section Projets (avec GitHub)
│   ├── Experience.tsx      # Section Expérience
│   ├── Contact.tsx          # Section Contact
│   └── Footer.tsx           # Footer
├── lib/
│   └── github.ts            # Fonctions pour GitHub API
└── hooks/
    └── useScrollAnimation.ts # Hook pour animations
```

## 🔧 Fonctionnalités

### Intégration GitHub
- Récupération automatique des repositories publics
- Affichage des langages utilisés
- Liens vers GitHub et site web (si disponible)
- Affichage des statistiques (stars, forks)

### Animations
- Animations au scroll avec Intersection Observer
- Compteurs animés pour les statistiques
- Barres de progression pour les compétences
- Effets de parallaxe

### Responsive Design
- Design adaptatif pour mobile, tablette et desktop
- Menu hamburger pour mobile

## 📝 Configuration GitHub

Le composant `Projects` récupère automatiquement les projets depuis GitHub. Pour changer le nom d'utilisateur, modifiez dans `components/Projects.tsx` :

```typescript
const repos = await fetchGitHubRepos('sbouiii') // Changez 'sbouiii' par votre username
```

## 🚀 Déploiement

### Vercel (Recommandé)
1. Poussez votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Vercel détectera automatiquement Next.js et déploiera

### Autres plateformes
```bash
npm run build
npm start
```

## 📄 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm start` - Lance le serveur de production
- `npm run lint` - Lance ESLint

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `app/globals.css` :

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #06b6d4;
  /* ... */
}
```

### Contenu
- **Informations personnelles** : Modifiez dans les composants
- **Compétences** : Modifiez dans `components/Skills.tsx`
- **Expérience** : Modifiez dans `components/Experience.tsx`
- **Contact** : Modifiez dans `components/Contact.tsx`

## 🔒 Variables d'Environnement (Optionnel)

Si vous voulez utiliser un token GitHub pour plus de requêtes :

```env
GITHUB_TOKEN=your_token_here
```

## 📞 Support

Pour toute question ou personnalisation :
- **Email** : Sboui.aziz.17@gmail.com
- **GitHub** : [sbouiii](https://github.com/sbouiii)

---

**Développé avec ❤️ et Next.js**

