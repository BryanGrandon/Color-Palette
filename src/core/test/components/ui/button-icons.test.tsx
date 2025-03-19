import { render, screen, cleanup, fireEvent } from '@testing-library/react'

import { afterEach, describe, expect, it, vi } from 'vitest'
import ButtonIcons from '../../../components/ui/button-icons'

describe('Button', () => {
  afterEach(cleanup)
  const icon_1 = <p>1</p>
  const icon_2 = <p>2</p>

  it('should render.', (): void => {
    render(<ButtonIcons selected={icon_1} deselected={icon_2} onClick={vi.fn()} ariaLabel='test' />)
  })

  it('should display the icons entered.', (): void => {
    render(<ButtonIcons selected={icon_1} deselected={icon_2} onClick={vi.fn()} ariaLabel='test' />)
    screen.getByText(1)
    screen.getByText(2)
  })

  it('the function should be executed if you click the button.', (): void => {
    const onClickButton = vi.fn()
    render(<ButtonIcons selected={icon_1} deselected={icon_2} onClick={onClickButton} ariaLabel='test' />)

    fireEvent.click(screen.getByText(1))
    expect(onClickButton).toHaveBeenCalled()
  })
})
