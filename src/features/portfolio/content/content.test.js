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
// (i put it to test a specific file instead of all the .test files in case there are many)DM: what is this path for. How do I run the test? DM: please leave here instructions on how to run this test file. Do I fun it with "node path/to/filename.js" or do I run it "npm run ???"
// Path:

// DM: good work focusing on this! Testing is important!
// MM: I am trying to start testing the atomic components instead of the parent component because I think it will be easier to test the atomic components first and then test the parent component. DM: sounds good.
