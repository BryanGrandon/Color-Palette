// Hex to RGB
type RGB = {
  r: number
  g: number
  b: number
}
const hexToRgb = (hex: string): RGB => {
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
const RgbToHsl = (rgb: RGB): HSL => {
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

// HSL to Hex
const HslToRgb = (H: number, S: number, L: number) => {
  const h = H / 360
  const s = S / 100
  const l = L / 100
  let t2
  let t3
  let val

  if (s === 0) {
    val = l * 255
    return [val, val, val]
  }

  if (l < 0.5) t2 = l * (1 + s)
  else t2 = l + s - l * s
  const t1 = 2 * l - t2

  const rgb = [0, 0, 0]
  for (let i = 0; i < 3; i++) {
    t3 = h + (1 / 3) * -(i - 1)
    if (t3 < 0) t3++
    if (t3 > 1) t3--
    if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3
    else if (2 * t3 < 1) val = t2
    else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6
    else val = t1
    rgb[i] = val * 255
  }

  return rgb
}

const RgbToHex = (args: number[]) => {
  const integer = ((Math.round(args[0]) & 0xff) << 16) + ((Math.round(args[1]) & 0xff) << 8) + (Math.round(args[2]) & 0xff)
  const string = integer.toString(16).toUpperCase()
  return '000000'.substring(string.length) + string
}

export { hexToRgb, RgbToHsl, HslToRgb, RgbToHex }
