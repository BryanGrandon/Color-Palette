type Button = {
  ariaLabel?: string
  text: string
  className?: string
  onClick?: () => void
}

const Button = ({ text, className = '', onClick, ariaLabel }: Button) => {
  return (
    <button className={`${className} button`} onClick={onClick} aria-label={ariaLabel}>
      {text}
    </button>
  )
}

export default Button
