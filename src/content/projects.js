export const projects = [
  {
    id: 'project-01',
    order: 1,
    number: '01',
    title: 'Project 01',
    type: 'Portfolio Project',
    status: 'To be defined',
    purpose:
      'The first portfolio project will be defined after its technical objective, scope, and demonstration value are approved.',
  },
  ...[2, 3, 4].map((order) => ({
    id: `project-0${order}`,
    order,
    number: `0${order}`,
    title: `Project 0${order}`,
    type: 'Portfolio Project',
    status: 'To be defined',
    purpose: `The ${['', '', 'second', 'third', 'fourth'][order]} portfolio project will be defined after its technical objective, scope, and demonstration value are approved.`,
  })),
]
