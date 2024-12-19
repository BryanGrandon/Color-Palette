import { useContext } from 'react'
import ColorCard from '../components/ui/color-card'
import { ColorPaletteContext } from '../context/color-palette-context'
import IconsButtons from '../components/ui/icons-buttons'

import { TbArrowsRandom } from 'react-icons/tb'
import { IoBookmark, IoBookmarkOutline, IoReloadOutline } from 'react-icons/io5'
import { IoIosAddCircleOutline, IoMdAddCircle } from 'react-icons/io'

const Home = () => {
  const { colorPalette, colorLimit, modify, markedAsSaved } = useContext(ColorPaletteContext)

  const handlerClickAdd = () => modify.add()
  const handlerClickRandom = () => modify.random()
  const handlerClickSaved = () => modify.saved()

  return (
    <main className='home'>
      <article className='home-option'>
        <IconsButtons selected={<TbArrowsRandom />} deselected={<IoReloadOutline />} onClick={handlerClickRandom} />
        <IconsButtons selected={<IoMdAddCircle />} deselected={<IoIosAddCircleOutline />} onClick={handlerClickAdd} />
        <button className='icons-buttons' onClick={handlerClickSaved}>
          {markedAsSaved ? <IoBookmark /> : <IoBookmarkOutline />}
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
