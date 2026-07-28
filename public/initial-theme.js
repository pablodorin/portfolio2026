;(() => {
  const storageKey = 'portfolio-theme'

  function getSavedTheme() {
    try {
      return window.localStorage.getItem(storageKey)
    } catch {
      return null
    }
  }

  const savedTheme = getSavedTheme()
  const theme =
    savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

  document.documentElement.dataset.theme = theme
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#0b1020' : '#ffffff')
})()
