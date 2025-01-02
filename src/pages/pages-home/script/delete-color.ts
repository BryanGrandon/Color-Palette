import { MAXIMUM_COLORS, MINIMUM_COLORS } from '../../../core/constants'
import { DeleteColor } from '../types/options'

export const deleteColor = ({ limit, palette, colorId }: DeleteColor) => {
  if (limit <= MAXIMUM_COLORS && limit > MINIMUM_COLORS) {
    const output = {
      limit: limit - 1,
      palette: palette.filter((e) => e.id !== colorId),
    }
    for (let i = 0; i < output.palette.length; i++) output.palette[i].id = i + 1
    return output
  } else return { limit, palette }
}
