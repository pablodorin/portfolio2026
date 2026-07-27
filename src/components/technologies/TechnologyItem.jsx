function TechnologyItem({ context, name }) {
  return (
    <li className="technology-item">
      <h4>{name}</h4>
      <p>{context}</p>
    </li>
  )
}

export default TechnologyItem
