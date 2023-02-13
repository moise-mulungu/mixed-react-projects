import { useState, useEffect } from 'react'

// step one: define var with all data, use map
// step two: move this to constants/portfolio
// step three: same for other files

export default function Footer(props) {
  const {} = props

  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Moise Mulungu™
          </a>
          . All Rights Reserved.
        </span>
        {/* <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/moise-mulungu" className="mr-4 hover:underline md:mr-6 ">
              GitHub
            </a>
          </li>
          <li>
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
          </li>
        </ul> */}
      </footer>
    </>
  )
}
// ???DM: how to add font awesome icons to this footer with nextjs.
// to keep it simple, let's use the heroicons provided with tailwindui - every type of icon you need will be among in the heroicon collection
