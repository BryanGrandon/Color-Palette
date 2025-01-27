import { useHookContext } from '../../hooks/hook-context'
import { MAXIMUM_COLORS } from '../../core/constants'
// UI OR Layout
import MainColorCard from './components/layout/main-color-card'
import AddColorPalette from './components/ui/add-color-palette'
import RandomColorPalette from './components/ui/random-color-palette'
import Title from '../../core/components/ui/title'
// icons
import { contentHome } from '../../content/content-home'
import SavedButtons from '../../core/components/ui/saved-buttons'

const PagesHome = () => {
  const { options } = useHookContext()
  const { palette, limit } = options.get

  return (
    <main className='home'>
      <article className='home__options'>
        <RandomColorPalette />
        {limit == MAXIMUM_COLORS ? null : <AddColorPalette />}
        <SavedButtons palette={palette} />
      </article>

      <article className='color-palette'>
        {palette.map((e) => (
          <MainColorCard key={e.id} id={e.id} color={e.hex} />
        ))}
      </article>

      <article className='home__content'>
        <section className='home__content__header'>
          <Title text='Color Palette' />
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
