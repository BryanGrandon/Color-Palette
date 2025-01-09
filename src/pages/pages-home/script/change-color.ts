import { randomColor } from '../../../core/script/random-color'
import { Palette } from '../../../core/types/context'
import { ChangeColor } from '../types/website features'

export const changeColor = ({ colorId, color, palette }: ChangeColor): Palette[] => {
  if (typeof color === 'undefined') color = ''
  const regex = /^#[A-Fa-f0-9]{6}$/.test(color) || /^#[A-Fa-f0-9]{3}$/.test(color)
  let output: Palette[] = []
  palette.map((e) => {
    if (e.id === colorId) {
      if (regex) e.hex = color
      else e.hex = randomColor()
      output = [...palette]
    }
  })
  return output
}
