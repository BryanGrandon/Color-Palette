import { useContext } from 'react'
import { ColorPaletteContext } from '../core/context/color-palette-context'
import SavedCard from '../components/ui/saved-card'

const Saved = () => {
  const { options } = useContext(ColorPaletteContext)
  const { saved } = options.get

  return (
    <main>
      <section>
        {saved.map((e) => (
          <SavedCard key={e.id} id={e.id} colors={e.palette} />
        ))}
      </section>
    </main>
  )
}

export default Saved
