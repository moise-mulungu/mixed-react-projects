import { useState, useEffect } from 'react'

export default function Footer(props) {
  const {} = props

  return(
    <>

      <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Moise Mulungu™</a>. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://github.com/moise-mulungu" class="mr-4 hover:underline md:mr-6 ">GitHub</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/moisemulungu/" class="mr-4 hover:underline md:mr-6">LinkedIn</a>
              </li>
              <li>
                  <a href="https://angel.co/u/moise-mulungu" class="mr-4 hover:underline md:mr-6">AngelList</a>
              </li>
              <li>
                  <a href="https://medium.com/@moisemlg90" class="mr-4 hover:underline md:mr-6">Medium</a>
              </li>
              <li>
                  <a href="https://twitter.com/moise_mulungu" class="hover:underline">Twitter</a>
              </li>
          </ul>
      </footer>

    </>
    
  )
}
