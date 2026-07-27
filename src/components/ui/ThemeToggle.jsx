function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const visibleLabel = theme === 'dark' ? 'Light' : 'Dark'

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === 'dark'}
      onClick={onToggle}
    >
      <span className="theme-toggle__icon" aria-hidden="true" />
      <span>{visibleLabel}</span>
    </button>
  )
}

export default ThemeToggle
