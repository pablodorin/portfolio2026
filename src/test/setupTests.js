import '@testing-library/jest-dom'
import { toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      addEventListener: jest.fn(),
      matches: false,
      media: query,
      removeEventListener: jest.fn(),
    })),
  })

  window.HTMLElement.prototype.scrollIntoView = jest.fn()
  globalThis.requestAnimationFrame = (callback) => callback()
  globalThis.cancelAnimationFrame = jest.fn()
}
