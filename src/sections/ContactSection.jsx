import useTranslation from '../i18n/useTranslation.js'

function BrandIcon({ brand }) {
  const paths = {
    linkedin:
      'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V8.99H7.1v11.46Z',
    github:
      'M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.3-5.28-1.29-5.28-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.14v3.27c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z',
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={paths[brand]} />
    </svg>
  )
}

function ContactSection() {
  const { messages } = useTranslation()
  const contactContent = messages.contact.content
  const contactLinks = messages.contact.links
  const primaryLink = contactLinks.find((link) => link.primary)
  const cvLink = contactLinks.find((link) => link.id === 'cv')
  const socialLinks = contactLinks.filter((link) => link.external)

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-section__content">
        <header className="contact-section__header" data-reveal>
          <h2 id="contact-title">{contactContent.title}</h2>
        </header>

        <div className="contact-section__copy" data-reveal data-reveal-delay="1">
          <p>{contactContent.introduction}</p>
          <p>{contactContent.availability}</p>
        </div>

        <div
          className="contact-section__actions"
          data-reveal
          data-reveal-delay="2"
        >
          <div className="contact-section__principal-actions">
            <a
              className="contact-section__primary-action"
              href={primaryLink.href}
            >
              <span>{primaryLink.label}</span>
              <span>{primaryLink.supportingText}</span>
            </a>

            <a
              className="contact-section__download-action"
              href={cvLink.href}
              download={cvLink.download}
            >
              {cvLink.label}
            </a>
          </div>

          <nav
            className="contact-section__supporting-actions"
            aria-label={messages.contact.profilesLabel}
          >
            {socialLinks.map(
              ({ external, href, id, label }) => (
                <a
                  key={id}
                  className={`contact-section__social-link contact-section__social-link--${id}`}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  {id === 'linkedin' ? (
                    <>
                      <span
                        className="contact-section__linkedin-wordmark"
                        aria-hidden="true"
                      >
                        <span>Linked</span>
                        <span>in</span>
                      </span>
                      <span className="visually-hidden">{label}</span>
                    </>
                  ) : (
                    <>
                      <BrandIcon brand={id} />
                      <span>{label}</span>
                    </>
                  )}
                  {external && (
                    <span className="visually-hidden">
                      {' '}
                      {messages.contact.newTabLabel}
                    </span>
                  )}
                </a>
              ),
            )}
          </nav>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
