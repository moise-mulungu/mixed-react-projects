import React, { useState } from 'react'
/*
tailwind design src= https://tailwindui.com/components/application-ui/forms/sign-in-forms
react dev src= https://react.dev/reference/react-dom/components/input
*/

export default function PascalToCamelCase() {
  const [converter, setConverter] = useState('')

  function convertPascalToCamelCase(string) {
    // const stringArray = string.split(' ')
    return string
      .split(' ') // MM: I am getting an error "of can not read property of undefined" when i click the convert button 
      .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
      .join(' ')
  }
  function converterHandler() {
    setConverter(convertPascalToCamelCase())
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-20 w-auto rounded-md"
          src="/static/camel-case.png"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          PascalCase To CamelCase String Converter
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                String Converter
              </label>
              <div className="mt-4">
                <input
                  id="string-converter"
                  name="string-converter"
                  type="string-converter"
                  autoComplete="string-converter"
                  required
                  placeholder="... Enter text here"
                  value={converter}
                  onChange={(e) => setConverter(e.target.value)}
                  className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={(e) => converterHandler(e)}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Convert
              </button>
            </div>
          </form>

          <div>
            <div className="relative mt-10">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900 mt-4"></span>
              </div>
            </div>
           
            <div className="mt-4">
              <h3 className="text-start text-l font-medium leading-7 tracking-tight text-gray-600">
                Converted:
              </h3>
              <div className="mt-4">
                <ul>
                  <li className="text-gray-900">{converter}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// MM: DM: I am still working on it.