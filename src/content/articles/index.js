import generatedArticles from './generatedArticles.js'

export const articleLanguages = ['en', 'es', 'fr']

export const articles = Object.freeze(generatedArticles)

export function getArticleById(id) {
  return articles.find((article) => article.id === id) ?? null
}

export function getArticlePage(pathname) {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`

  for (const article of articles) {
    for (const language of articleLanguages) {
      if (article.translations[language].path === normalized) {
        return { article, language, translation: article.translations[language] }
      }
    }
  }

  return null
}

export function formatArticleDate(date, language) {
  return new Intl.DateTimeFormat(language, {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00Z`))
}
