import { useContext } from 'react'
import { ColorPaletteContext } from '../../context/color-palette-context'
import IconsButtons from './icons-buttons'
// Icons
import { FaPalette, FaExpandArrowsAlt } from 'react-icons/fa'
import { IoClose, IoReloadOutline, IoCopyOutline, IoCopy } from 'react-icons/io5'
import { IoIosClose } from 'react-icons/io'
import { FaArrowsUpDown } from 'react-icons/fa6'
import { TbArrowsRandom } from 'react-icons/tb'

type Props = {
  id: number
  color: string
}

const ColorCard = ({ color, id }: Props): JSX.Element => {
  const { modify, colorLimit, notify } = useContext(ColorPaletteContext)

  const handlerClickCopy = (): void => {
    notify(`Color copied!`)
    navigator.clipboard.writeText(color)
  }

  return (
    <section className='color-card' style={{ background: color }}>
      <h2 className='color-card__title'>{color}</h2>
      <section className='color-card__options'>
        <IconsButtons selected={<IoCopy />} deselected={<IoCopyOutline />} onClick={handlerClickCopy} />
        <label
          className='not-on-mobile'
          onClick={(e) => ((e.target as HTMLTextAreaElement).value = color)}
          onChange={(e) => modify.change(id, (e.target as HTMLTextAreaElement).value)}
        >
          <FaPalette />
          <input type='color' className='color-card__input' />
        </label>

        <IconsButtons
          className='not-on-mobile'
          selected={<FaExpandArrowsAlt />}
          deselected={<FaArrowsUpDown />}
          onClick={() => modify.shades(color, id)}
        />
        <IconsButtons selected={<TbArrowsRandom />} deselected={<IoReloadOutline />} onClick={() => modify.change(id, '')} />
        {colorLimit >= 3 ? (
          <IconsButtons selected={<IoIosClose />} deselected={<IoClose />} onClick={() => modify.delete(id)} />
        ) : null}
      </section>
    </section>
  )
}

export default ColorCard
