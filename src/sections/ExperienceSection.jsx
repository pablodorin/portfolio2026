import ExperienceEntry from '../components/experience/ExperienceEntry.jsx'
import ExperienceIndex from '../components/experience/ExperienceIndex.jsx'
import { experienceItems } from '../content/experience.js'

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience-section"
      aria-labelledby="experience-title"
    >
      <header className="experience-section__header">
        <h2 id="experience-title">Professional Experience</h2>
        <p>
          Enterprise engineering, architecture, integration, and technical
          coordination across international and business-critical environments.
          Concurrent engagements are identified explicitly.
        </p>
      </header>

      <ExperienceIndex experiences={experienceItems} />

      <div className="experience-section__timeline">
        {experienceItems.map((experience) => (
          <ExperienceEntry key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
