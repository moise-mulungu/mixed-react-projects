
# howtoreact: difference between render and update(run)

note: "It is common to think that setState will trigger a re-render. But this is not always the case. If the value doesn’t change, React will not trigger a re-render." 

"value" is determined by Object.is() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
{} and [] are objects and their 'value' is really the reference to the location in memory, that's why {} !== {}  because each {} is a different location in memory. So the 'value' of any object ({}, [], /regex/, etc.) is the reference to the location in memory, while the 'value' of primitives (number, string, true, false, etc.) is the primitive value itself.
- that's why in JS, functions are "first-class" objects/citizens (unlike in some other languages) and functions can be passed to other functions, such as the "callbacks" that you pass to built-in array functions like array.map( () => {} )

update/run: happens when the state or props change (or the parent component renders)
render: when the value of the state/prop variable changes

```js

export default function myFunc() {
  const [primitiveValue, setPrimitiveValue] = useState(1)
  const [objectValue, setObjectValue] = useState({})
  // DM: Moise, try to answer: which of the next 6 lines causes this React component to render, and which causes it to only update/run?
  setPrimitiveValue(prev => 1) // 
  setPrimitiveValue(prev => prev) // 
  setPrimitiveValue(prev => prev + 1) // 
  setObjectValue(prev => prev) // 
  setObjectValue(prev => {}) // 
  setObjectValue(prev => {...prev, a: 1}) // 
  return <div>{value} - {JSON.stringify(objectValue, null, 2)</div>
}

```