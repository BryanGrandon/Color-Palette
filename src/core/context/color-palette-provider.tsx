import { useState } from 'react'
import { ColorPaletteContext } from './color-palette-context'
import { TheModal, Saved, Palette } from '../types/context'
// react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { randomColor } from '../script/random-color'
import { generateColorPalettes } from '../script/generate-color-palettes'

type ProviderProps = {
  children: React.ReactNode
}

const generateColors = (limit: number = 1) => {
  const palette: Palette[] = []
  for (let i = 1; i <= limit; i++) palette.push({ id: i, hex: randomColor() })
  return palette
}

const ColorPaletteProvider = ({ children }: ProviderProps) => {
  const [colorLimit, setColorLimit] = useState(5)
  const [colorPalette, setColorPalette] = useState<Palette[]>(generateColors(colorLimit))
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

  const [generatePalettes, setGeneratePalettes] = useState<Saved[]>(generateColorPalettes({ colorsNumbers: 5 }))

  const updateColorPalette = (colorsNumbers: number, isRandom: boolean) => {
    const newColorPalettes = generateColorPalettes({ colorsNumbers })
    if (isRandom) setGeneratePalettes(newColorPalettes)
    else setGeneratePalettes([...generatePalettes, ...newColorPalettes])
  }

  const options = {
    get: {
      limit: colorLimit,
      palette: colorPalette,
      saved: savedPalette,
      colorPalettes: generatePalettes,
    },
    update: {
      limit: (number: number) => setColorLimit(number),
      palette: (palette: Palette[]) => setColorPalette(palette),
      saved: (saved: Saved[]) => setSavedPalette(saved),
      colorPalettes: (colorsNumbers: number, isRandom: boolean) => updateColorPalette(colorsNumbers, isRandom),
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
