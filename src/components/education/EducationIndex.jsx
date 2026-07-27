function EducationIndex({ distinction, studies }) {
  const destinations = [
    ...studies.map(({ id, institution, shortLabel }) => ({
      id,
      accessibleLabel: institution,
      label: shortLabel,
    })),
    {
      id: distinction.id,
      accessibleLabel: 'International Visitor Leadership Program',
      label: distinction.abbreviation,
    },
  ]

  return (
    <nav className="education-index" aria-label="Education entries">
      <p>Jump to an entry</p>
      <ul>
        {destinations.map(({ accessibleLabel, id, label }) => (
          <li key={id}>
            <a href={`#${id}`} aria-label={`Jump to ${accessibleLabel}`}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default EducationIndex
