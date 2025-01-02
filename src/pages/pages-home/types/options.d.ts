interface Palette {
  id: number
  hex: string
}

interface Saved {
  id: number
  palette: Palette[]
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

export type SavedColorPalette = {
  palette: Palette[]
  saved: Saved[]
}

export type ShadesColor = {
  colorId: number
  color: string
  palette: Palette[]
}
