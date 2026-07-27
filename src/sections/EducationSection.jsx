import {
  educationItems,
  internationalDistinction,
} from '../content/education.js'
import EducationIndex from '../components/education/EducationIndex.jsx'

function EducationSection() {
  return (
    <section
      id="education"
      className="education-section"
      aria-labelledby="education-title"
    >
      <header className="education-section__header">
        <h2 id="education-title">Education</h2>
        <p>
          Formal studies in systems analysis, psychology, and economics,
          complemented by an international leadership distinction.
        </p>
      </header>

      <EducationIndex
        studies={educationItems}
        distinction={internationalDistinction}
      />

      <div className="education-section__grid">
        <div className="education-section__studies">
          <h3>Academic studies</h3>
          <ol className="education-list">
            {educationItems.map(({ dates, id, institution, program }) => (
              <li key={id} id={id} className="education-entry">
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
          id={internationalDistinction.id}
          className="education-distinction"
          aria-labelledby="education-distinction-title"
        >
          <p className="education-distinction__eyebrow">
            International distinction · {internationalDistinction.date}
          </p>
          <h3 id="education-distinction-title">
            {internationalDistinction.abbreviation}
          </h3>
          <p className="education-distinction__title">
            {internationalDistinction.title}
          </p>
          <p className="education-distinction__meta">
            <span>{internationalDistinction.organization}</span>
            <span aria-hidden="true"> · </span>
            <span>{internationalDistinction.location}</span>
          </p>
        </aside>
      </div>
    </section>
  )
}

export default EducationSection
