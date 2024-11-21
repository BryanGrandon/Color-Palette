// import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'
import { IoIosColorPalette } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { FaArrowsUpDown } from 'react-icons/fa6'
import CopyButton from './copy-button'

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

        <button>
          <FaArrowsUpDown />
        </button>

        <label htmlFor='color-s'>
          <IoIosColorPalette />
        </label>

        <button>
          <TfiReload />
        </button>
        <button>
          <IoClose />
        </button>
      </section>
    </section>
  )
}

export default ColorCard
