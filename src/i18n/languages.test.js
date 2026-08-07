import {
  defaultLanguage,
  getPathLanguage,
  isSupportedLanguage,
  supportedLanguages,
} from './languages.js'

describe('localized paths', () => {
  test.each([
    ['/', 'en'],
    ['/es/', 'es'],
    ['/fr/endpoint/article/', 'fr'],
    ['/endpoint/article/', null],
    ['/en/', null],
    ['/de/', null],
  ])('resolves %s to %s', (pathname, expected) => {
    expect(getPathLanguage(pathname)).toBe(expected)
  })

  test('declares English as the default and only supports published locales', () => {
    expect(defaultLanguage).toBe('en')
    expect(supportedLanguages.map(({ code }) => code)).toEqual(['en', 'es', 'fr'])
    expect(isSupportedLanguage('fr')).toBe(true)
    expect(isSupportedLanguage('FR')).toBe(false)
  })
})
