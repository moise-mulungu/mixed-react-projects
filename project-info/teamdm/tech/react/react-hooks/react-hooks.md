# Hooks

Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes. Their names start with use (useState, useEffect, useContext, ...).

## Built-in Hooks

Here, we describe the APIs for the built-in Hooks in React. The built-in Hooks can be divided into two parts, which are given below.

### Basic Hooks

- useState
- useEffect
- useContext

### Additional Hooks

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
  - DM: check nextjs docs for when to use this (if it is still necessary to use with nextjs; it used to be necessary in some situations;)
- useDebugValue

DM: great! for each of the additional hooks above, add a short note about when to use them
