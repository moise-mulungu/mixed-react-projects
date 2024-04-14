import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Overview from './index'

describe('Overview component', () => {
  it('should render Overview component properly', () => {
    render(<Overview />)
    expect(screen.findByTitle('Hey there, I am Moise. a software developer')).toBeTruthy()
  })
})

//(in progress) MM: the test does not work, but am still working on it.

// path: src/features/portfolio/content/overview/overview.test.js
