import { Palette, Saved } from '../../../core/types/context'

export type Add_Color = {
  limit: number
  palette: Palette[]
}

export type Remove_Color = {
  colorId: number
  limit: number
  palette: Palette[]
}

export type Change_Color = {
  colorId: number
  color?: string
  isRandom: boolean
  palette: Palette[]
}

export type SavedColorPalette = {
  palette: Palette[]
  saved: Saved[]
}

export type Shades = {
  colorId: number
  color: string
  palette: Palette[]
}
