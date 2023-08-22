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

//(cool) DM: good job on splitting up the pages. I move things around a bit to keep all examples links/code in a hierarchy
//(in progress) DM: fix the warnings that are seen in the console and in the terminal
//(in progress) DM: improve the UI for the first few examples in this page; I can't see the outlines of dropdowns, fields, etc.
export default function ComponentsExamplesTwo() {
  return (
    <div className={`m-4`}>
      <Heading level="2">Components Examples Two</Heading>
      <Divider />
      <SelectCountries />
      <Divider />
      <TwoFactor />
      <Divider />
      <Colors />
      <Divider />
      <Popup />
      <Divider />
      <ReactAccordion />
      <Divider />
      <ComplexObject />
      <Divider />
      <GradientGenerator />
      <Divider />
      <ShoppingList />
    </div>
  )
}
