import { useState, useEffect } from 'react'
import { socialLinks, defaultSocialLink } from '@/constants/portfolio'
import { classNames } from '@/ui/utils'
import { v4 as uuid } from 'uuid'

// step one: define var with all data, use map
// step two: move this to constants/portfolio
// step three: same for other files

const defaultSocialLinkId = defaultSocialLink

export default function Footer(props) {
  const { _ } = props
  // const [selectedSocialLinkId, setSelectedSocialLinkId] = useState([defaultSocialLinkId])

  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 font-medium">
        © 2023{' '}
        <a href="https://flowbite.com/" className="hover:underline">
          Moise Mulungu™
        </a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        {socialLinks.map(({ id, name, title, Icon, url }) => {
          return (
            <li key={uuid} className="ml-2 font-medium">
              <a href={url}>
                {name ? name : null}
                {Icon ? <Icon title={title} /> : null}
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
