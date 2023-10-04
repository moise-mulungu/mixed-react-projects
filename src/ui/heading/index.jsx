import { createElement } from 'react'
/* 

DM: Moise, this is a configurable H tag. this is one way of doing it, putting it here as an example to think about

usage: 
import Heading from '@ui/heading'
  <Heading level="1" >My Heading</Heading>

*/
// howtotailwind: note: TW clears out all the default browser CSS, such as h1. This insures that TS looks the same in all browsers, but you have to write all your own tailwindcss even for headers.

export default function Heading({ children, level, className = '' }) {
  // level can be either h1 or 1, h2 or 2, ...
  const hTagName = 'h' + level.replace('h', '')

  function styles() {
    const shared = `
    ${/* font-semibold */ ''}
    !font-normal ${/* important to override 'prose' styles in content pages */ ''}
    tracking-tight ${/* letter-spacing: -0.025em; */ ''}
  `

    switch (hTagName) {
      case 'h1':
        return `${className} ${shared}
          text-2xl sm:text-2xl md:text-3xl
          !mt-10 !mb-4
        ` // "!" (tailwind 'important') serves to override the 'prose' settings auto-applied in markdown
      case 'h2':
        return `${className} ${shared}
          text-xl sm:text-xl md:text-2xl
          !mt-8 !mb-2
        `
      case 'h3':
        return `${className} ${shared}
            text-xl md:text-xl
            !mt-6 !mb-2
          `
      case 'h4':
        return `${className} ${shared}
            text-lg md:text-lg
            !!mt-4 !mb-2
          `
      default:
        return className
    }
  }

  return createElement(hTagName, { className: styles() }, children)
}
