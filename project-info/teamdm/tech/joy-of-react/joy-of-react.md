# Fix the converter game
a game that allows you to discover syntax errors in HTML files converted to JSX:

## HTML
```JS
<DIV class="hello-world">
    <h1 id="cool">Cool story</h1>
</DIV>
```
* JSX 
the DIV should be in lower case instead, and the class name should be className (these are two errors that you need to discover)

```JS 
<div className="hello-world">
    <h1 id="cool">Cool Story</h1>
</div>

## HTML

```js
<form style="background-color: red,">
    <label for="name">Your name:</label>
    <input type="text">
</form>
```
* JSX
As there are three errors, you need to add curly braces to the style, change the for attribute to htmlFor, and add a forward slash(/) to the the input tag
```js
<form style={{ backgroundColor: 'red' }}>
  <label htmlFor="name">Your name:</label>
  <input type="text" />
</form>

// DM: don't worry if I correct any of your little typos, it's normal part of code-reveiw