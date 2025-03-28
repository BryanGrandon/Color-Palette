import { useState } from 'react'
import { useHookContext } from '../../hooks/hook-context'
import { MAXIMUM_COLORS, MINIMUM_COLORS } from '../../core/constants'
import ColorPalettesCard from './components/ui/color-palettes-card'
import Button from '../../core/components/ui/button'
import Title from '../../core/components/ui/title'
import { IMinus, IPlus } from '../../core/components/icons/i-min-max'
import { IArrowUp } from '../../core/components/icons/i-arrows'

const PagesColorPalettes = () => {
  const { options } = useHookContext()
  const { colorPalettes } = options.get
  const paletteLength = colorPalettes.length > 0 ? colorPalettes[0].palette.length : 0
  const [colorsNumbers, setColorsNumbers] = useState<number>(paletteLength)

  const handlerClickButton = () => options.update.colorPalettes(colorsNumbers, false)

  const handlerChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    options.update.colorPalettes(Number(ev.target.value), true)
    setColorsNumbers(Number(ev.target.value))
  }
  const handlerClickLess = () => {
    if (colorsNumbers > MINIMUM_COLORS) {
      options.update.colorPalettes(colorsNumbers - 1, true)
      setColorsNumbers(colorsNumbers - 1)
    }
  }
  const handlerClickMore = () => {
    if (colorsNumbers < MAXIMUM_COLORS) {
      options.update.colorPalettes(colorsNumbers + 1, true)
      setColorsNumbers(colorsNumbers + 1)
    }
  }

  return (
    <main className='color-palettes'>
      <article className='color-palettes__header'>
        <Title text='Color Palettes' />
        <p>Number of colors: {paletteLength}</p>
        <section className='color-palettes__controls'>
          <button className='color-palettes__controls-btn' onClick={handlerClickLess} aria-label='minus 1 color'>
            <IMinus />
          </button>
          <input
            className='color-palettes__range'
            type='range'
            value={paletteLength}
            min={MINIMUM_COLORS}
            max={MAXIMUM_COLORS}
            onChange={(e) => handlerChange(e)}
          />
          <button className='color-palettes__controls-btn' onClick={handlerClickMore} aria-label='plus 1 color'>
            <IPlus />
          </button>
        </section>
      </article>
      <article className='color-palettes__cards'>
        {colorPalettes.map((e) => (
          <ColorPalettesCard key={e.id} colors={e.palette} />
        ))}
      </article>
      <section className='color-palettes__buttons'>
        <Button text='More color palettes' onClick={handlerClickButton} ariaLabel='more color palette' />
      </section>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='color-palettes__top'
        aria-label='scrollTo top 0'
      >
        <IArrowUp />
      </button>
    </main>
  )
}

export default PagesColorPalettes
