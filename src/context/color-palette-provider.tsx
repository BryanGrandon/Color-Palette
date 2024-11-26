import React, { useEffect, useState } from 'react'
import { ColorPaletteContext } from './color-palette-context'
import { IColorPalette } from '../types/context'
import { generateColorPalette } from '../functions/generate-color-palette'

type ProviderProps = {
  children: React.ReactNode
}

const ColorPaletteProvider = ({ children }: ProviderProps) => {
  const [colorPalette, setColorPalette] = useState<IColorPalette[]>([{ id: 1, hex: '#f00' }])
  const [colorLimit] = useState(5)

  useEffect(() => {
    setColorPalette(generateColorPalette(colorLimit))
  }, [colorLimit])

  return <ColorPaletteContext.Provider value={{ colorPalette, colorLimit }}>{children}</ColorPaletteContext.Provider>
}

export { ColorPaletteProvider }
