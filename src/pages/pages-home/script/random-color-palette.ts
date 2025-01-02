import { randomColor } from '../../../core/script/random-color'
import { ReturnPalette } from '../types/options'

export const randomColorPalette = (palette: ReturnPalette): ReturnPalette => {
  let output: ReturnPalette = []
  palette.map((e) => {
    e.hex = randomColor()
    output = [...palette]
  })
  return output
}
