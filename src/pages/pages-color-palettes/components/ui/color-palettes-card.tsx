import SavedButtons from '../../../../core/components/ui/saved-buttons'
import { Palette } from '../../../../core/types/context'

type Color_Palettes_Card = { colors: Palette[] }

const ColorPalettesCard = ({ colors }: Color_Palettes_Card) => {
  return (
    <article className='color-palettes-card'>
      <section className='color-palettes-card__palette'>
        {colors.map((e) => (
          <div className='color-palettes-card__content' key={e.id}>
            <p className='color-palettes-card__color' style={{ backgroundColor: e.hex }}></p>
            <p>{e.hex}</p>
          </div>
        ))}
      </section>
      <section className='color-palettes-card__buttons'>
        <SavedButtons palette={colors} />
      </section>
    </article>
  )
}

export default ColorPalettesCard
