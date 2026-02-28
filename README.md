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

**Produit choisi :** Équipement E.G.O extrait à partir d'anomalies. Chaque équipement possède un numéro d'identification, un nom, une description, un cout d'extraction, une quantité en inventaire et une catégorie pour son niveau de puissance (Zayin, Teth, Heh, Waw, Aleph).

---

## 2) Fonctionnalités (récits utilisateurs)

- [ ] Afficher la liste des équipements.
- [ ] Afficher les informations des équipements.
- [ ] Afficher la quantité en inventaire des équipements.
- [ ] Avoir un avertissement quand l'inventaire d'un équipement devient critique.
- [ ] Rechercher un équipement par son nom.
- [ ] Ajouter un nouveau équipement.
- [ ] Duppliquer un équipement existant pour des ajouts rapides.
- [ ] Modifier un équipement existant.
- [ ] Supprimer un équipement.
- [ ] Exporter la liste des équipements en format CSV.

> Ajouter ici toute fonctionnalité optionnelle (ex. catégorie, actif, date de création, etc.).

- [x] Ajouter les catégories de classements.

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

- ChatGPT

### Comment l’IA a été utilisée

Décrire concrètement :

- Assistance avec les standards de placement des fichiers (GearData)
- Assistance avec le style CSS et Bootstrap de l'application
- Assistance avec la création de code HTML (Form)

### À quel endroit

#### gearData.ts

- Ligne 30: Trouver une méthode propre pour charger une liste de donnée pré-fabriquée

#### type.ts

- Ligne 22 à 32: Exporter une fonction et list statique

#### GearList.vue

- Ligne 7, 15, 66: Importer une fonction statique
- Ligne 11: Utiliser la liste de donnée pré-fabriquée
- Ligne 76 à 92: Style Bootstrap

#### GearItem.vue

- Ligne 16 à 40: Style Bootstrap
- Ligne 11 à 13: Faire fonctionner l'url des images

#### GearInfo.vue

- Ligne 16: Faire fonctionner le \n avec HTML

#### GearForm.vue

- Ligne 16 à 114: Création du formulaire et style Bootstrap

#### WarningList.vue

- Ligne 3: Importation d'une liste statique

#### style.css

- Ligne 1 à 21: Style CSS

### Exemples de prompts (2 à 5)

1. “Where would a data file for premade data be placed inside of a Vues + TS project?”
2. “Using only Bootstrap 5 and CSS, could you help make this layout with no new code (Insert Paint.png)”
3. “How would I make the \n string line change work in HTML?”
4. “Could you make a form using Bootstrap 5 in Vue + TS that requires the following fields {...}? Do not make any code logic for the submiting.”
