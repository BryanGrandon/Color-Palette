import CopyButton from './copy-button'
import IconButton from './icon-button'
// Icons
// import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { FaPalette } from 'react-icons/fa'
import { IoClose, IoReloadOutline } from 'react-icons/io5'
import { FaArrowsUpDown } from 'react-icons/fa6'

type Props = {
  color: string
}

const ColorCard = ({ color }: Props) => {
  console.log(color)
  return (
    <section className='color-card' style={{ background: color }}>
      <h2 className='color-card__title'>{color}</h2>
      <section className='color-card__options'>
        <CopyButton onClick={() => {}} />
        <IconButton value={<FaPalette />} onClick={() => {}} />
        <IconButton value={<FaArrowsUpDown />} onClick={() => {}} />
        <IconButton value={<IoReloadOutline />} onClick={() => {}} />
        <IconButton value={<IoClose />} onClick={() => {}} />
      </section>
    </section>
  )
}

export default ColorCard
