import { supportedLanguages } from '../../i18n/languages.js'
import useTranslation from '../../i18n/useTranslation.js'

function LanguageSelector() {
  const { language, setLanguage, t } = useTranslation()

  return (
    <div
      className="language-selector"
      role="group"
      aria-label={t('controls.language.groupLabel')}
    >
      {supportedLanguages.map(({ code, shortLabel }) => (
        <button
          key={code}
          className="language-selector__button"
          type="button"
          aria-label={t(`controls.language.options.${code}`)}
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
        >
          {shortLabel}
        </button>
      ))}
    </div>
  )
}

export default LanguageSelector
