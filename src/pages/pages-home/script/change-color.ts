import { randomColor } from '../../../core/script/random-color'
import { Palette } from '../../../core/types/context'

type Change_Color = {
  colorId: number
  color?: string
  isRandom: boolean
  palette: Palette[]
}

export const changeColor = ({ colorId, color = '', palette, isRandom }: Change_Color): Palette[] => {
  const regex = /^#[A-Fa-f0-9]{6}$/.test(color) || /^#[A-Fa-f0-9]{3}$/.test(color)
  let output: Palette[] = []
  palette.map((e) => {
    if (e.id === colorId) {
      if (isRandom) e.hex = randomColor()
      if (regex) e.hex = color
      output = [...palette]
    }
  })
  return output
}
