const microservices = {
  id: 'microservices-problems-and-complexity',
  number: '03',
  datePublished: '2026-07-28',
  tags: ['Microservices', 'Architecture', 'Distributed Systems'],
  translations: {
    es: {
      slug: 'microservicios-cuando-resuelven-problemas',
      kicker: 'AI and development',
      cardCopete:
        'Los microservicios aportan valor cuando resuelven límites reales, no cuando solamente distribuyen la complejidad.',
      title: 'Microservicios: cuándo resuelven problemas y cuándo los multiplican',
      copete:
        'Los microservicios pueden aportar autonomía, escalabilidad y responsabilidades más claras. También pueden transformar una aplicación comprensible en una red de despliegues, contratos, fallos y dependencias operativas.',
      bajada:
        'Los microservicios no constituyen automáticamente una arquitectura más avanzada. Su valor depende de los límites organizacionales, las necesidades de despliegue, la escala, la autonomía de los equipos y la madurez operativa. Esta nota examina cuándo distribuir un sistema resuelve un problema real y cuándo solamente distribuye la complejidad.',
      sections: [
        {
          heading: 'Un microservicio es una frontera operativa',
          paragraphs: [
            'Un microservicio no es simplemente una clase grande convertida en aplicación pequeña. Es una capacidad delimitada que puede evolucionar y desplegarse con independencia razonable, posee contratos explícitos y tiene responsables claros. Esa independencia incluye código, datos, observabilidad, seguridad y operación. Si cada cambio exige coordinar todo el sistema, la separación es principalmente visual.',
            'El tamaño en líneas no define el límite. Un servicio puede ser pequeño y estar mal aislado, o más amplio y representar un contexto coherente. La pregunta útil es qué decisión puede tomar de forma autónoma y qué conocimiento protege. Sin una frontera de dominio reconocible, dividir agrega comunicación sin reducir acoplamiento.',
          ],
        },
        {
          heading: 'Por qué los equipos los eligen',
          paragraphs: [
            'Las razones legítimas incluyen despliegues independientes, autonomía de equipos, necesidades distintas de escalado y ritmos de cambio diferentes. Una capacidad con carga particular puede escalar sin replicar toda la aplicación. Un equipo puede entregar una mejora sin esperar una ventana coordinada, siempre que conserve contratos compatibles y responsabilidad operativa.',
            'También existen motivos menos sólidos: seguir una tendencia, imitar una empresa con otra escala o suponer que más servicios significan mayor modernidad. La arquitectura debe responder a una presión concreta. Si el problema no requiere independencia de despliegue, propiedad separada o aislamiento de carga, la distribución puede comprar costos sin aportar una capacidad útil.',
          ],
        },
        {
          heading: 'Los contextos delimitados preceden a la red',
          paragraphs: [
            'Los bounded contexts ayudan a separar modelos y vocabularios que no deben confundirse. Son una herramienta de diseño de dominio, no una instrucción automática para crear procesos remotos. Primero conviene identificar responsabilidades, dependencias y lenguaje. Después puede decidirse si ese límite necesita convertirse en una unidad desplegable independiente.',
            'Separar demasiado temprano fija hipótesis que todavía no fueron aprendidas. Una frontera equivocada produce llamadas frecuentes, duplicación de datos y cambios coordinados. Un monolito modular permite experimentar con límites dentro de un despliegue único. Cuando esos módulos demuestran autonomía real, extraer alguno puede ser una evolución, no una apuesta inicial.',
          ],
        },
        {
          heading: 'La comunicación distribuida puede fallar',
          paragraphs: [
            'Una llamada local suele ser rápida y falla de manera inmediata. Una llamada de red agrega latencia, timeouts, pérdida de mensajes, reintentos y respuestas parciales. Cada dependencia remota amplía los estados que el sistema debe manejar. Diseñar microservicios significa aceptar que otro componente puede estar lento, inaccesible o ejecutando una versión diferente.',
            'Los reintentos sin control pueden duplicar operaciones o agravar una sobrecarga. Se necesitan idempotencia, límites, circuit breakers y estrategias de degradación. Estos mecanismos no son detalles de infraestructura que aparezcan gratis. Forman parte de la semántica del producto: determinan qué ve una persona y qué compromiso mantiene el sistema durante una falla.',
          ],
        },
        {
          heading: 'Consistencia y transacciones cambian de naturaleza',
          paragraphs: [
            'Dentro de una base de datos, una transacción puede mantener invariantes con herramientas conocidas. Entre servicios, una operación de negocio suele cruzar propietarios y tiempos diferentes. La consistencia eventual puede ser adecuada, pero obliga a definir estados intermedios, compensaciones, duplicados y reconciliación. No todo proceso tolera la misma demora o incertidumbre.',
            'Intentar reproducir una transacción global mediante coordinación extensa suele reducir la autonomía buscada. Es preferible diseñar flujos explícitos y comprender qué dato es autoridad en cada contexto. Eventos y sagas pueden ayudar, pero también agregan rastreo y recuperación. La elección requiere lenguaje de negocio preciso, no sólo familiaridad con un patrón.',
          ],
        },
        {
          heading: 'Operar la red es parte de la arquitectura',
          paragraphs: [
            'Más unidades desplegables significan más pipelines, configuraciones, secretos, permisos, métricas y alertas. Para investigar una falla hacen falta correlación, trazas distribuidas y logs consistentes. Sin una plataforma confiable, un incidente sencillo puede convertirse en una búsqueda entre servicios con relojes, versiones y propietarios diferentes.',
            'Las pruebas también cambian. Las unitarias siguen siendo necesarias, pero deben complementarse con contratos, integración y escenarios de extremo a extremo selectivos. Versionar APIs y eventos exige compatibilidad durante despliegues graduales. La capacidad operativa, no sólo la habilidad de escribir servicios, determina si la arquitectura será sostenible.',
          ],
        },
        {
          heading: 'El costo organizacional es real',
          paragraphs: [
            'La autonomía requiere equipos capaces de asumir diseño, entrega y operación. Si un grupo central debe aprobar cada cambio o resolver todos los incidentes, los servicios distribuidos no crean verdadera propiedad. También hace falta comunicación sobre estándares, contratos y evolución. La independencia no significa aislamiento entre personas.',
            'Cada servicio agrega trabajo permanente: actualizaciones, vulnerabilidades, capacidad, soporte y retiro. Ese costo puede justificarse cuando habilita equipos y ritmos realmente independientes. En organizaciones pequeñas o productos todavía inestables, puede consumir la energía que debería dedicarse a comprender usuarios y dominio. La madurez organizacional es una condición arquitectónica.',
          ],
        },
        {
          heading: 'Cuándo elegir un monolito modular',
          paragraphs: [
            'Un monolito modular suele ser preferible cuando el dominio está cambiando, el equipo es pequeño, la escala es moderada y el despliegue coordinado no limita al negocio. Puede ofrecer límites claros, pruebas rápidas, transacciones simples y una operación comprensible. Monolito no significa código desordenado; modularidad y disciplina siguen siendo esenciales.',
            'Los microservicios se justifican cuando existen contextos estables, equipos autónomos, presión de despliegue independiente, perfiles de escala diferenciados y capacidad operativa madura. La decisión debe basarse en evidencia, no en prestigio. Una buena arquitectura elimina complejidad innecesaria y coloca la complejidad inevitable donde puede administrarse. La moda hace lo contrario: distribuye problemas antes de entenderlos.',
          ],
        },
      ],
    },
    en: {
      slug: 'microservices-when-they-solve-problems',
      kicker: 'AI and development',
      cardCopete:
        'Microservices provide value when they solve real boundaries, not when they merely distribute complexity.',
      title: 'Microservices: When They Solve Problems and When They Multiply Them',
      copete:
        'Microservices can provide autonomy, scalability, and clearer ownership. They can also turn one understandable application into a network of deployments, contracts, failures, and operational dependencies.',
      bajada:
        'Microservices are not automatically a more advanced architecture. Their value depends on organisational boundaries, deployment needs, scale, team autonomy, and operational maturity. This article examines when distributing a system solves a real problem and when it merely distributes complexity.',
      sections: [
        {
          heading: 'A microservice is an operational boundary',
          paragraphs: [
            'A microservice is not simply a large class converted into a small application. It is a bounded capability that can evolve and deploy with reasonable independence, owns explicit contracts, and has clear accountability. That independence covers code, data, observability, security, and operations. If every change requires coordination across the system, separation is mainly visual.',
            'Line count does not define the boundary. A service can be small and poorly isolated, or broader and represent a coherent context. The useful question is which decision it can make autonomously and which knowledge it protects. Without a recognisable domain boundary, division adds communication without reducing coupling.',
          ],
        },
        {
          heading: 'Why teams choose microservices',
          paragraphs: [
            'Legitimate reasons include independent deployment, team autonomy, different scaling needs, and different rates of change. A capability with a particular load can scale without replicating the entire application. A team can deliver an improvement without waiting for a coordinated window, provided it preserves compatible contracts and accepts operational responsibility.',
            'Less sound motivations also exist: following a trend, imitating a company at a different scale, or assuming that more services mean greater modernity. Architecture should answer a concrete pressure. If the problem does not require deployment independence, separate ownership, or load isolation, distribution may purchase costs without providing a useful capability.',
          ],
        },
        {
          heading: 'Bounded contexts come before the network',
          paragraphs: [
            'Bounded contexts help separate models and vocabularies that should not be confused. They are a domain-design tool, not an automatic instruction to create remote processes. Responsibilities, dependencies, and language should be identified first. A later decision can determine whether a boundary needs to become an independently deployable unit.',
            'Separating too early fixes assumptions that have not yet been learned. A mistaken boundary produces frequent calls, duplicated data, and coordinated changes. A modular monolith allows teams to experiment with boundaries inside one deployment. When modules demonstrate real autonomy, extracting one can be an evolution rather than an initial wager.',
          ],
        },
        {
          heading: 'Distributed communication can fail',
          paragraphs: [
            'A local call is usually fast and fails immediately. A network call introduces latency, timeouts, message loss, retries, and partial responses. Every remote dependency expands the states the system must handle. Designing microservices means accepting that another component may be slow, unavailable, or running a different version.',
            'Uncontrolled retries can duplicate operations or worsen overload. Idempotency, limits, circuit breakers, and degradation strategies are required. These mechanisms are not infrastructure details that arrive for free. They are part of product semantics because they determine what a person sees and which commitment the system maintains during failure.',
          ],
        },
        {
          heading: 'Consistency and transactions change character',
          paragraphs: [
            'Within one database, a transaction can maintain invariants using familiar tools. Across services, a business operation often crosses different owners and timelines. Eventual consistency may be suitable, but it requires explicit intermediate states, compensation, duplicate handling, and reconciliation. Not every process tolerates the same delay or uncertainty.',
            'Trying to reproduce a global transaction through extensive coordination often reduces the autonomy being pursued. Explicit flows and a clear authority for each item of data are preferable. Events and sagas can help, but they also add tracing and recovery work. The choice requires precise business language, not only familiarity with a pattern.',
          ],
        },
        {
          heading: 'Operating the network is part of the architecture',
          paragraphs: [
            'More deployable units mean more pipelines, configurations, secrets, permissions, metrics, and alerts. Investigating failure requires correlation, distributed traces, and consistent logs. Without a reliable platform, a simple incident can become a search across services with different clocks, versions, and owners.',
            'Testing changes as well. Unit tests remain necessary, but contract, integration, and selective end-to-end scenarios must complement them. Versioned APIs and events need compatibility during gradual deployments. Operational capability, not merely the ability to write services, determines whether the architecture will remain sustainable.',
          ],
        },
        {
          heading: 'The organisational cost is real',
          paragraphs: [
            'Autonomy requires teams capable of owning design, delivery, and operation. If a central group must approve every change or resolve every incident, distributed services do not create genuine ownership. Communication about standards, contracts, and evolution is also necessary. Independence does not mean isolation between people.',
            'Every service adds permanent work: upgrades, vulnerabilities, capacity, support, and retirement. That cost can be justified when it enables genuinely independent teams and rhythms. In small organisations or unstable products, it may consume energy that should be spent understanding users and domain. Organisational maturity is an architectural condition.',
          ],
        },
        {
          heading: 'When to choose a modular monolith',
          paragraphs: [
            'A modular monolith is often preferable while the domain is changing, the team is small, scale is moderate, and coordinated deployment does not constrain the business. It can provide clear boundaries, fast tests, simple transactions, and understandable operations. Monolith does not mean disorganised code; modularity and discipline remain essential.',
            'Microservices are justified when stable contexts, autonomous teams, independent deployment pressure, differentiated scaling profiles, and mature operational capability exist. The decision should follow evidence, not prestige. Good architecture removes unnecessary complexity and places inevitable complexity where it can be managed. Fashion does the opposite by distributing problems before understanding them. Architecture should remain a response to context rather than become a fashionable technical identity.',
          ],
        },
      ],
    },
    fr: {
      slug: 'microservices-quand-ils-resolvent-les-problemes',
      kicker: 'AI and development',
      cardCopete:
        'Les microservices apportent de la valeur lorsqu’ils résolvent de vraies limites, pas lorsqu’ils répartissent seulement la complexité.',
      title:
        'Microservices : quand ils résolvent les problèmes et quand ils les multiplient',
      copete:
        'Les microservices peuvent apporter autonomie, évolutivité et responsabilités plus claires. Ils peuvent également transformer une application compréhensible en un réseau de déploiements, de contrats, de défaillances et de dépendances opérationnelles.',
      bajada:
        'Les microservices ne constituent pas automatiquement une architecture plus avancée. Leur valeur dépend des frontières organisationnelles, des besoins de déploiement, de l’échelle, de l’autonomie des équipes et de la maturité opérationnelle. Cet article analyse les situations où distribuer un système résout un véritable problème et celles où cela ne fait que répartir la complexité.',
      sections: [
        {
          heading: 'Un microservice est une frontière opérationnelle',
          paragraphs: [
            'Un microservice n’est pas simplement une grande classe transformée en petite application. C’est une capacité délimitée qui peut évoluer et être déployée avec une indépendance raisonnable, possède des contrats explicites et des responsables identifiés. Cette indépendance couvre code, données, observabilité, sécurité et exploitation. Si chaque changement exige une coordination générale, la séparation reste surtout visuelle.',
            'Le nombre de lignes ne définit pas la frontière. Un service peut être petit et mal isolé, ou plus large et représenter un contexte cohérent. La question utile porte sur les décisions qu’il peut prendre de manière autonome et les connaissances qu’il protège. Sans frontière métier reconnaissable, la division ajoute de la communication sans réduire le couplage.',
          ],
        },
        {
          heading: 'Pourquoi les équipes les choisissent',
          paragraphs: [
            'Les raisons légitimes comprennent le déploiement indépendant, l’autonomie des équipes, des besoins de montée en charge distincts et des rythmes d’évolution différents. Une capacité soumise à une charge particulière peut évoluer sans répliquer toute l’application. Une équipe peut livrer sans attendre une fenêtre coordonnée, si elle préserve les contrats compatibles et assume l’exploitation.',
            'Des motivations moins solides existent aussi : suivre une tendance, imiter une entreprise d’une autre échelle ou supposer que davantage de services signifie davantage de modernité. L’architecture doit répondre à une pression concrète. Sans besoin d’indépendance, de propriété séparée ou d’isolation de charge, la distribution achète des coûts sans capacité utile.',
          ],
        },
        {
          heading: 'Les contextes délimités précèdent le réseau',
          paragraphs: [
            'Les bounded contexts séparent des modèles et vocabulaires qui ne doivent pas être confondus. Ils constituent un outil de conception du domaine, pas une instruction automatique pour créer des processus distants. Il faut d’abord identifier responsabilités, dépendances et langage, puis décider si la frontière doit devenir une unité déployable indépendante.',
            'Séparer trop tôt fige des hypothèses qui ne sont pas encore comprises. Une mauvaise frontière produit des appels fréquents, des données dupliquées et des modifications coordonnées. Un monolithe modulaire permet d’expérimenter avec les limites dans un seul déploiement. Lorsque les modules démontrent une véritable autonomie, en extraire un devient une évolution plutôt qu’un pari initial.',
          ],
        },
        {
          heading: 'La communication distribuée peut échouer',
          paragraphs: [
            'Un appel local est généralement rapide et échoue immédiatement. Un appel réseau ajoute latence, délais, pertes de messages, nouvelles tentatives et réponses partielles. Chaque dépendance distante élargit les états à traiter. Concevoir des microservices signifie accepter qu’un autre composant puisse être lent, indisponible ou exécuter une version différente.',
            'Des tentatives non contrôlées peuvent dupliquer des opérations ou aggraver une surcharge. Il faut idempotence, limites, coupe-circuits et stratégies de dégradation. Ces mécanismes ne sont pas des détails gratuits d’infrastructure. Ils appartiennent à la sémantique du produit, car ils déterminent ce que voit une personne et l’engagement maintenu pendant une défaillance.',
          ],
        },
        {
          heading: 'Cohérence et transactions changent de nature',
          paragraphs: [
            'Dans une base de données, une transaction maintient des invariants avec des outils connus. Entre services, une opération métier traverse souvent plusieurs responsables et temporalités. La cohérence éventuelle peut convenir, mais oblige à définir états intermédiaires, compensations, doublons et réconciliation. Tous les processus ne tolèrent pas le même délai ou la même incertitude.',
            'Reproduire une transaction globale par une coordination étendue réduit souvent l’autonomie recherchée. Des flux explicites et une autorité claire pour chaque donnée sont préférables. Événements et sagas peuvent aider, mais ajoutent aussi suivi et récupération. Le choix exige un langage métier précis, pas seulement la connaissance d’un modèle.',
          ],
        },
        {
          heading: 'Exploiter le réseau fait partie de l’architecture',
          paragraphs: [
            'Davantage d’unités déployables signifie davantage de pipelines, configurations, secrets, permissions, métriques et alertes. Une défaillance exige corrélation, traces distribuées et logs cohérents. Sans plateforme fiable, un incident simple devient une recherche parmi des services dont les horloges, versions et responsables diffèrent.',
            'Les tests changent également. Les tests unitaires restent nécessaires, complétés par contrats, intégration et scénarios de bout en bout sélectionnés. Les API et événements versionnés doivent rester compatibles pendant les déploiements progressifs. La capacité opérationnelle, et pas seulement la capacité à écrire des services, détermine si l’architecture sera durable.',
          ],
        },
        {
          heading: 'Le coût organisationnel est réel',
          paragraphs: [
            'L’autonomie exige des équipes capables d’assumer conception, livraison et exploitation. Si un groupe central doit approuver chaque changement ou résoudre tous les incidents, les services distribués ne créent pas de véritable propriété. Une communication sur les standards, contrats et évolutions reste indispensable. L’indépendance ne signifie pas l’isolement des personnes.',
            'Chaque service ajoute un travail permanent : mises à jour, vulnérabilités, capacité, support et retrait. Ce coût se justifie lorsqu’il permet des équipes et rythmes réellement indépendants. Dans une petite organisation ou un produit instable, il peut consommer l’énergie nécessaire à la compréhension des utilisateurs et du domaine. La maturité organisationnelle est une condition architecturale.',
          ],
        },
        {
          heading: 'Quand choisir un monolithe modulaire',
          paragraphs: [
            'Un monolithe modulaire est souvent préférable lorsque le domaine évolue, l’équipe est petite, l’échelle modérée et le déploiement coordonné sans effet limitant. Il peut offrir des frontières claires, des tests rapides, des transactions simples et une exploitation compréhensible. Monolithe ne signifie pas code désorganisé ; modularité et discipline restent essentielles.',
            'Les microservices se justifient lorsque des contextes stables, des équipes autonomes, une pression de déploiement indépendant, des profils de montée en charge différents et une capacité opérationnelle mature existent. La décision doit suivre les preuves, pas le prestige. Une bonne architecture retire la complexité inutile et place la complexité inévitable là où elle peut être gérée.',
          ],
        },
      ],
    },
  },
}

export default microservices
