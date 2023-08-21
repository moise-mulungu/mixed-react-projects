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
/*

(partial)DM: todoMM: it's time to refactor this page because there are so many items here. You could make sub pages, but that is a lot of work making new pages in src/pages/component-examples. So, have a look at tailwindui and check out a few examples that look good. Something that is a big show/hide basically, to demo lots of things on one page.
(read, but not started yet)

*/
