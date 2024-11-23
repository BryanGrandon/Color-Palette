import CopyButton from './copy-button'
import IconButton from './icon-button'
// react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Icons
import { FaPalette } from 'react-icons/fa'
import { IoClose, IoReloadOutline } from 'react-icons/io5'
import { FaArrowsUpDown } from 'react-icons/fa6'

type Props = {
  color: string
}

const ColorCard = ({ color }: Props): JSX.Element => {
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
        <IconButton value={<IoClose />} onClick={() => {}} />
      </section>
    </section>
  )
}

export default ColorCard
