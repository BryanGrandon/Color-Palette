type IconsButtons = {
  deselected: JSX.Element
  selected: JSX.Element
  className?: string
  onClick: () => void
}

const IconsButtons = ({ deselected, selected, className, onClick }: IconsButtons) => {
  return (
    <button onClick={onClick} className={`${className} icons-buttons`}>
      <span className='icons-buttons__deselected'>{deselected}</span>
      <span className='icons-buttons__selected'>{selected}</span>
    </button>
  )
}

export default IconsButtons
