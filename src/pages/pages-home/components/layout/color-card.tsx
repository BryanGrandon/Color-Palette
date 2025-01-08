import { useContext } from 'react'
import { ColorPaletteContext } from '../../../../core/context/color-palette-context'
import IconsButtons from '../../../../core/components/ui/icons-buttons'
// ui
import DeleteColor from '../ui/delete-color'
import ShadesColor from '../ui/shades-color'
// Icons
import { FaPalette } from 'react-icons/fa'
import { IoReloadOutline, IoCopyOutline, IoCopy } from 'react-icons/io5'
import { TbArrowsRandom } from 'react-icons/tb'
import { MINIMUM_COLORS } from '../../../../core/constants'
import { changeColor } from '../../script/change-color'

type Props = {
  id: number
  color: string
}

const ColorCard = ({ color, id }: Props): JSX.Element => {
  const { options, notify } = useContext(ColorPaletteContext)
  const { limit, palette } = options.get

  const handlerClickCopy = (): void => {
    notify(`Color copied!`)
    navigator.clipboard.writeText(color)
  }

  const handlerChangeColor = (e: React.FormEvent): void => {
    const color = (e.target as HTMLTextAreaElement).value
    const data = changeColor({ colorId: id, color, palette })
    options.update?.palette(data)
  }

  const handlerClickRandomColor = (color: string) => {
    const data = changeColor({ colorId: id, color, palette })
    options.update?.palette(data)
  }

  return (
    <section className='color-card' style={{ background: color }}>
      <h2 className='color-card__title'>{color}</h2>
      <section className='color-card__options'>
        <IconsButtons selected={<IoCopy />} deselected={<IoCopyOutline />} onClick={handlerClickCopy} />
        <label
          className='not-on-mobile'
          onClick={(e) => ((e.target as HTMLTextAreaElement).value = color)}
          onChange={(e) => handlerChangeColor(e)}
        >
          <FaPalette />
          <input type='color' className='color-card__input' />
        </label>

        <ShadesColor color={color} id={id} />

        <IconsButtons
          selected={<TbArrowsRandom />}
          deselected={<IoReloadOutline />}
          onClick={() => handlerClickRandomColor('')}
        />
        {limit > MINIMUM_COLORS ? <DeleteColor id={id} /> : null}
      </section>
    </section>
  )
}

export default ColorCard
