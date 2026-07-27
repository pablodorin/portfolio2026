function ActionLink({ children, href, variant = 'secondary' }) {
  return (
    <a className={`action-link action-link--${variant}`} href={href}>
      {children}
    </a>
  )
}

export default ActionLink
