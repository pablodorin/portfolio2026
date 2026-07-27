import ActionLink from '../components/ui/ActionLink.jsx'

function HomeSection() {
  return (
    <section id="home" className="home-section" aria-labelledby="home-title">
      <div className="home-section__content">
        <p className="home-section__role">Senior Software Engineer</p>
        <h1 id="home-title">Pablo Dorin</h1>
        <p className="home-section__specialization">
          Java Backend &amp; Full-Stack Development
        </p>
        <p className="home-section__subtitle">
          Enterprise Applications <span aria-hidden="true">·</span> System
          Integration <span aria-hidden="true">·</span> AI-Augmented Engineering
        </p>
        <p className="home-section__introduction">
          Senior Software Engineer with 18+ years of professional experience
          delivering enterprise software, Java backend development, system
          integration, and full-stack solutions across international teams and
          business-critical environments.
        </p>

        <nav className="home-section__actions" aria-label="Primary actions">
          <ActionLink href="#projects" variant="primary">
            View Projects
          </ActionLink>
          <ActionLink href="#endpoint">Read Endpoint</ActionLink>
          <ActionLink href="#contact">Contact Me</ActionLink>
        </nav>
      </div>
    </section>
  )
}

export default HomeSection
