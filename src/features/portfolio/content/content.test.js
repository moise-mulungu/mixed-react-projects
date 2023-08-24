import { render, screen } from '@testing-library/react'

// DM: does this work? There is no ./content in this directory. Probably need to import Content from './index' DM: bump
import Content from './content'

describe('Content component', () => {
  it('should render Content component properly', () => {
    render(<Content />)
    // DM: maybe this will help, don't know for sure
    console.log('screenGetByText:', screen.getByText('Moise Mulungu'))
    expect(screen.getByText('Moise Mulungu')).toBeInTheDocument()
  })
})

// MM: the test does not pass because the component is not rendering the name, am still figuring out why
// Path: src/features/portfolio/content/content.test.js
// DM: good work focusing on this! Testing is important!
