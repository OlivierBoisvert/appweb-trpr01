# Backlog - TP01 - Gestionnaire de produits

> **Cours :** 420-W40-SF - Développement d’applications Web (Cégep de Sainte-Foy)  
> **Travail :** TP01 - Gestionnaire de produits  
> **Étudiant(e) :** Olivier Boisvert
> **Dernière mise à jour :** 2026-02-20

---

## 1) Règles de backlog (à respecter)

- **Tâches petites** : idéalement 25 à 50 minutes.
- **Titres explicites** : “UI liste produits (tableau)” au lieu de “liste”.
- **Critères d’acceptation** : 1 à 3 points simples pour savoir si c’est “done”.
- **Ordre logique** : setup → affichage → interactions → validations → export → déploiement → finitions.
- **Suivi** : on bouge les statuts au fur et à mesure (visible).
- **Légende statut :** ⬜ À faire | 🟦 En cours | ✅ Fait | 🟥 Bloqué
- Priorités
  - **MUST** : requis par l’énoncé (récits 1 à 10 + méthodologie)
  - **SHOULD** : qualité/robustesse (cas limites, petits refactors)
  - **COULD** : bonus / nice-to-have (si tout le reste est stable)
- **IMPORTANT**: renommer backlog.md

---

## 2) Tableau du backlog

> Copiez/collez des lignes au besoin.

|  ID | Priorité | Statut | Titre (tâche)                        | Relié à (RU#) | Critères d’acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------------------------------ | :-----------: | ------------------------------------------- | ----------------- |
|  A1 |   MUST   |   ✅   | Afficher dynamiquement la liste      |       5       | Liste propres avec les options voulues      |                   |
|  A2 |  SHOULD  |   ✅   | Path dynamique pour img de GearItem  |     5 , 7     | Attribuer la source sans if else            |                   |
|  A3 |   MUST   |   ✅   | Afficher les informations de gear    |       7       | Affichage des valeurs attendu               |                   |
|  A4 |  SHOULD  |   ✅   | Faire le style de la liste           |     5 , 7     | Affichage beau et cohérent                  |                   |
|  A5 |   MUST   |   🟦   | Création du formulaire de Gear       |   1 , 2 , 3   | Pouvoir ajouter ou modifier un gear         |                   |
|  A6 |   MUST   |   ✅   | Afficher la liste des avertissment   |       9       | Afficher proprement les avertissements      |                   |
|  A7 |  SHOULD  |   ✅   | Faire le style des avertissment      |       9       | Affichage beau et cohérent                  |                   |
|  A8 |   MUST   |   🟦   | Suppression d'un gear                |       4       | Supprimer avec demande de confirmation      |                   |
|  A9 |  SHOULD  |   ✅   | Création des données de départ       |       5       | Création d'une liste de données par défaut  |                   |
| A10 |  SHOULD  |   ✅   | Faire le style général de la page    |               | Fond de page, placement des composants      |                   |
| A11 |   MUST   |   🟦   | Faire la fonction de modification    |       2       | Modification dynamique d'un gear            |                   |
| A12 |   MUST   |   ✅   | Indicateur visuelle pour la quantité |       8       | Affichage de couleur cohérent               |                   |
