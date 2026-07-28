import { institutionLogos } from '../../content/institutionLogos.js'

export function InstitutionLogo({ institutionId, source: sourceOverride }) {
  const filename = institutionLogos[institutionId]
  const source =
    sourceOverride ?? encodeURI(`/logos/institutions/${filename}`)

  return (
    <span
      className={`institution-logo institution-logo--${institutionId}`}
      aria-hidden="true"
    >
      <img src={source} alt="" />
    </span>
  )
}

function InstitutionIdentity({ children, institutionId }) {
  return (
    <span className="institution-identity">
      <InstitutionLogo institutionId={institutionId} />
      <span className="institution-identity__name">{children}</span>
    </span>
  )
}

export default InstitutionIdentity
