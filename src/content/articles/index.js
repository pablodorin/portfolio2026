import aiAugmentedEngineering from './aiAugmentedEngineering.js'
import codeBottleneck from './codeBottleneck.js'
import microservices from './microservices.js'
import portfolio2026Article from './portfolio2026Article.js'

export const articleLanguages = ['en', 'es', 'fr']

const languageRoots = {
  en: '/endpoint',
  es: '/es/endpoint',
  fr: '/fr/endpoint',
}

const rawArticles = [
  aiAugmentedEngineering,
  codeBottleneck,
  microservices,
  portfolio2026Article,
]

function countWords(value) {
  return value.trim().split(/\s+/u).filter(Boolean).length
}

function createTranslation(article, language, translation) {
  const path = `${languageRoots[language]}/${translation.slug}/`
  const text = [
    translation.title,
    translation.copete,
    translation.bajada,
    ...translation.sections.flatMap(({ heading, paragraphs }) => [
      heading,
      ...paragraphs,
    ]),
  ].join(' ')

  return Object.freeze({
    ...translation,
    language,
    path,
    canonicalUrl: `https://pablodorin.com${path}`,
    wordCount: countWords(text),
  })
}

export const articles = Object.freeze(
  rawArticles.map((article, index) => {
    const translations = Object.fromEntries(
      articleLanguages.map((language) => [
        language,
        createTranslation(
          article,
          language,
          article.translations[language],
        ),
      ]),
    )

    return Object.freeze({
      ...article,
      order: index + 1,
      previousId:
        rawArticles[(index - 1 + rawArticles.length) % rawArticles.length].id,
      nextId: rawArticles[(index + 1) % rawArticles.length].id,
      translations: Object.freeze(translations),
    })
  }),
)

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
