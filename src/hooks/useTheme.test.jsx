import { act, renderHook } from '@testing-library/react'
import useTheme from './useTheme.js'

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
    delete document.documentElement.dataset.theme
    document.head.innerHTML = '<meta name="theme-color" content="#ffffff">'
  })

  test('uses the document theme, toggles it, and persists the choice', () => {
    document.documentElement.dataset.theme = 'light'
    const { result } = renderHook(() => useTheme())

    act(() => result.current.toggleTheme())

    expect(result.current.theme).toBe('dark')
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(localStorage.getItem('portfolio-theme')).toBe('dark')
    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute(
      'content',
      '#0b1020',
    )
  })

  test('falls back to the operating-system preference', () => {
    window.matchMedia.mockReturnValueOnce({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')
  })
})
