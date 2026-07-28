function ProjectSlide({ project, labels }) {
  return (
    <article
      className="project-slide"
      aria-label={labels.slidePosition
        .replace('{current}', project.order)
        .replace('{total}', 4)}
    >
      <div className="project-slide__identity">
        <p className="project-slide__number" aria-hidden="true">
          {project.number}
        </p>
        <div className="project-slide__meta">
          <p>{project.type}</p>
          <p className="project-slide__status">
            <span>{labels.status}:</span> {project.status}
          </p>
        </div>
        <h3>{project.title}</h3>
        <p className="project-slide__purpose">{project.purpose}</p>
      </div>

    </article>
  )
}

export default ProjectSlide
