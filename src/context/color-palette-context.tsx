import React from 'react'
import { ColorPaletteType } from '../types/context'

const ColorPaletteContext = React.createContext<ColorPaletteType>({} as ColorPaletteType)

export { ColorPaletteContext }
