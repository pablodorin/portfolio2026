function WorkflowStep({ body, emphasis, id, number, title }) {
  return (
    <li
      id={id}
      className={`workflow-step${
        emphasis ? ` workflow-step--${emphasis}` : ''
      }`}
    >
      <article aria-labelledby={`${id}-title`}>
        <p className="workflow-step__number" aria-hidden="true">
          {number}
        </p>
        <div>
          <h3 id={`${id}-title`}>{title}</h3>
          <p>{body}</p>
        </div>
      </article>
    </li>
  )
}

export default WorkflowStep
