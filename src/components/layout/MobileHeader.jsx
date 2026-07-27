import { useEffect, useRef, useState } from 'react'
import GitSectionNavigation from '../navigation/GitSectionNavigation.jsx'
import LanguageSelector from '../ui/LanguageSelector.jsx'
import ThemeToggle from '../ui/ThemeToggle.jsx'
import useTranslation from '../../i18n/useTranslation.js'

function MobileHeader({ activeSectionId, onThemeToggle, theme }) {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  function handleNavigation(event) {
    event.preventDefault()

    const sectionId = event.currentTarget.hash.slice(1)
    setIsMenuOpen(false)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const section = document.getElementById(sectionId)

        if (section) {
          section.scrollIntoView()
          window.history.pushState(null, '', `#${sectionId}`)
        }
      })
    })
  }

  return (
    <header className="mobile-header">
      <div className="mobile-header__bar">
        <p className="mobile-header__name">{t('site.name')}</p>
        <div className="mobile-header__controls">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            ref={menuButtonRef}
            className="mobile-menu-button"
            type="button"
            aria-label={t(
              isMenuOpen
                ? 'controls.mobileMenu.closeLabel'
                : 'controls.mobileMenu.openLabel',
            )}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span aria-hidden="true">
              {t(
                isMenuOpen
                  ? 'controls.mobileMenu.closeText'
                  : 'controls.mobileMenu.openText',
              )}
            </span>
          </button>
        </div>
      </div>

      <GitSectionNavigation
        id="mobile-navigation"
        className="mobile-navigation"
        activeSectionId={activeSectionId}
        hidden={!isMenuOpen}
        onNavigate={handleNavigation}
      >
        <div className="mobile-navigation__language">
          <LanguageSelector />
        </div>
      </GitSectionNavigation>
    </header>
  )
}

export default MobileHeader
