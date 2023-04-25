import Hello from './hello'
import ContactCards from './contact-cards'
import AvatarSet from './avatar-set'
import MyNewJoyOfReactComponent from './my-new-joy-of-react-component'
import MySideNote from './side-note'
import MovieRatingsAnimations from './movie-ratings-animations'

import ClickBallGame from './click-ball-game'
import Counter from './counter'
//DM todoMM: your component name should match the imported filename (or directory name}

import GameCharacter from './character'
import Counter2 from './counter2'
import SelectLanguages from '@/ui/form/select-languages'
import MultipleCheckbox from '@/ui/form/multiple-checkbox'
import SelectCountries from '@/ui/form/select/select-countries'
import SelectColors from '@/ui/form/select/select-colors'
// Â: todoMM: the file./two-factor/two-factor.js doesn't exist
import TwoFactor from './two-factor'
// DM: note: TW clears out all the default browser CSS, such as h1. This insures that TS looks the same in all browsers, but you have to write all your own TW even for headers
import Heading from '@/ui/heading'
// DM: todoDM: get ctrl-click on object to work for @/ imports
import Divider from '@/ui/divider'

export default function ComponentExamples() {
  return (
    <div>
      <Heading level="1">Component Examples</Heading>

      {/* new components at the top */}

      <MyNewJoyOfReactComponent />

      <Divider />

      <div className=" bg-slate-100">
        <Hello />
        <Hello name="Moïse" />
      </div>
      <Divider />
      <ContactCards />
      <Divider />
      <AvatarSet />
      <Divider />
      <MySideNote />
      <Divider />
      <MovieRatingsAnimations />
      <Divider />
      <ClickBallGame />
      <Divider />
      <Counter />
      <Divider />
      <GameCharacter />
      <Divider />
      <Counter2 />
      <Divider />
      <SelectLanguages />
      <Divider />
      <MultipleCheckbox />
      <Divider />
      <SelectCountries />
      <Divider />
      <TwoFactor />
      <Divider />
      <SelectColors
        // DM: commented this out, as the app wasn't compiling
        // colors={
        //(done)   // DM: todoMM: have a look at how you are correctly using the 'colors' prop in the select-colors.jsx component. What does the component expect to be passed? What is the data type (string, array, JSX) that select colors expects to receive? Here, you are trying to pass a React component, but your select-colors component just wants colors.
        //   <>
        //     <option value="">{(colors = 'Select a color')}</option>
        //     <option value="red">{(colors = 'Red')}</option>
        //     <option value="green">{(colors = 'Green')}</option>
        //     <option value="blue">{(colors = 'Yellow')}</option>
        //   </>
        // }
        colors={['red', 'green', 'blue', 'yellow', 'purple', 'orange']}
        legend={'Your color value'}
        // if you don't want to pass an initial color, you can delete the next line. I want the initial color to be an empty string, so I am passing it in.
        initialColor={''}
      />
    </div>
  )
}
