import { navigationItems } from '../../content/navigation.js'

function SectionNavigation({
  activeSectionId,
  className,
  id,
  hidden,
  onNavigate,
}) {
  return (
    <nav
      id={id}
      className={className}
      aria-label="Portfolio sections"
      hidden={hidden}
    >
      <ol className="section-navigation">
        {navigationItems.map(({ id: sectionId, label }) => (
          <li key={sectionId}>
            <a
              className="section-navigation__link"
              href={`#${sectionId}`}
              aria-current={activeSectionId === sectionId ? 'location' : undefined}
              onClick={onNavigate}
            >
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default SectionNavigation
