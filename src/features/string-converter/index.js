import React, { useState } from 'react'
// import { ClipboardDocumentList } from '@heroicons/react/20/solid'
import { DocumentDuplicateIcon } from '@heroicons/react/20/solid'
import { text } from 'express'

// DM: main lessons learned: create a state variable for every form input. Also, create state variables for any derived values from user input, such as inputTextCase.

// DM: lesson: generally while working on React components, do the _minimum_ look-and-feel (CSS, TW) until you have the final version; only then make it pretty. That way you will not waste a lot of time on formatting when you know there will be interim versions that you will throw away. It is good for you to practice CSS a lot, but don't get TOO fancy or spend a lot of time on it, because the JS and React are more important.(ok)

const debug = true
/*
DM: good
tailwind design src= https://tailwindui.com/components/application-ui/forms/sign-in-forms
react dev src= https://react.dev/reference/react-dom/components/input
*/

// DM: todoMM: make sure all the fonts are consistent, and the text in the page matches the design. DM: meticulously check - "String" and "Converted string" are different.

//(ok) DM: the way it works now, we could just get rid of the "Convert" button, but let's not do that, because I'd like to add more cases to convert to and from. Today, read my changes and understand how the React works. Ask me about what you don't understand. Make howtoreact comments if you see a technique that is new to you.

// DM: for DM: brainstorming possible enhancements for future development: API (conversion logic, case detection logic (maybe use an AI service in Google Cloud/AWS/Azure)) unit testing, handle ALL cases (also: title, start, snake, kebab, more?), contextual help/popups/etc. to also educate the user on the types of cases and their definitions.

export default function PascalToCamelCase() {
  const [inputString, setInputString] = useState('')
  const [inputTextCase, setInputTextCase] = useState('unknown')
  // DM: this part was still undone: it will hold either 'pascal' or 'camel'. DM: The default value should be the case type of the first radio button, not a boolean.
  const [targetCase, setTargetCase] = useState('pascal')
  const [convertedString, setConvertedString] = useState('')

  // DM: good, I'm glad you wrote separate functions for each
  // DM: todoMM: now, lets use lodash functions camelCase() and pascalCase() instead of the split.map.join; use them inside the two below functions. DM; ok, implement it in the app.(MM: i think the previous version is better than lodash as the lodash doesn't fulfill the case conversion logic; I am still finding the case conversion logic with lodash.)

  /*
  lodash version
  const _ = require('lodash');

function camelToPascalCase(str) {
  return _.startCase(str).replace(/\s(\w)/g, (match, p1) => p1.toUpperCase());
}

// this is good
function pascalToCamelCase(str) {
  return _.camelCase(str);
}

console.log(camelToPascalCase('helloWorld')); // Hello World
console.log(pascalToCamelCase('HelloWorld')); // helloWorld

  */
  function convertPascalToCamelCase() {
    const camelCase = inputString
      .split(' ')
      .map((word) => {
        return word.charAt(0).toLowerCase() + word.substr(1)
      })
      .join(' ')
    setConvertedString(camelCase)
  }

  function convertCamelToPascalCase() {
    const pascalCase = inputString
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.substr(1)
      })
      .join(' ')
    setConvertedString(pascalCase)
  }
  function getCase(str) {
    // MM: DM: i uncommented the Detected case: {inputTextCase}, then i found it worked DM: good
    if (/^[a-z]+(?:[A-Z][a-z]+)*$/.test(str)) {
      return 'camel'
    } else if (/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(str)) {
      return 'pascal'
    } else {
      return 'unknown'
    }
    // DM: PascalToCamelCase is the name of this React component, so you can't use it that way.(ok)
    // MM: DM: i think i should add only the .test() method! right? DM: console.log the value of PascalToCamelCase - you'll see that is a function and doesn't have a .test property, because it is the name of the current function, so you just cannot use it.
    console.log({
      PascalToCamelCase,
      typeof: typeof PascalToCamelCase,
      testProperty: PascalToCamelCase.test,
    }) // console.log all the things, and all will be clear!
    // if (PascalToCamelCase.test(str)) {
    //   return 'PascalCase'
    // } else if (PascalToCamelCase.test(str)) {
    //   return 'camelCase'
    // } else {
    //   return 'unknown'
    // }
  }

  function handleInputChange(value) {
    setInputString(value)
    const detectedCase = getCase(value)
    console.log({ detectedCase })
    setInputTextCase(detectedCase)
    // DM: note: handleCheckboxChange via the checkbox onChange only gets called when the USER makes a change, so we have to setTargetCase here, because the change due to checked={inputTextCase === 'camel'} is not made by the user. Another way to handle this is useEffect, which I'll show you later-
    setTargetCase(detectedCase === 'camel' ? 'pascal' : 'camel')
  }

  function handleCheckboxChange(caseType) {
    // DM; targetCase is not a boolean, but 'pascal' or 'camel'
    // DM: the strategy here again is to have a state variable for the targetCase. It makes the code much simpler.
    setTargetCase(targetCase)
  }

  function handleConvertButtonClick() {
    if (targetCase === 'pascal') {
      convertCamelToPascalCase()
    } else {
      convertPascalToCamelCase()
    }
  }

  /*(done) DM: todoMM: watch the video I sent you again. You'll see what is missing here. You have a parameter 'text' - ask yourself: "how does 'text' get set? where is currently stored the value that you want to put into the clipboard?"  */
  async function copyToClipboard({ text }) {
    try {
      await navigator.clipboard.writeText(text)
      console.log('Text copied to clipboard')
    } catch (err) {
      console.error('Unable to copy text', err)
    }
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
                  value={inputString}
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
                      type="radio"
                      name="pascal"
                      onChange={() => handleCheckboxChange('pascal')}
                      checked={inputTextCase === 'camel'}
                      disabled // DM: disabled for now because the inputTextCase controls which is checked
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  {/* (done)DM: todoMM: you don't need the DIV any longer, so add the TW utility classes from the DIV into the LABEL - bump*/}
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-900 ml-3 text-sm leading-6"
                  >
                    PascalCase
                  </label>
                </div>
                {/* 
                  DM: checkbox and radio are so similar that you can just change the "type" attribute from "checkbox" to "radio" 
                  
                  DM: note: by adding 
                  () => 
                  to the onChange like this:
                  onChange={() => handleCheckboxChange('camel')}
                  you can now pass a parameter. Otherwise, as
                   onChange={handleCheckboxChange}
                  you cannot pass a parameter.

                  DM: when getCase() is working and you can detect the case of the input text, pre-select the OTHER case below as a convenience for the user. ex: if input text is pascal, pre-select camel here. You'll need a new state variable inputTextCase that will contain the case detected by getCase(). 
                  (in progress)DM: todoMM: I did this instruction above, make sure you understand how it works. bump
                    
                  */}
              </div>
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    type="radio"
                    name="camel"
                    onChange={() => handleCheckboxChange('camel')}
                    checked={inputTextCase === 'pascal'}
                    disabled // DM: disabled for now because the inputTextCase controls which is checked
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
                onClick={handleConvertButtonClick}
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
                  disabled={true} // DM: so the user cannot edit it, user can still select/highlight it with a double click
                  value={convertedString} // DM: read only input, so I removed the onClick prop
                  className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
                <button
                  title="copy to clipboard"
                  // DM: you are not passing any argument/parameter to copyToClipboard
                  onClick={copyToClipboard(text)}
                  // className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <DocumentDuplicateIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                {}
                {/* 
                  (in progress)DM: todoMM: add an icon (inside a button) to the right of the text input that, upon click, lets the user copy the convertedString to the clipboard. Do not show the icon if convertedString==='' (how? do a global RegExp search in the repo on "howtoreact.*conditionally"). Use the heroicons (already in package.json) "document-duplicate" icon (search on "document-duplicate" here: https://heroicons.com/). On mouseover it should say "copy to clipboard" (hint: use the title attribute on the button tag). Make the button onClick attribute call a function that saves convertedString to the clipboard. For the "copy to clipboard" functionality to call onClick, here is the code suggested by ChatGPT:

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

            {/*  howtoreact: format multiple values:: easiest way to format the HTML display of a bunch of values */}
            {debug && (
              <pre>
                {JSON.stringify(
                  { inputString, inputTextCase, targetCase, convertedString },
                  null,
                  2
                )}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
