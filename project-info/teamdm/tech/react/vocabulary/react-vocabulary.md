## why is react a platform agnostic?

React, often called ReactJS, is a platform-agnostic JavaScript library used to build user interfaces (UI). Agnostic means that React, the core technology itself, doesn't care whether your project is a web app or native app

<!-- For my understanding, the same code used in ReactJS can be used in other react frameworks such as react-native, ...
Correc. there may be some differences, but much code can be shared. . Ionic React is another alternative for the scenario of
 -->

## a few examples

- components 'run'
- components 'render'
- state - local state
- props - parent's state
- lifting state

## JavaScript vs React

```js
import React from 'react'
import { createRoot } from 'react-dom/client'

// DM: as long as it's still very readable, one line is easier/faster to read than multiple short lines.
// Hello World in JavaScript (no JSX)
const element = React.createElement('h1', { id: 'hello' }, 'Hello World!')
// equivalent Hello World in React
const element = <h1 id="hello">Hello World!</h1>

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(element)
```

## expression slot

Is a slot that we can put any JavaScript expression into, and it will be forwarded along untouched by react.
// DM: excellent - this is why I wanted you to list vocabulary. Because in this case, Comeau made up his own vocab. I did a google search a while back and did not find widespread use of this term at all. But, let's leave it here for a while, let it percolate, so to speak. Maybe we'll come to like it.
// DM: todoDM: research and find the more common word for "expression slot"

## JSX case-sensitive attributes (props)

All attributes need to be camelCase, except for `data` and `ARIA`
e.g: `data-test-id`, and `aria-label`

- ???MM: How to use data attributes in a react code?
  - DM: in the context of JSX, "attributes" means props `<MyComponent myProp="I am an attribute of MyComponent" >`
    - the wider meaning of "attribute" is from XML, HTML `<tag attribute="value">`

## mechanisms of reuse

- A mechanism is reusable, if it can be employed for several _domains_ and tasks.
- DM: todoDM: read more on this. usability UX? usability/reusability balance
- Focusing on usability can lead to application-specific mechanisms, that is, can reduce reusability
- A partial is a chunk of HTML that can be inserted into another HTML document.
- In CSS, a class is the mechanism we have for reuse.
- In JavaScript, a function is the _mechanism of reuse_
- In react, the reuse mechanism is the component. But, a component all the three reuse mechanisms into one.

## render props

Is a technique for sharing code between React components using a prop whose value is a function

## fragments

A fragment is

- a special React component that does not produce a DOM node \* lets you group a list of children without adding extra nodes to the DOM
  `<React.Fragment></React.Fragment>` or with an empty tags `<></>`.

## props

Props are read-only variables in a component. Collectively, props is an object which stores the value of attributes of a React Component tag and work similar to the HTML attributes. It allows passing data from a component to its child components.

```js
export default function myComponent(props) { const { prop1, prop2 } = props; ... } // props is an object
// equivalent to:
export default function myComponent({ prop1, prop2} ) {  ... } // here, the props object is deconstructed and the values assigned to the variables prop1, prop2
```

## state

The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event (ex: the parent renders; a prop changes). It is the heart of the react component which determines the behavior of the component and how it will render.
Or whenever we have “dynamic” values, we need to use React state. State is used for values that change over time.

## useState hook

Is a function for creating a `state` variable and a state updater function. It takes a single argument as an initial `value` and returns an array containing two values(`valueName` and `setValueName`) by using `destructuring assignment`.

## initial render

An initial render is when React evaluates a component creating the 'virtual DOM' DM: todoDM: more on the component lifecycle

## subsequent renders or re-rendering

is when React calls the function component whose state update triggered the render.
DM: todoDM: more on the component lifecycle.

## controlled vs uncontrolled components

In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
Or controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.

## side effect

A React side-effect occurs when we use something that is outside the scope of React.js in our React components e.g. data fetching, setting up a subscription, and manually changing the DOM.
Hooks: useEffect for all side effects

### note on react.dev site

Once you get comfortable with a React concept, think of this site is the most authoritative reference: https://react.dev. There is a learning section and a reference section. Be relaxed when you read react.dev site. It is very condensed. You will feel like you don't really know React when you read all the details at react.dev site. Try to see this is a positive thing, that you know enough to look around react.dev and have an idea of what it is about. React is difficult to master, but very powerful, which is why React jobs pay well. (read; thanks for this resource).

## setter function (State Setter Callback Function)

State Setter Callback Function is a function that accepts the previous value as an argument and returns an updated value. If the previous state is not used to compute the next state, it passes the next state value as the argument for the state setter.

## component instance (RE class components)

A React component instance is a component that uses classes to instantiate a react component. You can either use multiple instances or just a single instance in your React application. Each instance can perform individually, making them a requirement when creating an application. Instances are duplicates of the original class

note: functional components (modern React) are not instantiated, but rather just called/invoked just like any function

## local state

encapsulates the dataflow within the component. Using local state only in apps is much less manageable and debuggable

## global state

Global state is when the state is accessible by every element/component of the app.

But an important opinion is that it can possibly pollute the whole app since it echoes in every component that accesses it.

Global state must be handled properly. State management tools such as redux, zustand, xstate, mobx, recoil, jotai make this possible.

## atomic component

Atomic components are the smallest and most basic building blocks of a design system. They are the simplest and most self-contained components that can't be broken down any further, e.g : `buttons, inputs, labels, and other similar UI elements`

## reconciliation

The reconciliation algorithm is the process React uses to update the DOM in response to changes in the component state. When a component’s state changes, React will re-render the component and its children. The reconciliation algorithm is responsible for determining what has changed in the component tree and updating the DOM accordingly.

## react hooks

**React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.**
React provides a bunch of standard in-built hooks, such as useState, to manage states. useState returns a stateful value and an updater function to update it.

```js
const mySimpleReactFunction = () => return <div>Hello!</div>
const myStatefulReactFunction = () => {
  const [counter, setCounter] = useState(0)
  setCounter(prev => prev + 1)
  return <div>Hello, for the {counter}th time!</div>
} //(cool) DM: remind me tomorrow to talk about what this component will do. It won't work in a good way. Can you guess what the value of 'counter' will be? How many times will this functional component run?
```

### react hook rules

1. Only Call Hooks at the Top Level:

   Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.

2. Only Call Hooks from React Functions:
   Don’t call Hooks from regular JavaScript functions. Instead, you can:

✅ Call Hooks from React function components.
✅ Call Hooks from custom Hooks (we’ll learn about them on the next page).
By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code. Linters will assume that if a function name starts with "use" that it is a custom hook.

### Eslint plugin

React team released an ESLint plugin called `eslint-plugin-react-hooks` that enforces these two rules. You can add this plugin to your project. This plugin is included by default in `Create React App`.
DM: is it included in NextJS? MM: I don't think so! but i think you'll have to add next lint as a script to package.json. src: https://nextjs.org/docs/app/building-your-application/configuring/eslint DM: ok, I'll look more into it when I migrate this repo to nextjs 13

## when it is appropriate to not list in the "dependency array" all the useEffect dependencies

The empty array indicates that the useEffect doesn't have any dependencies on any state variables.
Examples:

```js
// howtoreact: empty dependency array examples
useEffect(() => {}, []) // callback will run once, when the component mounts
useEffect(() => {}) // callback will run each time the component runs
useEffect(() => {
  const handle = setTimeout(() => {
    setUsername('hello world') // runs once when the component mounts
  }, 4000)
  const uponUnmountCleanupFunc = () => {
    // why? Avoid memory leaks.
    clearTimeout(handle) // runs once when the component unmounts
  }
  return uponUnmountCleanupFunc
}, [])
```

```js
// DM: add a JavaScript vocabulary entry: "currying" with one example function
// DM: study this a bit and lets talk about it (complicated, but valid syntax)
const useComponentWillUnmount = (onUnmountHandler) =>
  React.useEffect(() => () => onUnmountHandler(), [])
// DM: copy the above statement and paste into the line below, then insert newlines so that it is more readable

// usage:
const UnMounter = () => {
  useComponentWillUnmount(() => console.log('Component will unmount'))
  return <div>Check the console!</div>
}
```

## react component

react as a "component-based framework"

what is a component? components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
Components come in two types, Class components and Function components.

### Function components

Functional component is just a simple javascript function; it accepts the data in the form of props and returns the react element.

### Class components

Class components make use of ES6 classes and extend the Component class in React.

- note: React Hooks replaced "class components" as the preferred way to implement React.

## built-in hooks VS custom hooks

React comes with several built-in Hooks like useState, useContext, and useEffect. Sometimes, you’ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. You might not find these Hooks in React, but you can create your own Hooks for your application’s needs.
src: https://react.dev/learn/reusing-logic-with-custom-hooks


## A React component instance

It uses classes to instantiate a react component. You can either use multiple instances or just a single instance in your React application. Each instance can perform individually, making them a requirement when creating an application. Instances are duplicates of the original class.