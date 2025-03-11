type Button = {
  text: string
  className?: string
  onClick?: () => void
}

const Button = ({ text, className = '', onClick }: Button) => {
  return (
    <button className={`${className} button`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
