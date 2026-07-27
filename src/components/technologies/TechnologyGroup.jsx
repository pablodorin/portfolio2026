import TechnologyItem from './TechnologyItem.jsx'

function TechnologyGroup({ description, emphasis, id, items, title }) {
  return (
    <section
      id={id}
      className={`technology-group technology-group--${emphasis}`}
      aria-labelledby={`${id}-title`}
      data-reveal
    >
      <header className="technology-group__header">
        <h3 id={`${id}-title`}>{title}</h3>
        <p>{description}</p>
      </header>

      <ul className="technology-group__items">
        {items.map((item) => (
          <TechnologyItem key={item.name} {...item} />
        ))}
      </ul>
    </section>
  )
}

export default TechnologyGroup
