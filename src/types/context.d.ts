export interface IColorPalette {
  id: number
  hex: string
}

type Modify = {
  add: () => void
  delete: (id: number) => void
}

export type ColorPaletteType = {
  colorLimit: number
  colorPalette: IColorPalette[]
  modify: Modify
}
