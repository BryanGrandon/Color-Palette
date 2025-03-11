type Button_Icons = {
  deselected: JSX.Element
  selected: JSX.Element
  className?: string
  onClick: () => void
}

const ButtonIcons = ({ deselected, selected, className = '', onClick }: Button_Icons) => {
  return (
    <button onClick={onClick} className={`${className} icons-buttons`}>
      <span className='icons-buttons__deselected'>{deselected}</span>
      <span className='icons-buttons__selected'>{selected}</span>
    </button>
  )
}

export default ButtonIcons
