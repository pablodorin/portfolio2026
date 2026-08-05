- ID: `technical-interview-failure`
- Número: `7`
- Fecha: `2026-08-08`
- Línea temática: `ENTRETIENS TECHNIQUES ET DÉVELOPPEMENT PROFESSIONNEL`
- Título: `Échouer à un entretien technique`
- Extracto de portada: `Un mauvais entretien technique ne définit pas à lui seul les capacités professionnelles. Il peut toutefois révéler la distance entre faire, comprendre et expliquer.`
- Etiquetas: `Technical Interviews`, `Software Careers`, `Professional Development`, `Learning`, `Impostor Syndrome`
- Bajada: `Échouer à un entretien technique ne prouve pas automatiquement que l’on ne sait pas programmer. Cela peut révéler une distance inconfortable entre ce que l’on sait faire, ce que l’on comprend et ce que l’on parvient à expliquer sous pression.`
- Copete: `Tous les entretiens n’évaluent pas la même chose : une conversation technique, un exercice de live coding, une séance de pair programming ou une conception de systèmes exigent des compétences différentes. Analyser l’endroit où la difficulté est apparue permet de transformer le résultat en un programme concret d’étude, de pratique et de préparation avant de retourner dans l’arène.`
- Nota de idioma: `Article écrit à l’origine en espagnol. Cette version française a été traduite avec l’aide de l’IA et reste soumise à la révision linguistique finale de l’auteur.`
- *Slug*: `echouer-a-un-entretien-technique`
- Idioma original: `fr`
- Descripción SEO: `Types d’entretiens techniques en informatique, difficultés du pair programming, syndrome de l’imposteur et guide pour étudier et retourner dans l’arène.`

<!-- ARTICLE_START -->
<!-- CUERPO -->

## Un entretien technique peut mal se passer de nombreuses façons

Nous pouvons ignorer une réponse. Nous pouvons comprendre un concept sans trouver les mots. Nous pouvons avoir utilisé un outil pendant des années sans avoir jamais organisé une explication de son fonctionnement. Nous pouvons aussi rester bloqués en essayant de programmer tandis qu’une autre personne observe chaque mouvement du curseur.

Le résultat produit généralement la même sensation : nous terminons l’entretien en repassant chaque silence, chaque réponse incomplète et chaque erreur qui, hors de cette situation, semblait facile à éviter.

Une idée particulièrement familière aux personnes qui travaillent dans la technologie apparaît alors :

**« Je suis un imposteur. »**

Non pas simplement « j’ai mal réussi » ou « je dois étudier ce sujet », mais quelque chose de plus radical : « En réalité, je n’ai jamais su ; j’ai seulement réussi à faire croire aux autres que je savais. »

Avant de transformer un mauvais entretien en jugement définitif sur notre identité professionnelle, il convient de comprendre le type d’épreuve que nous venons de passer. Car il n’existe pas un seul type d’entretien technique.

## Sept modalités d’entretien technique

Les entreprises combinent différents formats. Chacun exige des compétences différentes et ne fournit qu’une information partielle sur le candidat. Se préparer à « un entretien technique » sans connaître sa modalité revient donc à préparer « un examen » sans savoir s’il sera oral, écrit ou pratique.

### 1. Entretien technique conversationnel

L’intervieweur pose des questions sur la programmation, la conception, l’architecture, les bases de données, les tests, l’infrastructure ou les méthodes de travail. Il ne demande pas nécessairement d’écrire du code : il attend du candidat qu’il puisse définir des concepts, les relier et justifier des décisions.

Voici quelques questions typiques et volontairement générales :

- Quelle différence existe-t-il entre héritage et composition ? Quand choisiriez-vous l’un ou l’autre ?
- Quel problème l’injection de dépendances résout-elle ?
- Comment organiseriez-vous la gestion des erreurs dans une API ?
- Quelle différence y a-t-il entre un test unitaire et un test d’intégration ?
- Comment rechercheriez-vous la cause du ralentissement soudain d’un endpoint ?
- Qu’est-ce qu’un index de base de données et quel coût introduit-il ?
- Quand choisiriez-vous une base relationnelle ou non relationnelle ?
- Quels avantages et difficultés présentent les microservices ?
- Comment protégeriez-vous une API exposée publiquement ?
- Comment décideriez-vous quelles informations consigner dans les journaux ?
- Que signifie le caractère transactionnel d’une opération ?
- Que feriez-vous si une solution fonctionne mais reste difficile à maintenir ?
- Comment vérifieriez-vous qu’un changement n’a pas cassé les fonctionnalités existantes ?
- Quand éviteriez-vous une technologie que vous connaissez bien ?

La difficulté ne consiste pas seulement à se souvenir d’une définition. Les questions suivantes obligent à montrer qu’une compréhension existe derrière celle-ci :

- Pourquoi ?
- Quelle autre solution était possible ?
- Quel coût cette décision introduit-elle ?
- Dans quelle situation choisiriez-vous le contraire ?
- Comment la testeriez-vous ?
- Que se passerait-il si le système grandissait ?

Une réponse mémorisée peut survivre à la première question. Elle survit rarement aux suivantes.

### 2. *Live coding*

Le candidat doit résoudre un problème sous le regard d’un ou plusieurs intervieweurs. Il peut s’agir d’un algorithme, d’une transformation de données, d’une fonction, d’un composant visuel, d’une petite API ou d’une modification d’un projet préparé à l’avance.

L’évaluation ne porte pas uniquement sur le fonctionnement final du programme. Elle peut aussi observer la compréhension des exigences, la décomposition du problème, le choix des structures de données, la clarté du code, les cas limites, la méthode de débogage et la gestion du temps.

Ce format ne reproduit pas complètement le travail quotidien. Au travail, nous pouvons consulter la documentation, explorer le code, tester des hypothèses et rester silencieux plusieurs minutes. Pendant un entretien, chaque pause semble nécessiter une explication. Une personne compétente peut donc mal réussir un exercice de *live coding*, tandis qu’une personne très entraînée aux exercices d’entretien peut obtenir un résultat supérieur à ce que suggérerait son expérience professionnelle.

L’épreuve n’est pas inutile, mais elle ne constitue pas non plus une reproduction neutre du travail réel.

### 3. *Pair programming*

Dans le *pair programming*, candidat et intervieweur travaillent ensemble sur un problème. L’un peut écrire tandis que l’autre observe, pose des questions, propose des solutions ou signale des erreurs possibles.

Bien utilisée, cette modalité permet d’observer comment une personne collabore, écoute, explique ses décisions et modifie sa solution face à de nouvelles informations. Il ne s’agit pas simplement de programmer sous le regard de quelqu’un. [Thoughtworks décrit](https://www.thoughtworks.com/en-us/insights/blog/what-expect-pair-programming-interview) un processus dans lequel la communication, le raisonnement, le travail d’équipe, la conception, le code et les tests comptent même lorsque la solution n’est pas entièrement terminée.

Ce format présente des difficultés particulières.

#### Penser et parler en même temps

Certaines personnes résolvent mieux les problèmes en silence. Pendant une séance de *pair programming*, elles doivent simultanément programmer, relire ce qu’elles écrivent et construire un récit compréhensible.

Si elles restent silencieuses, l’intervieweur ignore si elles réfléchissent ou sont bloquées. Si elles commentent chaque caractère, elles gênent leur propre réflexion. L’équilibre consiste à verbaliser les décisions, les doutes et les possibilités, et non chaque ligne écrite.

#### Travailler dans un environnement inconnu

L’exercice peut utiliser un éditeur, un système d’exploitation, un dépôt ou des raccourcis que le candidat ne connaît pas. Une difficulté accidentelle avec l’environnement peut consommer du temps et sembler révéler une faiblesse technique.

#### Comprendre des exigences incomplètes

De nombreux exercices contiennent des ambiguïtés délibérées. Le candidat est censé poser des questions avant de programmer. Sous pression, il est toutefois fréquent de trop supposer, de commencer immédiatement et de découvrir quelques minutes plus tard que l’on a résolu le mauvais problème.

#### Recevoir des suggestions sans se mettre sur la défensive

Une indication de l’intervieweur peut être une aide, une correction ou une manière d’observer comment le candidat traite le feedback. La rejeter automatiquement peut montrer de la rigidité ; l’accepter sans la comprendre n’aide pas davantage. Il faut s’arrêter, évaluer la proposition et expliquer ce qu’elle changerait.

#### Se remettre d’une erreur observée

Une erreur de syntaxe insignifiante peut provoquer un blocage disproportionné lorsque quelqu’un regarde. Le candidat commence à modifier plusieurs choses à la fois, abandonne sa méthode de débogage et transforme un défaut simple en situation chaotique.

#### Équilibrer vitesse et qualité

Le temps est limité, mais les noms, la conception, la lisibilité, les validations et les tests sont aussi évalués. Chercher une solution parfaite peut empêcher de terminer une version minimale. Aller trop vite peut produire un code impossible à défendre.

#### Comprendre le rôle de l’intervieweur

Il n’est pas toujours clair si l’autre personne agira comme partenaire, observateur ou examinateur. Il convient de demander : pouvons-nous consulter la documentation ? Attendez-vous des tests ? Préférez-vous que nous expliquions d’abord la conception ? Pouvons-nous demander un indice ?

Le *pair programming* examine plusieurs capacités superposées : programmer, communiquer, écouter et corriger pendant que tout se produit simultanément.

### 4. Exercice à réaliser chez soi

Le candidat reçoit une consigne et dispose de quelques heures ou jours pour livrer une solution. Ce format permet de faire des recherches, d’utiliser son environnement habituel et de travailler plus calmement.

Ses difficultés sont différentes : interpréter le périmètre, décider combien de temps investir, éviter la suringénierie, documenter l’installation, écrire suffisamment de tests et livrer un ensemble complet dans le délai. De plus, le temps annoncé par l’entreprise ne correspond pas toujours à celui qu’exige une solution compétitive.

L’évaluation se poursuit souvent après la livraison. On peut demander au candidat d’expliquer la conception, de modifier une partie ou de défendre ses décisions. S’il ne peut pas expliquer le code envoyé, la qualité apparente du dépôt perd sa valeur.

### 5. Conception de systèmes

Un problème large est présenté : concevoir un service de messagerie, une plateforme de paiement, un système de réservation ou une autre solution distribuée.

Le candidat doit découvrir les exigences, déclarer ses hypothèses et proposer des composants. La conversation peut aborder les API, bases de données, caches, files d’attente, événements, la montée en charge, la cohérence, la sécurité, la tolérance aux pannes, l’observabilité et les coûts.

Il n’existe généralement pas une seule bonne réponse. Il importe de transformer un besoin imprécis en conception raisonnée et d’expliquer les compromis : ce que nous gagnons, ce que nous sacrifions et dans quelles conditions nous modifierions la solution.

### 6. Revue de code et débogage

Au lieu de construire quelque chose à partir de zéro, le candidat reçoit du code existant à réviser ou réparer. On peut lui demander de détecter un défaut fonctionnel, une vulnérabilité, une requête inefficace, une condition de concurrence, une mauvaise séparation des responsabilités, un test insuffisant ou un problème de lisibilité.

Cette modalité ressemble à une partie très courante du travail réel : comprendre le code d’autrui avant de le modifier. Elle évite également de confondre vitesse d’écriture et capacité d’ingénierie.

### 7. Cas technique ou présentation

Le candidat reçoit un scénario et doit présenter une proposition. Il peut expliquer une architecture, analyser un incident, défendre une solution ou exposer un projet réalisé précédemment.

Les connaissances, l’organisation et la communication sont évaluées simultanément. Savoir construire une solution ne garantit pas de savoir la présenter. Les postes à plus grande responsabilité exigent cependant souvent ces deux capacités.

Une [taxonomie des entretiens techniques publiée par Zahra Traboulsi](https://zahra.dev/blog/technical-interview-taxonomy/) montre que même ces catégories comprennent de nombreuses variantes : algorithmes ou travail pratique, exercices en direct ou à domicile, programmation individuelle ou en binôme, conception de systèmes, modélisation de données, lecture de code, revue de pull requests et présentations.

## Faire, comprendre et expliquer

De nombreuses connaissances professionnelles deviennent tacites. Après avoir répété une tâche suffisamment longtemps, nous cessons d’en reconstruire consciemment les fondements. Nous savons où placer une configuration, quelle structure appliquer ou quelle erreur chercher. La procédure devient familière.

Cela peut suffire pour travailler. Cela ne suffit pas toujours pour expliquer.

Une conversation technique oblige à transformer des habitudes en concepts. Il ne suffit plus d’affirmer que quelque chose « se fait ainsi ». Il faut identifier le problème résolu, son fonctionnement, les solutions alternatives et les conséquences produites.

Une personne peut donc utiliser une technologie tout en répondant mal à une question élémentaire à son sujet. Sa pratique peut être devenue mécanique, partielle ou très dépendante du contexte d’un projet.

L’inverse peut également se produire : la personne comprend le sujet, mais ne parvient pas à retrouver ses connaissances sous pression. Elle reconnaît une bonne explication lorsqu’elle l’entend, sans réussir à la produire elle-même.

Il convient de distinguer des problèmes qui paraissent identiques de l’extérieur :

1. Ne pas connaître le sujet.
2. Ne le connaître que de nom.
3. L’avoir appliqué sans en comprendre complètement les fondements.
4. Le comprendre sans pouvoir retrouver rapidement ses connaissances.
5. Les retrouver sans savoir organiser une explication.
6. Savoir l’expliquer, mais rester bloqué par le format de l’entretien.

Pour progresser, il faut découvrir laquelle de ces situations s’est produite. Dire simplement « j’étais nerveux » peut cacher une véritable lacune. Conclure « je ne sais rien » transforme une difficulté localisée en condamnation totale.

## Expliquer fait aussi partie de la séniorité

Un professionnel senior n’est pas une encyclopédie. Il peut oublier une syntaxe, consulter la documentation et ignorer des technologies entières. L’étendue du développement logiciel rend impossible de tout mémoriser.

Mais la séniorité suppose davantage que l’accumulation d’années ou la participation à de nombreux projets. Elle implique de comprendre les problèmes, d’évaluer les solutions possibles, de justifier les décisions, d’anticiper les risques et d’aider les autres à comprendre le système.

Cela exige de savoir expliquer.

Une mauvaise réponse isolée n’efface la séniorité de personne. Mais si une personne ne peut systématiquement pas expliquer ses décisions, il lui sera difficile de guider une équipe, défendre une architecture, réaliser une revue approfondie ou communiquer un risque technique.

Pendant l’entretien, l’entreprise ne peut en outre évaluer une connaissance invisible. Le candidat en sait peut-être davantage qu’il n’a réussi à montrer, mais la décision reposera sur les preuves disponibles.

Savoir ne suffit pas. Dans cette situation, il faut aussi pouvoir le démontrer.

## L’entretien comme examen imparfait

Un entretien technique ressemble à un examen : il représente imparfaitement une capacité beaucoup plus large.

Une personne peut connaître les contenus et mal réussir. Peut-être n’a-t-elle pas pratiqué leur récupération, a-t-elle mal interprété une consigne, mal géré son temps ou est-elle restée bloquée. Elle peut aussi découvrir qu’elle croyait maîtriser un sujet qu’elle ne comprenait en réalité que superficiellement.

Le résultat ne décrit pas tout ce qu’elle sait. Mais il n’est pas nécessairement dépourvu d’informations.

Cette nuance importe. Critiquer les défauts des entretiens techniques peut être légitime : certains utilisent des questions sans pertinence, privilégient la mémorisation ou placent les candidats dans des conditions très éloignées du travail réel. Signaler ces limites ne devrait toutefois pas nous empêcher d’examiner ce que l’échec a révélé.

Un témoignage publié sur DEV Community à propos des [leçons tirées de plusieurs échecs à des entretiens techniques](https://dev.to/farhanaxmustafa/what-i-learned-from-failing-my-technical-interviews-276a) offre un exemple concret : chaque expérience a permis d’identifier les contenus et formats qui exigeaient une préparation spécifique.

## « Je suis un imposteur »

Après un échec, la pensée n’est pas toujours « j’ai une lacune en bases de données » ou « je dois pratiquer le *live coding* ».

Elle est souvent :

**« Je suis un imposteur. Ils ont fini par s’en rendre compte. »**

L’expression « syndrome de l’imposteur » sert souvent à décrire l’incapacité à reconnaître comme sienne une compétence démontrée et la peur d’être démasqué comme fraude, même en présence de réalisations objectives. Ce n’est pas la même chose que découvrir une faiblesse précise.

Le problème apparaît lorsqu’une difficulté partielle est interprétée comme la preuve que toute la carrière antérieure était une simulation. Un entretien d’une heure devient rétrospectivement la vérité secrète de toute une carrière.

Ce sentiment revient fréquemment dans le développement logiciel. Un article de Stack Overflow sur [le syndrome de l’imposteur dans l’industrie technologique](https://stackoverflow.blog/2023/09/11/what-we-talk-about-when-we-talk-about-imposter-syndrome/) le relie à la spécialisation, à l’apprentissage permanent et à la vitesse d’évolution des outils ; il avertit aussi que toute insécurité ne doit pas être réduite à une défaillance psychologique individuelle.

Invoquer le syndrome de l’imposteur ne devrait cependant pas devenir une manière d’éviter le diagnostic technique.

La personne sous-estime parfois ses capacités. Parfois, une connaissance doit effectivement être récupérée. Les deux peuvent être vraies à la fois : l’entretien peut déclencher une interprétation dévastatrice de soi et signaler une lacune précise.

La réponse utile n’est ni l’autodestruction ni le déni. Elle consiste à rechercher ce qui s’est passé.

## Que faire après un échec

Étudier.

Non pas accumuler des réponses toutes faites ou mémoriser des définitions à réciter mécaniquement. Étudier signifie reconstruire et ordonner ce que nous savons, détecter ce que nous ignorons et pratiquer la manière dont nous devrons le démontrer.

### 1. Consigner l’entretien

Immédiatement après, il convient d’écrire tout ce dont nous nous souvenons :

- questions et questions complémentaires ;
- exercices ;
- erreurs ;
- moments de blocage ;
- concepts reconnus trop tard ;
- observations ou indices de l’intervieweur.

La mémoire réorganise rapidement l’expérience. Ce qui n’est pas consigné devient une impression vague : « j’ai mal réussi ».

### 2. Classer chaque difficulté

Pour chaque point, nous devons nous demander :

- Ignorais-je le sujet ?
- Ne le connaissais-je que de nom ?
- L’avais-je utilisé sans le comprendre ?
- Le comprenais-je sans pouvoir m’en souvenir ?
- Me manquait-il un exemple ?
- N’ai-je pas réussi à le communiquer ?
- Le format était-il le principal problème ?

Chaque cause exige un entraînement différent.

### 3. Reconstruire les connaissances

Pour chaque concept, nous devrions pouvoir expliquer au moins cinq choses :

1. Ce qu’il est.
2. Quel problème il résout.
3. Comment il fonctionne.
4. Quels avantages et coûts il présente.
5. Quand il ne convient pas de l’utiliser.

C’est la différence entre se souvenir d’une définition et construire un modèle mental.

### 4. Revenir au code

La théorie doit devenir une expérience observable.

Si nous étudions la gestion des erreurs, nous devons provoquer une erreur, la propager, la traiter et la tester. Si nous étudions les index, nous devons comparer des requêtes et analyser leur plan d’exécution. Si nous étudions les patrons de conception, nous devons trouver un problème qui justifie leur application.

Le code révèle tout ce qu’une explication semblait avoir résolu, mais que nous ne comprenions pas encore.

### 5. L’expliquer à voix haute

Lire une réponse crée un faux sentiment de maîtrise. Reconnaître une explication n’est pas la même chose que la produire.

Il faut fermer le support et répondre d’abord en trente secondes, développer ensuite un exemple et enfin résister aux questions complémentaires et aux solutions alternatives.

L’explication n’a pas besoin de sembler académique. Elle doit être précise et résister à une conversation.

### 6. Pratiquer le format exact

Un entretien conversationnel se prépare en répondant aux questions et aux questions complémentaires.

Le *live coding* se prépare en programmant avec une limite de temps tout en expliquant ses décisions.

Le *pair programming* se prépare en résolvant un problème avec une autre personne, en réfléchissant à voix haute et en recevant des suggestions.

La conception de systèmes se prépare en définissant les exigences, en dessinant des architectures et en défendant les compromis.

Un exercice à domicile se prépare en construisant de petits projets au périmètre contrôlé, avec des tests et de la documentation.

Il n’existe pas de pratique générique qui prépare aussi bien à toutes les modalités.

### 7. Retourner dans l’arène

Il n’est pas nécessaire d’attendre de se sentir entièrement prêt. Ce sentiment n’arrivera probablement jamais.

L’objectif est de se présenter au prochain entretien avec des connaissances mieux organisées, davantage de pratique et une interprétation moins catastrophique de l’erreur.

## Du verdict au programme de travail

Un entretien technique n’est pas une mesure parfaite. Il peut être mal conçu, utiliser des questions sans pertinence ou favoriser ceux qui se sont spécifiquement entraînés à ce format.

Mais même un entretien imparfait peut être utile.

Il peut montrer qu’il manque de la théorie. Que la pratique est devenue automatique. Qu’une technologie figure dans notre vocabulaire mais pas dans nos connaissances effectives. Que nous devons retrouver des fondements. Ou que nous savons travailler sans encore savoir exposer ce que nous faisons.

Rien de cela ne nous oblige à conclure : « Je suis un imposteur. »

La conclusion peut être beaucoup plus concrète :

« Je n’ai pas pu expliquer cela. »
« Je ne savais pas cela. »
« Je comprenais cela moins bien que je ne le pensais. »
« Ce format m’a bloqué. »
« Je dois étudier cela. »

Le mauvais entretien cesse alors d’être un verdict et devient un programme de travail.

Étudier. Réorganiser les connaissances pratiques. Revoir la théorie. Programmer. Expliquer. Simuler.

Et retourner dans l’arène.

## Références et lectures complémentaires

- Zahra Traboulsi, [« A taxonomy of technical interviews »](https://zahra.dev/blog/technical-interview-taxonomy/), 29 juillet 2024.
- Jonathan Fernández et Raul Oliver, Thoughtworks, [« What to expect from a pair programming interview »](https://www.thoughtworks.com/en-us/insights/blog/what-expect-pair-programming-interview), 9 juin 2020.
- Farhana, DEV Community, [« What I learned from failing my technical interviews »](https://dev.to/farhanaxmustafa/what-i-learned-from-failing-my-technical-interviews-276a), 17 décembre 2020.
- Stack Overflow, [« What we talk about when we talk about impostor syndrome »](https://stackoverflow.blog/2023/09/11/what-we-talk-about-when-we-talk-about-imposter-syndrome/), 11 septembre 2023.

<!-- ARTICLE_END -->
