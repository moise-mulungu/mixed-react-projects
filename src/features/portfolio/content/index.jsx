import { useState, useEffect } from 'react'
import Overview from './overview-section/overview'

export default function Content(props) {
  const {data} = props

  /*3 sections*/
  return( 
    <>
      <Overview />
    </> 
  )
}
