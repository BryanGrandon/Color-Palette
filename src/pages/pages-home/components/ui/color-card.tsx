import { useContext } from 'react'
import { ColorPaletteContext } from '../../../../core/context/color-palette-context'
import IconsButtons from '../../../../core/components/ui/icons-buttons'
// Icons
import { FaPalette, FaExpandArrowsAlt } from 'react-icons/fa'
import { IoClose, IoReloadOutline, IoCopyOutline, IoCopy } from 'react-icons/io5'
import { IoIosClose } from 'react-icons/io'
import { FaArrowsUpDown } from 'react-icons/fa6'
import { TbArrowsRandom } from 'react-icons/tb'
import { MINIMUM_COLORS } from '../../../../core/constants'
import { deleteColor } from '../../script/delete-color'
import { changeColor } from '../../script/change-color'
import { shadesColor } from '../../script/shades-color'

type Props = {
  id: number
  color: string
}

const ColorCard = ({ color, id }: Props): JSX.Element => {
  const { options, notify } = useContext(ColorPaletteContext)
  const { limit, palette } = options.get

  const handlerClickDelete = (id: number): void => {
    const data = deleteColor({ colorId: id, limit, palette })
    options.update?.limit(data.limit)
    options.update?.palette(data.palette)
  }

  const handlerClickCopy = (): void => {
    notify(`Color copied!`)
    navigator.clipboard.writeText(color)
  }

  const handlerChangeColor = (e: React.FormEvent): void => {
    const color = (e.target as HTMLTextAreaElement).value
    const data = changeColor({ colorId: id, color, palette })
    options.update?.palette(data)
  }

  const handlerClickShades = (color: string, id: number): void => {
    const data = shadesColor({ color, colorId: id, palette })
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

        <IconsButtons
          className='not-on-mobile'
          selected={<FaExpandArrowsAlt />}
          deselected={<FaArrowsUpDown />}
          onClick={() => handlerClickShades(color, id)}
        />
        <IconsButtons
          selected={<TbArrowsRandom />}
          deselected={<IoReloadOutline />}
          onClick={() => handlerClickRandomColor('')}
        />
        {limit > MINIMUM_COLORS ? (
          <IconsButtons selected={<IoIosClose />} deselected={<IoClose />} onClick={() => handlerClickDelete(id)} />
        ) : null}
      </section>
    </section>
  )
}

export default ColorCard
