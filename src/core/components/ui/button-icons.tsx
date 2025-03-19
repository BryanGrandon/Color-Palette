type Button_Icons = {
  ariaLabel: string
  deselected: JSX.Element
  selected: JSX.Element
  className?: string
  onClick: () => void
}

const ButtonIcons = ({ deselected, selected, className = '', onClick, ariaLabel }: Button_Icons) => {
  return (
    <button onClick={onClick} className={`button-icons ${className}`} aria-label={ariaLabel}>
      <span className='button-icons__deselected'>{deselected}</span>
      <span className='button-icons__selected'>{selected}</span>
    </button>
  )
}

export default ButtonIcons
