function AboutTheme({ body, id, isLead, title }) {
  return (
    <article
      id={id}
      className={`about-theme${isLead ? ' about-theme--lead' : ''}`}
      aria-labelledby={`${id}-title`}
      data-reveal
      data-reveal-delay={isLead ? '1' : undefined}
    >
      <h3 id={`${id}-title`}>{title}</h3>
      <p>{body}</p>
    </article>
  )
}

export default AboutTheme
