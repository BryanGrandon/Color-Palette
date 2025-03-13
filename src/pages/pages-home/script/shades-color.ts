import { Palette } from '../../../core/types/context'

type Shades_Color = {
  colorId: number
  color: string
  palette: Palette[]
}

export const shadesColor = ({ color, colorId, palette }: Shades_Color): Palette[] => {
  let output: Palette[] = []
  palette.map((e) => {
    if (e.id === colorId) {
      e.hex = color
      output = [...palette]
    }
  })
  return output
}
