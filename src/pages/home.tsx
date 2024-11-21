import ColorCard from '../components/ui/color-card'
import { randomColor } from '../functions/random-color'

const Home = () => {
  const array: string[] = []

  for (let i = 0; i < 9; i++) {
    const color = randomColor()
    array.push(color)
  }

  return (
    <main className='home' style={{ gridTemplateColumns: `repeat(${array.length}, 1fr)` }}>
      {array.map((e) => (
        <ColorCard key={array.indexOf(e)} color={e} />
      ))}
    </main>
  )
}

export default Home
