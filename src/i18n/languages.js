export const supportedLanguages = [
  { code: 'en', path: '/', shortLabel: 'EN' },
  { code: 'es', path: '/es/', shortLabel: 'ES' },
  { code: 'fr', path: '/fr/', shortLabel: 'FR' },
]

export const defaultLanguage = 'en'
export const languageStorageKey = 'portfolio-language'

export function isSupportedLanguage(language) {
  return supportedLanguages.some(({ code }) => code === language)
}

export function getPathLanguage(pathname) {
  const [firstSegment] = pathname.split('/').filter(Boolean)

  if (!firstSegment) {
    return defaultLanguage
  }

  return isSupportedLanguage(firstSegment) && firstSegment !== defaultLanguage
    ? firstSegment
    : null
}
