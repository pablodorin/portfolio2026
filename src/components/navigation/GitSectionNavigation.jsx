import { navigationItems } from '../../content/navigation.js'
import useTranslation from '../../i18n/useTranslation.js'

const purpleToLanguagesPath = 'M12 16C12 30 32 30 32 48V80'
const redToEndpointPath = 'M32 80C32 94 52 94 52 112V208C52 228 32 220 32 240'

const branchPaths = {
  blue: 'M12 16V304',
  purple: `${purpleToLanguagesPath}V240C32 260 12 252 12 272`,
  coral: redToEndpointPath,
}

const nodeLanesBySection = {
  home: ['blue'],
  experience: ['coral'],
  technologies: ['coral'],
  projects: ['coral'],
  'ai-workflow': ['coral'],
  education: ['purple'],
  languages: ['purple'],
  endpoint: ['purple'],
  about: ['blue'],
  contact: ['blue'],
}

const activePathsBySection = {
  experience: [
    { branch: 'purple', path: purpleToLanguagesPath },
    { branch: 'coral', path: 'M32 80C32 94 52 94 52 112' },
  ],
  technologies: [
    { branch: 'purple', path: purpleToLanguagesPath },
    { branch: 'coral', path: 'M32 80C32 94 52 94 52 112V144' },
  ],
  projects: [
    { branch: 'purple', path: purpleToLanguagesPath },
    { branch: 'coral', path: 'M32 80C32 94 52 94 52 112V176' },
  ],
  'ai-workflow': [
    { branch: 'purple', path: purpleToLanguagesPath },
    { branch: 'coral', path: 'M32 80C32 94 52 94 52 112V208' },
  ],
  education: [
    { branch: 'purple', path: 'M12 16C12 30 32 30 32 48' },
  ],
  languages: [
    { branch: 'purple', path: purpleToLanguagesPath },
  ],
  endpoint: [
    { branch: 'purple', path: `${purpleToLanguagesPath}V240` },
    { branch: 'coral', path: redToEndpointPath },
  ],
  about: [
    { branch: 'blue', path: 'M12 16V272' },
    { branch: 'purple', path: branchPaths.purple },
    { branch: 'coral', path: redToEndpointPath },
  ],
  contact: [
    { branch: 'blue', path: branchPaths.blue },
    { branch: 'purple', path: branchPaths.purple },
    { branch: 'coral', path: redToEndpointPath },
  ],
}

const activeNodeIdsBySection = {
  home: ['home'],
  education: ['home', 'education'],
  languages: ['home', 'education', 'languages'],
  experience: ['home', 'education', 'languages', 'experience'],
  technologies: [
    'home',
    'education',
    'languages',
    'experience',
    'technologies',
  ],
  projects: [
    'home',
    'education',
    'languages',
    'experience',
    'technologies',
    'projects',
  ],
  'ai-workflow': [
    'home',
    'education',
    'languages',
    'experience',
    'technologies',
    'projects',
    'ai-workflow',
  ],
  endpoint: [
    'home',
    'education',
    'languages',
    'experience',
    'technologies',
    'projects',
    'ai-workflow',
    'endpoint',
  ],
  about: [
    'home',
    'education',
    'languages',
    'experience',
    'technologies',
    'projects',
    'ai-workflow',
    'endpoint',
    'about',
  ],
  contact: navigationItems.map(({ id }) => id),
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
  const activeNodeIds = new Set(activeNodeIdsBySection[activeSectionId] ?? [])
  const translatedItems = messages.navigation.items

  return (
    <nav
      id={id}
      className={`git-navigation ${className}`.trim()}
      aria-label={t('navigation.ariaLabel')}
      hidden={hidden}
    >
      <div className="git-navigation__map">
        <svg
          className="git-navigation__graph"
          viewBox="0 0 64 320"
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
                className={`git-navigation__link${
                  activeNodeIds.has(id) ? ' git-navigation__link--history' : ''
                }`}
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
      </div>
      {children}
    </nav>
  )
}

export default GitSectionNavigation
