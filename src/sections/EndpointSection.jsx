import ArticleCard from '../components/endpoint/ArticleCard.jsx'
import { articles } from '../content/articles/index.js'
import useTranslation from '../i18n/useTranslation.js'

function EndpointSection() {
  const { messages } = useTranslation()
  const endpoint = messages.endpointBlog

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
      <div className="endpoint-section__articles">
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </section>
  )
}

export default EndpointSection
