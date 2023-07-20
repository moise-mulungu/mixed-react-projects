// import { useState, useEffect } from 'react'

import TopNav from './top-nav'
import Content from './content'
import Footer from './footer'

export default function Portfolio(props) {
  const { data } = props

  return (
    <div className="bg-white">
      <TopNav />
      <Content />
      <Footer />
    </div>
  )
}
