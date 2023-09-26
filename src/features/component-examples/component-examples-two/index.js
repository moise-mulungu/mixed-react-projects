import Heading from '@/ui/heading'
import Divider from '@/ui/divider'
import SelectCountries from '@/ui/form/select/select-countries'
import Colors from './colors'
import TwoFactor from './two-factor/two-factor'

import Popup from './popup'
import ReactAccordion from './react-accordion'
import ComplexObject from './complex-object'
import GradientGenerator from './gradient-generator'
// import StickerPad from './dynamic-key-generator/sticker'
import ShoppingList from './shopping-list'
import ToggleFooter from './toggle-footer'
//(done) DM: todoMM: put this file in the right place in the ./src/ directory - no imports should come from outside the ./src directory
import LiftingState from './lifting-state'
//(done) DM: todoMM: with default imports, always use the name that corresponds to the filename: AnchorLinks in this case. Same for the other file.
// (ok)DM: fyi, You can rename more self-documenting like this:
// import {default as AnchorLinksSnakeCase} but that is not necessary here.
import AnchorLinks from '../components/anchor-links'

//(done) DM: fix the warnings that are seen in the console and in the terminal
//(is this still necessary?) DM: improve the UI for the first few examples in this page; I can't see the outlines of dropdowns, fields, etc.
export default function ComponentExamplesTwo() {
  //(done)DM: todoMM: rename this for what it really is: exampleAnchorLinks
  const anchorLinksExample = [
    'select-countries',
    'two-factor',
    'colors',
    'popup',
    'react-accordion',
    'complex-object',
    'gradient-generator',
    'shopping-list',
    //(done) DM: todoMM: toggle is misspelled so change it by doing a global search on "toggle-footer" and change all instances in the repo to the correct spelling.
    // DM: todoMM: you are using the Code Spell Check VSCode extension, right?
    'toggle-footer',
    'lifting-state',
  ]
  const color = 'hover:bg-sky-400'
  return (
    <div className={`m-4`}>
      <Heading level="2">Components Examples Two</Heading>
      <>
        <AnchorLinks anchorLinks={anchorLinksExample} styleColor={color} />
        {/* {anchorLinksSnakeCase.map((link) => {
          //DM: todoMM: good, now finish it up using the V2 design in the image in this directory

          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

          const linkText = link
            .replace(/[-]/g, ' ')
            .split(' ')
            .map((word) => {
              return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
            })
            .join(' ')
          // .replace...
          console.log({ linkText })
          return (
            <a className={`hover:${styleColor.color}`} key={link} href={`#${link}`}>
              {linkText} | {''}
            </a>
          )
          //(done) DM: todoMM: also, format this in the UI a little better, putting some space about the line, and a space after each "|"
        })} */}
      </>
      <Divider />
      <div id="select-countries" className=" bg-slate-100">
        <SelectCountries />
      </div>
      <Divider />
      <div id="two-factor">
        <TwoFactor />
      </div>
      <Divider />
      <div id="colors">
        <Colors />
      </div>
      <Divider />
      <div id="popup">
        <Popup />
      </div>
      <Divider />
      <div id="react-accordion">
        <ReactAccordion />
      </div>
      <Divider />
      <div id="complex-object">
        <ComplexObject />
      </div>
      <Divider />
      <div id="gradient-generator">
        <GradientGenerator />
      </div>
      <Divider />
      <div id="shopping-list">
        <ShoppingList />
      </div>
      <Divider />
      <div id="toggle-footer">
        <ToggleFooter />
      </div>
      <Divider />
      <div id="lifting-state">
        <LiftingState />
      </div>
    </div>
  )
}
