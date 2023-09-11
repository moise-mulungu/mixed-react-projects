import { myResume } from '@/constants/portfolio/content/skills'

export default function ResumeButton({ buttonText }) {
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
      data-testid="resume-button"
    >
      <button className="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        {buttonText}
      </button>
    </a>
  )
}
