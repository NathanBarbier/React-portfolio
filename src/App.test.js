import { render, screen } from '@testing-library/react'
import App from './App'

test('renders mimiche link', () => {
    render(<App />)
    const linkElement = screen.getByText(/Mimiche/i)
    expect(linkElement).toBeInTheDocument()
})
