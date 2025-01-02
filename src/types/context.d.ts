export interface IColorPalette {
  id: number
  hex: string
}

type Modify = {
  add: () => void
  delete: (id: number) => void
  change: (id: number, color: string) => void
  shades: (color: string, id: number) => void
  random: () => void
  saved: () => void
}

export type TheModal = {
  isOpen: boolean
  content: JSX.Element
  modify: () => void
}

export type Saved = {
  id: number
  palette: IColorPalette[]
}

type Options = {
  get: {
    limit: number
    palette: IColorPalette[]
    saved: Saved[]
  }
  update: {
    limit: (number: number) => void
    palette: (palette: IColorPalette[]) => void
    saved: (saved: Saved[]) => void
  }
}

export type ColorPaletteType = {
  colorLimit: number
  colorPalette: IColorPalette[]
  modify: Modify
  notify: (text: string) => void
  theModal: TheModal
  markedAsSaved: boolean
  savedPalette: Saved[]
  options: Options
}
