// Sure, let's say you wanted to manually set the focus to an input field when a component mounts. Here's an example:


import React, { useEffect, useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    // This will set the focus to the input field when this component mounts
    inputRef.current.focus();
  }, []); // Empty dependency array ensures this runs on mount and not on updates

  return (
    <div className="App">
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default App;

/*
In this example, we're using `useRef` to reference the DOM node directly, and `useEffect` to run the side effect of focusing the input field when the component renders.

This is an example of manipulating the DOM inside `useEffect`. But Remember, you should avoid direct DOM manipulations in React as much as possible, as it can break the declarative nature of React. But for some cases (like focusing on an input field, integrating with third-party DOM libraries etc.), this can be necessary.
*/