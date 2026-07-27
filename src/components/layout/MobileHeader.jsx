import { useEffect, useRef, useState } from 'react'
import GitSectionNavigation from '../navigation/GitSectionNavigation.jsx'
import ThemeToggle from '../ui/ThemeToggle.jsx'

function MobileHeader({ activeSectionId, onThemeToggle, theme }) {
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
        <p className="mobile-header__name">Pablo Dorin</p>
        <div className="mobile-header__controls">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            ref={menuButtonRef}
            className="mobile-menu-button"
            type="button"
            aria-label={`${isMenuOpen ? 'Close' : 'Open'} portfolio navigation`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span aria-hidden="true">{isMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      <GitSectionNavigation
        id="mobile-navigation"
        className="mobile-navigation"
        activeSectionId={activeSectionId}
        hidden={!isMenuOpen}
        onNavigate={handleNavigation}
      />
    </header>
  )
}

export default MobileHeader
