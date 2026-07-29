import useTranslation from '../../i18n/useTranslation.js'

function Footer() {
  const { messages } = useTranslation()
  const footer = messages.site.footer

  return (
    <footer className="footer">
      <div className="footer__process">
        <p>{footer.process}</p>
        <p>{footer.credit}</p>
      </div>
      <div className="footer__legal">
        <p>{footer.copyright}</p>
        <span>{footer.privacy}</span>
      </div>
    </footer>
  )
}

export default Footer
