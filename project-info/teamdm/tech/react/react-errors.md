
***howtojs: error: react:: too many re-renders; use useEffect hook and put state changes inside it***
### Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
* The React error `Too many re-renders. React limits the number of renders to prevent an infinite loop` happens due to the state update in the main body of the component or invoking an event handler, instead of passing as a function

DM: todoMM: good, put an example here because this is not clear to me

***howtojs: error: react:: TypeError: cannot read properties of undefined; add an undefined check on the variable before you access a property on it***
### TypeError: cannot read properties of undefined (reading 'string')
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

***howtojs: warning: react:: react does not recognize the `xyz` prop on a DOM element ; change the camelCase prop names to lowercase***
### Warning: React does not recognize the `xyz` prop on a DOM element
* this error occurs when the prop name is in camelCase, while the DOM would need a lowercase

DM: todoMM: the info after the howtojs line does not provide any further information, so delete it and explain the solution. Or is do you mean: "double check the proper spelling and case of the property name" ? Are all DOM element properties never in camelCase, because that:s what your howtojs solution implies?


***howtojs: warning: react::  each child in a list should have a unique "key" prop ; add a value to the key that will be unique for each child in your map() function***
### Warning: Each child in a list should have a unique "key" prop
* this happens when you did not specify a key for each element in a map() function

DM: todoMM: great, but the lines after the howtojs do not add any further information. Show an example of the fix here.
