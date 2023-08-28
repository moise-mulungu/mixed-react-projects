import { render, screen } from '@testing-library/react'
import 'testing/setup.js'

import Overview from './index'

describe('Overview component', () => {
  it('should render Overview component properly', () => {
    render(<Overview />)
    expect(screen.getByText('Overview')).toBeInTheDocument()
  })
})

//(in progress) MM: the test does not work, but am still working on it.

// path: src/features/portfolio/content/overview/overview.test.js
