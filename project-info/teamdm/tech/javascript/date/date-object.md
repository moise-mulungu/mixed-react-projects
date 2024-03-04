<!-- howtojs:: date object: how to create a new date object; const currentDate = Date.new() -->

# Date()
- JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC. src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
- In JavaScript, the Date object is used to work with dates and times. It allows you to create, manipulate, and format dates in various ways. src: AI Sider


## date methods
The Date object provides various methods to work with dates and times:
```js
- getFullYear(); // Year
- getMonth(); // Months of the year
- getDate(); // Date of month
- getDay(); // Day of the week
- getHours(); // Hours of the day
```

## timestamp
The Date object also allows you to work with timestamps, which are represented as the number of milliseconds since January 1, 1970, 00:00:00 UTC (known as the Unix Epoch).

```js
const currentDate = Date.now();
const timestamp = currentDate.getTime(); // Returns the timestamp in milliseconds
```

<!-- howtojs:: format a date object to something like string, json; to format the date object to string or json, you need to :
  1. create a new Date object to work with dates
  2. Call the toFooString() method on the Date object to get a string representing the time portion. 
-->
## Formatting Dates 
You can format dates in different ways using methods like **toLocaleString(), toDateString(), toTimeString()**, and more. Additionally, libraries like Moment.js can help with more advanced date formatting needs. there are others like **toUTCString(), toISOString(), toJSON(), toGMTString()**.


DM: nice!

DM: todoMM: take 30 minutes to write two functions for utils in src/utils/date/parse-date-string.js and src/utils/date/format-date-string.js. Ask Copilot AI Chat (not Sider) to help you - use the "chat" icon in the very left of vscode window: use the "+" icon to start a new chat and tell it what you want. EX: "write me a function to parse a date string into a JS date object (use named parameters)", then "update the function to throw an error when it cannot parse the date string", then "add a usage example in a multiline comment above the function", then "write some test code, not Jest, just vanilla JS"
* why: date practice, practice using AI, SOLID Dependency Inversion Principle, practice writing re-usable code to utilities. 
* for formatDateString: "write a function to format a date object into a date string called formatDateString. use named parameters and provide default values for locale and options".
  * once you've written formatDateString I'll discuss how to adjust it to be more simple and versatile than vanilla JS allows.