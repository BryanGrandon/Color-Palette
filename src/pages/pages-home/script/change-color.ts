import { randomColor } from '../../../core/script/random-color'
import { ChangeColor, ReturnPalette } from '../types/options'

export const changeColor = ({ colorId, color, palette }: ChangeColor): ReturnPalette => {
  const regex = /^#[A-Fa-f0-9]{6}$/.test(color) || /^#[A-Fa-f0-9]{3}$/.test(color)
  let output: ReturnPalette = []
  palette.map((e) => {
    if (e.id === colorId) {
      if (regex) e.hex = color
      else e.hex = randomColor()
      output = [...palette]
    }
  })
  return output
}
