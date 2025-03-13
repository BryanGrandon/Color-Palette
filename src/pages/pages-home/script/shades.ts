import { hexToRgb, HslToRgb, RgbToHex, RgbToHsl } from './color-converter'

type HSL = {
  h: number
  s: number
  l: number
}

const shadesColor = (hsl: HSL, number: number) => {
  const array = []
  const limit = 100 / number
  let lighting = hsl.l === 100 ? 100 : 0

  for (let i = 0; i <= number; i++) {
    if (hsl.l === lighting) {
      array.push({ id: i, color: { h: hsl.h, s: hsl.s, l: hsl.l }, lighting: hsl.l })
      if (hsl.l === 100) lighting -= limit
      else lighting += limit
      continue
    }
    const newColor = { id: i, color: { h: hsl.h, s: hsl.s, l: Math.round(lighting) }, lighting }
    array.push(newColor)
    if (hsl.l === 100) lighting -= limit
    else lighting += limit
  }
  return array
}

type Output = {
  id: number
  lighting: number
  color: string
}

export const shades = (text: string) => {
  const hex = text
    .split('')
    .filter((e) => e !== '#')
    .join('')
  const hsl = RgbToHsl(hexToRgb(hex))
  const output: Output[] = []
  const array = shadesColor(hsl, 20)

  array.forEach((e) => {
    const rgb = HslToRgb(e.color.h, e.color.s, e.color.l)
    const newElement = {
      id: e.id,
      lighting: e.lighting,
      color: `#${RgbToHex(rgb)}`,
    }
    output.push(newElement)
  })
  return hsl.l === 100 ? output : output.reverse()
}
