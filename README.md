📝 Mini Todo App – JavaScript Vanilla
📌 Présentation du projet

Ce projet consiste à développer une mini application web de gestion de tâches (Todo List) en utilisant uniquement les technologies web de base : HTML, CSS et JavaScript (vanilla).

L’objectif est de mettre en pratique les notions fondamentales de JavaScript côté client, notamment la manipulation du DOM, la gestion des événements et la mise à jour dynamique de l’interface utilisateur.

🎯 Objectifs pédagogiques

Manipuler le DOM avec JavaScript

Gérer les événements utilisateurs (clics, saisie)

Structurer un projet web simple

Implémenter une logique métier sans framework

Mettre à jour dynamiquement une interface utilisateur

🧰 Technologies utilisées

HTML : structure de la page

CSS : mise en forme et styles

JavaScript (vanilla) : logique de l’application

❌ Aucun framework ou bibliothèque externe n’est utilisé.

🧱 Fonctionnalités implémentées (MVP)
➕ Ajouter une tâche

Champ de saisie texte

Bouton « Ajouter »

Affichage d’un message d’erreur si le champ est vide

Ajout de la tâche dans la liste

📋 Afficher la liste des tâches

Chaque tâche contient :

Une case à cocher (fait / non fait)

Le texte de la tâche

Un bouton « Supprimer »

🔍 Filtrer les tâches

Trois filtres sont disponibles :

Toutes : affiche toutes les tâches

À faire : affiche uniquement les tâches non terminées

Faites : affiche uniquement les tâches terminées

🔢 Compteurs [En cours]

Affichage de :

Nombre total de tâches

Nombre de tâches à faire

Nombre de tâches faites

Les compteurs se mettent à jour automatiquement selon les actions de l’utilisateur.

📁 Structure du projet
todo-app
├── index.html
├── style.css
└── script.js

🚀 Installation et lancement en local
Prérequis

Un navigateur web récent

Un éditeur de code (ex : VS Code)

Étapes d’installation

Télécharger ou cloner le projet

Ouvrir le dossier du projet

Vérifier la présence des fichiers suivants :

index.html

style.css

script.js

Lancement de l’application
Méthode simple

Ouvrir le fichier index.html directement dans un navigateur

Méthode recommandée (serveur local)

Ouvrir le projet dans VS Code

Lancer un serveur local (ex : extension Live Server)

Accéder à l’application via l’URL fournie

🧪 Tests et validation

Les points suivants ont été vérifiés :

Ajout de tâche avec champ valide

Message d’erreur si le champ est vide

Suppression d’une tâche

Changement d’état (fait / à faire)

Fonctionnement des filtres

Mise à jour correcte des compteurs - [En cours]

📚 Contraintes respectées

Utilisation exclusive de JavaScript vanilla

Aucune bibliothèque externe

Code lisible et structuré

Séparation des responsabilités (HTML / CSS / JS)

✨ Améliorations possibles

Sauvegarde des tâches avec localStorage

Ajout de la touche Entrée pour valider une tâche

Amélioration de l’accessibilité

Design responsive
