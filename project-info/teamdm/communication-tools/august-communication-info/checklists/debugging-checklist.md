# debugging checklist
DM: this will be your debugging checklist. We can edit it together.

# blockers
* Moise, when you report a blocker, I'll expect you to have tried all the relevant items on this checklist and documented the result. That way I can understand EXACTLY where you got stuck and based on that, tailor my response so that you learn key This will help me help you, and it will help you when you come back to work on the bug.
* You're not truly "blocked" if you haven't "shot all the arrows in your quiver" (i.e., tried all the debugging checklist items that you can try). 
* !important: if you chose a stopping point because you ran out of time, don't call it a "blocker" just write "working on it, I'll continue tomorrow".(ok)

## Console.log all the things!
* any code you're blocked on should have thorough console.logs (so DM doesn't have to write them, and so DM sees what you've already been attempting to do and where you have already looked for errors).
- it is impossible to debug without console.logs
- DM wants to see console.logs for any code that you report as "blocked". This serves 2 purposes: 
  1) I know what you are considering and can oer alternatives and 
  2) 2) I don't have to write console.logs myself.
- best practice: comment out console.logs and just leave them there until the code is final.
### assign all expressions to variables so that you can log them; example:
* before:
```js
const convertFahrenheitToCelsius = (fahrenheit) => {
  return Math.round(((fahrenheit - 32) * 5) / 9)
}
```
* after: (assign each expression to a variable and log them all!)
```js
const convertFahrenheitToCelsius = (fahrenheit) => {
  console.log('convertFahrenheitToCelsius:', { fahrenheit })
  const celsius = ((fahrenheit - 32) * 5) / 9
  const celsiusRounded = Math.round(celsius)
  console.log('convertFahrenheitToCelsius:', { celsius, celsiusRounded })
  return celsiusRounded
}
```
### work your way backwards from the code that causes the error, console.logging variables as you go backwards
Follow the sequence of executed code backwards until you find incorrect variable values.

## pursue the clues in the error message
* google all (or part) of the error message if it is not immediately clear

## debug API Endpoints first, before debugging the client code that uses the API endpoint 
EX goto http://localhost:3005/api/weather?city=London and debug this code in src/pages/api/weatherAPI
EX goto https://api.openweathermap.org/data/2.5/weather?q=undefined&units=imperial&appid=abc and see what it returns


## assumptions: list your assumptions, then double-check any possible wrong assumptions

## get AI help
AI prompt: "suggest fixes to the code|[functionName] and explain what you think should be fixed"
note: AI chat in VSCode, when you say 'code' will inspect selected code, or if no code is selected, all the code in the currently open file. instead of 'code' you can also say 'functionName' to focus AI on a specific function.

# the debugging process

## time-box debugging so that other tasks don't get neglected
- stuck? 
  - take a short break and try again
    - OR work on another project then come back
    - OR try again tomorrow
  - the obvious may suddenly become clear!
# stopping point: pick the right stopping point: 
  * when there are no further clues
  * when you can't figure out intended meaning of the error message by googling/console.logging.
## document how you already tried to fix it, and where you left off
- example:
```js
/*
  tried so far:
  * issue: error message says xyz
    * I changed xyz to abc, but it did not solve the problem
    * I tried [something else] still same error message    
    * I did [something else] and the error message went away, but now I get a different error message
  * issue: error message now says zyx
    * I tried to ...
  * [write a note to yourself about what to try next, if you have to stop]
*/
```
* assumption here is that you've console.logged all the variables that are involved in the error message 

- documenting your debugging attempts is very important for
  - getting help from DM
  - knowing what to do next, when you come back to work on a bug
    - if a few days or weeks have passed, you might forget what you tried already.
- preserve original code and attempted changes (within reason) because it may be useful again
  - leave code unchanged, but commented out (so you can revert back if needed).
    - within reason, that is, use your judgement. Some attempts are an obvious 100% dead end, so you don't need to keep useless code around, so just put a note that you tried abc and abc did not work at all and why.


# programming tips to avoid bugs
* pay close attention to detail, especially with data values, names of function params and API params
* always copy and paste, don't type things manually, and you'll never make typos like leaving off the "s" in units


# lessons from specific projects

## debugging lessons from the weather API temperature 291 bug:
* it didn't help to guess ahead about city, it was the units param all along. Always best to carefully follow the sequence of executed code backwards until you find incorrect variable values
* you may have to rewrite some code in order to fully console.log all the things
* be very careful about typos, they will break stuff EX: unit=imperial VS units=imperial
* always copy and paste, don't type things manually, and you'll never make typos like leaving off the "s" in units
* little details matter: EX: when you wrote the new axios.get call, you forgot to include the units param.
* if you have a "previously it worked, but now it doesn't work situation, you can find the bug quickly by comparing previous to current code"
* today's debugging was not rocket science, it was methodically following the code backwards from the error until we found the temperature number was 291, obviously wrong. Then we looked at what the NextJS API endpoint was providing, and it was 291, so we know the problem was there. We logged the data returned from openweatherapp API and saw 291 there, so we knew the problem just be that we were providing the wrong params to the openweathermap API. Then you said "previously it worked", then we knew to compare current API call to previous API call to find the difference. 

