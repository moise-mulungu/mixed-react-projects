import Hello from './hello'
import ContactCards from './contact-cards'
import AvatarSet from './avatar-set'
import MyNewJoyOfReactComponent from './my-new-joy-of-react-component'
import MySideNote from './side-note'
import MovieRatingsAnimations from './movie-ratings-animations'
//DM todoMM: your component name should match the imported filename (or directory name} - ClickBallGame is good name, just make the filename match
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
        colors={
          <>
            <option value="">{(colors = 'Select a color')}</option>
            <option value="red">{(colors = 'Red')}</option>
            <option value="green">{(colors = 'Green')}</option>
            <option value="blue">{(colors = 'Yellow')}</option>
          </>
        }
        legend={'Your color value'}
        initialColor={''}
      />
    </div>
  )
}
