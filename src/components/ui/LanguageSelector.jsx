import {
  languageStorageKey,
  supportedLanguages,
} from '../../i18n/languages.js'
import useTranslation from '../../i18n/useTranslation.js'

function LanguageSelector() {
  const { language, t } = useTranslation()

  function rememberLanguage(code) {
    try {
      window.localStorage.setItem(languageStorageKey, code)
    } catch {
      // The URL remains authoritative when storage is unavailable.
    }
  }

  const currentHash = window.location.hash

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
          onClick={() => rememberLanguage(code)}
        >
          {shortLabel}
        </a>
      ))}
    </div>
  )
}

export default LanguageSelector
