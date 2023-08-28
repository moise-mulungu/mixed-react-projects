# debugging

- !!! Console.log all the things!
- pursue the clues in the error message
- time-box debugging; 
  - double-check any possible wrong assumptions; 
  - see project-info/teamdm/communication-tools/august-communication-info/daily/templates.md "blocker/debugging checklist" 
  - take a short break OR try again tomorrow. The obvious may suddenly become clear
- document how you already tried to fix it, and where you left off
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
