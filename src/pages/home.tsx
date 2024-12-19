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
      <article>
        <section>
          <h2>Color Palette</h2>
          <p>Generate your perfect color palette for each project or illustration.</p>
        </section>
        <section>
          <h3>Information</h3>
          <p>It has a maximum limit of 9 colors and a minimum of 2 colors.</p>
          <ul>
            <li>
              <IoReloadOutline /> : Allows to generate random colors.
            </li>
            <li>
              <IoIosAddCircleOutline /> : Allows you to add one more color.
            </li>
            <li>
              <IoBookmarkOutline /> : Allows you to save the color palette.
            </li>
          </ul>
        </section>
        <section>
          <h3>Information card</h3>
        </section>
      </article>
    </main>
  )
}

export default Home
