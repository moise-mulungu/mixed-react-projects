import { useState } from 'react'

export default function AnchorLinks({ anchorLinks, styleColor }) {
  //(done) DM: todoMM: since this is a shared component, make styleColor a parameter/prop so each caller can set a different color. Good job on this, so this todo is just a little practice working with params/props

  // DM: todoMM: the "|" should be outside the anchor tag to avoid confusing the user when they mouseover a "|"
  // DM: edited to avoid the trailing "|" after the final anchor link.
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
            <a className={`hover:${styleColor}`} key={link} href={`#${link}`}>
              {linkText}
            </a>
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
