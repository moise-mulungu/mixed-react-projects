
# howtoreact: error message: No children were passed to <Link> with `href` of `/` but one child is required
```js
// Link was used like this:
<Link />
// when it should be used like this
<Link>link text</Link>
// 'link text' being the only value in the React 'children' prop
```


// DM: Moise, the purpose of "howtoreact: error message::" below is so that you can quickly search your repo. For example, in the global search panel (Regex search): "howtoreact.*error.*Objects are not valid as a React child"
# howtoreact: error message:: Error: Objects are not valid as a React child (found: object with keys {id, title, description, image, url, stacks}). If you meant to render a collection of children, use an array instead.
* there is an *object* with *keys* {id, title, description, image, url, stacks} somewhere in the JSX
```JSX
<>{myObject}</>
```
* this is one of those errors that doesn't tell you which component/file is causing the problem. So, when you first see it, the last place you edited is the likely suspect. 

## example:
```JS
<ul>
	{projectCards.map((id, title, description, image, url, stacks) => {
		/* is contains the entire object (hence the error), the others are undefined */
	}
  // projectCards is an array of objects, so in order to destructure an object:
	{projectCards.map(({ id, title, description, image, url, stacks }) => {}
```