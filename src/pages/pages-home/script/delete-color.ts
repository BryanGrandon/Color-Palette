import { MAXIMUM_COLORS, MINIMUM_COLORS } from '../../../core/constants'
import { Palette } from '../../../core/types/context'

type Remove_Color = {
  colorId: number
  limit: number
  palette: Palette[]
}

export const removeColor = ({ limit, palette, colorId }: Remove_Color) => {
  if (limit <= MAXIMUM_COLORS && limit > MINIMUM_COLORS) {
    const output = {
      limit: limit - 1,
      palette: palette.filter((e) => e.id !== colorId),
    }
    for (let i = 0; i < output.palette.length; i++) output.palette[i].id = i + 1
    return output
  } else return { limit, palette }
}
