import React, { useState } from 'react'
import { ColorPaletteContext } from './color-palette-context'
import { IColorPalette, TheModal, Saved } from '../types/context'
import { generateColorPalette } from '../functions/generate-color-palette'
import { randomColor } from '../functions/random-color'
// react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ModalShades } from '../components/layout/modal-shades'

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

  const theModal: TheModal = {
    isOpen: openModal,
    content: modalContent,
    modify: () => setOpenModal(!openModal),
  }

  const modify = {
    add: () => {
      if (colorLimit < 9) {
        setColorLimit(colorLimit + 1)
        setColorPalette([...colorPalette, { id: colorLimit + 1, hex: randomColor() }])
      }
    },
    delete: (id: number) => {
      if (colorLimit <= 9 && colorLimit >= 3) {
        setColorLimit(colorLimit - 1)
        const colors = colorPalette.filter((e) => e.id !== id)
        colors.map((e, i) => (e.id = i + 1))
        setColorPalette(colors)
      }
    },
    change: (id: number, color: string) => {
      const regularExpressions = (regexp: RegExp, testText: string) => {
        return regexp.test(testText) ? true : false
      }
      const conditional = regularExpressions(/^#[A-Fa-f0-9]{6}$/, color) || regularExpressions(/^#[A-Fa-f0-9]{3}$/, color)
      colorPalette.map((e) => {
        if (e.id === id) {
          if (conditional) e.hex = color
          else e.hex = randomColor()
          setColorPalette([...colorPalette])
        }
      })
    },
    shades: (color: string, id: number) => {
      const handlerClickModalShades = (color: string) => {
        colorPalette.map((e) => {
          if (e.id === id) {
            e.hex = color
            setColorPalette([...colorPalette])
          }
        })
        setOpenModal(false)
      }
      setModalContent(<ModalShades color={color} onClick={handlerClickModalShades} />)
      setOpenModal(true)
    },
    random: () => {
      colorPalette.map((e) => {
        e.hex = randomColor()
        setColorPalette([...colorPalette])
      })
    },
    saved: () => {
      console.log(colorPalette)
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
    },
  }
  console.log(savedPalette)

  const notify = (text: string): void => {
    toast.success(text, {
      autoClose: 1500,
      theme: 'dark',
    })
  }

  return (
    <ColorPaletteContext.Provider value={{ colorPalette, colorLimit, modify, notify, theModal }}>
      <ToastContainer />
      {children}
    </ColorPaletteContext.Provider>
  )
}

export { ColorPaletteProvider }
