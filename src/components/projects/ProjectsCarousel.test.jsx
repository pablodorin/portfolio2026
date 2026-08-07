import { axe } from 'jest-axe'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectsCarousel from './ProjectsCarousel.jsx'
import en from '../../i18n/locales/en.js'
import { renderWithI18n } from '../../test/renderWithI18n.jsx'

describe('ProjectsCarousel', () => {
  test('supports buttons and keyboard navigation without autoplay', async () => {
    const user = userEvent.setup()
    renderWithI18n(<ProjectsCarousel content={en.projects} />)
    const region = screen.getByRole('region', { name: en.projects.labels.carousel })
    const firstTitle = en.projects.items[0].title
    const secondTitle = en.projects.items[1].title

    expect(screen.getByText(firstTitle)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: en.projects.labels.next }))
    expect(screen.getByText(secondTitle)).toBeInTheDocument()
    await user.type(region, '{ArrowLeft}')
    expect(screen.getByText(firstTitle)).toBeInTheDocument()
  })

  test('has no automatically detectable accessibility violations', async () => {
    const { container } = renderWithI18n(<ProjectsCarousel content={en.projects} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
