import React, { useState } from 'react'
/*
DM: good
tailwind design src= https://tailwindui.com/components/application-ui/forms/sign-in-forms
react dev src= https://react.dev/reference/react-dom/components/input
*/

/* 

DM: todoMM: After you get version 1 working, commit, then see the image in this directory to start working on version 2.

*/

export default function PascalToCamelCase() {
  // DM: it's a string, not a converter
  const [string, setString] = useState('')
  // DM: this is a good name
  const [convertedString, setConvertedString] = useState('')

  // DM: this was good. and I'm glad you created a function for it. You are almost there.(cool!) DM: the function names are good.
  function convertPascalToCamelCase() {
    const camelCase = string
      .split(' ')
      .map((word) => {
        return word.charAt(0).toLowerCase() + word.substr(1)
      })
      .join(' ')
    setConvertedString(camelCase)
  }

  function convertCamelToPascalCase() {
    const pascalCase = string
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.substr(1)
      })
      .join(' ')
    setConvertedString(pascalCase)
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
          <div className="space-y-6">
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
                  value={string}
                  onChange={(e) => setString(e.target.value)}
                  className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>
            <div>
              <button
                onClick={convertPascalToCamelCase}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                camelCase
              </button>
              <button
                onClick={convertCamelToPascalCase}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
              >
                PascalCase
              </button>
            </div>
          </div>

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
                  {/* 
                  DM: good work today, that was the way to do it 
                  DM: todoMM: put the result back into a text input field as per the design. I have a future purpose for the text input.
                  DM: todoMM: add and adapt code for checkboxes. Make the entire app look like the design image (the correct title for example.) It's important on the job to follow the design spec closely.
                  DM: todoMM: write a new function getCase() that will automatically detect if the string the user inputs is in camel or pascal case. 
                 */}
                  <li className="text-gray-900">{convertedString}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
