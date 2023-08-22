import Link from '@/ui/link'

import Hello from './hello'
import ContactCards from './contact-cards'
import AvatarSet from './avatar-set'
import MyNewJoyOfReactComponent from './my-new-joy-of-react-component'
import SideNote from './side-note'
import MovieRatingsAnimations from './movie-ratings-animations'

import ClickBallGame from './click-ball-game'
import Counter from './counter'

import GameCharacter from './game-character'
import Counter2 from './counter2'
import SelectLanguages from '@/ui/form/select-languages'
import MultipleCheckbox from '@/ui/form/multiple-checkbox'
import IconDropdowns from './icon-dropdowns'

import Divider from '@/ui/divider'

export default function ComponentExamples() {
  return (
    <>
      <MyNewJoyOfReactComponent />

      <Divider />

      <div className=" bg-slate-100">
        <Hello />
        <Hello name="Moïse" />
      </div>
      <Divider />
      <IconDropdowns />
      <Divider />
      <ContactCards />
      <Divider />
      <AvatarSet />
      <Divider />
      <SideNote />
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
    </>
  )
}
