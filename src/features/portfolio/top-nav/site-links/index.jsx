import { useState, useEffect } from 'react'

export default function SiteLinks(props) {
  // const {} = props

  const links = [
    { name: 'Portfolio', anchor: 'work' },
    { name: 'About', anchor: 'about' },
    { name: 'Contact', anchor: 'contact' },
  ]

  return (
    <ul>
      {links.map(({ name, anchor }) => {
        // console.log('wut', { name, anchor })
        // DM: using anchor for 'key' because it is unique
        return (
          <li key={anchor}>
            <a href={`#${anchor}`}>{name}</a>
          </li>
        )
      })}
    </ul>
  )
}
// DM: look for a font-awesome package on github that corresponds to https://use.fontawesome.com/releases/v5.15.4/css/all.css https://fontawesome.com/docs/web/use-with/react/use-with
