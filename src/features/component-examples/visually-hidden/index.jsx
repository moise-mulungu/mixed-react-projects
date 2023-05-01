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
const VisuallyHidden = ({
  children,
  ...delegated // "rest properties"
}) => {
  const [forceShow, setForceShow] = React.useState(false)
  React.useEffect(() => {
    // DM: the NODE_ENV "environment variable" lets the code be aware of which "environment" (dev, stage, prod) you are in.
    if (process.env.NODE_ENV !== 'production') return // guard clause (best example)

    const handleKeyDown = (ev) => {
      // howtoreact: respond to the use of keystrokes
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
