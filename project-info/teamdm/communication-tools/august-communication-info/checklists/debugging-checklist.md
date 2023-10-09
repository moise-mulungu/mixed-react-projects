# debugging checklist
DM: this will be your debugging checklist. We can edit it together.
DM: todoMM: read this carefully. I'll expect you to have done(ok)

## Console.log all the things!
* any code you're blocked on should have thorough console.logs (so DM doesn't have to write them, and so DM sees what you've already been attempting to do and where you have already looked for errors).
- it is impossible to debug without console.logs
- DM wants to see console.logs for any code that is unfinished.(ok) This serves 2 purposes: 1) I know what you are considering and can oer alternatives and 2) I don't have to write console.logs myself. You can comment out console.logs and just leave them there permanently.
## pursue the clues in the error message
* google all (or part) of the error message if it is not immediately clear
## assumptions: list them, then double-check any possible wrong assumptions;
## get AI help
AI prompt: "suggest fixes to the code|[functionName] and explain what you think should be fixed"
note: AI chat in VSCode, when you say 'code' will inspect selected code, or if no code is selected, all the code in the currently open file. instead of 'code' you can also say 'functionName' to focus AI on a specific function.

# debugging process

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
  * [write a note to yourself about what to try next]
*/
```
- documenting your debugging attempts is very important for
  - getting help from DM
  - knowing what to do next, when you come back to work on a bug
    - if a few days or weeks have passed, you might forget what you tried already.
- preserve original code and attempted changes (within reason) because it may be useful again
  - leave code unchanged, but commented out (so you can revert back if needed).
    - within reason, that is, use your judgement. Some attempts are an obvious 100% dead end, so you don't need to keep useless code around, so just put a note that you tried abc and abc did not work at all and why.

DM: todoMM: checklist items are for general approaches that you can use for any debugging issue, not stuff specific to one app. This belongs in the weather.js file, not here.
## AI Prompt: fix the code Weather function
- i asked the AI prompt to fix fix the code Weather function
- the AI prompt corrected the code by :
- removing all the comments
- converting the first nested children of the weather object into an array
- then returned that array by trying to access the properties of the first children, but the AI prompt did not resolve it.