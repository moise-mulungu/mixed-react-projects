import { useState, useEffect } from 'react'
import { footerSocialLinks, defaultFooterSocialLinkId } from '../../../constants/portfolio'
import { classNames } from '@/ui/utils'

// step one: define var with all data, use map
// step two: move this to constants/portfolio
// step three: same for other files

const defaultSocialLinkId = defaultFooterSocialLinkId

export default function Footer(props) {
  const { _ } = props
  const [selectedSocialLinkId, setSelectedSocialLinkId] = useState([defaultSocialLinkId])

  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 font-medium">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Moise Mulungu™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          {footerSocialLinks.map(({ id, name, url }) => {
            console.log('footer', { id, name, url })
            {
              /* DM: todoMM: I added 'ml-2'. Add some more tailwind styling here. I think the example you found was intentionally blank so that you could add you own styling. tailwindcss.com ctrl-K to search for what you want to do. You may have to Google how to do it in raw CSS first, if you don't know. */
            }
            return (
              <li className="ml-2 font-medium">
                <a
                  href={`#${url}`}
                  className={classNames(
                    id === selectedSocialLinkId ? 'mr-4 hover:underline md:mr-6' : 'hover:underline'
                  )}
                  onClick={() => setSelectedSocialLinkId(id)}
                >
                  {name}
                </a>
              </li>
            )
          })}
          {/* <a href="https://github.com/moise-mulungu" className="mr-4 hover:underline md:mr-6 ">
              GitHub
            </a> */}
          {/* <li>
            <a
              href="https://www.linkedin.com/in/moisemulungu/"
              className="mr-4 hover:underline md:mr-6"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/moise-mulungu" className="mr-4 hover:underline md:mr-6">
              AngelList
            </a>
          </li>
          <li>
            <a href="https://medium.com/@moisemlg90" className="mr-4 hover:underline md:mr-6">
              Medium
            </a>
          </li>
          <li>
            <a href="https://twitter.com/moise_mulungu" className="hover:underline">
              Twitter
            </a>
          </li> */}
        </ul>
      </footer>
    </>
  )
}
// ???DM: how to add font awesome icons to this footer with nextjs.
// to keep it simple, let's use the heroicons provided with tailwindui - every type of icon you need will be among in the heroicon collection
