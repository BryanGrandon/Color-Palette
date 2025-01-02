interface Palette {
  id: number
  hex: string
}

export type ReturnPalette = Palette[]

export type AddColor = {
  limit: number
  palette: Palette[]
}

export type DeleteColor = {
  colorId: number
  limit: number
  palette: Palette[]
}

export type ChangeColor = {
  colorId: number
  color: string
  palette: Palette[]
}

type ShadesColor = {
  colorId: number
  color: string
  palette: Palette[]
}
