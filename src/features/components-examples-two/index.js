import Heading from '@/ui/heading'
import Divider from '@/ui/divider'
import Hello from './../component-examples/hello'
import SelectCountries from '@/ui/form/select/select-countries'
import Colors from './colors'
import TwoFactor from './two-factor/two-factor'

import Popup from './popup'
import ReactAccordion from './react-accordion'
import ComplexObject from './complex-object'
import GradientGenerator from './gradient-generator'
// import StickerPad from './dynamic-key-generator/sticker'
import ShoppingList from './shopping-list'

export default function ComponentsExamplesTwo() {
  return (
    <div>
      <Heading level="2">Components Examples Two</Heading>
      <Hello />
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
