import { render } from '@testing-library/react'
import ResumeButton from '../src/features/portfolio/content/skills-section/resume-button'

it('renders homepage unchanged', () => {
  const { container } = render(<ResumeButton />)
  expect(container).toMatchSnapshot()
})
