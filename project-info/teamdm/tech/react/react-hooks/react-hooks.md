# Hooks

Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes. Their names start with use (useState, useEffect, useContext, ...).

## Built-in Hooks

Here, we describe the APIs for the built-in Hooks in React. The built-in Hooks can be divided into two parts, which are given below.

### Basic Hooks

- useState : add state to a functional component.

- useEffect: perform side effects in your components. examples: fetching data, directly updating the DOM, and timers.

- useContext: provides function components access to the context value for a context object. DM: add some more detail here about what data is in the context object

### Additional Hooks

- useReducer: store and update multiple state variables, just like the useState Hook is used for 1 state variable.

- useCallback: returns a memoized version of the callback function that only changes if one of the dependencies has changed.

- useMemo: returns a memoized value. Think of memoization as caching a value so that it does not get recalculated each time the hook runs. 

- useRef: persist values between renders. Store a mutable value that does not cause a re-render when the value changes.

DM: somewhere below, add the vocab item "render" - hint: look up the "react component lifecycle" WRT the term "render".

- useImperativeHandle: expose a value, state, or function inside a child component to the parent component. 
- DM: find a simple example and put it in a new file in a new directory. I myself need to better understand this built-in hook.

- useLayoutEffect: is a React hook that can be passed through in a component's render method to cause the react library to consider the page's layout and change its calculations for things like spacing and overflow.

  - (in progress)DM: check nextjs docs for when to use this (if it is still necessary to use with nextjs; it used to be necessary in some situations;)

- useDebugValue: add a label to a custom Hook in React DevTools.
DM: good, pls put an example in a new file in a this directory, as I'm not familiar with this hook.

