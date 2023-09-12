import { render, screen, cleanup } from '@testing-library/react'
// Importing the jest testing library
import '@testing-library/jest-dom'
import ResumeButton from '../../src/features/portfolio/content/skills-section/resume-button'

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup() // Resets the DOM after each test suite
})

describe('ResumeButton', () => {
  it('renders an anchor', () => {
    render(<ResumeButton />)

    const anchor = screen.getByRole('button', { name: /Get my resume/i })

    expect(anchor).toBeInTheDocument()
  })
})
