import en from './en.js'

const navigationCopy = {
  home: ['Accueil', 'Présentation professionnelle et actions principales.'],
  experience: ['Expérience', 'Parcours professionnel et contributions sélectionnées.'],
  technologies: ['Technologies', 'Technologies et pratiques d’ingénierie organisées par domaine.'],
  projects: ['Projets', 'Sélection de projets et travaux d’ingénierie.'],
  'ai-workflow': ['AI Workflow', 'Une approche responsable de l’ingénierie augmentée par l’IA.'],
  education: ['Formation', 'Formation académique et distinction internationale.'],
  endpoint: ['Endpoint Blog', 'Articles techniques et notes éditoriales.'],
  about: ['À propos', 'Des centres d’intérêt qui complètent la pratique professionnelle.'],
  contact: ['Contact', 'Moyens d’entamer une conversation professionnelle.'],
}

const experienceCopy = {
  'bnp-paribas': {
    role: 'Ingénieur Backend / Full-Stack Senior — Contrat',
    dates: 'Août 2025 — Janvier 2026',
    location: 'Madrid, Espagne',
    context: 'Environnement international de services financiers',
    description:
      'Contribution à une plateforme d’assurance développée de zéro dans un environnement international d’ingénierie anglophone, en collaboration avec des équipes en Espagne, en France et en Allemagne.',
    contributions: [
      'Mise en œuvre d’un microservice central pour le traitement des paiements interbancaires.',
      'Contribution aux performances, à la fiabilité, aux aspects de sécurité, à l’intégration de la base de données et d’Angular, aux discussions d’architecture et aux revues de code.',
    ],
    mobileSummary:
      'Mise en œuvre du microservice de paiements interbancaires et contribution aux performances, à la fiabilité, à la sécurité, aux intégrations de la base de données et d’Angular, à l’architecture et aux revues de code.',
    technologies: [
      'Java 19',
      'Spring Boot',
      'MySQL',
      'Angular',
      'Microservices',
      'Revue de code',
    ],
  },
  kyndryl: {
    role: 'Spécialiste informatique',
    dates: 'Septembre 2021 — Mai 2025',
    location: 'Buenos Aires, Argentine',
    context:
      'Services technologiques d’entreprise, architecture, coordination, support et amélioration des processus',
    description:
      'Travail principalement axé sur l’architecture logicielle et la coordination technique plutôt que sur le développement quotidien d’applications Java, avec des chefs de projet, des équipes techniques et des parties prenantes internes.',
    contributions: [
      'Examen des approches techniques et apport d’expertise en architecture, coordination et support technique.',
      'Animation de sessions sur les bonnes pratiques Java, accompagnement de développeurs juniors et promotion de la qualité du code, des tests, de la documentation et du partage des connaissances.',
      'Création d’outils internes et de méthodes de travail, avec un soutien à la priorisation et au suivi du temps, sans responsabilité hiérarchique formelle.',
    ],
    mobileSummary:
      'Examen d’approches techniques, animation de sessions Java, accompagnement de développeurs et promotion de la qualité, des tests, de la documentation et des méthodes de travail, sans management hiérarchique formel.',
    technologies: [
      'Architecture logicielle',
      'Pratiques Java',
      'Coordination technique',
      'Pratiques de test',
      'Mentorat',
      'Amélioration des processus',
    ],
  },
  gdeba: {
    role: 'Consultant logiciel',
    dates: 'Mars 2023 — Septembre 2023',
    location: 'La Plata, Province de Buenos Aires, Argentine',
    context: 'Plateforme publique de gestion électronique de documents',
    description:
      'Dans le cadre d’une mission de conseil menée parallèlement au poste chez Kyndryl, contribution à l’analyse et au diagnostic de la plateforme de gestion électronique de documents GDEBA, notamment de ses intégrations avec des systèmes publics nationaux et provinciaux.',
    contributions: [
      'Analyse de l’architecture, des dépendances et des flux critiques, et développement de code et de procédures de diagnostic pour les défaillances et incidents.',
      'Proposition d’améliorations en matière de fiabilité, de performances et de sécurité, et contribution aux directives d’intégration et à l’analyse de l’interopérabilité.',
    ],
    mobileSummary:
      'Analyse de l’architecture et des flux critiques, création de diagnostics pour les incidents et proposition d’améliorations de fiabilité, de performances, de sécurité, d’intégration et d’interopérabilité.',
    technologies: [
      'Architecture logicielle',
      'Intégration de systèmes',
      'Diagnostic',
      'Fiabilité',
      'Sécurité',
      'Interopérabilité',
    ],
  },
  'compra-gamer': {
    role: 'Développeur Backend Senior',
    dates: 'Mars 2021 — Juin 2022',
    location: 'Buenos Aires, Argentine',
    context: 'Applications de commerce électronique et de gestion interne',
    description:
      'Parallèlement aux postes chez IBM puis Kyndryl, travail principalement consacré au développement backend en PHP et MySQL pour des applications propriétaires de commerce électronique et de gestion interne.',
    contributions: [
      'Développement de services backend, d’API, de logique métier et de fonctionnalités d’accès aux données avec PHP et MySQL.',
      'Travail sur l’intégration et les performances, connexion de services à des applications React, utilisation de Docker et BPMN, et soutien à d’autres développeurs.',
    ],
    mobileSummary:
      'Développement de services PHP/MySQL, d’API, de logique métier et d’accès aux données ; intégration d’applications React ; travail sur les performances avec Docker et BPMN.',
    technologies: ['PHP', 'MySQL', 'API REST', 'React', 'Docker', 'BPMN'],
  },
  ibm: {
    role: 'Spécialiste informatique',
    dates: 'Décembre 2007 — Août 2021',
    location: 'Buenos Aires, Argentine',
    context:
      'Évolution professionnelle du packaging logiciel vers l’ingénierie Java et l’architecture logicielle',
    description:
      'Les responsabilités ont évolué au cours de ces quatorze années, de la coordination et de l’architecture du packaging logiciel au développement Java, à l’ingénierie logicielle senior et à l’architecture logicielle.',
    contributions: [
      'Les premières missions comprenaient la coordination du packaging pour des comptes internationaux — dont American Express, Manulife et Hudson’s Bay Company — ainsi que la migration de la Software Packaging Factory des États-Unis vers l’Argentine.',
      'Les missions ultérieures comprenaient des applications d’entreprise Java et Spring, des services backend, l’intégration de bases de données et de systèmes, JUnit et les pratiques de test.',
      'Participation aux discussions d’architecture et aux revues de code, pilotage de certaines initiatives techniques et coordination du travail au sein d’équipes multidisciplinaires et internationales.',
    ],
    mobileSummary:
      'Des comptes internationaux de packaging et la migration de la factory vers l’Argentine, puis des applications Java/Spring, des intégrations, JUnit, l’architecture, les revues et la coordination internationale.',
    technologies: [
      'Java',
      'Spring',
      'API REST',
      'JUnit',
      'Applications d’entreprise',
      'Intégration de systèmes',
      'Architecture logicielle',
    ],
  },
}

const technologyCopy = {
  'core-backend': {
    title: 'Backend principal',
    description:
      'Le socle principal pour le développement backend d’entreprise et l’intégration de systèmes.',
    contexts: [
      'Applications backend d’entreprise et intégrations.',
      'Services Java structurés et développement d’applications.',
      'Contrats de services et communication entre systèmes.',
      'Accès aux données relationnelles pour les applications d’entreprise.',
      'Tests automatisés dans le flux de développement Java.',
      'Gestion de versions, collaboration et historique de changements vérifiable.',
    ],
  },
  'architecture-integration': {
    title: 'Architecture et intégration',
    description:
      'Pratiques de conception, connexion, révision et maintenance de logiciels critiques.',
    contexts: [
      'Structure technique, limites et décisions maintenables.',
      'Connexion d’applications, de services et de processus métier.',
      'Logiciels façonnés par des exigences opérationnelles complexes.',
      'Expérience professionnelle et connaissances architecturales.',
      'Pratiques d’implémentation lisibles et maintenables.',
      'Validation intégrée à l’ensemble du travail d’ingénierie.',
      'Évaluation collaborative de la qualité et des choix techniques.',
    ],
  },
  'frontend-full-stack': {
    title: 'Frontend et Full-Stack',
    description:
      'Compétences de livraison frontend qui complètent une identité professionnelle orientée backend.',
    contexts: [
      'Interfaces à base de composants, notamment ce portfolio.',
      'Développement structuré d’applications frontend.',
      'Logique applicative dans le navigateur, notamment ce portfolio.',
      'Structure sémantique pour des interfaces web accessibles.',
      'Présentation responsive et systèmes visuels.',
    ],
  },
  'data-infrastructure': {
    title: 'Données et infrastructure',
    description:
      'Bases de données, conteneurs, orchestration et pratiques de livraison au service des applications.',
    contexts: [
      'Technologie de base de données relationnelle.',
      'Technologie de base de données relationnelle.',
      'Environnements applicatifs conteneurisés.',
      'Connaissance et expérience de l’orchestration de conteneurs.',
      'Pratiques reproductibles d’intégration et de livraison.',
      'Collaboration sur les dépôts et flux de livraison logicielle.',
    ],
  },
  'additional-experience': {
    title: 'Expérience complémentaire',
    description:
      'Technologies backend et de processus rencontrées dans différentes expériences professionnelles.',
    contexts: [
      'Expérience complémentaire en JavaScript côté serveur.',
      'Expérience complémentaire en développement backend.',
      'Analyse et documentation des processus métier.',
    ],
  },
}

const technologyNames = {
  'REST APIs': 'API REST',
  'Software Architecture': 'Architecture logicielle',
  'System Integration': 'Intégration de systèmes',
  'Enterprise Applications': 'Applications d’entreprise',
  'Clean Code': 'Code propre',
  'Testing Practices': 'Pratiques de test',
  'Code Review': 'Revue de code',
}

const educationCopy = {
  'uba-psychology': {
    institution: 'Université de Buenos Aires',
    program: 'Études universitaires de psychologie',
    dates: '2026 — Présent',
  },
  'ort-systems-analysis': {
    institution: 'ORT Argentine',
    program:
      'Analyste de systèmes informatiques / Diplôme supérieur en analyse de systèmes',
    dates: '2019 — 2022',
  },
  'umet-economics': {
    institution: 'Université Métropolitaine (UMET)',
    program: 'Économie',
    dates: '2017 — 2018',
  },
}

const workflowCopy = {
  'frame-the-problem': [
    'Cadrer le problème',
    'Je commence par définir le problème, son périmètre, ses contraintes et le résultat attendu. Des critères d’acceptation clairs et des limites explicites évitent que l’outil produise des solutions techniquement correctes mais sans rapport avec le besoin réel.',
  ],
  'explore-and-plan': [
    'Explorer et planifier',
    'J’utilise l’IA pour explorer des alternatives, comparer des approches, identifier les risques et diviser un travail complexe en étapes plus petites et vérifiables. L’outil peut suggérer des options, mais l’architecture, les priorités et les compromis exigent un jugement professionnel.',
  ],
  'implement-with-assistance': [
    'Implémenter avec assistance',
    'L’IA peut accélérer la mise en place initiale, le code répétitif, les propositions de refactorisation, la documentation et les premiers cas de test. Je fournis le contexte et les contraintes, examine le résultat généré et l’adapte aux standards et à la structure du projet.',
  ],
  'review-and-validate': [
    'Examiner et valider',
    'Un résultat généré n’est jamais accepté simplement parce qu’il compile ou semble plausible. J’examine les fonctionnalités, la lisibilité, la maintenabilité, la sécurité, l’accessibilité et la cohérence architecturale, puis je le valide par des tests, le linting, des builds et une inspection directe si nécessaire.',
  ],
  'iterate-and-document': [
    'Itérer et documenter',
    'Le développement avance par petites itérations contrôlées. Les décisions, les limites et le contexte pertinent sont documentés afin que le travail reste compréhensible, cohérent et plus facile à examiner ou à poursuivre.',
  ],
}

const aboutCopy = {
  'information-technology': [
    'Technologies de l’information',
    'Les technologies de l’information sont à la fois ma profession et l’un de mes principaux centres d’intérêt intellectuels. Au-delà du développement logiciel, je m’intéresse à l’évolution du secteur informatique, aux pratiques d’ingénierie logicielle, à l’intelligence artificielle et à la manière dont la technologie transforme le travail, les organisations et les identités professionnelles.',
  ],
  'psychology-human-behavior': [
    'Psychologie et comportement humain',
    'J’étudie actuellement la psychologie à l’Université de Buenos Aires. Je m’intéresse particulièrement à la motivation, à la prise de décision, à l’identité et au comportement des personnes au sein des groupes, des institutions et des environnements complexes. La psychologie m’offre une autre perspective pour comprendre le travail, la collaboration et la relation entre les individus et les systèmes qu’ils habitent.',
  ],
  'history-culture-travel': [
    'Histoire, culture et voyages',
    'L’histoire m’intéresse comme moyen de comprendre comment les sociétés, les institutions et les identités se développent au fil du temps. Les voyages me permettent de découvrir ces processus à travers les lieux, les personnes, l’architecture, les traditions et la vie quotidienne. La musique joue également un rôle important dans ma manière de découvrir différentes cultures.',
  ],
  'french-language-civilization': [
    'Langue et civilisation françaises',
    'La langue et la civilisation françaises occupent une place particulière parmi mes centres d’intérêt. L’étude du français me donne accès à une riche tradition historique, intellectuelle, littéraire et artistique, tout en me préparant à participer plus pleinement à des environnements francophones. C’est à la fois un défi linguistique et un engagement culturel à long terme.',
  ],
  'shotokan-karate': [
    'Karaté Shotokan',
    'Je pratique le karaté Shotokan, une discipline fondée sur la répétition, la précision, la patience et la maîtrise de soi. Son insistance sur la pratique régulière et l’amélioration continue influence ma manière d’aborder l’apprentissage, la difficulté et le développement personnel.',
  ],
  writing: [
    'Écriture',
    'L’écriture est l’un des moyens par lesquels je réunis ces centres d’intérêt. Elle me permet d’organiser mes idées, de remettre en question les hypothèses et d’explorer les liens entre technologie, psychologie, histoire, culture et vie contemporaine.',
  ],
}

const fr = {
  ...en,
  site: {
    ...en.site,
    role: 'Développeur logiciel senior',
    skipToContent: 'Aller au contenu',
    portfolioOverview: 'Présentation du portfolio',
    footer: {
      process:
        'Construit selon un processus de développement dirigé par une personne et augmenté par l’IA.',
      credit: 'Conçu, révisé et publié par Pablo Dorin.',
      copyright: '© 2026 Pablo Dorin. Tous droits réservés.',
      privacy: 'Confidentialité',
    },
  },
  controls: {
    mobileMenu: {
      openLabel: 'Ouvrir la navigation du portfolio',
      closeLabel: 'Fermer la navigation du portfolio',
      openText: 'Menu',
      closeText: 'Fermer',
    },
    theme: {
      darkLabel: 'Sombre',
      lightLabel: 'Clair',
      switchToDark: 'Passer au thème sombre',
      switchToLight: 'Passer au thème clair',
    },
    language: {
      groupLabel: 'Choisir la langue',
      options: {
        en: 'Passer à l’anglais',
        es: 'Passer à l’espagnol',
        fr: 'Passer au français',
      },
    },
  },
  navigation: {
    ariaLabel: 'Sections du portfolio',
    items: en.navigation.items.map((item) => ({
      ...item,
      label: navigationCopy[item.id][0],
      sectionTitle: navigationCopy[item.id][0],
      description: navigationCopy[item.id][1],
    })),
  },
  home: {
    ...en.home,
    specialization: 'Développement backend Java et full-stack',
    subtitle:
      'Applications d’entreprise · Intégration de systèmes · Ingénierie augmentée par l’IA',
    introduction:
      'Développeur logiciel senior avec plus de 18 ans d’expérience professionnelle dans la livraison de logiciels d’entreprise, le développement backend Java, l’intégration de systèmes et les solutions full-stack au sein d’équipes internationales et d’environnements critiques.',
    actionsLabel: 'Actions principales',
    actions: {
      projects: 'Voir les projets',
      endpoint: 'Lire Endpoint',
      contact: 'Me contacter',
    },
  },
  experience: {
    ...en.experience,
    title: 'Expérience professionnelle',
    introduction:
      'Ingénierie d’entreprise, architecture, intégration et coordination technique dans des environnements internationaux et critiques. Les missions simultanées sont explicitement indiquées.',
    items: en.experience.items.map((item) => ({
      ...item,
      ...experienceCopy[item.id],
    })),
    index: {
      ariaLabel: 'Expériences professionnelles',
      mobileLabel: 'Choisir une expérience',
      placeholder: 'Choisir une entreprise',
      jumpLabel: 'Accéder à une expérience',
      freelanceCompany: 'Freelance',
      freelanceAction: 'Voir les projets',
    },
    entry: {
      selectedContributions: 'Contributions sélectionnées',
      selectedContributionsSummary: 'Contributions sélectionnées.',
      summary: 'Résumé.',
      technologiesLabel: 'Technologies et pratiques',
    },
  },
  technologies: {
    ...en.technologies,
    title: 'Technologies',
    introduction:
      'Un profil d’ingénierie centré sur Java, couvrant le développement backend d’entreprise, l’intégration de systèmes, l’architecture logicielle et la livraison full-stack.',
    groups: en.technologies.groups.map((group) => ({
      ...group,
      title: technologyCopy[group.id].title,
      description: technologyCopy[group.id].description,
      items: group.items.map((item, index) => ({
        ...item,
        name: technologyNames[item.name] ?? item.name,
        context: technologyCopy[group.id].contexts[index],
      })),
    })),
    index: {
      ariaLabel: 'Groupes de technologies',
      mobileLabel: 'Choisir un groupe de technologies',
      placeholder: 'Choisir un groupe',
      jumpLabel: 'Accéder à un groupe de technologies',
      aiWorkflow: 'Développement logiciel augmenté par l’IA',
    },
  },
  projects: {
    ...en.projects,
    title: 'Projects',
    introduction:
      'Projets de portfolio sélectionnés pour démontrer des compétences en backend, full-stack, intégration, tests et développement augmenté par l’IA.',
    items: [
      {
        ...en.projects.items[0],
        title: 'Portfolio Professionnel 2026',
        type: 'Projet de portfolio publié',
        status: 'Publié et en évolution',
        statement:
          'Un portfolio professionnel multilingue, un blog technique et une vitrine de projets, conçus, implémentés et publiés selon un processus de développement augmenté par l’IA et dirigé par une personne.',
        purpose:
          'Conçu pour présenter mon expérience professionnelle, mes compétences techniques, les articles d’Endpoint et mes projets à travers une identité publique cohérente.',
        methodology:
          'Développement itératif dirigé par une personne et augmenté par l’IA',
        imageAlt:
          'Page d’accueil du Portfolio Professionnel 2026 avec sa navigation pour ordinateur et sa présentation professionnelle',
        metrics: en.projects.items[0].metrics.map((metric, index) => ({
          ...metric,
          label: [
            'Développement actif initial',
            'Sessions initiales',
            'Période initiale',
            'Code écrit manuellement par le développeur',
            'Direction humaine et validation',
            'Implémentation du code',
            'Analyse et soutien éditorial',
            'Git, commit, push et publication',
            'Langues',
            'Statut',
          ][index],
          value: [
            '13 heures',
            '2',
            '27–28 juillet 2026',
            '0 ligne',
            'Pablo Dorin',
            'OpenAI Codex',
            'ChatGPT',
            'Pablo Dorin',
            'Anglais, espagnol et français',
            'Publié et en évolution',
          ][index],
        })),
        actions: en.projects.items[0].actions.map((action, index) => ({
          ...action,
          label: [
            'Voir le site publié',
            'Voir le dépôt',
            'Voir l’étude de cas',
            'Voir l’article Endpoint',
          ][index],
          href:
            action.id === 'endpoint-article'
              ? '/fr/endpoint/portfolio-professionnel-2026/'
              : action.href,
        })),
      },
      {
        ...en.projects.items[1],
        title: 'JS1 : Gestionnaire de candidatures',
        type: 'Projet de portfolio',
        status: 'Planifié',
        purpose:
          'Une application full-stack pour organiser les candidatures, les entreprises, les postes, les entretiens, les statuts et les actions de suivi.',
        technicalApproach:
          'Conçue comme une application de style entreprise au périmètre maîtrisé, avec un backend Java, une persistance relationnelle, une API REST, des tests, une conteneurisation et une interface web simple.',
        actionNote:
          'Le dépôt et la démo seront ajoutés lorsque le projet sera implémenté.',
      },
      ...en.projects.items.slice(2).map((project, index) => ({
        ...project,
        title: `Projet 0${index + 3}`,
        type: 'Projet de portfolio',
        status: 'À définir',
        purpose: [
          'Le troisième projet de portfolio sera défini après validation de son objectif technique, de son périmètre et de la valeur qu’il devra démontrer.',
          'Le quatrième projet de portfolio sera défini après validation de son objectif technique, de son périmètre et de la valeur qu’il devra démontrer.',
        ][index],
      })),
    ],
    labels: {
      carousel: 'Projets de portfolio sélectionnés',
      previous: 'Projet précédent',
      next: 'Projet suivant',
      indicators: 'Choisir un projet',
      goToProject: 'Aller au projet {number}',
      slidePosition: 'Projet {current} sur {total}',
      status: 'Statut',
      purpose: 'Objectif',
      methodology: 'Méthodologie de développement',
      metrics: 'Aperçu de la productivité initiale',
      verifiedStack: 'Stack vérifié',
      actions: 'Liens du projet',
      authorship:
        'J’ai conservé la qualité d’auteur et le contrôle à travers la direction du produit, les exigences, le contenu, les décisions de design, les critères d’acceptation, l’identification des défauts, la validation et la publication.',
      technicalApproach: 'Approche technique',
      plannedStack: 'Stack prévu',
      detailCarousel: 'Détails du Projet 01',
      previousDetail: 'Détail précédent du projet',
      nextDetail: 'Détail suivant du projet',
      detailIndicators: 'Choisir un détail du Projet 01',
      projectOverview: 'Présentation du projet',
      projectMethod: 'Objectif, méthodologie et qualité d’auteur',
      sitePreview: 'Aperçu du site publié',
      projectMetrics: 'Métriques du projet',
    },
  },
  education: {
    ...en.education,
    title: 'Formation',
    introduction:
      'Études formelles en analyse de systèmes, psychologie et économie, complétées par une distinction internationale en leadership.',
    items: en.education.items.map((item) => ({
      ...item,
      ...educationCopy[item.id],
    })),
    distinction: {
      ...en.education.distinction,
      organization: 'Département d’État des États-Unis',
      participantLabel: 'Participant sélectionné au',
      programName:
        'Programme de leadership pour les visiteurs internationaux',
      location: 'Washington, D.C., États-Unis',
    },
    academicStudies: 'Études universitaires',
    distinctionLabel: 'Distinction internationale',
    index: {
      ariaLabel: 'Parcours de formation',
      jumpLabel: 'Accéder à une entrée',
      jumpToPrefix: 'Accéder à',
      distinctionAccessibleLabel:
        'Programme de leadership pour les visiteurs internationaux',
    },
  },
  endpointBlog: {
    ...en.endpointBlog,
    label: 'Écriture technique',
    tagline: 'Request & Response about the IT industry',
    introduction:
      'Endpoint est un blog technique consacré au développement logiciel, aux systèmes d’entreprise, à l’intégration, à l’architecture et à l’utilisation responsable de l’IA dans les processus d’ingénierie.',
    carousel: {
      label: 'Articles Endpoint',
      sortLabel: 'Ordre des articles',
      oldestFirst: 'Du plus ancien au plus récent',
      newestFirst: 'Du plus récent au plus ancien',
      previous: 'Article précédent',
      next: 'Article suivant',
      indicators: 'Choisir un article Endpoint',
      goTo: 'Aller à l’article {number}',
      technologiesLabel: 'Technologies et thèmes de l’article',
    },
    writtenBy: 'Écrit par Pablo Dorin',
    tagsLabel: 'Étiquettes de l’article',
    article: {
      back: 'Retour à Endpoint',
      backPath: '/fr/#endpoint',
      backToProject: 'Retour au Projet 01',
      projectPath: '/fr/#projects',
      returnNavigationLabel: 'Navigation de retour',
      previous: 'Article précédent',
      next: 'Article suivant',
      writtenBy: 'Écrit par Pablo Dorin',
      date: '28 juillet 2026',
      disclosure:
        'Article rédigé à l’origine en espagnol. Les versions anglaise et française ont été traduites avec l’aide de l’IA et révisées par l’auteur.',
      signatureRole: 'Développeur logiciel senior',
      tagsLabel: 'Étiquettes de l’article',
      navigationLabel: 'Navigation entre les articles',
      languageLabel: 'Langue de l’article',
    },
  },
  aiWorkflow: {
    ...en.aiWorkflow,
    title: 'Ingénierie augmentée par l’IA',
    introduction: [
      'J’utilise l’intelligence artificielle comme un outil d’ingénierie, et non comme un substitut au jugement technique.',
      'L’IA peut accélérer l’exploration, l’implémentation, la documentation et la revue. Cependant, comprendre le problème, définir les contraintes, prendre les décisions techniques, valider les résultats et assumer la responsabilité de la solution finale restent des responsabilités humaines.',
    ],
    steps: en.aiWorkflow.steps.map((step) => ({
      ...step,
      title: workflowCopy[step.id][0],
      body: workflowCopy[step.id][1],
    })),
    stepsLabel: 'Étapes du flux de travail avec l’IA',
    conclusionTitle: 'Une ingénierie dirigée par l’humain',
    finalPrinciple:
      'Le résultat n’est pas une génération autonome de logiciels, mais un processus d’ingénierie dirigé par l’humain et soutenu par un outil puissant. L’IA augmente la vitesse et la capacité d’exploration ; le jugement professionnel apporte la direction, la validation et la responsabilité.',
  },
  about: {
    ...en.about,
    title: 'À propos',
    areas: en.about.areas.map((area) => ({
      ...area,
      title: aboutCopy[area.id][0],
      body: aboutCopy[area.id][1],
    })),
    indexLabel: 'Explorer un centre d’intérêt',
    indexAriaLabel: 'Sujets de la section À propos',
    portraitAlt: 'Portrait de Pablo Dorin',
  },
  contact: {
    ...en.contact,
    content: {
      ...en.contact.content,
      label: 'Contact',
      title: 'Échangeons.',
      introduction:
        'Ouvert aux opportunités liées aux applications d’entreprise, à l’intégration de systèmes et à l’ingénierie augmentée par l’IA.',
      availability:
        'Basé à Buenos Aires, en Argentine, je suis disponible pour des collaborations à distance et des projets internationaux. Pour toute demande professionnelle, le courriel est le meilleur moyen de me contacter.',
    },
    links: en.contact.links.map((link) => ({
      ...link,
      label: {
        email: 'M’envoyer un courriel',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        cv: 'Télécharger le CV',
      }[link.id],
    })),
    profilesLabel: 'Profils professionnels',
    newTabLabel: '(s’ouvre dans un nouvel onglet)',
  },
}

export default fr
