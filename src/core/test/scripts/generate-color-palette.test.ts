import { describe, expect, it } from 'vitest'
import { generateColorPalettes } from '../../script/generate-color-palettes'

describe('Random Color', () => {
  it('check whether the object has the required elements', (): void => {
    const object = generateColorPalettes(length)[0]
    const keys = Object.keys(object)

    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('palette')).toBe(true)
  })

  it('check if the id is a number', (): void => {
    const id = generateColorPalettes(length)[0].id
    expect(id).toBeTypeOf('number')
  })

  it('check if the pallet has the same length as the provided value.', (): void => {
    const length = 2
    expect(generateColorPalettes(length)[0].palette).lengthOf(length)
  })

  it('check if the hexadecimal (hex) complies with the regular expression /^#[A-F0-9]{6}$/', (): void => {
    const regularExpressions = (regexp: RegExp, testText: string) => {
      return regexp.test(testText) ? true : false
    }
    const hex = generateColorPalettes(length)[0].palette[0].hex
    expect(regularExpressions(/^#[A-F0-9]{6}$/, hex)).toBe(true)
  })
})
