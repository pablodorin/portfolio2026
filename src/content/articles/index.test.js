import {
  articleLanguages,
  articles,
  formatArticleDate,
  getAdjacentArticle,
  getArticleById,
  getArticlePage,
} from './index.js'

describe('article registry', () => {
  test('resolves localized paths with or without a trailing slash', () => {
    const translation = articles[0].translations.es
    expect(getArticlePage(translation.path.slice(0, -1))).toMatchObject({
      article: { id: articles[0].id },
      language: 'es',
      translation: { path: translation.path },
    })
    expect(getArticlePage('/missing/')).toBeNull()
  })

  test('returns articles by id and null for unknown ids', () => {
    expect(getArticleById(articles[0].id)).toBe(articles[0])
    expect(getArticleById('missing')).toBeNull()
  })

  test.each(articleLanguages)('provides circular navigation in %s', (language) => {
    const first = articles[0]
    expect(getAdjacentArticle(first.id, language, 'previous').id).toBe(
      articles.at(-1).id,
    )
    expect(getAdjacentArticle(first.id, language, 'next').id).toBe(articles[1].id)
  })

  test('formats dates in the requested locale and UTC', () => {
    expect(formatArticleDate('2026-07-28', 'en')).toBe('July 28, 2026')
    expect(formatArticleDate('2026-07-28', 'es')).toContain('2026')
  })
})
