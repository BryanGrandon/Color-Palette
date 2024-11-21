import CopyButton from './copy-button'
import IconButton from './icon-button'
// react-toastify
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Icons
// import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { FaPalette } from 'react-icons/fa'
import { IoClose, IoReloadOutline } from 'react-icons/io5'
import { FaArrowsUpDown } from 'react-icons/fa6'

type Props = {
  color: string
}

const ColorCard = ({ color }: Props) => {
  const notify = (text: string) => {
    toast.success(text, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    })
  }

  const handlerClickCopy = () => {
    notify(`Color copied!`)
    navigator.clipboard.writeText(color)
  }

  return (
    <section className='color-card' style={{ background: color }}>
      <h2 className='color-card__title'>{color}</h2>
      <section className='color-card__options'>
        <CopyButton onClick={handlerClickCopy} />
        <IconButton value={<FaPalette />} onClick={() => {}} />
        <IconButton value={<FaArrowsUpDown />} onClick={() => {}} />
        <IconButton value={<IoReloadOutline />} onClick={() => {}} />
        <IconButton value={<IoClose />} onClick={() => {}} />
      </section>
      <ToastContainer />
    </section>
  )
}

export default ColorCard
