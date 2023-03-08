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
import { FaMediumM } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

export const Icon = (props) => {
  const {
    size = '2em',
    className = 'text-gray-400 hover:text-gray-500',
    title = 'Social Media Link',
    IconComponent,
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
        <IconComponent />
      </div>
    </IconContext.Provider>
  )
}

export const AngelListIcon = (props) => {
  // DM: you don't need defaults that apply to all icons here, only AngerList-specific defaults
  const { size, className, title = 'Angel List' } = props
  return <Icon size={size} className={className} title={title} IconComponent={FaAngellist} />
}

// DM: todoMM: (bump) adapt the remaining icons below as I've done the AngelListIcon - follow the logic from the footer.jsx to here, make sure you understand how it works, ask me questions.

export const GithubIcon = (props) => {
  const { size = '2em', className = 'text-gray-400 hover:text-gray-500', title = 'Github' } = props
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
    title = 'LinkedIn',
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

export const MediumIcon = (props) => {
  const { size = '2em', className = 'text-gray-400 hover:text-gray-500', title = 'Medium' } = props
  return (
    <IconContext.Provider
      value={{
        size,
        className: `shared-classNames-go-here ${className}`,
        title,
      }}
    >
      <div>
        <FaMediumM />
      </div>
    </IconContext.Provider>
  )
}

export const TwitterIcon = (props) => {
  const { size = '2em', className = 'text-gray-400 hover:text-gray-500', title = 'Twitter' } = props
  return (
    <IconContext.Provider
      value={{
        size,
        className: `shared-classNames-go-here ${className}`,
        title,
      }}
    >
      <div>
        <FaTwitter />
      </div>
    </IconContext.Provider>
  )
}
