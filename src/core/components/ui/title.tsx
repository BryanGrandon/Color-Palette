type Title = {
  text: string
}

const Title = ({ text }: Title) => {
  return <h2 className='title'>{text}</h2>
}

export default Title
