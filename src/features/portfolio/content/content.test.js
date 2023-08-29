import React from 'react'
import { render, screen } from '@testing-library/react'

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

// MM: to run a specific file you can run "npm test -- path/to/filename.js" (for this file run npm test -- content.test.js)

// DM: good work focusing on this! Testing is important!
// MM: I am trying to start testing the atomic components instead of the parent component because I think it will be easier to test the atomic components first and then test the parent component. DM: sounds good.
