import { aboutAreas } from '../../content/about.js'
import {
  aiWorkflowFinalPrinciple,
  aiWorkflowIntroduction,
  aiWorkflowSteps,
} from '../../content/aiWorkflow.js'
import { contactContent, contactLinks } from '../../content/contact.js'
import {
  educationItems,
  internationalDistinction,
} from '../../content/education.js'
import { experienceItems } from '../../content/experience.js'
import { navigationItems } from '../../content/navigation.js'
import { projects } from '../../content/projects.js'
import { technologyGroups } from '../../content/technologies.js'

const en = {
  site: {
    name: 'Pablo Dorin',
    role: 'Senior Software Developer',
    skipToContent: 'Skip to content',
    portfolioOverview: 'Portfolio overview',
    footer: {
      process:
        'Built through a human-directed, AI-augmented development process.',
      credit: 'Designed, reviewed and published by Pablo Dorin.',
      copyright: '© 2026 Pablo Dorin. All rights reserved.',
      privacy: 'Privacy',
    },
  },
  controls: {
    mobileMenu: {
      openLabel: 'Open portfolio navigation',
      closeLabel: 'Close portfolio navigation',
      openText: 'Menu',
      closeText: 'Close',
    },
    theme: {
      darkLabel: 'Dark',
      lightLabel: 'Light',
      switchToDark: 'Switch to dark theme',
      switchToLight: 'Switch to light theme',
    },
    language: {
      groupLabel: 'Select language',
      options: {
        en: 'Switch language to English',
        es: 'Switch language to Spanish',
        fr: 'Switch language to French',
      },
    },
  },
  navigation: {
    ariaLabel: 'Portfolio sections',
    items: navigationItems,
  },
  home: {
    title: 'Pablo Dorin',
    specialization: 'Java Backend & Full-Stack Development',
    subtitle:
      'Enterprise Applications · System Integration · AI-Augmented Engineering',
    introduction:
      'Senior Software Developer with 18+ years of professional experience delivering enterprise software, Java backend development, system integration, and full-stack solutions across international teams and business-critical environments.',
    actionsLabel: 'Primary actions',
    actions: {
      projects: 'View Projects',
      endpoint: 'Read Endpoint',
      contact: 'Contact Me',
    },
  },
  experience: {
    title: 'Professional Experience',
    introduction:
      'Enterprise engineering, architecture, integration, and technical coordination across international and business-critical environments. Concurrent engagements are identified explicitly.',
    items: experienceItems,
    index: {
      ariaLabel: 'Professional experience entries',
      mobileLabel: 'Select an experience',
      placeholder: 'Choose a company',
      jumpLabel: 'Jump to an experience',
      freelanceCompany: 'Freelance',
      freelanceAction: 'View Projects',
    },
    entry: {
      selectedContributions: 'Selected contributions',
      selectedContributionsSummary: 'Selected contributions.',
      summary: 'Summary.',
      technologiesLabel: 'Technologies and practices',
    },
  },
  technologies: {
    title: 'Technologies',
    introduction:
      'A Java-centered engineering profile spanning enterprise backend development, system integration, software architecture, and full-stack delivery.',
    groups: technologyGroups,
    index: {
      ariaLabel: 'Technology groups',
      mobileLabel: 'Select a technology group',
      placeholder: 'Choose a group',
      jumpLabel: 'Jump to a technology group',
      aiWorkflow: 'AI-Augmented Software Development',
    },
  },
  projects: {
    title: 'Projects',
    introduction:
      'Selected portfolio projects designed to demonstrate backend, full-stack, integration, testing, and AI-augmented development skills.',
    items: projects,
    labels: {
      carousel: 'Selected portfolio projects',
      previous: 'Previous project',
      next: 'Next project',
      indicators: 'Choose a project',
      goToProject: 'Go to project {number}',
      slidePosition: 'Project {current} of {total}',
      status: 'Status',
      purpose: 'Purpose',
      methodology: 'Development methodology',
      metrics: 'Initial productivity snapshot',
        verifiedStack: 'Verified stack',
        actions: 'Project links',
        authorship:
          'I retained authorship and control through product direction, requirements, content, design decisions, acceptance criteria, defect identification, validation, and publication.',
      technicalApproach: 'Technical approach',
        plannedStack: 'Planned stack',
        detailCarousel: 'Project 01 details',
        previousDetail: 'Previous project detail',
        nextDetail: 'Next project detail',
        detailIndicators: 'Choose a Project 01 detail',
        projectOverview: 'Project overview',
        projectMethod: 'Purpose, methodology and authorship',
        sitePreview: 'Live site preview',
        projectMetrics: 'Project metrics',
      },
  },
  education: {
    title: 'Education',
    introduction:
      'Formal studies in systems analysis, psychology, and economics, complemented by an international leadership distinction.',
    items: educationItems,
    distinction: internationalDistinction,
    academicStudies: 'Academic studies',
    distinctionLabel: 'International distinction',
    index: {
      ariaLabel: 'Education entries',
      jumpLabel: 'Jump to an entry',
      jumpToPrefix: 'Jump to',
      distinctionAccessibleLabel:
        'International Visitor Leadership Program',
    },
  },
  endpointBlog: {
    label: 'Technical writing',
    tagline: 'Request & Response about the IT industry',
    introduction:
      'Endpoint is a technical blog about software development, enterprise systems, integration, architecture, and the responsible use of AI in engineering workflows.',
    carousel: {
      label: 'Endpoint articles',
      sortLabel: 'Article order',
      oldestFirst: 'Oldest to newest',
      newestFirst: 'Newest to oldest',
      previous: 'Previous article',
      next: 'Next article',
      indicators: 'Choose an Endpoint article',
      goTo: 'Go to article {number}',
      technologiesLabel: 'Technologies and topics in this article',
    },
    writtenBy: 'Written by Pablo Dorin',
    tagsLabel: 'Article tags',
    article: {
      back: 'Back to Endpoint',
      backPath: '/#endpoint',
      backToProject: 'Back to Project 01',
      projectPath: '/#projects',
      returnNavigationLabel: 'Return navigation',
      previous: 'Previous article',
      next: 'Next article',
      writtenBy: 'Written by Pablo Dorin',
      date: 'July 28, 2026',
      disclosure:
        'Originally written in Spanish. The English and French versions were translated with AI assistance and reviewed by the author.',
      signatureRole: 'Senior Software Developer',
      tagsLabel: 'Article tags',
      navigationLabel: 'Article navigation',
      languageLabel: 'Article language',
    },
  },
  aiWorkflow: {
    title: 'AI-Augmented Engineering',
    introduction: aiWorkflowIntroduction,
    steps: aiWorkflowSteps,
    stepsLabel: 'AI workflow steps',
    conclusionTitle: 'Human-directed engineering',
    finalPrinciple: aiWorkflowFinalPrinciple,
  },
  about: {
    title: 'About Me',
    areas: aboutAreas,
    indexLabel: 'Explore an interest',
    indexAriaLabel: 'About Me topics',
    portraitAlt: 'Portrait of Pablo Dorin',
  },
  contact: {
    content: contactContent,
    links: contactLinks,
    profilesLabel: 'Professional profiles',
    newTabLabel: '(opens in a new tab)',
  },
}

export default en
