import { useLayoutEffect } from 'react'

const REVEAL_SELECTOR = '[data-reveal]'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function useSectionReveal() {
  useLayoutEffect(() => {
    const documentRoot = document.documentElement
    const revealGroups = Array.from(
      document.querySelectorAll(REVEAL_SELECTOR),
    )

    if (
      revealGroups.length === 0 ||
      window.matchMedia(REDUCED_MOTION_QUERY).matches ||
      !('IntersectionObserver' in window)
    ) {
      return undefined
    }

    let observer
    const pendingGroups = new Set(revealGroups)

    function revealGroup(group) {
      if (!pendingGroups.has(group)) {
        return
      }

      group.classList.add('is-revealed')
      observer?.unobserve(group)
      pendingGroups.delete(group)

      if (pendingGroups.size === 0) {
        observer?.disconnect()
      }
    }

    function revealHashTarget() {
      const targetId = window.location.hash.slice(1)

      if (!targetId) {
        return
      }

      const target = document.getElementById(decodeURIComponent(targetId))

      if (!target) {
        return
      }

      const targetGroup = target.closest(REVEAL_SELECTOR)
      if (targetGroup) {
        revealGroup(targetGroup)
      }

      target.querySelectorAll(REVEAL_SELECTOR).forEach(revealGroup)
    }

    try {
      documentRoot.classList.add('motion-ready')

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return
            }

            revealGroup(entry.target)
          })
        },
        {
          root: null,
          rootMargin: '0px 0px -10% 0px',
          threshold: 0.1,
        },
      )

      revealGroups.forEach((group) => observer.observe(group))
      revealHashTarget()
      window.addEventListener('hashchange', revealHashTarget)
    } catch {
      documentRoot.classList.remove('motion-ready')
      revealGroups.forEach((group) => group.classList.remove('is-revealed'))
    }

    return () => {
      observer?.disconnect()
      window.removeEventListener('hashchange', revealHashTarget)
    }
  }, [])
}

export default useSectionReveal
