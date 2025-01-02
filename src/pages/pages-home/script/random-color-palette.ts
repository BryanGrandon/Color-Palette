import { randomColor } from '../../../core/script/random-color'
import { Palette } from '../../../core/types/context'

export const randomColorPalette = (palette: Palette[]): Palette[] => {
  let output: Palette[] = []
  palette.map((e) => {
    e.hex = randomColor()
    output = [...palette]
  })
  return output
}
