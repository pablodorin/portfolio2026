import PortfolioLayout from '../components/layout/PortfolioLayout.jsx'
import useTranslation from '../i18n/useTranslation.js'
import AIWorkflowSection from '../sections/AIWorkflowSection.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import ContactSection from '../sections/ContactSection.jsx'
import EducationSection from '../sections/EducationSection.jsx'
import EndpointSection from '../sections/EndpointSection.jsx'
import ExperienceSection from '../sections/ExperienceSection.jsx'
import HomeSection from '../sections/HomeSection.jsx'
import LanguagesSection from '../sections/LanguagesSection.jsx'
import ProjectsSection from '../sections/ProjectsSection.jsx'
import SectionPlaceholder from '../sections/SectionPlaceholder.jsx'
import TechnologiesSection from '../sections/TechnologiesSection.jsx'

function App() {
  const { messages } = useTranslation()
  const navigationItems = messages.navigation.items

  return (
    <PortfolioLayout>
      <HomeSection />
      {navigationItems.slice(1).map((section) =>
        section.id === 'experience' ? (
          <ExperienceSection key={section.id} />
        ) : section.id === 'technologies' ? (
          <TechnologiesSection key={section.id} />
        ) : section.id === 'projects' ? (
          <ProjectsSection key={section.id} />
        ) : section.id === 'education' ? (
          <EducationSection key={section.id} />
        ) : section.id === 'languages' ? (
          <LanguagesSection key={section.id} />
        ) : section.id === 'endpoint' ? (
          <EndpointSection key={section.id} />
        ) : section.id === 'ai-workflow' ? (
          <AIWorkflowSection key={section.id} />
        ) : section.id === 'about' ? (
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
