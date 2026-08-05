import en from './en.js'

const navigationCopy = {
  home: {
    label: 'Inicio',
    description: 'Presentación profesional y acciones principales.',
  },
  experience: {
    label: 'Experiencia',
    description: 'Trayectoria profesional y contribuciones seleccionadas.',
  },
  technologies: {
    label: 'Tecnologías',
    description: 'Tecnologías y prácticas de ingeniería organizadas por área.',
  },
  projects: {
    label: 'Proyectos',
    description: 'Selección de proyectos y trabajo de ingeniería.',
  },
  'ai-workflow': {
    label: 'AI Workflow',
    description: 'Un enfoque responsable para la ingeniería aumentada por IA.',
  },
  education: {
    label: 'Educación',
    description: 'Formación académica y distinción internacional.',
  },
  languages: {
    label: 'Idiomas',
    description: 'Idiomas utilizados en contextos profesionales y culturales.',
  },
  endpoint: {
    label: 'Endpoint Blog',
    description: 'Artículos técnicos y notas editoriales.',
  },
  about: {
    label: 'Sobre mí',
    description: 'Intereses que complementan la práctica profesional.',
  },
  contact: {
    label: 'Contacto',
    description: 'Canales para iniciar una conversación profesional.',
  },
}

const experienceCopy = {
  'bnp-paribas': {
    role: 'Ingeniero Senior Backend / Full-Stack — Contrato',
    dates: 'Agosto de 2025 — Enero de 2026',
    location: 'Madrid, España',
    context: 'Entorno internacional de servicios financieros',
    description:
      'Contribuí a una plataforma de seguros desarrollada desde cero en un entorno internacional de ingeniería en inglés, colaborando con equipos de España, Francia y Alemania.',
    contributions: [
      'Implementé un microservicio central para el procesamiento de pagos interbancarios.',
      'Contribuí a aspectos de rendimiento, confiabilidad y seguridad, integración con bases de datos y Angular, debates de arquitectura y revisiones de código.',
    ],
    technologies: [
      'Java 19',
      'Spring Boot',
      'MySQL',
      'Angular',
      'Microservicios',
      'Revisión de código',
    ],
    mobileSummary:
      'Implementé el microservicio de pagos interbancarios y contribuí al rendimiento, la confiabilidad, la seguridad, la integración con bases de datos y Angular, la arquitectura y las revisiones de código.',
  },
  kyndryl: {
    role: 'Especialista de TI',
    dates: 'Septiembre de 2021 — Mayo de 2025',
    location: 'Buenos Aires, Argentina',
    context:
      'Servicios tecnológicos empresariales, arquitectura, coordinación, soporte y mejora de procesos',
    description:
      'Me enfoqué principalmente en arquitectura de software y coordinación técnica, más que en el desarrollo cotidiano de aplicaciones Java, trabajando con gerentes de proyecto, equipos técnicos y partes interesadas internas.',
    contributions: [
      'Revisé enfoques técnicos y brindé arquitectura, coordinación y soporte técnico.',
      'Lideré sesiones de buenas prácticas Java, acompañé a desarrolladores junior y promoví la calidad del código, las pruebas, la documentación y el intercambio de conocimiento.',
      'Creé herramientas internas y métodos de trabajo, y apoyé la priorización y el seguimiento del tiempo sin responsabilidad formal de gestión de personal.',
    ],
    technologies: [
      'Arquitectura de software',
      'Prácticas Java',
      'Coordinación técnica',
      'Prácticas de testing',
      'Mentoría',
      'Mejora de procesos',
    ],
    mobileSummary:
      'Revisé enfoques técnicos; lideré sesiones de prácticas Java; acompañé a desarrolladores; promoví calidad, pruebas, documentación e intercambio de conocimiento; y apoyé métodos internos de trabajo sin gestión formal de personal.',
  },
  gdeba: {
    role: 'Consultor de Software',
    dates: 'Marzo de 2023 — Septiembre de 2023',
    location: 'La Plata, Provincia de Buenos Aires, Argentina',
    context:
      'Plataforma de gestión electrónica de documentos del sector público',
    description:
      'Durante una consultoría paralela al puesto en Kyndryl, contribuí con análisis y diagnóstico para la plataforma de gestión electrónica de documentos GDEBA, incluidas integraciones con sistemas gubernamentales nacionales y provinciales.',
    contributions: [
      'Analicé la arquitectura, las dependencias y los flujos críticos, y desarrollé código y procedimientos de diagnóstico para fallas e incidentes.',
      'Propuse mejoras de confiabilidad, rendimiento y seguridad, y contribuí a lineamientos de integración y análisis de interoperabilidad.',
    ],
    technologies: [
      'Arquitectura de software',
      'Integración de sistemas',
      'Diagnóstico',
      'Confiabilidad',
      'Seguridad',
      'Interoperabilidad',
    ],
    mobileSummary:
      'Analicé la arquitectura y los flujos críticos, desarrollé diagnósticos para fallas e incidentes y propuse mejoras de confiabilidad, rendimiento, seguridad, integración e interoperabilidad.',
  },
  'compra-gamer': {
    role: 'Desarrollador Backend Senior',
    dates: 'Marzo de 2021 — Junio de 2022',
    location: 'Buenos Aires, Argentina',
    context: 'Aplicaciones de comercio electrónico y gestión interna',
    description:
      'En paralelo a los puestos en IBM y luego Kyndryl, trabajé principalmente en desarrollo backend con PHP y MySQL para aplicaciones propias de comercio electrónico y gestión interna.',
    contributions: [
      'Desarrollé servicios backend, APIs, lógica de negocio y acceso a datos con PHP y MySQL.',
      'Trabajé en integración y rendimiento, conecté servicios con aplicaciones React, utilicé Docker y BPMN y brindé apoyo a otros desarrolladores.',
    ],
    technologies: [
      'PHP',
      'MySQL',
      'APIs REST',
      'React',
      'Docker',
      'BPMN',
    ],
    mobileSummary:
      'Desarrollé servicios, APIs, lógica de negocio y acceso a datos con PHP/MySQL; integré aplicaciones React; abordé integración y rendimiento; y utilicé Docker y BPMN.',
  },
  ibm: {
    role: 'Especialista de TI',
    dates: 'Diciembre de 2007 — Agosto de 2021',
    location: 'Buenos Aires, Argentina',
    context:
      'Progresión profesional desde empaquetado de software hasta ingeniería Java y arquitectura de software',
    description:
      'Las responsabilidades evolucionaron durante catorce años: comenzaron con coordinación y arquitectura de empaquetado de software y continuaron con desarrollo Java, ingeniería de software senior y arquitectura de software.',
    contributions: [
      'El trabajo inicial incluyó coordinación de empaquetado para cuentas internacionales —entre ellas American Express, Manulife y Hudson’s Bay Company— y la migración de Software Packaging Factory de Estados Unidos a Argentina.',
      'El trabajo posterior incluyó aplicaciones empresariales Java y Spring, servicios backend, integración con bases de datos, integraciones entre sistemas, JUnit y prácticas de testing.',
      'Participé en debates de arquitectura y revisiones de código, lideré iniciativas técnicas seleccionadas y coordiné trabajo entre equipos multidisciplinarios e internacionales.',
    ],
    technologies: [
      'Java',
      'Spring',
      'APIs REST',
      'JUnit',
      'Aplicaciones empresariales',
      'Integración de sistemas',
      'Arquitectura de software',
    ],
    mobileSummary:
      'El trabajo inicial abarcó cuentas internacionales de empaquetado y la migración de la fábrica de Estados Unidos a Argentina. Luego trabajé con aplicaciones Java/Spring, integraciones, JUnit, arquitectura, revisiones, iniciativas técnicas y coordinación internacional.',
  },
}

const technologyCopy = {
  'core-backend': {
    title: 'Backend principal',
    description:
      'El stack principal para construir y mantener servicios backend empresariales.',
    items: {
      Java: 'Aplicaciones backend empresariales y servicios críticos para el negocio.',
      'Spring Boot':
        'Servicios mantenibles, APIs e integración dentro de ecosistemas Java.',
      'REST APIs':
        'Contratos HTTP claros para la comunicación entre sistemas.',
      SQL: 'Modelado, consulta y diagnóstico de datos relacionales.',
      JUnit: 'Pruebas automatizadas focalizadas para comportamiento backend.',
      Git: 'Control de versiones y colaboración disciplinada en la entrega.',
    },
  },
  'architecture-integration': {
    title: 'Arquitectura e integración',
    description:
      'Prácticas que conectan sistemas, personas y decisiones técnicas.',
    items: {
      'Software Architecture':
        'Diseño de estructuras claras para software sostenible.',
      'System Integration':
        'Conexión y diagnóstico de sistemas distribuidos y empresariales.',
      'Enterprise Applications':
        'Software construido para flujos operativos complejos y de larga duración.',
      Microservices:
        'Servicios con límites y responsabilidades operativas explícitas.',
      'Clean Code':
        'Código legible que hace más segura la revisión y el cambio.',
      'Testing Practices':
        'Validación proporcionada al riesgo y al contexto de entrega.',
      'Code Review':
        'Revisión colaborativa centrada en corrección y mantenibilidad.',
    },
  },
  'frontend-full-stack': {
    title: 'Frontend y entrega full-stack',
    description:
      'Tecnologías utilizadas para entregar experiencias web completas junto con sistemas backend.',
    items: {
      React: 'Interfaces web basadas en componentes y comportamiento del lado del cliente.',
      Angular: 'Aplicaciones frontend estructuradas en contextos empresariales.',
      JavaScript: 'Lógica de aplicación y comportamiento web en el navegador.',
      HTML: 'Estructura semántica para contenido web accesible.',
      CSS: 'Diseño responsive, sistemas visuales y presentación.',
    },
  },
  'data-infrastructure': {
    title: 'Datos e infraestructura',
    description:
      'Herramientas que respaldan la persistencia, el empaquetado y la entrega confiable.',
    items: {
      PostgreSQL: 'Persistencia relacional y consultas para aplicaciones.',
      MySQL: 'Almacenamiento relacional en sistemas web y empresariales.',
      Docker: 'Entornos reproducibles y empaquetado de aplicaciones.',
      Kubernetes: 'Orquestación de aplicaciones en contenedores.',
      'CI/CD': 'Automatización de compilación, validación y entrega.',
      GitHub: 'Colaboración sobre el código fuente y flujos de trabajo del repositorio.',
    },
  },
  'additional-experience': {
    title: 'Experiencia adicional',
    description:
      'Tecnologías y métodos complementarios encontrados a lo largo de distintos proyectos.',
    items: {
      'Node.js': 'Desarrollo JavaScript del lado del servidor.',
      PHP: 'Mantenimiento y entrega de aplicaciones web.',
      BPMN: 'Modelado de procesos de negocio para alinear flujos y software.',
    },
  },
}

const technologyNameCopy = {
  'Software Architecture': 'Arquitectura de software',
  'System Integration': 'Integración de sistemas',
  'Enterprise Applications': 'Aplicaciones empresariales',
  'Clean Code': 'Código limpio',
  'Testing Practices': 'Prácticas de testing',
  'Code Review': 'Revisión de código',
}

const educationCopy = {
  'uba-psychology': {
    institution: 'Universidad de Buenos Aires',
    program: 'Estudios de grado en Psicología',
    dates: '2026 — Presente',
  },
  'ort-systems-analysis': {
    institution: 'ORT Argentina',
    program: 'Analista de Sistemas / Tecnicatura Superior en Análisis de Sistemas',
    dates: '2019 — 2022',
  },
  'umet-economics': {
    institution: 'Universidad Metropolitana (UMET)',
    program: 'Economía',
    dates: '2017 — 2018',
  },
}

const aiStepCopy = {
  'frame-the-problem': {
    title: 'Plantear el problema',
    body: 'Comienzo definiendo el problema, su alcance, sus restricciones y el resultado esperado. Criterios de aceptación claros y límites explícitos ayudan a evitar que la herramienta produzca soluciones técnicamente correctas pero irrelevantes para la necesidad real.',
  },
  'explore-and-plan': {
    title: 'Explorar y planificar',
    body: 'Uso IA para explorar alternativas, comparar posibles enfoques, identificar riesgos y dividir trabajo complejo en pasos más pequeños y verificables. La herramienta puede sugerir opciones, pero la arquitectura, las prioridades y las compensaciones requieren juicio profesional.',
  },
  'implement-with-assistance': {
    title: 'Implementar con asistencia',
    body: 'La IA puede acelerar la creación de estructuras iniciales, el código repetitivo, las propuestas de refactorización, la documentación y los casos de prueba iniciales. Proporciono el contexto y las restricciones, reviso el resultado generado y lo adapto a los estándares y la estructura del proyecto.',
  },
  'review-and-validate': {
    title: 'Revisar y validar',
    body: 'Un resultado generado nunca se acepta solo porque compila o parece plausible. Reviso funcionalidad, legibilidad, mantenibilidad, seguridad, accesibilidad y coherencia arquitectónica; luego valido el resultado mediante pruebas, linting, builds e inspección directa cuando corresponde.',
  },
  'iterate-and-document': {
    title: 'Iterar y documentar',
    body: 'El desarrollo avanza mediante iteraciones pequeñas y controladas. Las decisiones, limitaciones y el contexto relevante se documentan para que el trabajo permanezca comprensible, coherente y más fácil de revisar o continuar.',
  },
}

const aboutCopy = {
  'information-technology': {
    title: 'Tecnología de la información',
    body: 'La ingeniería de software sigue siendo el centro de mi vida profesional. Me interesan especialmente los sistemas backend, la arquitectura, la integración y el desafío de construir software que permanezca comprensible a medida que evoluciona.',
  },
  'psychology-human-behavior': {
    title: 'Psicología y comportamiento humano',
    body: 'Estudiar psicología amplía mi comprensión sobre cómo piensan las personas, toman decisiones y se relacionan con los sistemas. Esa perspectiva influye en cómo colaboro, comunico y evalúo el impacto humano de las decisiones técnicas.',
  },
  'history-culture-travel': {
    title: 'Historia, cultura y viajes',
    body: 'La historia y los viajes ofrecen contexto: muestran cómo las instituciones, las ideas y las prácticas cotidianas se forman con el tiempo. Explorar otras culturas me ayuda a mantener la curiosidad y a sentirme cómodo trabajando con perspectivas diferentes.',
  },
  'french-language-civilization': {
    title: 'Lengua y civilización francesa',
    body: 'Estudio francés como un proyecto de largo plazo que combina idioma, historia y cultura. Es una práctica de paciencia y aprendizaje continuo, y otra forma de relacionarme con el mundo más allá de mi contexto inmediato.',
  },
  'shotokan-karate': {
    title: 'Karate Shotokan',
    body: 'El karate Shotokan refuerza la disciplina, la repetición y la atención al detalle. Valoro su énfasis en la mejora gradual: una mentalidad que también se traslada naturalmente al trabajo de ingeniería.',
  },
  writing: {
    title: 'Escritura',
    body: 'La escritura me ayuda a ordenar ideas, examinar supuestos y comunicar temas complejos con claridad. También crea un espacio para conectar la práctica técnica con preguntas más amplias sobre cultura, aprendizaje y trabajo.',
  },
}

const es = {
  ...en,
  site: {
    ...en.site,
    role: 'Desarrollador de Software Senior',
    skipToContent: 'Saltar al contenido',
    portfolioOverview: 'Resumen del portfolio',
    footer: {
      process:
        'Construido mediante un proceso de desarrollo dirigido por una persona y aumentado por IA.',
      credit: 'Diseñado, revisado y publicado por Pablo Dorin.',
      copyright: '© 2026 Pablo Dorin. Todos los derechos reservados.',
      privacy: 'Privacidad',
    },
  },
  controls: {
    ...en.controls,
    mobileMenu: {
      openLabel: 'Abrir navegación del portfolio',
      closeLabel: 'Cerrar navegación del portfolio',
      openText: 'Menú',
      closeText: 'Cerrar',
    },
    theme: {
      darkLabel: 'Oscuro',
      lightLabel: 'Claro',
      switchToDark: 'Cambiar al tema oscuro',
      switchToLight: 'Cambiar al tema claro',
    },
    language: {
      groupLabel: 'Seleccionar idioma',
      options: {
        en: 'Cambiar idioma a inglés',
        es: 'Cambiar idioma a español',
        fr: 'Cambiar idioma a francés',
      },
    },
  },
  navigation: {
    ariaLabel: 'Secciones del portfolio',
    items: en.navigation.items.map((item) => ({
      ...item,
      ...navigationCopy[item.id],
      sectionTitle: navigationCopy[item.id].label,
    })),
  },
  home: {
    ...en.home,
    title: 'Pablo Dorin',
    specialization: 'Desarrollo Backend Java y Full-Stack',
    subtitle:
      'Aplicaciones Empresariales · Integración de Sistemas · Ingeniería Aumentada por IA',
    introduction:
      'Desarrollador de Software Senior con más de 18 años de experiencia profesional en ingeniería de software empresarial, desarrollo backend Java, integración de sistemas y entrega full-stack en entornos internacionales y críticos para el negocio.',
    actionsLabel: 'Acciones principales',
    actions: {
      projects: 'Ver proyectos',
      endpoint: 'Leer Endpoint',
      contact: 'Contactarme',
    },
  },
  experience: {
    ...en.experience,
    title: 'Experiencia',
    introduction:
      'Ingeniería empresarial, arquitectura, integración y coordinación técnica en entornos internacionales y críticos para el negocio. Las experiencias simultáneas se identifican de manera explícita.',
    items: en.experience.items.map((item) => ({
      ...item,
      ...experienceCopy[item.id],
    })),
    index: {
      ...en.experience.index,
      ariaLabel: 'Ir directamente a una experiencia',
      mobileLabel: 'Seleccionar una experiencia',
      placeholder: 'Elegir una empresa',
      jumpLabel: 'Ir a una experiencia',
      freelanceCompany: 'Freelance',
      freelanceAction: 'Ver proyectos',
    },
    entry: {
      ...en.experience.entry,
      selectedContributions: 'Contribuciones seleccionadas',
      selectedContributionsSummary: 'Contribuciones seleccionadas.',
      summary: 'Resumen.',
      technologiesLabel: 'Tecnologías y prácticas',
      workingLanguages: 'Idiomas de trabajo',
      languageNames: {
        es: 'Español',
        en: 'Inglés',
        fr: 'Francés',
      },
    },
  },
  technologies: {
    ...en.technologies,
    title: 'Tecnologías',
    introduction:
      'Un perfil de ingeniería centrado en Java que abarca desarrollo backend empresarial, integración de sistemas, arquitectura de software y entrega full-stack.',
    groups: en.technologies.groups.map((group) => ({
      ...group,
      ...technologyCopy[group.id],
      items: group.items.map((item) => ({
        ...item,
        name: technologyNameCopy[item.name] ?? item.name,
        context: technologyCopy[group.id].items[item.name],
      })),
    })),
    index: {
      ...en.technologies.index,
      ariaLabel: 'Ir directamente a un grupo tecnológico',
      mobileLabel: 'Seleccionar un grupo tecnológico',
      placeholder: 'Elegir un grupo',
      jumpLabel: 'Ir a un grupo tecnológico',
      aiWorkflow: 'Desarrollo de software aumentado por IA',
    },
  },
  projects: {
    ...en.projects,
    title: 'Projects',
    introduction:
      'Proyectos de portfolio seleccionados para demostrar habilidades en backend, full-stack, integración, testing y desarrollo aumentado por IA.',
    items: [
      {
        ...en.projects.items[0],
        title: 'Portfolio Profesional 2026',
        type: 'Proyecto de portfolio publicado',
        status: 'Publicado y en evolución',
        statement:
          'Un portfolio profesional multilingüe, blog técnico y espacio de presentación de proyectos, diseñado, implementado y publicado mediante un flujo de desarrollo aumentado por IA y dirigido por una persona.',
        purpose:
          'Construido para presentar mi experiencia profesional, mis capacidades técnicas, los artículos de Endpoint y mis proyectos mediante una identidad pública coherente.',
        methodology:
          'Desarrollo iterativo dirigido por una persona y aumentado por IA',
        imageAlt:
          'Página de inicio del Portfolio Profesional 2026 con su navegación de escritorio y presentación profesional',
        metrics: en.projects.items[0].metrics.map((metric, index) => ({
          ...metric,
          label: [
            'Desarrollo activo inicial',
            'Sesiones iniciales',
            'Período inicial',
            'Código escrito manualmente por el desarrollador',
            'Dirección humana y validación',
            'Implementación del código',
            'Análisis y apoyo editorial',
            'Git, commit, push y publicación',
            'Idiomas',
            'Estado',
          ][index],
          value: [
            '13 horas',
            '2',
            '27–28 de julio de 2026',
            '0 líneas',
            'Pablo Dorin',
            'OpenAI Codex',
            'ChatGPT',
            'Pablo Dorin',
            'Inglés, español y francés',
            'Publicado y en evolución',
          ][index],
        })),
        actions: en.projects.items[0].actions.map((action, index) => ({
          ...action,
          label: [
            'Ver sitio publicado',
            'Ver repositorio',
            'Ver caso de estudio',
            'Ver artículo en Endpoint',
          ][index],
          href:
            action.id === 'endpoint-article'
              ? '/es/endpoint/portfolio-profesional-2026/'
              : action.href,
        })),
      },
      {
        ...en.projects.items[1],
        title: 'JS1: Gestor de postulaciones laborales',
        type: 'Proyecto de portfolio',
        status: 'Planificado',
        purpose:
          'Una aplicación full-stack para organizar postulaciones laborales, empresas, posiciones, entrevistas, estados y acciones de seguimiento.',
        technicalApproach:
          'Diseñada como una aplicación de estilo empresarial y alcance controlado, con backend Java, persistencia relacional, API REST, pruebas, contenerización y una interfaz web sencilla.',
        actionNote:
          'El repositorio y la demo se añadirán cuando el proyecto esté implementado.',
      },
      ...en.projects.items.slice(2).map((project, index) => ({
        ...project,
        title: `Proyecto 0${index + 3}`,
        type: 'Proyecto de portfolio',
        status: 'Por definir',
        purpose: [
          'El tercer proyecto de portfolio será definido una vez aprobados su objetivo técnico, su alcance y el valor que deberá demostrar.',
          'El cuarto proyecto de portfolio será definido una vez aprobados su objetivo técnico, su alcance y el valor que deberá demostrar.',
        ][index],
      })),
    ],
    labels: {
      carousel: 'Proyectos de portfolio seleccionados',
      previous: 'Proyecto anterior',
      next: 'Proyecto siguiente',
      indicators: 'Elegir un proyecto',
      goToProject: 'Ir al proyecto {number}',
      slidePosition: 'Proyecto {current} de {total}',
      status: 'Estado',
      purpose: 'Propósito',
      methodology: 'Metodología de desarrollo',
      metrics: 'Resumen de productividad inicial',
      verifiedStack: 'Stack verificado',
      actions: 'Enlaces del proyecto',
      authorship:
        'Conservé la autoría y el control mediante la dirección del producto, los requisitos, el contenido, las decisiones de diseño, los criterios de aceptación, la identificación de defectos, la validación y la publicación.',
      technicalApproach: 'Enfoque técnico',
      plannedStack: 'Stack planificado',
      detailCarousel: 'Detalles del Proyecto 01',
      previousDetail: 'Detalle anterior del proyecto',
      nextDetail: 'Detalle siguiente del proyecto',
      detailIndicators: 'Elegir un detalle del Proyecto 01',
      projectOverview: 'Presentación del proyecto',
      projectMethod: 'Propósito, metodología y autoría',
      sitePreview: 'Vista del sitio publicado',
      projectMetrics: 'Métricas del proyecto',
    },
  },
  education: {
    ...en.education,
    title: 'Educación',
    introduction:
      'Estudios formales en análisis de sistemas, psicología y economía, complementados por una distinción internacional de liderazgo.',
    items: en.education.items.map((item) => ({
      ...item,
      ...educationCopy[item.id],
    })),
    distinction: {
      ...en.education.distinction,
      organization: 'Departamento de Estado de los Estados Unidos',
      participantLabel: 'Participante seleccionado,',
      programName:
        'Programa de Liderazgo para Visitantes Internacionales',
      location: 'Washington, D. C., Estados Unidos',
    },
    academicStudies: 'Estudios académicos',
    distinctionLabel: 'Distinción internacional',
    index: {
      ...en.education.index,
      ariaLabel: 'Ir directamente a un estudio o distinción',
      jumpLabel: 'Ir a una entrada',
      jumpToPrefix: 'Ir a',
      distinctionAccessibleLabel:
        'Programa de Liderazgo para Visitantes Internacionales',
    },
  },
  languages: {
    title: 'Idiomas',
    introduction:
      'Idiomas utilizados en la colaboración profesional, el trabajo internacional y el aprendizaje cultural continuo.',
    items: [
      { language: 'Español', level: 'Nativo' },
      {
        language: 'Inglés',
        level: 'Competencia profesional completa',
        detail: 'Trabajo fluido en equipos profesionales angloparlantes.',
      },
      {
        language: 'Francés',
        level: 'Competencia laboral limitada',
        detail: 'En perfeccionamiento mediante estudio y práctica continuos.',
      },
    ],
  },
  endpointBlog: {
    ...en.endpointBlog,
    label: 'Escritura técnica',
    tagline: 'Request & Response about the IT industry',
    introduction:
      'Endpoint es un blog técnico sobre desarrollo de software, sistemas empresariales, integración, arquitectura y el uso responsable de la IA en los flujos de trabajo de ingeniería.',
    carousel: {
      label: 'Artículos de Endpoint',
      sortLabel: 'Orden de los artículos',
      oldestFirst: 'Más antiguos primero',
      newestFirst: 'Más recientes primero',
      previous: 'Artículo anterior',
      next: 'Artículo siguiente',
      indicators: 'Elegir un artículo de Endpoint',
      goTo: 'Ir al artículo {number}',
      technologiesLabel: 'Tecnologías y temas del artículo',
    },
    writtenBy: 'Escrito por Pablo Dorin',
    tagsLabel: 'Etiquetas del artículo',
    article: {
      articleNumber: 'Artículo',
      back: 'Volver a Endpoint',
      backPath: '/es/#endpoint',
      backToProject: 'Volver al Proyecto 01',
      projectPath: '/es/#projects',
      returnNavigationLabel: 'Navegación de regreso',
      previous: 'Artículo anterior',
      next: 'Artículo siguiente',
      date: '28 de julio de 2026',
      disclosure:
        'Artículo escrito originalmente en español. Las versiones en inglés y francés fueron traducidas con asistencia de IA y revisadas por el autor.',
      tagsLabel: 'Etiquetas del artículo',
      navigationLabel: 'Navegación entre artículos',
      languageLabel: 'Idioma del artículo',
    },
  },
  aiWorkflow: {
    ...en.aiWorkflow,
    title: 'Flujo con IA',
    introduction: [
      'Uso la inteligencia artificial como herramienta de ingeniería, no como sustituto del juicio técnico.',
      'La IA puede acelerar la exploración, la implementación, la documentación y la revisión. Sin embargo, comprender el problema, definir las restricciones, tomar decisiones técnicas, validar los resultados y asumir la responsabilidad por la solución final siguen siendo responsabilidades humanas.',
    ],
    steps: en.aiWorkflow.steps.map((step) => ({
      ...step,
      ...aiStepCopy[step.id],
    })),
    stepsLabel: 'Pasos del flujo con IA',
    conclusionTitle: 'Ingeniería dirigida por personas',
    finalPrinciple:
      'El resultado no es una generación autónoma de software, sino un proceso de ingeniería dirigido por personas y respaldado por una herramienta potente. La IA aumenta la velocidad y la capacidad de exploración; el juicio profesional aporta dirección, validación y responsabilidad.',
  },
  about: {
    ...en.about,
    title: 'Sobre mí',
    areas: en.about.areas.map((area) => ({
      ...area,
      ...aboutCopy[area.id],
    })),
    indexLabel: 'Explorar un interés',
    indexAriaLabel: 'Explorar directamente un interés',
    portraitAlt: 'Retrato de Pablo Dorin',
  },
  contact: {
    ...en.contact,
    content: {
      ...en.contact.content,
      label: 'Contacto',
      title: 'Hablemos.',
      introduction:
        'Abierto a oportunidades, trabajo en software empresarial y conversaciones sobre integración de sistemas e ingeniería aumentada por IA.',
      availability:
        'Con base en Buenos Aires, disponible para trabajar presencialmente a nivel local o remoto internacional. El correo electrónico es la mejor manera de iniciar una conversación.',
    },
    links: en.contact.links.map((link) => ({
      ...link,
      label: {
        email: 'Enviarme un correo',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        cv: 'Descargar CV',
      }[link.id],
    })),
    profilesLabel: 'Perfiles profesionales',
    newTabLabel: '(se abre en una pestaña nueva)',
  },
}

export default es
