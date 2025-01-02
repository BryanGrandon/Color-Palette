import { Palette } from '../core/types/context'
import { randomColor } from '../core/script/random-color'

export const generateColorPalette = (limit: number = 1): Palette[] => {
  const palette: Palette[] = []

  for (let i = 1; i <= limit; i++) {
    palette.push({ id: i, hex: randomColor() })
  }

  return palette
}
