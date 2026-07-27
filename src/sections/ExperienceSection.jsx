import ExperienceEntry from '../components/experience/ExperienceEntry.jsx'
import ExperienceIndex from '../components/experience/ExperienceIndex.jsx'
import useTranslation from '../i18n/useTranslation.js'

function ExperienceSection() {
  const { messages } = useTranslation()
  const { introduction, items, title } = messages.experience

  return (
    <section
      id="experience"
      className="experience-section"
      aria-labelledby="experience-title"
    >
      <header className="experience-section__header" data-reveal>
        <h2 id="experience-title">{title}</h2>
        <p>{introduction}</p>
      </header>

      <ExperienceIndex experiences={items} />

      <div className="experience-section__timeline">
        {items.map((experience) => (
          <ExperienceEntry key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
