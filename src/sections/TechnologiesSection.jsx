import TechnologyGroup from '../components/technologies/TechnologyGroup.jsx'
import TechnologiesIndex from '../components/technologies/TechnologiesIndex.jsx'
import { technologyGroups } from '../content/technologies.js'

function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="technologies-section"
      aria-labelledby="technologies-title"
    >
      <div className="technologies-section__intro">
        <header className="technologies-section__header">
          <p className="technologies-section__eyebrow">
            Backend-first · Full-stack capable
          </p>
          <h2 id="technologies-title">Technologies</h2>
          <p>
            A Java-centered engineering profile spanning enterprise backend
            development, system integration, software architecture, and
            full-stack delivery.
          </p>
        </header>

        <TechnologiesIndex groups={technologyGroups} />
      </div>

      <div className="technologies-section__groups">
        {technologyGroups.map((group) => (
          <TechnologyGroup key={group.id} {...group} />
        ))}
      </div>
    </section>
  )
}

export default TechnologiesSection
