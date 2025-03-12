type Title = {
  text: string
  className?: string
}

const Title = ({ text, className = '' }: Title) => {
  return <h2 className={`title ${className}`}>{text}</h2>
}

export default Title
