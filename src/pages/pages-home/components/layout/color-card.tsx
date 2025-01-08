import { useContext } from 'react'
import { ColorPaletteContext } from '../../../../core/context/color-palette-context'
import IconsButtons from '../../../../core/components/ui/icons-buttons'
// Icons
import { FaPalette, FaExpandArrowsAlt } from 'react-icons/fa'
import { IoReloadOutline, IoCopyOutline, IoCopy } from 'react-icons/io5'
import { FaArrowsUpDown } from 'react-icons/fa6'
import { TbArrowsRandom } from 'react-icons/tb'
import { MINIMUM_COLORS } from '../../../../core/constants'
import { changeColor } from '../../script/change-color'
import { shadesColor } from '../../script/shades-color'
import { ModalShades } from './modal-shades'
import DeleteColor from '../ui/delete-color'

type Props = {
  id: number
  color: string
}

const ColorCard = ({ color, id }: Props): JSX.Element => {
  const { options, notify, theModal } = useContext(ColorPaletteContext)
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

  const handlerClickShades = (color: string) => {
    const handlerModal = (color: string): void => {
      const data = shadesColor({ color, colorId: id, palette })
      options.update?.palette(data)
      theModal.modify.open(false)
    }
    theModal.modify.content(<ModalShades color={color} onClick={handlerModal} />)
    theModal.modify.open(true)
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
          onClick={() => handlerClickShades(color)}
        />
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
