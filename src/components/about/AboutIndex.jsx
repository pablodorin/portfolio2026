import useTranslation from '../../i18n/useTranslation.js'

function AboutIndex({ areas }) {
  const { messages } = useTranslation()

  return (
    <nav
      className="about-index"
      aria-label={messages.about.indexAriaLabel}
      data-reveal
      data-reveal-delay="2"
    >
      <p>{messages.about.indexLabel}</p>
      <ol>
        {areas.map(({ id, title }) => (
          <li key={id}>
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default AboutIndex
