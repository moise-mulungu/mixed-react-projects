import { render, screen } from '@testing-library/react'

// DM: perhaps each test file can import this file:
import 'testing/setup.js' // DM: is the import found in this file needed to run Jest?

import Content from './index'

describe('Content component', () => {
  it('should render Content component properly', () => {
    render(<Content />)
    // DM: maybe this will help, don't know for sure
    console.log('screenGetByText:', screen.getByText('Moise Mulungu'))
    expect(screen.getByText('Moise Mulungu')).toBeInTheDocument()
  })
})

// MM: the test does not pass because the component is not rendering the name, am still figuring out why
// DM: what is this path for. How do I run the test?
// Path: src/features/portfolio/content/content.test.js
// DM: good work focusing on this! Testing is important!
