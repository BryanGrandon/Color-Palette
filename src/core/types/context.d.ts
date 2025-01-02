export interface Palette {
  id: number
  hex: string
}

export interface Saved {
  id: number
  palette: Palette[]
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
  modify: Modify
  notify: (text: string) => void
  theModal: TheModal
  options: Options
}
