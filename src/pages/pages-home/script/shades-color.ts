import { ShadesColor, ReturnPalette } from '../types/options'

export const shadesColor = ({ color, colorId, palette }: ShadesColor): ReturnPalette => {
  let output: ReturnPalette = []
  palette.map((e) => {
    if (e.id === colorId) {
      e.hex = color
      output = [...palette]
    }
  })
  return output
}
