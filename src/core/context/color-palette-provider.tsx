import { useState } from 'react'
import { ColorPaletteContext } from './color-palette-context'
import { TheModal, Saved, Palette } from '../types/context'
import { generateColorPalette } from '../../functions/generate-color-palette'
// react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ProviderProps = {
  children: React.ReactNode
}

const ColorPaletteProvider = ({ children }: ProviderProps) => {
  const [colorLimit, setColorLimit] = useState(5)
  const [colorPalette, setColorPalette] = useState<Palette[]>(generateColorPalette(colorLimit))
  const [savedPalette, setSavedPalette] = useState<Saved[]>([])

  // Modal
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [modalContent] = useState<JSX.Element>(<></>)

  const theModal: TheModal = {
    isOpen: openModal,
    content: modalContent,
    modify: () => setOpenModal(!openModal),
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
