# howtoreact:: Error: Hydration failed because the initial UI does not match what was rendered on the server.
* check the error console, there are hints there
* examples

## example
console error: next-dev.js?3515:25 Warning: Expected server HTML to contain a matching <li> in <div>.
    at li
    at div
    at li
    at ul
    at div
    at ProjectCard
    at section
    at Content (webpack-internal:///./src/features/portfolio/content/index.jsx:20:22)
* howto debug: comment out lines until the error disappears, then you know which lines caused it
  * comment out: ```return <li key={stack}>{stack}</li>```
* problem: the inner LIs are not inside a UL 
```js
      <ul>
        {projectCards.map(({ title, description, image, url, stacks }) => {
          return (
            <li key={title}>
/* ... */
              <div>
                {stacks?.map((stack) => {
                  return <li key={stack}>{stack}</li>
                })}
              </div>
              // i am getting undefined whe trying to map through stacks
            </li>
          )
        })}
      </ul>
    </div>
```
