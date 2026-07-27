import { useEffect, useState } from 'react'

function getInitialSection(sectionIds) {
  const hash = window.location.hash.slice(1)

  return sectionIds.includes(hash) ? hash : sectionIds[0]
}

function useActiveSection(sectionIds) {
  const [activeSectionId, setActiveSectionId] = useState(() =>
    getInitialSection(sectionIds),
  )

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const mobileHeaderBar = document.querySelector('.mobile-header__bar')
    const thresholds = Array.from({ length: 21 }, (_, index) => index / 20)
    let observer

    function observeSections() {
      observer?.disconnect()

      const headerHeight = mobileHeaderBar?.getBoundingClientRect().height ?? 0

      observer = new IntersectionObserver(
        () => {
          const viewportHeight = window.innerHeight
          const predominantSection = sections
            .map((section) => {
              const bounds = section.getBoundingClientRect()
              const visibleTop = Math.max(bounds.top, headerHeight)
              const visibleBottom = Math.min(bounds.bottom, viewportHeight)

              return {
                id: section.id,
                visibleHeight: Math.max(0, visibleBottom - visibleTop),
              }
            })
            .sort(
              (first, second) => second.visibleHeight - first.visibleHeight,
            )[0]

          if (predominantSection?.visibleHeight > 0) {
            setActiveSectionId(predominantSection.id)
          }
        },
        {
          rootMargin: `-${headerHeight}px 0px 0px 0px`,
          threshold: thresholds,
        },
      )

      sections.forEach((section) => observer.observe(section))
    }

    observeSections()

    const headerResizeObserver = new ResizeObserver(observeSections)

    if (mobileHeaderBar) {
      headerResizeObserver.observe(mobileHeaderBar)
    }

    return () => {
      observer?.disconnect()
      headerResizeObserver.disconnect()
    }
  }, [sectionIds])

  return activeSectionId
}

export default useActiveSection
