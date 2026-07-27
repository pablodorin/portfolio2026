import ActionLink from '../components/ui/ActionLink.jsx'
import useTranslation from '../i18n/useTranslation.js'

function HomeSection() {
  const { messages } = useTranslation()
  const { actions, actionsLabel, introduction, specialization, subtitle, title } =
    messages.home

  return (
    <section id="home" className="home-section" aria-labelledby="home-title">
      <div className="home-section__content">
        <h1 id="home-title" data-home-reveal="1">
          {title}
        </h1>
        <p className="home-section__specialization" data-home-reveal="2">
          {specialization}
        </p>
        <p className="home-section__subtitle" data-home-reveal="3">
          {subtitle}
        </p>
        <p className="home-section__introduction" data-home-reveal="3">
          {introduction}
        </p>

        <nav
          className="home-section__actions"
          aria-label={actionsLabel}
          data-home-reveal="4"
        >
          <ActionLink href="#projects" variant="primary">
            {actions.projects}
          </ActionLink>
          <ActionLink href="#endpoint">{actions.endpoint}</ActionLink>
          <ActionLink href="#contact" variant="red">
            {actions.contact}
          </ActionLink>
        </nav>
      </div>
    </section>
  )
}

export default HomeSection
