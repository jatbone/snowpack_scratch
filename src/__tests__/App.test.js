import { h } from 'preact'
import { render, fireEvent, screen } from '@testing-library/preact'
import App from '../App'

describe('App', () => {
  it('should render', () => {
    const { queryByTestId } = render(<App />)
    expect(queryByTestId('nav')).toBeInTheDocument()
    expect(queryByTestId('nav').querySelectorAll('a')).toHaveLength(2)
  })
})
