import GitSectionNavigation from '../navigation/GitSectionNavigation.jsx'
import LanguageSelector from '../ui/LanguageSelector.jsx'
import ThemeToggle from '../ui/ThemeToggle.jsx'
import useTranslation from '../../i18n/useTranslation.js'

function Sidebar({ activeSectionId, onThemeToggle, theme }) {
  const { t } = useTranslation()

  return (
    <aside className="sidebar" aria-label={t('site.portfolioOverview')}>
      <header className="sidebar__identity">
        <p className="sidebar__name">{t('site.name')}</p>
        <p className="sidebar__role">{t('site.role')}</p>
      </header>

      <GitSectionNavigation activeSectionId={activeSectionId} />

      <div className="sidebar__secondary-controls">
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        <LanguageSelector activeSectionId={activeSectionId} />
      </div>
    </aside>
  )
}

export default Sidebar
