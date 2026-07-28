const codeBottleneck = {
  id: 'code-is-no-longer-the-bottleneck',
  number: '02',
  datePublished: '2026-07-28',
  tags: ['AI', 'Architecture', 'Software Quality'],
  translations: {
    es: {
      slug: 'el-codigo-ya-no-es-el-cuello-de-botella',
      kicker: 'Ingeniería de software',
      cardCopete:
        'Cuando producir código es rápido, comprender el problema, decidir y validar se convierten en el verdadero trabajo.',
      title: 'El código ya no es el cuello de botella',
      copete:
        'Cuando el código puede producirse casi instantáneamente, escribirlo deja de ser la limitación central. El trabajo difícil se desplaza hacia comprender los problemas, definir límites, tomar decisiones, integrar sistemas y asumir la responsabilidad.',
      bajada:
        'El desarrollo asistido por IA cambia aquello que limita un proyecto de software. Producir una función, una prueba o un componente se vuelve más rápido, mientras que los requisitos, la arquitectura, la calidad de los datos, las restricciones operativas y la validación continúan siendo problemas profundamente humanos. Esta nota analiza por qué generar más código no implica necesariamente entregar mejor software.',
      sections: [
        {
          heading: 'Escribir nunca fue todo el trabajo',
          paragraphs: [
            'La programación visible suele concentrar la atención porque produce un artefacto concreto. Sin embargo, incluso antes de la IA, escribir instrucciones era sólo una parte del desarrollo. Gran parte del esfuerzo estaba en descubrir qué debía hacer el sistema, qué no debía hacer, cómo conviviría con procesos existentes y cómo se comprobaría que el resultado era aceptable.',
            'Las herramientas generativas vuelven esa diferencia imposible de ignorar. Si una función aparece en segundos, el tiempo ahorrado no elimina las preguntas que la preceden ni las consecuencias que la siguen. La velocidad desplaza el cuello de botella hacia actividades menos mecánicas y más dependientes de contexto, conversación, experiencia y responsabilidad.',
          ],
        },
        {
          heading: 'Definir bien el problema',
          paragraphs: [
            'Una especificación vaga puede producir código técnicamente correcto para el problema equivocado. Antes de pedir una solución, alguien debe identificar usuarios, objetivos, restricciones, excepciones y criterios de aceptación. También debe distinguir una necesidad real de una preferencia momentánea o de una solución heredada que ya no representa el negocio.',
            'La IA puede ayudar a formular preguntas y detectar ambigüedades, pero no posee el contexto institucional completo. No participa de reuniones, tensiones operativas ni acuerdos implícitos salvo que sean proporcionados. La calidad de la salida depende de la calidad del marco. Comprender el problema se vuelve más valioso cuando implementar una respuesta incorrecta cuesta muy poco.',
          ],
        },
        {
          heading: 'El dominio no cabe en un prompt',
          paragraphs: [
            'Los sistemas empresariales codifican reglas, excepciones, responsabilidades y vocabularios desarrollados durante años. Una palabra como cliente, operación o aprobación puede significar cosas diferentes según el proceso. Esa semántica determina modelos de datos, permisos, estados y límites transaccionales. No puede inferirse de manera segura a partir de una descripción superficial.',
            'El conocimiento del dominio se construye leyendo, observando, preguntando y validando con personas responsables. La IA puede organizar ese conocimiento y señalar contradicciones, pero no decidir qué interpretación compromete al negocio. Cuando producir código es barato, modelar mal el dominio puede generar rápidamente una gran cantidad de software coherente consigo mismo y desconectado de la realidad.',
          ],
        },
        {
          heading: 'Arquitectura significa elegir consecuencias',
          paragraphs: [
            'Una decisión arquitectónica distribuye costos en el tiempo. Elegir límites, contratos, almacenamiento, sincronía o despliegue afecta seguridad, rendimiento, operación y capacidad de cambio. La herramienta puede enumerar patrones y generar esqueletos, pero no conoce por sí sola qué riesgo es tolerable, qué equipo mantendrá la solución ni qué restricciones regulatorias existen.',
            'La experiencia permite reconocer cuándo una solución simple es suficiente y cuándo una complejidad adicional compra una capacidad necesaria. También ayuda a identificar decisiones reversibles y aquellas que conviene estudiar temprano. La IA acelera comparaciones; el juicio experimentado asigna peso a factores que no pueden reducirse a una lista genérica de ventajas y desventajas.',
          ],
        },
        {
          heading: 'Datos e integración resisten los atajos',
          paragraphs: [
            'Muchos proyectos fallan lejos del editor de código. Datos incompletos, identificadores inconsistentes, contratos ambiguos y sistemas externos inestables condicionan la solución. Un adaptador puede generarse rápido, pero todavía hay que definir idempotencia, timeouts, reintentos, reconciliación, compatibilidad y qué ocurre cuando sólo una parte de la operación se completa.',
            'La calidad de los datos tampoco mejora porque una consulta se escriba antes. Es necesario conocer procedencia, significado, frecuencia de actualización y reglas de corrección. Integrar implica negociar responsabilidades entre sistemas y equipos. Es un trabajo técnico y organizacional que requiere evidencia compartida, no sólo una implementación sintácticamente válida.',
          ],
        },
        {
          heading: 'Seguridad, despliegue y observabilidad',
          paragraphs: [
            'Una aplicación no está terminada cuando compila. Debe proteger secretos y datos, aplicar autorizaciones correctas, registrar eventos útiles y desplegarse de forma controlada. También necesita métricas, logs y trazas que permitan entender su comportamiento. Las configuraciones generadas pueden contener defaults inseguros o asumir una infraestructura distinta de la real.',
            'El despliegue agrega preguntas sobre rollback, migraciones, compatibilidad y capacidad. La observabilidad debe diseñarse alrededor de fallas y decisiones operativas, no añadirse como decoración. La IA puede preparar archivos y consultas, pero el equipo debe verificar que representen amenazas, procesos y límites concretos. La responsabilidad permanece donde existen consecuencias reales.',
          ],
        },
        {
          heading: 'Validar más rápido, no validar menos',
          paragraphs: [
            'Cuando aumenta la velocidad de producción, las pruebas y la revisión deben escalar con ella. La IA puede sugerir casos, generar fixtures y explicar un diff, pero una suite sólo es valiosa si expresa riesgos relevantes. Pasar pruebas débiles con más rapidez no mejora la confianza. Hace falta combinar pruebas unitarias, integración, contratos y observación según el sistema.',
            'La validación incluye además usabilidad, mantenibilidad y comportamiento bajo error. Un cambio puede cumplir requisitos locales y perjudicar otro flujo. Revisar exige comparar la propuesta con arquitectura, convenciones y expectativas del negocio. La productividad sostenible no es la cantidad aceptada por hora, sino la capacidad de entregar cambios comprensibles con evidencia proporcional.',
          ],
        },
        {
          heading: 'El nuevo cuello de botella es la responsabilidad',
          paragraphs: [
            'Mantenimiento y comunicación consumen gran parte de la vida de un sistema. Alguien debe explicar decisiones, coordinar cambios, responder incidentes y decidir cuándo retirar una solución. Generar código no resuelve desacuerdos entre áreas ni define prioridades. Incluso puede aumentar el volumen que un equipo deberá comprender durante años.',
            'La IA no elimina el cuello de botella; lo mueve hacia el juicio. Cuanto más barata sea la implementación, más valiosas serán la definición del problema, la arquitectura, la validación y la responsabilidad empresarial. La experiencia no pierde relevancia porque escribir sea más rápido. Se vuelve el mecanismo que convierte abundancia de opciones en software útil, seguro y mantenible.',
          ],
        },
      ],
    },
    en: {
      slug: 'code-is-no-longer-the-bottleneck',
      kicker: 'Software engineering',
      cardCopete:
        'When producing code is fast, understanding the problem, making decisions, and validating become the real work.',
      title: 'Code Is No Longer the Bottleneck',
      copete:
        'When code can be produced almost instantly, typing is no longer the central constraint. The difficult work moves toward understanding problems, defining boundaries, making decisions, integrating systems, and accepting responsibility.',
      bajada:
        'AI-assisted development changes what limits a software project. Producing a function, test, or component becomes faster, while requirements, architecture, data quality, operational constraints, and validation remain stubbornly human problems. This article explores why generating more code does not necessarily mean delivering better software.',
      sections: [
        {
          heading: 'Typing was never the whole job',
          paragraphs: [
            'Visible programming attracts attention because it produces a concrete artefact. Yet even before AI, writing instructions was only one part of development. Much of the effort involved discovering what a system should do, what it must not do, how it would coexist with existing processes, and how anyone could prove that the result was acceptable.',
            'Generative tools make that distinction impossible to ignore. If a function appears in seconds, the saved time does not remove the questions that precede it or the consequences that follow. Speed moves the bottleneck toward activities that are less mechanical and more dependent on context, conversation, experience, and accountability.',
          ],
        },
        {
          heading: 'Define the problem well',
          paragraphs: [
            'A vague specification can produce technically correct code for the wrong problem. Before requesting a solution, someone must identify users, objectives, constraints, exceptions, and acceptance criteria. They must also distinguish a real need from a temporary preference or an inherited solution that no longer represents the business.',
            'AI can help formulate questions and expose ambiguity, but it does not possess complete institutional context. It does not attend meetings, experience operational tensions, or know implicit agreements unless they are supplied. Output quality depends on framing quality. Understanding the problem becomes more valuable when implementing a wrong answer is extremely cheap.',
          ],
        },
        {
          heading: 'The domain does not fit inside a prompt',
          paragraphs: [
            'Enterprise systems encode rules, exceptions, responsibilities, and vocabularies developed over years. A word such as customer, transaction, or approval can mean different things in different processes. That semantics determines data models, permissions, states, and transactional boundaries. It cannot safely be inferred from a superficial description.',
            'Domain knowledge is built by reading, observing, asking, and validating with accountable people. AI can organise that knowledge and highlight contradictions, but it cannot decide which interpretation commits the business. When code is inexpensive, a badly modelled domain can quickly produce a large amount of software that is internally coherent and disconnected from reality.',
          ],
        },
        {
          heading: 'Architecture means choosing consequences',
          paragraphs: [
            'An architectural decision distributes cost over time. Choosing boundaries, contracts, storage, synchrony, or deployment affects security, performance, operations, and capacity for change. A tool can list patterns and generate skeletons, but it does not independently know which risk is tolerable, which team will maintain the solution, or which regulatory constraints apply.',
            'Experience helps identify when a simple solution is sufficient and when added complexity purchases a necessary capability. It also distinguishes reversible choices from decisions worth studying early. AI accelerates comparison; experienced judgement assigns weight to factors that cannot be reduced to a generic list of advantages and disadvantages.',
          ],
        },
        {
          heading: 'Data and integration resist shortcuts',
          paragraphs: [
            'Many projects fail far from the code editor. Incomplete data, inconsistent identifiers, ambiguous contracts, and unstable external systems shape the solution. An adapter may be generated quickly, but teams must still define idempotency, timeouts, retries, reconciliation, compatibility, and what happens when only part of an operation completes.',
            'Data quality does not improve because a query is written sooner. Provenance, meaning, update frequency, and correction rules still matter. Integration means negotiating responsibilities between systems and teams. It is technical and organisational work that requires shared evidence, not merely an implementation that is syntactically valid.',
          ],
        },
        {
          heading: 'Security, deployment, and observability',
          paragraphs: [
            'An application is not complete when it compiles. It must protect secrets and data, enforce correct authorisation, record useful events, and deploy in a controlled way. It also needs metrics, logs, and traces that reveal behaviour. Generated configurations can contain insecure defaults or assume infrastructure different from the real environment.',
            'Deployment adds questions about rollback, migrations, compatibility, and capacity. Observability must be designed around failures and operational decisions rather than attached as decoration. AI can prepare files and queries, but the team must verify that they represent concrete threats, processes, and limits. Accountability remains where consequences are real.',
          ],
        },
        {
          heading: 'Validate faster, not less',
          paragraphs: [
            'When production speed increases, testing and review must scale with it. AI can suggest cases, generate fixtures, and explain a diff, but a suite is valuable only when it expresses relevant risks. Passing weak tests more quickly does not improve confidence. Unit, integration, contract, and observational evidence must be combined according to the system.',
            'Validation also includes usability, maintainability, and behaviour under failure. A change may satisfy a local requirement while damaging another flow. Review means comparing the proposal with architecture, conventions, and business expectations. Sustainable productivity is not the amount accepted per hour, but the ability to deliver understandable changes with proportionate evidence.',
          ],
        },
        {
          heading: 'The new bottleneck is accountability',
          paragraphs: [
            'Maintenance and communication consume much of a system’s life. Someone must explain decisions, coordinate changes, respond to incidents, and decide when a solution should be retired. Generating code does not resolve disagreement between departments or set priorities. It may even increase the volume a team must understand for years.',
            'AI does not eliminate the bottleneck; it moves it toward judgement. The cheaper implementation becomes, the more valuable problem definition, architecture, validation, and business accountability become. Experience does not lose relevance because typing is faster. It becomes the mechanism that turns an abundance of options into useful, secure, and maintainable software.',
          ],
        },
      ],
    },
    fr: {
      slug: 'le-code-n-est-plus-le-goulot',
      kicker: 'Ingénierie logicielle',
      cardCopete:
        'Lorsque produire du code devient rapide, comprendre le problème, décider et valider constituent le véritable travail.',
      title: 'Le code n’est plus le principal goulot d’étranglement',
      copete:
        'Lorsque le code peut être produit presque instantanément, son écriture cesse d’être la contrainte principale. Le travail difficile se déplace vers la compréhension des problèmes, la définition des limites, la prise de décision, l’intégration et la responsabilité.',
      bajada:
        'Le développement assisté par l’IA modifie les véritables limites d’un projet logiciel. Produire une fonction, un test ou un composant devient plus rapide, tandis que les exigences, l’architecture, la qualité des données, les contraintes opérationnelles et la validation restent profondément humaines. Cet article explique pourquoi produire davantage de code ne signifie pas nécessairement livrer un meilleur logiciel.',
      sections: [
        {
          heading: 'Écrire n’a jamais constitué tout le travail',
          paragraphs: [
            'La programmation visible attire l’attention parce qu’elle produit un artefact concret. Pourtant, même avant l’IA, écrire des instructions ne représentait qu’une partie du développement. Une grande part de l’effort consistait à découvrir ce que le système devait faire, ce qu’il ne devait pas faire, comment il coexisterait avec les processus existants et comment prouver que le résultat était acceptable.',
            'Les outils génératifs rendent cette différence impossible à ignorer. Si une fonction apparaît en quelques secondes, le temps gagné ne supprime ni les questions précédentes ni les conséquences suivantes. La vitesse déplace le goulot vers des activités moins mécaniques et davantage dépendantes du contexte, du dialogue, de l’expérience et de la responsabilité.',
          ],
        },
        {
          heading: 'Bien définir le problème',
          paragraphs: [
            'Une spécification vague peut produire un code techniquement correct pour un mauvais problème. Avant de demander une solution, il faut identifier les utilisateurs, les objectifs, les contraintes, les exceptions et les critères d’acceptation. Il faut aussi distinguer un besoin réel d’une préférence passagère ou d’une solution héritée qui ne représente plus le métier.',
            'L’IA peut aider à formuler des questions et révéler des ambiguïtés, mais elle ne possède pas tout le contexte institutionnel. Elle n’assiste pas aux réunions et ne connaît ni les tensions opérationnelles ni les accords implicites, sauf s’ils lui sont fournis. Comprendre le problème devient plus précieux lorsque mettre en œuvre une mauvaise réponse coûte très peu.',
          ],
        },
        {
          heading: 'Le domaine ne tient pas dans un prompt',
          paragraphs: [
            'Les systèmes d’entreprise encodent des règles, exceptions, responsabilités et vocabulaires développés pendant des années. Un terme comme client, opération ou approbation peut changer de sens selon le processus. Cette sémantique détermine les modèles de données, les autorisations, les états et les limites transactionnelles. Une description superficielle ne permet pas de la déduire sûrement.',
            'La connaissance du domaine se construit en lisant, observant, questionnant et validant avec les personnes responsables. L’IA peut organiser ce savoir et signaler des contradictions, mais elle ne peut décider quelle interprétation engage l’entreprise. Lorsque le code est peu coûteux, un domaine mal modélisé peut produire rapidement beaucoup de logiciel cohérent mais déconnecté de la réalité.',
          ],
        },
        {
          heading: 'L’architecture consiste à choisir des conséquences',
          paragraphs: [
            'Une décision architecturale répartit les coûts dans le temps. Choisir des limites, contrats, stockages, communications synchrones ou modes de déploiement affecte sécurité, performance, exploitation et capacité d’évolution. Un outil peut présenter des modèles et générer des structures, sans savoir seul quel risque est tolérable, quelle équipe assurera la maintenance ni quelles contraintes réglementaires existent.',
            'L’expérience aide à reconnaître quand une solution simple suffit et quand une complexité supplémentaire achète une capacité nécessaire. Elle distingue aussi les choix réversibles des décisions à étudier tôt. L’IA accélère les comparaisons ; le jugement expérimenté pondère des facteurs qui ne se réduisent pas à une liste générique d’avantages et d’inconvénients.',
          ],
        },
        {
          heading: 'Les données et l’intégration résistent aux raccourcis',
          paragraphs: [
            'De nombreux projets échouent loin de l’éditeur. Données incomplètes, identifiants incohérents, contrats ambigus et systèmes externes instables déterminent la solution. Un adaptateur peut être généré vite, mais il faut encore définir idempotence, délais, nouvelles tentatives, réconciliation, compatibilité et comportement lorsqu’une partie seulement de l’opération aboutit.',
            'La qualité des données ne progresse pas parce qu’une requête est écrite plus tôt. Il faut connaître leur origine, leur sens, leur fréquence de mise à jour et leurs règles de correction. Intégrer signifie négocier les responsabilités entre systèmes et équipes. Ce travail technique et organisationnel exige des preuves partagées, pas seulement une implémentation syntaxiquement valide.',
          ],
        },
        {
          heading: 'Sécurité, déploiement et observabilité',
          paragraphs: [
            'Une application n’est pas terminée lorsqu’elle compile. Elle doit protéger secrets et données, appliquer les bonnes autorisations, enregistrer des événements utiles et être déployée de manière contrôlée. Elle a aussi besoin de métriques, logs et traces qui rendent son comportement compréhensible. Les configurations générées peuvent contenir des choix peu sûrs ou supposer une autre infrastructure.',
            'Le déploiement ajoute les questions de retour arrière, migration, compatibilité et capacité. L’observabilité se conçoit autour des défaillances et décisions opérationnelles, pas comme décoration. L’IA peut préparer fichiers et requêtes, mais l’équipe doit vérifier qu’ils représentent les menaces, processus et limites réels. La responsabilité demeure là où les conséquences existent.',
          ],
        },
        {
          heading: 'Valider plus vite, pas moins',
          paragraphs: [
            'Lorsque la vitesse de production augmente, les tests et la révision doivent suivre. L’IA peut suggérer des cas, générer des jeux de données et expliquer une différence, mais une suite n’est utile que si elle exprime les risques pertinents. Faire passer plus vite des tests faibles n’améliore pas la confiance. Il faut combiner preuves unitaires, intégration, contrats et observation.',
            'La validation couvre aussi l’utilisabilité, la maintenabilité et le comportement en échec. Une modification peut satisfaire un besoin local et détériorer un autre flux. Réviser signifie confronter la proposition à l’architecture, aux conventions et aux attentes métier. La productivité durable consiste à livrer des changements compréhensibles avec des preuves proportionnées.',
          ],
        },
        {
          heading: 'Le nouveau goulot est la responsabilité',
          paragraphs: [
            'Maintenance et communication occupent une grande partie de la vie d’un système. Il faut expliquer les décisions, coordonner les changements, répondre aux incidents et choisir quand retirer une solution. Générer du code ne résout pas les désaccords entre services et ne fixe pas les priorités. Cela peut même augmenter le volume que l’équipe devra comprendre pendant des années.',
            'L’IA ne supprime pas le goulot ; elle le déplace vers le jugement. Plus l’implémentation devient abordable, plus la définition du problème, l’architecture, la validation et la responsabilité métier prennent de la valeur. L’expérience ne perd pas sa pertinence parce que l’écriture accélère. Elle transforme l’abondance d’options en logiciel utile, sûr et maintenable.',
          ],
        },
      ],
    },
  },
}

export default codeBottleneck
