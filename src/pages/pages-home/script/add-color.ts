import { MAXIMUM_COLORS } from '../../../core/constants'
import { randomColor } from '../../../core/script/random-color'
import { Palette } from '../../../core/types/context'

type Add_Color = {
  limit: number
  palette: Palette[]
}

export const addColor = ({ limit, palette }: Add_Color) => {
  if (limit < MAXIMUM_COLORS) {
    const output = {
      limit: limit + 1,
      palette: [...palette, { id: limit + 1, hex: randomColor() }],
    }
    return output
  } else return { limit, palette }
}
