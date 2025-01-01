import { IColorPalette } from '../types/context'
import { randomColor } from '../core/script/random-color'

export const generateColorPalette = (limit: number = 1): IColorPalette[] => {
  const palette: IColorPalette[] = []

  for (let i = 1; i <= limit; i++) {
    palette.push({ id: i, hex: randomColor() })
  }

  return palette
}
