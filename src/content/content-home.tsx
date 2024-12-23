import { IoIosAddCircleOutline } from 'react-icons/io'
import { IoBookmarkOutline, IoReloadOutline, IoCopyOutline, IoClose } from 'react-icons/io5'
import { FaPalette } from 'react-icons/fa'
import { FaArrowsUpDown } from 'react-icons/fa6'

const contentHome = {
  main: [
    {
      id: 1,
      icon: <IoReloadOutline />,
      text: 'Allows to generate random colors.',
    },
    {
      id: 2,
      icon: <IoIosAddCircleOutline />,
      text: 'Allows you to add one more color.',
    },
    {
      id: 3,
      icon: <IoBookmarkOutline />,
      text: 'Allows you to save the color palette.',
    },
  ],
  card: [
    {
      id: 1,
      icon: <IoCopyOutline />,
      text: 'Allows copying color in hexadecimal format.',
    },
    {
      id: 2,
      icon: <FaPalette />,
      text: 'Allows the user to select the desired color.',
    },
    {
      id: 3,
      icon: <FaArrowsUpDown />,
      text: 'Allows you to select the color in different shades.',
    },
    {
      id: 4,
      icon: <IoReloadOutline />,
      text: 'Allows to generate a random color.',
    },
    {
      id: 5,
      icon: <IoClose />,
      text: 'Allows to remove the color.',
    },
  ],
}

export { contentHome }
