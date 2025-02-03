import ColorPalettesCard from './components/ui/color-palettes-card'
import { useHookContext } from '../../hooks/hook-context'

const PagesColorPalettes = () => {
  // const [colorsNumbers] = useState<number>(5)
  const { options } = useHookContext()
  const { colorPalettes } = options.get

  return (
    <main className='color-palettes'>
      <article>
        <h2>Color Palettes</h2>
        <p>Generate</p>
        <p> - colors number</p>
        <p> - color ?</p>
      </article>
      <h3>Color Palettes Generate</h3>
      <article className='color-palettes__cards'>
        {colorPalettes.map((e) => (
          <ColorPalettesCard key={e.id} colors={e.palette} />
        ))}
      </article>
    </main>
  )
}

export default PagesColorPalettes
