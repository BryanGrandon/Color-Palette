import { useContext } from 'react'
import ColorCard from '../components/ui/color-card'
import { ColorPaletteContext } from '../context/color-palette-context'
import IconsButtons from '../components/ui/icons-buttons'

import { TbArrowsRandom } from 'react-icons/tb'
import { IoBookmark, IoBookmarkOutline, IoReloadOutline } from 'react-icons/io5'
import { IoIosAddCircleOutline, IoMdAddCircle } from 'react-icons/io'
import { contentHome } from '../content/content-home'

const Home = () => {
  const { colorPalette, colorLimit, modify, markedAsSaved } = useContext(ColorPaletteContext)

  const handlerClickAdd = () => modify.add()
  const handlerClickRandom = () => modify.random()
  const handlerClickSaved = () => modify.saved()

  return (
    <main className='home'>
      <article className='home__options'>
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

      <article className='home__content'>
        <section className='home__content__header'>
          <h2 className='home__title'>Color Palette</h2>
          <p>Generate your perfect color palette for each project or illustration.</p>
          <p>It has a maximum limit of 9 colors and a minimum of 2 colors.</p>
        </section>
        <section className='home__content__section'>
          <p>Main options:</p>
          <ul className='home__list'>
            {contentHome.main.map((e) => (
              <li className='home__list__element' key={e.id}>
                {e.icon} <p>{e.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className='home__content__section'>
          <p>Card options:</p>
          <ul className='home__list'>
            {contentHome.card.map((e) => (
              <li className='home__list__element' key={e.id}>
                {e.icon} <p>{e.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  )
}

export default Home
