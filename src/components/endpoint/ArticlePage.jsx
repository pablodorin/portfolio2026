import { getArticleById } from '../../content/articles/index.js'
import useTheme from '../../hooks/useTheme.js'
import useTranslation from '../../i18n/useTranslation.js'
import ThemeToggle from '../ui/ThemeToggle.jsx'

function ArticlePage({ article, language, translation }) {
  const { messages } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const labels = messages.endpointBlog.article
  const previous = article.draft ? null : getArticleById(article.previousId)
  const next = article.draft ? null : getArticleById(article.nextId)

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
          <a className="article-back-link" href={labels.backPath}>
            ← {labels.back}
          </a>
          <header className="article-header">
            <h1>{translation.title}</h1>
            {article.draft ? null : (
              <>
                <p className="article-copete">{translation.copete}</p>
                <p className="article-bajada">{translation.bajada}</p>
                <div className="article-meta">
                  <p>{labels.writtenBy}</p>
                  <time dateTime={article.datePublished}>{labels.date}</time>
                </div>
                <p className="article-disclosure">{labels.disclosure}</p>
              </>
            )}
          </header>
          <div className="article-body">
            {translation.sections.map(({ heading, paragraphs }) => (
              <section key={heading}>
                <h2>{heading}</h2>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
          {article.draft ? null : <footer className="article-footer">
            <div className="article-signature">
              <strong>Pablo Dorin</strong>
              <span>{labels.signatureRole}</span>
            </div>
            <ul className="endpoint-tag-list" aria-label={labels.tagsLabel}>
              {article.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <nav className="article-pagination" aria-label={labels.navigationLabel}>
              <a href={previous.translations[language].path}>
                <span>{labels.previous}</span>
                <strong>{previous.translations[language].title}</strong>
              </a>
              <a href={next.translations[language].path}>
                <span>{labels.next}</span>
                <strong>{next.translations[language].title}</strong>
              </a>
            </nav>
          </footer>}
        </article>
      </main>
    </div>
  )
}

export default ArticlePage
