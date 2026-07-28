import { navigationItems } from '../../content/navigation.js'
import useTranslation from '../../i18n/useTranslation.js'

const branchPaths = {
  blue: 'M32 16C32 30 12 30 12 48V208C12 228 32 220 32 240',
  coral: 'M32 16V272',
  purple: 'M32 16C32 30 52 30 52 48V248C52 262 32 258 32 272',
}

const nodeLanesBySection = {
  home: ['origin'],
  experience: ['coral'],
  technologies: ['blue'],
  projects: ['coral'],
  'ai-workflow': ['purple'],
  education: ['blue'],
  endpoint: ['purple'],
  about: ['coral'],
  contact: ['merge'],
}

const activePathsBySection = {
  experience: [
    { branch: 'coral', path: 'M32 16V48' },
  ],
  technologies: [
    { branch: 'blue', path: 'M32 16C32 30 12 30 12 48V80' },
  ],
  projects: [
    { branch: 'coral', path: 'M32 16V112' },
  ],
  'ai-workflow': [
    { branch: 'purple', path: 'M32 16C32 30 52 30 52 48V144' },
  ],
  education: [
    { branch: 'blue', path: 'M32 16C32 30 12 30 12 48V176' },
  ],
  endpoint: [
    { branch: 'purple', path: 'M32 16C32 30 52 30 52 48V208' },
  ],
  about: [
    { branch: 'blue', path: branchPaths.blue },
    { branch: 'coral', path: 'M32 16V240' },
  ],
  contact: [
    { branch: 'coral', path: branchPaths.coral },
    { branch: 'purple', path: branchPaths.purple },
  ],
}

function GitSectionNavigation({
  activeSectionId,
  children,
  className = '',
  hidden,
  id,
  onNavigate,
}) {
  const { messages, t } = useTranslation()
  const activePaths = activePathsBySection[activeSectionId] ?? []
  const translatedItems = messages.navigation.items

  return (
    <nav
      id={id}
      className={`git-navigation ${className}`.trim()}
      aria-label={t('navigation.ariaLabel')}
      hidden={hidden}
    >
      <svg
        className="git-navigation__graph"
        viewBox="0 0 64 288"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="git-navigation__path git-navigation__path--blue"
          d={branchPaths.blue}
        />
        <path
          className="git-navigation__path git-navigation__path--purple"
          d={branchPaths.purple}
        />
        <path
          className="git-navigation__path git-navigation__path--coral"
          d={branchPaths.coral}
        />

        {activePaths.map(({ branch, path }) => (
          <path
            key={branch}
            className={`git-navigation__active-path git-navigation__active-path--${branch}`}
            d={path}
          />
        ))}
      </svg>

      <ol className="git-navigation__list">
        {navigationItems.map(({ id }, index) => (
          <li key={id}>
            <a
              className="git-navigation__link"
              href={`#${id}`}
              aria-current={activeSectionId === id ? 'location' : undefined}
              onClick={onNavigate}
            >
              <span className="git-navigation__node-track" aria-hidden="true">
                {nodeLanesBySection[id].map((lane) => (
                  <span
                    key={lane}
                    className={`git-navigation__node git-navigation__node--${lane}`}
                  />
                ))}
              </span>
              <span className="git-navigation__label">
                {translatedItems[index].label}
              </span>
            </a>
          </li>
        ))}
      </ol>
      {children}
    </nav>
  )
}

export default GitSectionNavigation
