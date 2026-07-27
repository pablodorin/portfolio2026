import useTranslation from '../../i18n/useTranslation.js'

function ExperienceEntry({ experience }) {
  const { messages } = useTranslation()
  const labels = messages.experience.entry
  const {
    company,
    context,
    contributions,
    dates,
    description,
    emphasis,
    id,
    location,
    mobileCompany,
    mobileSummary,
    role,
    technologies,
  } = experience

  return (
    <article
      id={id}
      className={`experience-entry experience-entry--${emphasis}`}
      aria-labelledby={`${id}-company`}
      data-reveal
    >
      <div className="experience-entry__meta">
        <p className="experience-entry__dates">{dates}</p>
        {location && <p>{location}</p>}
      </div>

      <div className="experience-entry__body">
        <h3 id={`${id}-company`}>
          <span className="experience-entry__company-full">{company}</span>
          <span
            className="experience-entry__company-mobile"
            aria-label={company}
          >
            {mobileCompany ?? company}
          </span>
        </h3>
        <p className="experience-entry__role">{role}</p>
        <p className="experience-entry__context">{context}</p>
        <p className="experience-entry__description">{description}</p>

        {mobileSummary && (
          <p className="experience-entry__mobile-summary">
            <strong>
              {contributions.length > 0
                ? labels.selectedContributionsSummary
                : labels.summary}
            </strong>{' '}
            {mobileSummary}
          </p>
        )}

        {contributions.length > 0 && (
          <div className="experience-entry__details">
            <h4>{labels.selectedContributions}</h4>
            <ul className="experience-entry__contributions">
              {contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </div>
        )}

        {technologies.length > 0 && (
          <ul
            className="experience-entry__technologies"
            aria-label={labels.technologiesLabel}
          >
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default ExperienceEntry
