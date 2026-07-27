import AboutIndex from '../components/about/AboutIndex.jsx'
import AboutTheme from '../components/about/AboutTheme.jsx'
import portrait from '../assets/images/pablo-dorin-about.jpg'
import { aboutAreas } from '../content/about.js'

function AboutSection() {
  return (
    <section
      id="about-me"
      className="about-section"
      aria-labelledby="about-title"
    >
      <div className="about-section__opening">
        <header className="about-section__header">
          <h2 id="about-title">About Me</h2>
        </header>

        <div className="about-section__portrait-frame">
          <img
            className="about-section__portrait"
            src={portrait}
            alt="Portrait of Pablo Dorin"
            width="1600"
            height="1600"
            loading="lazy"
            decoding="async"
          />
        </div>

        <AboutTheme {...aboutAreas[0]} isLead />

        <AboutIndex areas={aboutAreas} />
      </div>

      <div className="about-section__themes">
        {aboutAreas.slice(1).map((area) => (
          <AboutTheme key={area.id} {...area} />
        ))}
      </div>
    </section>
  )
}

export default AboutSection
