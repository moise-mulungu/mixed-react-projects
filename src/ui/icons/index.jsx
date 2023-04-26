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

// DM: todoMM: npm install react-icons
import { FaLinkedin, FaAngellist, FaMediumM, FaTwitter } from 'react-icons/fa'

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

export const GithubIcon = (props) => {
  const { size, className, title = 'GitHub' } = props
  return <Icon size={size} className={className} title={title} IconComponent={DiGithubBadge} />
}

export const LinkedInIcon = (props) => {
  const { size, className, title = 'LinkedIn' } = props
  return <Icon size={size} className={className} title={title} IconComponent={FaLinkedin} />
}

export const MediumIcon = (props) => {
  const { size, className, title = 'Medium' } = props
  return <Icon size={size} className={className} title={title} IconComponent={FaMediumM} />
}

export const TwitterIcon = (props) => {
  const { size, className, title = 'Twitter' } = props
  return <Icon size={size} className={className} title={title} IconComponent={FaTwitter} />
}
