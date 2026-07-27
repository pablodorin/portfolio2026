import useTranslation from '../../i18n/useTranslation.js'

function TechnologiesIndex({ groups }) {
  const { messages } = useTranslation()
  const index = messages.technologies.index
  const indexItems = [
    ...groups,
    {
      id: 'ai-workflow',
      title: index.aiWorkflow,
    },
  ]

  function handleSelection(event) {
    const groupId = event.target.value

    if (!groupId) {
      return
    }

    document.getElementById(groupId)?.scrollIntoView()
    window.history.pushState(null, '', `#${groupId}`)
  }

  return (
    <nav
      className="technologies-index"
      aria-label={index.ariaLabel}
      data-reveal
      data-reveal-delay="1"
    >
      <label
        className="technologies-index__mobile-label"
        htmlFor="technologies-selector"
      >
        {index.mobileLabel}
      </label>
      <select
        id="technologies-selector"
        className="technologies-index__selector"
        defaultValue=""
        onChange={handleSelection}
      >
        <option value="" disabled>
          {index.placeholder}
        </option>
        {indexItems.map(({ id, title }) => (
          <option key={id} value={id}>
            {title}
          </option>
        ))}
      </select>

      <div className="technologies-index__desktop">
        <p>{index.jumpLabel}</p>
        <ol>
          {indexItems.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default TechnologiesIndex
