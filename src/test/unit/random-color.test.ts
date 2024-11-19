import { describe, expect, it } from 'vitest'
import { randomColor } from '../../functions/random-color'

describe('Random Color', () => {
  it('should return a string with a length of 7 if provided is false', (): void => {
    expect(randomColor()).lengthOf(7)
  })

  it('should return a string with a length of 9 if provided is true', (): void => {
    expect(randomColor(true)).lengthOf(9)
  })

  it('should return true if it complies with the regular expression /^#[A-F0-9]*/', (): void => {
    const regularExpressions = (regexp: RegExp, testText: string) => {
      return regexp.test(testText) ? true : false
    }
    expect(regularExpressions(/^#[A-F0-9]*/, randomColor())).toBe(true)
    expect(regularExpressions(/^#[A-F0-9]*/, randomColor(true))).toBe(true)
  })
})
