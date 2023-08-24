/*
source: https://react.dev/reference/react/useImperativeHandle

- useImperativeHandle is a React hook that allows you to customize the instance value that is exposed to parent components when using ref.
- it takes a ref and a createHandle function as arguments.
- the createHandle function is called only when React DevTools are open.
- the createHandle function is called with the ref as an argument.
- it returns nothing.

*/
import { forwardRef, useRef, useImperativeHandle } from 'react'

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus()
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView()
        },
      }
    },
    []
  )

  return <input {...props} ref={inputRef} />
})

export default MyInput
