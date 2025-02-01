import { Saved } from '../types/context'
import { randomColor } from './random-color'

type generate_Colors_Palettes = {
  colorsNumbers: number
}

const generateColorPalettes = ({ colorsNumbers }: generate_Colors_Palettes): Saved[] => {
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
