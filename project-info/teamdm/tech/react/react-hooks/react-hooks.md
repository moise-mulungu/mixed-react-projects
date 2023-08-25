# Hooks

Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes. Their names start with use (useState, useEffect, useContext, ...).

## Why did ReactJS release Hooks to replace "class components"? What advantages do Hooks provide over "class components"?

### why did ReactJS release Hooks to replace class components?

Hooks offer more flexibility and they can be reused, especially custom ones in multiple components. With Hooks, you do not need to use lifecycle methods. Side effects can be handled by a single function.

<!-- source: https://circleci.com/blog/class-components-to-react-hooks/#:~:text=Hooks%20offer%20more%20flexibility%20and,handled%20by%20a%20single%20function. -->

### Advantages of Using Hooks over Classes:

- Readability and simplicity In comparison to class-based components, hooks offer a simpler and shorter syntax. The use of hooks enables the creation of functional components without the requirement for classes, making the code simpler to read and comprehend. Hooks produce better code by removing the hassle of handling the `this` keyword, constructor, and lifecycle functions.

- Code Reusability By allowing you to extract and reuse logic across several components, hooks improve code reuse. Without using higher-order components or render properties, you may isolate and interact with stateful behavior with custom hooks.
- More Effective Management With the use of hooks, you may more precisely group and manage related code. To handle distinct concerns individually, such as state management, side effects, and context, you can use various hooks inside of a single component.

- Preventing issues associated with classes The use of classes in React components might result in unclear circumstances regarding the binding of functions, the use of lifecycle methods, and performance improvements. These problems are resolved with hooks, which offer a simpler method of handling state and effects.

- Enhancing Performance Hooks make it easier to improve performance. Utilizing hooks like `useCallback` and `useMemo` allows you to cache functions and values, reducing the need for extra rendering iterations and enhancing component performance.

- Flexibility in the Future React has been promoting hooks as the primary method of writing components in the past few years. The hooks technique is the one that the React team recommends for creating components in React since they are investing in enhancing and increasing their capabilities. Using hooks guarantees compatibility with upcoming React releases.
<!-- source: https://www.geeksforgeeks.org/why-to-use-react-hooks-instead-of-classes-in-reactjs/ -->

(done)DM: do some google research and make an entry here
google search tip: how to restrict your search to one website. Example:
"why React Hooks better site:react.dev"
I would restrict the search to react.dev first for an authoritative opinion. Then remove site:react.dev to search all of the internet to see what other sites say. MM: react.dev does not provide clear details on these two questions, i searched for other resources instead.

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

Custom hooks are helpful utilities that help you reuse code logic. The main difference between custom hooks and regular utility functions is that custom hooks usually involve the use of other in-built hooks and follow the rules of hooks, while the latter is a regular function that can be used anywhere.

<!-- source: https://www.memberstack.com/blog/react-custom-hooks#:~:text=Custom%20hooks%20are%20helpful%20utilities,that%20can%20be%20used%20anywhere. -->

DM: what are they for? In a custom hook function, what is required in order that it be a "custom hook"? (function name starts with 'use', what are the inputs and output, etc.)

<!-- source: https://react.dev/learn/reusing-logic-with-custom-hooks -->

## render() lifecycle method

It is called every time the component needs to be re-rendered, either because its props or state have changed, or because a parent component has been re-rendered.

## render

Rendering is React's process of describing a user interface based on the application's current state and props. The initial render in a React app is the first render when the application starts up, while re-rendering occurs when there is a change in the state (including props) to figure out which parts of the UI need an update.

(done)DM: good. add some more detail about the "react hooks lifecycle" itself. See if there are any good images in google image search for this. Be sure that the info/image is recent, related to hooks, not class components. React Hooks was introduced in 2019, so a lot of articles through 2020 are sometimes still oriented around class components, which we don't want to focus on here. If you see stuff like componentDidMount, you know the article is about old class components. These look good:
https://github.com/Wavez/react-hooks-lifecycle
https://bhanuteja.dev/the-lifecycle-of-react-hooks-component
study them, make sure you get an understanding
(done)DM: the image you put in this directory is WRT the old 'class components', so remove that image and take some images from the two above links.

## commit

After a React Shadow Tree is fully created, the renderer triggers a commit. This promotes both the React Element Tree and the newly created React Shadow Tree as the “next tree” to be mounted. This also schedules calculation of its layout information.
source: https://reactnative.dev/architecture/render-pipeline#:~:text=Commit%3A%20After%20a%20React%20Shadow,calculation%20of%20its%20layout%20information.

(done)DM: this file is about react hooks, so search the term 'commit' in the context of React. You can also look in JoR to see how he explains commit, virtual dom, lifecycle.

## virtual dom

A virtual DOM is a lightweight JavaScript representation of the Document Object Model used in declarative web frameworks such as React, Vue.js, and Elm. Updating the virtual DOM is comparatively faster than updating the actual DOM.

(ok)DM: more info/links:

https://www.telerik.com/blogs/understand-how-rendering-works-react#:~:text=Rendering%20is%20React's%20process%20of,the%20UI%20need%20an%20update.

I threw a lot of stuff in here. Read the links and see when and how React updates the DOM.

You could also search: "interview question react render commit virtual dom" to find some short answers. Again, only look at recent articles, 2022|3 so that you avoid class component info.

## react hook lifecycle

A React component undergoes three different phases in its lifecycle, including `mounting`, `updating`, and `unmounting`. Each phase has specific methods responsible for a particular stage in a component's lifecycle.
react-hook-lifecycle image source: https://github.com/Wavez/react-hooks-lifecycle

(done)DM: good. When you get the React lifecycle images mentioned above, mention the images here, including the source URL for the images.
