export const productionOrigin = 'https://pablodorin.com'
export const canonicalUrl = `${productionOrigin}/`
export const profilePageId = `${canonicalUrl}#profile`
export const personId = `${canonicalUrl}#person`

export const publicProfiles = [
  'https://www.linkedin.com/in/pablo-dorin/',
  'https://github.com/pablodorin',
]

export const knownLanguages = ['Spanish', 'English', 'French']

export const seoContent = {
  en: {
    canonicalUrl,
    title: 'Pablo Dorin | Senior Java Developer',
    description:
      'Senior software developer specialising in Java backend development, enterprise applications, system integration, and AI-augmented engineering.',
    ogLocale: 'en_US',
    jobTitle: 'Senior Software Developer',
    ogAlternateLocales: ['es_AR', 'fr_FR'],
  },
  es: {
    canonicalUrl: `${productionOrigin}/es/`,
    title: 'Pablo Dorin | Desarrollador Java Senior',
    description:
      'Desarrollador de software senior especializado en desarrollo backend con Java, aplicaciones empresariales, integración de sistemas e ingeniería aumentada por IA.',
    ogLocale: 'es_AR',
    jobTitle: 'Desarrollador de Software Senior',
    ogAlternateLocales: ['en_US', 'fr_FR'],
  },
  fr: {
    canonicalUrl: `${productionOrigin}/fr/`,
    title: 'Pablo Dorin | Développeur Java senior',
    description:
      'Développeur logiciel senior spécialisé en développement backend Java, applications d’entreprise, intégration de systèmes et ingénierie augmentée par l’IA.',
    ogLocale: 'fr_FR',
    jobTitle: 'Développeur logiciel senior',
    ogAlternateLocales: ['en_US', 'es_AR'],
  },
}

export const defaultSeoContent = seoContent.en
