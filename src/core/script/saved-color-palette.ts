import { SavedColorPalette } from '../../pages/pages-home/types/website features'
import { Saved } from '../types/context'

type Checking = SavedColorPalette & { toEliminate?: boolean }

const checking = ({ palette, saved, toEliminate }: Checking): savedPalette => {
  let count = 0
  let savedId = 0
  const check: boolean[] = []
  saved.map((e) => {
    const colorsPalette: string[] = []
    palette.map((e) => colorsPalette.push(e.hex))
    for (let i = 0; i < colorsPalette.length; i++) {
      if (colorsPalette.includes(e.palette[i]?.hex)) count++
      else break
    }
    if (count === colorsPalette.length && count === e.palette.length) {
      check.push(true)
      savedId = e.id
    } else check.push(false)
    count = 0
  })
  let newPalette: Saved[] = []
  if (toEliminate && check.includes(true)) {
    newPalette = saved.filter((e) => e.id !== savedId)
  }
  const output = {
    checking: check.includes(true),
    newSaved: newPalette,
  }
  return output
}

type savedPalette = {
  checking: boolean
  newSaved: Saved[]
}

export const savedColorPalette = ({ palette, saved }: SavedColorPalette): savedPalette => {
  const data = checking({ palette, saved })
  let newSaved: Saved[] = []

  if (!data.checking) {
    const thePalette = palette.map((e) => ({ id: e.id, hex: e.hex }))
    const newPalette = {
      id: saved.length + 1,
      palette: thePalette,
    }
    newSaved = [...saved, newPalette]
  } else {
    const data = checking({ palette, saved, toEliminate: true })
    newSaved = [...data.newSaved]
  }
  const output = {
    checking: data.checking,
    newSaved,
  }
  return output
}
