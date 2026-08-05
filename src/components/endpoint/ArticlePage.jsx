import {
  formatArticleDate,
  getArticleById,
} from '../../content/articles/index.js'
import useTheme from '../../hooks/useTheme.js'
import useTranslation from '../../i18n/useTranslation.js'
import ThemeToggle from '../ui/ThemeToggle.jsx'

function renderInlineMarkdown(text) {
  const pattern = /(\[([^\]]+)\]\((https?:\/\/[^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*)/gu
  const content = []
  let lastIndex = 0

  for (const match of text.matchAll(pattern)) {
    if (match.index > lastIndex) {
      content.push(text.slice(lastIndex, match.index))
    }

    if (match[2] && match[3]) {
      content.push(
        <a key={`${match.index}-${match[3]}`} href={match[3]}>
          {match[2]}
        </a>,
      )
    } else if (match[4]) {
      content.push(<strong key={match.index}>{match[4]}</strong>)
    } else if (match[5]) {
      content.push(<em key={match.index}>{match[5]}</em>)
    }

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    content.push(text.slice(lastIndex))
  }

  return content
}

function ArticlePage({ article, language, translation }) {
  const { messages } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const labels = messages.endpointBlog.article
  const previous = getArticleById(article.previousId)
  const next = getArticleById(article.nextId)

  return (
    <div className="article-page">
      <a className="skip-link" href="#article-content">
        {messages.site.skipToContent}
      </a>
      <header className="article-site-header">
        <a className="article-site-header__brand" href={labels.backPath}>
          Endpoint
        </a>
        <nav aria-label={labels.languageLabel}>
          {Object.entries(article.translations).map(([code, item]) => (
            <a
              key={code}
              href={item.path}
              hrefLang={code}
              lang={code}
              aria-current={code === language ? 'page' : undefined}
            >
              {code.toUpperCase()}
            </a>
          ))}
        </nav>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>
      <main id="article-content" className="article-main">
        <article>
          <nav
            className="article-back-navigation"
            aria-label={labels.returnNavigationLabel}
          >
            <a className="article-back-link" href={labels.backPath}>
              ← {labels.back}
            </a>
            {article.id === 'professional-portfolio-2026' ? (
              <a
                className="article-back-link article-back-link--project"
                href={labels.projectPath}
              >
                ← {labels.backToProject}
              </a>
            ) : null}
          </nav>
          <header className="article-header">
            <p className="article-number">
              {labels.articleNumber} {article.number}
            </p>
            <h1>{translation.title}</h1>
            <p className="article-copete">{translation.copete}</p>
            <p className="article-bajada">{translation.bajada}</p>
            <time className="article-date" dateTime={article.datePublished}>
              {formatArticleDate(article.datePublished, language)}
            </time>
            <p className="article-disclosure">
              {translation.disclosure ?? labels.disclosure}
            </p>
          </header>
          <div className="article-body">
            {translation.sections.map(({ heading, paragraphs }) => (
              <section key={heading}>
                <h2>{heading}</h2>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{renderInlineMarkdown(paragraph)}</p>
                ))}
              </section>
            ))}
          </div>
          <footer className="article-footer">
            <ul className="endpoint-tag-list" aria-label={labels.tagsLabel}>
              {article.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <nav
              className="article-pagination"
              aria-label={labels.navigationLabel}
            >
              <a href={previous.translations[language].path}>
                <span>{labels.previous}</span>
                <strong>{previous.translations[language].title}</strong>
              </a>
              <a href={next.translations[language].path}>
                <span>{labels.next}</span>
                <strong>{next.translations[language].title}</strong>
              </a>
            </nav>
            <a className="article-footer-back" href={labels.backPath}>
              ← {labels.back}
            </a>
          </footer>
        </article>
      </main>
    </div>
  )
}

export default ArticlePage
