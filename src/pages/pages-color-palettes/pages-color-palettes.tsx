import ColorPalettesCard from './components/ui/color-palettes-card'
import { useHookContext } from '../../hooks/hook-context'
import Button from '../../core/components/ui/button'
import { useState } from 'react'
import Title from '../../core/components/ui/title'
import { MAXIMUM_COLORS, MINIMUM_COLORS } from '../../core/constants'

const PagesColorPalettes = () => {
  const [colorsNumbers, setColorsNumbers] = useState<number>(5)
  const { options } = useHookContext()
  const { colorPalettes } = options.get

  const handlerClickButton = () => options.update.colorPalettes(colorsNumbers, false)

  const handlerChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    options.update.colorPalettes(Number(ev.target.value), true)
    setColorsNumbers(Number(ev.target.value))
  }

  return (
    <main className='color-palettes'>
      <article className='color-palettes__header'>
        <Title text='Color Palettes' />
        <section className='color-palettes__info'>
          <p>Number of colors: {colorsNumbers}</p>
          <input
            className='color-palettes__range'
            type='range'
            value={colorsNumbers}
            min={MINIMUM_COLORS}
            max={MAXIMUM_COLORS}
            onChange={(e) => handlerChange(e)}
          />
        </section>
      </article>
      <article className='color-palettes__cards'>
        {colorPalettes.map((e) => (
          <ColorPalettesCard key={e.id} colors={e.palette} />
        ))}
      </article>
      <section className='color-palettes__buttons'>
        <Button text='More color palettes' onClick={handlerClickButton} />
      </section>
    </main>
  )
}

export default PagesColorPalettes
