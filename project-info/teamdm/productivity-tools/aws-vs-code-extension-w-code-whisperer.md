
# conclusion
Code Whisperer and the entire extension is good, but an addional AI chat extension will be needed. TabNine has been a dissapointment, so I am investigating extensions that do only AI chat.

# about Code Whisperer
* not a ChatBot, there is no text input field where you write a prompt
	* the equivalent of a prompt is
		* write in comments what code you want to build
		* put cursor on the last line of the comments
		* Enter to see the suggested code
* can "turn off" auto-completions, so presumably wont interfere with other AI extensions
* takes entire codebase as context
* pros
  * knows how to code AWS tools
* cons
  * no chat; cannot prompt "fix errors in my code" 

# about AWS Toolkit for Visual Studio Code
* AI knows APIs to AWS services ex: S3 file storage
* 

# VSCode aws code whisperer setup
* disable t9 extension
* https://docs.aws.amazon.com/codewhisperer/latest/userguide/whisper-setup-indv-devs.html
  *  install VSCode extension AWS Toolkit for Visual Studio Code
  * follow instructions for VSCode
* check the AWS extension, may need reload
* click AWS icon in the leftmost activity bar 
* select Code Whisperer, Learn 
  * select JavaScript (not TypeTypeScript)
    * use the 5 "Try in JavaScript" buttons 
		* note:
      ```javascript
      // DM: on next line, had to Enter to see one line of suggested code
      //     then tab to accept that line, 
      //     then enter AGAIN to see entire function suggested
      // Function to upload a file to an S3 bucket.
      ```
    * note: ArrowRight|Left did not navigate alt suggestions, but rather made the suggestions not visible, as if I had hit escape
    * BECAUSE: "Trigger Amazon CodeWhisperer by positioning your cursor on a new line between the curly braces." EX:
		```js
    function myFunction() { // Enter after the { and then
      // when cursor is here, suggested code will now appear
    ```
  * lots of learning links here
* commands
  | Action                    | Shortcut            |
  | ------------------------- | ------------------- |
  | Accept                    | TAB                 |
  | Manual invoke             | alt+C               |
  | Navigate code suggestions | Left / Right Arrows |
  | Reject                    | Escape              |
* Learn Prompt Engineering; interesting items:
  * [context-is-taken-from-the-comment-and-code][context]
  * [CodeWhisperer for React][react]
    * "even without explicit prompts"
    * Exploring new libraries and languages (e.g., venturing into React for the first time)
    * Rapidly initiating the initial draft of new code
    * !!! Streamlining maintenance of existing code to match coding style
    * !!! Helping in code refactoring processes
    * Accelerating manual and repetitive tasks (e.g., documentation, test case creation)
    * Setup step - skip! NextJS already set up this way
    * [Example of good prompt to build an app][comments-as-prompt-example]
    * 



DM: tip: if you want to learn how to write a "reference to a URL" in Markdown, like the below, but you're time-boxing yourself for another task, you can put a "MM: todoMM: learn this" here. That way you can return to the current task immediately and later, when you have free time, search the repo on "MM: todoMM". 

[context]: https://catalog.us-east-1.prod.workshops.aws/workshops/6838a1a5-4516-4153-90ce-ac49ca8e1357/en-US/03-getting-started/03-02-prompts#example-6-context-is-taken-from-the-comment-and-code
[react]: https://catalog.us-east-1.prod.workshops.aws/workshops/6838a1a5-4516-4153-90ce-ac49ca8e1357/en-US/25-react
[comments-as-prompt-example]: https://catalog.us-east-1.prod.workshops.aws/workshops/6838a1a5-4516-4153-90ce-ac49ca8e1357/en-US/25-react/04-02-start-page



