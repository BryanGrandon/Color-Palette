import { useContext } from 'react'
import { ColorPaletteContext } from '../core/context/color-palette-context'

export const useHookContext = () => {
  return useContext(ColorPaletteContext)
}
