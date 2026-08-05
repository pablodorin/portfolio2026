import useTranslation from '../i18n/useTranslation.js'

function LanguagesSection() {
  const { messages } = useTranslation()
  const { introduction, items, title } = messages.languages

  return (
    <section
      id="languages"
      className="languages-section"
      aria-labelledby="languages-title"
    >
      <header className="languages-section__header">
        <h2 id="languages-title">{title}</h2>
        <p>{introduction}</p>
      </header>

      <dl className="languages-list">
        {items.map(({ detail, language, level }) => (
          <div
            className="language-entry"
            key={language}
          >
            <dt>{language}</dt>
            <dd>
              <strong>{level}</strong>
              {detail && <span>{detail}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default LanguagesSection
