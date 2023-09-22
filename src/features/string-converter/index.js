import React, { useState } from 'react'
/*
DM: good
tailwind design src= https://tailwindui.com/components/application-ui/forms/sign-in-forms
react dev src= https://react.dev/reference/react-dom/components/input
*/

// DM: todoMM: make sure all the fonts are consistent, and the text in the page matches the design.
// DM: I've made suggestions below. I coded some of the suggested changes, but not all, just enough for you to get the general idea. So, look at the changes I made and finish the coding.

export default function PascalToCamelCase() {
  const [string, setString] = useState('')
  const [convertedString, setConvertedString] = useState('')
  //(done) DM: todoMM: rename this a specific name that describes what it really is. It is hard to understand the logic with this name. Name it targetCase and it will hold either 'pascal' or 'camel'. The default value should be the case type of the first radio button.
  const [targetCase, setTargetCase] = useState(false)
  const [inputTextCase, setInputTextCase] = useState('unknown')
  // DM: good, I'm glad you wrote separate functions for each
  // DM: todoMM: now, lets use lodash functions camelCase() and pascalCase() instead, but use them inside the two below functions.

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
  function getCase(str) {
    // DM: this is what I was looking for, so I uncommented it
    // (done)DM: todoMM: get this working. If you get stuck, I put in an image file in this dir what ChatGPT  suggested, in case it helps.
    // MM: DM: i uncommented the Detected case: {inputTextCase}, then i found it worked
    if (/^[a-z]+(?:[A-Z][a-z]+)*$/.test(str)) {
      return 'camel'
    } else if (/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(str)) {
      return 'pascal'
    } else {
      return 'unknown'
    }
    // DM: PascalToCamelCase is the name of this React component, so you can't use it that way.(ok)
    // MM: DM: i think i should add only the .test() method! right?
    // if (PascalToCamelCase.test(str)) {
    //   return 'PascalCase'
    // } else if (PascalToCamelCase.test(str)) {
    //   return 'camelCase'
    // } else {
    //   return 'unknown'
    // }
  }

  function handleCheckboxChange(caseType) {
    // (i think you already did this, right?))DM: todoMM: use the setter of the new targetCase state variable
    // setTargetCase(caseType)
    setTargetCase(!targetCase)
    if (targetCase) {
      convertCamelToPascalCase()
    } else {
      convertPascalToCamelCase()
    }
  }

  function handleInputChange(value) {
    setString(value)
    const detectedCase = getCase(value)
    console.log({ detectedCase })
    setInputTextCase(detectedCase)
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
          String Converter
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                String
              </label>
              <div className="relative flex items-start mt-4">
                <input
                  id="string-converter"
                  name="string-converter"
                  type="string-converter"
                  autoComplete="string-converter"
                  required
                  placeholder="... enter text here"
                  value={string}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="block w-half rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 mb-2"
                />
                <div className="ml-2">Detected Case: {inputTextCase}</div>
              </div>
              <div className="mt-4">
                To
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      type="checkbox"
                      name="pascal"
                      onChange={() => handleCheckboxChange('pascal')}
                      selected={inputTextCase === 'camel'}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      PascalCase
                    </label>
                  </div>
                </div>
                {/* 
                  DM: todoMM: change these to radio buttons so that you can only select one at a time 
                  DM: todoMM: the input should be outside the label. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#try_it
                  DM: note: by adding 
                  () => 
                  to the onChange like this:
                  onChange={() => handleCheckboxChange('camel')}
                  you can now pass a parameter. Otherwise, as
                   onChange={handleCheckboxChange}
                  you cannot pass a parameter.

                  DM: todoMM: when getCase() is working and you can detect the case of the input text, pre-select the OTHER case below as a convenience for the user. ex: if input text is pascal, pre-select camel here. You'll need a new state variable inputTextCase that will contain the case detected by getCase(). 
                    
                  */}
              </div>
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    type="checkbox"
                    name="camel"
                    onChange={() => handleCheckboxChange('camel')}
                    selected={inputTextCase === 'pascal'}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor="comments" className="font-medium text-gray-900">
                    camelCase
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleCheckboxChange}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Convert
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
                Converted String
              </h3>
              <div className="mt-4">
                <input
                  id="string-converter"
                  name="string-converter"
                  type="text"
                  disabled={true} // so the user cannot edit it, user can still select/highlight it with a double click
                  value={convertedString}
                  onChange={(e) => {
                    setConvertedString(e.target.value)
                  }}
                  className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
                {/* 
                  DM: todoMM: add an icon (inside a button) to the right of the text input that lets the user copy the text to the clipboard. Do not show the icon if convertedString===''. use the heroicons document-duplicate icon. On mouseover it should say "copy to clipboard" (hint: use the title attribute on the button tag). Make the button onClick call a function that saves convertedString to the clipboard. Here is the code suggested by ChatGPT::

                  async function copyToClipboard(text) {
                    try {
                      await navigator.clipboard.writeText(text);
                      console.log('Text copied to clipboard');
                    } catch (err) {
                      console.error('Unable to copy text', err);
                    }
                  }
                  // Usage
                  copyToClipboard('Hello, World!');

                 DM: good job working on this app. I think we can make the app very versatile and it can be a portfolio example. In the long run, I see it being able to handle all of the case types. Maybe it could be more of an educational app to teach new DEVs the difference between the cases. Who knows?, but let's keep working on it. Let me know if you have ideas of how to enhance the functionality. 

                 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
