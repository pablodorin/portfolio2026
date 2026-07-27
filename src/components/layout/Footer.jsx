import useTranslation from '../../i18n/useTranslation.js'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <p>{t('site.footer')}</p>
    </footer>
  )
}

export default Footer
