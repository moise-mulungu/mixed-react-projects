import { useState, useEffect } from 'react'



export default function TestExample(props) {
  const { person } = props

  return (
    <>
      {`Hello ${person}!`}
    </>
  )
}
