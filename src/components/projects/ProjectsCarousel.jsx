import { useRef, useState } from 'react'
import ProjectSlide from './ProjectSlide.jsx'

const INTERACTIVE_SELECTOR =
  'a, button, input, select, textarea, summary, [contenteditable="true"]'
const SWIPE_THRESHOLD = 48

function ProjectsCarousel({ content }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const pointerStart = useRef(null)
  const total = content.items.length
  const activeProject = content.items[activeIndex]

  function selectProject(index) {
    setActiveIndex((index + total) % total)
  }

  function showPrevious() {
    selectProject(activeIndex - 1)
  }

  function showNext() {
    selectProject(activeIndex + 1)
  }

  function handleKeyDown(event) {
    if (event.target.closest(INTERACTIVE_SELECTOR)) {
      return
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
  }

  function handlePointerDown(event) {
    if (event.pointerType === 'touch' || event.pointerType === 'pen') {
      pointerStart.current = event.clientX
    }
  }

  function handlePointerUp(event) {
    if (pointerStart.current === null) {
      return
    }

    const distance = event.clientX - pointerStart.current
    pointerStart.current = null

    if (Math.abs(distance) < SWIPE_THRESHOLD) {
      return
    }

    if (distance > 0) {
      showPrevious()
    } else {
      showNext()
    }
  }

  const position = String(activeIndex + 1).padStart(2, '0')
  const announcement = content.labels.slidePosition
    .replace('{current}', activeIndex + 1)
    .replace('{total}', total)

  return (
    <div
      className="projects-carousel"
      role="region"
      aria-label={content.labels.carousel}
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <div
        className="projects-carousel__viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStart.current = null
        }}
      >
        <div className="projects-carousel__slide" key={activeProject.id}>
          <ProjectSlide
            project={activeProject}
            labels={content.labels}
          />
        </div>
      </div>

      <div className="projects-carousel__controls">
        <button type="button" onClick={showPrevious}>
          <span aria-hidden="true">←</span>
          <span>{content.labels.previous}</span>
        </button>

        <p className="projects-carousel__position" aria-hidden="true">
          {position} / 04
        </p>

        <button type="button" onClick={showNext}>
          <span>{content.labels.next}</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div
        className="projects-carousel__indicators"
        aria-label={content.labels.indicators}
      >
        {content.items.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className="projects-carousel__indicator"
            aria-label={content.labels.goToProject.replace(
              '{number}',
              index + 1,
            )}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => selectProject(index)}
          >
            <span aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite" aria-atomic="true">
        {announcement}: {activeProject.title}
      </p>
    </div>
  )
}

export default ProjectsCarousel
