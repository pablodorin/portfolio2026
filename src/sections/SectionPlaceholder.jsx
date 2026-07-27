function SectionPlaceholder({ id, title, description }) {
  return (
    <section
      id={id}
      className="section-placeholder"
      aria-labelledby={`${id}-title`}
    >
      <div className="section-placeholder__content">
        <h2 id={`${id}-title`}>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default SectionPlaceholder
