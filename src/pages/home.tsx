import { useContext } from 'react'
import ColorCard from '../components/ui/color-card'
import { ColorPaletteContext } from '../context/color-palette-context'

const Home = () => {
  const { colorPalette, colorLimit } = useContext(ColorPaletteContext)

  return (
    <main className='home'>
      <article className='color-palette' style={{ gridTemplateColumns: `repeat(${colorLimit}, 1fr)` }}>
        {colorPalette.map((e) => (
          <ColorCard key={e.id} color={e.hex} />
        ))}
      </article>
    </main>
  )
}

export default Home
