import { navigationItems } from '../../content/navigation.js'

import useTranslation from '../../i18n/useTranslation.js'

function SectionNavigation({
  activeSectionId,
  className,
  id,
  hidden,
  onNavigate,
}) {
  const { t } = useTranslation()

  return (
    <nav
      id={id}
      className={className}
      aria-label={t('navigation.ariaLabel')}
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
