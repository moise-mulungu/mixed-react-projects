
***howtojs: error: react:: too many re-renders; use useEffect hook and put state changes inside it***
### Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
* The React error `Too many re-renders. React limits the number of renders to prevent an infinite loop` happens due to the state update in the main body of the component or invoking an event handler, instead of passing as a function

(done)DM: good, put an example here because this is not clear to me. DM: it may seem confusing, as I have said that comments apply to the next line. In this case, I was asking for an example right here, on the next line, for the first howto RE re-renders
```js
  import React, { useState, useEffect } from 'react';

  const ExampleComponent = () => {
    const [count, setCount] = useState(0);

// (MM: you are right, i just realized how it is important to double check everything before committing. done)DM: this useEffect would really cause an infinite loop. Do some asking copilot about this useEffect. You might have to change this file to a .js file in order to get Copilot help. DM: good you changed to the updater-type argument to setCount in both places. 
//(done) DM: for this example to be helpful when you see the error message in the future then search the repo and you arrive here, best if you show a before and after example. So, show the useEffect with the error that causes the endless loop (commented out) and below it the correct useEffect (which is what you have now). Also make a note as to why you need the useEffect (i.e., to initialize the count to 1 on the first render)
// useEffect hook is used to update the count state. [count] is specified as the dependency array for the effect to prevent the infinite loop of re-renders.

/*
with infinite loop:
  useEffect(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count +1)}>Increment</button>
        </div>
    </div>
  )
 export default ExampleComponent;
*/
   useEffect(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

    return (
      <div>
        <h1>{count}</h1>
       <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      </div>
    );
  };

  export default ExampleComponent;

```

DM: if I intended to refer to the whole next howto, i'd put a comment here, immediately above it, with not empty line between.
***howtojs: error: react:: TypeError: cannot read properties of undefined; add an undefined check on the variable before you access a property on it***
### TypeError: cannot read properties of undefined (reading 'string')

  Example:

  ```js
  let myObj;
  console.log(myObj.property); // TypeError: cannot read properties of undefined
  ```

  Explanation:

  In this example, we declare a variable `myObj` but do not assign any value to it. When we try to access a property (`property`) of `myObj`, we get a TypeError because `myObj` is undefined and does not have any properties.

  Solution:

  To fix this error, we need to assign a value to `myObj` before trying to access its properties. For example:

  ```js
  let myObj = { property: "value" };
  console.log(myObj.property); // "value"
  ```

  In this case, we assign an object with a `property` key and a value to `myObj`, and then we can access `myObj.property` without getting a TypeError.

* The `cannot read property of undefined` error happens when you try to access a property or method of a variable that is undefined.


Fix: use "?." (optional chaining operator) instead the "." (property access operator) myObj?.myProperty
```js
const myValue = myObj?.myProperty
if (myValue === undefined) {
	// do something, such as throw an error, or use a default value
}
```

DM: todoMM: put here another example solution, that you Google or ask Copilot AI

***howtojs: error: react:: Objects are not valid as a React child ; map over the object by using Object.entries() to change it it into an array***
### Error: Objects are not valid as a React child (found: object with keys {temp, feels_like, temp_min, temp_max, pressure, humidity}). If you meant to render a collection of children, use an array instead.
* The React. js error `Objects are not valid as a React child` occurs when we try to directly render an object or an array in our JSX code. To solve the error, use the ***map() method to render arrays or access properties*** on the object in your JSX code

DM: todoMM: great! Put here a concise example of a solution

***howtojs: error: react:: hydration failed because the initial UI does not match what was rendered on the server ; check all elements in the app to respect the HTML structure***
### Error: Hydration failed because the initial UI does not match what was rendered on the server.
* this error occurs when the initial UI does not match what was rendered on the server, typically occurs when the initial HTML rendered on the server does not match the HTML rendered on the client side after hydration".
DM: this happens in NextJS a lot, so if you make sure AI has the context of NextJS, you'll get better solutions.

DM: Going forward, when you write one of these howtojs, it is likely that you just had the same problem while debugging. So, put here below the howtojs line some example code showing the problem and the solution. 

DM: todoMM: ask Copilot AI what is a good NextJS solution. Also, search your repo on "hydration failed" and you'll find this error has been mentioned a few times, so you can include any mentioned solutions here.

***howtojs: warning: react:: react does not recognize the `xyz` prop on a DOM element ; double check the proper spelling, the case of the property name, then change it***
### Warning: React does not recognize the `xyz` prop on a DOM element
   <!-- * i fixed this by globally searching `data-testId` and replaced it with `data-testid` in the src/features/portfolio/content/skills-section/resume-button.jsx file
    * i replaced also `objectFit` with `objectfit` in the src/features/portfolio/content/project-section/project-cards.jsx file -->
* this error occurs when the prop name is in camelCase, while the DOM would need a lowercase

(done)DM: the info after the howtojs line does not provide any further information, so delete it and explain the solution. Or is do you mean: "double check the proper spelling and case of the property name" ? Are all DOM element properties never in camelCase, because that:s what your howtojs solution implies?


***howtojs: warning: react::  each child in a list should have a unique "key" prop ; add a value to the key that will be unique for each child in your map() function***
### Warning: Each child in a list should have a unique "key" prop
* this happens when you did not specify a key for each element in a map() function

```js
import React from 'react';

// a list of items using the map function where each item has a unique id property.
const ItemList = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return (
    <div>
      {items.map(item => (
        <Item key={item.id} name={item.name} />
      ))}
    </div>
  );
};

const Item = ({ name }) => {
  return <div>{name}</div>;
};

export default ItemList;

```
// DM: what is this example code demonstrating?(MM: this a code where i used the key to resolve the error `each child in a list should have a unique "key" prop` above. you told me in the report file to put those examples of the repo here.)
```js
import { otherSkillsTitle, otherSkills } from '@/constants/portfolio/content/skills'
import SkillData from '@/ui/empty-starter-component'

const OtherSkills = () => {
  return (
    <section className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-center text-gray-700 text-2xl font-medium py-2">{otherSkillsTitle}</h2>
      <ul className="flex flex-wrap justify-evenly items-center mt-2">
        {otherSkills.map(({ name, Icon }) => (
          <li key={name} className="m-2 p-2 bg-gray-100 rounded-md shadow">
            <SkillData itemName={name} ItemIcon={Icon} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OtherSkills
```

