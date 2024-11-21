import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'
import { IoIosColorPalette } from 'react-icons/io'
import CopyButton from './copy-button'

type Props = {
  color: string
}

const ColorCard = ({ color }: Props) => {
  console.log(color)
  return (
    <section className='color-card' style={{ background: color }}>
      <h2>{color}</h2>
      <section>
        <CopyButton onClick={() => {}} />
        <button>
          <FaBookmark />
          <FaRegBookmark />
        </button>

        <label htmlFor='color-s'>
          <IoIosColorPalette />
        </label>

        <button>
          <TfiReload />
        </button>
      </section>
    </section>
  )
}

export default ColorCard
