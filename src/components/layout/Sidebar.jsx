import GitSectionNavigation from '../navigation/GitSectionNavigation.jsx'

function Sidebar({ activeSectionId }) {
  return (
    <aside className="sidebar" aria-label="Portfolio overview">
      <header className="sidebar__identity">
        <p className="sidebar__name">Pablo Dorin</p>
        <p className="sidebar__role">Senior Software Engineer</p>
      </header>

      <GitSectionNavigation activeSectionId={activeSectionId} />
    </aside>
  )
}

export default Sidebar
