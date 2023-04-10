import Hello from './hello'
import ContactCards from './contact-cards'
import AvatarSet from './avatar-set'
import MyNewJoyOfReactComponent from './my-new-joy-of-react-component'
import MySideNote from './side-note'
import MovieRatingsAnimations from './movie-ratings-animations'
// import ClickBallGame from './click-ball'
import Counter from './counter'
// DM todoMM: your component name should match the imported filename (or directory name, since './character' (under the car hood) really means './character/index.jsx', )
// there are two files, one is named character.jsx, the other is named index.jsx. the index.jsx file is where i named the component CharacterApp to differ from the first Character component. just: import Character from './character'.
// DM: todoMM: "character" is generic, sounds like a text thing ... maybe game-character? (where is the done? I really need you to do this, so that I dont' have to spend time on  checking if it is done or not)
import GameCharacter from './character'
import Counter2 from './counter2'
import SelectLanguages from '@/ui/form/select-languages'
import MultipleCheckbox from '@/ui/form/multiple-checkbox'
import SelectCountries from '@/ui/form/select/select-countries'
// Â: todoMM: the file./two-factor/two-factor.js doesn't exist
import TwoFactor from './two-factor'
// DM: note: TW clears out all the default browser CSS, such as h1. This insures that TS looks the same in all browsers, but you have to write all your own TW even for headers
import Heading from '@/ui/heading'
// DM: todoDM: get ctrl-click on object to work for @/ imports (see, If you don't put "(done)" when it's done, I don't know whether I have to go look, this takes up time. is this done?)
import Divider from '@/ui/divider'

/*


DM: follow this same pattern whenever you have new examples from Joy of React. this will be a place to make sure these components work and to adjust/experiment with them.


*/

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
      {/* <ClickBallGame /> */}
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
    </div>
  )
}
