import { useCallback, useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'portfolio-theme'
const DARK_THEME_QUERY = '(prefers-color-scheme: dark)'

function getStoredTheme() {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

    return storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : null
  } catch {
    return null
  }
}

function getInitialTheme() {
  const documentTheme = document.documentElement.dataset.theme

  if (documentTheme === 'light' || documentTheme === 'dark') {
    return documentTheme
  }

  return window.matchMedia(DARK_THEME_QUERY).matches ? 'dark' : 'light'
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0b1020' : '#ffffff')
  }, [theme])

  useEffect(() => {
    if (getStoredTheme()) {
      return undefined
    }

    const colorSchemeQuery = window.matchMedia(DARK_THEME_QUERY)
    const handleSystemThemeChange = ({ matches }) => {
      if (getStoredTheme()) {
        return
      }

      setTheme(matches ? 'dark' : 'light')
    }

    colorSchemeQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      colorSchemeQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'

      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
      } catch {
        // The selected theme still applies for the current session.
      }

      return nextTheme
    })
  }, [])

  return { theme, toggleTheme }
}

export default useTheme
