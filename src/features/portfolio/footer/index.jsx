// import { useState, useEffect } from 'react'
// import { socialLinks, defaultSocialLink } from '@/constants/portfolio'
// import { classNames } from '@/ui/utils'
// import { v4 as uuid } from 'uuid'

// const defaultSocialLinkId = defaultSocialLink

// export default function Footer() {
//   // const { _ } = props

//   return (
//     <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
//       <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 font-medium">
//         © 2023{' '}
//         <a href="https://flowbite.com/" className="hover:underline">
//           Moise Mulungu™
//         </a>
//       </span>
//       <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
//         {socialLinks.map(({ id, name, title, Icon, url }) => {
//           return (
//             <li key={uuid} className="ml-2 mr-2 font-medium">
//               <a href={url}>
//                 {name ? name : null}
//                 {Icon ? <Icon title={title} /> : null}
//                 {/* {Icon ? <Icon title={title} selected={selectedSocialLinkId === id} /> : null} */}
//               </a>
//             </li>
//           )
//         })}
//       </ul>
//     </footer>
//   )
// }

/*
MM: DM: a footer code suggested by Sider AI. but i am still working on it
import { useState, useEffect } from 'react' 
import { socialLinks, defaultSocialLink } from '@/constants/portfolio' 
import { classNames } from '@/ui/utils' 
import { v4 as uuid } from 'uuid'

const defaultSocialLinkId = defaultSocialLink

export default function Footer({ lang }) { 
  return ( 
    <footer className="p-4 bg-gray-900 rounded-lg shadow-md"> 
    <div className="text-lg text-white font-medium mb-2"> 
    {lang === 'en' ? '© 2023 Moise Mulungu™' : '© 2023 Moise Mulungu™'} 
    </div> 
    <div className="grid grid-cols-4 gap-4"> 
    {socialLinks.map(({ id, name, title, Icon, url }) => { 
      return ( 
        <a key={uuid()} href={url} className="text-sm text-gray-400 hover:text-white"> 
        {Icon ? <Icon title={title} /> : null} 
        {name ? <span className="ml-2">{name}</span> : null} 
        </a> 
        ) })} 
        </div> 
        </footer> 
        ) 
      }

*/
import { useState, useEffect } from 'react'
import { socialLinks, defaultSocialLink } from '@/constants/portfolio'
import { classNames } from '@/ui/utils'
import { v4 as uuid } from 'uuid'

const defaultSocialLinkId = defaultSocialLink

export default function Footer() {
  return (
    <footer className="p-10 bg-gray-400 text- flex flex-col md:flex-row md:items-center md:justify-between">
      <span className="text-center text-md font-medium mb-2 md:mb-0 md:text-left">
        © 2023{' '}
        <a href="https://flowbite.com/" className="text-indigo-900 hover:text-indigo-300 underline">
          Moise Mulungu™
        </a>
      </span>
      <ul className="flex justify-center space-x-8 md:justify-end">
        {socialLinks.map(({ id, name, title, Icon, url }) => {
          return (
            <li key={uuid} className="flex">
              <a href={url} className="hover:text-indigo-400">
                {name && name}
                {Icon && <Icon className="w-5 h-5" title={title} />}
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
