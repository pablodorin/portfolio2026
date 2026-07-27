import TechnologyGroup from '../components/technologies/TechnologyGroup.jsx'
import TechnologiesIndex from '../components/technologies/TechnologiesIndex.jsx'
import useTranslation from '../i18n/useTranslation.js'

function TechnologiesSection() {
  const { messages } = useTranslation()
  const { groups, introduction, title } = messages.technologies

  return (
    <section
      id="technologies"
      className="technologies-section"
      aria-labelledby="technologies-title"
    >
      <div className="technologies-section__intro">
        <header className="technologies-section__header" data-reveal>
          <h2 id="technologies-title">{title}</h2>
          <p>{introduction}</p>
        </header>

        <TechnologiesIndex groups={groups} />
      </div>

      <div className="technologies-section__groups">
        {groups.map((group) => (
          <TechnologyGroup key={group.id} {...group} />
        ))}
      </div>
    </section>
  )
}

export default TechnologiesSection
