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
import TogglableFooter from './togglable-footer'
//(done) DM: todoMM: put this file in the right place in the ./src/ directory - no imports should come from outside the ./src directory
import LiftingState from './lifting-state'

//(in progress) DM: fix the warnings that are seen in the console and in the terminal
//(in progress) DM: improve the UI for the first few examples in this page; I can't see the outlines of dropdowns, fields, etc.
export default function ComponentExamplesTwo() {
  const styleColor = { color: 'bg-sky-500' }
  //(done: i think the were i the same order already) DM: todoMM: put these in the same order as each item is shown in the page
  const anchorLinksSnakeCase = [
    'select-countries',
    'two-factor',
    'colors',
    'popup',
    'react-accordion',
    'complex-object',
    'gradient-generator',
    'shopping-list',
    'toggleable-footer',
    'lifting-state',
  ]
  return (
    <div className={`m-4`}>
      <Heading level="2">Components Examples Two</Heading>
      <>
        {anchorLinksSnakeCase.map((link) => {
          // DM: todoMM: good, now write a String.replace function that creates more UI-friendly link text, i.e., "two-factor" to "Two Factor". DM: good but "Two Factor" is capitalized, do that also. BTW, I don't have any problem with you using BingAI to get code, as long as it is correct. I think you can learn from that. for example, you might ask using the prompt: "convert a string to title case". Add "using lodash" to the prmopt and see if that looks good.
          const linkText = link.replace(/[-]/g, ' ')
          // .replace...
          return (
            <a className={`hover:${styleColor.color}`} key={link} href={`#${link}`}>
              {linkText} | {''}
            </a>
          )
          //(done) DM: todoMM: also, format this in the UI a little better, putting some space about the line, and a space after each "|"
        })}
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
      <div id="togglable-footer">
        <TogglableFooter />
      </div>
      <Divider />
      <div id="lifting-state">
        <LiftingState />
      </div>
    </div>
  )
}
