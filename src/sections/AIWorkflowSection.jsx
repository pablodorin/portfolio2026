import WorkflowStep from '../components/ai-workflow/WorkflowStep.jsx'
import WorkflowDiagram from '../components/ai-workflow/WorkflowDiagram.jsx'
import {
  aiWorkflowFinalPrinciple,
  aiWorkflowIntroduction,
  aiWorkflowPortfolioExample,
  aiWorkflowSteps,
} from '../content/aiWorkflow.js'

function AIWorkflowSection() {
  return (
    <section
      id="ai-workflow"
      className="ai-workflow-section"
      aria-labelledby="ai-workflow-title"
    >
      <header className="ai-workflow-section__header">
        <h2 id="ai-workflow-title">AI-Augmented Engineering</h2>
        <div className="ai-workflow-section__introduction">
          {aiWorkflowIntroduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      <WorkflowDiagram steps={aiWorkflowSteps} />

      <ol className="ai-workflow-section__steps">
        {aiWorkflowSteps.map((step) => (
          <WorkflowStep key={step.id} {...step} />
        ))}
      </ol>

      <div className="ai-workflow-section__conclusion">
        <h3>Human-directed engineering</h3>
        <p>{aiWorkflowFinalPrinciple}</p>
      </div>

      <aside
        className="ai-workflow-section__case-note"
        aria-labelledby="portfolio-example-title"
      >
        <h3 id="portfolio-example-title">Portfolio example</h3>
        <p>{aiWorkflowPortfolioExample}</p>
      </aside>
    </section>
  )
}

export default AIWorkflowSection
