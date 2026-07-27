export const aiWorkflowIntroduction = [
  'I use artificial intelligence as an engineering tool, not as a substitute for technical judgement.',
  'AI can accelerate exploration, implementation, documentation, and review. However, understanding the problem, defining the constraints, making technical decisions, validating the results, and assuming responsibility for the final solution remain human responsibilities.',
]

export const aiWorkflowSteps = [
  {
    number: '01',
    id: 'frame-the-problem',
    title: 'Frame the Problem',
    body:
      'I begin by defining the problem, its scope, its constraints, and the expected outcome. Clear acceptance criteria and explicit limits help prevent the tool from producing solutions that are technically correct but irrelevant to the actual need.',
  },
  {
    number: '02',
    id: 'explore-and-plan',
    title: 'Explore and Plan',
    body:
      'I use AI to explore alternatives, compare possible approaches, identify risks, and divide complex work into smaller, verifiable steps. The tool can suggest options, but architecture, priorities, and trade-offs require professional judgement.',
  },
  {
    number: '03',
    id: 'implement-with-assistance',
    title: 'Implement with Assistance',
    body:
      'AI can accelerate scaffolding, repetitive code, refactoring proposals, documentation, and initial test cases. I provide the context and constraints, review the generated output, and adapt it to the standards and structure of the project.',
  },
  {
    number: '04',
    id: 'review-and-validate',
    title: 'Review and Validate',
    body:
      'Generated output is never accepted only because it compiles or appears plausible. I review functionality, readability, maintainability, security, accessibility, and architectural consistency, then validate the result through tests, linting, builds, and direct inspection where appropriate.',
    emphasis: 'validation',
  },
  {
    number: '05',
    id: 'iterate-and-document',
    title: 'Iterate and Document',
    body:
      'Development proceeds through small, controlled iterations. Decisions, limitations, and relevant context are documented so that the work remains understandable, consistent, and easier to review or continue.',
  },
]

export const aiWorkflowFinalPrinciple =
  'The result is not autonomous software generation, but a human-directed engineering process supported by a powerful tool. AI increases speed and exploration capacity; professional judgement provides direction, validation, and accountability.'

export const aiWorkflowPortfolioExample =
  'This portfolio was developed using the same approach: its objectives, content, visual direction, constraints, and acceptance criteria were defined and validated by me, while AI-assisted tools supported implementation, review, and iteration.'
