import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('contains welcome text', () => {
    render(<Home />)
    expect(screen.getByText(/Welcome to/i)).toBeInTheDocument()
  })
})
