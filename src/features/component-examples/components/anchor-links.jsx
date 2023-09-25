import { useState } from 'react'

export default function AnchorLinks({ anchorLinks, styleColor }) {
  // DM: todoMM: style the links with underline on hover
  return (
    <>
      {anchorLinks.map((link, idx) => {
        const linkText = link
          .replace(/[-]/g, ' ')
          .split(' ')
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
          })
          .join(' ')
        return (
          <>
            <a className={styleColor} key={link} href={`#${link}`}>
              {linkText}
            </a>
            {/* howtoreact: conditionally show/hide HTML; use the conditional operator; {logicalBooleanExpression ? <></> : <></>} */}
            {idx < anchorLinks.length - 1 ? (
              <>
                {''} | {''}
              </>
            ) : (
              ''
            )}
          </>
        )
      })}
    </>
  )
}
