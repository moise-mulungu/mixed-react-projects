import { useState, useEffect } from 'react'
import SiteName from './site-name'
import SiteLinks from './site-links'

import Example from './index-test-tailwindui-code'

export default function TopNav(props) {
  const {} = props

  return (
    <>
      <SiteName />
      <SiteLinks />
      <Example />
    </>
  )
}
