/*
MM: DM: Sider prompt: "an example of a "plugin" that is not managed by React using react useEffect hook"

Here is an example of a plugin that is not managed by React using react useEffect hook:

Let's consider the Google Maps API - As Google Maps is not built to work with React out of the box, a useEffect hook would be useful:

*/

import React, { useEffect, useRef } from 'react';

function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef();
  
  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(ref.current, options);
      onMount && onMount(map, onMountProps);
    };
  
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
    
    return () => window.google && window.google.maps && 
        window.google.maps.event.clearInstanceListeners(ref.current);
  }, [options, onMount, onMountProps]);

  return (
    <div
      style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  );
}

/*
This is an example of how to integrate Google Maps into a React App, which is not managed by React and relies on direct manipulation of the DOM and global state.

You can hook into the lifecycle with the useEffect hook to initiate the map instance as soon as the component is mounted, and clean it up when the component is unmounted (by removing the event listeners).
*/

/*
Sider prompt: "explain all the steps to this code"

Here's a step-by-step explanation:

1. `useRef` is invoked to create a mutable `ref` object and assign it to the `ref` variable. The returned object will persist throughout the entire lifecycle of the component.

2. `useEffect` hook is called, which accepts a function that contains imperative, possibly effectful, code. The function passed to `useEffect` will run after the render is committed to the screen.

3. Inside the effect hook, a function `onLoad` is defined. It creates a new Google Map instance with the DOM node referred to by `ref.current` as the container and `options` for the map settings. If `onMount` prop is provided, it will be called with the map instance as the first argument and `onMountProps` as the second argument.

4. An `if` statement checks whether Google Maps API script is already loaded (by looking for `window.google`). If not, it creates a new `script` element, sets its `src` to Google Maps API URL, and attaches it to the `document.head`. An event listener for the `load` event is added to the script element, which will call `onLoad` function when the script is loaded.

5. If Google Maps API is already loaded, `onLoad` is immediately called.

6. The cleanup function for the effect is returned. It will be called when the component will unmount, and when the dependencies change causing the effect hook to be rerun. It removes all event listeners set on the `ref.current` (the container of the map instance) which will prevent any possible memory leaks.

7. The dependencies for the `useEffect` hook are specified in an array - `options`, `onMount`, and `onMountProps`. The hook will rerun whenever any of these dependencies changes.

8. The component returns a `div` to be rendered. The `style` attribute sets the dimensions and margin of the `div` which will contain the map. The `ref` (created by `useRef`) is attached to the `div`, and it is given any `className` passed down as prop. This `div` will serve as the container for the Google Map instance to be rendered into.

Key: The part in the code that refers to `YOUR_API_KEY`, should be replaced with your own Google Map API key for the map to load correctly.
*/
