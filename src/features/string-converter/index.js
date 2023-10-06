import React, { useState } from 'react'
// import { ClipboardDocumentList } from '@heroicons/react/20/solid'
import { DocumentDuplicateIcon } from '@heroicons/react/20/solid'

// clipboard sources: https://www.npmjs.com/package/react-copy-to-clipboard (ok) DM: you don't have to put links to GitHub packages, because since the package names are unique it is always easy to find them via Google search.
//(MM: DM: it was used as component from the react-copy-to-clipboard requirement component) DM: if this is not used, why do you import it?
// import { CopyToClipboard } from 'react-copy-to-clipboard'
import { camelCase, startCase } from 'lodash'

// DM: main lessons learned: create a state variable for every form input. Also, create state variables for any derived values from user input, such as inputTextCase.

// DM: lesson: generally while working on React components, do the _minimum_ look-and-feel (CSS, TW) until you have the final version; only then make it pretty. That way you will not waste a lot of time on formatting when you know there will be interim versions that you will throw away. It is good for you to practice CSS a lot, but don't get TOO fancy or spend a lot of time on it, because the JS and React are more important.(ok)

const debug = true
/*
DM: good
tailwind design src= https://tailwindui.com/components/application-ui/forms/sign-in-forms
react dev src= https://react.dev/reference/react-dom/components/input
*/

//(ok) DM: the way it works now, we could just get rid of the "Convert" button, but let's not do that, because I'd like to add more cases to convert to and from. Today, read my changes and understand how the React works. Ask me about what you don't understand. Make howtoreact comments if you see a technique that is new to you.

// DM: for DM: brainstorming possible enhancements for future development: API (conversion logic, case detection logic (maybe use an AI service in Google Cloud/AWS/Azure)) unit testing, handle ALL cases (also: title, start, snake, kebab, more?), contextual help/popups/etc. to also educate the user on the types of cases and their definitions.

export default function PascalToCamelCase() {
  const [inputString, setInputString] = useState('')
  const [inputTextCase, setInputTextCase] = useState('unknown')
  // DM: this part was still undone: it will hold either 'pascal' or 'camel'. DM: The default value should be the case type of the first radio button, not a boolean.
  const [targetCase, setTargetCase] = useState('pascal')
  const [convertedString, setConvertedString] = useState('')
  // const [copiedText, setCopiedText] = useState(false); MM: DM: after reverting the code this state declaration is no more useful

  // DM: good, I'm glad you wrote separate functions for each
  //(done) DM: todoMM: now, lets use lodash functions camelCase() and pascalCase() instead of the split.map.join; use them inside the two below functions. DM; ok, implement it in the app.(MM: i think the previous version is better than lodash as the lodash doesn't fulfill the case conversion logic; I am still finding the case conversion logic with lodash.) DM: OK, save the lodash stuff below for later when there's more types to convert from.

  // lodash version
  //(done) DM: todoMM: create new vocabulary entries for the quoted phrases in the next few lines.
  // DM: never mix imports ("ES6 Modules") with require ("CommonJS", an older "module system"). in React, you'll never require, the only time you require is in some NodeJS and config files.
  // DM: also, full "namespace imports" increase your "bundle size" (the amount of bytes the browser must download from the hosting website), so use "named imports" to import specifically which functionality you need. NextJS Webpack config can do "tree shaking" to figure out the minimum bundle size.
  // DM: todoMM: import { camelCase, startCase } from 'lodash' (imports can only be at the top of js files)
  const _ = require('lodash')

  // camel to pascal case
  function convertCamelToPascalCase() {
    const firstCharacterToUpperCase = _.startCase(inputString)
    return setConvertedString(
      // _.startCase(inputString).replace(/\s(\w)/g, (match, p1) => p1.toUpperCase())
      firstCharacterToUpperCase
    )
    //  setConvertedString(inputString)
  }

  // this is good
  // pascal to camel case
  function convertPascalToCamelCase() {
    //(done) DM: todoMM: good, but assign the result of the lodash function to a variable
    const firstCharacterToLowerCase = _.camelCase(inputString)
    return setConvertedString(
      // _.camelCase(inputString)
      firstCharacterToLowerCase
    )
    //  setConvertedString(inputString)
  }

  // function convertPascalToCamelCase() {
  //   const camelCase = inputString
  //     .split(' ')
  //     .map((word) => {
  //       return word.charAt(0).toLowerCase() + word.substr(1)
  //     })
  //     .join(' ')
  //   setConvertedString(camelCase)
  // }

  // function convertCamelToPascalCase() {
  //   const pascalCase = inputString
  //     .split(' ')
  //     .map((word) => {
  //       return word.charAt(0).toUpperCase() + word.substr(1)
  //     })
  //     .join(' ')
  //   setConvertedString(pascalCase)
  // }
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

  function handleCheckboxChange() {
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

  /*DM: watch the video I sent you again. You'll see what is missing here. You have a parameter 'text' - ask yourself: "how does 'text' get set? where is currently stored the value that you want to put into the clipboard?"  
  (i progress...)DM: todoMM: console.log? You can figure out why this is not working. You've seen this issue before. How do args get passed to functions? Question: what is the type of the parameter to copyToClipboard. Ask AI to fix the copyToClipboard function error: text is undefined. DM: Is this working and done?
  */
  // async function copyToClipboard({ text }) {
  //   console.log('text:', { text })
  //   try {
  //     // example of handle a promise with 'await'
  //     await navigator.clipboard.writeText(text)
  //     alert('Text copied to clipboard')
  //   } catch (err) {
  //     console.error('Unable to copy text', err)
  //   }
  // }

  //(MM: i reverted the previous code to use this function) DM: todoMM: this isn't used, so put a note about that and comment it out
  const copyToClipboard = (text) => {
    if (!navigator.clipboard) {
      console.error('Copy to clipboard is not supported')
      return
    }
    // DM: example of handle a promise with .then()
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Text copied to clipboard')
      },
      (err) => {
        console.error('Unable to copy text: ', err)
      }
    )
  }

  const allOutputs = [inputString, inputTextCase, targetCase, convertedString]
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
                {/* 
                  (done)DM: todoMM: we should never use a GitHub package for something that is simple because it makes the package.json and bundle size too large. So, npm uninstall CopyToClipboard package and revert the below to just the button with the onClick calling your copyToClipboard function above. Make sure both of the versions of copyToClipboard work correctly.
                
                 */}
                <button
                  title="copy to clipboard"
                  // DM: you are not passing any argument/parameter to copyToClipboard
                  // DM: 'text' does not exist. Look at the last video I sent you.
                  onClick={() => copyToClipboard(convertedString)}
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
              //MM: DM: is this method of using json necessary for the UI? I suggested that approach below. DM: it's fine, it's just more verbose.(ok)
            )}
            {allOutputs.map((output, name) => {
              console.log({ output, name })
              return (
                <>
                  <ul>
                    <li key={name}>{`${name}: ${output}`}</li>
                  </ul>
                </>
                // MM: DM: i want the code to look like below.(in progress) DM: you can figure it out, look at MDN docs on [].map()
              )
            })}

            {/* inputString: {inputString} <br />
            inputTextCase: {inputTextCase} <br />
            targetCase: {targetCase} <br />
            convertedString: {convertedString} */}
          </div>
        </div>
      </div>
    </div>
  )
}
