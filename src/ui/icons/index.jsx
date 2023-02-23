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
// DM: todoMM: this is the next step to abstract, to make a list described in the line above
*/
export const commonIconElements = [
  {
    props: {
      size: '2em',
      className: 'text-gray-400 hover:text-gray-500',
      title: 'Social Media Link',
    },
  },
  {
    iconContextProvider: {
      value: { size, className: `shared-classNames-go-here ${className}`, title },
    },
  },
]

// MM: todoDM: this is the list of what the three functions have in common, and the next step to abstract. here you go:
// DM: todoMM: abstract it
//     I copied AngelListIcon and changed the name to Icon
//     next step, you can abstract it by adding to props whatever is unique to each individual icon 
export const Icon = (props) => {
  const {
    size = '2em',
    className = 'text-gray-400 hover:text-gray-500',
    title = 'Social Media Link',
    IconComponent // ex: FaAngellist
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
      {/*   
        see which one works
      {<IconComponent />}
        // or?
        {IconComponent} */}
      </div>
    </IconContext.Provider>
  )
}
// DM: now try to write a new Angellist icon
export const AngelListIcon = (props) => {
  // <FaAngellist />
  const {
    // DM: you don't need defaults that apply to all icons here, only AngerList defaults
    size, //  = '2em',
    className, //  = 'text-gray-400 hover:text-gray-500',
    title = 'Angel List',
  } = props
  return (
    <Icon {/* DM: todoMM: pass the 3 props forward adding IconComponent prop */} />
  )
}

// MM: ???DM: I'm not sure what you mean by "pass the 3 props forward adding IconComponent prop, can explain more, please?"
// DM: in addition to size, className and title props, pass to <Icon/> the icon you imported from react-icon, FaAngellist
//     FaAngellist can be passed as a prop - name the prop: IconComponent - give it a try
// DM: todoDM: naming conventions: should IconComponent be in StartCase?