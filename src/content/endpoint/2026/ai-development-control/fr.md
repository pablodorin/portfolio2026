---
id: "ai-development-control"
number: "08"
datePublished: "2026-08-10"
tags: ["AI","Software Development","Code Review","Testing","Software Architecture"]
language: "fr"
slug: "defis-ia-garder-controle"
kicker: "IA et pratique du développeur"
cardCopete: "L’IA peut produire du code plus vite que nous ne pouvons le comprendre. Le défi n’est pas de rivaliser avec cette vitesse, mais de garder le contrôle des décisions, des tests et du système."
title: "Les défis de l’utilisation de l’IA : garder le contrôle"
copete: "L’IA propose des solutions, écrit du code et accélère des tâches qui prenaient autrefois des heures. Mais plus il devient facile de produire une implémentation, plus il devient important de savoir ce que nous acceptons, comment cela s’intègre au système et sur quelles preuves nous pouvons nous appuyer."
bajada: "La perte de contrôle ne consiste pas simplement à ne plus écrire chaque ligne à la main. Elle commence lorsque le code existe avant notre compréhension : lorsque nous introduisons des outils que nous n’avons pas évalués, acceptons des décisions que nous ne savons pas expliquer, déléguons aussi les tests ou construisons davantage que ce que les exigences demandaient."
disclosure: "Article écrit à l’origine en espagnol. Cette version française a été traduite avec l’aide de l’IA et reste en attente de la révision linguistique finale de l’auteur."
---

## Une réponse qui m’a semblé incomplète

Aujourd’hui, lors d’un entretien d’embauche, on m’a demandé quels défis je rencontre, dans ma pratique de développeur, face à l’utilisation de l’IA.

La première réponse qui m’est venue à l’esprit était assez claire :

**La perte de contrôle.**

Mais, en répondant, la formule m’a semblé imprécise. Quel contrôle sommes-nous réellement en train de perdre ?

Après l’entretien, j’ai décidé d’approfondir un peu cette question.

Le problème n’est pas simplement que l’IA écrive du code à notre place. Depuis des décennies, les développeurs délèguent du travail aux compilateurs, frameworks, bibliothèques, ORM, IDE, générateurs de code et plateformes cloud.

La différence est qu’un outil peut désormais proposer une solution entière — et le faire en quelques secondes.

Lorsque j’écris moi-même une portion de code, même imparfaite, je peux généralement reconstruire les raisons des principales décisions. Lorsqu’une IA produit vingt, cinquante ou deux cents lignes presque instantanément, cette relation peut facilement s’inverser : **le code existe avant que j’aie fini de le comprendre**.

C’est là, je crois, que commence la véritable perte de contrôle.

## L’IA propose ; l’humain décide

Une règle simple résume une bonne partie du problème :

**L’IA propose, mais le développeur décide.**

Une solution techniquement valide n’est pas nécessairement la bonne solution pour un système donné.

L’IA peut proposer une nouvelle bibliothèque, un framework, un pattern, une base de données, une couche de cache, une abstraction ou un service supplémentaire parce que cela résout élégamment le problème qui lui est présenté.

Mais avant d’accepter la proposition, les questions humaines demeurent :

Cet outil devrait-il réellement faire partie de ce système ?

Existe-t-il déjà un autre mécanisme pour résoudre le même problème ?

Est-il compatible avec les versions et les contraintes réelles du projet ?

L’équipe pourra-t-elle le maintenir ?

Résolvons-nous un besoin ou ajoutons-nous simplement de la sophistication ?

La documentation de GitHub consacrée à la [révision du code généré par IA](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code) inclut explicitement la vérification de l’intention, de la qualité et des dépendances. Non pas parce qu’une dépendance proposée par l’IA serait nécessairement mauvaise, mais parce qu’une suggestion plausible ne connaît pas, à elle seule, toute l’histoire technique et organisationnelle d’un système.

L’IA peut proposer des outils. **Elle ne peut pas assumer les conséquences de leur introduction.**

## Il ne suffit pas que cela fonctionne

La question suivante ne peut plus être seulement :

**Est-ce que cela fonctionne ?**

Elle doit aussi être :

**Est-ce que je comprends pourquoi cela fonctionne ?**

Si je suis incapable d’expliquer ce que fait le code généré, pourquoi une dépendance a été ajoutée, quelle responsabilité possède une classe, comment une exception se propage, où réside l’état ou comment deux composants communiquent, alors je ne contrôle pas réellement ce code.

Je l’ai simplement en ma possession.

Cela rejoint une idée que j’avais déjà explorée dans [« Ingénierie augmentée par l’IA : la productivité du développeur sans renoncer au jugement »](/fr/endpoint/ingenierie-augmentee-par-ia/) : générer du code n’est qu’une partie du travail d’ingénierie. L’intégrer, le comprendre, le réviser et répondre de ses conséquences restent des tâches distinctes.

Paradoxalement, plus il devient facile d’écrire du logiciel, plus il devient important de le comprendre.

## Plus que jamais : des tests

Et puis il y a les tests.

Plus que jamais : **des tests**.

De préférence des tests que je comprends, que je conçois et que, au moins sur les points critiques, je peux écrire ou réviser moi-même.

Ils deviendront peut-être mon dernier bastion de *codeur*.

Il existe un risque conceptuel lorsque la même IA écrit l’implémentation puis produit les tests censés la valider : les deux peuvent partager la même hypothèse erronée. Un test au vert ne prouve pas grand-chose si le test est né du même malentendu que le code.

Un test n’est pas seulement un mécanisme permettant d’exécuter du code et d’obtenir un résultat.

C’est aussi une déclaration sur **ce que je considère que le système doit faire**.

L’IA peut aider à trouver des cas limites, produire des données, suggérer des tests répétitifs et signaler des chemins non couverts. Mais le critère de correction doit venir d’ailleurs : exigences, règles métier, contrats, comportement existant et jugement technique.

Le [Secure Software Development Framework du NIST](https://csrc.nist.gov/pubs/sp/800/218/final) n’a pas été écrit spécifiquement pour les assistants de programmation, mais il constitue une référence utile parce qu’il place la vérification, la révision et la réduction des vulnérabilités au cœur du processus de développement, au lieu de les considérer comme des propriétés implicites d’une implémentation générée.

Les données empiriques invitent également à la prudence. Une étude de Perry, Srivastava, Kumar et Boneh, publiée à CCS 2023, a constaté que, dans les tâches de sécurité évaluées, les participants utilisant l’assistant étudié produisaient du code moins sûr tout en ayant tendance à être plus confiants dans la sécurité du résultat. Il s’agit d’une étude portant sur un modèle et un ensemble de tâches précis, et non d’une loi universelle concernant tous les assistants actuels, mais elle montre pourquoi une validation indépendante reste importante.

## Connaître le système, pas seulement le code

La conséquence qui m’intéresse le plus est ailleurs : avec l’IA, nous devons comprendre le système **davantage**, et non moins.

Son architecture.

Ses composants.

Ses dépendances.

Ses flux de données.

Ses frontières.

Ses règles métier.

La manière dont ses services communiquent.

L’endroit où réside l’état.

Les endroits où il peut échouer.

Les hypothèses sur lesquelles repose ce qui existe déjà.

Lorsqu’une IA peut générer presque instantanément une classe, un contrôleur, un endpoint ou une migration, savoir écrire ces éléments conserve de la valeur, mais ce n’est plus le centre exclusif du travail.

Savoir **où ils doivent se trouver** devient encore plus important.

L’unité de compréhension du développeur se déplace vers le haut : de la ligne de code vers le système.

Le rapport [DORA 2025 sur le développement logiciel assisté par IA](https://dora.dev/research/2025/dora-report/) est intéressant sur ce point, car il décrit principalement l’IA comme un amplificateur. Les équipes et les systèmes dotés de bases solides peuvent transformer l’accélération locale en meilleurs résultats ; des bases fragiles peuvent voir leurs problèmes amplifiés. L’outil ne remplace pas le système de travail dans lequel il est utilisé.

## Respecter les exigences : ni plus, ni moins

Enfin apparaît une responsabilité beaucoup moins spectaculaire : vérifier que la solution fait exactement ce qui a été demandé.

**Ni plus. Ni moins.**

L’IA a tendance à vouloir être utile. Parfois trop utile.

On demande un endpoint et elle peut proposer une abstraction supplémentaire. On demande une règle de validation et soudain apparaissent un service, un DTO, un mapper, une dépendance et une nouvelle classe de configuration.

Chaque ajout peut sembler raisonnable pris isolément.

Ensemble, ils peuvent créer une complexité que personne n’a demandée.

Garder le contrôle signifie aussi savoir refuser du code qui n’a pas de raison suffisante d’exister.

Les exigences deviennent alors une frontière : ce que le système doit faire, ce qu’il ne doit pas faire, les contraintes qu’il doit respecter et les conditions qui permettent de considérer la tâche comme terminée.

La bonne solution n’est pas la plus impressionnante. C’est celle qui satisfait les exigences avec la plus faible complexité raisonnable tout en restant compréhensible, vérifiable et maintenable.

## Alors, quel contrôle pouvons-nous perdre ?

Après y avoir réfléchi, ma réponse à cette question d’entretien serait aujourd’hui plus précise.

L’IA ne rend pas inévitable la perte de contrôle des développeurs.

Elle rend cette perte de contrôle **extraordinairement facile**.

Nous pouvons produire du code plus vite que nous ne pouvons le lire. Nous pouvons accepter une bibliothèque avant d’avoir vérifié si nous en avons besoin. Nous pouvons déléguer une décision architecturale sans même nous en rendre compte. Nous pouvons demander des tests pour une implémentation dont nous n’avons pas encore défini clairement le comportement. Nous pouvons confondre volume de code et progrès.

Le défi n’est pas de concurrencer l’IA pour savoir qui écrit le plus vite.

Il consiste à garder le contrôle des décisions qui entourent ce que l’IA produit :

quels outils entrent dans le système ;

quelle architecture nous construisons ;

ce que fait réellement le code ;

quelles preuves montrent qu’il fonctionne ;

et si le résultat répond, ni plus ni moins, à ce qui a été demandé.

L’IA peut accélérer considérablement le développement.

Mais la vitesse sans compréhension n’est pas du contrôle.

Et chaque fois qu’écrire du code devient moins coûteux, **comprendre ce que nous construisons devient plus précieux**.

## Références et lectures

- GitHub Docs, [« Review AI-generated code »](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code). Guide pratique pour vérifier la fonctionnalité, l’intention, la qualité, les dépendances et les problèmes spécifiques au code généré par IA.
- DORA, [« State of AI-assisted Software Development 2025 »](https://dora.dev/research/2025/dora-report/). Recherche sur la manière dont l’IA amplifie les capacités et les problèmes existants dans les systèmes de développement logiciel.
- NIST, [« Secure Software Development Framework (SSDF) Version 1.1 »](https://csrc.nist.gov/pubs/sp/800/218/final). Cadre général pour le développement sécurisé, la vérification et la réduction des vulnérabilités.
- Neil Perry, Megha Srivastava, Deepak Kumar et Dan Boneh, [« Do Users Write More Insecure Code with AI Assistants? »](https://par.nsf.gov/biblio/10472235-do-users-write-more-insecure-code-ai-assistants), CCS 2023. Étude expérimentale sur l’interaction entre développeurs, assistant de code IA et sécurité.
- Srivathsan G. Morkonda, Mahmoud Selim et Hala Assal, [« Security of LLM-generated Code: A Comparative Analysis »](https://arxiv.org/abs/2605.23091), 2026. Prépublication comparative récente sur les vulnérabilités du code généré par plusieurs LLM.
