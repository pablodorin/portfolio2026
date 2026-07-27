function AboutIndex({ areas }) {
  return (
    <nav className="about-index" aria-label="About Me topics">
      <p>Explore an interest</p>
      <ol>
        {areas.map(({ id, title }) => (
          <li key={id}>
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default AboutIndex
