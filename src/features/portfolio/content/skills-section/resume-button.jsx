//(done) DM: todoMM: store in constants and import it from constants. DM: todoMM: I think this is not done, because the resumer URL is still here and not imported from constants.

import { myResume } from '@/constants/portfolio/content/skills'

export default function ResumeButton() {
  /* const handleClick = () => {
    // e.preventDefault() , may i call preventDefault here while i just called window.open ?
    // the handleClick has to send me to the resume page

    window.open(myResume, '_blank')
  } */
  return (
    <a
      href={myResume}
      target="_blank" // open in a new tab
      rel="noreferrer" // noreferrer is a security measure needed when you use target _blank
    >
      <button className="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Get my Resume
      </button>
    </a>
  )
}
