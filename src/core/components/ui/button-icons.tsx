type Button_Icons = {
  deselected: JSX.Element
  selected: JSX.Element
  className?: string
  onClick: () => void
}

const ButtonIcons = ({ deselected, selected, className = '', onClick }: Button_Icons) => {
  return (
    <button onClick={onClick} className={`button-icons ${className}`}>
      <span className='button-icons__deselected'>{deselected}</span>
      <span className='button-icons__selected'>{selected}</span>
    </button>
  )
}

export default ButtonIcons
