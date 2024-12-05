import { useContext } from 'react'
import { ColorPaletteContext } from '../../context/color-palette-context'
import CopyButton from './copy-button'
import IconButton from './icon-button'
// Icons
import { FaPalette } from 'react-icons/fa'
import { IoClose, IoReloadOutline } from 'react-icons/io5'
import { FaArrowsUpDown } from 'react-icons/fa6'

type Props = {
  id: number
  color: string
}

const ColorCard = ({ color, id }: Props): JSX.Element => {
  const { modify, colorLimit, notify } = useContext(ColorPaletteContext)

  return (
    <section className='color-card' style={{ background: color }}>
      <h2 className='color-card__title'>{color}</h2>
      <section className='color-card__options'>
        <CopyButton onClick={() => notify(`Color copied!`)} value={color} />
        <IconButton className='not-on-mobile' value={<FaPalette />} onClick={() => {}} />
        <IconButton className='not-on-mobile' value={<FaArrowsUpDown />} onClick={() => modify.shades(color, id)} />
        <IconButton value={<IoReloadOutline />} onClick={() => modify.change(id)} />
        {colorLimit >= 3 ? <IconButton value={<IoClose />} onClick={() => modify.delete(id)} /> : null}
      </section>
    </section>
  )
}

export default ColorCard
