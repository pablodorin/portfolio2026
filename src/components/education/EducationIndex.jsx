import useTranslation from '../../i18n/useTranslation.js'

function EducationIndex({ distinction, studies }) {
  const { messages } = useTranslation()
  const index = messages.education.index
  const destinations = [
    ...studies.map(({ id, institution, shortLabel }) => ({
      id,
      accessibleLabel: institution,
      label: shortLabel,
    })),
    {
      id: distinction.id,
      accessibleLabel: index.distinctionAccessibleLabel,
      label: distinction.abbreviation,
    },
  ]

  return (
    <nav
      className="education-index"
      aria-label={index.ariaLabel}
      data-reveal
      data-reveal-delay="1"
    >
      <p>{index.jumpLabel}</p>
      <ul>
        {destinations.map(({ accessibleLabel, id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-label={`${index.jumpToPrefix} ${accessibleLabel}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default EducationIndex
