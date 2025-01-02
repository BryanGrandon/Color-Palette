import React, { useState } from 'react'
import { ColorPaletteContext } from './color-palette-context'
import { IColorPalette, TheModal, Saved } from '../types/context'
import { generateColorPalette } from '../functions/generate-color-palette'
import { ModalShades } from '../components/layout/modal-shades'
import { addColor } from '../pages/pages-home/script/add-color'
import { changeColor } from '../pages/pages-home/script/change-color'
import { shadesColor } from '../pages/pages-home/script/shades-color'
import { deleteColor } from '../pages/pages-home/script/delete-color'
import { randomColorPalette } from '../pages/pages-home/script/random-color-palette'
// react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ProviderProps = {
  children: React.ReactNode
}

const ColorPaletteProvider = ({ children }: ProviderProps) => {
  const [colorLimit, setColorLimit] = useState(5)
  const [colorPalette, setColorPalette] = useState<IColorPalette[]>(generateColorPalette(colorLimit))
  const [savedPalette, setSavedPalette] = useState<Saved[]>([])

  // Modal
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>)
  const [markedAsSaved, setMarkedAsSaved] = useState<boolean>(false)

  const theModal: TheModal = {
    isOpen: openModal,
    content: modalContent,
    modify: () => setOpenModal(!openModal),
  }

  const modifySaved = (): void => {
    const verification = checkSaved()
    setMarkedAsSaved(!markedAsSaved)

    if (!verification) {
      const palette: IColorPalette[] = []
      colorPalette.map((e) => {
        const newColor = {
          id: e.id,
          hex: e.hex,
        }
        palette.push(newColor)
      })
      const newPalette = {
        id: savedPalette.length + 1,
        color: palette,
      }
      setSavedPalette([newPalette, ...savedPalette])
    }
  }

  const modify = {
    add: () => {
      const data = addColor({ limit: colorLimit, palette: colorPalette })
      setColorLimit(data.limit)
      setColorPalette(data.palette)
      setMarkedAsSaved(false)
    },
    delete: (id: number) => {
      const data = deleteColor({ colorId: id, limit: colorLimit, palette: colorPalette })
      setColorLimit(data.limit)
      setColorPalette(data.palette)
      setMarkedAsSaved(false)
    },
    change: (id: number, color: string) => {
      const data = changeColor({ colorId: id, color, palette: colorPalette })
      setColorPalette(data)
      setMarkedAsSaved(false)
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
    random: () => {
      const data = randomColorPalette(colorPalette)
      setColorPalette(data)
      setMarkedAsSaved(false)
    },
    saved: () => {
      modifySaved()
    },
  }

  const checkSaved = () => {
    let output: boolean = false
    let count = 0

    savedPalette.map((e) => {
      const id = e.id
      const array: string[] = []
      colorPalette.map((e) => array.push(e.hex))

      for (let i = 0; i < array.length; i++) {
        const color = e.color[i]
        if (array.includes(color?.hex)) count += 1
        else break
      }
      if (count === array.length) {
        output = true
        const result = savedPalette.filter((e) => e.id !== id)
        for (let i = 0; i < result.length; i++) result[i].id = i
        setSavedPalette([...savedPalette, ...result])
      }
    })
    return output
  }

  const notify = (text: string): void => {
    toast.success(text, {
      autoClose: 1500,
      theme: 'dark',
    })
  }

  return (
    <ColorPaletteContext.Provider value={{ savedPalette, markedAsSaved, colorPalette, colorLimit, modify, notify, theModal }}>
      <ToastContainer />
      {children}
    </ColorPaletteContext.Provider>
  )
}

export { ColorPaletteProvider }
