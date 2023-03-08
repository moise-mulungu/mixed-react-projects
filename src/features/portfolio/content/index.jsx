import { useState, useEffect } from 'react'
import Overview from './overview'

export default function Content(props) {
  const { data } = props

  /*3 sections*/
  return (
    <>
      <section
        aria-labelledby="category-heading"
        className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
      >
        <Overview />
      </section>
    </>
  )
}
