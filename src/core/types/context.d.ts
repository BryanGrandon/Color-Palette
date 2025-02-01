export interface Palette {
  id: number
  hex: string
}

export interface Saved {
  id: number
  palette: Palette[]
}

export type TheModal = {
  get: {
    open: boolean
    content: JSX.Element
  }
  modify: {
    open: (boolean: boolean) => void
    content: (content: JSX.Element) => void
  }
}

type Options = {
  get: {
    limit: number
    palette: IColorPalette[]
    saved: Saved[]
    colorPalettes: Saved[]
  }
  update: {
    limit: (number: number) => void
    palette: (palette: IColorPalette[]) => void
    saved: (saved: Saved[]) => void
    colorPalettes: (colorsNumbers: number, isRandom: boolean) => void
  }
}

export type ColorPaletteType = {
  notify: (text: string) => void
  theModal: TheModal
  options: Options
}
