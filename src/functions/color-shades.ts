// Hex to RGB
type RGB = {
  r: number
  g: number
  b: number
}
const hexToRGB = (hex: string): RGB => {
  let r, g, b
  if (hex.length === 6) {
    r = +`0x${hex[0]}${hex[1]}`
    g = +`0x${hex[2]}${hex[3]}`
    b = +`0x${hex[4]}${hex[5]}`
  } else if (hex.length === 3) {
    r = +`0x${hex[0]}${hex[0]}`
    g = +`0x${hex[1]}${hex[1]}`
    b = +`0x${hex[2]}${hex[2]}`
  } else {
    throw new Error(`${hex} not valid (╯°□°）╯︵ ┻━┻`)
  }
  return { r, g, b }
}

// RGB to HSL
type HSL = {
  h: number
  s: number
  l: number
}
const RGBToHSL = (rgb: RGB): HSL => {
  const r = rgb.r / 255
  const g = rgb.g / 255
  const b = rgb.b / 255

  const min = Math.min(r, g, b)
  const max = Math.max(r, g, b)
  const delta = max - min

  let h!: number
  if (delta === 0) h = 0
  else if (max === r) h = ((g - b) / delta) % 6
  else if (max === g) h = (b - r) / delta + 2
  else if (max === b) h = (r - g) / delta + 4

  h = Math.round(h * 60)
  if (h < 0) h += 360
  let l = (max + min) / 2
  let s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  l = +(l * 100).toFixed(0)
  s = +(s * 100).toFixed(0)

  return { h, s, l }
}

// Shades

const shades = (hsl: HSL, number: number) => {
  const array = []
  const limit = 100 / number
  let lighting = 0
  for (let i = 0; i <= number; i++) {
    if (hsl.l === lighting) {
      array.push(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l})`)
      lighting += limit
      continue
    }
    const newColor = `hsl(${hsl.h}, ${hsl.s}%, ${Math.round(lighting)})`
    array.push(newColor)
    lighting += limit
  }
  return array
}

export const colorShades = (text: string) => {
  const hex = text
    .split('')
    .filter((e) => e !== '#')
    .join('')
  const rgb = hexToRGB(hex)
  const hsl = RGBToHSL(rgb)
  return shades(hsl, 10)
}
