import { render, screen } from '@testing-library/react'
import Content from './content'

describe('Content component', () => {
  it('should render Content component properly', () => {
    render(<Content />)
    expect(screen.getByText('Moise Mulungu')).toBeInTheDocument()
  })
})

// MM: the test does not pass because the component is not rendering the name, am still figuring out why
// Path: src/features/portfolio/content/content.test.js
