import {
  formatArticleDate,
} from '../../content/articles/index.js'
import useTranslation from '../../i18n/useTranslation.js'

function ArticleCard({ article, index }) {
  const { language } = useTranslation()
  const translation = article.translations[language]

  return (
    <article
      className="endpoint-card"
      data-reveal
      data-reveal-delay={String((index % 3) + 1)}
    >
      <a
        className="endpoint-card__link"
        href={translation.path}
        aria-label={translation.title}
      >
        <div className="endpoint-card__meta">
          <span>{article.order}</span>
          <time dateTime={article.datePublished}>
            {formatArticleDate(article.datePublished, language)}
          </time>
        </div>
        <p className="endpoint-card__kicker">{translation.kicker}</p>
        <h3>{translation.title}</h3>
        <p className="endpoint-card__copete">{translation.cardCopete}</p>
      </a>
    </article>
  )
}

export default ArticleCard
