import ColorCard from './components/layout/color-card'
import IconsButtons from '../../core/components/ui/icons-buttons'
import { TbArrowsRandom } from 'react-icons/tb'
import { IoBookmark, IoBookmarkOutline, IoReloadOutline } from 'react-icons/io5'
import { IoIosAddCircleOutline, IoMdAddCircle } from 'react-icons/io'
import { contentHome } from '../../content/content-home'
import { addColor } from './script/add-color'
import { randomColorPalette } from './script/random-color-palette'
import { savedColorPalette } from './script/saved-color-palette'
import { useHookContext } from '../../hooks/hook-context'

const PagesHome = () => {
  const { options } = useHookContext()
  const { palette, saved } = options.get

  const handlerClickAdd = (): void => {
    const { limit, palette } = options.get
    const data = addColor({ limit, palette })
    options.update?.limit(data.limit)
    options.update?.palette(data.palette)
  }

  const handlerClickRandom = () => {
    const { palette } = options.get
    const data = randomColorPalette(palette)
    options.update?.palette(data)
    console.log('ss')
  }

  const handlerClickSaved = () => {
    const { newSaved } = savedColorPalette({ palette, saved })
    options.update?.saved([...newSaved])
  }

  const markSaved = (): boolean => {
    const { checking } = savedColorPalette({ palette, saved })
    return checking
  }

  return (
    <main className='home'>
      <article className='home__options'>
        <IconsButtons selected={<TbArrowsRandom />} deselected={<IoReloadOutline />} onClick={handlerClickRandom} />
        <IconsButtons selected={<IoMdAddCircle />} deselected={<IoIosAddCircleOutline />} onClick={handlerClickAdd} />
        <button className='icons-buttons' onClick={() => handlerClickSaved()}>
          {markSaved() ? <IoBookmark /> : <IoBookmarkOutline />}
        </button>
      </article>

      <article className='color-palette'>
        {palette.map((e) => (
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
          <p>Main options: </p>
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

export default PagesHome
