function ExperienceIndex({ experiences }) {
  const indexItems = [
    ...experiences,
    {
      company: 'Freelance',
      dates: 'View Projects',
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
      aria-label="Professional experience entries"
    >
      <label
        className="experience-index__mobile-label"
        htmlFor="experience-selector"
      >
        Select an experience
      </label>
      <select
        id="experience-selector"
        className="experience-index__selector"
        defaultValue=""
        onChange={handleSelection}
      >
        <option value="" disabled>
          Choose a company
        </option>
        {indexItems.map(({ company, id }) => (
          <option key={id} value={id}>
            {company}
          </option>
        ))}
      </select>

      <div className="experience-index__desktop">
        <p className="experience-index__label">Jump to an experience</p>
        <ol>
          {indexItems.map(({ company, dates, id }) => (
            <li key={id}>
              <a href={`#${id}`}>
                <span>{company}</span>
                <span>{dates}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default ExperienceIndex
