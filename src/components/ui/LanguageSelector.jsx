import {
  languageStorageKey,
  supportedLanguages,
} from '../../i18n/languages.js'
import { navigationItems } from '../../content/navigation.js'
import useTranslation from '../../i18n/useTranslation.js'

const stableSectionHashes = new Set(
  navigationItems.map(({ id }) => `#${id}`),
)

function getVisibleSectionHash() {
  const headerHeight =
    document.querySelector('.mobile-header__bar')?.getBoundingClientRect()
      .height ?? 0
  const viewportHeight = window.innerHeight
  const visibleSection = navigationItems
    .map(({ id }) => document.getElementById(id))
    .filter(Boolean)
    .map((section) => {
      const bounds = section.getBoundingClientRect()
      const visibleTop = Math.max(bounds.top, headerHeight)
      const visibleBottom = Math.min(bounds.bottom, viewportHeight)

      return {
        hash: `#${section.id}`,
        visibleHeight: Math.max(0, visibleBottom - visibleTop),
      }
    })
    .sort((first, second) => second.visibleHeight - first.visibleHeight)[0]

  return visibleSection?.visibleHeight > 0 ? visibleSection.hash : ''
}

function getCurrentSectionHash(activeSectionId) {
  const visibleSectionHash = getVisibleSectionHash()
  const activeSectionHash = activeSectionId ? `#${activeSectionId}` : ''

  if (stableSectionHashes.has(visibleSectionHash)) {
    return visibleSectionHash
  }

  if (stableSectionHashes.has(activeSectionHash)) {
    return activeSectionHash
  }

  return stableSectionHashes.has(window.location.hash)
    ? window.location.hash
    : ''
}

function LanguageSelector({ activeSectionId }) {
  const { language, t } = useTranslation()

  function rememberLanguage(code) {
    try {
      window.localStorage.setItem(languageStorageKey, code)
    } catch {
      // The URL remains authoritative when storage is unavailable.
    }
  }

  const currentHash = getCurrentSectionHash(activeSectionId)

  function handleLanguageChange(event, code, path) {
    rememberLanguage(code)

    const destination = `${path}${getCurrentSectionHash(activeSectionId)}`

    if (event.currentTarget.href !== new URL(destination, window.location.origin).href) {
      event.preventDefault()
      window.location.assign(destination)
    }
  }

  return (
    <div
      className="language-selector"
      role="group"
      aria-label={t('controls.language.groupLabel')}
    >
      {supportedLanguages.map(({ code, path, shortLabel }) => (
        <a
          key={code}
          className="language-selector__link"
          href={`${path}${currentHash}`}
          aria-label={t(`controls.language.options.${code}`)}
          aria-current={language === code ? 'page' : undefined}
          onClick={(event) => handleLanguageChange(event, code, path)}
        >
          {shortLabel}
        </a>
      ))}
    </div>
  )
}

export default LanguageSelector
