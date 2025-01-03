export interface Palette {
  id: number
  hex: string
}

export interface Saved {
  id: number
  palette: Palette[]
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
  notify: (text: string) => void
  theModal: TheModal
  options: Options
}
