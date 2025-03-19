import { useHookContext } from '../../hooks/hook-context'
import { MAXIMUM_COLORS } from '../../core/constants'
// UI OR Layout
import Title from '../../core/components/ui/title'
import SaveButton from '../../core/components/ui/save-button'
import RandomColorPalette from './components/ui/random-color-palette'
import AddColorPalette from './components/ui/add-color-palette'
import MainColorCard from './components/layout/main-color-card'
import { IXMark } from '../../core/components/icons/i-x-mark'

const PagesHome = () => {
  const { options } = useHookContext()
  const { palette, limit } = options.get

  return (
    <main className='home'>
      <article className='home__options'>
        <RandomColorPalette />
        {limit == MAXIMUM_COLORS ? <IXMark className='transparent' /> : <AddColorPalette />}
        <SaveButton palette={palette} />
      </article>

      <article className='color-palette'>
        {palette.map((e) => (
          <MainColorCard key={e.id} id={e.id} color={e.hex} />
        ))}
      </article>

      <article className='home__info'>
        <section className='home__description'>
          <Title text='Color Palette' />
          <p>Generate your perfect color palette for each project or illustration.</p>
          <p>It has a maximum limit of 9 colors and a minimum of 2 colors.</p>
        </section>
        <section className='home__paragraph'>
          <p>
            The general functions allow you to generate a random color palette, to add one more color to the color palette and to
            save the color palette.
          </p>
          <p>
            The individual functions allow you to copy the color in hexadecimal format, select the desired color, select the color
            in different shades, generate a random color and remove the color from the color palette.
          </p>
        </section>
      </article>
    </main>
  )
}

export default PagesHome
