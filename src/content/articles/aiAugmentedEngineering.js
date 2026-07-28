const aiAugmentedEngineering = {
  id: 'ai-augmented-engineering',
  number: '01',
  datePublished: '2026-07-28',
  tags: ['AI', 'Developer Productivity', 'Software Development'],
  translations: {
    es: {
      slug: 'ingenieria-aumentada-por-ia',
      kicker: 'IA y desarrollo de software',
      cardCopete:
        'La IA acelera el desarrollo, pero la productividad sólo mejora cuando la comprensión, la revisión y la responsabilidad siguen siendo humanas.',
      title:
        'Ingeniería aumentada por IA: productividad del desarrollador sin renunciar al criterio',
      copete:
        'La inteligencia artificial puede comprimir horas de exploración, implementación y pruebas en minutos. Sin embargo, la verdadera mejora de productividad aparece únicamente cuando el desarrollador sigue siendo responsable de comprender, revisar y validar el resultado.',
      bajada:
        'La IA modifica la economía y el ritmo del desarrollo de software. Puede acelerar la investigación, la programación, la refactorización, las pruebas, la depuración y la documentación, pero también puede multiplicar errores a la misma velocidad. Esta nota analiza dónde aparecen las mejoras reales, dónde surgen los riesgos y por qué el criterio humano sigue siendo el factor decisivo.',
      sections: [
        {
          heading: 'La productividad cambia de forma, no de dueño',
          paragraphs: [
            'Durante décadas, muchas mejoras de productividad llegaron mediante lenguajes más expresivos, bibliotecas, frameworks, automatización de pruebas y mejores herramientas de despliegue. La inteligencia artificial continúa esa historia, pero con una diferencia importante: puede intervenir en casi todas las etapas del trabajo intelectual, desde formular una pregunta hasta proponer una implementación completa.',
            'Esa amplitud crea una impresión de autonomía que conviene examinar. Una respuesta rápida no transforma automáticamente una tarea incierta en una solución correcta. El desarrollador todavía debe definir el objetivo, reconocer restricciones, evaluar alternativas y decidir qué evidencia necesita antes de aceptar un resultado. La herramienta acelera la actividad; la responsabilidad sobre el producto permanece humana.',
          ],
        },
        {
          heading: 'Explorar sin abandonar el contexto',
          paragraphs: [
            'La investigación técnica es uno de los usos más valiosos. Una conversación bien planteada puede comparar enfoques, explicar un concepto desconocido, resumir documentación y sugerir preguntas para una prueba de concepto. También reduce cambios de contexto: en lugar de alternar entre búsquedas, ejemplos aislados y notas, el desarrollador puede mantener un hilo de exploración coherente.',
            'Pero la explicación generada debe contrastarse con documentación oficial, código real y restricciones del proyecto. Una API inexistente, una versión incompatible o una premisa equivocada pueden producir una respuesta convincente y falsa. La velocidad sirve cuando acorta el camino hacia evidencia verificable, no cuando reemplaza esa evidencia por confianza retórica.',
          ],
        },
        {
          heading: 'Generar código es apenas el comienzo',
          paragraphs: [
            'La IA puede construir rápidamente una función, un adaptador, una prueba o la estructura inicial de un componente. Esto resulta especialmente útil para tareas repetitivas, prototipos y alternativas que sería costoso escribir sólo para comparar. También permite que una persona experta dedique menos energía mecánica a sintaxis conocida y más a decisiones con consecuencias duraderas.',
            'El riesgo aparece cuando la cantidad producida se confunde con progreso. El código generado puede duplicar abstracciones, introducir dependencias innecesarias o resolver un caso ideal mientras ignora errores, concurrencia, límites de datos y comportamiento operativo. Agregar cientos de líneas en minutos no reduce el costo futuro si esas líneas son difíciles de entender, probar, observar o eliminar.',
          ],
        },
        {
          heading: 'Comprender antes de modificar',
          paragraphs: [
            'En bases de código desconocidas, la IA puede explicar flujos, localizar responsabilidades y formular hipótesis sobre una falla. Esa capacidad reduce el tiempo inicial de orientación y ayuda a relacionar archivos, contratos y capas. También puede traducir una implementación compleja a un modelo mental más accesible para iniciar una revisión.',
            'Sin embargo, una explicación construida a partir de contexto parcial puede omitir convenciones internas o efectos laterales. Antes de refactorizar, el desarrollador debe leer las rutas relevantes, ejecutar pruebas y observar el comportamiento existente. La mejor asistencia no sustituye la comprensión; ayuda a construirla más rápido y a hacer explícitas las preguntas que todavía no tienen respuesta.',
          ],
        },
        {
          heading: 'Refactorizar con una red de seguridad',
          paragraphs: [
            'Las propuestas de refactorización son útiles cuando existe un objetivo claro: reducir duplicación, separar responsabilidades, simplificar una interfaz o mejorar legibilidad. La IA puede mostrar varias formas de transformación y preparar cambios mecánicos consistentes. Con pruebas de caracterización, pequeños commits y revisión, esto acelera mejoras que antes competían con tareas urgentes.',
            'Sin esa red, una transformación elegante puede alterar detalles que sostienen reglas de negocio. Un nombre más limpio no garantiza semántica equivalente; una abstracción general puede borrar una excepción importante. Conviene limitar el alcance, comparar entradas y salidas, revisar diffs y verificar compatibilidad. La calidad del refactor depende más del criterio de aceptación que de la velocidad de edición.',
          ],
        },
        {
          heading: 'Pruebas y depuración con hipótesis verificables',
          paragraphs: [
            'La IA puede proponer casos límite, generar datos de prueba y señalar caminos que una suite no cubre. En depuración, ayuda a organizar síntomas, construir hipótesis y diseñar experimentos. Esa colaboración es potente porque convierte una investigación difusa en una secuencia de preguntas que pueden confirmarse o descartarse.',
            'También puede inventar causas plausibles, recomendar configuraciones inseguras o ajustar una prueba para que pase sin corregir el defecto. Por eso cada hipótesis necesita evidencia: logs, trazas, reproducciones, inspección de estado y pruebas que fallen antes de la corrección. El objetivo no es obtener una explicación rápidamente, sino aislar el mecanismo real del problema.',
          ],
        },
        {
          heading: 'Documentar decisiones, no decorar resultados',
          paragraphs: [
            'La documentación asistida reduce el esfuerzo de producir referencias iniciales, ejemplos de uso y descripciones de componentes. Puede convertir notas dispersas en una estructura legible y detectar términos inconsistentes. Esto libera tiempo para documentar lo verdaderamente valioso: por qué se tomó una decisión, qué alternativas se rechazaron y qué limitaciones permanecen.',
            'Una descripción generada sin revisión puede afirmar comportamientos que el sistema no ofrece o repetir el código sin aportar contexto. La documentación debe verificarse como cualquier otra entrega y actualizarse junto con la implementación. Su función es sostener decisiones futuras, no crear una apariencia de completitud.',
          ],
        },
        {
          heading: 'La confiabilidad sigue siendo una obligación humana',
          paragraphs: [
            'Los mayores riesgos no son sólo las alucinaciones visibles. También existen defaults inseguros, supuestos incorrectos sobre datos, casos límite ocultos y soluciones que funcionan localmente pero fallan bajo carga o integración. La IA puede multiplicar tanto una buena práctica como un error. Cuanto mayor es la velocidad de producción, más importante resulta una disciplina de revisión proporcional.',
            'Producir código y producir software confiable son actividades distintas. La segunda incluye comprender el problema, validar seguridad, probar fallas, observar producción, mantener contratos y responder por consecuencias. La inteligencia artificial amplía la capacidad del desarrollador, pero no puede asumir esa responsabilidad profesional. La mejora real aparece cuando velocidad y juicio trabajan juntos.',
          ],
        },
      ],
    },
    en: {
      slug: 'ai-augmented-engineering',
      kicker: 'AI and software development',
      cardCopete:
        'AI accelerates development, but productivity improves only when understanding, review, and accountability remain human.',
      title:
        'AI-Augmented Engineering: Developer Productivity Without Surrendering Judgment',
      copete:
        'Artificial intelligence can compress hours of exploration, implementation, and testing into minutes. The real productivity gain, however, appears only when the developer remains responsible for understanding, reviewing, and validating the result.',
      bajada:
        'AI changes the economics and rhythm of software development. It can accelerate research, coding, refactoring, testing, debugging, and documentation, but it can also multiply errors at the same speed. This article examines where the productivity gains are real, where the risks appear, and why human judgement remains the decisive factor.',
      sections: [
        {
          heading: 'Productivity changes form, not ownership',
          paragraphs: [
            'For decades, productivity improved through more expressive languages, libraries, frameworks, test automation, and better deployment tools. Artificial intelligence continues that history with an important difference: it can participate in almost every stage of intellectual work, from framing a question to proposing a complete implementation.',
            'That breadth creates an impression of autonomy that deserves scrutiny. A fast answer does not automatically turn an uncertain task into a correct solution. The developer must still define the objective, recognise constraints, evaluate alternatives, and decide what evidence is needed before accepting a result. The tool accelerates activity; responsibility for the product remains human.',
          ],
        },
        {
          heading: 'Explore without abandoning context',
          paragraphs: [
            'Technical research is one of the most valuable uses. A well-framed conversation can compare approaches, explain an unfamiliar concept, summarise documentation, and suggest questions for a proof of concept. It also reduces context switching: instead of moving among searches, isolated examples, and notes, the developer can maintain a coherent line of exploration.',
            'Generated explanations must still be checked against official documentation, real code, and project constraints. A nonexistent API, incompatible version, or mistaken premise can produce an answer that is persuasive and false. Speed is valuable when it shortens the path to verifiable evidence, not when it replaces evidence with rhetorical confidence.',
          ],
        },
        {
          heading: 'Generating code is only the beginning',
          paragraphs: [
            'AI can quickly construct a function, adapter, test, or initial component structure. This is especially useful for repetitive work, prototypes, and alternatives that would be expensive to write only for comparison. It also lets an experienced developer spend less mechanical effort on familiar syntax and more attention on decisions with lasting consequences.',
            'Risk appears when output volume is mistaken for progress. Generated code can duplicate abstractions, introduce unnecessary dependencies, or solve an ideal case while ignoring errors, concurrency, data boundaries, and operational behaviour. Adding hundreds of lines in minutes does not reduce future cost when those lines are difficult to understand, test, observe, or remove.',
          ],
        },
        {
          heading: 'Understand before changing',
          paragraphs: [
            'In unfamiliar codebases, AI can explain flows, locate responsibilities, and formulate hypotheses about a failure. That ability reduces initial orientation time and helps connect files, contracts, and layers. It can also translate a complex implementation into a more accessible mental model from which a review can begin.',
            'An explanation built from partial context may omit internal conventions or side effects. Before refactoring, the developer must read the relevant paths, run tests, and observe existing behaviour. The best assistance does not replace understanding; it helps build understanding faster and makes explicit the questions that still lack answers.',
          ],
        },
        {
          heading: 'Refactor with a safety net',
          paragraphs: [
            'Refactoring proposals are useful when the objective is clear: reduce duplication, separate responsibilities, simplify an interface, or improve readability. AI can present several transformations and prepare consistent mechanical changes. With characterisation tests, small commits, and review, this accelerates improvements that previously competed with urgent work.',
            'Without that safety net, an elegant transformation may alter details that support business rules. A cleaner name does not guarantee equivalent semantics, and a general abstraction can erase an important exception. Scope should remain limited, inputs and outputs compared, diffs reviewed, and compatibility verified. Refactoring quality depends more on acceptance criteria than editing speed.',
          ],
        },
        {
          heading: 'Testing and debugging through verifiable hypotheses',
          paragraphs: [
            'AI can propose edge cases, generate test data, and identify paths a suite does not cover. During debugging, it helps organise symptoms, build hypotheses, and design experiments. This collaboration is powerful because it turns a diffuse investigation into a sequence of questions that can be confirmed or rejected.',
            'It can also invent plausible causes, recommend insecure configurations, or change a test so that it passes without correcting the defect. Every hypothesis therefore needs evidence: logs, traces, reproductions, state inspection, and a test that fails before the correction. The goal is not to obtain an explanation quickly, but to isolate the real mechanism.',
          ],
        },
        {
          heading: 'Document decisions, not decorative completeness',
          paragraphs: [
            'Assisted documentation reduces the effort required to produce initial references, usage examples, and component descriptions. It can turn scattered notes into a readable structure and detect inconsistent terminology. This frees time to document what is genuinely valuable: why a decision was made, which alternatives were rejected, and which limitations remain.',
            'An unreviewed description can claim behaviour the system does not provide or merely repeat code without adding context. Documentation must be verified like any other delivery and updated with the implementation. Its purpose is to support future decisions, not to create an appearance of completeness.',
          ],
        },
        {
          heading: 'Reliability remains a human obligation',
          paragraphs: [
            'The largest risks are not only visible hallucinations. They also include insecure defaults, incorrect assumptions about data, hidden edge cases, and solutions that work locally but fail under load or integration. AI can multiply a sound practice or a mistake. The faster production becomes, the more important proportional review discipline is.',
            'Producing code and producing reliable software are different activities. The second includes understanding the problem, validating security, testing failure, observing production, maintaining contracts, and answering for consequences. Artificial intelligence expands a developer’s capacity, but it cannot assume that professional accountability. Real improvement appears when speed and judgement work together.',
          ],
        },
      ],
    },
    fr: {
      slug: 'ingenierie-augmentee-par-ia',
      kicker: 'IA et développement logiciel',
      cardCopete:
        'L’IA accélère le développement, mais la productivité ne progresse que si compréhension, révision et responsabilité restent humaines.',
      title:
        'Ingénierie augmentée par l’IA : améliorer la productivité sans renoncer au jugement',
      copete:
        'L’intelligence artificielle peut réduire à quelques minutes des heures d’exploration, d’implémentation et de tests. Le véritable gain de productivité n’apparaît toutefois que lorsque le développeur reste responsable de la compréhension, de la révision et de la validation du résultat.',
      bajada:
        'L’IA transforme l’économie et le rythme du développement logiciel. Elle peut accélérer la recherche, la programmation, la refactorisation, les tests, le débogage et la documentation, mais elle peut également multiplier les erreurs à la même vitesse. Cet article examine les gains réels, les risques et le rôle décisif du jugement humain.',
      sections: [
        {
          heading: 'La productivité change de forme, pas de responsable',
          paragraphs: [
            'Depuis des décennies, la productivité progresse grâce à des langages plus expressifs, aux bibliothèques, aux frameworks, à l’automatisation des tests et à de meilleurs outils de déploiement. L’intelligence artificielle prolonge cette histoire avec une différence importante : elle peut intervenir dans presque toutes les étapes du travail intellectuel, de la formulation d’une question à une implémentation complète.',
            'Cette portée donne une impression d’autonomie qu’il faut examiner. Une réponse rapide ne transforme pas automatiquement une tâche incertaine en solution correcte. Le développeur doit toujours définir l’objectif, reconnaître les contraintes, évaluer les options et décider quelles preuves sont nécessaires. L’outil accélère l’activité ; la responsabilité du produit reste humaine.',
          ],
        },
        {
          heading: 'Explorer sans perdre le contexte',
          paragraphs: [
            'La recherche technique constitue l’un des usages les plus précieux. Une conversation bien cadrée peut comparer des approches, expliquer un concept inconnu, résumer une documentation et proposer des questions pour une preuve de concept. Elle réduit aussi les changements de contexte en conservant un fil d’exploration cohérent.',
            'Les explications générées doivent néanmoins être confrontées à la documentation officielle, au code réel et aux contraintes du projet. Une API inexistante, une version incompatible ou une prémisse erronée peut produire une réponse convaincante mais fausse. La vitesse est utile lorsqu’elle raccourcit le chemin vers des preuves vérifiables, pas lorsqu’elle les remplace.',
          ],
        },
        {
          heading: 'Générer du code n’est que le début',
          paragraphs: [
            'L’IA peut construire rapidement une fonction, un adaptateur, un test ou la structure initiale d’un composant. Elle est particulièrement utile pour les tâches répétitives, les prototypes et les variantes qu’il serait coûteux d’écrire uniquement pour les comparer. Une personne expérimentée peut ainsi consacrer moins d’effort mécanique à la syntaxe et davantage aux décisions durables.',
            'Le risque apparaît lorsque le volume produit est confondu avec le progrès. Le code généré peut dupliquer des abstractions, ajouter des dépendances inutiles ou traiter un cas idéal en ignorant erreurs, concurrence, limites des données et comportement opérationnel. Des centaines de lignes créées en quelques minutes n’abaissent pas le coût futur si elles restent difficiles à comprendre, tester, observer ou supprimer.',
          ],
        },
        {
          heading: 'Comprendre avant de modifier',
          paragraphs: [
            'Dans une base de code inconnue, l’IA peut expliquer les flux, situer les responsabilités et formuler des hypothèses sur une défaillance. Cette capacité réduit le temps d’orientation et aide à relier fichiers, contrats et couches. Elle peut aussi traduire une implémentation complexe en modèle mental plus accessible pour commencer une révision.',
            'Une explication construite à partir d’un contexte partiel peut omettre des conventions internes ou des effets secondaires. Avant toute refactorisation, le développeur doit lire les chemins concernés, exécuter les tests et observer le comportement existant. La meilleure assistance ne remplace pas la compréhension ; elle aide à la construire plus vite.',
          ],
        },
        {
          heading: 'Refactoriser avec un filet de sécurité',
          paragraphs: [
            'Les propositions de refactorisation sont utiles lorsque l’objectif est clair : réduire la duplication, séparer les responsabilités, simplifier une interface ou améliorer la lisibilité. L’IA peut montrer plusieurs transformations et préparer des changements mécaniques cohérents. Avec des tests de caractérisation, de petites étapes et une révision, elle accélère des améliorations souvent repoussées.',
            'Sans ce filet, une transformation élégante peut modifier des détails qui soutiennent les règles métier. Un nom plus clair ne garantit pas une sémantique équivalente, et une abstraction générale peut effacer une exception importante. Il faut limiter la portée, comparer entrées et sorties, examiner les différences et vérifier la compatibilité.',
          ],
        },
        {
          heading: 'Tester et déboguer avec des hypothèses vérifiables',
          paragraphs: [
            'L’IA peut proposer des cas limites, générer des données de test et signaler des chemins non couverts. Pendant le débogage, elle aide à organiser les symptômes, construire des hypothèses et concevoir des expériences. Cette collaboration transforme une investigation diffuse en questions qui peuvent être confirmées ou rejetées.',
            'Elle peut aussi inventer des causes plausibles, recommander des configurations peu sûres ou modifier un test pour le faire passer sans corriger le défaut. Chaque hypothèse exige donc des preuves : logs, traces, reproduction, inspection de l’état et test en échec avant la correction. Le but est d’isoler le mécanisme réel, pas seulement d’obtenir vite une explication.',
          ],
        },
        {
          heading: 'Documenter les décisions plutôt que l’apparence',
          paragraphs: [
            'La documentation assistée réduit l’effort nécessaire pour produire des références initiales, des exemples d’usage et des descriptions de composants. Elle transforme des notes dispersées en structure lisible et repère les termes incohérents. Du temps est ainsi libéré pour expliquer pourquoi une décision a été prise, quelles options ont été écartées et quelles limites subsistent.',
            'Une description non révisée peut attribuer au système un comportement inexistant ou répéter le code sans fournir de contexte. La documentation doit être vérifiée comme toute autre livraison et évoluer avec l’implémentation. Sa fonction est de soutenir les décisions futures, pas de créer une apparence de complétude.',
          ],
        },
        {
          heading: 'La fiabilité reste une obligation humaine',
          paragraphs: [
            'Les principaux risques ne se limitent pas aux hallucinations visibles. Ils incluent aussi des choix par défaut peu sûrs, des hypothèses erronées sur les données, des cas limites cachés et des solutions valides localement mais fragiles sous charge ou en intégration. L’IA peut multiplier une bonne pratique comme une erreur.',
            'Produire du code et produire un logiciel fiable sont deux activités différentes. La seconde impose de comprendre le problème, valider la sécurité, tester les défaillances, observer la production, maintenir les contrats et répondre des conséquences. L’intelligence artificielle augmente la capacité du développeur, mais ne peut assumer cette responsabilité professionnelle. Le progrès réel associe vitesse et jugement.',
          ],
        },
      ],
    },
  },
}

export default aiAugmentedEngineering
