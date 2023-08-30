# commit-time (before you commit)

- view: "vs code "source control" changes" showing all changes since last commit
- comment lines - always add initials when adding to a comment line
  - // DM: hey, Mr. Moise, do this and that. MM: I did that and the other
  - // MM: moise's comments
- are all "DM: " comments addressed?
  - info only: (ok)
  - others:
    - (in progress: state what is the status)
    - (done) - make sure the task is complete
    - (blocked: how blocked? Error messages? What you tried so far?)
- best practices - ensure all are followed:
  - default export function name matches filename, or directory name
  - if file is in a directory, the main file or only file, file is named index.js
  - one exported function per file (I'll show you exceptions later, when the subject naturally arises)
  - UI: usability (ex: easy to see what is a button or input field)
  - clear, readable, exact variable names
  - add comments if new code is not intuitive
- npm run dev must work. Don't commit a broken app. Also, don't leave any major/large parts of the site broken. It's ok to have small parts broken, if you are currently working on them.(ok)
- JS scripts always have "node relative/path/to/file.js" so that I can copy and paste in order to run the script
- record tasks completed and hours worked in ../daily/yyyy-mm-dd.md
  - add enough detail so I can get a feel for what you're doing during the hours you report. This is important because of the following reasons I've personally observed at work;
    1. The boss always needs to have good sense of what you're doing because: he can know where you are fast and where you are slow (indicating you need some work on the areas you are slow). 
    2. boss needs to be able to know for himself, and tell his boss that yes, you are indispensable to the team. I literally lost a job once because I stopped making sure my boss was really clear about what I did and my value.
- remove unnecessary console.logs (use judgement about which are temporary and which can be left commented out because they are useful in the future)

