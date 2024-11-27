import React, { useState } from 'react'
import { ColorPaletteContext } from './color-palette-context'
import { IColorPalette } from '../types/context'
import { generateColorPalette } from '../functions/generate-color-palette'
import { randomColor } from '../functions/random-color'

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
        const newColor = {
          id: colorLimit + 1,
          hex: randomColor(),
        }
        setColorPalette([...colorPalette, newColor])
      }
    },

    delete: (id: number) => {
      if (colorLimit <= 9 && colorLimit >= 3) {
        setColorLimit(colorLimit - 1)
        const colors = colorPalette.filter((e) => e.id !== id)
        colors.map((e, i) => (e.id = i + 1))
        console.log(colors)
        setColorPalette(colors)
      }
    },
  }

  return (
    <ColorPaletteContext.Provider value={{ colorPalette, colorLimit, modify }}>{children}</ColorPaletteContext.Provider>
  )
}

export { ColorPaletteProvider }
