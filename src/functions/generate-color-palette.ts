import { IColorPalette } from '../types/context'
import { randomColor } from './random-color'

export const generateColorPalette = (limit: number): IColorPalette[] => {
  const palette: IColorPalette[] = []

  for (let i = 1; i <= limit; i++) {
    const color = {
      id: i,
      hex: randomColor(),
    }
    palette.push(color)
  }

  return palette
}
