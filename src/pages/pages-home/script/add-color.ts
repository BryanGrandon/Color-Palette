import { MAXIMUM_COLORS } from '../../../core/constants'
import { randomColor } from '../../../core/script/random-color'

type AddColor = {
  limit: number
  palette: [{ id: number; hex: string }]
}

export const addColor = ({ limit, palette }: AddColor) => {
  if (limit < MAXIMUM_COLORS) {
    const output = {
      limit: limit + 1,
      palette: [...palette, { id: limit + 1, hex: randomColor() }],
    }
    return output
  }
}
