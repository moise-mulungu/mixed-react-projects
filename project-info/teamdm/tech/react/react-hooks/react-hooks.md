# Hooks

Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes. Their names start with use (useState, useEffect, useContext, ...).

## Why did ReactJS release Hooks to replace "class components"? What advantagest do Hooks provide over "class components"?

DM: do some google research and make an entry here 
google search tip: how to restrict your search to one website. Example:
"why React Hooks better site:react.dev"
I would restrict the search to react.dev first for an authoritative opinion. Then remove site:react.dev to search all of the internet to see what other sites say.

## Built-in Hooks

Here, we describe the APIs for the built-in Hooks in React. The built-in Hooks can be divided into two parts, which are given below.

### Basic Hooks

- useState : add state to a functional component.

- useEffect: perform side effects in your components. examples: fetching data, directly updating the DOM, and timers.

- useContext: provides function components access to the context value for a context object. To use the useContext hook, you must define a context object in your React component. This context object can be a plain JavaScript object or a custom class that provides data to your component tree. Once you have defined your context object, you can wrap your component tree in a context provider component that provides the data to all its children.
  (done) DM: add some more detail here about what data is in the context object DM: super!

### Additional Hooks

- useReducer: store and update multiple state variables, just like the useState Hook is used for 1 state variable.

- useCallback: returns a memoized version of the callback function that only changes if one of the dependencies has changed.

- useMemo: returns a memoized value. Think of memoization as caching a value so that it does not get recalculated each time the hook runs.

- useRef: persist values between renders. Store a mutable value that does not cause a re-render when the value changes.

(done)DM: somewhere below, add the vocab item "render" - hint: look up the "react component lifecycle" WRT the term "render".

- useImperativeHandle: expose a value, state, or function inside a child component to the parent component.

- useLayoutEffect: is a React hook that can be passed through in a component's render method to cause the react library to consider the page's layout and change its calculations for things like spacing and overflow.

  - (in progress)DM: check nextjs docs for when to use this (if it is still necessary to use with nextjs; it used to be necessary in some situations;)

- useDebugValue: add a label to a custom Hook in React DevTools.

## custom hooks
DM: what are they for? In a custom hook function, what is required in order that it be a "custom hook"? (function name starts with 'use', what are the inputs and output, etc.)

## render() lifecycle method

It is called every time the component needs to be re-rendered, either because its props or state have changed, or because a parent component has been re-rendered.

## render

Rendering is React's process of describing a user interface based on the application's current state and props. The initial render in a React app is the first render when the application starts up, while re-rendering occurs when there is a change in the state (including props) to figure out which parts of the UI need an update.

(done)DM: good. add some more detail about the "react hooks lifecycle" itself. See if there are any good images in google image search for this. Be sure that the info/image is recent, related to hooks, not class components. React Hooks was introduced in 2019, so a lot of articles through 2020 are sometimes still oriented around class components, which we don't want to focus on here. If you see stuff like componentDidMount, you know the article is about old class components. These look good:
https://github.com/Wavez/react-hooks-lifecycle
https://bhanuteja.dev/the-lifecycle-of-react-hooks-component
study them, make sure you get an understanding
DM: the image you put in this directory is WRT the old 'class components', so remove that image and take some images from the two above links.

## commit

DM: this file is about react hooks, so search the term 'commit' in the context of React. You can also look in JoR to see how he explains commit, virtual dom, lifecycle.

## virtual dom

A virtual DOM is a lightweight JavaScript representation of the Document Object Model used in declarative web frameworks such as React, Vue.js, and Elm. Updating the virtual DOM is comparatively faster than updating the actual DOM.

(ok)DM: more info/links:

https://www.telerik.com/blogs/understand-how-rendering-works-react#:~:text=Rendering%20is%20React's%20process%20of,the%20UI%20need%20an%20update.

I threw a lot of stuff in here. Read the links and see when and how React updates the DOM.

You could also search: "interview question react render commit virtual dom" to find some short answers. Again, only look at recent articles, 2022|3 so that you avoid class component info.

## react hook lifecycle

A React component undergoes three different phases in its lifecycle, including mounting, updating, and unmounting. Each phase has specific methods responsible for a particular stage in a component's lifecycle.

DM: good. When you get the React lifecycle images mentioned above, mention the images here, including the source URL for the images.
