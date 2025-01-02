import { Palette, Saved } from '../../../core/types/context'

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
