
// DM: great! making some edits for clarity, grammar, etc. This will turn into a permanent knowledge-base for you, so going to polish it as we go along.

# vocabulary term
* meaning 1
* meaning 2 (if needed)
* example
```jsx
theJoyOfReact()
```
## why is react a platform agnostic?

React, often called ReactJS, is a platform-agnostic JavaScript library used to build user interfaces (UI). Agnostic means that React, the core technology itself, doesn't care whether your project is a web app or native app
<!-- For my understanding, the same code used in ReactJS can be used in other react frameworks such as react-native, ...
Correc. there may be some differences, but much code can be shared. . Ionic React is another alternative for the scenario of 
 -->

## a few examples
* components 'run'
* components 'render'
* state - local state
* props - parent's state
* lifting state

## JavaScript vs React

``` js
import React from 'react';
import { createRoot } from 'react-dom/client';

// DM: as long as it's still very readable, one line is easier/faster to read than multiple short lines.
// Hello World in JavaScript (no JSX)
const element = React.createElement('h1', { id: 'hello' }, 'Hello World!');
// equivalent Hello World in React
const element = (<h1 id="hello">Hello World!</h1>);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);
```
## expression slot
Is a slot that we can put any JavaScript expression into, and it will be forwarded along untouched by react.
// DM: excellent - this is why I wanted you to list vocabulary. Because in this case, Comeau made up his own vocab. I did a google search a while back and did not find widespread use of this term at all. But, let's leave it here for a while, let it percolate, so to speak. Maybe we'll come to like it.
// DM: todoDM: research and find the more common word for "expression slot"

## JSX case-sensitive attributes (props)

All attributes need to be camelCase, except for `data` and `ARIA`
e.g: `data-test-id`, and `aria-label` 
* ???MM: How to use data attributes in a react code?
  * DM: in the context of JSX, "attributes" means props `<MyComponent myProp="I am an attribute of MyComponent" >`
    * the wider meaning of "attribute" is from XML, HTML `<tag attribute="value">`

## mechanisms of reuse
* A mechanism is reusable, if it can be employed for several *domains* and tasks.
* DM: todoDM: read more on this. usability UX? usability/reusability balance
* Focusing on usability can lead to application-specific mechanisms, that is, can reduce reusability
* A partial is a chunk of HTML that can be inserted into another HTML document.
* In CSS, a class is the mechanism we have for reuse.
* In JavaScript, a function is the *mechanism of reuse*
* In react, the reuse mechanism is the component. But, a component all the three reuse mechanisms into one.

## DM: todoMM: render props
Is a technique for sharing code between React components using a prop whose value is a function

## fragments
A fragment is 
* a special React component that does not produce a DOM node * lets you group a list of children without adding extra nodes to the DOM
`<React.Fragment></React.Fragment>` or with an empty tags `<></>`.
