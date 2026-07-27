import EducationIndex from '../components/education/EducationIndex.jsx'
import useTranslation from '../i18n/useTranslation.js'

function EducationSection() {
  const { messages } = useTranslation()
  const {
    academicStudies,
    distinction,
    distinctionLabel,
    introduction,
    items,
    title,
  } = messages.education

  return (
    <section
      id="education"
      className="education-section"
      aria-labelledby="education-title"
    >
      <header className="education-section__header" data-reveal>
        <h2 id="education-title">{title}</h2>
        <p>{introduction}</p>
      </header>

      <EducationIndex
        studies={items}
        distinction={distinction}
      />

      <div className="education-section__grid">
        <div className="education-section__studies">
          <h3 data-reveal data-reveal-delay="1">
            {academicStudies}
          </h3>
          <ol className="education-list">
            {items.map(({ dates, id, institution, program }, index) => (
              <li
                key={id}
                id={id}
                className="education-entry"
                data-reveal
                data-reveal-delay={String((index % 3) + 1)}
              >
                <p className="education-entry__meta">
                  <span className="education-entry__dates">{dates}</span>
                </p>
                <h4>{institution}</h4>
                <p className="education-entry__program">{program}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside
          id={distinction.id}
          className="education-distinction"
          aria-labelledby="education-distinction-title"
          data-reveal
          data-reveal-delay="2"
        >
          <p className="education-distinction__eyebrow">
            {distinctionLabel} · {distinction.date}
          </p>
          <h3 id="education-distinction-title">
            {distinction.abbreviation}
          </h3>
          <p className="education-distinction__title">
            {distinction.title}
          </p>
          <p className="education-distinction__meta">
            <span>{distinction.organization}</span>
            <span aria-hidden="true"> · </span>
            <span>{distinction.location}</span>
          </p>
        </aside>
      </div>
    </section>
  )
}

export default EducationSection
