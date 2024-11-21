import ColorCard from '../components/ui/color-card'
import { randomColor } from '../functions/random-color'

const Home = () => {
  type Colors = {
    id: number
    hex: string
  }

  const array: Colors[] = []

  for (let i = 0; i < 9; i++) {
    const color = {
      id: i,
      hex: randomColor(),
    }
    array.push(color)
  }

  return (
    <main className='home'>
      <article className='color-palette' style={{ gridTemplateColumns: `repeat(${array.length}, 1fr)` }}>
        {array.map((e) => (
          <ColorCard key={e.id} color={e.hex} />
        ))}
      </article>
    </main>
  )
}

export default Home
