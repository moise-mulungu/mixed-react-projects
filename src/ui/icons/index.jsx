/* 

DM: what I did:

npm install react-icons
import { IconContext } from "react-icons";
docs: https://github.com/react-icons/react-icons#configuration

find icons: (this page has SM icons)
https://react-icons.github.io/react-icons/icons?name=di
import { IconName } from "react-icons/di";
*/

import { IconContext } from 'react-icons'
import { DiGithubBadge } from 'react-icons/di'
import { FaLinkedin } from 'react-icons/fa'
import { FaAngellist } from 'react-icons/fa'

export const GithubIcon = (props) => {
  const {
    size = '2em',
    className = 'text-gray-400 hover:text-gray-500',
    title = 'Social Media Link',
  } = props
  return (
    <IconContext.Provider
      value={{
        size,
        className: `shared-classNames-go-here ${className}`,
        title,
      }}
    >
      <div>
        <DiGithubBadge />
      </div>
    </IconContext.Provider>
  )
}

export const LinkedInIcon = (props) => {
  const {
    size = '2em',
    className = 'text-gray-400 hover:text-gray-500',
    title = 'Social Media Link',
  } = props
  return (
    <IconContext.Provider
      value={{
        size,
        className: `shared-classNames-go-here ${className}`,
        title,
      }}
    >
      <div>
        <FaLinkedin />
      </div>
    </IconContext.Provider>
  )
}

export const AngelListIcon = (props) => {
  const {
    size = '2em',
    className = 'text-gray-400 hover:text-gray-500',
    title = 'Social Media Link',
  } = props
  return (
    <IconContext.Provider
      value={{
        size,
        className: `shared-classNames-go-here ${className}`,
        title,
      }}
    >
      <div>
        <FaAngellist />
      </div>
    </IconContext.Provider>
  )
}

/* 

next steps:
do the same for linkedIn(in progress)
notice how much of the two icons code is identical
probably we want to abstract the identical part into a common function, let's talk next week about it
// DM, good!, next 'll think on how to abstract, in the meantime:
// DM: todoMM: make a list of what the two icon functions have in common
// DM: todoMM: this is the next step to abastract, to make a list described in the line above
*/
