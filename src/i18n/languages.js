export const supportedLanguages = [
  { code: 'en', shortLabel: 'EN' },
  { code: 'es', shortLabel: 'ES' },
  { code: 'fr', shortLabel: 'FR' },
]

export const defaultLanguage = 'en'
export const languageStorageKey = 'portfolio-language'

export function isSupportedLanguage(language) {
  return supportedLanguages.some(({ code }) => code === language)
}
