import useTranslation from '../../i18n/useTranslation.js'
import { InstitutionLogo } from '../ui/InstitutionIdentity.jsx'

function ExperienceIndex({ experiences }) {
  const { messages } = useTranslation()
  const index = messages.experience.index
  const indexItems = [
    ...experiences,
    {
      company: index.freelanceCompany,
      dates: index.freelanceAction,
      id: 'projects',
    },
  ]

  function handleSelection(event) {
    const experienceId = event.target.value

    if (!experienceId) {
      return
    }

    document.getElementById(experienceId)?.scrollIntoView()
    window.history.pushState(null, '', `#${experienceId}`)
  }

  return (
    <nav
      className="experience-index"
      aria-label={index.ariaLabel}
      data-reveal
      data-reveal-delay="1"
    >
      <label
        className="experience-index__mobile-label"
        htmlFor="experience-selector"
      >
        {index.mobileLabel}
      </label>
      <select
        id="experience-selector"
        className="experience-index__selector"
        defaultValue=""
        onChange={handleSelection}
      >
        <option value="" disabled>
          {index.placeholder}
        </option>
        {indexItems.map(({ company, id }) => (
          <option key={id} value={id}>
            {company}
          </option>
        ))}
      </select>

      <div className="experience-index__desktop">
        <p className="experience-index__label">{index.jumpLabel}</p>
        <ol>
          {indexItems.map(({ company, dates, id }) => (
            <li key={id}>
              <a href={`#${id}`}>
                <span className="experience-index__identity">
                  <InstitutionLogo
                    institutionId={id}
                    source={id === 'projects' ? '/favicon.svg' : undefined}
                  />
                  <span>{company}</span>
                </span>
                <span className="experience-index__dates">{dates}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default ExperienceIndex
