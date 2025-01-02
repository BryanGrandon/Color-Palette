import { Saved } from '../../../core/types/context'
import { SavedColorPalette } from '../types/options'

type Checking = {
  check: boolean
  savedId: number
}

const checking = ({ palette, saved }: SavedColorPalette): Checking => {
  let count = 0
  const output = {
    check: false,
    savedId: 0,
  }
  saved.map((e) => {
    const colorsPalette: string[] = []
    palette.map((e) => colorsPalette.push(e.hex))

    for (let i = 0; i < colorsPalette.length; i++) {
      if (colorsPalette.includes(e.palette[i]?.hex)) count++
      else break
    }
    output.savedId = e.id
    output.check = count === colorsPalette.length
    count = 0
  })
  return output
}

type savedPalette = {
  checking: boolean
  newSaved: Saved[]
}

export const savedColorPalette = ({ palette, saved }: SavedColorPalette): savedPalette => {
  const { check, savedId } = checking({ palette, saved })
  let newSaved: Saved[] = []
  if (!check) {
    const newPalette = {
      id: saved.length + 1,
      palette: palette,
    }
    newSaved = [...saved, newPalette]
  } else {
    newSaved = saved.filter((e) => e.id !== savedId)
    for (let i = 0; i < newSaved.length; i++) newSaved[i].id = i + 1
  }
  const output = {
    checking: check,
    newSaved,
  }
  return output
}
