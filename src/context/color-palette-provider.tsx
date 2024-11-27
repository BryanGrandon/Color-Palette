import React, { useState } from 'react'
import { ColorPaletteContext } from './color-palette-context'
import { IColorPalette } from '../types/context'
import { generateColorPalette } from '../functions/generate-color-palette'
import { randomColor } from '../functions/random-color'
// react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ProviderProps = {
  children: React.ReactNode
}

const ColorPaletteProvider = ({ children }: ProviderProps) => {
  const [colorLimit, setColorLimit] = useState(5)
  const [colorPalette, setColorPalette] = useState<IColorPalette[]>(generateColorPalette(colorLimit))

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
    change: (id: number) => {
      colorPalette.map((e) => {
        if (e.id === id) {
          e.hex = randomColor()
          setColorPalette([...colorPalette])
        }
      })
    },
  }

  const notify = (text: string): void => {
    toast.success(text, {
      autoClose: 1500,
      theme: 'dark',
    })
  }

  return (
    <ColorPaletteContext.Provider value={{ colorPalette, colorLimit, modify, notify }}>
      <ToastContainer />
      {children}
    </ColorPaletteContext.Provider>
  )
}

export { ColorPaletteProvider }
