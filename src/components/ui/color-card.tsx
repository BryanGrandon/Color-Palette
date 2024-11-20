import { IoCopyOutline, IoCopy } from 'react-icons/io5'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'
import { IoIosColorPalette } from 'react-icons/io'

type Props = {
  color: string
}

const ColorCard = ({ color }: Props) => {
  console.log(color)
  return (
    <section className='color-card' style={{ background: color }}>
      <h2>{color}</h2>
      <section>
        <button>
          <IoCopy />
          <IoCopyOutline />
        </button>
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
