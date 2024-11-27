import CopyButton from './copy-button'
import IconButton from './icon-button'
// react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Icons
import { FaPalette } from 'react-icons/fa'
import { IoClose, IoReloadOutline } from 'react-icons/io5'
import { FaArrowsUpDown } from 'react-icons/fa6'
import { useContext } from 'react'
import { ColorPaletteContext } from '../../context/color-palette-context'

type Props = {
  id: number
  color: string
}

const ColorCard = ({ color, id }: Props): JSX.Element => {
  const { modify, colorLimit } = useContext(ColorPaletteContext)

  const notify = (text: string): void => {
    toast.success(text, {
      autoClose: 1500,
      theme: 'dark',
    })
  }

  return (
    <section className='color-card' style={{ background: color }}>
      <h2 className='color-card__title'>{color}</h2>
      <ToastContainer />
      <section className='color-card__options'>
        <CopyButton onClick={() => notify(`Color copied!`)} value={color} />
        <IconButton className='not-on-mobile' value={<FaPalette />} onClick={() => {}} />
        <IconButton className='not-on-mobile' value={<FaArrowsUpDown />} onClick={() => {}} />
        <IconButton value={<IoReloadOutline />} onClick={() => {}} />
        {colorLimit >= 3 ? (
          <IconButton
            value={<IoClose />}
            onClick={() => {
              modify.delete(id)
            }}
          />
        ) : null}
      </section>
    </section>
  )
}

export default ColorCard
