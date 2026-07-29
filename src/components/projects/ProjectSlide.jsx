function ProjectStack({ label, stack }) {
  return (
    <div className="project-slide__stack">
      <p className="project-slide__eyebrow">{label}</p>
      <ul aria-label={label}>
        {stack.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  )
}

function ProjectActions({ actions, label }) {
  return (
    <div className="project-slide__actions" aria-label={label}>
      {actions.map((action) => (
        <a
          key={action.id}
          className={
            action.id === 'endpoint-article'
              ? 'project-slide__endpoint-action'
              : undefined
          }
          href={action.href}
          target={action.external === false ? undefined : '_blank'}
          rel={
            action.external === false ? undefined : 'noopener noreferrer'
          }
        >
          {action.label}
          <span aria-hidden="true">
            {action.external === false ? '→' : '↗'}
          </span>
        </a>
      ))}
    </div>
  )
}

function ProjectIdentity({ labels, project }) {
  return (
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
    </div>
  )
}

function ProjectDetailIdentity({ project }) {
  return (
    <div className="project-detail-carousel__identity">
      <p aria-hidden="true">{project.number}</p>
      <h4>{project.title}</h4>
    </div>
  )
}

function FeaturedProject({ labels, project }) {
  const [activeDetail, setActiveDetail] = useState(0)
  const detailCount = 4

  function selectDetail(index) {
    setActiveDetail((index + detailCount) % detailCount)
  }

  function handleDetailKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      event.stopPropagation()
      selectDetail(activeDetail - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      event.stopPropagation()
      selectDetail(activeDetail + 1)
    }
  }

  const detailLabels = [
    labels.projectOverview,
    labels.projectMethod,
    labels.sitePreview,
    labels.projectMetrics,
  ]

  return (
    <div
      className="project-detail-carousel"
      role="region"
      aria-label={labels.detailCarousel}
      tabIndex="0"
      onKeyDown={handleDetailKeyDown}
    >
      <div className="project-detail-carousel__viewport">
        {activeDetail === 0 ? (
          <div
            className="project-detail-carousel__slide project-detail-carousel__slide--overview"
            aria-label={detailLabels[0]}
          >
            <ProjectIdentity labels={labels} project={project} />
            <div className="project-detail-carousel__introduction">
              <p className="project-slide__statement">
                {project.statement}
              </p>
              <ProjectActions
                actions={project.actions}
                label={labels.actions}
              />
            </div>
          </div>
        ) : null}

        {activeDetail === 1 ? (
          <div
            className="project-detail-carousel__slide project-detail-carousel__slide--method"
            aria-label={detailLabels[1]}
          >
            <ProjectDetailIdentity project={project} />
            <div className="project-slide__overview">
              <div>
                <p className="project-slide__eyebrow">{labels.purpose}</p>
                <p>{project.purpose}</p>
              </div>
              <div>
                <p className="project-slide__eyebrow">
                  {labels.methodology}
                </p>
                <p>{project.methodology}</p>
              </div>
              <p className="project-slide__authorship">
                {labels.authorship}
              </p>
            </div>
          </div>
        ) : null}

        {activeDetail === 2 ? (
          <div
            className="project-detail-carousel__slide project-detail-carousel__slide--preview"
            aria-label={detailLabels[2]}
          >
            <ProjectDetailIdentity project={project} />
            <figure>
              <img
                src={project.image}
                alt={project.imageAlt}
                width="1440"
                height="900"
              />
            </figure>
          </div>
        ) : null}

        {activeDetail === 3 ? (
          <div
            className="project-detail-carousel__slide project-detail-carousel__slide--evidence"
            aria-label={detailLabels[3]}
          >
            <ProjectDetailIdentity project={project} />
            <div className="project-slide__metrics">
              <p className="project-slide__eyebrow">{labels.metrics}</p>
              <dl>
                {project.metrics.map((metric) => (
                  <div key={metric.id}>
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ProjectStack
              label={labels.verifiedStack}
              stack={project.stack}
            />
          </div>
        ) : null}
      </div>

      <div className="project-detail-carousel__controls">
        <button
          type="button"
          onClick={() => selectDetail(activeDetail - 1)}
          aria-label={labels.previousDetail}
        >
          <span aria-hidden="true">←</span>
        </button>
        <div
          className="project-detail-carousel__indicators"
          aria-label={labels.detailIndicators}
        >
          {detailLabels.map((label, index) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              aria-current={activeDetail === index ? 'true' : undefined}
              onClick={() => selectDetail(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <p aria-hidden="true">{activeDetail + 1} / {detailCount}</p>
        <button
          type="button"
          onClick={() => selectDetail(activeDetail + 1)}
          aria-label={labels.nextDetail}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <p className="visually-hidden" aria-live="polite">
        {detailLabels[activeDetail]}
      </p>
    </div>
  )
}

function StandardProject({ labels, project }) {
  return (
    <>
      <ProjectIdentity labels={labels} project={project} />
      <div className="project-slide__standard-details">
        <p className="project-slide__purpose">{project.purpose}</p>

        {project.technicalApproach ? (
          <div>
            <p className="project-slide__eyebrow">
              {labels.technicalApproach}
            </p>
            <p>{project.technicalApproach}</p>
          </div>
        ) : null}

        {project.stack ? (
          <ProjectStack label={labels.plannedStack} stack={project.stack} />
        ) : null}

        {project.actionNote ? (
          <p className="project-slide__action-note">{project.actionNote}</p>
        ) : null}
      </div>
    </>
  )
}

function ProjectSlide({ project, labels }) {
  const positionLabel = labels.slidePosition
    .replace('{current}', project.order)
    .replace('{total}', 4)

  return (
    <article
      className={`project-slide${
        project.featured ? ' project-slide--featured' : ''
      }`}
      aria-label={positionLabel}
    >
      {project.featured ? (
        <FeaturedProject labels={labels} project={project} />
      ) : (
        <StandardProject labels={labels} project={project} />
      )}
    </article>
  )
}

export default ProjectSlide
import { useState } from 'react'
