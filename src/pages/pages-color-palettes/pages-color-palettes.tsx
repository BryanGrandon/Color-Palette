import { useState } from 'react'
import { useHookContext } from '../../hooks/hook-context'
import { MAXIMUM_COLORS, MINIMUM_COLORS } from '../../core/constants'
// UI
import ColorPalettesCard from './components/ui/color-palettes-card'
import Button from '../../core/components/ui/button'
import Title from '../../core/components/ui/title'
// Icons
import { FaMinus, FaPlus } from 'react-icons/fa6'

const PagesColorPalettes = () => {
  const [colorsNumbers, setColorsNumbers] = useState<number>(5)
  const { options } = useHookContext()
  const { colorPalettes } = options.get

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
        <p>Number of colors: {colorsNumbers}</p>
        <section className='color-palettes__controls'>
          <button className='color-palettes__controls-btn' onClick={handlerClickLess}>
            <FaMinus />
          </button>
          <input
            className='color-palettes__range'
            type='range'
            value={colorsNumbers}
            min={MINIMUM_COLORS}
            max={MAXIMUM_COLORS}
            onChange={(e) => handlerChange(e)}
          />
          <button className='color-palettes__controls-btn' onClick={handlerClickMore}>
            <FaPlus />
          </button>
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
