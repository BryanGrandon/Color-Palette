import { describe, expect, it } from 'vitest'
import { savedColorPalette } from '../../script/saved-color-palette'

describe('Random Color', () => {
  const case1 = savedColorPalette({
    palette: [
      { id: 1, hex: '#000000' },
      { id: 2, hex: '#FF0000' },
    ],
    saved: [],
  })

  const case2 = savedColorPalette({
    palette: [
      { id: 1, hex: '#000000' },
      { id: 2, hex: '#FF0000' },
    ],
    saved: [
      {
        id: 1,
        palette: [
          { id: 1, hex: '#000000' },
          { id: 2, hex: '#FF0000' },
        ],
      },
    ],
  })

  it('check whether the object has the required elements', (): void => {
    const object = case1
    const keys = Object.keys(object)

    expect(keys.includes('checking')).toBe(true)
    expect(keys.includes('newSaved')).toBe(true)
  })

  it('The (checking) must return false if the palette is not saved.', (): void => {
    const { checking } = case1
    expect(checking).toBe(false)
  })

  it('The (checking) should return true if the pallet is already saved.', (): void => {
    const { checking } = case2
    expect(checking).toBe(true)
  })

  it('the (newSaved) must return array including the palette if it is not saved.', (): void => {
    const { newSaved } = case1
    expect(newSaved).toEqual([
      {
        id: 1,
        palette: [
          { id: 1, hex: '#000000' },
          { id: 2, hex: '#FF0000' },
        ],
      },
    ])
  })

  it('(newSaved) must return an array that does not include the palette if it is already saved.', (): void => {
    const { newSaved } = case2
    expect(newSaved).toEqual([])
  })
})
