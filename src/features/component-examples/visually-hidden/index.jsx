// this component allows us to place text inside any button that will only be made available to people using screen readers. i got this from the joy-of-react, but it's very complex. Yes, it is advanced React stuff
import React from 'react'
const hiddenStyles = {
  display: 'inline-block',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
}
// howtoreact: access the 'children' passed as props to a component. 'children' is everything between <MyComponent> and </MyComponent> in <MyComponent>text <span>text</span></MyComponent>
// howtoreact: gather all/any un-handled props the user may pass, then pass them on (delegate them) to a component used in the JSX returned by this component
const VisuallyHidden = ({ children, ...delegated }) => {
  const [forceShow, setForceShow] = React.useState(false)
  React.useEffect(() => {
    // DM: todoMM: this if statement ensures that nothing happens if the condition is not met. Re-write this to use a "guard clause" so that the reader doesn't have to scan down to find that out, and so the reader does not need to see unnecessary indentation. hint: search "guard clause" in the repo to see an example of where you did this in the past
    // howtonextjs: nextjs automatically sets NODE_ENV to 'development' (npm run dev) or 'production' (npm run start, after npm run build)
    // I got this from the joy-of-react, i need to understand the concept behind this.
    // DM: THere's not much to it. this "environment variable" lets the code be aware of which "environment" (dev, stage, prod) you are in.
    if (process.env.NODE_ENV !== 'production') {
      // to make this line of code guard clause, should i change 'production' to 'development'? or just change the not operator to the beginning of the expression as i put above? The goal is to reduce indenting and show at the top of the function the conditions that must be met in order to execute the rest of the function. So, you can leave the "operands" as they are, but just change the operator to !== and return immediately if the logical expression evaluates to true.(read, but the answer is in progress) hey, let's finish this. Look at  the other examples of using a guard clause, and see if you con figure out how to do ti here. You're just have to return immediately if NODE_ENV is not 'production'(still can't figure it out)
      // howtoreact: respond to the use of keystrokes

      const handleKeyDown = (ev) => {
        if (ev.key === 'Alt') {
          setForceShow(true)
        }
      }
      const handleKeyUp = (ev) => {
        if (ev.key === 'Alt') {
          setForceShow(false)
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
      // howtoreact: clean up event handlers when the component unmounts
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
      }
    }
    // howtoreact: perform a side effect only once, when the component mounts, by using an "empty dependency array"
  }, [])
  if (forceShow) {
    return children
  }
  return (
    <span style={hiddenStyles} {...delegated}>
      {children}
    </span>
  )
}
export default VisuallyHidden
