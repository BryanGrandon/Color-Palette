import { useContext } from 'react'
import ColorCard from '../components/ui/color-card'
import { ColorPaletteContext } from '../context/color-palette-context'
import IconsButtons from '../components/ui/icons-buttons'

import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5'
import { IoIosAddCircleOutline, IoMdAddCircle } from 'react-icons/io'
import { RiLoopLeftFill } from 'react-icons/ri'

const Home = () => {
  const { colorPalette, colorLimit, modify } = useContext(ColorPaletteContext)

  const handlerClickAdd = () => modify.add()
  const handlerClickRandom = () => modify.random()
  const handlerClickSaved = () => modify.saved()

  return (
    <main className='home'>
      <article className='home-option'>
        <button className='home-option__random' onClick={handlerClickRandom}>
          <RiLoopLeftFill />
        </button>
        <IconsButtons selected={<IoMdAddCircle />} deselected={<IoIosAddCircleOutline />} onClick={handlerClickAdd} />
        <button onClick={handlerClickSaved}>
          <IoBookmark />
          <IoBookmarkOutline />
        </button>
      </article>
      <article className='color-palette' style={{ gridTemplateColumns: `repeat(${colorLimit}, 1fr)` }}>
        {colorPalette.map((e) => (
          <ColorCard key={e.id} id={e.id} color={e.hex} />
        ))}
      </article>
    </main>
  )
}

export default Home
