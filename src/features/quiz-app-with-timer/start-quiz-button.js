// (ok)DM: never import React from 'react' in NextJS
// import React from 'react'
//MM: DM: the nextjs styles documentation: https://nextjs.org/docs/app/building-your-application/styling/css-modules
import button from './styles/button.module.css'

export default function StartQuizButton() {
  return <button className={button.start_btn}> Start Quiz</button>
}
