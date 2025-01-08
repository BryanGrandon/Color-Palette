import { MAXIMUM_COLORS } from '../../../core/constants'
import { randomColor } from '../../../core/script/random-color'
import { AddColor } from '../types/website features'

export const addColor = ({ limit, palette }: AddColor) => {
  if (limit < MAXIMUM_COLORS) {
    const output = {
      limit: limit + 1,
      palette: [...palette, { id: limit + 1, hex: randomColor() }],
    }
    return output
  } else return { limit, palette }
}
