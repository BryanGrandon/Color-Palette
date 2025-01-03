import { Palette } from '../../../core/types/context'
import { ShadesColor } from '../types/options'

export const shadesColor = ({ color, colorId, palette }: ShadesColor): Palette[] => {
  let output: Palette[] = []
  palette.map((e) => {
    if (e.id === colorId) {
      e.hex = color
      output = [...palette]
    }
  })
  return output
}
