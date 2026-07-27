import GitSectionNavigation from '../navigation/GitSectionNavigation.jsx'
import ThemeToggle from '../ui/ThemeToggle.jsx'

function Sidebar({ activeSectionId, onThemeToggle, theme }) {
  return (
    <aside className="sidebar" aria-label="Portfolio overview">
      <header className="sidebar__identity">
        <p className="sidebar__name">Pablo Dorin</p>
        <p className="sidebar__role">Senior Software Engineer</p>
      </header>

      <GitSectionNavigation activeSectionId={activeSectionId} />

      <div className="sidebar__theme-control">
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </aside>
  )
}

export default Sidebar
