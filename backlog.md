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

|  ID | Priorité | Statut | Titre (tâche)                        | Relié à (RU#) | Critères d’acceptation (définition de done)                                                                                                     | Notes / obstacles |
| --: | :------: | :----: | ------------------------------------ | :-----------: | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
|  A1 |   MUST   |   ✅   | Afficher dynamiquement la liste      |       5       | Afficher la liste des équipements avec un placement nom / bouton propre. Ajouter ou modifier un équipement met à jour la liste automatiquement  |                   |
|  A2 |  SHOULD  |   ✅   | Path dynamique pour img de GearItem  |     5 , 7     | Remplacer le code de chaine if else pour une solution plus propre et non hard codée. Dois fonctionner avec n'importe qu'elle path fournis       |                   |
|  A3 |   MUST   |   ✅   | Afficher les informations de gear    |       7       | Afficher les différentes données d'un équipement correctement quand le bouton associé est cliqué                                                |                   |
|  A4 |  SHOULD  |   ✅   | Faire le style de la liste           |     5 , 7     | Affichage beau et cohérent de la liste, l'utilisateur dois pouvoir facilement la comprendre                                                     |                   |
|  A5 |   MUST   |   ✅   | Création du formulaire de Gear       |   1 , 2 , 3   | Pouvoir ajouter ou modifier un équipement dans la liste. Les champs non-remplis affiche un message d'erreur                                     |                   |
|  A6 |   MUST   |   ✅   | Afficher la liste des avertissment   |       9       | Afficher les avertissements de rupture de stocks sous forme d'une liste. La liste se met à jour quand un avertissement est ajouter ou supprimer |                   |
|  A7 |  SHOULD  |   ✅   | Faire le style des avertissment      |       9       | Affichage beau et cohérent. L'utilisateur dois comprendre que cette liste est importante à regarder                                             |                   |
|  A8 |   MUST   |   ✅   | Suppression d'un gear                |       4       | Supprimer un équipement avec demande de confirmation avant l'opération. Supprimer met à jour la liste d'équipements                             |                   |
|  A9 |  SHOULD  |   ✅   | Création des données de départ       |       5       | Création d'une liste de données par défaut pour les équipements qui peuplent la liste au démarrage                                              |                   |
| A10 |  SHOULD  |   ✅   | Faire le style général de la page    |               | Fond de page, placement des composants. La positions et couleurs des composants est efficace et facile à utiliser                               |                   |
| A11 |   MUST   |   ✅   | Faire la fonction de modification    |       2       | Modification dynamique d'un équipement. Quand le bouton modifier est cliqué, les champs du formulaire sont pré-remplis                          |                   |
| A12 |   MUST   |   ✅   | Indicateur visuelle pour la quantité |       8       | Affichage de couleur cohérent pour pouvoir savoir la condition des quantités sur la page d'informations                                         |                   |
