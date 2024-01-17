# Documentation du Serveur

## Introduction

Ce serveur est développé en Node.js et implémente des services tels que YouTube, Discord, Quotes, Date&Time, Google Calendar, GitHub, Spotify. Il est conçu pour fonctionner de manière similaire à IFTTT.

## Authentification

L'authentification au serveur se fait soit via email soit via Gmail avec OAuth 2. Lors de l'authentification, un token JWT est généré et envoyé au client. Il faut noter que le serveur ne stocke pas ce token. Lorsqu'une requête est envoyée par le client, son email est récupéré et vérifié pour sa validité.

## Base de Données

La base de données est développée avec MongoDB.

## Services

L'ensemble des services et des actions/réactions sont stockés dans un fichier `about.json` qui est envoyé aux clients suite à leur demande. Chaque service et ses actions/réactions sont gérés dans le dossier `Services`. D'ailleurs en voici la liste:

- **YouTube** : Ce service permet d'interagir avec l'API de YouTube pour effectuer des actions comme la recherche de vidéos, la gestion des abonnements, etc.

- **Discord** : Ce service permet d'envoyer des messages à des canaux spécifiques sur Discord ou d'interagir avec les utilisateurs.

- **Quotes** : Ce service fournit des citations aléatoires. Il est utilisé pour envoyer des citations quotidiennes ou pour rechercher des citations par auteur ou par thème.

- **Date&Time** : Ce service fournit des informations sur la date et l'heure actuelles. Il est utilisé pour déclencher des actions à des moments spécifiques.

- **Google Calendar** : Ce service permet d'interagir avec l'API de Google Calendar. Il est utilisé pour créer, modifier ou supprimer des événements de calendrier.

- **GitHub** : Ce service permet d'interagir avec l'API de GitHub. Il est utilisé pour créer des issues, faire des pull requests, etc.

- **Spotify** : Ce service permet d'interagir avec l'API de Spotify. Il est utilisé pour jouer de la musique, créer des listes de lecture, etc.


## Backoffice

Sur le backoffice, on peut obtenir le nombre total de services et d'utilisateurs. Il fournit également une liste complète des utilisateurs. Chaque utilisateur peut être modifié ou supprimé individuellement.

## Gestion des Requêtes

La gestion des requêtes est réalisée de manière abstraite et lisible, ce qui facilite la maintenance et l'évolution du serveur.

## Routes

Le dossier `routes` contient les différentes routes pour l'authentification, les requêtes backoffice et la gestion des actions/réactions définies en tant que triggers.

## Tests

Un dossier `test` contient des tests unitaires pour chaque service.

## Docker

Un `Dockerfile` est inclus pour faciliter le déploiement du serveur.

## API Documentation

La documentation de notre API RESTful est réalisée grâce à Express et est disponible dans le fichier `swagger.js`.