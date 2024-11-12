import React, { useState } from 'react'
import { ColorPaletteContext } from './color-palette-context'
import { IColorPalette } from '../types/context'

type ProviderProps = {
  children: React.ReactNode
}

const ColorPaletteProvider = ({ children }: ProviderProps) => {
  const [colorPalettes] = useState<IColorPalette[]>([{ id: 1, name: 'Color Palette 1', color: ['#f00'] }])

  return <ColorPaletteContext.Provider value={{ colorPalettes }}>{children}</ColorPaletteContext.Provider>
}

export { ColorPaletteProvider }
