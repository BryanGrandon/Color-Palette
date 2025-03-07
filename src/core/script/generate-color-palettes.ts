import { Saved } from '../types/context'
import { randomColor } from './random-color'

const generateColorPalettes = (colorsNumbers: number = 2): Saved[] => {
  const palettes = []
  for (let i = 0; i < 20; i++) {
    const newColors: Saved = {
      id: i,
      palette: [],
    }
    for (let j = 1; j <= colorsNumbers; j++) newColors.palette.push({ id: j, hex: randomColor() })
    palettes.push(newColors)
  }
  return palettes
}

export { generateColorPalettes }
