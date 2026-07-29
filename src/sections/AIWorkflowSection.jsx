import WorkflowStep from '../components/ai-workflow/WorkflowStep.jsx'
import WorkflowDiagram from '../components/ai-workflow/WorkflowDiagram.jsx'
import useTranslation from '../i18n/useTranslation.js'

function AIWorkflowSection() {
  const { messages } = useTranslation()
  const {
    conclusionTitle,
    finalPrinciple,
    introduction,
    steps,
    title,
  } = messages.aiWorkflow

  return (
    <section
      id="ai-workflow"
      className="ai-workflow-section"
      aria-labelledby="ai-workflow-title"
    >
      <header className="ai-workflow-section__header" data-reveal>
        <h2 id="ai-workflow-title">{title}</h2>
        <div className="ai-workflow-section__introduction">
          {introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      <WorkflowDiagram steps={steps} />

      <ol className="ai-workflow-section__steps">
        {steps.map((step) => (
          <WorkflowStep key={step.id} {...step} />
        ))}
      </ol>

      <div className="ai-workflow-section__conclusion" data-reveal>
        <h3>{conclusionTitle}</h3>
        <p>{finalPrinciple}</p>
      </div>
    </section>
  )
}

export default AIWorkflowSection
