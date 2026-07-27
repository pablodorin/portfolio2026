import { useCallback, useMemo, useState } from 'react'
import I18nContext from './I18nContext.js'
import {
  defaultLanguage,
  isSupportedLanguage,
  languageStorageKey,
} from './languages.js'
import en from './locales/en.js'
import es from './locales/es.js'
import fr from './locales/fr.js'

const localeOverrides = { es, fr }

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function mergeMessages(fallback, overrides) {
  if (!isPlainObject(fallback) || !isPlainObject(overrides)) {
    return overrides ?? fallback
  }

  return Object.fromEntries(
    Object.entries(fallback).map(([key, fallbackValue]) => [
      key,
      key in overrides
        ? mergeMessages(fallbackValue, overrides[key])
        : fallbackValue,
    ]),
  )
}

function getMessage(messages, key) {
  return key.split('.').reduce((value, segment) => value?.[segment], messages)
}

function getInitialLanguage() {
  const documentLanguage = document.documentElement.lang

  return isSupportedLanguage(documentLanguage)
    ? documentLanguage
    : defaultLanguage
}

function I18nProvider({ children }) {
  const [language, setCurrentLanguage] = useState(getInitialLanguage)
  const messages = useMemo(() => {
    if (language === defaultLanguage) {
      return en
    }

    return mergeMessages(en, localeOverrides[language] ?? {})
  }, [language])

  const setLanguage = useCallback((nextLanguage) => {
    const resolvedLanguage = isSupportedLanguage(nextLanguage)
      ? nextLanguage
      : defaultLanguage

    try {
      window.localStorage.setItem(languageStorageKey, resolvedLanguage)
    } catch {
      // The selected language still applies for the current session.
    }

    document.documentElement.lang = resolvedLanguage
    setCurrentLanguage(resolvedLanguage)
  }, [])

  const translate = useCallback(
    (key) => getMessage(messages, key) ?? getMessage(en, key) ?? '',
    [messages],
  )

  const contextValue = useMemo(
    () => ({
      language,
      messages,
      setLanguage,
      t: translate,
    }),
    [language, messages, setLanguage, translate],
  )

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  )
}

export default I18nProvider
