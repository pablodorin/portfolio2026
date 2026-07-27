import PortfolioLayout from '../components/layout/PortfolioLayout.jsx'
import { navigationItems } from '../content/navigation.js'
import AIWorkflowSection from '../sections/AIWorkflowSection.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import ContactSection from '../sections/ContactSection.jsx'
import EducationSection from '../sections/EducationSection.jsx'
import ExperienceSection from '../sections/ExperienceSection.jsx'
import HomeSection from '../sections/HomeSection.jsx'
import SectionPlaceholder from '../sections/SectionPlaceholder.jsx'
import TechnologiesSection from '../sections/TechnologiesSection.jsx'

function App() {
  return (
    <PortfolioLayout>
      <HomeSection />
      <ExperienceSection />
      {navigationItems.slice(2).map((section) =>
        section.id === 'technologies' ? (
          <TechnologiesSection key={section.id} />
        ) : section.id === 'education' ? (
          <EducationSection key={section.id} />
        ) : section.id === 'ai-workflow' ? (
          <AIWorkflowSection key={section.id} />
        ) : section.id === 'about-me' ? (
          <AboutSection key={section.id} />
        ) : section.id === 'contact' ? (
          <ContactSection key={section.id} />
        ) : (
          <SectionPlaceholder
            key={section.id}
            id={section.id}
            title={section.sectionTitle ?? section.label}
            description={section.description}
          />
        ),
      )}
    </PortfolioLayout>
  )
}

export default App
