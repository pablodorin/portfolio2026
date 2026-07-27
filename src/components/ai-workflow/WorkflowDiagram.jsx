import useTranslation from '../../i18n/useTranslation.js'

function WorkflowGlyph({ stepId }) {
  const glyphs = {
    'frame-the-problem': (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 10h6M9 14h4" />
      </>
    ),
    'explore-and-plan': (
      <>
        <circle cx="10.5" cy="10.5" r="4.5" />
        <path d="m14 14 4 4M8.5 10.5h4M10.5 8.5v4" />
      </>
    ),
    'implement-with-assistance': (
      <>
        <path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 5l-2 14" />
      </>
    ),
    'review-and-validate': (
      <>
        <path d="M5 12.5 9.5 17 19 7.5" />
        <path d="M19 12v7H5V5h10" />
      </>
    ),
    'iterate-and-document': (
      <>
        <path d="M18 8V4l-2 2a7 7 0 1 0 1.5 10" />
        <path d="M8 9h6M8 12h6M8 15h4" />
      </>
    ),
  }

  return (
    <svg
      className="workflow-diagram__glyph"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {glyphs[stepId]}
    </svg>
  )
}

function WorkflowDiagram({ steps }) {
  const { messages } = useTranslation()

  return (
    <nav
      className="workflow-diagram"
      aria-label={messages.aiWorkflow.stepsLabel}
      data-reveal
      data-reveal-delay="1"
    >
      <ol className="workflow-diagram__list">
        {steps.map(({ id, number, title }) => (
          <li key={id} className="workflow-diagram__item">
            <a className="workflow-diagram__link" href={`#${id}`}>
              <span className="workflow-diagram__image">
                <WorkflowGlyph stepId={id} />
              </span>
              <span className="workflow-diagram__copy">
                <span className="workflow-diagram__number">{number}</span>
                <span className="workflow-diagram__label">{title}</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default WorkflowDiagram
