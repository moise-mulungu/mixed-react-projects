import Hello from './hello'
import ContactCards from './contact-cards'
import AvatarSet from './avatar-set'
import MyNewJoyOfReactComponent from './my-new-joy-of-react-component'
// DM: todoMM: rename app.jsx to index.jsx, then import MySideNote from './side-note'
// DM: todoMM: you don't need /index on the next line (done)(are you sure it's done? :)
import MySideNote from './side-note'
import MovieRatingsAnimations from './movie-ratings-animations'
// import ClickBallGame from './click-ball'
import Counter from './counter'
import CharacterApp from './character' // DM todoMM: your component name should match the imported filename
// there are two files, one is named character.jsx, the other is named index.jsx. the index.jsx file is where i named the component CharacterApp to differ from the first Character component.
import Counter2 from './counter2' // DM todoMM: your component name should match the imported filename. see comments in ./counter2/counter2
import SelectLanguages from '@/ui/form/select-languages'
import MultipleCheckbox from '@/ui/form/multiple-checkbox'
import SelectCountries from '@/ui/form/select/select-countries'
// DM: note: TW clears out all the default browser CSS, such as h1. This insures that TS looks the same in all browsers, but you have to write all your own TW even for headers
import Heading from '@/ui/heading'
// DM: todoDM: get ctrl-click on object to work for @/ imports
import Divider from '@/ui/divider'

/*


DM: follow this same pattern whenever you have new examples from Joy of React. this will be a place to make sure these components work and to adjust/experiment with    them.


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
      <CharacterApp />
      <Divider />
      <Counter2 />
      <Divider />
      <SelectLanguages />
      <Divider />
      <MultipleCheckbox />
      <Divider />
      <SelectCountries />
    </div>
  )
}
