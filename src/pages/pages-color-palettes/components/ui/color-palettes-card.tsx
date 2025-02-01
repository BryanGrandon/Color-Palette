import SavedButtons from '../../../../core/components/ui/saved-buttons'
import { Palette } from '../../../../core/types/context'

type Color_Palettes_Card = { colors: Palette[] }

const ColorPalettesCard = ({ colors }: Color_Palettes_Card) => {
  return (
    <article className='color-palettes-card'>
      <section className='color-palettes-card__palette'>
        {colors.map((e) => (
          <div className='color-palettes-card__color' key={e.id} style={{ backgroundColor: e.hex }}>
            {e.hex}
          </div>
        ))}
      </section>

      <SavedButtons palette={colors} />
    </article>
  )
}

export default ColorPalettesCard
