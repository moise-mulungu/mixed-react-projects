import { useState } from 'react'

export default function AnchorLinksSnakeCase({ anchorLinks }) {
  const styleColor = { color: 'bg-sky-500' }
  return (
    <>
      {anchorLinks.map((link) => {
        const linkText = link
          .replace(/[-]/g, ' ')
          .split(' ')
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
          })
          .join(' ')
        return (
          <a className={`hover:${styleColor.color}`} key={link} href={`#${link}`}>
            {linkText} | {''}
          </a>
        )
      })}
    </>
  )
}
