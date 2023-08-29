import React from 'react'
import { render, screen } from '@testing-library/react'

// DM: perhaps each test file can import this file:
//(this is not important here after installing @babel/preset-react and @babel/preset-env) import 'testing/setup.js' // DM: is the import found in this file needed to run Jest?

import Content from './index'
import Overview from './overview'

describe('Content component', () => {
  it('should render properly', () => {
    const newContent = Content
    expect(screen.getByDisplayValue(newContent))
  })

  it(' should have component child', () => {
    const overview = Overview
    expect(screen.findByDisplayValue(overview))
  })
})

// MM: the test does not pass because the component is not rendering the name, am still figuring out why
// (i put it to test a specific file instead of all the .test files in case there are many)DM: what is this path for. How do I run the test? (done)DM: please leave here instructions on how to run this test file. Do I fun it with "node path/to/filename.js" or do I run it "npm run ???"
// MM: to run a specific file you can run "npm test -- path/to/filename.js" (for this file run npm test -- content.test.js)

// DM: good work focusing on this! Testing is important!
// MM: I am trying to start testing the atomic components instead of the parent component because I think it will be easier to test the atomic components first and then test the parent component. DM: sounds good.
