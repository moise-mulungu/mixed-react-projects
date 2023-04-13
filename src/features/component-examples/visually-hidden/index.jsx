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
const VisuallyHidden = ({ children, ...delegated }) => {
  const [forceShow, setForceShow] = React.useState(false)
  React.useEffect(() => {
    // DM: todoMM: this if statement ensures that nothing happens if the condition is not met. Re-write this to use a "guard clause" so that the reader doesn't have to scan down to find that out, and so the reader does not need to see unnecessary indentation. hint: search "guard clause" in the repo to see an example of where you did this in the past
    // howtonextjs: nextjs automatically sets NODE_ENV to 'development' (npm run dev) or 'production' (npm run start, after npm run build)
    if (process.env.NODE_ENV !== 'production') {
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
  // DM: todoMM: it is most common to just use ...props when the goal is to catch all/any other props the user may pass, so change 'delegated' to 'props' (right-click Rename Symbol)
  return (
    <span style={hiddenStyles} {...delegated}>
      {children}
    </span>
  )
}
export default VisuallyHidden
