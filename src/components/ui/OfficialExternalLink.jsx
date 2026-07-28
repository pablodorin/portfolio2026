import useTranslation from '../../i18n/useTranslation.js'

function OfficialExternalLink({ children, href }) {
  const { messages } = useTranslation()

  return (
    <a
      className="official-external-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="official-external-link__icon" aria-hidden="true">
        ↗
      </span>
      <span className="visually-hidden">
        {' '}
        {messages.contact.newTabLabel}
      </span>
    </a>
  )
}

export default OfficialExternalLink
