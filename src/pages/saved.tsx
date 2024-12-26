import { useContext } from 'react'
import { ColorPaletteContext } from '../context/color-palette-context'
import SavedCard from '../components/ui/saved-card'
const Saved = () => {
  const { savedPalette } = useContext(ColorPaletteContext)

  return (
    <main>
      <section>
        {savedPalette.map((e) => (
          <SavedCard key={e.id} id={e.id} colors={e.color} />
        ))}
      </section>
    </main>
  )
}

export default Saved
