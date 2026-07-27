import useTranslation from '../../i18n/useTranslation.js'

function ThemeToggle({ theme, onToggle }) {
  const { t } = useTranslation()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const visibleLabel = t(
    theme === 'dark' ? 'controls.theme.lightLabel' : 'controls.theme.darkLabel',
  )

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={t(
        nextTheme === 'dark'
          ? 'controls.theme.switchToDark'
          : 'controls.theme.switchToLight',
      )}
      aria-pressed={theme === 'dark'}
      onClick={onToggle}
    >
      <span className="theme-toggle__icon" aria-hidden="true" />
      <span>{visibleLabel}</span>
    </button>
  )
}

export default ThemeToggle
