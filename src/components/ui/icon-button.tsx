type IconBtn = {
  value: JSX.Element
  className?: string
  onClick: () => void
}

const IconButton = ({ className = '', value, onClick }: IconBtn) => {
  return (
    <button onClick={onClick} className={`icon-button ${className}`}>
      {value}
    </button>
  )
}

export default IconButton
