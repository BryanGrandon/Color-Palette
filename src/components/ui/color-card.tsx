import { useContext } from 'react'
import { ColorPaletteContext } from '../../context/color-palette-context'
import IconButton from './icon-button'
// Icons
import { FaPalette } from 'react-icons/fa'
import { IoClose, IoReloadOutline } from 'react-icons/io5'
import { FaArrowsUpDown } from 'react-icons/fa6'
import { IoCopyOutline, IoCopy } from 'react-icons/io5'
import IconsButtons from './icons-buttons'

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
        <IconButton className='not-on-mobile' value={<FaPalette />} onClick={() => {}} />
        <IconButton className='not-on-mobile' value={<FaArrowsUpDown />} onClick={() => modify.shades(color, id)} />
        <IconButton value={<IoReloadOutline />} onClick={() => modify.change(id)} />
        {colorLimit >= 3 ? <IconButton value={<IoClose />} onClick={() => modify.delete(id)} /> : null}
      </section>
    </section>
  )
}

export default ColorCard
