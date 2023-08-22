# rules of hooks

Don’t call Hooks inside `loops`, `conditions`, or `nested functions`. Instead, always use Hooks at the top level of your React function, before any early returns.

## MM: todoMM: 
DM: Moise, put a specific info about what todo here, if it is still applicable

https://react.dev/warnings/invalid-hook-call-warning (DM: always add a source URL if you copy code into the repo)

```js
function Counter() {
  // ✅ Good: top-level in a function component
  const [count, setCount] = useState(0)
  // ...
}

function useWindowWidth() {
  // ✅ Good: top-level in a custom Hook
  const [width, setWidth] = useState(window.innerWidth)
  // ...
}
```

## not to do

```js
function Bad({ cond }) {
  if (cond) {
    // 🔴 Bad: inside a condition (to fix, move it outside!)
    const theme = useContext(ThemeContext)
  }
  // ...
}

function Bad() {
  for (let i = 0; i < 10; i++) {
    // 🔴 Bad: inside a loop (to fix, move it outside!)
    const theme = useContext(ThemeContext)
  }
  // ...
}

function Bad({ cond }) {
  if (cond) {
    return
  }
  // 🔴 Bad: after a conditional return (to fix, move it before the return!)
  const theme = useContext(ThemeContext)
  // ...
}

function Bad() {
  function handleClick() {
    // 🔴 Bad: inside an event handler (to fix, move it outside!)
    const theme = useContext(ThemeContext)
  }
  // ...
}

function Bad() {
  const style = useMemo(() => {
    // 🔴 Bad: inside useMemo (to fix, move it outside!)
    const theme = useContext(ThemeContext)
    return createStyle(theme)
  })
  // ...
}

class Bad extends React.Component {
  render() {
    // 🔴 Bad: inside a class component (to fix, write a function component instead of a class!)
    useEffect(() => {})
    // ...
  }
}
```
