import Footer from './Footer.jsx'
import MobileHeader from './MobileHeader.jsx'
import Sidebar from './Sidebar.jsx'
import { navigationItems } from '../../content/navigation.js'
import useActiveSection from '../../hooks/useActiveSection.js'
import useTheme from '../../hooks/useTheme.js'

const sectionIds = navigationItems.map(({ id }) => id)

function PortfolioLayout({ children }) {
  const activeSectionId = useActiveSection(sectionIds)
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="portfolio-layout">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Sidebar
        activeSectionId={activeSectionId}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <MobileHeader
        activeSectionId={activeSectionId}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <div className="portfolio-main">
        <main id="main-content" className="portfolio-content" tabIndex="-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default PortfolioLayout
