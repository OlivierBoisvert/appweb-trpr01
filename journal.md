# Journal - TP01 - Gestionnaire de produits

> **Cours :** 420-W40-SF - Développement d’applications Web (Cégep de Sainte-Foy)  
> **Travail :** TP01 - Gestionnaire de produits  
> **Étudiant(e) :** Olivier Boisvert
> **Période :** 2026-02-20 → {{ AAAA-MM-JJ }}

---

## Consignes

Pour **chaque séance**, écrire **8 à 10 lignes** (minimum) qui incluent :

- ce que j’ai fait (concret, vérifiable)
- les difficultés / erreurs rencontrées
- comment j’ai résolu (ou tenté de résoudre)

> **IMPORTANT** : écrire en fin de séance pendant que c’est frais.
> **IMPORTANT** : renommer ce fichier backlog.md

---

## Séance 1 — _2026-02-20_ (Durée : _2h50m_)

**Objectif de la séance :**  
_Initialiser le projet et mettre en place la structure de base._

**Travail réalisé (8–10 lignes min)**

- Création du concept (Produit utilisé, données utilisées, plans pour le développement)
- Création et setup du projet utilisant un gabarit standard Vue + TS en supprimant les fichiers placeholders et en créant des sous dossiers supplémentaire (images, css, scripts) pour une meilleur lisibité de l'espace de travail.
- Création du dépot Github private avec l'ajout de Jimmy et les quelques commit de setup.
- Commencement de l'écriture pour le README avec la description du projet généralement terminée et la liste des fonctionalités.

**Difficultés / bugs**

- _Pas de difficultés ou de bugs puisqu'aucun code n'a été créé_

**Solutions / pistes testées**

- _N/A_

---

## Séance 2 — _2026-02-24_ (Durée : _1h50m_)

**Objectif de la séance :**  
Implémenter les données pré-fabriquées et créer la liste dynamique

**Travail réalisé (8–10 lignes min)**

- Création des types Grade et Gear en plus de leur fichier gearData.ts
- Implémentation de la réactivité dans GearList et importation des données pré-fabriquées
- Ajout des images de Grade
- Création de GearItem et utilisation dans GearList pour créer la liste dynamique
- Commencement du style de la liste
- Réalisation de schéma pour le style et le layout de l'application

**Difficultés / bugs**

- Faire utiliser le path mit dans Grade pour l'affichage de l'image

**Solutions / pistes testées**

- Essaie de quelques combinaisons (src"${{gear.grade.path}}) sans succès.
- Mise en place d'une solution temporaire hard-coder à remplacer si possible

---

## Séance 3 — _2026-02-27_ (Durée : _2h50m_)

**Objectif de la séance :**  
Ajouter plus de fonctionalité manipulant la liste de données

**Travail réalisé (8–10 lignes min)**

- Ajout de l'option de suppression (Manque la confirmation)
- Ajout de l'option d'affichage des données d'un gear
- Changement de la logique d'image dynamique, allant de HardCoder à une solution plus simple
- Création du formulaire de création de gear et de la fonction pour ajouter un gear valide dans la liste quand créé
- Ajout de la liste d'avertissements (Manque le style)
- Changement du schéma initial pour le layout de l'application

**Difficultés / bugs**

- La passage de la liste d'avertissement pour pouvoir en ajouter à l'intérieur des vue nécessaire

**Solutions / pistes testées**

- Utilisation d'une méthode et liste statique partagée par les vues

---

## Séance 4 — _AAAA-MM-JJ_ (Durée : _XhYm_)

**Objectif de la séance :**  
Faire le style

**Travail réalisé (8–10 lignes min)**

- Changement du style pour la liste d'équipement
- Création du style pour les informations d'un équipement
- Changement du style pour le formulaire
- Création du style pour la liste d'avertissement
- Modification du layout pour les avertissement et formulaire
- Commencement de la modification d'un équipement
- Création d'un bouton de modification

**Difficultés / bugs**

- Faire remplir par défaut le formulaire avec les données de l'équipement à modifier

**Solutions / pistes testées**

- ajout d'un prop placeHolderGear (A finir)

---

## Séance 5 — _2026-03-06_ (Durée : _2h50m_)

**Objectif de la séance :**  
Apporter des correctifs en rapport avec les commentaires de la première version, finalisation de la modification et ajout de la duplication d'équipement

**Travail réalisé (8–10 lignes min)**

- Reformulation des critères d'acceptation dans le journal pour une version plus claire
- Ajout du fonctionnement de la modification d'un équipement
- Ajout de la confirmation pour une suppression d'équipement et l'annulation d'une modification
- Ajout de la validation du formulaire pour le rendre plus facile d'utilisation
- Ajout de la dupplication d'un équipement

**Difficultés / bugs**

- Pouvoir identifier le but du formulaire (Ajouter, Duppliquer, Modifier)

**Solutions / pistes testées**

- Ajout de props pour aider le formualire à identifier son but

---

## Résumé global (à compléter avant remise)

- **Ce dont je suis le plus fier/fière :** …
- **Ce que j’améliorerais avec plus de temps :** …
- **3 apprentissages techniques :**
  1. …
  2. …
  3. …

---
