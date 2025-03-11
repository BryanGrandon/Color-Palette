import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Button from '../../../components/ui/button'
import { afterEach, describe, expect, it, vi } from 'vitest'

describe('Button', () => {
  afterEach(cleanup)
  const text = 'Click Me'

  it('should render.', (): void => {
    render(<Button text='' />)
  })

  it('should render the entered text.', (): void => {
    render(<Button text={text} />)
    screen.getByText(text)
  })

  it('check if the className has the default class and the new added class.', (): void => {
    render(<Button text={text} className='other-class' />)
    const button = screen.getByText(text)
    expect(button).toHaveProperty('className', 'other-class button')
  })

  it('function should be executed if you click the button.', (): void => {
    const onClickButton = vi.fn()
    render(<Button text={text} onClick={onClickButton} />)
    fireEvent.click(screen.getByText(text))
    expect(onClickButton).toHaveBeenCalled()
  })
})
