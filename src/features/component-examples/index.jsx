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
      {/* DM: try this sometime: instead of a separate page, put a searchable dropdown here so it is easy to find an example by searching on the name of the example in the dropdown. You can use src/ui/form/dropdown to build the searchable dropdown. 
      this is a better place to do it
      DM: todoMM: don't do the dropdown for now, but rather do this step first: make a list of links to each example below that looks like this:
      ComponentName | ComponentName | ComponentName | ComponentName | ComponentName | ...
      Each (ComponentName) item should be an anchor link to the corresponding part of the page below
      ex: <a href="#hello">Hello</a>IconDropdowns
          <a href="#IconDropdowns">IconDropdowns</a>
          will take you to the Hello component below
          see explanation of how it works here: https://www.w3docs.com/snippets/html/how-to-create-an-anchor-link-to-jump-to-a-specific-part-of-a-page.html
      once you have made this, I'll give you the next step
      
      {/* <Dropdown
        props={
          <ul className="list-style-type: disc; ">
            <li>
              <Link href="/component-examples/component-example-pages-two">
                Component Examples 2
              </Link>
            </li>
          </ul>
        }
        MM: DM: when adding a Dropdown to the page, it does not render the link page, as the there is no option to add a link to the page. i am not sure what is the issue.
      /> */}

      <MyNewJoyOfReactComponent />

      <Divider />

      <div id="hello" className=" bg-slate-100">
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
