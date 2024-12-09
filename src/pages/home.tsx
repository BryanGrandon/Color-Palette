import { useContext } from 'react'
import ColorCard from '../components/ui/color-card'
import { ColorPaletteContext } from '../context/color-palette-context'
import AddButton from '../components/ui/add-button'
import IconsButtons from '../components/ui/icons-buttons'

import { IoIosAddCircleOutline, IoMdAddCircle } from 'react-icons/io'

const Home = () => {
  const { colorPalette, colorLimit, modify } = useContext(ColorPaletteContext)

  const handlerClickAdd = () => modify.add()
  const handlerClickRandom = () => modify.random()

  return (
    <main className='home'>
      <header className='home-header'>
        <button className='home-header__random' onClick={handlerClickRandom}>
          Random
        </button>
        <IconsButtons selected={<IoMdAddCircle />} deselected={<IoIosAddCircleOutline />} onClick={handlerClickAdd} />
      </header>
      <article className='color-palette' style={{ gridTemplateColumns: `repeat(${colorLimit}, 1fr)` }}>
        {colorPalette.map((e) => (
          <ColorCard key={e.id} id={e.id} color={e.hex} />
        ))}
      </article>
    </main>
  )
}

export default Home
