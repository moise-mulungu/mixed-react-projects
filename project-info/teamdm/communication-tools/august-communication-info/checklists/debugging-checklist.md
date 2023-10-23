DM: this will be your debugging checklist. We can edit it together.

(done)DM: read this note on blockers again, as your Friday work is relying only on AI queries. I specifically mentioned in the Thursday review that asking AI is only one part of the debugging process. If all you did was ask AI, but you didn't do the other stuff in the debugging checklist, you are not truly blocked.
# note on blockers
* When you report a blocker, I'll expect you to have tried all the relevant items on this checklist and documented the result. That way I can understand EXACTLY where you got stuck and based on that, tailor my response so that you learn key This will help me help you, and it will help you when you come back to work on the bug.
* You're not truly "blocked" if you haven't "shot all the arrows in your quiver" (i.e., tried all the debugging checklist items that you can try). 
* !important: if you chose a stopping point because you ran out of time, don't call it a "blocker" just write "working on it, I'll continue tomorrow".

DM: todoMM: reread, as I have moved everything around in order to show in which order to try these debugging techniques.

# ------------------------------------------------------------
# ------------------------------------------------------------
# debugging checklist; listed IN THE ORDER one should try them 
# ------------------------------------------------------------
# ------------------------------------------------------------
note: the order is good for many, but not ALL bugs. Sometimes you can go directly to a specific technique

# ------------------------------------------------------------
## 0. describe the bug 
# ------------------------------------------------------------

### 0.1. describe the impact on the app 

# ------------------------------------------------------------
## 1. pursue the clues in the error message
# ------------------------------------------------------------

* google all (or part) of the error message if it is not immediately clear
  * and/or ask AI if the meaning of the error message is unfamiliar
* if there is an error object (from a catch block)
  * console.log the error object in the catch block. Error objects are huge messes, so try to find the most relevant information, such as:
    * error.message
    * error.cause
    * error.config

# ------------------------------------------------------------
## 2. Console.log all the things!
# ------------------------------------------------------------
* any code you're blocked on should have thorough console.logs (so your code reviewer doesn't have to write them, and so he sees what you've already been attempting to do and where you have already looked for errors).
- it is impossible to debug without console.logs
- use console.logs for any code that you report as "blocked". This serves 2 purposes: 
  1) I know what you have been debugging and can offer alternatives, suggestions
  2) I don't have to write console.logs myself
- best practice: comment out console.logs and just leave them there until the code is final.

### 2.1. Console.log all the things! Assign all expressions to variables so that you can log them. Example:
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

### 2.2. work your way backwards from the code that causes the error, console.logging variables as you go backwards
Follow the sequence of executed code backwards (in the order of execution) until you find incorrect variable values that explain the bug.

# ------------------------------------------------------------
## 3. "AI coding assistant" may help (using the AI coding assistant in your IDE: TabNine or Github Copilot)
# ------------------------------------------------------------
example AI prompt: "suggest fixes to the code|[functionName] and explain what you think should be fixed"
* this assumes you are using TabNine (T9) or Github Copilot (copilot) AI coding assistant, and therefore the AI coding assistant knows which code you are referring to. note: with T9/copilot AI chat in VSCode, when you say 'code' will inspect selected code, or if no code is selected, all the code in the currently open file. 
  * DM: unsure about this: instead of 'code' you can also say 'functionName' to focus AI on a specific function.


# ------------------------------------------------------------
# ------------------------------------------------------------
# keep in mind during the entire debugging process
# ------------------------------------------------------------
# ------------------------------------------------------------

## debug API Endpoints first, before debugging the client code that uses the API endpoint 
EX goto http://localhost:3005/api/weather?city=London and debug this code in src/pages/api/weatherAPI
EX goto https://api.openweathermap.org/data/2.5/weather?q=undefined&units=imperial&appid=abc and see what it returns

## "AI Chat" is always OK to ask to clarify something specific such as an unfamiliar term, an error type. 
* the more specific the question, the more helpful AI is. 
  * always keep context in mind. EX sometimes (GitHub Copilot) AI Chat doesn't seem to be referencing other files in the codebase, sometimes it does.
  * if AI doesn't have the correct context, it may give you bad answers, wrong answers, and even hallucinate (invent BS that sounds good)
* note: think carefully about the context AI is in, and what it can know about your problem
* prefer the AI Chat included in the browser plugin, BUT, if you use ChatGPT (chat.OpenAI.com) or Sider AI (ChatGPT under the hood) ask very, very specific questions, because it doesn't have access to your codebase like Copilot does.

## assumptions: be skeptical about your assumptions: list your assumptions, then double-check any possible wrong assumptions
* wrong assumptions can take you in the wrong direction, wasting time

## big picture: keep the big picture in mind, and don't get so lost in the details that you focus on unimportant things
* What are you trying to solve?

## places to look for error messages and clues
* browser developer tools - __console tab__ (for code stemming from "client-side code", i.e., src/pages routes) bump
  * your console.logs
  * errors and warnings
* browser developer tools __network tab__ to see
  * what API calls are being made by your client code
  * what the response (or error) is
  * note: after you open the network tab, perform the actions that cause the bug 
  * you'll see the API calls 
    * click on the name column
    * click on the "Headers" tab and look at URL and Status Code 
      * Status Code: Google the "http status code" EX: 500 means "internal server error" which means the server code is broken, not your code. EX: 404 means "not found" which means you are calling a wrong/non-existent API endpoint. 
      * URL: if the URL is wrong you'll get a 404 error. Or, if the query parameters are wrong, you'll get a 500 error (sometimes you get a 200 (success) and the error is described in the JSON response)
  * click on the "Response" tab and see what data/info the server is sending back to you
  * explore the network tab - there is a lot to click on and explore
* __VSCode terminal__ where "npm run dev" is running (for code stemming from "server-side code", i.e., src/pages/api routes) bump
  * your console.logs 
  * errors and warnings
* __previous code that worked__ (if you have it)
  * compare previous code to current code to find the difference
  * commenting out previous code instead of deleting it is helpful (but you can use Git to compare to previous code, so commit often)
* __read documentation__ - read the documentation for the npm package or the API you are using
  * before you wade in to a manual (often written poorly) be sure you've looked _first_ in the other places listed above for obvious errors 


# -----------------------------
# -----------------------------
# the overall debugging process
# -----------------------------
# -----------------------------

## time-box debugging so that other tasks don't get neglected
- stuck? 
  - take a short break and try again
    - OR work on another project then come back
    - OR try again tomorrow
  - the obvious may suddenly become clear!
## stopping point: pick the right stopping point: 
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

# -----------------------------
# -----------------------------
# programming tips to avoid bugs
# -----------------------------
# -----------------------------

* pay close attention to detail, especially with data values, names of function params and API params
* always copy and paste data, strings, etc.; don't type things manually; that way you'll never make typos like leaving off the "s" in units

# -----------------------------
# -----------------------------
# lessons from specific projects
# -----------------------------
# -----------------------------

## debugging lessons from the weather API temperature 291 bug:
* it didn't help to guess ahead about city, it was the units param all along. Always best to carefully follow the sequence of executed code backwards until you find incorrect variable values, then follow those values backwards until you find the source of the incorrect value.
* you may have to rewrite some code in order to fully console.log all the things
* be very careful about typos, they will break stuff EX: unit=imperial VS units=imperial
* always copy and paste, don't type things manually, and you'll never make typos like leaving off the "s" in units
* little details matter: EX: when you wrote the new axios.get call, you forgot to include the units param.
* if you have a "previously it worked, but now it doesn't work situation, you can find the bug quickly by comparing previous to current code"
* today's debugging was not rocket science, it was methodically following the code backwards from the error until we found the temperature number was 291, obviously wrong. Then we looked at what the NextJS API endpoint was providing, and it was 291, so we know the problem was there. We logged the data returned from openweatherapp API and saw 291 there, so we knew the problem just be that we were providing the wrong params to the openweathermap API. Then you said "previously it worked", then we knew to compare current API call to previous API call to find the difference. 

