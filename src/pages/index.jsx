import Link from '@/ui/link'

export default function Pages() {
  return (
    <div className="m-4">
      <h1>All the things!</h1>
      {/* DM: todoMM: add links for all items at this same level in the pages dir. ex: portfolio, component-examples (not explorer) 
      
      DM: todoMM: here, add links instead of components. 
                  it's always safe to follow the existing pattern, if you're not sure. Follow the same pattern. 
                  
                  also, always be sure that the app will run after your edits. I always have the app running when I'm editing anything (except ./project-info, which is not connected to ./src/pages). If you can't get it running in a reasonable amount
                  of trying, then comment out the code that breaks the app and leave me a message, I'll troubleshoot.
                  So, at work, the app always should run in the development branch.
      */}
      <Link href="/component-examples">Component Examples</Link>
      <br /> {/* don't do this! */}
      <Link href="/ui-examples">UI Examples</Link>
    </div>
  )
}
