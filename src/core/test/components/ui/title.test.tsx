import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Title from '../../../components/ui/title'

describe('Title', () => {
  afterEach(cleanup)

  it('should render.', (): void => {
    render(<Title text='' />)
  })

  it('should render the entered (text).', (): void => {
    render(<Title text='Home' />)
    screen.getByText('Home')
  })

  it('check if the className has the default class and the new added class.', (): void => {
    render(<Title text={'Color'} className='other-class' />)
    const button = screen.getByText('Color')
    expect(button).toHaveProperty('className', 'title other-class')
  })
})
