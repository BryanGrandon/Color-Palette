export interface IColorPalette {
  id: number
  hex: string
}

export type ColorPaletteType = {
  colorLimit: number
  colorPalette: IColorPalette[]
}
