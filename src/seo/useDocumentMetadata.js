import { useEffect } from 'react'
import useTranslation from '../i18n/useTranslation.js'
import { defaultSeoContent, seoContent } from './seoContent.js'
import { createStructuredData } from './structuredData.js'

function updateMetaContent(selector, content) {
  document.querySelector(selector)?.setAttribute('content', content)
}

function useDocumentMetadata() {
  const { language } = useTranslation()

  useEffect(() => {
    const metadata = seoContent[language] ?? defaultSeoContent

    document.title = metadata.title
    updateMetaContent('meta[name="description"]', metadata.description)
    updateMetaContent('meta[property="og:title"]', metadata.title)
    updateMetaContent(
      'meta[property="og:description"]',
      metadata.description,
    )
    updateMetaContent('meta[property="og:locale"]', metadata.ogLocale)
    updateMetaContent('meta[property="og:url"]', metadata.canonicalUrl)
    updateMetaContent('meta[name="twitter:title"]', metadata.title)
    updateMetaContent(
      'meta[name="twitter:description"]',
      metadata.description,
    )

    const structuredData = document.getElementById('profile-structured-data')

    if (structuredData) {
      structuredData.textContent = JSON.stringify(
        createStructuredData(language, metadata),
      )
    }
  }, [language])
}

export default useDocumentMetadata
