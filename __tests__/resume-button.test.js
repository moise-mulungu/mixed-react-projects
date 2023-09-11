import { render, screen, cleanup } from '@testing-library/react'
// Importing the jest testing library
import '@testing-library/jest-dom'
import ResumeButton from '../src/features/portfolio/content/skills-section/resume-button'

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup() // Resets the DOM after each test suite
})

describe('Button Component', () => {
  // const setToggle = jest.fn();
  render(<ResumeButton buttonText=" Get my Resume" />)
  const button = screen.getByTestClassName('rounded-md' || 'rounded-lg')

  // Test 1
  test('Button Rendering', () => {
    expect(button).toBeInTheDocument()
  })

  // Test 2
  test('Button Text', () => {
    expect(button).toHaveTextContent(' Get my Resume')
  })
})
