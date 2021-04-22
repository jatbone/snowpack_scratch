import { h } from 'preact'
import { render, fireEvent, screen } from '@testing-library/preact'
import App from '../App'

describe('App', () => {
  it('should render', () => {
    const { container } = render(<App />)
    expect(container.textContent).toMatch('value : 0')
  })
})
