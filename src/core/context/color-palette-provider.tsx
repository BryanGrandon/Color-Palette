import { useState } from 'react'
import { ColorPaletteContext } from './color-palette-context'
import { TheModal, Saved, Palette } from '../types/context'
// react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { randomColor } from '../script/random-color'

type ProviderProps = {
  children: React.ReactNode
}

const generateColorPalette = (limit: number = 1) => {
  const palette: Palette[] = []
  for (let i = 1; i <= limit; i++) palette.push({ id: i, hex: randomColor() })
  return palette
}

const ColorPaletteProvider = ({ children }: ProviderProps) => {
  const [colorLimit, setColorLimit] = useState(5)
  const [colorPalette, setColorPalette] = useState<Palette[]>(generateColorPalette(colorLimit))
  const [savedPalette, setSavedPalette] = useState<Saved[]>([])

  // Modal
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>)

  const theModal: TheModal = {
    get: {
      open: openModal,
      content: modalContent,
    },
    modify: {
      open: (boolean) => setOpenModal(boolean),
      content: (content) => setModalContent(content),
    },
  }

  const options = {
    get: {
      limit: colorLimit,
      palette: colorPalette,
      saved: savedPalette,
    },
    update: {
      limit: (number: number) => setColorLimit(number),
      palette: (palette: Palette[]) => setColorPalette(palette),
      saved: (saved: Saved[]) => setSavedPalette(saved),
    },
  }

  const notify = (text: string): void => {
    toast.success(text, {
      autoClose: 1500,
      theme: 'dark',
    })
  }

  return (
    <ColorPaletteContext.Provider value={{ options, notify, theModal }}>
      <ToastContainer />
      {children}
    </ColorPaletteContext.Provider>
  )
}

export { ColorPaletteProvider }
