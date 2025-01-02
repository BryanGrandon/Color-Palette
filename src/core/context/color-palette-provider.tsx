import { useState } from 'react'
import { TheModal, Saved, Palette } from '../types/context'
import { generateColorPalette } from '../../functions/generate-color-palette'
import { ModalShades } from '../../pages/pages-home/components/layout/modal-shades'
import { changeColor } from '../../pages/pages-home/script/change-color'
import { shadesColor } from '../../pages/pages-home/script/shades-color'
import { deleteColor } from '../../pages/pages-home/script/delete-color'
import { savedColorPalette } from '../../pages/pages-home/script/saved-color-palette'
// react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ColorPaletteContext } from './color-palette-context'

type ProviderProps = {
  children: React.ReactNode
}

const ColorPaletteProvider = ({ children }: ProviderProps) => {
  const [colorLimit, setColorLimit] = useState(5)
  const [colorPalette, setColorPalette] = useState<Palette[]>(generateColorPalette(colorLimit))
  const [savedPalette, setSavedPalette] = useState<Saved[]>([])

  // Modal
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>)

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

  const modify = {
    add: () => {},
    delete: (id: number) => {
      const data = deleteColor({ colorId: id, limit: colorLimit, palette: colorPalette })
      setColorLimit(data.limit)
      setColorPalette(data.palette)
    },
    change: (id: number, color: string) => {
      const data = changeColor({ colorId: id, color, palette: colorPalette })
      setColorPalette(data)
    },
    shades: (color: string, id: number) => {
      const handlerClickModalShades = (color: string) => {
        const data = shadesColor({ color, colorId: id, palette: colorPalette })
        setColorPalette(data)
        setOpenModal(false)
      }
      setModalContent(<ModalShades color={color} onClick={handlerClickModalShades} />)
      setOpenModal(true)
    },
    random: () => {},
    saved: () => {
      const data = savedColorPalette({ palette: colorPalette, saved: savedPalette })
      setSavedPalette(data.newSaved)
    },
  }

  const notify = (text: string): void => {
    toast.success(text, {
      autoClose: 1500,
      theme: 'dark',
    })
  }

  return (
    <ColorPaletteContext.Provider value={{ options, modify, notify, theModal }}>
      <ToastContainer />
      {children}
    </ColorPaletteContext.Provider>
  )
}

export { ColorPaletteProvider }
