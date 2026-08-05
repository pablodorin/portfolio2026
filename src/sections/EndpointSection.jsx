import { useState } from 'react'
import ArticleCard from '../components/endpoint/ArticleCard.jsx'
import { articles } from '../content/articles/index.js'
import useTranslation from '../i18n/useTranslation.js'

function EndpointSection() {
  const { language, messages } = useTranslation()
  const endpoint = messages.endpointBlog
  const [sortDirection, setSortDirection] = useState('newest')
  const [activeIndex, setActiveIndex] = useState(0)

  const orderedArticles = articles
    .filter((article) => article.translations[language])
    .sort((articleA, articleB) => {
    const dateComparison = articleA.datePublished.localeCompare(
      articleB.datePublished,
    )
    const orderComparison = articleA.order - articleB.order
    const comparison = dateComparison || orderComparison

    return sortDirection === 'oldest' ? comparison : -comparison
    })
  const activeArticle = orderedArticles[activeIndex]

  function selectArticle(index) {
    setActiveIndex(
      (index + orderedArticles.length) % orderedArticles.length,
    )
  }

  function handleSortChange(event) {
    setSortDirection(event.target.value)
    setActiveIndex(0)
  }

  function handleKeyDown(event) {
    if (event.target.closest('a, button, select')) {
      return
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      selectArticle(activeIndex - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      selectArticle(activeIndex + 1)
    }
  }

  return (
    <section
      id="endpoint"
      className="endpoint-section"
      aria-labelledby="endpoint-title"
    >
      <header className="endpoint-section__header" data-reveal>
        <p className="endpoint-section__label">{endpoint.label}</p>
        <h2 id="endpoint-title">Endpoint Blog</h2>
        <p className="endpoint-section__tagline">{endpoint.tagline}</p>
        <p className="endpoint-section__introduction">
          {endpoint.introduction}
        </p>
      </header>
      <div
        className="endpoint-carousel"
        role="region"
        aria-label={endpoint.carousel.label}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        data-reveal
      >
        <div className="endpoint-carousel__toolbar">
          <label htmlFor="endpoint-sort">
            {endpoint.carousel.sortLabel}
          </label>
          <select
            id="endpoint-sort"
            value={sortDirection}
            onChange={handleSortChange}
          >
            <option value="oldest">
              {endpoint.carousel.oldestFirst}
            </option>
            <option value="newest">
              {endpoint.carousel.newestFirst}
            </option>
          </select>
        </div>

        <div className="endpoint-carousel__viewport">
          <ArticleCard
            key={`${sortDirection}-${activeArticle.id}`}
            article={activeArticle}
            index={activeIndex}
            reveal={false}
          />
        </div>

        <div className="endpoint-carousel__controls">
          <button
            type="button"
            onClick={() => selectArticle(activeIndex - 1)}
          >
            <span aria-hidden="true">←</span>
            <span>{endpoint.carousel.previous}</span>
          </button>
          <p aria-hidden="true">
            {activeIndex + 1} / {orderedArticles.length}
          </p>
          <button
            type="button"
            onClick={() => selectArticle(activeIndex + 1)}
          >
            <span>{endpoint.carousel.next}</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div
          className="endpoint-carousel__indicators"
          aria-label={endpoint.carousel.indicators}
        >
          {orderedArticles.map((article, index) => (
            <button
              key={article.id}
              type="button"
              aria-label={endpoint.carousel.goTo.replace(
                '{number}',
                index + 1,
              )}
              aria-current={activeIndex === index ? 'true' : undefined}
              onClick={() => selectArticle(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <p className="visually-hidden" aria-live="polite">
          {activeArticle.translations[language].title}
        </p>
      </div>
    </section>
  )
}

export default EndpointSection
