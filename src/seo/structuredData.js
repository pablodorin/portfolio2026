import {
  canonicalUrl,
  knownLanguages,
  personId,
  profilePageId,
  publicProfiles,
} from './seoContent.js'

export function createStructuredData(language, metadata) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': profilePageId,
    url: metadata.canonicalUrl,
    name: metadata.title,
    description: metadata.description,
    inLanguage: language,
    mainEntity: {
      '@type': 'Person',
      '@id': personId,
      name: 'Pablo Dorin',
      url: canonicalUrl,
      jobTitle: metadata.jobTitle,
      description: metadata.description,
      sameAs: publicProfiles,
      knowsLanguage: knownLanguages,
    },
  }
}
