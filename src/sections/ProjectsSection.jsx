import ProjectsCarousel from '../components/projects/ProjectsCarousel.jsx'
import useTranslation from '../i18n/useTranslation.js'

function ProjectsSection() {
  const { messages } = useTranslation()
  const content = messages.projects

  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <header className="projects-section__header" data-reveal>
        <h2 id="projects-title">{content.title}</h2>
        <p>{content.introduction}</p>
      </header>

      <div data-reveal data-reveal-delay="1">
        <ProjectsCarousel content={content} />
      </div>
    </section>
  )
}

export default ProjectsSection
