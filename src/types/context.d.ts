interface IColorPalette {
  id: number
  name: string
  color: string[]
}

type ColorPaletteType = {
  colorPalettes: IColorPalette[]
}

export { ColorPaletteType, IColorPalette }
