import { describe, expect, it } from 'vitest'
import { generateColorPalette } from '../../functions/generate-color-palette'

describe('Random Color', () => {
  it('should return an array with the same length as the value provided.', (): void => {
    const length = 2
    expect(generateColorPalette(length)).lengthOf(length)
  })

  it('should check if the objects in the array have the set elements', (): void => {
    const object = generateColorPalette(length)[0]
    const keys = Object.keys(object)

    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('hex')).toBe(true)
  })

  it('check if the id is a number', (): void => {
    const id = generateColorPalette(length)[0].id
    expect(id).toBeTypeOf('number')
  })

  it('check if the hexadecimal (hex) complies with the regular expression /^#[A-F0-9]{6}$/', (): void => {
    const regularExpressions = (regexp: RegExp, testText: string) => {
      return regexp.test(testText) ? true : false
    }
    const hex = generateColorPalette()[0].hex
    expect(regularExpressions(/^#[A-F0-9]{6}$/, hex)).toBe(true)
  })
})
