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
  const activeStyle = { color: 'bg-sky-400' } // want to add the styling when you hover over each link, but i am unable to do it. // DM: todoMM: google: "site:tailwindcss.com on hover"
  // DM: todoMM: read this: https://nextjs.org/docs/pages/building-your-application/configuring/debugging#client-side-code (just the "client side code") to see how you can debug in Chrome. ;after you open Dev Tools and go to the Sources tab, you may need to to a hard-reload.
  // // stops execution here and you can see the value of activeStyle in the browser
  const anchorLinks = [
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
  return (
    <>
      {/*
      activeStyle.hover && (

        <a href="#hello">Hello</a> | <a href="#icon-dropdowns">Icon Dropdowns</a> |{' '}
        <a href="#contact-cards">Contact Cards</a> | <a href="#avatar-set">Avatar Set</a> |{' '}
        <a href="#side-note">Side Note</a> |{' '}
        <a href="#movie-ratings-animations">Movie Ratings Animations</a> |{' '}
        <a href="#click-ball-game">Click Ball Game</a> | <a href="#counter">Counter</a> |{' '}
        <a href="#game-character">Game Character</a> 
        )
        */}

      <>
        {/*(done???; MM: yes it's done. on top i created an array called 'anchorLinks', then below i mapped over it. is it what you meant here???) DM: good, I like your use of kebab case here! Now, put the names into an array['Hello','Icon Dropdowns', ...] and use [].map to create each anchor link. write code to create the anchor link text from the name, i.e., use "Contact Cards" to create "#contact-cards".   */}
        {anchorLinks.map((link) => (
          <a className={`hover:${activeStyle.color}`} key={link} href={`#${link}`}>
            {link} | {''}
          </a>
        ))}
        {/* <a href="#hello">Hello</a> |<a href="#icon-dropdowns">Icon Dropdowns</a> |
        <a href="#contact-cards">Contact Cards</a> |<a href="#avatar-set">Avatar Set</a> |
        <a href="#side-note">Side Note</a> |
        <a href="#movie-ratings-animations">Movie Ratings Animations</a> |
        <a href="#click-ball-game">Click Ball Game</a> |<a href="#counter">Counter</a> |
        <a href="#game-character">Game Character</a> */}
      </>

      {/* DM: try this sometime: instead of a separate page, put a searchable dropdown here so it is easy to find an example by searching on the name of the example in the dropdown. You can use src/ui/form/dropdown to build the searchable dropdown. 
      this is a better place to do it
      (done)DM: todoMM: don't do the dropdown for now, but rather do this step first: make a list of links to each example below that looks like this:
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
