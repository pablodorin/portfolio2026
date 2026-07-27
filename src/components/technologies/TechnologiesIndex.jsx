function TechnologiesIndex({ groups }) {
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
      aria-label="Technology groups"
    >
      <label
        className="technologies-index__mobile-label"
        htmlFor="technologies-selector"
      >
        Select a technology group
      </label>
      <select
        id="technologies-selector"
        className="technologies-index__selector"
        defaultValue=""
        onChange={handleSelection}
      >
        <option value="" disabled>
          Choose a group
        </option>
        {groups.map(({ id, title }) => (
          <option key={id} value={id}>
            {title}
          </option>
        ))}
      </select>

      <div className="technologies-index__desktop">
        <p>Jump to a technology group</p>
        <ol>
          {groups.map(({ id, title }) => (
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
