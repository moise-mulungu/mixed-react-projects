# Hooks

Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes. Their names start with use (useState, useEffect, useContext, ...).

## Built-in Hooks

Here, we describe the APIs for the built-in Hooks in React. The built-in Hooks can be divided into two parts, which are given below.

### Basic Hooks

- useState : useState is React Hook that allows you to add state to a functional component.

- useEffect: The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

- useContext: The useContext Hook provides function components access to the context value for a context object.

### Additional Hooks

- useReducer: is used to store and update states, just like the useState Hook.

- useCallback: is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

- useMemo: returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated.

- useRef: allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.

- useImperativeHandle: allows us to expose a value, state, or function inside a child component to the parent component.

- useLayoutEffect: is a React hook that can be passed through in a component's render method to cause the react library to consider the page's layout and change its calculations for things like spacing and overflow.

  - (in progress)DM: check nextjs docs for when to use this (if it is still necessary to use with nextjs; it used to be necessary in some situations;)

- useDebugValue: is a React Hook that lets you add a label to a custom Hook in React DevTools.

(done)DM: great! for each of the additional hooks above, add a short note about when to use them
