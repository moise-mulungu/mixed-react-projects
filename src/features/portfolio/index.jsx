import { useState, useEffect } from 'react'

export default function Portfolio(props) {
  const { data } = props

  return (
    <>
      <TopNav />
      <Content />
      <Footer />
    </>
  )
}
