import AboutIndex from '../components/about/AboutIndex.jsx'
import AboutTheme from '../components/about/AboutTheme.jsx'
import portrait from '../assets/images/pablo-dorin-about.jpg'
import useTranslation from '../i18n/useTranslation.js'

function AboutSection() {
  const { messages } = useTranslation()
  const { areas, title } = messages.about

  return (
    <section
      id="about-me"
      className="about-section"
      aria-labelledby="about-title"
    >
      <header className="about-section__header" data-reveal>
        <h2 id="about-title">{title}</h2>
      </header>

      <div className="about-section__content">
        <div className="about-section__opening">
          <div
            className="about-section__portrait-frame"
            data-reveal
            data-reveal-delay="1"
          >
            <img
              className="about-section__portrait"
              src={portrait}
              alt={messages.about.portraitAlt}
              width="1600"
              height="1600"
              loading="lazy"
              decoding="async"
            />
          </div>

          <AboutTheme {...areas[0]} isLead />

          <AboutIndex areas={areas} />
        </div>

        <div className="about-section__themes">
          {areas.slice(1).map((area) => (
            <AboutTheme key={area.id} {...area} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
