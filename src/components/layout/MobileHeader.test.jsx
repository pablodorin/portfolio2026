import { axe } from 'jest-axe'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MobileHeader from './MobileHeader.jsx'
import { renderWithI18n } from '../../test/renderWithI18n.jsx'

describe('MobileHeader', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="portfolio-main"></div>'
  })

  test('opens, exposes state, and closes with Escape while restoring focus', async () => {
    const user = userEvent.setup()
    renderWithI18n(<MobileHeader activeSectionId="home" theme="light" onThemeToggle={jest.fn()} />)
    const menuButton = screen.getByRole('button', {
      name: /open portfolio navigation/i,
    })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(document.querySelector('.portfolio-main').inert).toBe(true)
    await user.keyboard('{Escape}')
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveFocus()
  })

  test('open navigation has no automatically detectable accessibility violations', async () => {
    const user = userEvent.setup()
    const { container } = renderWithI18n(
      <MobileHeader activeSectionId="home" theme="light" onThemeToggle={jest.fn()} />,
    )
    await user.click(
      screen.getByRole('button', { name: /open portfolio navigation/i }),
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
