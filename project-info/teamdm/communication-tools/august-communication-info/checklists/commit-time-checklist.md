# commit-time (before you commit)

- view: "vs code "source control" changes" showing all changes since last commit
- comment lines - always add initials when adding to a comment line
  - // DM: hey, Mr. Moise, do this and that. MM: I did that and the other
  - // MM: moise's comments
- are all new "DM: todoMM:" comments addressed?
    - (in progress: state what is the status)
    - (done) - make sure the task is complete
    - (blocked: how blocked? Error messages? What you tried so far?)
- "DM: " comments: put (ok) or some other response. (This helps because I may want to remove it if it doesn't need to be in the repo permanently.)
- best practices - ensure all are followed:
  - default export function name matches filename, or directory name !important
  - if file is in a directory, the main file or only file, file is named index.js !important
  - one "default export" function per file; non-default exports are fine, but consider putting these functions in separate files if they become numerous.
  - assign all expressions to a variable
    - so that it can be easily logged 
    - a good variable name is self-documenting, more readable
    - EX: const convertedString = camelCase('myPascalCase')
  - UI: usability (ex: easy to see what is a button or input field) 
    - don't format much at the beginning of a project until you know for sure you will keep the UI permanently 
    - easiest solution: put each thing in a DIV so that each thing is on its own line; this solves the problem of margins touching 
    - consider using shared components in src/ui/form/button is an example
    - EX: 2023-10-03 I really couldn't understand the top part of your weather app. it is too messy
  - clear, readable, exact variable names !important; 
    - check them at commit time to see if you can think of a better name; 
    - you cn ask AI to suggest variable names based on your description of the variable contents.
  - add comments if new code is not intuitive
- npm run dev must work. Don't commit a broken app. Also, don't leave any major/large parts of the site broken. It's ok to have small parts broken, if you are currently working on them and you've left documentation about the bug in the affected file.
- record tasks completed and hours worked in ../daily/yyyy-mm-dd.md
  - add enough detail so I can get a feel for what you're doing during the hours you report. This is important because of the following reasons I've personally observed at work;
    1. The boss always needs to have good sense of what you're doing because: he can know where you are fast and where you are slow (indicating you need some work on the areas you are slow). 
    2. boss needs to be able to know for himself, and tell his boss that yes, you are indispensable to the team. I literally lost a job once because I stopped making sure my boss was really clear about what I did and my value.
    - the "enough detail" can be in the form of new code, or comments in the code (about debugging attempts, for example)
    - links, info are often more useful for me, and in the future, if they are "inline" with the code
- remove unnecessary console.logs (use judgement about which are temporary and which can be left commented out because they are useful in the future)
- check UI and text all functionality before committing
- test all app URLS for which code was edited in this commit

DM: these are important to ensure I'm not losing time fixing things such as "default export function name matches filename, or directory name"(very informative!!!)