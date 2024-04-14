// DM: todoMM: do not import the entire React in nextjs
import React from 'react'
import PascalToCamelCase from '@/features/string-converter'
// import PascalToCamelCaseCleaned from '@/features/string-converter/pascal-to-camel-case-cleaned'

export default function StringConverter() {
  return (
    /* DM: if you don't have any attributes on the DIV, just use a React.fragment: <></> 
    */
    <>
      <PascalToCamelCase />
    </>
  )
}
