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
import AnchorLinks from '../component-examples/components/anchor-links'

import Divider from '@/ui/divider'
// import { colors } from 'react-select/dist/declarations/src/theme'

export default function ComponentExamples() {
  // want to add the styling when you hover over each link, but i am unable to do it. // DM: todoMM: google: "site:tailwindcss.com on hover"
  // DM: todoMM: read this: https://nextjs.org/docs/pages/building-your-application/configuring/debugging#client-side-code (just the "client side code") to see how you can debug in Chrome. ;after you open Dev Tools and go to the Sources tab, you may need to to a hard-reload.
  // // stops execution here and you can see the value of activeStyle in the browser
  const exampleAnchorLinks = [
    'hello',
    'icon-dropdowns',
    'contact-cards',
    'avatar-set',
    'side-note',
    'counter',
    'counter2',
    'click-ball-game',
    'select-languages',
    'multiple-checkbox',
    'game-character',
    'movie-ratings-animations',
  ]

  const color = 'hover:bg-sky-400'
  return (
    <>
      {/*
        DM: todoMM: we see repeated code, so make a separate component that will work in both locations. See the starter component I put in the ./components directory. Then, use it like this in both places:
        <AnchorLinks exampleAnchorLinks={exampleAnchorLinks} />
        */}

      <>
        <AnchorLinks anchorLinks={exampleAnchorLinks} styleColor={color} />
        {/* {exampleAnchorLinks.map((link) => {
          const linkText = link
            .replace(/[-]/g, ' ')
            .split(' ')
            .map((word) => {
              return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
            })
            .join(' ')
          return (
            <a className={`hover:${activeStyle.color}`} key={link} href={`#${link}`}>
              {linkText} | {''}
            </a>
          )
        })} */}
      </>

      {/* DM: try this sometime: instead of a separate page, put a searchable dropdown here so it is easy to find an example by searching on the name of the example in the dropdown. You can use src/ui/form/dropdown to build the searchable dropdown. 
      this is a better place to do it
      (done)DM: don't do the dropdown for now, but rather do this step first: make a list of links to each example below that looks like this:
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
      <div id="icon-dropdowns" className=" bg-slate-100">
        <IconDropdowns />
      </div>
      <div id="contact-cards" className=" bg-slate-100">
        <ContactCards />
      </div>
      <Divider />
      <div id="avatar-set" className=" bg-slate-100">
        <AvatarSet />
      </div>
      <Divider />
      <div id="side-note" className=" bg-slate-100">
        <SideNote />
      </div>
      <Divider />
      <div id="movie-ratings-animations" className=" bg-slate-100">
        <MovieRatingsAnimations />
      </div>
      <Divider />
      <div id="click-ball-game" className=" bg-slate-100">
        <ClickBallGame />
      </div>
      <Divider />
      <div id="counter" className=" bg-slate-100">
        <Counter />
      </div>
      <Divider />
      <div id="counter2" className=" bg-slate-100">
        <Counter2 />
      </div>
      <Divider />
      <div id="select-languages" className=" bg-slate-100">
        <SelectLanguages />
      </div>
      <Divider />
      <div id="multiple-checkbox" className=" bg-slate-100">
        <MultipleCheckbox />
      </div>
      <Divider />
      <div id="game-character" className=" bg-slate-100">
        <GameCharacter />
      </div>
      <Divider />
    </>
  )
}
