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
import HexInput from '../ui/hex-input'

type Color_Card = {
  id: number
  color: string
}

const ColorCard = ({ color, id }: Color_Card): JSX.Element => {
  const { options, notify } = useContext(ColorPaletteContext)
  const { limit, palette } = options.get

  const handlerClickCopy = (): void => {
    notify(`Color copied!`)
    navigator.clipboard.writeText(color)
  }

  const handlerChangeColor = (e: React.FormEvent): void => {
    const color = (e.target as HTMLTextAreaElement).value
    const data = changeColor({ colorId: id, color, palette, isRandom: false })
    options.update?.palette(data)
  }

  const handlerClickRandomColor = () => {
    const data = changeColor({ colorId: id, palette, isRandom: true })
    options.update?.palette(data)
  }

  return (
    <section className='color-card' style={{ background: color }}>
      <HexInput color={color} id={id} />

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

        <IconsButtons selected={<TbArrowsRandom />} deselected={<IoReloadOutline />} onClick={() => handlerClickRandomColor()} />
        {limit > MINIMUM_COLORS ? <DeleteColor id={id} /> : null}
      </section>
    </section>
  )
}

export default ColorCard
