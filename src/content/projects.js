const portfolioRepository =
  'https://github.com/pablodorin/portfolio2026'

export const portfolioProjectStack = [
  'React 19.2.8',
  'JavaScript',
  'Vite 8.1.5',
  'HTML',
  'CSS',
  'Git & GitHub',
  'GitHub Actions & Pages',
  'Cloudflare Analytics',
  'JSON-LD & Open Graph',
  'EN/ES/FR static pages',
]

export const js1Stack = [
  'Java 17',
  'Spring Boot',
  'PostgreSQL',
  'REST',
  'HTML',
  'CSS',
  'JavaScript',
  'JUnit',
  'Git',
  'Docker',
]

export const projects = [
  {
    id: 'portfolio2026',
    order: 1,
    number: '01',
    featured: true,
    title: 'Professional Portfolio 2026',
    type: 'Live Portfolio Project',
    status: 'Live and evolving',
    statement:
      'A multilingual professional portfolio, technical blog and project showcase designed, implemented and published through a human-directed AI-augmented development workflow.',
    purpose:
      'Built to present my professional experience, technical capabilities, Endpoint articles and portfolio projects through one coherent public identity.',
    methodology: 'Human-directed, AI-augmented iterative development',
    image: '/images/projects/portfolio2026-home.png',
    imageAlt:
      'Home page of Professional Portfolio 2026 with its desktop navigation and professional introduction',
    metrics: [
      { id: 'active-time', label: 'Initial active development', value: '13 hours' },
      { id: 'sessions', label: 'Initial sessions', value: '2' },
      { id: 'period', label: 'Initial period', value: 'July 27–28, 2026' },
      {
        id: 'manual-code',
        label: 'Manual code written by developer',
        value: '0 lines',
      },
      { id: 'direction', label: 'Human direction and validation', value: 'Pablo Dorin' },
      { id: 'implementation', label: 'Code implementation', value: 'OpenAI Codex' },
      { id: 'editorial', label: 'Analysis and editorial support', value: 'ChatGPT' },
      {
        id: 'publication',
        label: 'Git, commit, push and publication',
        value: 'Pablo Dorin',
      },
      { id: 'languages', label: 'Languages', value: 'English, Spanish and French' },
      { id: 'status', label: 'Status', value: 'Live and evolving' },
    ],
    stack: portfolioProjectStack,
    actions: [
      { id: 'live', label: 'View live site', href: 'https://pablodorin.com' },
      { id: 'repository', label: 'View repository', href: portfolioRepository },
      {
        id: 'case-study',
        label: 'View case study',
        href: `${portfolioRepository}/blob/main/docs/PORTFOLIO_PRODUCTIVITY_CASE_STUDY.md`,
      },
      {
        id: 'endpoint-article',
        label: 'View Endpoint article',
        href: '/endpoint/professional-portfolio-2026/',
        external: false,
      },
    ],
  },
  {
    id: 'js1-job-application-manager',
    order: 2,
    number: '02',
    title: 'JS1: Job Application Manager',
    type: 'Portfolio Project',
    status: 'Planned',
    purpose:
      'A full-stack application for organising job applications, companies, roles, interviews, statuses, and follow-up actions.',
    technicalApproach:
      'Designed as a focused enterprise-style application using a Java backend, relational persistence, a REST API, tests, containerisation, and a simple web interface.',
    stack: js1Stack,
    actionNote:
      'Repository and demo will be added when the project is implemented.',
  },
  ...[3, 4].map((order) => ({
    id: `project-0${order}`,
    order,
    number: `0${order}`,
    title: `Project 0${order}`,
    type: 'Portfolio Project',
    status: 'To be defined',
    purpose: `The ${order === 3 ? 'third' : 'fourth'} portfolio project will be defined after its technical objective, scope, and demonstration value are approved.`,
  })),
]
