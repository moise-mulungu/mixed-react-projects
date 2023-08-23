// source: https://react.dev/reference/react/useImperativeHandle
import { useRef } from 'react'
import MyInput from './my-input'

export default function Form() {
  const ref = useRef(null)

  function handleClick() {
    ref.current.focus()
    // This won't work because the DOM node isn't exposed:
    // ref.current.style.opacity = 0.5;
  }

  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  )
}
