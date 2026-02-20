# README - TP01 - Gestionnaire de produits

> **Cours :** 420-W40-SF - Développement d’applications Web (Cégep de Sainte-Foy)  
> **Travail :** TP01 - Gestionnaire de produits  
> **Étudiant(e) :** Olivier Boisvert
> **Repo GitHub :** https://github.com/OlivierBoisvert/appweb-trpr01
> **Déploiement (GitHub Pages) :** {{ URL du site }}

---

**IMPORTANT**: renommer README.md

## 1) Description du projet

Décrire en 5–10 lignes l’application réalisée :

- Contexte :

Application de gestion d'équipement E.G.O pour le gérant d'une entreprise offrant la possibilité avec une interface simple de s'occuper de l'inventaire de l'équipement.

- Objectif principal :

Permettre la bonne gestion des équipements à l'aide de l'intégration de plusieurs fonctions d'inventaire pour fournir au gérant tous les outils nécessaire au bon maintient de l'entreprise.

- Public cible / usage typique :

Gérants d'entreprises ayant a équiper ces employés avec des équipement E.G.O pour l'élimination d'anomalies ayant échapper de leur zone de confinement.

**Produit choisi :** Équipement E.G.O extrait à partir d'anomalies. Chaque équipement possède un numéro d'identification, un nom, une description, un cout d'extraction, une quantité en inventaire et une catégorie pour son niveau de puissance (Zayin, Teth, Heh, Waw, Aleph)

---

## 2) Fonctionnalités (récits utilisateurs)

- [ ] Faire la liste des équipements.
- [ ] Afficher les informations des équipements.
- [ ] Ajouter les catégories de classements
- [ ] Afficher la quantité en inventaire des équipements.
- [ ] Avoir un avertissement quand l'inventaire d'un équipement devient critique.
- [ ] Rechercher un équipement par son nom.
- [ ] Ajouter un nouveau équipement.
- [ ] Duppliquer un équipement existant pour des ajouts rapides.
- [ ] Modifier un équipement existant.
- [ ] Supprimer un équipement.
- [ ] Exporter la liste des équipements en format CSV.

> Ajouter ici toute fonctionnalité optionnelle (ex. catégorie, actif, date de création, etc.).

---

## 3) Technologies utilisées

- {{ Technologie 1 }}
- {{ Technologie 2 }}
- {{ Etc. }}

---

## 4) Installation et démarrage

### Prérequis

- Node.js LTS

### Installation

```bash
{{ À compléter }}
```

### Démarrage en dev

```bash
{{ À compléter }}
```

### Build

```bash
{{ À compléter }}
```

---

## 5) Déploiement (GitHub Pages)

- **Nom du repo / dossier GitHub Pages :** `appweb-trpr01`
- **URL attendue :** {{ `https://<user>.github.io/appweb-trpr01/` }}

### Notes de configuration

- base URL (`base`) de Vite ajustée pour GitHub Pages
- commandes utilisées pour déployer (si script)

---

## 6) Architecture et organisation du code

Décrire la structure du projet et les responsabilités.

### Structure des dossiers

- `src/components/` : composants UI (responsabilité unique)
- `src/models/` : types/interfaces TypeScript (ex. `Product`)
- `src/services/` : logique utilitaire (ex. export CSV)
- `src/assets/` : images (incluant le logo)

> Adapter à votre projet réel. L’objectif est d’expliquer **où** se trouve la logique et **pourquoi**.

### Composants clés

- `NomComposant` : description de ce qu'il fait / reponsabilité

---

## 7) Utilisation de l’IA (OBLIGATOIRE)

> **IMPORTANT :** Toute omission d’utilisation d’IA (même pour UI/CSS) peut entraîner **0** et une mention de plagiat.

### Outil(s) utilisé(s)

- _Nom des outils (ex. ChatGPT, Copilot, etc.)_

### Comment l’IA a été utilisée

Décrire concrètement :

- brainstorming / planification
- aide au debug
- clarification TypeScript/Vue
- suggestions UI/CSS
- génération d’exemples (puis adaptation)

### À quel endroit

#### Nom du fichier 1

- Ligne ## à ##: Décrire pourquoi
- Ligne ## à ##: Décrire pourquoi

#### Nom du fichier 2

- Ligne ## à ##: Décrire pourquoi
- Ligne ## à ##: Décrire pourquoi

### Exemples de prompts (2 à 5)

1. “…”
2. “…”
