import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import ColorCard from '../../../components/ui/color-card'

describe('Color card', () => {
  afterEach(cleanup)

  it('should render.', (): void => {
    render(<ColorCard hex='' />)
  })

  it('check if the (hex) is hexadecimal', (): void => {
    const hex = '#000'
    render(<ColorCard hex={hex} />)
    const hexadecimal = screen.getByText(hex).textContent
    if (typeof hexadecimal == 'string') {
      const isHexadecimal = /^#[A-F0-9]{3}$/.test(hexadecimal) || /^#[A-F0-9]{6}$/.test(hexadecimal) ? true : false
      expect(isHexadecimal).toBe(true)
    }
  })

  it('should render the entered (hex).', (): void => {
    render(<ColorCard hex='#000' />)
    screen.getByText('#000')
  })

  it('should change the (hex) to “#ffffff” if it is not hexadecimal.', (): void => {
    render(<ColorCard hex='#00' />)
    screen.getByText('#ffffff')
  })
})
