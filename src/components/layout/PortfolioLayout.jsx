import Footer from './Footer.jsx'
import MobileHeader from './MobileHeader.jsx'
import Sidebar from './Sidebar.jsx'
import { navigationItems } from '../../content/navigation.js'
import useActiveSection from '../../hooks/useActiveSection.js'
import useSectionReveal from '../../hooks/useSectionReveal.js'
import useTheme from '../../hooks/useTheme.js'
import useTranslation from '../../i18n/useTranslation.js'

const sectionIds = navigationItems.map(({ id }) => id)

function PortfolioLayout({ children }) {
  const { t } = useTranslation()
  const activeSectionId = useActiveSection(sectionIds)
  const { theme, toggleTheme } = useTheme()
  useSectionReveal()

  return (
    <div className="portfolio-layout">
      <a className="skip-link" href="#main-content">
        {t('site.skipToContent')}
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
