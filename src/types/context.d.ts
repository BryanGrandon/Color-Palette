export interface IColorPalette {
  id: number
  hex: string
}

type Modify = {
  add: () => void
  delete: (id: number) => void
  change: (id: number) => void
}

export type TheModal = {
  isOpen: boolean
  content: JSX.Element
  modify: () => void
}

export type ColorPaletteType = {
  colorLimit: number
  colorPalette: IColorPalette[]
  modify: Modify
  notify: (text: string) => void
  theModal: TheModal
}
